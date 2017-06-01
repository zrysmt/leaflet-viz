/**
 * Projection class for Baidu Spherical Mercator
 *
 * @class BaiduSphericalMercator
 */
L.Projection.BaiduSphericalMercator = {
    /**
     * Project latLng to point coordinate
     *
     * @method project
     * @param {Object} latLng coordinate for a point on earth
     * @return {Object} leafletPoint point coordinate of L.Point
     */
    project: function(latLng) {
        var projection = new BMap.MercatorProjection();
        var originalPoint = new BMap.Point(latLng.lng, latLng.lat);
        //var baiduPoint = window.translatePoint(originalPoint);
        var point = projection.lngLatToPoint(originalPoint);
        var leafletPoint = new L.Point(point.x, point.y);
        return leafletPoint;
    },

    /**
     * unproject point coordinate to latLng
     *
     * @method unproject
     * @param {Object} bpoint baidu point coordinate
     * @return {Object} latitude and longitude
     */
    unproject: function (bpoint) {
        var projection= new BMap.MercatorProjection();
        var point = projection.pointToLngLat(
            new BMap.Pixel(bpoint.x, bpoint.y)
        );
        var latLng = new L.LatLng(point.lat, point.lng);
        return latLng;
    },

    /**
     * Don't know how it used currently.
     *
     * However, I guess this is the range of coordinate.
     * Range of pixel coordinate is gotten from
     * BMap.MercatorProjection.lngLatToPoint(180, -90) and (180, 90)
     * After getting max min value of pixel coordinate, use
     * pointToLngLat() get the max lat and Lng.
     */
    bounds: (function () {
        var MAX_X= 20037726.37;
        var MIN_Y= -11708041.66;
        var MAX_Y= 12474104.17;
        var bounds = L.bounds(
            [-MAX_X, MIN_Y], //-180, -71.988531
            [MAX_X, MAX_Y]  //180, 74.000022
        );
        var MAX = 33554432;
        bounds = new L.Bounds(
            [-MAX, -MAX],
            [MAX, MAX]
        );
        return bounds;
    })()
};

/**
 * Coordinate system for Baidu EPSGB3857
 *
 * @class EPSGB3857
 */
L.CRS.EPSGB3857 = L.extend({}, L.CRS, {
    code: 'EPSG:B3857',
    projection: L.Projection.BaiduSphericalMercator,

    transformation: (function () {
        var z = -18 - 8;
        var scale = Math.pow(2, z);
        return new L.Transformation(scale, 0.5, -scale, 0.5);
    }())
});

/**
 * Tile layer for Baidu Map
 *
 * @class BaiduLayer
 */
L.TileLayer.BaiduLayer = L.TileLayer.extend({
    statics: {
        attribution: '© 2014 Baidu - GS(2012)6003;- Data © <a target="_blank" href="http://www.navinfo.com/">NavInfo</a> & <a target="_blank" href="http://www.cennavi.com.cn/">CenNavi</a> & <a target="_blank" href="http://www.365ditu.com/">DaoDaoTong</a>'
    },

    options: {
        minZoom: 3,
        maxZoom: 19
    },

    initialize: function (type, options) {
        var desc = L.TileLayer.BaiduLayer.desc;
        type = type || 'Normal.Map';
        var parts = type.split('.');
        var mapName = parts[0],
            mapType = parts[1],
            mapStyle = parts[2];
        var url = desc[mapName][mapType];
        if(mapName === 'CustomStyle') {
          if(mapStyle) {
            url = url+'&customid='+mapStyle;
          }else if(options.styles) {
            url = url+'&styles='+options.styles;
          }
        }
        options = options || {};
        options.subdomains = desc[mapName].subdomains || desc.subdomains;
        options.attribution = L.TileLayer.BaiduLayer.attribution;
        L.TileLayer.prototype.initialize.call(this, url, options);
    },

    getTileUrl: function (coords) {
        var offset = Math.pow(2, coords.z - 1),
            x = coords.x - offset,
            y = offset - coords.y - 1,
            baiduCoords = L.point(x, y);
        baiduCoords.z = coords.z;
        return L.TileLayer.prototype.getTileUrl.call(this, baiduCoords);
    }
});

L.TileLayer.BaiduLayer.desc = {
    Normal: {
        Map: 'http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl'
    },
    Satellite: {
        Map: 'http://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
        Road: 'http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl'
    },
    CustomStyle: {
      Map: 'http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}',
      subdomains: '012'
    },
    subdomains: '0123456789'
};

L.tileLayer.baiduLayer = function (type, options) {
    return new L.TileLayer.BaiduLayer(type, options);
};