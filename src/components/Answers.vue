<template>
      <div @click="checkAnswer" class="col-lg-6"><div v-html="answer" class="answers-color column panel panel-default text-center">Answers: {{answer}}</div></div>
</template>


<script>
  export default {
    props:['answer'],
        methods:{
      checkAnswer(){
        const storeEl = this.$store.state;
        if(this.answer === storeEl.gameElements[storeEl.currentQuestion].correctAnswer){
          this.$store.state.currentQuestion++;
        } else {
          console.log('fail')
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .panel{
    margin-bottom: 7px; 
  }

  .answers-color{
    background-color: lightskyblue;
    cursor: pointer;
  }
  
</style>
