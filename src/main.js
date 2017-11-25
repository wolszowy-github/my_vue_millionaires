import Vue from 'vue'
import router from './router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import {store} from './store/store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
