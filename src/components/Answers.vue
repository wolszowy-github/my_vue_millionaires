<template>
      <div @click="checkAnswer(answer)" class="col-lg-6"><div v-html="answer"  class="answers-color answer-padding column panel h3 panel-default text-center">Answers: {{answer}}</div></div>
</template>


<script>
  export default {
        props:['answer'],
        data: ()=>({
          answerChecked: false
        }),
        methods:{
      checkAnswer(answer){
        if(this.answerChecked) {
          return
        }
        this.answerChecked = true;
        this.$emit('userAnswer', answer);
        const storeEl = this.$store.state;
        if(this.answer === storeEl.gameElements[storeEl.currentQuestion].correctAnswer){
          setTimeout(() => {
            this.answerChecked = false;
            this.$store.state.currentQuestion++;
          }, 2200)
        } else {
          setTimeout(() => {
            this.answerChecked = false;
            this.$store.state.currentQuestion = 0;
            this.$router.push({name: 'lost'});
          }, 2200)
        }
      }
    }
  }

</script>

<style lang="scss">
  .panel{
    margin-bottom: 7px; 
  }

  .answers-color{
    background-color: lightskyblue;
    cursor: pointer;
  }

  .answer-padding{
    padding: 15px 0;
  }

  .gray{
    pointer-events: none;
    background-color: darkgray;

  }

  @keyframes flash {
    0%{background-color: lightskyblue;}
    100%{background-color: green;}
  }
  
</style>
