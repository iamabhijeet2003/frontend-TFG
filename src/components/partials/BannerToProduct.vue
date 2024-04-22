<!-- src/components/partials/BannerToProduct.vue -->
<template>
    <div class="tw-dark:bg-black  tw-p-5 tw-overflow-auto tw-dark:bg-black tw-dark:tex-gray-90 ">
        <div class="tw-h-64 tw-rounded-md tw-overflow-hidden tw-bg-cover tw-bg-center"
            style="background-image: url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')">
            <div class="tw-bg-gray-900 tw-bg-opacity-50 tw-flex tw-items-center tw-h-full">
                <div class="tw-px-10 tw-max-w-xl">
                    <h2 class="tw-text-2xl tw-text-white tw-font-semibold">{{ $t('banner.products') }}</h2>
                    <p class="tw-mt-2 tw-text-gray-400">{{ $t('banner.product_description') }}</p>
                    <router-link to="/products"
                        class="tw-flex tw-items-center tw-mt-4 tw-px-3 tw-py-2 tw-bg-purple-800 tw-sm:bg-purple-800/50 tw-text-white tw-text-sm tw-uppercase tw-font-medium tw-rounded-md tw-text-center tw-hover:bg-purple-500 tw-focus:tw-outline-none tw-focus:bg-purple-500 tw-sm:w-2/5">
                        <span>{{ $t('banner.shop_now') }}</span>
                        <svg class="tw-h-5 tw-w-5 tw-mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
