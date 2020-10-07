import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false
// @ts-ignore
Vue.use(BootstrapVue)
// @ts-ignore
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
