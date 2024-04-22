<!-- src/components/NavBar.vue-->
<template>
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">

            <router-link class="navbar-brand text-white fs-3 fw-bold" to="/">Abhi's</router-link>
            <!-- <a class="navbar-brand" href="#">
                <img src="https://res.cloudinary.com/dcm40dfr5/image/upload/f_auto,q_auto/v1/TFC/zjak88rub2xtxdoebual" alt="logo" width="70">
            </a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                    <li class="nav-item">
                        <a class="nav-link active text-white fs-4" aria-current="page" href="/">{{ $t('navbar.home') }}</a>

                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fs-4" href="/products">{{ $t('navbar.products') }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fs-4" href="#">{{ $t('navbar.offers') }}</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white fs-4" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {{ $t('navbar.brands') }}
                        </a>
                        <ul class="dropdown-menu">
                            <!-- Dynamically generate dropdown items based on brands -->
                            <li v-for="brand in brands" :key="brand.id">
                                <a v-if="brand.id != 0" class="dropdown-item" @click="filterByBrand(brand.id)">{{ brand.name }}</a>

                                <router-link v-if="brand.id == 0" :to="brand.link" class="dropdown-item"
                                    :style="{ cursor: brand.pointer ? 'pointer' : 'auto' }">{{ brand.name
                                    }}</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link text-white fs-4">{{ $t('navbar.see_all') }}</a>
                    </li>
                </ul>
                <div>
                    <ProductSearch></ProductSearch>
                </div>

                <hr>

                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown text-white fs-4 me-4 " href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <VaAvatar class="mr-6" color="#fff">
                                <span><i class="bi bi-person fs-3 text-primary"></i></span>
                                <span class="badge bg-danger text-white ms-3"></span>
                            </VaAvatar>
                        </a>
                        <ul class="dropdown-menu custom-dropdown-menu">
                            <li class="nav-item">
                                <router-link class="dropdown-item text-black fw-bold nav-link " to="/orders">

                                    <VaAvatar class="mr-6" color="#fff">
                                        <i class="bi bi-bag-check fs-3 text-primary"></i>
                                    </VaAvatar>
                                    <span class="text-black fw-bold">{{ $t('navbar.my_orders') }}</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="dropdown-item text-black fw-bold nav-link " to="/profile">
                                    <VaAvatar class="mr-6" color="#fff">
                                        <i class="bi bi-person fs-3 text-primary"></i>
                                    </VaAvatar>
                                    <span class="text-black fw-bold">{{ $t('navbar.my_profile') }}</span>
                                </router-link>
                            </li>
                            <li class="nav-item" style="cursor: pointer;">
                                <KeepAlive>
                                    <router-link v-if="!isLoggedIn" to="/login" class="nav-link text-white me-2">

                                        <VaAvatar class="mr-6" color="#fff">
                                            <span><i class="bi bi-person fs-3 text-primary"></i></span>
                                            <span class="badge bg-danger text-white ms-3"></span>
                                        </VaAvatar>
                                        <span class="text-black fw-bold">{{ $t('navbar.login')}}</span>
                                    </router-link>
                                    <div v-else @click="handleLogout" class="nav-link text-white me-2">

                                        <VaAvatar class="mr-6" color="#fff">
                                            <i class="bi bi-box-arrow-right fs-3 text-primary"></i>
                                        </VaAvatar>
                                        <span class="text-black fw-bold">{{ $t('navbar.logout')}}</span>
                                    </div>
                                </KeepAlive>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link text-white me-2" to="/cart">
                            <VaAvatar class="mr-6" color="#fff">
                                <span><i class="bi bi-cart fs-3 text-danger"></i></span>
                                <span class="badge bg-danger text-white ms-3"></span>
                            </VaAvatar>

                        </router-link>
                    </li>
                </ul>

                <div>
                <LanguageSwitcher /> 
            </div>
            </div>
        </div>
    </nav>

</template>
<script>

import { mapGetters, mapActions } from 'vuex'; // Import mapGetters from Vuex
import ProductSearch from '@/components/product/ProductSearch'; // Import ProductSearch component
import LanguageSwitcher from '@/components/utils/LanguageSwitcher.vue'
import axios from 'axios';
import { API_ROOT_URL } from '@/apiConfig';
export default {
    data() {
        return {
            brands: [],
        }
    },
    mounted() {
        this.fetchBrands(); // Fetch brands when the component is mounted
    },
    components: {
        ProductSearch, // Register the ProductSearch component
        LanguageSwitcher
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
        async fetchBrands() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${API_ROOT_URL}/brands`, { // Fetch brands from your API
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.brands = response.data['hydra:member'];
            } catch (error) {
                console.error('Error fetching brands:', error);
                if (error.response && error.response.status === 401) {
                    // If status is 401, set up a router-link to the login page
                    this.brands = [{ id: 0, name: 'Login to see brands', link: '/login', pointer: true }];
                }
            }
        },
        filterByBrand(brandId) {
            this.$router.push({
                name: 'products',
                query: { brand: brandId }
            });
        },

    },
    created() {
        this.checkAuthentication(); // Check authentication status when the component is created
    },
    
}

</script>

<style scoped>
.custom-dropdown-menu {
    min-width: 200px; 
}
</style>
