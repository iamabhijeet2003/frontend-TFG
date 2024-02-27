// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import CartView from '../views/CartView.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/products',
        name: 'products',
        component: ProductsView
    },
    {
        path:'/cart',
        name:'Cart',
        component:CartView
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router