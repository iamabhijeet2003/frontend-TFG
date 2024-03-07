<template>
    <div>
      <h1>Checkout Page</h1>
      <form @submit.prevent="submitOrder">
        <div class="mb-3">
          <label for="totalPrice" class="form-label">Total Price</label>
          <input type="text" class="form-control" id="totalPrice" v-model="formData.totalPrice" readonly>
        </div>
        <div class="mb-3">
          <label for="createdAt" class="form-label">Created At</label>
          <input type="datetime-local" class="form-control" id="createdAt" v-model="formData.created_At" >
        </div>
        <div class="mb-3">
          <label for="userId" class="form-label">User ID</label>
          <input type="text" class="form-control" id="userId" v-model="formData.user_Id" required>
        </div>
        <button type="submit" class="btn btn-primary">Place Order</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        formData: {
          totalPrice: 0,
          created_At: '',
          user_Id: ''
        }
      };
    },
    methods: {
      async submitOrder() {
        try {
          // Step 1: Create the order
          const orderData = {
            total: parseFloat(this.formData.totalPrice),
            createdAt: this.formData.created_At,
            userId: `/api/users/${this.formData.user_Id}`
          };
          const order = await createOrder(orderData);
          console.log('Order created successfully:', order);
  
          // Step 2: Retrieve the order ID
          const orderId = order.id;
  
          // Step 3: Post the order details
          const cartItems = JSON.parse(localStorage.getItem('cart'));
          for (const item of cartItems) {
            const orderDetailsData = {
              orderId: `/api/orders/${orderId}`,
              productId: `/api/products/${item.id}`,
              quantity: item.qty,
              pricePerUnit: item.price,
              totalPrice: item.qty * item.price
            };
            await createOrderDetails(orderDetailsData);
            console.log('Order detail created successfully:', orderDetailsData);
          }
  
          // Optionally, you can redirect to a confirmation page or show a success message here
        } catch (error) {
          console.error('Checkout process failed:', error);
          // Optionally, you can show an error message to the user
        }
      }
    },
    mounted() {
      this.formData.created_At = new Date().toISOString().slice(0, 16);
      this.formData.totalPrice = this.$store.state.cartTotal;
    }
  };
  
  async function createOrder(orderData) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://127.0.0.1:8000/api/orders', orderData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/ld+json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }
  
  async function createOrderDetails(orderDetailsData) {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://127.0.0.1:8000/api/order_details', orderDetailsData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/ld+json'
        }
      });
    } catch (error) {
      console.error('Error creating order details:', error);
      throw error;
    }
  }
  </script>
  
  <style>
  /* Add custom styles here if needed */
  </style>
  
<!--
<template>
    <div>
      <h1>Checkout Page</h1>
      <form @submit.prevent="submitOrder">
        <div class="mb-3">
          <label for="totalPrice" class="form-label">Total Price</label>
          <input type="text" class="form-control" id="totalPrice" v-model="formData.totalPrice" readonly>
        </div>
        <div class="mb-3">
          <label for="createdAt" class="form-label">Created At</label>
          <input type="datetime-local" class="form-control" id="createdAt" v-model="formData.created_At" >
        </div>
        <div class="mb-3">
          <label for="userId" class="form-label">User ID</label>
          <input type="text" class="form-control" id="userId" v-model="formData.user_Id" required>
        </div>
        <button type="submit" class="btn btn-primary">Place Order</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        formData: {
          totalPrice: 0,
          created_At: '',
          user_Id: ''
        }
      };
    },
    methods: {
      async submitOrder() {
        try {
          const orderData = {
            total: parseFloat(this.formData.totalPrice),
             createdAt: this.formData.created_At,
            //createdAt: '2024-03-06 19:01:20',
            userId: `/api/users/${this.formData.user_Id}`
          };
          console.log(orderData)
          const order = await createOrder(orderData);
          console.log('Order created successfully:', order);
          // Optionally, you can redirect to a confirmation page or show a success message here
        } catch (error) {
          console.error('Checkout process failed:', error);
          // Optionally, you can show an error message to the user
        }
      }
    },
    mounted() {
      this.formData.createdAt = new Date().toISOString().slice(0, 16);
      this.formData.totalPrice = this.$store.state.cartTotal;
    }
  };
  
  async function createOrder(orderData) {
    try {
      //const token = localStorage.getItem('token');
      const response = await axios.post('http://127.0.0.1:8000/api/orders', orderData, {
        headers: {
        //   'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/ld+json'
        }
      });
      console.log(response)
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }
  </script>
  
  <style>
  /* Add custom styles here if needed */
  </style>
  -->