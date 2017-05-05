 /**
  * 距离量算
  * 修改参考：https://github.com/makinacorpus/Leaflet.MeasureControl
  * 依赖 leaflet-draw(包括js和css)
  * by zry
  * @Date 2017-04-05
  */
import L from 'leaflet';
import draw from 'leaflet-draw';//矢量画图工具
import '../css/leaflet.draw.css';
import './measureControl.css';

L.Polyline.Measure = L.Draw.Polyline.extend({
    addHooks: function() {
        L.Draw.Polyline.prototype.addHooks.call(this);
        if (this._map) {
            this._markerGroup = new L.LayerGroup();
            this._map.addLayer(this._markerGroup);

            this._markers = [];
            this._map.on('click', this._onClick, this);
            this._startShape();
        }
    },

    removeHooks: function() {
        L.Draw.Polyline.prototype.removeHooks.call(this);

        this._clearHideErrorTimeout();

        // !\ Still useful when control is disabled before any drawing (refactor needed?)
        this._map
            .off('pointermove', this._onMouseMove, this)
            .off('mousemove', this._onMouseMove, this)
            .off('click', this._onClick, this);

        this._clearGuides();
        this._container.style.cursor = '';

        this._removeShape();
    },

    _startShape: function() {
        this._drawing = true;
        this._poly = new L.Polyline([], this.options.shapeOptions);
        // this is added as a placeholder, if leaflet doesn't recieve
        // this when the tool is turned off all onclick events are removed
        this._poly._onClick = function() {};

        this._container.style.cursor = 'crosshair';

        this._updateTooltip();

        this._map
            .on('pointermove', this._onMouseMove, this)   //移动端支持
            .on('mousemove', this._onMouseMove, this);
    },

    _finishShape: function() {
        this._drawing = false;

        this._cleanUpShape();
        this._clearGuides();

        this._updateTooltip();
        this._map
            .off('pointermove', this._onMouseMove, this)
            .off('mousemove', this._onMouseMove, this);

        this._container.style.cursor = '';
    },

    _removeShape: function() {
        if (!this._poly) return;
        this._map.removeLayer(this._poly);
        delete this._poly;
        this._markers.splice(0);
        this._markerGroup.clearLayers();
    },

    _onClick: function() {
        if (!this._drawing) {
            this._removeShape();
            this._startShape();
            return;
        }
    },

    _getTooltipText: function() {
     
        var showLength = this.options.showLength,
            labelText, distanceStr;
            
        if (this._markers.length === 0) {
            labelText = {
                text: "开始"||L.drawLocal.draw.handlers.polyline.tooltip.start
            };
        } else {
            distanceStr = showLength ? this._getMeasurementString() : '';

            if (this._markers.length === 1) {
                labelText = {
                    text: "下一个点"||L.drawLocal.draw.handlers.polyline.tooltip.cont,
                    subtext: distanceStr
                };
            } else {
                labelText = {
                    text: "点击最后一个点结束"||L.drawLocal.draw.handlers.polyline.tooltip.end,
                    subtext: distanceStr
                };
            }
        }

        if (!this._drawing) {
            labelText.text = '';
        }
        return labelText;
    },
    //设定单位
    _getMeasurementString: function () {
        var currentLatLng = this._currentLatLng,
            previousLatLng = this._markers[this._markers.length - 1].getLatLng(),
            distance;

        // calculate the distance from the last fixed point to the mouse position
        distance = this._measurementRunningTotal + currentLatLng.distanceTo(previousLatLng);

        return L.GeometryUtil.readableDistance(distance, this.options.metric/*, this.options.feet*/);
    }
});

L.Control.MeasureControl = L.Control.extend({

    statics: {
        TITLE: '测量距离'
    },
    options: {
        position: 'topleft',
        handler: {},
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

        this.handler = new L.Polyline.Measure(map, this.options.handler);

        this.handler.on('enabled', function() {
            this.enabled = true;
            L.DomUtil.addClass(this._container, 'enabled');
        }, this);

        this.handler.on('disabled', function() {
            delete this.enabled;
            L.DomUtil.removeClass(this._container, 'enabled');
        }, this);

        link = L.DomUtil.create('a', className + '-measure', this._container);
        link.href = '#';
        link.title = L.Control.MeasureControl.TITLE;

        L.DomEvent
            .addListener(link, 'click', L.DomEvent.stopPropagation)
            .addListener(link, 'click', L.DomEvent.preventDefault)
            .addListener(link, 'click', this.toggle, this);

        return this._container;
    }
});


L.Map.mergeOptions({
    measureControl: false
});

/**
 * 如果配置中有measureControl的话
 * 例如：var map = L.map('map', {measureControl:true});
 */
L.Map.addInitHook(function() {
    if (this.options.measureControl) {
        this.measureControl = L.Control.measureControl().addTo(this);
    }
});


L.control.measureControl = function(options) {
    return new L.Control.MeasureControl(options);
};

export default L.control.measureControl;