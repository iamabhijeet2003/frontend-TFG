<template>
    <section class="tw-py-10 tw-bg-gray-50 sm:tw-py-16 lg:tw-py-24">
      <div class="tw-px-4 tw-mx-auto sm:tw-px-6 lg:tw-px-8 tw-max-w-7xl">
        <div class="tw-max-w-2xl tw-mx-auto tw-text-center">
          <h2 class="tw-text-3xl tw-font-bold tw-leading-tight tw-text-black sm:tw-text-4xl lg:tw-text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div class="tw-max-w-3xl tw-mx-auto tw-mt-8 tw-space-y-4 md:tw-mt-16">
          <div v-for="(question, index) in questions" :key="index" class="tw-transition-all tw-duration-200 tw-bg-white tw-border tw-border-gray-200 tw-shadow-lg tw-cursor-pointer hover:tw-bg-gray-50">
            <button type="button" @click="toggleAnswer(index)" class="tw-flex tw-items-center tw-justify-between tw-w-full tw-px-4 tw-py-5 sm:tw-p-6">
              <span class="tw-flex tw-text-lg tw-font-semibold tw-text-black">{{ question.question }}</span>
              <svg :id="'arrow' + (index + 1)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" :class="{'tw-w-6 tw-h-6 tw-text-gray-400': true, 'tw-transform tw-rotate-180': question.state === 'open'}">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div :id="'answer' + (index + 1)" v-show="question.state === 'open'" class="tw-px-4 tw-pb-5 sm:tw-px-6 sm:tw-pb-6">
              <p>{{ question.answer }}</p>
            </div>
          </div>
        </div>
        <p class="tw-text-center tw-text-gray-600 tw-textbase tw-mt-9">
          Still have questions?
          <span class="tw-cursor-pointer tw-font-medium tw-text-tertiary tw-transition-all tw-duration-200 hover:tw-text-tertiary tw-focus:text-tertiary hover:tw-underline"><a href="/contact">Contact our support</a> </span>
        </p>
      </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "How can I place an order?",
          answer: "You can easily place an order on our website by browsing our product catalog, selecting the items you want, and adding them to your cart. Then, proceed to checkout, where you can provide your shipping and payment information to complete the order.",
          state: 'closed'
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods, including credit cards, debit cards, net banking, and mobile wallet payments. You can choose the payment option that is most convenient for you during the checkout process.",
          state: 'closed'
        },
        {
          question: "How long does shipping take?",
          answer: "Shipping times may vary depending on your location and the shipping method chosen. Typically, orders are processed within 1-2 business days, and delivery can take 3-7 business days within India. You will receive a tracking notification once your order is shipped.",
          state: 'closed'
        },
        {
          question: "Can I return a product if I'm not satisfied?",
          answer: "Yes, we have a hassle-free return policy. If you are not satisfied with your purchase, you can initiate a return within 30 days of receiving the product. Please contact our customer support at abhijeet3016@gmail.com for assistance.",
          state: 'closed'
        },
        {
          question: "Do you offer international shipping?",
          answer: "Currently, we only provide shipping services within Spain. However, we may consider expanding our shipping options to international locations in the future. Please stay updated with our website for any changes in shipping destinations.",
          state: 'closed'
        },
      ]
    };
  },
  methods: {
    toggleAnswer(index) {
      this.questions[index].state = this.questions[index].state === 'open' ? 'closed' : 'open';
    }
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
