<template>
    <div>
      <h1>Welcome to Our Ecommerce Store</h1>
      <div v-if="loading"><span class="loader"></span></div>
      <div class="row" v-if="!loading && products.length">
        <div class="col" v-for="product in products" :key="product['@id']">
          <div class="card mb-3">
            <img :src="product.image_url" class="card-img-top img-fluid" alt="Product Image" style="width: 25rem;">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">Description: {{ product.description }}</p>
              <p class="card-text">Price: {{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!loading && !products.length">No products available</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        loading: true,
        products: [],
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('http://127.0.0.1:8001/api/productss');
          this.products = response.data['hydra:member'];
        } catch (error) {
          console.error('Error fetching products:', error);
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
  