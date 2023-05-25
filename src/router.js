import { createRouter, createWebHistory } from 'vue-router'
import * as consts from "@/assets/js/const.js";
import select from '@/components/pages/select.vue'
import login from '@/components/pages/login.vue'
import assigned from '@/components/pages/assigned.vue'
import ranking from '@/components/pages/ranking.vue'
import game_easy1 from '@/components/pages/game/easy1.vue'
import game_easy2 from '@/components/pages/game/easy2.vue'
import game_easy3 from '@/components/pages/game/easy3.vue'
import NotFound from '@/components/pages/error/404.vue'

const routes = [
  { path: '/', component: select },
  { path: '/game/select', name: 'select', component: select },
  { path: '/login', name: 'login', component: login },
  { path: '/assigned', name: 'assigned', component: assigned },
  { path: '/ranking', name: 'ranking', component: ranking },
  { path: '/game/' + consts.GAME_LEVEL_EASY_1, name: 'easy1', component: game_easy1 },
  { path: '/game/' + consts.GAME_LEVEL_EASY_2, name: 'easy2', component: game_easy2 },
  { path: '/game/' + consts.GAME_LEVEL_EASY_3, name: 'easy3', component: game_easy3 },
  { path: '/:catchAll(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
