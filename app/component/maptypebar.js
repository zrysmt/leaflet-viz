import L from 'leaflet';
import '../common/leaflet-plugin/leaflet.ChineseTmsProviders.js';
import { map, osm, editableLayers, drawnItems } from './basemap.js';

class Maptypebar {
    init() {
        this.initTianDitu();
        this.initGaode();

        let baseLayers = {
            'OpenStreetMap': osm.addTo(map),
            "Google卫星": L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
                attribution: 'google'
            }),
            "天地图": this.tianDituLayersNormal,
            "天地图影像": this.tianDituLayersImage,
            "高德地图": this.gaodeLayersNormal,
            "高德地图影像": this.gaodeLayersImage,
        };
        // Object.assign(baseLayers,this.geoqLayers);
        this.layers = L.control.layers(baseLayers,{ '绘制图层': drawnItems }, { position: 'topleft', collapsed: false }).addTo(map);

        this.initGeoq();
        
    }
    initTianDitu() {
        let normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
                maxZoom: 18,
                minZoom: 5
            }),
            normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
                maxZoom: 18,
                minZoom: 5
            }),
            imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
                maxZoom: 18,
                minZoom: 5
            }),
            imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
                maxZoom: 18,
                minZoom: 5
            });

        let normal = L.layerGroup([normalm, normala]),
            image = L.layerGroup([imgm, imga]);

        let tianDituLayers = {
            "天地图": normal,
            "天地图影像": image,
        }
        this.tianDituLayers = tianDituLayers;
        this.tianDituLayersNormal = normal;
        this.tianDituLayersImage = image;
        // L.control.layers(tianDituLayers).addTo(map);
    }
    initGaode() {
        let normalm = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
            maxZoom: 18,
            minZoom: 5
        });
        let imgm = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
            maxZoom: 18,
            minZoom: 5
        });
        let imga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
            maxZoom: 18,
            minZoom: 5
        });

        let normal = L.layerGroup([normalm]),
            image = L.layerGroup([imgm, imga]);

        let gaodeLayers = {
            "高德地图": normal,
            "高德地图影像": image,
        }
        this.gaodeLayers = gaodeLayers;
        this.gaodeLayersNormal = normal;
        this.gaodeLayersImage = image;
        // L.control.layers(gaodeLayers).addTo(map);
    }
    initGeoq() {
        let normalm1 = L.tileLayer.chinaProvider('Geoq.Normal.Map', {
            maxZoom: 18,
            minZoom: 5
        });
        let normalm2 = L.tileLayer.chinaProvider('Geoq.Normal.Color', {
            maxZoom: 18,
            minZoom: 5
        });
        let normalm3 = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
            maxZoom: 18,
            minZoom: 5
        });
        let normalm4 = L.tileLayer.chinaProvider('Geoq.Normal.Gray', {
            maxZoom: 18,
            minZoom: 5
        });
        let normalm5 = L.tileLayer.chinaProvider('Geoq.Normal.Warm', {
            maxZoom: 18,
            minZoom: 5
        });
        let normalm6 = L.tileLayer.chinaProvider('Geoq.Normal.Cold', {
            maxZoom: 18,
            minZoom: 5
        });

        let normal = L.layerGroup([normalm1, normalm2, normalm3, normalm4, normalm5, normalm6]);

        let geoqLayers = {
            "地图": normalm1,
            "多彩": normalm2,
            "午夜蓝": normalm3,
            "灰色": normalm4,
            "暖色": normalm5,
            "冷色": normalm6
        }
        
        this.geoqLayers = geoqLayers;

		L.control.layers(geoqLayers ,{}, { position: 'topleft', collapsed: false }).addTo(map);

    }
}

export { Maptypebar };
