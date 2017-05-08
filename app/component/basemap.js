// import '../common/css/Control.Geocoder.css';
// import 'leaflet-control-geocoder';
import L from 'leaflet';
import "../common/css/Control.OSMGeocoder.css";
import "../common/leaflet-plugin/Control.OSMGeocoder.js";


let map = L.map('map',{
	crs:L.CRS.EPSG3857 //默认墨卡托投影 ESPG：3857
}).setView([30, 104], 5); 
let osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
})
osm.addTo(map);
L.control.scale().addTo(map); //比例尺
let editableLayers = new L.FeatureGroup();
let drawnItems = editableLayers.addTo(map);
let osmGeocoder = new L.Control.OSMGeocoder({
    collapsed: false,
    position: 'topright',
    text: 'Search',
});
osmGeocoder.addTo(map);

export { map, osm, editableLayers, drawnItems };
