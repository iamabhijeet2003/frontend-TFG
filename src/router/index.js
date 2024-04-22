// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import store from '../store/';
import { authMiddleware } from '../middleware/auth.js';
import UserOrders from '../views/UserOrders.vue';
import ProductSearch from '@/components/product/ProductSearch.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('../views/ProductsView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/products/samsung',
        name: 'productssamsung',
        component: () => import('../views/products/SamsungProducts.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/products/apple',
        name: 'productsapple',
        component: () => import('../views/products/AppleProducts.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/ProductView.vue'),
        props: true, // Pass route params as props to the component
        meta: { requiresAuth: true }
      },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/CartView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../views/CheckoutView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/selectpayment',
        name: 'selectpayment',
        component: () => import('../views/checkout/SelectPaymentMethod.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/UserProfile.vue'),
        meta: { requiresAuth: true }
    },
    // {
    //     path: '/checkout3',
    //     name: 'Checkout3',
    //     component: () => import('../views/checkout/CheckoutTest23.vue'),
    //     meta: { requiresAuth: true }
    // },
    // {
    //     path: '/checkout2',
    //     name: 'Checkout2',
    //     component: () => import('../views/CheckoutRedirect.vue'),
    //     meta: { requiresAuth: true }
    // },
    {
        path: '/checkout-card',
        name: 'checkout-card',
        component: () => import('../views/checkout/CheckoutCard.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/LoginView.vue"),
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
        component: () => import('../views/ContactForm.vue'),
    },
    {
        path: '/politicas/politica-privacidad',
        name:"politica-privacidad",
        component:() => import('@/components/politicas/PoliticaPrivacidad.vue'),
    },
    {
        path: '/orders',
        name: 'Orders',
        component: UserOrders,
        meta: { requiresAuth: true }, // Add this meta field if authentication is required to access orders
      },
      {
        path: '/product/search',
        name: 'ProductSearch',
        component: ProductSearch,
      },

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