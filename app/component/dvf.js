/**
 * 使用leaflet-dvf扩展
 */
import L from 'leaflet';

import "./dvf.scss";
import "../common/leaflet-plugin/Leaflet.dvf/css/dvf.css";
// import "../common/leaflet-plugin/Leaflet.dvf/leaflet-dvf.js";
import "leaflet-dvf";
// import leafletDvfMarkers from "../common/leaflet-plugin/Leaflet.dvf/leaflet-dvf.markers.js";
import $ from 'jquery';
import moment from 'moment';
import { map } from './basemap.js';
import { Maptypebar, gLayer } from './maptypebar.js';

import earthquakesData from '../data/earthquakes.json';
import countryData from '../data/countryData.js';
import { incomeCategories, incomeLevels } from '../data/incomeData.js';

class Dvf {
    init() {

    }
    mapSetting() {
        $('.leaflet-tile-pane').css('opacity', '0.6');
        $('#map').css('background-color', '#090920');

        map.flyTo([0.0, 0.0], 2);

        gLayer.coolLayer["地震图"].addTo(map);
        // Initialize the legend control and add it to the map
        let legendControl = new L.Control.Legend();

        legendControl.addTo(map);
    }
    /**
     * [earthquakesSample 地震图示例]
     */
    earthquakesSample() {
        let lastLayer;

        let eqfeed_callback = function(data) {

            // Initialize framework linear functions for mapping earthquake data properties to Leaflet style properties
            // Color scale - green to red using the basic HSLHueFunction
            let magnitudeColorFunction = new L.HSLHueFunction(new L.Point(0, 90), new L.Point(10, 0), { outputSaturation: '100%', outputLuminosity: '25%',postProcess:null });
            let magnitudeFillColorFunction = new L.HSLHueFunction(new L.Point(0, 90), new L.Point(10, 0), { outputSaturation: '100%', outputLuminosity: '50%',postProcess:null });
            let magnitudeRadiusFunction = new L.LinearFunction(new L.Point(0, 10), new L.Point(10, 30),{postProcess:null});

            let now = Math.round((new Date()).getTime());
            let start = now - 86400000;

            // Initialize a linear function to map earthquake time to opacity
            let timeOpacityFunction = new L.LinearFunction(new L.Point(start, 0.3), new L.Point(now, 1));
            let fontSizeFunction = new L.LinearFunction(new L.Point(0, 8), new L.Point(10, 24));

            let textFunction = function(value) {
                return {
                    text: value,
                    style: {
                        'font-size': fontSizeFunction.evaluate(value)
                    }
                };
            };

            // Setup a new data layer
            let dataLayer = new L.DataLayer(data, {
                recordsField: 'features',
                latitudeField: 'geometry.coordinates.1',
                longitudeField: 'geometry.coordinates.0',
                locationMode: L.LocationModes.LATLNG,
                displayOptions: {
                    'properties.mag': {
                        displayName: '震级',
                        color: magnitudeColorFunction,
                        fillColor: magnitudeFillColorFunction,
                        radius: magnitudeRadiusFunction,
                        text: textFunction
                    },
                    'properties.time': {
                        displayName: '时间',
                        opacity: timeOpacityFunction,
                        fillOpacity: timeOpacityFunction,
                        displayText: function(value) {
                            return moment.unix(value / 1000).format('MM/DD/YY HH:mm');
                        }
                    }
                },
                layerOptions: {
                    numberOfSides: 4,
                    radius: 10,
                    weight: 1,
                    color: '#000',
                    opacity: 0.2,
                    stroke: true,
                    fillOpacity: 0.7,
                    dropShadow: true,
                    gradient: true
                },
                tooltipOptions: {
                    iconSize: new L.Point(90, 90), //hover框大小
                    iconAnchor: new L.Point(-4, 76)
                },
                onEachRecord: function(layer, record, location) {
                    let $html = $(L.HTMLUtils.buildTable(record));

                    layer.bindPopup($html.wrap('<div/>').parent().html(), {
                        minWidth: 400,
                        maxWidth: 400
                    });
                }
            });

            // Add the data layer to the map
            map.addLayer(dataLayer);

            lastLayer = dataLayer;
        };

        this.mapSetting();

        if (lastLayer) {
            map.removeLayer(lastLayer);
        }

        console.log("earthquakesData:", earthquakesData);
        eqfeed_callback(earthquakesData)

        /* $.ajaxSetup({
             cache: true
         });

         // Function for requesting the latest earthquakes from USGS
         let getData = function() {

             if (lastLayer) {
                 map.removeLayer(lastLayer);
             }

             $.ajax({
                 //url: 'http://earthquake.usgs.gov/earthquakes/feed/geojsonp/all/day',
                 url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp',
                 type: 'GET',
                 dataType: 'jsonp',
                 jsonp: false,
                 jsonpCallback: "eqfeed_callback" //must be here
             });
         };

         // Get the latest earthquake data
         getData();

         // Periodically request the latest data
         setInterval(getData, 300000);*/
    }
    /**
     * [worldIncomeSample 世界国家收入示例Demo]
     */
    worldIncomeSample() {
        map.flyTo([0.0, 0.0], 2);

        let incomeLevelTypes = ['OEC', 'NOC', 'UMC', 'MIC', 'LMC', 'LIC', 'HPC'];
        // let valueArray = [{ "id": "HIC", "value": "High income" }, { "id": "HPC", "value": "Heavily indebted poor countries (HIPC)" }, { "id": "INX", "value": "Not classified" }, { "id": "LIC", "value": "Low income" }, { "id": "LMC", "value": "Lower middle income" }, { "id": "LMY", "value": "Low & middle income" }, { "id": "MIC", "value": "Middle income" }, { "id": "NOC", "value": "High income: nonOECD" }, { "id": "OEC", "value": "High income: OECD" }, { "id": "UMC", "value": "Upper middle income" }];
        let valueArray = [{ "id": "HIC", "value": "高收入(HIC)" }, 
        { "id": "HPC", "value": "收入严重不足(HIPC)" }, { "id": "INX", "value": "未分类(INX)" },
         { "id": "LIC", "value": "低收入(LIC)" }, { "id": "LMC", "value": "中等偏下(LMC)" }, 
         { "id": "LMY", "value": "中低等收入" }, { "id": "MIC", "value": "中等收入(MIC)" }, 
         { "id": "NOC", "value": "高收入：nonOECD(NOC)" }, { "id": "OEC", "value": "高收入: OECD(OEC)" }, 
         { "id": "UMC", "value": "中等偏上(UMC)" }];
        let getMap = function(valueArray) {
            let map = {};
            for (let index = 0; index < valueArray.length; ++index) {
                let value = valueArray[index];

                map[value['id']] = value['value'];
            }
            return map;
        };

        let valueMap = getMap(valueArray);

        let incomeLevelToText = function(value) {
            return valueMap[incomeLevelTypes[value]];
        };

        let colorFunction1 = new L.HSLLuminosityFunction(new L.Point(0, 0.2), new L.Point(incomeLevelTypes.length - 1, 0.75), { outputHue: 0, outputLuminosity: '100%' });
        let fillColorFunction1 = new L.HSLLuminosityFunction(new L.Point(0, 0.5), new L.Point(incomeLevelTypes.length - 1, 1), { outputHue: 0, outputLuminosity: '100%' });

        let styles = new L.StylesBuilder(incomeLevelTypes, {
            displayName: incomeLevelToText,
            color: colorFunction1,
            fillColor: fillColorFunction1
        });

        let options = {
            recordsField: '1',
            locationMode: L.LocationModes.COUNTRY,
            codeField: 'id',
            displayOptions: {
                'incomeLevel.id': {
                    displayName: '收入水平',
                    styles: styles.getStyles()
                }
            },
            layerOptions: {
                fillOpacity: 0.7,
                opacity: 1,
                weight: 1
            },
            tooltipOptions: {
                iconSize: new L.Point(100, 65),
                iconAnchor: new L.Point(-5, 65)
            },

            onEachRecord: function(layer, record) {
                let $html = $(L.HTMLUtils.buildTable(record));

                layer.bindPopup($html.wrap('<div/>').parent().html(), {
                    maxWidth: 400,
                    minWidth: 400
                });
            }
        };

        let incomeLayer = new L.ChoroplethDataLayer(incomeLevels, options);
        
        let legendControl = new L.Control.Legend();

        legendControl.addTo(map);
        map.addLayer(incomeLayer);
    }
}

export { Dvf };
