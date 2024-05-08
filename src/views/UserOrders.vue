<template>
  <div class="container">
    <h1 class="mb-4 mt-2 h1 fw-bold text-center">Your Orders</h1>
    <div class="row">
      <div class="col-md-6" v-for="order in orders" :key="order.id">
        <div class="card mb-3">
          <div class="card-header h4 text-center fw-bold">
            Order ID: {{ order.id }}
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <!-- <img src="https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?t=st=1713204170~exp=1713207770~hmac=b0ca2daadb87c60bbc11bbab878f97e471514fd1953da622388648dd63478e53&w=200" style="width: 120px;" alt="shopping" class="card-img-top img-fluid"> -->
                <p class="card-text h5 fw-bold">Total: {{ order.total }}€</p>
                <p class="card-text h5 fw-bold">Prepared <i class="bi bi-hourglass"></i> : {{ order.prepared ? 'Yes' : 'No' }}</p>
                <p class="card-text h5 fw-bold">Created At <i class="bi bi-calendar3"></i> : {{ formatDate(order.created_at) }}</p>
              </div>
              <div class="col-md-6 ">
                <div class="d-flex justify-content-end">
                  <vue-barcode :value="order.id" :options="{ width: 2.5, height: 40 }"></vue-barcode>
                </div>
              </div>

              <!-- <p class="card-text">Mobile: {{ order.mobile }}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Address: {{ order.address }}</li>
              <li class="list-group-item">City: {{ order.city }}</li>
              <li class="list-group-item">Postal Code: {{ order.postal_code }}</li>
              <li class="list-group-item">Country: {{ order.country }}</li>
              <li class="list-group-item">Province: {{ order.province }}</li>
            </ul> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-if="orders.length === 0" class="mt-4">No orders found.</p>
  </div>
</template>

<script>
import VueBarcode from '@chenfengyuan/vue-barcode';

export default {
  data() {
    return {
      orders: [],
    };
  },
  components: {
    VueBarcode,
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      try {
        const userId = localStorage.getItem('user_id');
        const response = await fetch(`http://localhost:8000/user/${userId}/orders`);
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const orders = await response.json();
        this.orders = orders;
        console.log(orders)
      } catch (error) {
        console.error(error);
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString.date);
      const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: dateString.timezone,
      });
      return formattedDate;
    },
  },
};
</script>
