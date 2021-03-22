import Vue from 'vue';
import Router from 'vue-router';
import Start from '@/components/pages/Start';
import Dictionary from '@/components/pages/Dictionary';
import RandomWord from '@/components/pages/RandomWord';
import GuessWord from '@/components/pages/GuessWord';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },

    {
      path: '/dictionary',
      name: 'Dictionary',
      component: Dictionary
    },

    {
      path: '/random-word',
      name: 'Random Word',
      component: RandomWord
    },

    {
      path: '/guess-word',
      name: 'Guess Word',
      component: GuessWord
    }
  ]
})
