/**
 * 可视化
 * @Author zry
 * @Date 2017-04-26
 */
import './viz.scss';
import $ from 'jquery';
import util from '../common/util.js';

import { map } from './basemap.js';
import '../common/leaflet-plugin/HeatLayer.js'; //Leaflet.heat

class Viz {
    init() {
    	this._vizEvent()
    }
    _vizEvent(){
    	$('#mapbar').on('click', '#heatbar', (event) => {
    		this.heatLayer();
    	});
    }
    heatLayer() {
        let url = "http://leaflet.github.io/Leaflet.markercluster/example/realworld.10000.js";
        util.getScript(url).then(() => {
        	map.setView([-37.87, 175.475], 12);

            addressPoints = addressPoints.map((p) => {
                return [p[0], p[1]];
            });

            let heat = L.heatLayer(addressPoints).addTo(map);
        })

    }
}

export {Viz};