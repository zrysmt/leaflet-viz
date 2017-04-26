import './toolbar.scss';

// import L from 'leaflet';
import $ from 'jquery';
import config from './gConfig.js';
import {map} from './basemap.js';
import leafletImage from 'leaflet-image';
// import  'leaflet-easyprint';

import mControl from '../common/plugin/measureControl.js';//距离量算库,依赖于leaflet-draw
import mAreaControl from '../common/plugin/measureAreaControl.js';//面积量算库
import {addClickListenerToPrint} from '../common/plugin/easyPrint.js';//打印成pdf
class Toolbar{
	init(){
		this._handlePan();
		this._handleZoomToall();
		this._handlePosition();
		this._handlePrint();
		
		L.control.measureControl().addTo(map);
		L.control.measureAreaControl().addTo(map);
	}
	_handlePrint(){
		//生成图片  不支持绘制的图层
		$('#mapbar').on('click', '#print2img', (event)=> {
			// console.log(leafletImage);
			leafletImage(map, function(err, canvas) {
    			var iframe = document.createElement('iframe');//或者img
    			var dimensions = map.getSize();
    			iframe.width = dimensions.x;
    			iframe.height = dimensions.y;
    			iframe.src = canvas.toDataURL();
    			// iframe.crossOrigin = "Anonymous";
    			window.open(iframe.src);
    			// document.getElementById('snapshot').innerHTML = '';
    			// document.getElementById('snapshot').appendChild(img);
			});
		});
		$('#mapbar').on('click', '#print2pdf', (event)=> {
			addClickListenerToPrint({
				map:map,
				elementsToHide: 'p, h2,.leaflet-control-layers,.leaflet-control-container,#mapbar'
			})
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