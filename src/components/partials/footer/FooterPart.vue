<template>

  <div class="mt-5">
    <!-- Footer -->
    <footer class="text-center text-lg-start text-white" style="background-color: #0061b0;">
      <!-- Grid container -->
      <div class="container-fluid p-4 pb-0">
        <!-- Section: Links -->
        <section class="">
          <!--Grid row-->
          <div class="row">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h3 class="text-uppercase mb-4 font-weight-bold">
                La Tienda de Abhi
              </h3>
              <p>
                Tu tienda de confianza con los mejores productos en el sector de la tecnologia.
              </p>

              <hr>

              <div>
                <h3>Contacta con nosotros</h3>

                <router-link to="/contact" class="link text-white">
                  <span>
                    <i class="bi bi-chat-left-text fs-1 me-2"></i>
                  </span>
                  <span class="fs-4">Formulario de Contacto</span>
                </router-link>
              </div>
            </div>

            <!-- Grid column -->

            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <router-link to="/products" class="text-white">Pagina de Productos</router-link>
              </p>
              <p>
                <a class="text-white">MDWordPress</a>
              </p>
              <p>
                <a class="text-white">BrandFlow</a>
              </p>
              <p>
                <a class="text-white">Bootstrap Angular</a>
              </p>
            </div>
            <!-- Grid column -->

            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a class="text-white">Your Account</a>
              </p>
              <p>
                <a class="text-white">Become an Affiliate</a>
              </p>
              <p>
                <a class="text-white">Shipping Rates</a>
              </p>
              <p>
                <a class="text-white">Ayuda</a>
              </p>
            </div>
            <hr class="w-100 clearfix d-md-none my-3" />

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">
                Politicas
              </h6>
              <p>
                <router-link to="/politicas/politica-privacidad" class="text-white">Politica de privacidad</router-link>

              </p>
              <p>
                <a class="text-white">Become an Affiliate</a>
              </p>
              <p>
                <a class="text-white">Shipping Rates</a>
              </p>
              <p>
                <a class="text-white">Ayuda</a>
              </p>
            </div>

            <!-- Grid column -->
            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column contact-->
            <ContactSection></ContactSection> 
            <!-- Grid column -->
          </div>
          <!--Grid row-->
        </section>
        <!-- Section: Links -->

        <hr class="my-3">

        <!-- Section: Copyright -->
        <section class="p-3 pt-0">
          <div class="row d-flex align-items-center">
            <!-- Grid column -->
            <div class="col-md-7 col-lg-8 text-center text-md-start">
              <!-- Copyright -->
              <div class="p-3">
                <span class="fs-5">
                  © 2024
                  <a class="text-white" href="#">Abhijeet Singh</a>
                </span>
              </div>
              <!-- Copyright -->
            </div>
            <!-- Grid column -->

            <!-- Grid column - icons -->
            <SocialMedia></SocialMedia> 
            <!-- Grid column -->
          </div>
        </section>
        <!-- Section: Copyright -->
      </div>
      <!-- Grid container -->
    </footer>
    <!-- Footer -->
  </div>
  <!-- End of .container -->
</template>

<script>
import SocialMedia from './SocialMedia.vue';
import ContactSection from './ContactSection.vue'
export default{
  components:{
    SocialMedia,
    ContactSection
  }
}
</script>