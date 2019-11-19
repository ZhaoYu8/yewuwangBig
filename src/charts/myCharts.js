/**
 * 各种画echarts图表的方法都封装在这里
 */

import echarts from 'echarts';
// 因为echarts需要id的，所以要加id,就往这个数组里面加一个。
let echartId = ['contrast', 'contrast1'];
const install = function(Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          init: function(id, optionData = {}) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            this.chart.setOption(optionData);
            return this.chart;
          },
          oscillogram: function(id, data) {
            const optionData = {
              grid: {
                left: '0%',
                right: '0%',
                top: '0%',
                bottom: '10%',
              },
              backgroundColor: '#1E2651',
              xAxis: {
                type: 'category',
                boundaryGap: false,
                show: false,
              },
              yAxis: {
                type: 'value',
                show: false,
              },
              series: [
                {
                  name: '成交',
                  type: 'line',
                  smooth: true,
                  data: data,
                  areaStyle: {},
                },
              ],
            };
            return this.init(id, optionData);
          },
          plan: function(id, data) {
            const optionData = {
              grid: {
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
              },
              xAxis: {
                type: 'value', //坐标轴类型,分别有：
                splitLine: { show: false }, //坐标轴在 grid 区域中的分隔线
                axisLabel: { show: false }, //坐标轴刻度标签
              },
              yAxis: {
                type: 'category',
                axisTick: { show: false },
                axisLine: { show: false },
              },
              series: [
                {
                  name: '%', //系列名称
                  type: 'bar', //柱状、条形图
                  barWidth: 19, //柱条的宽度,默认自适应
                  data: data, //系列中数据内容数组
                  itemStyle: {
                    //图形样式
                    normal: {
                      color: '#F4AE00',
                    },
                  },
                  zlevel: 1, //柱状图所有图形的 zlevel 值,
                },
                {
                  name: '进度条背景',
                  type: 'bar',
                  barGap: '-100%', //不同系列的柱间距离，为百分比。
                  barWidth: 19,
                  data: [100],
                  color: '#F9E1A4', //柱条颜色
                },
              ],
            };
            return this.init(id, optionData);
          },
          pie: function(id, data) {
            const optionData = {
              backgroundColor: 'transparent',
              grid: {
                left: '0%',
                right: '0%',
                top: '0%',
                bottom: '0%',
              },
              series: [
                {
                  type: 'pie',
                  color: ['#f4ae00', '#238eff'],
                  label: {
                    position: 'inner',
                    formatter: '{c}',
                    fontSize: 24,
                  },
                  data: data,
                },
              ],
            };
            return this.init(id, optionData);
          },
        };
      },
    },
  });
};

export default {
  install,
};
