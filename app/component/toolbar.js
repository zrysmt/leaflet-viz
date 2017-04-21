import './toolbar.scss';

// import L from 'leaflet';
import $ from 'jquery';
import config from './gConfig.js';
import { map} from './basemap.js';
import leafletImage from 'leaflet-image';

import mControl from '../common/plugin/measureControl.js';//距离量算库,依赖于leaflet-draw
import mAreaControl from '../common/plugin/measureAreaControl.js';//面积量算库
class Toolbar{
	init(){
		this._handlePan();
		this._handleZoomToall();
		this._handlePosition();
		this.handlePrint();
		
		L.control.measureControl().addTo(map);
		L.control.measureAreaControl().addTo(map);
	}
	handlePrint(){
		leafletImage(map, function(err, canvas) {
    		// now you have canvas
    		// example thing to do with that canvas:
    		var img = document.createElement('img');
    		var dimensions = map.getSize();
    		img.width = dimensions.x;
    		img.height = dimensions.y;
    		img.src = canvas.toDataURL();
    		document.getElementById('images').innerHTML = '';
    		document.getElementById('images').appendChild(img);
		});
	}
	_handlePan(){
		$('#mapbar').on('click', '#pan', (event)=> {
			console.log("平移");
		});
	}
	_handleZoomToall(){
		$('#mapbar').on('click', '#zoomtoall', (event)=> {
			let mapOpt = config.mapOpt;
			map.flyTo(mapOpt.center||[30, 104],mapOpt.zoom||5);
		});
	}
	_handlePosition(){
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