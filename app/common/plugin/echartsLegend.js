/**
 * 自定义echarts的图例
 * by zry
 * @Date 2017-05-05
 */
import L from 'leaflet';
import echarts from 'echarts';
/**
 * [echartsLegend description]
 * @param  {L.map} map     leaflet地图类
 * @param  {Object} option  [配置对象]
 *
 * 配置项 option = {
        orient: 'vertical',
        left: 'left',
        width: "90px",
        height: "140px",
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    };
 */
function echartsLegend(map, option) {
    if(!option||!option.data){
        console.warn("没有图例的数据或者图例数据不是数组");
        return;
    }
    L.Control.echartsLegend().addTo(map);

    var dom = document.getElementsByClassName('leaflet-control-echarts-legend')[0];
    dom.style.width = option.width || "90px";
    dom.style.height =  option.height || "140px";
    var myLegendChart = echarts.init(dom);
    var legendOption = {
        legend: {
            orient:option.orient || 'vertical',
            left:option.left || 'left',
            data:option.data 
        },

        series: [{
            type: 'pie',
            data: [],
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
                normal: {
                    opacity: 0
                },
                emphasis: {
                    opacity: 0
                }
            }
        }]
    };
    for (var i = 0; i < option.data.length; i++) {
        var datai = option.data[i];
        legendOption.series[0].data.push({name:datai});
    }
    myLegendChart.setOption(legendOption);
}

L.Control.EchartsLegend = L.Control.extend({

    statics: {
        TITLE: '图例'
    },
    options: {
        position: 'bottomright',
    },
    initialize: function(options) {
        L.Control.prototype.initialize.call(this, options);

    },
    onAdd: function(map) {
        var className = 'leaflet-control';
        this._container = L.DomUtil.create('div', 'leaflet-bar');
        var link = L.DomUtil.create('div', className + '-echarts-legend', this._container);
        // link.href = '#';
        link.title = L.Control.EchartsLegend.TITLE;

        return this._container;
    },
    toggle: function() {
        if (this.handler.enabled()) {
            this.handler.disable.call(this.handler);
        } else {
            this.handler.enable.call(this.handler);
        }
    },
});



L.Control.echartsLegend = function(options) {
    return new L.Control.EchartsLegend(options);
};


export default echartsLegend;
