<!--frontend/src/views/HomeView.vue-->
<template>
  <ProductsView></ProductsView>
  <div style="background-image: linear-gradient( 184.1deg,  rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2% );" class="my-3">
      <h3 class="h3 ms-5 mt-3 fw-bolder">Nuestos servicios</h3>
    <Servicios></Servicios>
    </div>
</template>
  
  <script>
  
  import ProductsView from './ProductsView.vue'
  import Servicios from '../components/partials/ServiciosComponent.vue'
  export default {
    data() {
      return {
        loading: true,
        
      };
    },
    components:{
      ProductsView,
      Servicios
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
  