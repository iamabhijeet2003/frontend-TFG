// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
//import store from '../store/';
import { authMiddleware } from '../middleware/auth.js';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
        //meta: { requiresAuth: true }
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
        component: () => import('../views/OrderConfirmationView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/ContactForm.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/politicas/politica-privacidad',
        name:"politica-privacidad",
        component:() => import('@/components/politicas/PoliticaPrivacidad.vue'),
    },
    {
        path: '/orders',
        name: 'Orders',
        component: ()=> import('../views/UserOrders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/product/search',
        name: 'ProductSearch',
        component: () => import('@/components/product/ProductSearch.vue'),
        meta: { requiresAuth: true }
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