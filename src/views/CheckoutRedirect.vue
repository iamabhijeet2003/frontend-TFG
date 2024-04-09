<template>
  <div>
    <h1>Checkout Page</h1>
    <button @click="redirectToCheckout">Proceed to Checkout</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      checkoutUrl: ''
    };
  },
  methods: {
    async fetchCheckoutUrl() {
      try {
        const data = {

          "amount_total": 500,
          "created": "John Doe",
          "successUrl": "https://example.com/success",
          "cancelUrl": "https://example.com/cancel"

        }
        // Make a request to your backend to fetch the dynamic checkout URL
        const response = await axios.post('http://localhost:8000/stripe/create-checkout-session', data, {
          // Pass any necessary data to the backend if needed

        });

        // Update the checkoutUrl with the received URL
        this.checkoutUrl = response.data.url;
      } catch (error) {
        console.error('Error fetching checkout URL:', error);
      }
    },
    redirectToCheckout() {
      // Redirect the user to the Stripe Checkout page
      window.location.href = this.checkoutUrl;
    }
  },
  mounted() {
    // Fetch the checkout URL when the component is mounted
    this.fetchCheckoutUrl();
  }
};
</script>

<style>
/* Your styles */
</style>