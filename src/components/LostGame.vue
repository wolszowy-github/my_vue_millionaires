<template>
    <div class="row">
        <div class="margin-top-80 panel panel-default col-lg-10 col-lg-offset-1 game-container">
            <h1 class="text-center margin-top-35">Oooooh noooooooo! </h1>
            <h2 class="text-center h4">You lost... Try better luck next time.</h2>
            <div>
                <img class="center-block img-responsive max-img-wth" src="src/assets/end.png" alt="">
            </div>
            <div class="text-center margin-bottom-40">
                <router-link tag="button" :to="{name: 'introduction'}" class="btn primary">Try again</router-link>
            </div>  
        </div>
    </div>
</template>


<script>



</script>

<style lang="scss" scoped>
  .max-img-wth{
    max-width: 350px;
  }

  
</style>
