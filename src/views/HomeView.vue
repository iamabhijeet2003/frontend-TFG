<!--frontend/src/views/HomeView.vue-->
<template>
  <ProductsView></ProductsView>
</template>
  
  <script>
  
  import ProductsView from './ProductsView.vue'
  export default {
    data() {
      return {
        loading: true,
        
      };
    },
    components:{
      ProductsView,
    },
    mounted() {
      
    },
    methods: {
      
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
  