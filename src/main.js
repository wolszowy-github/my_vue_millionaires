import Vue from 'vue'
import router from './router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
