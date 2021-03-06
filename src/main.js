import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import './bus'
import currencyFilter from './filters/currency'
import time from './filters/time'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBoxOpen, faStopwatch, faCog, faBell, faTimes, faPen, faCheck, faList, faPlay, faPause, faStepForward, faHome, faEllipsisH, faHeart, faStar, faFlag, faSpinner, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLine, faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import VuePageTransition from 'vue-page-transition'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import draggable from 'vuedraggable'

import './styles/style.scss'
import 'noto-sans-tc/noto_sans_tc_regular/css.css'
import VAnimateCss from 'v-animate-css'
import VueWow from 'vue-wow'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import * as rules from 'vee-validate/dist/rules'

axios.defaults.withCredentials = true
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

Vue.use(VueSidebarMenu)

Vue.use(VueAxios, axios)
Vue.use(VueWow)
Vue.use(VAnimateCss)

Vue.use(VuePageTransition)
Vue.use(VueSweetalert2)

library.add(faBoxOpen, faStopwatch, faCog, faBell, faTimes, faPen, faCheck, faList, faPlay, faPause, faStepForward, faHome, faEllipsisH, faLine, faFacebookSquare, faInstagram, faYoutube, faHeart, faStar, faFlag, faSpinner, faShoppingCart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('draggable', draggable)
Vue.component('Loading', Loading)
Vue.filter('currency', currencyFilter)
Vue.filter('time', time)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // ...
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})

extend('required', { // 這邊可以改寫我們 email 告知使用者是必填欄位的提示文字
  ...required,
  message: '此為必填項目'
})

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})
