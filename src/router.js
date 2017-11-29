import Vue from 'vue';
import Router from 'vue-router';
import Introduction from './components/Introduction.vue';
import PlayView from './components/PlayView.vue';
import Settings from './components/Settings.vue';
import LostGame from './components/LostGame.vue';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            component: Introduction,
            name: 'introduction'
        },
        {
            path: '/play',
            component: PlayView,
            name: 'play'
        },
        {
            path: '/settings',
            component: Settings,
            name: 'settings'
        },
        {
          path: '/lost',
          component: LostGame,
          name: 'lost'
        }

    ]
})