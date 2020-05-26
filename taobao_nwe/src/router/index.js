import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import axios from "./axios"
const home = () => import('../components/content/home/home.vue')
const purchase = () => import('../components/content/purchase/purchase.vue')
const buycar = () => import('../components/content/buyCar/buyCar.vue')
const myorder = () => import('../components/content/myOrder/myorder.vue')
const login = () => import('../components/content/login.vue')
const register = () => import('../components/content/register.vue')
const mistake = () => import("../components/content/mistake")
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/purchase/:Mname/:type/:modular/:size/:name',
    name: 'purchase',
    component: purchase
  },
  {
    path: '/buycar',
    name: 'buycar',
    component: buycar,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: myorder,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path:"*",
    name:"mistake",
    component:mistake
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    // if(this.$store.state.token) store只是挂在到了组件实例上
    axios({
      url: "http://localhost:8080/Verification",
      method: "get"
    }).then(res => {
      next()
    }).catch(err => {
        alert(err.data.msg)
        store.state.user = null
        store.state.token = null
        store.state.order = []
        store.state.goods = {}
        store.state.myorder = []
        localStorage.user&&localStorage.removeItem("user")
        localStorage.token&&localStorage.removeItem("token")
        sessionStorage.user&&sessionStorage.removeItem("user")
        sessionStorage.token&&sessionStorage.removeItem("token")
        sessionStorage.order&&sessionStorage.removeItem("order")
        sessionStorage.goods&&sessionStorage.removeItem("goods")
        sessionStorage.myorder&&sessionStorage.removeItem("myorder")
        router.push('/login')
    })
  } else {
    next()
  }
})
//解决因开发人员造成的重复点击报错bug
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

export default router
