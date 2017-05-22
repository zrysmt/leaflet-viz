# leaflet-viz
**Leaflet可视化平台**

[leaflet](http://leafletjs.com/index.html)是一个开源的前端地图交互类库，比较轻量级，支持移动端。而且有丰富的[插件资源](http://leafletjs.com/plugins.html)可供我们使用。

[Echarts](http://echarts.baidu.com/)是百度开源的前端可视化类库，提供丰富的前端可视化图表，平台中重要的一部分是我们要将leaflet和Echarts结合在一起。

该平台是基于leaflet及其插件搭建的一个方便可用的可视化平台。详细参见[示例Demo]。(https://zrysmt.github.io/demo/leaflet-demo/)

## 1. 安装与编译
- **安装**

```source-shell
npm install
```
- **编译**

**debug模式**

```source-shell
npm run dev
```

**输出**

```source-shell
npm run build
```
## 2.示例简介
示例地址：[https://zrysmt.github.io/demo/leaflet-demo/](https://zrysmt.github.io/demo/leaflet-demo/)
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-1.jpg)
示例包含最基本的GIS功能和可视化Demo
## 3.基础的GIS功能
- 拖放、全图、定位、打印出图片、打印出PDF功能。
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-2.png)
- 地图缩放、比例尺显示功能
- 测量面积和距离功能
- 图层切换，提供丰富的图层切换 
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-3.png)
- 地图搜索功能
- 基础绘图功能
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-4.png)

## 4.可视化示例
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-5.png)
- **热力图**

引入：
```
import '../common/leaflet-plugin/HeatLayer.js';
```
使用：
```javascript
var heat = L.heatLayer([
    [50.5, 30.5, 0.2], // lat, lng, intensity
    [50.6, 30.4, 0.5],
...
], {radius: 25}).addTo(map)
```
**效果图**：
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-6.jpg)
- **结合Echarts**

```javascript
let overlay = new L.echartsLayer3(map, echarts);
let chartsContainer = overlay.getEchartsContainer();
let myChart = overlay.initECharts(chartsContainer);
window.onresize = myChart.onresize;
console.log("chartsContainer:", chartsContainer);
if (type == "qianxi") {
    overlay.setOption(ecOption);
} else if (type == "scatter") {
    overlay.setOption(scatterOption);
}
```
**迁徙图**（选择了高德卫星底图）
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-7.jpg)
**散点图**（选择了Geoq午夜蓝底图）
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-8.jpg)
- **DivIcon结合Echarts**

这个方案不太适合大数据量的渲染。
我写了两个简单的功能函数，一个用来渲染可视化图（echartsIcon），一个专门用来渲染图例（echartsLegend）。
**效果图**（底图选择了为google底图）
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-9.jpg)
```javascript
import echartsIcon from '../common/plugin/echartsIcon.js'; //echartsLegend
import echartsLegend from '../common/plugin/echartsLegend.js'; //echartsLegend
```
```javascript
let option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        lableLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
//经纬度不能相同
let latlngs = [
    [30, 104],
    [31, 110],
    [34, 120]
];
option.datas = [
    [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
    ],
    [
        { value: 345, name: '直接访问' },
        { value: 410, name: '邮件营销' },
        { value: 244, name: '联盟广告' },
        { value: 145, name: '视频广告' },
        { value: 548, name: '搜索引擎' }
    ],
    [
        { value: 445, name: '直接访问' },
        { value: 410, name: '邮件营销' },
        { value: 244, name: '联盟广告' },
        { value: 145, name: '视频广告' },
        { value: 148, name: '搜索引擎' }
    ],
];
echartsIcon(map, latlngs, option);
//图例
let legendOption = {
    orient: 'vertical',
    left: 'left',
    width: "90px",
    height: "140px",
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
};
echartsLegend(map, legendOption);
```

- leaflet-dvf

