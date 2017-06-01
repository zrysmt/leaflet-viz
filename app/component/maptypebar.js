import '../common/css/mapbox-gl.css';

import L from 'leaflet';

// 在initMapbox中，也可以不用这个小插件
import '../common/leaflet-plugin/leaflet-mapbox-gl.js'; 

// import mapboxgl from 'mapbox-gl';//在../common/leaflet-plugin/leaflet-mapbox-gl.js中引入

import projzh from 'projzh';

import '../common/leaflet-plugin/leaflet.ChineseTmsProviders.js'; //源码上有修改
// import '../common/plugin/proj4leaflet.js';
import '../common/baiduMapAPI-2.0-min.js';

import '../common/plugin/leaflet.baidu.js';
import "../common/tile.stamen.js";

import { map, osm, editableLayers, drawnItems } from './basemap.js';
let gLayer = {};

class Maptypebar {
    init() {
        map.on('baselayerchange', function(e) {
            if (e.name.indexOf("百度地图") !== -1) {
                // map.options.crs = L.CRS.EPSGB3857;
                //百度地图的时候转化中心坐标
                /*let ll = [map.getCenter().lng,map.getCenter().lat];
                let baiduMercator = projzh.ll2bmerc(ll);
                let center = L.latLng(baiduMercator[1],baiduMercator[0]);
                console.info(map.getCenter(),ll,baiduMercator,center);
                map.setView(center);*/
            } else {
                // map.options.crs = L.CRS.EPSG3857;
            }
            /*map.eachLayer(function(layer) {
                console.log("layer:", layer);
            })*/
        })
        this.initTianDitu();
        this.initGaode();
        this.initGeoq();
        this.initMapbox();
        this.initSomeCoolMap();
        this.googleImage = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
            attribution: 'google'
        });
        this.googleNormal = L.tileLayer.chinaProvider('Google.Normal.Map', {
            maxZoom: 18,
            minZoom: 1
        });
      
        this.baiduNormal = new L.TileLayer.BaiduLayer("Normal.Map");
        this.baiduImage = new L.TileLayer.BaiduLayer("Satellite.Map");
        this.baiduRoad = new L.TileLayer.BaiduLayer("Satellite.Road");
        this.baiduStellite = L.layerGroup([this.baiduImage,this.baiduRoad] );
        let baseLayers = {
            'OpenStreetMap': osm.addTo(map),
            "Google地图": this.googleNormal,
            "Google卫星": this.googleImage,
            "天地图": this.tianDituLayersNormal,
            "天地图影像": this.tianDituLayersImage,
            "高德地图": this.gaodeLayersNormal,
            "高德地图影像": this.gaodeLayersImage,
            "百度地图": this.baiduNormal,
            "百度卫星地图": this.baiduStellite,
            "Geoq地图": this.normalm1,
            "Geoq多彩": this.normalm2,
            "Geoq午夜蓝": this.normalm3,
            "Geoq灰色": this.normalm4,
            "Geoq暖色": this.normalm5,
            "Geoq冷色": this.normalm6,
            "Mapbox darkV9":this.darkV9,
            "Mapbox trafficNight":this.trafficNight,
            "Mapbox satellite":this.satellite,
            '黑白图': this.tonerLayer,
            '地形图': this.terrainLayer,
            '水域图': this.watercolorLayer,
            '地震图': this.prccEarthquakesLayer
        };
        // Object.assign(baseLayers,this.geoqLayers);

        this.baseLayers = baseLayers;
        L.control.layers(baseLayers, { '天地图标注':this.tianDituLayersAnno ,'绘制图层': drawnItems }, { position: 'topleft', collapsed: true }).addTo(map);

    }
    initTianDitu() {
        let normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
                maxZoom: 18,
                minZoom: 1
            }),
            normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
                maxZoom: 18,
                minZoom: 1
            }),
            imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
                maxZoom: 18,
                minZoom: 1
            }),
            imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
                maxZoom: 18,
                minZoom: 1
            });

        let normal = L.layerGroup([normalm, normala]),
            image = L.layerGroup([imgm, imga]);

        let tianDituLayers = {
            "天地图": normal,
            "天地图影像": image,
        }
        this.tianDituLayers = tianDituLayers;
        this.tianDituLayersNormal = normal;
        this.tianDituLayersAnno = normala;
        this.tianDituLayersImage = image;
        // L.control.layers(tianDituLayers).addTo(map);
    }
    initGaode() {
        let normalm = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
            maxZoom: 18,
            minZoom: 1
        });
        let imgm = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
            maxZoom: 18,
            minZoom: 1
        });
        let imga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
            maxZoom: 18,
            minZoom: 1
        });

        let normal = L.layerGroup([normalm]),
            image = L.layerGroup([imgm, imga]);

        let gaodeLayers = {
            "高德地图": normal,
            "高德地图影像": image,
        }
        this.gaodeLayers = gaodeLayers;
        this.gaodeLayersNormal = normal;
        this.gaodeLayersImage = image;
        // L.control.layers(gaodeLayers).addTo(map);
    }
    initGeoq() {
        let normalm1 = L.tileLayer.chinaProvider('Geoq.Normal.Map', {
            maxZoom: 18,
            minZoom: 1
        });
        let normalm2 = L.tileLayer.chinaProvider('Geoq.Normal.Color', {
            maxZoom: 18,
            minZoom: 1
        });
        let normalm3 = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
            maxZoom: 18,
            minZoom: 1
        });
        let normalm4 = L.tileLayer.chinaProvider('Geoq.Normal.Gray', {
            maxZoom: 18,
            minZoom: 1
        });
        let normalm5 = L.tileLayer.chinaProvider('Geoq.Normal.Warm', {
            maxZoom: 18,
            minZoom: 1
        });
        let normalm6 = L.tileLayer.chinaProvider('Geoq.Normal.Cold', {
            maxZoom: 18,
            minZoom: 1
        });

        let normal = L.layerGroup([normalm1, normalm2, normalm3, normalm4, normalm5, normalm6]);
        this.normalm1 = normalm1;
        this.normalm2 = normalm2;
        this.normalm3 = normalm3;
        this.normalm4 = normalm4;
        this.normalm5 = normalm5;
        this.normalm6 = normalm6;
        let geoqLayers = {
            "Geoq地图": normalm1,
            "Geoq多彩": normalm2,
            "Geoq午夜蓝": normalm3,
            "Geoq灰色": normalm4,
            "Geoq暖色": normalm5,
            "Geoq冷色": normalm6
        }

        this.geoqLayers = geoqLayers;

        // L.control.layers(geoqLayers ,{}, { position: 'topleft', collapsed: false }).addTo(map);

    }
    initMapbox(){
        const token = "pk.eyJ1IjoidGVjaGZlIiwiYSI6ImNqMHVrMmt1cDA0Y2czMm10dWlsb3UzcmEifQ.B28sl4Ds0bQKD706bgdzUg";
        let darkV9 = L.mapboxGL({
            accessToken: token,
            style: 'mapbox://styles/mapbox/dark-v9'
        })
        this.darkV9 = darkV9;
        //也可以不用插件leaflet-mapbox-gl.js
        //https://www.mapbox.com/studio/styles/mapbox/traffic-night-v2/share/
        let trafficNight =  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/traffic-night-v2/tiles/256/{z}/{x}/{y}?access_token='+token);
        this.trafficNight = trafficNight;
        let satellite =  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token='+token);
        this.satellite = satellite;

    }
    initSomeCoolMap() {
        /*if(this.baseLayers) map.removeLayer(this.baseLayers);
        if(this.geoqLayers) map.removeLayer(this.geoqLayers);*/

        let tonerLayer = new L.StamenTileLayer('toner', {
            detectRetina: true
        });
        let terrainLayer = new L.StamenTileLayer('terrain');
        let watercolorLayer = new L.StamenTileLayer('watercolor');

        // baseLayer.addTo(map);

        let prccEarthquakesLayer = L.tileLayer('http://{s}.tiles.mapbox.com/v3/bclc-apec.map-rslgvy56/{z}/{x}/{y}.png', {
            attribution: 'Map &copy; Pacific Rim Coordination Center (PRCC).  Certain data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        });
        let coolLayer = {
            '黑白图': tonerLayer,
            '地形图': terrainLayer,
            '水域图': watercolorLayer,
            '地震图': prccEarthquakesLayer
        };
        this.coolLayer = coolLayer;
        gLayer.coolLayer = coolLayer;
        this.tonerLayer = tonerLayer;
        this.terrainLayer = terrainLayer;
        this.watercolorLayer = watercolorLayer;
        this.prccEarthquakesLayer = prccEarthquakesLayer;
        /*let layerControl = new L.Control.Layers(coolLayer,null,{ position: 'topleft', collapsed: false });

        layerControl.addTo(map);*/
    }
}

export { Maptypebar, gLayer };
