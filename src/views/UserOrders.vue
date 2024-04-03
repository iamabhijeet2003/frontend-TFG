<template>
    <div>
      <h1>User Orders</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-if="orders.length === 0">No orders found.</div>
        <div v-else>
          <div v-for="order in orders" :key="order.id">
            <h3>Order ID: {{ order.id }}</h3>
            <p>User ID: {{ order.user_id }}</p>
            <p>Total Price: {{ order.total }}</p>
            <p>Created At: {{ order.createdAt }}</p>
            <p>Items:</p>
            <ul>
              <li v-for="item in order.orderDetails" :key="item.id">
                {{ item.name }} 
                    - Quantity: {{ item.quantity }} 
                    - Price: {{ item.pricePerUnit }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserOrders',
    data() {
      return {
        loading: true,
        orders: [],
      };
    },
    async mounted() {
      try {
        // Step 1: Fetch user orders
        const orders = await this.fetchUserOrders();
        console.log('User orders:', orders);
        this.orders = orders;
      } catch (error) {
        console.error('Error fetching user orders:', error);
        // Optionally, you can show an error message to the user
      } finally {
        this.loading = false;
      }
    },
    methods: {
      async fetchUserOrders() {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('http://127.0.0.1:8000/api/orders', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/ld+json',
            },
          });
          return response.data['hydra:member'];
        } catch (error) {
          console.error('Error fetching user orders:', error);
          throw error;
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add custom styles here if needed */
  </style>
  