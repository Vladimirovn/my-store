import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import './style.css'
import 'vue-material-design-icons/styles.css';


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createRouter, createWebHistory } from 'vue-router'

const vuetify = createVuetify({
    components,
    directives,
})

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/',
        name: 'main',
        component: () => import('@/components/MainPage.vue')
      },
      { path: '/catalog',
        name: 'catalog',
        component: () => import('@/components/CatalogPage.vue') 
      },
      { path: '/order',
        name: 'order',
        component: () => import('@/components/OrderPage.vue') 
      },
      { path: '/cart',
        name: 'cart',
        component: () => import('@/components/CartPage.vue') 
      },
    ]
})

const pinia = createPinia()
const app = createApp(App)

app.use(vuetify)
app.use(pinia)
app.use(router)

app.mount('#app')
