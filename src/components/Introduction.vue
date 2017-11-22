<template>
    <div class="row">
        <div class="cnt-black margin-top-40 panel panel-default col-lg-12">
            <h1 class="text-center h2 text-muted">Czy chcesz zostać Milionerem? <br> Zagraj!</h1>
            <div>
                <img class="center-block" src="assets/logo.png" alt="">
            </div>
            <div class="text-center margin-bottom-40">
                <router-link tag="button" :to="{name: 'play'}" class="btn primary">Rozpocznij Grę!</router-link>
            </div>  
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .margin-top-40{
       margin-top: 40px; 
    }

     .margin-bottom-40{
       margin-bottom: 40px; 
    }

</style>

