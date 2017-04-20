import './toolbar.scss';

// import L from 'leaflet';
import $ from 'jquery';
import config from './gConfig.js';

import mControl from '../common/plugin/measureControl.js';//距离量算库,依赖于leaflet-draw
import mAreaControl from '../common/plugin/measureAreaControl.js';//面积量算库
console.log("L:",L);
class Toolbar{
	init(map){
		this._handlePan(map);
		this._handleZoomToall(map);
		this._handlePosition(map);
		L.control.measureControl().addTo(map);
		L.control.measureAreaControl().addTo(map);
	}
	_handlePan(map){
		$('#mapbar').on('click', '#pan', (event)=> {
			console.log("平移");
		});
	}
	_handleZoomToall(map){
		$('#mapbar').on('click', '#zoomtoall', (event)=> {
			let mapOpt = config.mapOpt;
			map.flyTo(mapOpt.center||[30, 104],mapOpt.zoom||5);
		});
	}
	_handlePosition(map){
		$('#mapbar').on('click', '#myposition', (event)=> {
			console.log("定位");
			function onLocationFound(e) {  
                var radius = e.accuracy / 2;  
                console.log(e.latlng);
				map.flyTo(e.latlng,15);
                L.marker(e.latlng).addTo(map)  
                    .bindPopup("距离您" + radius + "米").openPopup();  
  				L.circle(e.latlng, radius).addTo(map);  
         	}  
         	map.on('locationfound', onLocationFound);  
         	map.on('locationerror ', ()=>{
         		console.warn("定位失败");
         	});
         	map.locate({watch: true,timeout:1000});  
		});
	}
}

export {Toolbar};