import $ from 'jquery';
import config from './gConfig';

import './toolbar.scss';
class Toolbar{
	init(map){
		this._handlePan(map);
		this._handleZoomToall(map);
		this._handlePosition(map);
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
                L.marker(e.latlng).addTo(map)  
                    .bindPopup("You are within " + radius + " meters from this point").openPopup();  
  				L.circle(e.latlng, radius).addTo(map);  
         	}  
         	map.on('locationfound', onLocationFound);  
         	map.on('locationerror ', ()=>{
         		console.warn("定位失败");
         	});  
		});
	}
}

export {Toolbar};