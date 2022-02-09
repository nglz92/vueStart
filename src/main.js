import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { TroisJSVuePlugin } from 'troisjs'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(TroisJSVuePlugin)
app.use(gsap)
app.use(router)
app.mount('#app')
