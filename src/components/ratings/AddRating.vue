<template>
   <div class="product-ratings tw-relative tw-mx-auto tw-rounded-lg tw-bg-gradient-to-tr tw-from-pink-300 tw-to-blue-300 tw-p-0.5 tw-shadow-lg">
    <div class="tw-bg-white tw-p-7 tw-rounded-md">
    <div class="rating-form">
      <h3 class="tw-text-4xl tw-font-extrabold tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-rose-600 tw-via-red-400 tw-to-orange-500 h3 fw-bold text-center fs-1 mb-1" >Add Rating</h3>
      <form @submit.prevent="submitRating">
        <div class="form-group">
          <label for="rating">Rating:</label>
          <input type="number" v-model="rating" id="rating" class="form-control" min="1" max="5" required>
        </div>
        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea v-model="comment" id="comment" class="form-control" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_ROOT_URL } from '@/apiConfig';
   
export default {
  data() {
    return {
      rating: null,
      comment: '',
    };
  },
  methods: {
    async submitRating() {
      try {
        const token = localStorage.getItem('token');
        const userid = localStorage.getItem('user_id'); // Get user ID from localStorage
        const productid = this.productId;
        const response = await axios.post(`${API_ROOT_URL}/ratingss`, {
          productId: `/api/products/${productid}`,
          userId: `/api/users/${userid}`,
          ratingValue: this.rating,
          comment: this.comment,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/ld+json'
          },
        });
        console.log('Rating added successfully:', response.data);
        // Optionally, emit an event or perform any other actions upon successful submission
      } catch (error) {
        console.error('Error adding rating:', error);
      }
    },
  },
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
