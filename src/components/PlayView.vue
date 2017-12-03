<template>
  <div v-if="questionsGot.length">
    <div class="row margin-top-80">
        <div class="col-lg-10">
          <div class="row padding-main-container">
              <div class="panel col-sm-12 panel-default">
                <h2 class="text-center h2">Category: {{this.$store.state.gameElements[currentQuestion].category}}, Level: {{this.$store.state.gameLvl}} <br> question: {{this.$store.state.currentQuestion + 1}} out of {{questionsGot.length}} for
                    {{questionsGot[currentQuestion].reward}}$
                </h2>
              </div>
          </div>
          <div class="row margin-top-35">
              <questions></questions>
          </div>
          <div class="row margin-top-35">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="row">
                  <answers :key="answer" :class="{'flashing-green': correctAnswer == answer && answerChecked, 'red': (answer != correctAnswer) && (userAnswer === answer) && answerChecked, 'inactive-btns': answer !== userAnswer && answerChecked}" :answer="answer" @userAnswer="validateAnswers($event)" v-for="(answer, index) in questionsGot[currentQuestion].allAnswers"></answers>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="row">
              <div :class="addClasses(index)" :key="index" v-for="(item, index) in questionsGot" class="column text-center panel panel-default col-lg-12">{{item.reward.toLocaleString()}}$</div>
          </div>
        </div>
    </div>
  </div>
</template>


<script>
 import axios from 'axios'
 import {REWARDS} from '../rewards'
 import {formatGameObj} from '../formatter'
 import Answers from './Answers.vue'
 import Questions from './Questions.vue'

  export default {
    components:{
      Answers,
      Questions
    },
    data: () => ({
      questionsGot:[],
      answerChecked: false,
      userAnswer: null
    }),
    computed:{
      currentQuestion(){
        return this.$store.state.currentQuestion;
      },
      correctAnswer(){
        return this.$store.state.gameElements[this.currentQuestion].correctAnswer;
      }
    },
    methods:{
      addClasses(index){
        if(index < this.currentQuestion){
          return 'passed'
        }
        if(index === this.currentQuestion){
          return 'active'
        }
      },
      validateAnswers(answer){
        if(this.answerChecked){
          return
        }
        this.answerChecked = true;
        this.userAnswer = answer;

        setTimeout(()=>{
          this.answerChecked = false;
          this.userAnswer = null;
        }, 2200)
      }
    },
    created(){
      this.$store.state.gameElements = [];
      let vm = this;
      axios.get('https://opentdb.com/api.php?amount=15&difficulty='+ this.$store.state.gameLvl +'&type=multiple')
      .then(function (serverData) { 
        serverData.data.results.map((item, index) => {
          let obj = formatGameObj(item);
          obj.reward = REWARDS[index];
          vm.$store.state.gameElements.push(obj);
          vm.questionsGot = vm.$store.state.gameElements;     
        });       
      });
    }
  }

</script>

<style lang="scss">
  .panel{
    margin-bottom: 15px; 
  }

  .passed{
    background-color: lightcoral;
  }

  .active{
    animation: blink infinite 1.5s;
    background-color: lightgreen;
  }

  @keyframes blink {
    0% {opacity: 0}
    50% {opacity: 1}
    100% {opacity: 0}
  }
  
  .inactive-btns div{
    pointer-events: none;
    cursor: none;
    // background-color: yellow;
  }

    .margin-top-80{
      margin-top: 80px; 
  }

    .margin-top-35{
      margin-top: 35px; 
  }

  .padding-main-container{
    padding: 0 15px;
  }

  .red > div{
  background-color: red;
  transition: background-color 1s;
  }

  .flashing-green > div {
    animation: flash .5s linear 4 forwards;
  }
  
  
</style>
