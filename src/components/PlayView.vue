<template>
  <div>
    <div class="row">
          <div class="margin-top-40 panel panel-default col-lg-10">
              <h2 class="text-center h2 text-muted">This is question {{currentQuestion + 1}} out of {{questionsGot.length}} for {{questionsGot[currentQuestion].reward}}$</h2>
              <div>
                  <img class="center-block" src="assets/logo.png" alt="">
              </div> 
          </div>
          <div class="column panel panel-default col-lg-2">rewards</div>
      </div>
      <div class="row">
        <div v-if="questionsGot.length" v-html="questionsGot[0].question" class="column panel panel-default col-lg-12">Question: {{questionsGot[currentQuestion].question}}</div>
      </div>
      <div class="row">
        <div v-for="answer in questionsGot[0].allAnswers" class="column panel panel-default col-lg-6">Answers: {{answer}}</div>
      </div>
  </div>  
</template>


<script>
 import axios from 'axios'
 import {REWARDS} from '../rewards'  

  export default {
    data: () => ({
      questionsGot:[],
      currentQuestion: 0
    }),
    created(){
      let vm = this;
      axios.get('https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple')
      .then(function (serverData) {        
        serverData.data.results.map((item, index) => {
          let randomAnswerPos = Math.ceil((Math.random() * 4));
          let obj = {};
          obj.question = item.question;
          obj.category = item.category;
          obj.correctAnswer = item.correct_answer;
          obj.wrongAnswers = item.incorrect_answers;
          obj.allAnswers = [];
          obj.wrongAnswers.map((item, index) => {
            obj.allAnswers.push(item)
          })
          obj.allAnswers.splice(randomAnswerPos, 0, obj.correctAnswer)
          obj.reward = REWARDS[index];
          vm.questionsGot.push(obj)
          obj = {}        
        })
        
      })
     
        console.log(vm.questionsGot)
    }
  }

</script>
