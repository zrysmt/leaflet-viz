L.Polygon.Measure = L.Handler.extend({
  includes: L.Mixin.Events,
 
  initialize: function(map, layers, isGeodesic){
    L.Handler.prototype.initialize.call(this, map);
    this._layers = layers || null;
    this.isGeodesic = isGeodesic;
  },

  enable: function(){
    if(!this._enabled){
      this.fire('enabled');
      L.Handler.prototype.enable.call(this);
    }
  },

  disable: function(){
    if(this._enabled){
      this.fire('disabled');
      L.Handler.prototype.disable.call(this);
    }
  },

  addHooks: function () {
    if (this._map) {
      this.bindEventListener();
    }
  },

  removeHooks: function () {
    if (this._map) {
      this.removeEventListener();
    }
  },

  bindEventListener: function () {
    var data = this._layers;
    for (var i in data) {
      data[i].layer.on('click', this.onElementClick, this);
    }
  },

  removeEventListener: function(){
    var data = this._layers;
    for (var i in data) {
      data[i].layer.off('click', this.onElementClick, this);
    }
  },

  onElementClick: function(e) {
    var area = this.getArea(e);
    var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('<p>' + area + '</p>')
      .openOn(this._map);
  },

  getArea: function(e){
    var obj = e.target;
    var area =  L.GeometryUtil.geodesicArea(obj.getLatLngs());
    if(this.isGeodesic)
      return  area.toFixed(2) + ' m<sup>2</sup>';
    else
      return L.GeometryUtil.readableArea(area);
  }
});

L.Control.MeasureArea = L.Control.extend({

    statics: {
        TITLE: 'Measure area'
    },
    options: {
        position: 'topleft',
        geodesic: true
    },

    initialize: function (options, layers) {
      L.Control.prototype.initialize.call(this, options);

      this._layers = {};
      for (var i in layers) {
        this.addLayer(layers[i]);
      }
    },

    onAdd: function(map) {
      var className = 'leaflet-control';
      this._container = L.DomUtil.create('div', 'leaflet-bar');
      var link = L.DomUtil.create('a', className+'-measure', this._container);
      link.href = '#';
      link.title = L.Control.MeasureArea.TITLE;
      var i = L.DomUtil.create('i', 'fa fa-comment-o', link);

      this.handler = new L.Polygon.Measure(map, this._layers, this.options.geodesic);
      
      this.handler.on('enabled', function () {
          L.DomUtil.addClass(this._container, 'enabled');
      }, this);

      this.handler.on('disabled', function () {
          L.DomUtil.removeClass(this._container, 'enabled');
      }, this);

      L.DomEvent
        .addListener(link, 'click', L.DomEvent.stopPropagation)
        .addListener(link, 'click', L.DomEvent.preventDefault)
        .addListener(link, 'click', this.toggle, this);

      return this._container;
    },


    addLayer: function (layers) {

      if (layers instanceof L.LayerGroup){
        for (var i in layers._layers) {
          var layer = layers._layers[i];
          if(layer instanceof L.Path && !(layer instanceof L.Circle)){
            var id = L.stamp(layer);
            this._layers[id] = {
              layer: layer
            };
          }
        }
      } else {
        if(layers instanceof L.Path && !(layers instanceof L.Circle)){
          var id = L.stamp(layers);
          this._layers[id] = {
            layer: layers
          };
        }
      }
    },

    removeLayer: function (layers) {
      if (layers instanceof L.LayerGroup){
        for (var i in layers._layers) {
          var layer = layers._layers[i];
          var id = L.stamp(layer);
          delete this._layers[id];
        }
      } else {
          var id = L.stamp(layers);
          delete this._layers[id];
      }
      return this;
    },

    toggle: function() {
      if (this.handler.enabled()) {
          this.handler.disable.call(this.handler);
      } else {
          this.handler.enable.call(this.handler);
      }
    },
});

L.Control.measureAreaControl = function (options, layers) {
    return new L.Control.MeasureArea(options, layers);
};

