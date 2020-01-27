import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueStorage from "vue-ls";

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);


const options = {
  namespace: 'vueOfflineDemo__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local', // storage name session, local, memory
};

Vue.use(VueStorage, options);

new Vue({
  render: h => h(App),
}).$mount('#app')
