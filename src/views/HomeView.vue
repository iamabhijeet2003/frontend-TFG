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
      <GoToTop></GoToTop>
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
      <h2 class="h2 fw-bolder text-center tw-text-4xl tw-font-extrabold tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-teal-600 tw-via-sky-400 tw-to-cyan-500" >{{ $t('services.title') }}</h2>
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
  import GoToTop from '@/components/utils/GoToTop.vue';
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
      NewsLetter,
      GoToTop
    },
    mounted() {
      // this.fetchFeaturedProducts();
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
  