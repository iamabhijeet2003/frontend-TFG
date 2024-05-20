<!-- frontend-proyecto-02/src/views/CheckoutView.vue -->
<template>
  <div class="tw-container tw-mt-12 tw-form-section tw-mx-auto tw-px-4 tw-font-sans">

    <form @submit.prevent="submitOrder"
      class="tw-shadow-md tw-rounded-lg tw-px-8 tw-py-6 tw-mb-4 tw-border-2 tw-border-gray-200">
      <h1 class="tw-text-xl tw-mb-8 tw-mx-auto tw-text-center tw-font-bold tw-text-purple-600">Checkout Page</h1>
      <div class="mb-3">
        <label for="totalPrice" class="form-label">Total Price</label>
        <input type="text"
          class="tw-bg-gray-200 tw-border-2 tw-border-gray-200 tw-rounded tw-w-full tw-py-2 tw-px-4 tw-text-gray-700 tw-leading-tight tw-focus:outline-none tw-focus:bg-white tw-focus:border-purple-500"
          id="totalPrice" v-model="formData.totalPrice" readonly>
      </div>
      <div class="mb-3">
        <input type="datetime-local"
          class="tw-bg-gray-200 tw-border-2 tw-border-gray-200 tw-rounded tw-w-full tw-py-2 tw-px-4 tw-text-gray-700 tw-leading-tight tw-focus:outline-none tw-focus:bg-white tw-focus:border-purple-500"
          v-model="formData.created_at">
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text"
          class="tw-bg-gray-200 tw-border-2 tw-border-gray-200 tw-rounded tw-w-full tw-py-2 tw-px-4 tw-text-gray-700 tw-leading-tight tw-focus:outline-none tw-focus:bg-white tw-focus:border-purple-500"
          id="address" v-model="formData.address">
      </div>
      <div class="mb-3">
        <label for="city" class="form-label">city</label>
        <input type="text"
          class="tw-ml-1 tw-mt-5 tw-bg-gray-200 tw-border-2 tw-border-gray-200 tw-rounded tw-w-full tw-py-2 tw-px-4 tw-text-gray-700 tw-leading-tight tw-focus:outline-none tw-focus:bg-white tw-focus:border-purple-500"
          id="city" v-model="formData.city" >
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
      <button type="submit"
        class="tw-cursor-pointer tw-mt-7 tw-w-full tw-shadow tw-bg-purple-600 tw-hover:bg-purple-600 tw-focus:tw-shadow-outline tw-focus:tw-outline-none tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-mt-4">Place
        Order
      </button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import router from '@/router';
import { API_ROOT_URL } from '@/apiConfig';
  
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

      }
    },
    async postToPaymentEntity() {
      try {
        // Retrieve user ID from localStorage
        const userId = localStorage.getItem('user_id');
        // Retrieve session ID from localStorage
        const sessionId = localStorage.getItem('sessionId');

        // Check if userId and sessionId exist
        if (!userId || !sessionId) {
          console.error('User ID or Session ID not found in localStorage');
          return;
        }

        // Construct the data object to be sent in the POST request
        const data = {
          user: `/api/users/${userId}`,
          sessionid: sessionId
        };
        const token = localStorage.getItem('token');
        // Make a POST request to the payment entity endpoint
        await axios.post(`${API_ROOT_URL}/payments`, data, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/ld+json'
          }
        });

        console.log('Payment data successfully sent to payment entity');
      } catch (error) {
        console.error('Error posting to payment entity:', error);
      }
    },
  },
  mounted() {
    this.postToPaymentEntity();
    this.formData.created_at = new Date().toISOString().slice(0, 16);
    this.formData.totalPrice = this.$store.state.cartTotal;
    // Parse the URL to get the query parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Get the session ID value from the 'session_id' parameter
    const sessionId = urlParams.get('session_id');

    // Check if sessionId exists and store it in the localStorage
    if (sessionId) {
      localStorage.setItem('sessionId', sessionId);
    } else {
      console.error('Session ID not found in the URL');
    }

    const addressAutocomplete = new google.maps.places.Autocomplete(
    document.getElementById("address")
  );
  addressAutocomplete.setComponentRestrictions({ country: ["ES"] });

  const cityAutocomplete = new google.maps.places.Autocomplete(
    document.getElementById("city")
  );

  const postalCodeAutocomplete = new google.maps.places.Autocomplete(
    document.getElementById("postalCode")
  );

  // Listen for place_changed event on addressAutocomplete
  addressAutocomplete.addListener("place_changed", () => {
    const place = addressAutocomplete.getPlace();
    // Update city and postal code fields if place data is available
    if (place.address_components) {
      for (const component of place.address_components) {
        if (component.types.includes("locality")) {
          this.formData.city = component.long_name;
        } else if (component.types.includes("postal_code")) {
          this.formData.postalCode = component.long_name;
        } else if (component.types.includes("administrative_area_level_1")) {
          this.formData.province = component.long_name;
        }
      }
    }
  });

  }
};

async function createOrder(orderData) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_ROOT_URL}/orders`, orderData, {
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
    await axios.post(`${API_ROOT_URL}/order_detailss`, orderDetailsData, {
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

<style></style>
