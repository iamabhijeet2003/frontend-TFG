<!--frontend/src/views/ProductsView.vue-->
<template>
  <div class="container-fluid px-5 mt-5">
    <div class="row">
      <div class="col-md-4 mb-3 ">
        <!-- Dropdown button for filtering by brand -->
        <div class="dropdown">
          <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="brandDropdown"
            data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-filter fs-5">Filter By Brand</i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="brandDropdown">
            <li v-for="brand in brands" :key="brand.id">
              <button @click="filterByBrand(brand.id)" class="dropdown-item">{{ brand.name }}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <!-- Dropdown button for sorting by price -->
        <div class="dropdown">
          <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="priceDropdown"
            data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-filter fs-5">Order By</i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="priceDropdown">
            <li><button @click="sortByPrice('asc')" class="dropdown-item"><i class="bi bi-arrow-bar-up fs-4"></i>Lower
                Price</button></li>
            <li><button @click="sortByPrice('desc')" class="dropdown-item"><i
                  class="bi bi-arrow-bar-down fs-4"></i>Higher Price</button></li>
            <li><button @click="sortByName('asc')" class="dropdown-item"><i class="bi bi-sort-alpha-down fs-4"></i>Name
                [A-Z]</button></li>
            <li><button @click="sortByName('desc')" class="dropdown-item"><i
                  class="bi bi-sort-alpha-down-alt fs-4"></i>Name [Z-A]</button></li>
          </ul>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <!-- Dropdown button for filtering by category -->
        <div class="dropdown">
          <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="categoryDropdown"
            data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-filter fs-5">Filter By Category</i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="categoryDropdown">
            <li v-for="category in categories" :key="category.id">
              <button @click="filterByCategory(category.id)" class="dropdown-item">{{ category.name }}</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="mb-3">
    <div v-if="loading"><span class="loader"></span></div>
    <div class="row g-4" v-if="!loading && products.length">
      <div class="col-12 col-md-4 col-lg-2 d-flex justify-content-around" v-for="product in products"
        :key="product['@id']">
        <div class="card border-gradient-purple">
          <img v-lazy="product.image" class="card-img-top img-fluid" alt="Product Image" @click="viewProduct(product)">
          <div class="card-body">
            <h5 class="card-title fw-bold h5 text-center" @click="viewProduct(product)">{{ product.name }}</h5>
            <!-- <p class="card-text">{{ product.description }}</p> -->
            <hr>
            <p class="card-text fw-bold h5" @click="viewProduct(product)">{{ product.price }}€</p>

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


    <!-- Pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination pagination-lg justify-content-center mt-5 mb-1">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="fetchProducts(currentPage - 1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === currentPage }">
          <button class="page-link" @click="fetchProducts(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="fetchProducts(currentPage + 1)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>

</template>

<script>
import axios from 'axios';
import { API_ROOT_URL } from '@/apiConfig';
import CartBTN from '../components/CartBTN.vue';
import { mapState } from "vuex";
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      loading: true,
      products: [],
      categories: [],
      brands: [],
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
    this.fetchCategories();
    this.fetchBrands();
  },
  methods: {
    async fetchProducts(page = 1) {
      try {
        const token = localStorage.getItem('token');
        let url = `${API_ROOT_URL}/products?page=${page}`;

        // Check if a brand ID is present in the query parameter
        const brandId = this.$route.query.brand;
        if (brandId) {
          url += `&brand=${brandId}`;
        }

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.products = response.data['hydra:member'];
        this.currentPage = page;
        this.totalPages = Math.ceil(response.data['hydra:totalItems'] / 10);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },

    async fetchBrands() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_ROOT_URL}/brands`, { // Fetch brands from your API
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.brands = response.data['hydra:member'];
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    },
    async filterByBrand(brandId) {
      this.loading = true;
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_ROOT_URL}/products?brand=${brandId}`, { // Filter products by brand
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        this.products = response.data['hydra:member'];
        this.totalPages = Math.ceil(response.data['hydra:totalItems'] / 10);
      } catch (error) {
        console.error('Error filtering products by brand:', error);
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
    async filterByCategory(categoryId) {
      this.loading = true;
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_ROOT_URL}/products?category=${categoryId}`, { // Filter products by category
          headers: {
            Authorization: `Bearer ${token}`, // Include token in request headers
          },
        });
        this.products = response.data['hydra:member'];
        this.totalPages = Math.ceil(response.data['hydra:totalItems'] / 10);
      } catch (error) {
        console.error('Error filtering products by category:', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchCategories() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_ROOT_URL}/categories`, { // Assuming you have an endpoint to fetch categories
          headers: {
            Authorization: `Bearer ${token}`, // Include token in request headers
          },
        });
        this.categories = response.data['hydra:member'];
      } catch (error) {
        console.error('Error fetching categories:', error);
        if (error.response && error.response.status === 401) {
          // Redirect to login page when unauthorized
          Swal.fire({
            title: 'You are not logged in!',
            text: 'Please log in to see the products.',
            icon: 'warning',
            confirmButtonText: 'Log In',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
          }).then((result) => {
            if (result.isConfirmed) {
              // Redirect to login page
              this.$router.push('/login');
            }
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

.border-gradient-purple {
  border: 3px solid transparent;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  border-image-slice: 1;
  border-radius: 1em;
}

</style>
