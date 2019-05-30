import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloCountry from '@/components/HelloCountry'
import HelloTemp from '@/components/HelloTemp'


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
    },
    {
      path: '/HelloTemp',
      name: 'HelloTemp',
      component: HelloTemp
    }
  ]
})
