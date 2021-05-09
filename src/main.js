import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/bootstrap-vue'
import axios from 'axios'

Vue.config.productionTip = false

// Setting up default vue's http modules for api calls
Vue.prototype.$http = axios;
// Load the token from the localStorage
const token = localStorage.getItem("access_token");
// Is there is any token then we will simply append default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
