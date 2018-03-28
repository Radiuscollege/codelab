import Vue from 'vue'
import Router from 'vue-router'
import Skillkaarten from '@/components/Stageopdrachten'
import Home from '@/components/Home.vue'
import Planning from '@/components/Planning.vue'
import Orientatie from '@/components/Orientatie.vue'
import Checklist from '@/components/Checklist.vue'
import CodelabAssignment from '@/components/CodelabAssignment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Skillkaarten',
      name: 'Skillkaarten',
      component: Skillkaarten
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/planning',
      name: 'Planning',
      component: Planning
    },
    {
      path: '/orientatieopdracht',
      name: 'Orientatie',
      component: Orientatie
    },
    {
      path: '/checklist',
      name: 'Checklist',
      component: Checklist
    },
    {
      path: '/codelab-assignments',
      name: 'Codelab_Assignments',
      component: CodelabAssignment
    }
  ]
})
