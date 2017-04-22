import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true,
      meta: {
        title: 'Inicio'
      }
    },
    {
      path: '/:id',
      name: 'detail',
      component: Detail,
      props: true,
      meta: {
        title: 'Detalle'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
