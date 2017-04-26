/**
 * 可视化
 * @Author zry
 * @Date 2017-04-26
 * [heatmap](https://github.com/Leaflet/Leaflet.heat)
 * Basic Usage
	```
	var heat = L.heatLayer([
		[50.5, 30.5, 0.2], // lat, lng, intensity
		[50.6, 30.4, 0.5],
		...
	], {radius: 25}).addTo(map)
	```

 * 
 */
import './viz.scss';
import $ from 'jquery';
import util from '../common/util.js';

import { map } from './basemap.js';
import '../common/leaflet-plugin/HeatLayer.js'; //Leaflet.heat

// import echarts from 'echarts';
// import echarts from '../common/leaflet-plugin/lib/echarts.source.js';
import '../common/leaflet-plugin/leaflet-echarts.js';
import {ecOption,geoCoord} from './vizConfig';

class Viz {
    init() {
    	this._vizEvent()
    }
    _vizEvent(){
    	$('#mapbar').on('click', '#heatbar', (event) => {
    		this.heatLayer();
    	});
    	$('#mapbar').on('click', '#echarts1', (event) => {
    	});
    	$('#mapbar').on('click', '#echarts2', (event) => {
    		if(!this.echarts){
    			util.getScript("/app/common/leaflet-plugin/lib/echarts.source.js").then((echarts)=>{
    			// util.getScript("/app/common/leaflet-plugin/lib/test.js").then(()=>{
    				console.log(window.echarts);
    				this.echartsLayer(window.echarts);
    			});
    		}else{
    			this.echartsLayer(this.echarts);
    		}
    	});

    }
    echartsLayer(echarts){
    	this.echarts = echarts;
    	let overlay = new L.echartsLayer(map, echarts);
    	let chartsContainer = overlay.getEchartsContainer();
    	let myChart = overlay.initECharts(chartsContainer);
    	window.onresize = myChart.onresize;

    	function getGeoCoord (name) {
    	    var city = name.split('_').pop();
    	    var coord;
    	    coord = geoCoord[city];
    	    return coord;
    	}
	
    	$.ajax({
    	    url: 'http://7xp3u9.com1.z0.glb.clouddn.com/srcmigration.json',
    	    type:"get",
    	    dataType: 'json',
    	    success: function(data) {
    	        for(var key in data){
    	            data[key].forEach(function (value, index) {
    	                data[key][index].num=Number(value.num);
    	            })
    	        }
    	        ecOption.series[0].markLine.data = data.allLine.sort(function (a, b) {
    	            return b.num - a.num
    	        }).slice(0, 3000).map(function (line) {
    	            return [{
    	                geoCoord: getGeoCoord(line.start)
    	            }, {
    	                geoCoord: getGeoCoord(line.end)
    	            }]
    	        });
	
    	        ecOption.series[0].markPoint.data = data.topCityOut.map(function (point) {
    	            return {
    	                geoCoord: getGeoCoord(point.name)
    	            }
    	        });
    	        overlay.setOption(ecOption);
    	    }
    	});
    }
    heatLayer() {
        let url = "http://leaflet.github.io/Leaflet.markercluster/example/realworld.10000.js";
        util.getScript(url).then(() => {
        	map.flyTo([-37.87, 175.475], 12);

            addressPoints = addressPoints.map((p) => {
                return [p[0], p[1]];
            });

            let heat = L.heatLayer(addressPoints).addTo(map);
        })

    }
}

export {Viz};