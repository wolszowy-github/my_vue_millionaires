<template>
  <div id="app">
    <div class="container">
       <router-view></router-view>    
    </div> 
  </div>
</template>

<script>
import Introduction from './components/Introduction.vue'

export default {
  components:{
    Introduction
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
