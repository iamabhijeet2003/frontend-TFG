<template>
    <div class="container-fluid">
        <h1
            class="tw-mb-4 tw-text-4xl tw-font-extrabold tw-leading-none tw-tracking-tight tw-text-gray-800 md:tw-text-5xl lg:tw-text-6xl tw-dark:text-white mt-3 ms-3">
            <span class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-to-emerald-600 tw-from-sky-400">
                Please Select the payment method.
            </span>
        </h1>
        <div class="mt-3 ms-3">
            <CheckoutCard></CheckoutCard>
        </div>
        <div class="mt-3 ms-3">
            <router-link to="/checkout" class="btn btn-outline-success fs-1 fw-bold">
                CASH ON DELIVERY (COD)
                <i class="bi bi-cash-coin"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import CheckoutCard from './CheckoutCard.vue';
export default {
    components: {
        CheckoutCard,

    }
}
</script>