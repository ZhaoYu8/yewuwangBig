import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
Vue.config.productionTip = false

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
import moment from 'moment'//导入文件
Vue.prototype.moment = moment;//赋值使用
moment.locale('zh-cn');//需要汉化
import 'lib-flexible/flexible'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
