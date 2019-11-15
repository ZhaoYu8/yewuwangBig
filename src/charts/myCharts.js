/**
 * 各种画echarts图表的方法都封装在这里
 */

import echarts from 'echarts'
const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //画一条简单的线
                    line: function (id, data) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            grid: {
                                left: '0%',
                                right: '0%',
                                top: '0%',
                                bottom: '10%'
                            },
                            backgroundColor: '#1E2651',
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                show: false
                            },
                            yAxis: {
                                type: 'value',
                                show: false
                            },
                            series: [
                                {
                                    name: '成交',
                                    type: 'line',
                                    smooth: true,
                                    data: data,
                                    areaStyle: {}
                                }],
                        };
                        this.chart.setOption(optionData);
                        return this.chart
                    },
                }
            }
        }
    })
}

export default {
    install
}
