<template>
    <div class="container">
        <div v-if="loading">Loading...</div>
        <div v-else>
            
            <div class="tw-rounded-lg tw-bg-gradient-to-tr tw-from-pink-300 tw-to-blue-300 tw-p-0.5 tw-shadow-lg mt-4">
                <div class="tw-bg-white tw-p-7 tw-rounded-md"> 
                    
                    <div class="col-md-6 text-center mx-auto">
                        <img :src="product.image" alt="Product Image" class="img-fluid mx-auto" style="max-width: 400px;">
                    </div>
                    <h1  class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-tr tw-to-cyan-500 tw-from-blue-600 fs-1 h1 fw-bolder text-center">{{ product.name }}</h1>
                    <p class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-tr tw-to-cyan-500 tw-from-blue-600 fs-3 fw-bold text-center">{{ product.description }}</p>
                    <p class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-tr tw-to-cyan-500 tw-from-blue-600 fs-3 fw-bold text-center">Price: ${{ product.price }}</p>

                    <div class="text-center mx-auto">
                        <h3 class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-tr tw-to-cyan-500 tw-from-blue-600 fs-3 h3 fw-bolder text-center">Add to Cart</h3>
                        <div class="btn-group align-center mx-auto text-center">

                            <CartBTN :product="product" aria-label="Add to cart" />
                        </div>
                    </div>
                </div>
            </div>
            <ProductRatings :productId="product.id" />

            <RatingForm :productId="product.id" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { API_ROOT_URL } from '@/apiConfig';
import ProductRatings from '../components/ratings/ProductRating.vue';
import CartBTN from '../components/CartBTN.vue';
import RatingForm from '../components/ratings/AddRating.vue'; 

export default {
    data() {
        return {
            loading: true,
            product: null,
        };
    },
    components: {
        ProductRatings,
        CartBTN,
        RatingForm,
    },
    async mounted() {
        await this.fetchProduct();
    },
    methods: {
        async fetchProduct() {
            try {
                const productId = this.$route.params.id;
                const token = localStorage.getItem('token');
                const response = await axios.get(`${API_ROOT_URL}/products/${productId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.product = response.data;
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                this.loading = false;
            }
        },
        calculateAverageRating(ratings) {
            const totalRatings = ratings.length;
            const totalRatingValue = ratings.reduce((total, rating) => total + rating.value, 0);
            return totalRatingValue / totalRatings;
        },
    },
};
</script>

<style scoped>

</style>