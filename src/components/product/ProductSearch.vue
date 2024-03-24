<template>
<!-- Form to trigger modal -->
<form type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    </form>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Search</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="product-search">
      <input type="text" v-model="searchQuery" @input="handleInput" placeholder="Search products..." class="container-fluid border">
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
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
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
  