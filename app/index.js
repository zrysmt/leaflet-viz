import L from 'leaflet';
import '../node_modules/leaflet/dist/leaflet.css';
import './common/css/index.scss';

var map = L.map('map').setView([30, 104], 5); //默认墨卡托投影 ESPG：3857

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


