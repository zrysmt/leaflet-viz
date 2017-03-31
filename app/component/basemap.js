import L from 'leaflet';
import $ from 'jquery';

let map = L.map('map').setView([30, 104], 5); //默认墨卡托投影 ESPG：3857


L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.control.scale().addTo(map);  //比例尺

var locator = L.control.locate({
    position: 'topright',
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);

export {map};