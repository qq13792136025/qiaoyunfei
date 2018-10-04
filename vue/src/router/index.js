import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import Navbar from '@/components/AppComponents/Navbar'
import Navbarone from '@/components/AppComponents/Navbarone'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/',
          name: 'Navbar',
          component: Navbar,
          children: [
          	{
          	path: '/Navbarone',
         	 name: 'Navbarone',
          	component: Navbarone
       		 },
 
      		]
        },
      ]
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})

