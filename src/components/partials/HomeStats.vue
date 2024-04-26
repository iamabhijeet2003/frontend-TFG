<template>
    <section class="tw-bg-white relative">
        <div class="tw-mx-auto tw-max-w-screen-xl tw-px-4 tw-py-12 tw-sm:px-6 tw-md:py-16 tw-lg:px-8">
            <div class="tw-mx-auto tw-max-w-3xl tw-text-center">
                <h2 class="tw-text-3xl tw-font-bold tw-text-gray-900 tw-sm:text-4xl">{{ $t('home_stats.title') }}</h2>
                <p class="tw-mt-4 tw-text-gray-500 tw-sm:text-xl">{{ $t('home_stats.description') }}</p>
            </div>

            <div class="tw-mt-8 tw-sm:mt-12 tw-flex-auto container-fluid">
                <dl class="tw-grid tw-grid-cols-1 tw-gap-4 tw-sm:grid-cols-3 d-flex row justify-content-evenly">
                    <div class="tw-flex tw-flex-col tw-rounded-lg tw-bg-blue-50 tw-px-4 tw-py-8 tw-text-center col-sm-6 col-md-4 col-lg-3">
                        <dt class="tw-order-last tw-text-lg tw-font-medium tw-text-gray-500">{{ $t('home_stats.happy_customers.label') }}</dt>
                        <dd class="tw-text-4xl tw-font-extrabold tw-text-blue-600 tw-md:text-5xl tw-pl-4">{{ $t('home_stats.happy_customers.value') }}</dd>
                    </div>
                    <div class="tw-flex tw-flex-col tw-rounded-lg tw-bg-blue-50 tw-px-4 tw-py-8 tw-text-center col-sm-6 col-md-4 col-lg-3">
                        <dt class="tw-order-last tw-text-lg tw-font-medium tw-text-gray-500">{{ $t('home_stats.product_ratings.label') }}</dt>
                        <dd class="tw-text-4xl tw-font-extrabold tw-text-blue-600 tw-md:text-5xl tw-pl-4">{{ $t('home_stats.product_ratings.value') }}</dd>
                    </div>
                    <div class="tw-flex tw-flex-col tw-rounded-lg tw-bg-blue-50 tw-px-4 tw-py-8 tw-text-center col-sm-6 col-md-4 col-lg-3">
                        <dt class="tw-order-last tw-text-lg tw-font-medium tw-text-gray-500">{{ $t('home_stats.customer_support.label') }}</dt>
                        <dd class="tw-text-4xl tw-font-extrabold tw-text-blue-600 tw-md:text-5xl tw-pl-4">{{ $t('home_stats.customer_support.value') }}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>
</template>


<style scoped>
</style>