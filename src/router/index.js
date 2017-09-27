import Vue from 'vue'
import Router from 'vue-router'
import createEvent from '@/components/createEvent'
import viewEvent from '@/components/viewEvent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'createEvent',
      component: createEvent
    },
    {
      path: '/events',
      name: 'viewEvent',
      component: viewEvent
    }
  ]
})
