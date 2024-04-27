<!-- frontend-proyecto-02/src/components/product/ProductSearch.vue -->
<template>
  <!-- Form to trigger modal -->
  <form type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
      <input v-model="searchQuery" class="form-control me-2 form-control-lg" type="search" :placeholder="$t('product_search.search_placeholder')" aria-label="Search">
    </div>
  </form>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog  modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ $t('product_search.search') }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="product-search">
            <div class="input-group mb-3">
              <input type="text" v-model="searchQuery" @input="handleInput" :placeholder="$t('product_search.search_placeholder')"
                class="container-fluid border form-control">
            </div>
            <ul v-if="searchResults.length">
              <li v-for="product in searchResults" :key="product.id">
                <div class="product">
                  <img :src="product.image" alt="Product Image" @click="viewProduct(product)">
                  <div class="product-details" @click="viewProduct(product)">
                    <h3>{{ product.name }}</h3>
                    <p>{{ $t('product_search.price') }}: {{ product.price }}€</p>
                    <div class="btn-group">
                      <CartBTN :product="product" />
                    </div>
                  </div>
                </div>
                <hr>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('product_search.close') }}</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import CartBTN from '@/components/CartBTN.vue';
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      throttleTimer: null,
    };
  },
  components: {
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
        if (error.response && error.response.status === 401) {
          // Display a SweetAlert notification for unauthorized access
          Swal.fire({
            title: 'You are not logged in!',
            text: 'Please log in to search for products.',
            icon: 'warning',
            confirmButtonText: 'Log In',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
          });
        }
      }
    },
    viewProduct(product) {
      this.$router.push({ name: 'Product', params: { id: product.id } });
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