import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloCountry from '@/components/HelloCountry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloCountry',
      name: 'HelloCountry',
      component: HelloCountry
    }
  ]
})
