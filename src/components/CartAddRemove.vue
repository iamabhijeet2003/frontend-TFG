<!--frontend/src/components/CartAddRemove.vue-->
<template>
    <div v-if="product" class="input-group plus-minus">
        <button class="btn btn-outline-danger" :class="loading?'disabled':''" @click="addOrRemove(-1)" type="button" id="button-addon1" aria-label="subract from cart" ><i class="bi bi-dash-lg text-danger"></i></button>
            <input type="number" v-model="qty" disabled class="form-control form-control-sm fw-bolder text-center fs-5" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
        <button class="btn btn-outline-primary" :class="loading?'disabled':''" @click="addOrRemove(1)" type="button" id="button-addon1"><i class="bi bi-plus-lg text-primary" aria-label="Add to cart" ></i></button>
    </div>
 </template>
 
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
 
export default {
    name: 'CartAddRemove',
    props: ['product'],
    data() {
        return {
            qty: 1,
            loading: false,
            localProduct: {} // Copia local de la propiedad product
        };
    },
    methods: {
        async addOrRemove(number) {
            this.loading = true;
            const clonedProduct = { ...this.localProduct }; // Hacer una copia del producto
            if (number === 1) {
                if (this.qty < 10) {
                    this.qty++;
                    clonedProduct.qty = this.qty;
                    await this.$store.commit('updateCart', { product: clonedProduct }); // Usar la copia en lugar de la prop
                    toast.success('Cart updated', { autoClose: 1000 });
                } else {
                    toast.warning('You reached the limit', { autoClose: 3000 });
                }
            }
            if (number === -1) {
                if (this.qty > 1) {
                    this.qty--;
                    clonedProduct.qty = this.qty;
                    await this.$store.commit('updateCart', { product: clonedProduct }); // Usar la copia en lugar de la prop
                    toast.success('Cart updated', { autoClose: 1000 });
                } else {
                    toast.warning('You reached the limit', { autoClose: 3000 });
                }
            }
            this.loading = false;
        }
    },
    mounted() {
        this.qty = this.product.qty;
        // Copiar la prop product a la propiedad localProduct
        this.localProduct = { ...this.product };
    }
};
</script>
 
<style>
.plus-minus input {
    max-width: 50px;
}
</style>
