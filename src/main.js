import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vant/lib/index.css';

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import {Card} from 'vant';
Vue.use(Card);

import {Button} from 'vant';
Vue.use(Button);

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
