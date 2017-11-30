<template>
  <div id="app">
    <div class="page-wrapper">
      <div class="container">
        <router-view></router-view>    
      </div> 
    </div>
  </div>
</template>

<script>
import PlayView from './components/PlayView.vue'

export default {

}
</script>

<style lang="scss">
  .page-wrapper{
    background: url('assets/bg-blue.jpg') center/cover;
    min-height: 100vh;
  }

  .game-container{
    min-height: 560px;
  }

  .panel{
    background-color: rgba(255, 255, 255, 0.3);
  }
</style>
