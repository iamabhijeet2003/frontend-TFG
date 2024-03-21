<template>
    <div class="product-search">
      <input type="text" v-model="searchQuery" @input="handleInput" placeholder="Search products...">
      <ul v-if="searchResults.length">
        <li v-for="product in searchResults" :key="product.id">
          <div class="product">
            <img :src="product.image" alt="Product Image">
            <div class="product-details">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <p>Price: ${{ product.price }}</p>
              <div class="btn-group">
              <CartBTN :product="product" />
            </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import CartBTN from '@/components/CartBTN.vue';
  export default {
    data() {
      return {
        searchQuery: '',
        searchResults: [],
        throttleTimer: null,
      };
    },
    components:{
        CartBTN
    },
    methods: {
      handleInput() {
        clearTimeout(this.throttleTimer);
        this.throttleTimer = setTimeout(this.searchProducts, 200); // Adjust throttle time as needed
      },
      async searchProducts() {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`http://localhost:8000/api/products?name=${this.searchQuery}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.searchResults = response.data['hydra:member'];
        } catch (error) {
          console.error('Error searching products:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .product-search input[type="text"] {
    border: none;
    padding: 8px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .product-search ul {
    list-style-type: none;
    padding: 0;
  }
  
  .product-search li {
    margin-bottom: 10px;
  }
  
  .product {
    display: flex;
  }
  
  .product img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  
  .product-details {
    flex: 1;
  }
  </style>
  