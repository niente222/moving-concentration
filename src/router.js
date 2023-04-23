import { createRouter, createWebHistory } from 'vue-router'
import select from '@/components/pages/select.vue'
import login from '@/components/pages/login.vue'
import assigned from '@/components/pages/assigned.vue'

const routes = [
  { path: '/', name: 'select', component: select },
  { path: '/select', name: 'select', component: select },
  { path: '/login', name: 'login', component: login },
  { path: '/assigned', name: 'assigned', component: assigned },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
