<template>
      <div @click="checkAnswer" class="col-lg-6"><div v-html="answer" :class="{'flashing-green':rightAnswer,'red': wrongAnswer}" class="answers-color answer-padding column panel h3 panel-default text-center">Answers: {{answer}}</div></div>
</template>


<script>
  export default {
        props:['answer','indexItem'],
        data:() => ({
          rightAnswer: false,
          wrongAnswer: false
        }),
        methods:{
      checkAnswer(event){
        const storeEl = this.$store.state;
        if(this.answer === storeEl.gameElements[storeEl.currentQuestion].correctAnswer){
          this.rightAnswer = !this.rightAnswer;
          setTimeout(() => {
            this.$store.state.currentQuestion++;
          }, 2200)
        } else {
          this.wrongAnswer = !this.wrongAnswer;
          let correctAns = storeEl.gameElements[storeEl.currentQuestion].allAnswers.indexOf(storeEl.gameElements[storeEl.currentQuestion].correctAnswer);
          event.target.parentNode.parentNode.children[correctAns].children[0].classList.add('flashing-green');
          setTimeout(() => {
            this.$router.push({name: 'lost'});
          }, 2200)
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

  .red{
    background-color: red;
  }

  .green{
    background-color: green;
  }

  .flashing-green{
    animation: flash .5s linear 4 forwards;
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
