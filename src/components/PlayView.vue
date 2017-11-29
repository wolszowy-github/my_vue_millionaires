<template>
  <div v-if="questionsGot.length">
    <div class="row">
      <game-status></game-status>
      <div :class="addClasses(index)" :key="index" v-for="(item, index) in questionsGot" class="column panel panel-default col-lg-2">{{item.reward}}$</div>
    </div>
    <div class="row">
      <questions></questions>
    </div>
    <div class="row">
      <div class="col-lg-6 col-lg-offset-3">
        <div class="row">
          <answers  :key="answer" :answer="answer" v-for="(answer, index) in questionsGot[currentQuestion].allAnswers"></answers> 
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
 import GameStatus from './GameStatus.vue'

  export default {
    components:{
      Answers,
      Questions,
      GameStatus
    },
    data: () => ({
      questionsGot:[]
    }),
    computed:{
      currentQuestion(){
        return this.$store.state.currentQuestion;
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

<style lang="scss" scoped>
  .panel{
    margin-bottom: 7px; 
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
  
  .gray{
    background-color: gray !important;
  }

</style>
