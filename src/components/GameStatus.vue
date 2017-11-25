<template>
      <div class="margin-top-40 panel panel-default col-lg-10">
        <h2 class="text-center h2 text-muted">Level: {{storeShort.gameLvl}} <br> question: {{storeShort.currentQuestion + 1}} out of {{storeShort.gameElements.length}} for <br>
         {{storeShort.gameElements[storeShort.currentQuestion].reward}}$</h2>
        <div>
          <img class="center-block" src="assets/logo.png" alt="">
        </div> 
      </div>
</template>


<script>
  export default {
    computed:{
      storeShort(){
        return this.$store.state
      }
    }
  }

</script>

<style lang="scss" scoped>
  .panel{
    margin-bottom: 7px; 
  }
</style>
