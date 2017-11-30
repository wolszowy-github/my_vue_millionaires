<template>
  <div v-html="currentQuestion" class="h2 question-padding text-center column panel panel-default col-lg-10 col-lg-offset-1">Question: {{currentQuestion}}</div>
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

  .question-padding{
    padding: 45px;
  }
</style>
