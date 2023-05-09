import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from "@/store/index.js"
import '@/assets/css/style.css'
import '@/assets/css/cards/card.css'
import '@/assets/css/header.css'
import '@/assets/css/footer.css'
import '@/assets/css/ranking.css'
import '@/assets/css/game.css'

const app = createApp(App)
app.use(router)
app.use(store);
app.mount('#app')