<template>
    <button @click="redirectToPaymentPage" class="btn btn-outline-primary fs-1 fw-bold" :class="{ 'loading': isLoading }">
        <span v-if="!isLoading">Pay with Card <i class="bi bi-credit-card-2-back"></i></span>
        <span v-else>Loading...</span>
    </button>

</template>

<script>
import axios from 'axios';
import { ROOT_URL } from '@/BaseEndpoint';
export default {
    data() {
        return {
            isLoading: false,
        };
    },
    methods: {
        async redirectToPaymentPage() {
            this.isLoading = true;
            try {
                // Retrieve total price from localStorage
                const totalPrice = localStorage.getItem('cartTotal');

                // Get the current timestamp
                const created_at = new Date().toISOString();

                // Construct the data object with necessary information
                const data = {
                    amount_total: totalPrice,
                    created: created_at,
                    successUrl: `https://proyecto-final-abhi.vercel.app/checkout?session_id={CHECKOUT_SESSION_ID}`,
                    cancelUrl: "https://proyecto-final-abhi.vercel.app/selectpayment"
                };

                // Make a request to your backend to fetch the dynamic checkout URL
                const response = await axios.post(`${ROOT_URL}/stripe/create-checkout-session`, data);
                this.isLoading = false;
                // Redirect the user to the Stripe Checkout page
                window.location.href = response.data.url;
            } catch (error) {
                console.error('Error redirecting to payment page:', error);
                this.isLoading = false;
            }
        }
    }
};
</script>

<style scoped>
.loading {
  position: relative;
}

.loading span {
  visibility: hidden;
}

.loading::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border: 2px solid #ff6666;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
