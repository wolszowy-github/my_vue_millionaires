<template>
    <div class="row">
        <div class="margin-top-40 panel panel-default col-lg-12">
            <h1 class="text-center h2 text-muted">Czy chcesz zostać Milionerem? <br> Zagraj!</h1>
            <div>
                <img class="center-block" src="assets/logo.png" alt="">
            </div>
            <settings v-if="gameStarted"></settings>
            <div v-else class="text-center margin-bottom-40">
                <button @click="gameStarted = !gameStarted" class="btn primary">Rozpocznij Grę!</button>
            </div>  
        </div>
    </div>
</template>


<script>
import Settings from './Settings.vue'

export default{
  components:{
    Settings          
  },
  data:() => (
      {
         gameStarted: false 
    }
)
}
</script>

<style lang="scss" scoped>

    .margin-top-40{
       margin-top: 40px; 
    }

     .margin-bottom-40{
       margin-bottom: 40px; 
    }

</style>

