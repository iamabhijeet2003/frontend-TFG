<template>
    <div class="tw-relative tw-isolate tw-overflow-hidden tw-bg-gray-900 tw-py-16 sm:tw-py-24 lg:tw-py-32">
        <div class="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
            <div
                class="tw-mx-auto tw-grid tw-max-w-2xl tw-grid-cols-1 tw-gap-x-8 tw-gap-y-16 lg:tw-max-w-none lg:tw-grid-cols-2">
                <div class="tw-max-w-xl lg:tw-max-w-lg">
                    <h2 class="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-4xl">
                        <!-- {{ $t('newsletter.')}} -->
                        {{ $t('newsletter.subscribeTitle')}}
                    </h2>
                    <p class="tw-mt-4 tw-text-lg tw-leading-8 tw-text-gray-300">
                      {{ $t('newsletter.subscribeDescription')}}
                    </p>
                    <div class="tw-mt-6 tw-max-w-md">
                        <div class="tw-flex tw-gap-x-4">
                            <label  for="name" 
                            class="tw-sr-only">{{ $t('newsletter.formname')}}</label>
                            <input  id="name" 
                                    name="name" 
                                    type="text" 
                                    autocomplete="name"
                                    v-model="formData.name"
                                    class="tw-min-w-0 tw-flex-auto tw-rounded-md tw-border-0 tw-bg-white/5 tw-px-3.5 tw-py-2 tw-text-white tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-white/10 tw-focus:ring-2 tw-focus:ring-inset tw-focus:ring-indigo-500 sm:tw-text-sm sm:tw-leading-6"
                                    :placeholder="$t('newsletter.namePlaceholder')" 
                            />
                        </div>
                        <div class="tw-flex tw-mt-4 tw-gap-x-4">
                            <label  for="email-address" 
                                    class="tw-sr-only">
                                    Email address
                            </label>
                            <input  id="email-address" 
                                    name="email" 
                                    type="email" 
                                    autocomplete="email"
                                    v-model="formData.email"
                                    class="tw-min-w-0 tw-flex-auto tw-rounded-md tw-border-0 tw-bg-white/5 tw-px-3.5 tw-py-2 tw-text-white tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-white/10 tw-focus:ring-2 tw-focus:ring-inset tw-focus:ring-indigo-500 sm:tw-text-sm sm:tw-leading-6"
                                    :placeholder="$t('newsletter.emailPlaceholder')" 
                            />
                        </div>
                        <button type="submit"
                                class="tw-block tw-mt-4 tw-rounded-md tw-bg-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm tw-hover:bg-indigo-400 tw-focus-visible:tw-outline tw-focus-visible:tw-outline-2 tw-focus-visible:tw-outline-offset-2 tw-focus-visible:tw-outline-indigo-500"
                                @click="subscribe"
                        >
                            {{ $t('newsletter.subscribeButton')}}
                        </button>
                    </div>

                </div>

                <dl class="tw-grid tw-grid-cols-1 tw-gap-x-8 tw-gap-y-10 sm:tw-grid-cols-2 lg:tw-pt-2">
                    <div class="tw-flex tw-flex-col tw-items-start">
                        <div class="tw-rounded-md tw-bg-white/5 tw-p-2 tw-ring-1 tw-ring-white/10">
                            <i class="bi bi-calendar3 w-h-6 tw-w-6 tw-text-white" aria-hidden="true"></i>
                        </div>
                        <dt class="tw-mt-4 tw-font-semibold tw-text-white">{{ $t('newsletter.weeklyArticles.title')}}</dt>
                        <dd class="tw-mt-2 tw-leading-7 tw-text-gray-400">{{ $t('newsletter.weeklyArticles.description')}}</dd>
                    </div>

                    <div class="tw-flex tw-flex-col tw-items-start">
                        <div class="tw-rounded-md tw-bg-white/5 tw-p-2 tw-ring-1 tw-ring-white/10">
                            <i class="bi bi-exclamation-octagon tw-h-6 tw-w-6 tw-text-white" aria-hidden="true"></i>
                        </div>
                        <dt class="tw-mt-4 tw-font-semibold tw-text-white">{{ $t('newsletter.noSpam.title')}}</dt>
                        <dd class="tw-mt-2 tw-leading-7 tw-text-gray-400">{{ $t('newsletter.noSpam.description')}}</dd>
                    </div>

                </dl>
            </div>
        </div>
        <div class="tw-absolute tw-left-1/2 tw-top-0 tw--z-10 tw--translate-x-1/2 tw-blur-3xl tw-xl:-top-6"
            aria-hidden="true">
            <div class="tw-aspect-[1155/678] tw-w-[72.1875rem] tw-bg-gradient-to-tr tw-from-[#ff80b5] tw-to-[#9089fc] tw-opacity-30"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      formData: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    async subscribe() {
      try {
        const response = await fetch('http://localhost:8000/api/newsletters', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/ld+json'
          },
          body: JSON.stringify(this.formData)
        });
        if (response.ok) {
          // Newsletter subscription successful
          Swal.fire({
            title: 'Subscription Confirmed!',
            text: 'Thank you for subscribing to our newsletter.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else {
          // Error handling for unsuccessful subscription
          console.error('Newsletter subscription failed:', response.statusText);
          Swal.fire({
            title: 'Subscription Failed',
            text: 'Sorry, we could not process your subscription at this time. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      } catch (error) {
        console.error('Error subscribing to the newsletter:', error);
        Swal.fire({
          title: 'Error',
          text: 'An error occurred while processing your subscription. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  }
};
</script>