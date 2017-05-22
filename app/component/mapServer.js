import './mapServer.scss';

import L from 'leaflet';
import { map } from './basemap.js';
import $ from 'jquery';
import Autolinker from 'autolinker';
import { json_china } from '../data/china.js';

class MapServer {
    init() {
        /*加载GeoJson的例子*/
        $('#mapbar').on('click', '#json', (event) => {
            this.chinaJson();
        });
    }
    chinaJson() {
        function pop_0(feature, layer) {
            let popupContent = '<table>\
                    <tr>\
                        <td colspan="2">面积：' + (feature.properties['AREA'] !== null ? Autolinker.link(String(feature.properties['AREA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">周长：' + (feature.properties['PERIMETER'] !== null ? Autolinker.link(String(feature.properties['PERIMETER'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">BOU2_4M_：' + (feature.properties['BOU2_4M_'] !== null ? Autolinker.link(String(feature.properties['BOU2_4M_'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">BOU2_4M_ID：' + (feature.properties['BOU2_4M_ID'] !== null ? Autolinker.link(String(feature.properties['BOU2_4M_ID'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">编号93：' + (feature.properties['ADCODE93'] !== null ? Autolinker.link(String(feature.properties['ADCODE93'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">编号99：' + (feature.properties['ADCODE99'] !== null ? Autolinker.link(String(feature.properties['ADCODE99'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">名称：' + (feature.properties['NAME'] !== null ? Autolinker.link(String(feature.properties['NAME'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent);
        }

        function style_0() {
            return {
                pane: 'pane_0',
                opacity: 1,
                color: 'rgba(0,0,0,0.494117647059)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fillOpacity: 1,
                fillColor: 'rgba(64,98,210,0.494117647059)',
            }
        }
        map.createPane('pane_0');
        map.getPane('pane_0').style.zIndex = 400;
        map.getPane('pane_0').style['mix-blend-mode'] = 'normal';
        let layer_0 = new L.geoJson(json_china, {
            attribution: '<a href=""></a>',
            pane: 'pane_0',
            onEachFeature: pop_0,
            style: style_0
        });

        map.addLayer(layer_0);
        
        
    }
}

export { MapServer };
