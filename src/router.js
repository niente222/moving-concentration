import { createRouter, createWebHistory } from 'vue-router'
import select from '@/components/pages/select.vue'
import login from '@/components/pages/login.vue'
import assigned from '@/components/pages/assigned.vue'
import game_low from '@/components/pages/game/low.vue'

const routes = [
  { path: '/', name: 'select', component: select },
  { path: '/select', name: 'select', component: select },
  { path: '/login', name: 'login', component: login },
  { path: '/assigned', name: 'assigned', component: assigned },
  { path: '/game/low', name: 'game_low', component: game_low },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
