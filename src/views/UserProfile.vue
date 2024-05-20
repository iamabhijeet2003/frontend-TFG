<template>
  <div class="m-4 p-3 base-size">
    <div
      class="product-ratings tw-relative tw-mx-auto tw-rounded-lg tw-bg-gradient-to-tr tw-from-pink-300 tw-to-blue-300 tw-p-3 tw-shadow-lg">
      <div class="tw-bg-white tw-p-5 tw-rounded-md">
        <h1 class="tw-bg-gradient-to-r tw-from-primary tw-to-danger tw-bg-clip-text tw-text-transparent text-center h1 fw-bolder">
          My Profile
        </h1>
        <div v-if="loading">Loading...</div>
        <div v-else>
          <p class="fw-bold text-center text-decoration-underline fs-5">Name: {{ userProfile.firstName }}</p>
          <p class="fw-bold text-center text-decoration-underline fs-5">Last Name: {{ userProfile.last }}</p>
          <p class="fw-bold text-center text-decoration-underline fs-5">Email: {{ userProfile.email }}</p>
        </div>
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
      userProfile: {},
      loading: true,
    };
  },
  async mounted() {
    try {
      const userId = localStorage.getItem('user_id');
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_ROOT_URL}/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      this.userProfile = response.data;
      this.loading = false;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      this.loading = false;
    }
  }
};
</script>

<style>
.base-size{
  min-height: 20em;
}
</style>
