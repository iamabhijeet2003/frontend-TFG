<template>
  <div class="product-ratings tw-relative tw-mx-auto tw-rounded-lg tw-bg-gradient-to-tr tw-from-pink-300 tw-to-blue-300 tw-p-0.5 tw-shadow-lg">
    <div class="tw-bg-white tw-p-7 tw-rounded-md">
    <h2 class="h2 tw-text-4xl tw-font-extrabold tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-rose-600 tw-via-red-400 tw-to-orange-500 fw-bold text-center fs-1 mb-1">Ratings</h2>
    <ul v-if="ratings.length" class="fs-4 tw-rounded-lg tw-bg-gradient-to-tr tw-from-pink-300 tw-to-blue-300 tw-p-0.5 tw-shadow-lg">
      <li v-for="rating in ratings" :key="rating.id">
        <div class="rating tw-bg-white tw-p-7 tw-rounded-md">
          <p><strong>User:</strong> {{ rating.userName  }}</p>
          <p>
            <strong>Rating:</strong>
            <template v-for="(star, index) in rating.ratingValue" :key="index">
              <i class="bi bi-star-fill text-warning"></i>
            </template>
          </p>
          <p><strong>Comment:</strong> {{ rating.comment }}</p>
        </div>
      </li>
    </ul>
    <p v-else>No ratings available for this product.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_ROOT_URL } from '@/apiConfig';

export default {
  props: {
    productId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      ratings: []
    };
  },
  async mounted() {
    await this.fetchRatings();
  },
  watch: {
    productId(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchRatings();
      }
    }
  },
  methods: {
    async fetchRatings() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_ROOT_URL}/ratingss?page=1&productId=${this.productId}`,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        });
        this.ratings = response.data['hydra:member'];
      } catch (error) {
        console.error('Error fetching ratings:', error);
      }
    },
  }
};
</script>

<style scoped>
.product-ratings {
  margin-top: 20px;
}

.rating {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
