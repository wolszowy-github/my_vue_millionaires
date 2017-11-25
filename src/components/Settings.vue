<template>
    <div>
        <form>
            <div class="form-group text-center">
                <label for="choose-level">Choose level</label>
                <select @click="setGameLvl" v-model="userLevel" id="choose-level">
                    <option :key="level" v-for="level in levels" class="form-control">{{level}}</option> 
                </select>
            </div>
        </form> 
        <div v-if="userLevel" class="text-center margin-bottom-40">
            <router-link tag="button" :to="{name: 'play'}" class="btn primary">Begin challange</router-link>
        </div>
    </div> 
</template>

<script>
    export default {
      data: () => (
        {
            levels: ['easy', 'medium', 'hard'],
            userLevel: ''      
        }
      ),
      methods: {
        setGameLvl(){
            this.$store.state.gameLvl = this.userLevel;    
        }
      }
    }
</script>



<style lang="scss" scoped>

    .margin-top-40{
       margin-top: 40px; 
    }

     .margin-bottom-40{
       margin-bottom: 40px; 
    }

</style>

