/**
 * 面积量算
 * 依赖 leaflet-draw(包括js和css)
 * by zry
 * @Date 2017-04-19
 */
import L from 'leaflet';
import draw from 'leaflet-draw'; //矢量画图工具
import '../css/leaflet.draw.css';
import './measureAreaControl.css';

L.Polygon.Measure = L.Draw.Polygon.extend({
    options: {
        showArea: true,
        shapeOptions: {
            stroke: true,
            color: '#ff0000',
            weight: 4,
            opacity: 0.5,
            fill: true,
            fillColor: null, //same as color by default
            fillOpacity: 0.2,
            clickable: true
        },
        metric: true // Whether to use the metric measurement system or imperial
    },
    addHooks: function() {
        L.Draw.Polyline.prototype.addHooks.call(this);
        if (this._map) {
            this._markerGroup = new L.LayerGroup();
            this._map.addLayer(this._markerGroup);

            this._markers = [];
            this._bindAreaDrawListener();
        }
    },
    removeHooks: function() {
        L.Draw.Polyline.prototype.removeHooks.call(this);

        this._clearHideErrorTimeout();

        this._clearGuides();
        this._container.style.cursor = '';
        this._unbindAreaDrawListener();
    },
    _bindAreaDrawListener:function(){
        this._map.on(L.Draw.Event.CREATED, function(e) {
            this._showArea(e);
        },this);
    },
    _unbindAreaDrawListener:function(){
        this._map.off(L.Draw.Event.CREATED, function(e) {
            this._showArea(e);
        },this);
    },
    _showArea:function(e){
        var self = this;
        var type = e.layerType,
                layer = e.layer;
                window.ee =e;
            if (type === 'rectangle' || type === 'polygon') {
                if(!e.layer._latlngs) return;
                var pos =  e.layer._latlngs[0] ;
                var area = L.GeometryUtil.readableArea(L.GeometryUtil.geodesicArea(pos),this.options.metric);
                console.log("area:",area);
                /*var tooltip = L.marker(pos[pos.length-1].lat,pos[pos.length-1].lng)
                    .bindTooltip("hello").openTooltip();*/
                var popup = L.popup()
                    .setLatLng(pos[0])
                    .setContent('<p>' + "面积："+area + '</p>')
                    .openOn(self._map);
            }
    },
    _getTooltipText: function() {
        var text, subtext;

        if (this._markers.length === 0) {
            text = "开始"||L.drawLocal.draw.handlers.polygon.tooltip.start;
        } else if (this._markers.length < 3) {
            text = "继续点击"||L.drawLocal.draw.handlers.polygon.tooltip.cont;
        } else {
            text = "双击结束"||L.drawLocal.draw.handlers.polygon.tooltip.end;
            subtext = "";
        }

        return {
            text: text,
        }
    },
});

L.Control.MeasureAreaControl = L.Control.extend({

    statics: {
        TITLE: '测量面积'
    },
    options: {
        position: 'topleft',
        handler: {},
        showArea: true
    },

    toggle: function() {
        if (this.handler.enabled()) {
            this.handler.disable.call(this.handler);
        } else {
            this.handler.enable.call(this.handler);
        }
    },
    //addTo(map) -->onAdd(map)
    onAdd: function(map) {
        var link = null;
        var className = 'leaflet-control-draw';

        this._container = L.DomUtil.create('div', 'leaflet-bar');

        this.handler = new L.Polygon.Measure(map, this.options);

        this.handler.on('enabled', function() {
            this.enabled = true;
            L.DomUtil.addClass(this._container, 'enabled');
        }, this);

        this.handler.on('disabled', function() {
            delete this.enabled;
            L.DomUtil.removeClass(this._container, 'enabled');
        }, this);

        link = L.DomUtil.create('a', className + '-measure-area', this._container);
        link.href = '#';
        link.title = L.Control.MeasureAreaControl.TITLE;

        L.DomEvent
            .addListener(link, 'click', L.DomEvent.stopPropagation)
            .addListener(link, 'click', L.DomEvent.preventDefault)
            .addListener(link, 'click', this.toggle, this);

        console.log("this.handler:", this.handler);
        return this._container;
    }
});


L.Map.mergeOptions({
    measureAreaControl: false
});

/**
 * 如果配置中有measureAreaControl的话
 * 例如：var map = L.map('map', {measureAreaControl:true});
 */
L.Map.addInitHook(function() {
    if (this.options.measureAreaControl) {
        this.measureAreaControl = L.Control.measureAreaControl().addTo(this);
    }
});


L.control.measureAreaControl = function(options) {
    return new L.Control.MeasureAreaControl(options);
};

export default L.control.measureAreaControl;
