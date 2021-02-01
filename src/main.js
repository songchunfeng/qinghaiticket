import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import { router } from './router'
import store from './store'
import axios from './utils/request'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
