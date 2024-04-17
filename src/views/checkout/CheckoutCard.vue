<template>
    <button @click="redirectToPaymentPage" class="btn btn-outline-primary fs-1 fw-bold">Pay with Card <i class="bi bi-credit-card-2-back"></i></button>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        async redirectToPaymentPage() {
            try {
                // Retrieve total price from localStorage
                const totalPrice = localStorage.getItem('cartTotal');

                // Get the current timestamp
                const created_at = new Date().toISOString();

                // Construct the data object with necessary information
                const data = {
                    amount_total: totalPrice,
                    created: created_at,
                    successUrl: `http://localhost:8082/checkout?session_id={CHECKOUT_SESSION_ID}`,
                    cancelUrl: "http://localhost:8082/paymentmethod"
                };

                // Make a request to your backend to fetch the dynamic checkout URL
                const response = await axios.post('http://localhost:8000/stripe/create-checkout-session', data);

                // Redirect the user to the Stripe Checkout page
                window.location.href = response.data.url;
            } catch (error) {
                console.error('Error redirecting to payment page:', error);
            }
        }
    }
};
</script>
