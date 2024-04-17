<template>
    <div>
      <h1>User Profile</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <p>Name: {{ userProfile.firstName }}</p>
        <p>Last Name: {{ userProfile.last }}</p>
        <p>Email: {{ userProfile.email }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
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
        const response = await axios.get(`http://127.0.0.1:8000/api/users/${userId}`, {
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
  /* Add your CSS styles here */
  </style>
  