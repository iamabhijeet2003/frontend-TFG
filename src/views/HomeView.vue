<!--frontend/src/views/HomeView.vue-->
<template>
  
  <div>
    <BannerToProduct></BannerToProduct>
  </div>

 
  <div class="container-fluid">
    <div class="row">
        <FeaturedCollectionSamsung></FeaturedCollectionSamsung>     
    </div>
    <div class="row">
       <AppleHero></AppleHero>
    </div>
  </div>

 
    <div>
      <IpadBanner></IpadBanner>
    </div>

    
    <div>
      <!-- <h2 class="h2 text-center py-3 my-5 text-white fw-bolder" style="background-image: radial-gradient( circle 975px at 2.6% 48.3%,  rgba(0,8,120,1) 0%, rgba(95,184,224,1) 99.7% );">Lo que opinan sobre nosotros: </h2> -->
      <TestimoniosClientes></TestimoniosClientes>
      <h2 class="h2 text-center py-3 my-5 text-white fw-bolder" style="background-image: radial-gradient( circle 975px at 2.6% 48.3%, rgba(95,184,224,1) 0%, rgba(0,8,120,1) 99.7% );"> &nbsp;</h2>
      
    </div>
   



    <div>
      <HomeStats></HomeStats>
    </div>
    <div style="background-image: linear-gradient( 184.1deg,  rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2% );" class="my-3">
      <h3 class="h3 ms-5 mt-4 fw-bolder fs-2 text-center">Nuestros servicios</h3>
    <Servicios></Servicios>
    </div>

    <div>
      <NewsLetter></NewsLetter>
    </div>
    <div>
      <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
    </div>
    <div>
      <PaymentMethods></PaymentMethods>
    </div>

</template>
  
  <script>
//   import axios from 'axios';
// import { API_ROOT_URL } from '@/apiConfig';
  import Servicios from '../components/partials/ServiciosComponent.vue'
  import TestimoniosClientes from '../components/partials/TestimoniosClientes.vue'
  import PaymentMethods from '@/components/partials/PaymentMethods.vue'
  import BannerToProduct from '@/components/partials/BannerToProduct.vue'
  import HomeStats from '@/components/partials/HomeStats.vue'
  import FeaturedCollectionSamsung from '@/components/partials/FeaturedCollectionSamsung.vue'
  import AppleHero from '@/components/partials/AppleHero.vue'
  import IpadBanner from '@/components/partials/IpadBanner.vue'
  import FrequentlyAskedQuestions from '@/components/partials/FrequentlyAskedQuestions.vue'
  import NewsLetter from '@/components/newsletter/NewsLetter.vue'
  export default {
    data() {
      return {
        loading: true,
        // featuredProducts: [],
      };
    },
    components:{
      Servicios,
      TestimoniosClientes,
      PaymentMethods,
      BannerToProduct,
      HomeStats,
      FeaturedCollectionSamsung,
      AppleHero,
      IpadBanner,
      FrequentlyAskedQuestions,
      NewsLetter
    },
    mounted() {
      // this.fetchFeaturedProducts();
    },
    methods: {
    //   async fetchFeaturedProducts() {
    //   try {
    //     const token = localStorage.getItem('token');
    //     const response = await axios.get(`${API_ROOT_URL}/products?page=1`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     this.featuredProducts = response.data;
    //   } catch (error) {
    //     console.error('Error fetching products:', error);
    //   } finally {
    //     this.loading = false;
    //   }
    // },
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
  