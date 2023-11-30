import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import 'primevue/resources/themes/md-dark-indigo/theme.css'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Signup from './pages/Signup.vue'
import Test from './pages/Test2.vue'
import Garph from './pages/Garph.vue'
import Chat from './pages/Chat.vue'
import Emergency from './pages/Emergency.vue'
import User from './pages/User.vue'


const pinia = createPinia()
const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/signup', component: Signup },
        { path: '/test', component: Test },
        { path: '/garph', component: Garph },
        { path: '/chat', component: Chat },
        { path: '/emergency', component: Emergency },
        { path: "/user/:id", component: User }

    ]
})

app.use(PrimeVue)
app.use(ToastService)
app.use(pinia)
app.use(router)
app.mount('#app')
