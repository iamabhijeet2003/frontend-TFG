// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue';
import Login from "../views/LoginView.vue";
//import store from '../store/';
import { authMiddleware } from '../middleware/auth.js';
import ContactForm from '../views/ContactForm.vue';
import PoliticaPrivacidad from '@/components/politicas/PoliticaPrivacidad.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: { requiresAuth: true }
    },
    {
        path: '/products',
        name: 'products',
        component: ProductsView,
        meta: { requiresAuth: true }
    },
    {
        path: '/cart',
        name: 'Cart',
        component: CartView,
        meta: { requiresAuth: true }
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: CheckoutView,
        meta: { requiresAuth: true }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: () => import('../views/RegisterView.vue'),
    },
    {
        path: '/order-confirmation/:orderId', // Dynamic segment for order ID
        name: 'OrderConfirmation',
        component: () => import('../views/OrderConfirmationView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactForm,
    },
    {
        path: '/politicas/politica-privacidad',
        name:"politica-privacidad",
        component:PoliticaPrivacidad
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        // Apply authMiddleware to protected routes
        authMiddleware(to, from, next);
    } else {
        // For non-protected routes, proceed to the next route
        next();
    }
});

export default router