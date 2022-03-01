import App from './App'
// #ifndef VUE3
import Vue from 'vue'
// 引入封装请求
import { myRequest } from './util/api.js'
// 挂载请求
import uView from 'uview-ui';
Vue.use(uView);
Vue.prototype.$myRequest = myRequest
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif