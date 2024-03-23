<!--frontend/src/views/HomeView.vue-->
<template>
  
    <div>
      <h2 class="h2 text-center py-3 my-5 text-white fw-bolder" style="background-image: radial-gradient( circle 975px at 2.6% 48.3%,  rgba(0,8,120,1) 0%, rgba(95,184,224,1) 99.7% );">Lo que opinan sobre nosotros: </h2>
      <TestimoniosClientes></TestimoniosClientes>
      <h2 class="h2 text-center py-3 my-5 text-white fw-bolder" style="background-image: radial-gradient( circle 975px at 2.6% 48.3%, rgba(95,184,224,1) 0%, rgba(0,8,120,1) 99.7% );"> &nbsp;</h2>
      
    </div>
    
    <div style="background-image: linear-gradient( 184.1deg,  rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2% );" class="my-3">
      <h3 class="h3 ms-5 mt-3 fw-bolder">Nuestros servicios</h3>
    <Servicios></Servicios>
    </div>

    <div>
      <PaymentMethods></PaymentMethods>
    </div>

</template>
  
  <script>
  
  import Servicios from '../components/partials/ServiciosComponent.vue'
  import TestimoniosClientes from '../components/partials/TestimoniosClientes.vue'
  import PaymentMethods from '@/components/partials/PaymentMethods.vue'
  export default {
    data() {
      return {
        loading: true,
        
      };
    },
    components:{
      Servicios,
      TestimoniosClientes,
      PaymentMethods
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
  