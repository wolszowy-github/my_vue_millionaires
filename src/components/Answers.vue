<template>
      <div @click="checkAnswer" class="col-lg-6"><div v-html="answer" :class="{'green':rightAnswer,'red': wrongAnswer}" class="answers-color column panel panel-default text-center">Answers: {{answer}}</div></div>
</template>


<script>
  export default {
        props:['answer'],
        data:() => ({
          rightAnswer: false,
          wrongAnswer: false
        }),
        methods:{
      checkAnswer(){
        const storeEl = this.$store.state;
        if(this.answer === storeEl.gameElements[storeEl.currentQuestion].correctAnswer){
          this.rightAnswer = !this.rightAnswer;
          setTimeout(() => {
            this.$store.state.currentQuestion++;
          }, 3000)
        } else {
          this.wrongAnswer = !this.wrongAnswer;
          setTimeout(() => {
            this.$router.push({name: 'lost'});
          }, 3000)
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

  .gray{
    pointer-events: none;
    background-color: darkgray;
  }
  
</style>
