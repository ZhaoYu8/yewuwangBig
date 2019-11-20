import Vue from 'vue';
import App from './App.vue';
import http from './api/index';
import router from './router';
import store from './store';
import './assets/main.css';
Vue.config.productionTip = false;

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import moment from 'moment'; // 日期转换
import global from './common/common';
import myCharts from './charts/myCharts.js'; // 图表
Vue.use(ViewUI); // ViewUI
Vue.use(myCharts);
moment.locale('zh-cn'); //日期汉化
Vue.prototype.$post = http.post;
Vue.prototype.$get = http.get;
Vue.prototype.moment = moment;
Vue.prototype.$global = global;
Vue.prototype.bus = new Vue();
import 'lib-flexible/flexible';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
