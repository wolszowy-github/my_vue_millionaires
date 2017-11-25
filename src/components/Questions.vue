<template>
  <div v-html="currentQuestion" class="text-center column panel panel-default col-lg-12">Question: {{currentQuestion}}</div>
</template>


<script>
  export default {
    computed:{
      currentQuestion() {
        return this.$store.state.gameElements[this.$store.state.currentQuestion].question
      }
    }
  }

</script>

<style lang="scss" scoped>
  .panel{
    margin-bottom: 7px; 
  }
</style>
