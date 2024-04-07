<!-- frontend-proyecto-02/src/views/CheckoutView.vue -->
<template>
  <div>
    <h1>Checkout Page</h1>
    <form @submit.prevent="submitOrder">
      <div class="mb-3">
        <label for="totalPrice" class="form-label">Total Price</label>
        <input type="text" class="form-control" id="totalPrice" v-model="formData.totalPrice" readonly>
      </div>
      <div class="mb-3">
        <input type="datetime-local" class="form-control" v-model="formData.created_at">
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control" id="address" v-model="formData.address">
      </div>
      <div class="mb-3">
        <label for="city" class="form-label">city</label>
        <input type="text" class="form-control" id="city" v-model="formData.city">
      </div>
      <div class="mb-3">
        <label for="province" class="form-label">Province</label>
        <select required name="province" class="form-control" v-model="formData.province">
          <option value="">Choose Province</option>
          <option value="alava">alava</option>
          <option value="albacete">albacete</option>
          <option value="alicante">alicante</option>
          <option value="almeria">almeria</option>
          <option value="asturias">asturias</option>
          <option value="avila">avila</option>
          <option value="badajoz">badajoz</option>
          <option value="baleares">baleares</option>
          <option value="barcelona">barcelona</option>
          <option value="burgos">burgos</option>
          <option value="caceres">caceres</option>
          <option value="cadiz">cadiz</option>
          <option value="cantabria">cantabria</option>
          <option value="castellon">castellon</option>
          <option value="ceuta">ceuta</option>
          <option value="ciudad real">ciudad real</option>
          <option value="cordoba">cordoba</option>
          <option value="cuenca">cuenca</option>
          <option value="gerona">gerona</option>
          <option value="granada">granada</option>
          <option value="guadalajara">guadalajara</option>
          <option value="guipuzcoa">guipuzcoa</option>
          <option value="huelva">huelva</option>
          <option value="huesca">huesca</option>
          <option value="jaen">jaen</option>
          <option value="la coruna">la coruna</option>
          <option value="la rioja">la rioja</option>
          <option value="las palmas">las palmas</option>
          <option value="leon">leon</option>
          <option value="lerida">lerida</option>
          <option value="lugo">lugo</option>
          <option value="madrid">madrid</option>
          <option value="malaga">malaga</option>
          <option value="melilla">melilla</option>
          <option value="murcia">murcia</option>
          <option value="navarra">navarra</option>
          <option value="orense">orense</option>
          <option value="palencia">palencia</option>
          <option value="pontevedra">pontevedra</option>
          <option value="salamanca">salamanca</option>
          <option value="segovia">segovia</option>
          <option value="sevilla">sevilla</option>
          <option value="soria">soria</option>
          <option value="tarragona">tarragona</option>
          <option value="tenerife">tenerife</option>
          <option value="teruel">teruel</option>
          <option value="toledo">toledo</option>
          <option value="valencia">valencia</option>
          <option value="valladolid">valladolid</option>
          <option value="vizcaya">vizcaya</option>
          <option value="zamora">zamora</option>
          <option value="zaragoza">zaragoza</option>
          
        </select>
      </div>
      <div class="mb-3">
        <label for="postalCode" class="form-label">Postal Code</label>
        <input type="number" class="form-control" id="postalCode" v-model="formData.postalCode">
      </div>
      <div class="mb-3">
        <label for="pc" class="form-label">mobile</label>
        <input type="number" class="form-control" id="pc" v-model="formData.mobile">
      </div>
      <!-- <div class="mb-3">
        <label for="userId" class="form-label">User ID</label>
        <input type="text" class="form-control" id="userId" v-model="formData.user_Id" required>
      </div> -->
      <button type="submit" class="btn btn-primary">Place Order</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
export default {
  data() {
    return {
      formData: {
        totalPrice: 0,
        created_at: '',
        address: '',
        city: '',
        mobile: 0,
        postalCode: 0,
        province: ''
      }
    };
  },
  methods: {
    async submitOrder() {
      try {
        // Step 1: Create the order
        // Retrieve user_id from localStorage
        const userId = localStorage.getItem('user_id');
        const orderData = {
          total: parseFloat(this.formData.totalPrice),
          createdAt: this.formData.created_at,
          userId: `/api/users/${userId}`,
          address: this.formData.address,
          city: this.formData.city,
          mobile: this.formData.mobile,
          postalCode: parseInt(this.formData.postalCode),
          country: 'spain',
          province: this.formData.province
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

        router.push({ name: 'OrderConfirmation', params: { orderId: orderId } });
      } catch (error) {
        console.error('Checkout process failed:', error);
        // Optionally, you can show an error message to the user
      }
    }
  },
  mounted() {
    this.formData.created_at = new Date().toISOString().slice(0, 16);
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
    await axios.post('http://127.0.0.1:8000/api/order_detailss', orderDetailsData, {
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