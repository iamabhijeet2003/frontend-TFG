<template>
  <div class="rating-form">
    <h3>Add Rating</h3>
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
</template>

<script>
import axios from 'axios';

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
        const productid= this.productId;
        const response = await axios.post('http://localhost:8000/api/ratingss', {
          productId: `/api/products/${productid}`,
          userId:`/api/users/${userid}`,
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
