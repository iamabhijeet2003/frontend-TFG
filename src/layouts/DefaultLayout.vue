<!-- DefaultLayout.vue -->
<template>
    <div>
      <NavBar /> <!-- Include navigation bar -->
      <router-view /> <!-- Render child routes -->
      <FooterPart /> <!-- Include footer -->
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'; // Import navigation bar component
  import FooterPart from '@/components/partials/FooterPart.vue'; // Import footer component
  
  export default {
    components: {
      NavBar,
      FooterPart,
    },
  };
  </script>
  
  <style>
  /* Add custom styles here */
  </style>
  