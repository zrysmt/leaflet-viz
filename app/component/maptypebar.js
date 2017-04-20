L.control.layers({
    'osm': osm.addTo(map),
    "google": L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
        attribution: 'google'
    })
}, 
{ 'editableLayers': Editbar.editableLayers }, 
{ position: 'topleft', collapsed: false }).addTo(map);
