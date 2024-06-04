<!--frontend/src/views/AppleProducts.vue-->
<template>
  <div class="container-fluid px-5 mt-5">
    <div v-if="loading"><span class="loader"></span></div>
    <div>
      <section>
        <div class="tw-bg-black tw-text-white tw-py-2 mb-5">
          <div class="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-my-1 md:tw-my-24">
            <div class="tw-flex tw-flex-col tw-w-full lg:tw-w-1/3 tw-justify-center tw-items-start tw-p-8">
              <h1 class="tw-text-3xl md:tw-text-5xl tw-p-2 tw-text-yellow-300 tw-tracking-loose">Apple</h1>
              <h2 class="tw-text-3xl md:tw-text-5xl tw-leading-relaxed md:tw-leading-snug tw-mb-2">The best quality products in the market.
              </h2>
              <p class="tw-text-sm md:tw-text-base tw-text-gray-50 tw-mb-4">Explore your favourite apple products.</p>
              <a href="#"
                class="tw-bg-transparent tw-hover:bg-yellow-300 tw-text-yellow-300 tw-hover:text-black tw-rounded tw-shadow tw-hover:tw-shadow-lg tw-py-2 tw-px-4 tw-border tw-border-yellow-300 tw-hover:border-transparent">
                Explore Now</a>
            </div>
            <div
              class="tw-p-8 tw-mt-12 tw-mb-6 md:tw-mb-0 md:tw-mt-0 tw-ml-0 md:tw-ml-12 lg:tw-w-2/3 tw-justify-center">
              <div class="tw-h-48 tw-flex tw-flex-wrap tw-content-center">
                
                <div>
                  <img class="tw-inline-block tw-mt-24 md:tw-mt-0 tw-p-8 md:tw-p-0"
                    src="https://res.cloudinary.com/dcm40dfr5/image/upload/v1712587828/logo-apple.1681800467.6645_ws6lwl.webp">
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    <div class="row g-4" v-if="!loading && products.length">
      <div class="col-12 col-md-4 col-lg-2 d-flex justify-content-around" v-for="product in products"
        :key="product['@id']">
        <div class="card border border-3">
          <img :src="product.image" class="card-img-top img-fluid" alt="Product Image" @click="viewProduct(product)">
          <div class="card-body">
            <h5 class="card-title fw-bold h5 text-center" @click="viewProduct(product)">{{ product.name }}</h5>
            <hr>
            <p class="card-text fw-bold h5" @click="viewProduct(product)">{{ product.price }}€</p>
          </div>
          <div class="text-end me-3 mb-3">
            <div class="btn-group">
              <CartBTN :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!loading && !products.length">No Apple products available</div>
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
import CartBTN from '@/components/CartBTN.vue';

export default {
  data() {
    return {
      loading: true,
      products: [],
    };
  },
  components: {
    CartBTN
  },
  mounted() {
    this.fetchAppleProducts();
  },
  methods: {
    async fetchAppleProducts(page = 1) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_ROOT_URL}/products?brand=1&page=${page}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.products = response.data['hydra:member'];
        this.currentPage = page;
        this.totalPages = Math.ceil(response.data['hydra:totalItems'] / 10); // the api returns 10 products per page
      } catch (error) {
        console.error('Error fetching Apple products:', error);
      } finally {
        this.loading = false;
      }
    },
    viewProduct(product) {
      this.$router.push({ name: 'Product', params: { id: product.id } });
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