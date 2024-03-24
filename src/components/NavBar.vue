<!-- src/components/NavBar.vue-->
<template>
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">

            <router-link  class="navbar-brand text-white fs-2 fw-bold" to="/">Abhi's</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                    <li class="nav-item">
                        <a class="nav-link active text-white fs-4" aria-current="page" href="/">Inicio</a>

                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fs-4" href="/products">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fs-4" href="#">Ofertas</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white fs-4" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Marcas
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Apple</a></li>
                            <li><a class="dropdown-item" href="#">Samsung</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link text-white fs-4">Ver todo...</a>
                    </li>
                </ul>
                <div>
                    <ProductSearch></ProductSearch>
                </div>
                <hr>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link text-white me-2" to="/cart">
                            <VaAvatar class="mr-6" color="#fff">
                                <span><i class="bi bi-cart fs-3 text-danger"></i></span>
                                <span class="badge bg-danger text-white ms-3"></span>
                            </VaAvatar>

                        </router-link>
                    </li> 
                    <div class="vr"></div>
                    <li class="nav-item">
                        <KeepAlive>
                        <router-link v-if="!isLoggedIn" to="/login" class="nav-link text-white me-2"><VaAvatar class="mr-6" color="#fff">
                                <span><i class="bi bi-person fs-3 text-primary"></i></span>
                                <span class="badge bg-danger text-white ms-3"></span>
                            </VaAvatar></router-link>
                            <div v-else @click="handleLogout" class="nav-link text-white me-2"><VaAvatar class="mr-6" color="#fff"><i class="bi bi-box-arrow-right fs-3 text-primary"></i></VaAvatar>
                            </div>
                        </KeepAlive>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
</template>
<script>
import { mapGetters, mapActions } from 'vuex'; // Import mapGetters from Vuex
import ProductSearch from '@/components/product/ProductSearch'; // Import ProductSearch component

export default {
    data() {
        return {
          
        }
    },
    components: {
        ProductSearch, // Register the ProductSearch component
    },
    computed: {
        ...mapGetters(['isLoggedIn']), // Map isLoggedIn getter
    },
    methods: {
        ...mapActions(['checkAuthentication']), // Map checkAuthentication action
        ...mapActions(['logout']),
        handleLogout() {
            this.logout(); // Call the logout action when the logout button is clicked
        },
    },
    created() {
        this.checkAuthentication(); // Check authentication status when the component is created
    },
}

</script>

<style scoped>

</style>
