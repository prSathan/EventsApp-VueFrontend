import Vue from 'vue'
import Router from 'vue-router'
import createEvent from '@/components/createEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'createEvent',
      component: createEvent
    }
  ]
})
