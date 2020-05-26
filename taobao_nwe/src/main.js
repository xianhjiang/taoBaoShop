import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./router/axios"

Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
document.body.scrollTop = 0
document.documentElement.scrollTop = 0
window.pageYOffset = 0
next()
 
})