[leaflet-dvf](https://github.com/humangeo/leaflet-dvf)是一个基于leaflet的数据可视化框架，提供有比较多的可视化图形。
```javascript
import "../common/leaflet-plugin/Leaflet.dvf/css/dvf.css";
import "leaflet-dvf";
```
**地震图：**
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-10.jpg)
**收入水平图：**
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-11.jpg)
需要的数据
```javascript
import earthquakesData from '../data/earthquakes.json';
import countryData from '../data/countryData.js';
```
**地震图代码：**
```javascript
 let lastLayer;

 let eqfeed_callback = function(data) {

     // Initialize framework linear functions for mapping earthquake data properties to Leaflet style properties
     // Color scale - green to red using the basic HSLHueFunction
     let magnitudeColorFunction = new L.HSLHueFunction(new L.Point(0, 90), new L.Point(10, 0), { outputSaturation: '100%', outputLuminosity: '25%', postProcess: null });
     let magnitudeFillColorFunction = new L.HSLHueFunction(new L.Point(0, 90), new L.Point(10, 0), { outputSaturation: '100%', outputLuminosity: '50%', postProcess: null });
     let magnitudeRadiusFunction = new L.LinearFunction(new L.Point(0, 10), new L.Point(10, 30), { postProcess: null });

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

```
**收入水平图代码：**
```javascript
let incomeLevelTypes = ['OEC', 'NOC', 'UMC', 'MIC', 'LMC', 'LIC', 'HPC'];
let valueArray = [{ "id": "HIC", "value": "高收入(HIC)" },
    { "id": "HPC", "value": "收入严重不足(HIPC)" }, { "id": "INX", "value": "未分类(INX)" },
    { "id": "LIC", "value": "低收入(LIC)" }, { "id": "LMC", "value": "中等偏下(LMC)" },
    { "id": "LMY", "value": "中低等收入" }, { "id": "MIC", "value": "中等收入(MIC)" },
    { "id": "NOC", "value": "高收入：nonOECD(NOC)" }, { "id": "OEC", "value": "高收入: OECD(OEC)" },
    { "id": "UMC", "value": "中等偏上(UMC)" }
];
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
```
# 5.GeoJSON
假设我们需要自己做个地图，然后加载到平台中。这个时候可以使用我们提供了编辑栏，编辑后会得到坐标，把坐标转成GeoJSON数据存到数据库中，下次加载的时候解析即可。
还可以使用GIS工具，做成GeoJSON的数据，然后使用下面的方法加载，详细说明的[传送门](https://zrysmt.github.io/2017/05/04/%E4%BD%BF%E7%94%A8leaflet%E6%88%96%E8%80%85openlayers-3-%E8%B0%83%E7%94%A8MapServer%E6%9C%8D%E5%8A%A1%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E5%AE%8C%E6%95%B4%E8%AF%B4%E6%98%8E/)在这，当然这包括MapServer的东西，我们将在第六部分有简要说明。
**示例图：**
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-12.jpg)
引入数据：
```javascript
import { json_china } from '../data/china.js';
```
```javascript
function pop_0(feature, layer) {//部分有省略
    let popupContent = '<table>\
                    <tr>\
                        <td colspan="2">面积：' + (feature.properties['AREA'] !== null ? Autolinker.link(String(feature.properties['AREA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">周长：' + (feature.properties['PERIMETER'] !== null ? Autolinker.link(String(feature.properties['PERIMETER'])) : '') + '</td>\
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
```
# 6.MapServer
再进一步，如果我们想要自己的地图服务器，这个时候就需要使用到了MapServer,具体的说明见[传送门](https://zrysmt.github.io/2017/05/04/%E4%BD%BF%E7%94%A8leaflet%E6%88%96%E8%80%85openlayers-3-%E8%B0%83%E7%94%A8MapServer%E6%9C%8D%E5%8A%A1%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E5%AE%8C%E6%95%B4%E8%AF%B4%E6%98%8E/)

有个示例在`test`文件夹下:`leaflet-mapserver.html`。注意这个是需要配置好服务器的，在这里直接预览是不能成功的。
示例得到我们的世界地图的地图服务器。
![](https://raw.githubusercontent.com/zrysmt/mdPics/master/leaflet/1-13.jpg)

其实leaflet和D3等开源库结合起来，能得到很多丰富多彩的可视化图，姑且留下点神秘，这里就不再探究两者结合的神奇魅力了。