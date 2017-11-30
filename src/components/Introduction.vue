<template>
    <div class="row">
        <div class="margin-top-80 panel panel-default col-lg-10 col-lg-offset-1 game-container">
            <h1 class="text-center margin-top-35">Hello stranger!</h1>
            <h2 class="text-center h4">Do you think you're smart enough to become na millioner?</h2>
            <div>
                <img class="center-block" src="src/assets/logo.png" alt="">
            </div>
            <settings v-if="gameStarted"></settings>
            <div v-else class="text-center margin-bottom-40">
                <button @click="gameStarted = !gameStarted" class="btn primary">Prove It!</button>
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

    .margin-bottom-40{
       margin-bottom: 40px; 
    }

     .margin-top-80{
       margin-top: 80px; 
    }

     .margin-top-35{
       margin-top: 35px; 
    }

    .panel-transparent{
        background-color: rgba(242, 241, 241, 0.5);
    }

</style>

