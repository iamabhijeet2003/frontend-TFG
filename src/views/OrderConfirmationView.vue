<template>
  <div>
    <h1 class="h1 fw-bold text-center mt-3 mb-2">Order Confirmation</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div
        class="product-ratings tw-relative tw-mx-auto tw-rounded-lg tw-bg-gradient-to-tr tw-from-pink-300 tw-to-blue-300 tw-p-0.5 tw-shadow-lg mx-5">
        <div class="tw-bg-white tw-p-3 tw-rounded-md m-2">
          <p class="fs-4">Order ID: {{ order.id }}</p>
          <p class="fs-4">Total Price: {{ order.total }}</p>
          <p class="fs-4">Items:</p>
          <ul class="fs-4">
            <li v-for="item in $store.state.cart" :key="item.id">
              {{ item.name }} - Quantity: {{ item.quantity }} - Price: {{ item.price }}
              <img :src="item.image" class="img-fluid rounded-3" alt="Shopping item" style="width: 100px;">

            </li>
          </ul>
          <div>
            <div class="row">

              <router-link to="/" class="btn btn-light mt-3 ">
                <span
                  class="tw-text-4xl tw-font-extrabold tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-blue-600 tw-to-indigo-500">Ya
                  tenemos tu pedido, echa un vistazo a otros productos
                  <i class="bi bi-arrow-right-square-fill"></i>
                </span>
              </router-link>


              <router-link to="/orders" class="btn btn-light mt-3">
                <span
                  class="tw-text-4xl tw-font-extrabold tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-blue-600 tw-to-indigo-500">
                  Ver Mis Pedidos <i class="bi bi-bag-check"></i>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
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

        this.orderItems = response.data.items;


        this.order = response.data;

      } catch (error) {
        console.error('Error fetching order details:', error);
      } finally {
        this.loading = false;
      }
    },
    clearCart() {
      // Dispatch action to clear the cart
      this.$store.dispatch('clearCart');
    },
  },
};
</script>

<style>
/* Add custom styles here if needed */
</style>