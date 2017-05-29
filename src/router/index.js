import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import MoreInfo from '@/components/MoreInfo'
// import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
        path: '',
        component: Portfolio
      },
      {
        path: '/item/:slug',
        component: MoreInfo
      },
      {
        path: '/overmij',
        component: About
      }
      // {
      //   path: '/contact',
      //   component: Contact
      // }
      ]
    }
  ]
})
