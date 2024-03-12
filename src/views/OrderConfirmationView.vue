<template>
  <div>
    <h1>Order Confirmation</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>Order ID: {{ order.id }}</p>
      <p>Total Price: {{ order.total }}</p>
      <p>Items:</p>
      <ul>
        <li v-for="item in $store.state.cart" :key="item.id">
          {{ item.name }} - Quantity: {{ item.quantity }} - Price: {{ item.price }}
          <img :src="item.image" class="img-fluid rounded-3" alt="Shopping item" style="width: 100px;">

        </li>
      </ul>
      <router-link to="/" class="btn btn-primary mt-3">
        Ya tenemos tu pedido, echa un vistazo a otros productos
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: true,
      order: null,
      orderItems: [],
    };
  },
  mounted() {
    // Fetch order details
    this.fetchOrderDetails();
  },
  methods: {
    async fetchOrderDetails() {
      try {
        const orderId = this.$route.params.orderId;
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://127.0.0.1:8000/api/orders/${orderId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Extract items from the order data
        // This is just an example, modify it according to your API response structure
        this.orderItems = response.data.items;

        // Update order data
        this.order = response.data;
        // Clear cart data from local storage and Vuex store

      } catch (error) {
        console.error('Error fetching order details:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
/* Add custom styles here if needed */
</style>