import L from 'leaflet';

let map = L.map('map').setView([30, 104], 5); //默认墨卡托投影 ESPG：3857

let osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
})
osm.addTo(map);
L.control.scale().addTo(map); //比例尺
var editableLayers = new L.FeatureGroup();
var drawnItems = editableLayers.addTo(map);

console.info("map:",map);
export { map,osm,editableLayers,drawnItems };
