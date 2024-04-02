<template>
    <div class="container">
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div class="col-md-6">
                <img :src="product.image" alt="Product Image" class="img-fluid" style="max-width: 400px;">
            </div>
            <h1>{{ product.name }}</h1>
            <p>{{ product.description }}</p>
            <p>Price: ${{ product.price }}</p>

            <div>
                <h3>Add to Cart</h3>
                <div class="btn-group">

                    <CartBTN :product="product" aria-label="Add to cart" />
                </div>
            </div>
            <!-- <ProductRatings :productId="product.id" /> -->

            <!-- <RatingForm :productId="product.id" /> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { API_ROOT_URL } from '@/apiConfig';
// import ProductRatings from '../components/ratings/ProductRating.vue';
import CartBTN from '../components/CartBTN.vue';
// import RatingForm from '../components/ratings/AddRating.vue'; 

export default {
    data() {
        return {
            loading: true,
            product: null,
        };
    },
    components: {
        // ProductRatings,
        CartBTN,
        // RatingForm,
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
/* Add your styles here */
</style>