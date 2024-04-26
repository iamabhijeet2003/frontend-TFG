<template>
  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
  <h2 class="h2 fw-bold text-center my-5">{{ $t('payment_methods.title') }}</h2>
  <div class="container mx-auto px-3">
    <div class="row justify-content-center">
      <div class="col">
        <div class="row justify-content-center">
          <div v-for="icon in icons" :key="icon" class="col-md-1 col-sm-4 col-4 text-center  fs-1">
            <i :class="icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentMethods',
  data() {
    return {
      icons: [
        "bi bi-paypal",
        "bi bi-credit-card",
        "bi bi-wallet",
        "bi bi-bank",
        "bi bi-currency-euro",
        "bi bi-currency-dollar",
        "bi bi-currency-bitcoin",
        "bi bi-currency-pound",
        "bi bi-apple",
        "bi bi-google",
        "ri-mastercard-fill",
        "ri-visa-fill"
      ]
    };
  }
};
</script>

<style>
</style>
