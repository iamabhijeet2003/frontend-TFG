<!--frontend/src/views/ProductsView.vue-->
<template>
  <div class="container-fluid px-5 mt-5">
    <div class="btn-group mb-3">
      <button @click="sortByPrice('asc')" class="btn btn-sm btn-primary">Sort by Price (Asc)</button>
      <button @click="sortByPrice('desc')" class="btn btn-sm btn-primary">Sort by Price (Desc)</button>
    </div>
    <!-- Sort buttons for name -->
    <div class="btn-group mb-3">
      <button @click="sortByName('asc')" class="btn btn-sm btn-primary">Sort by Name (Asc)</button>
      <button @click="sortByName('desc')" class="btn btn-sm btn-primary">Sort by Name (Desc)</button>
    </div>
    <div v-if="loading"><span class="loader"></span></div>
    <div class="row g-4" v-if="!loading && products.length">
      <div class="col-12 col-md-4 col-lg-2 d-flex justify-content-around" v-for="product in products"
        :key="product['@id']">
        <div class="card border border-3">
          <img :src="product.image" class="card-img-top img-fluid" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title fw-bold h5 text-center">{{ product.name }}</h5>
            <!-- <p class="card-text">{{ product.description }}</p> -->
            <hr>
            <p class="card-text fw-bold h5">{{ product.price }}€</p>

          </div>
          <div class="text-end me-3 mb-3">
            <!-- <button class="btn btn-warning fw-bolder">ADD TO CART</button>  -->
            <!-- <a href="#" @click="addToCart(item)" class="btn btn-primary"
            >Add to cart</a
          > -->
            <!-- <button class="btn btn-warning fw-bolder" @click="addToCart(item)">ADD TO CART</button> -->
            <div class="btn-group">
              <CartBTN :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!loading && !products.length">No products available</div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_ROOT_URL } from '@/apiConfig';
import CartBTN from '../components/CartBTN.vue';
import { mapState } from "vuex";
export default {
  data() {
    return {
      loading: true,
      products: [],
    };
  },
  setup() {

  },
  components: {
    CartBTN
  },
  computed: {
    ...mapState(["isAuthenticated"]),
  },
  mounted() {
    this.fetchProducts();
    if (this.isAuthenticated) {
      this.fetchProducts();
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const token = localStorage.getItem('token');
        //console.log("EL TOKEN DESDE PRODUCTS:",token)
        const response = await axios.get(`${API_ROOT_URL}/products`,{
          headers: {
            Authorization: `Bearer ${token}`, // Include token in request headers
          },
        });
        this.products = response.data['hydra:member'];
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },
    addToCart(item) {
      console.log(item)
    },
    async sortByPrice(order) {
      // Set loading to true while fetching data
      this.loading = true;
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_ROOT_URL}/products?order[price]=${order}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in request headers
          },
        });
        this.products = response.data['hydra:member'];
      } catch (error) {
        console.error('Error fetching sorted products:', error);
      } finally {
        // Set loading to false after fetching data
        this.loading = false;
      }
    },
    async sortByName(order) {
      this.loading = true;
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_ROOT_URL}/products?order[name]=${order}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in request headers
          },
        });
        this.products = response.data['hydra:member'];
      } catch (error) {
        console.error('Error fetching sorted products:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* You can add custom styles here if needed */
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: #FF3D00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
