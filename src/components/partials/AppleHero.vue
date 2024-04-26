<!-- frontend-proyecto-02/src/components/partials/AppleHero.vue -->
<template>
    <a href="/product/1">
        <section class="tw-cursor-pointer tw-text-center">
            <h1 class="tw-text-6xl tw-mt-8 tw-font-bold tw-font-semibold">
                {{ $t('apple_hero.title') }}
            </h1>
            <p class="tw-text-3xl tw-my-2 tw-opacity-90">
                {{ $t('apple_hero.description') }}
            </p>
            <span class="tw-flex tw-justify-center tw-space-x-10 tw-text-xl">
                <p class="tw-text-blue-600 tw-hover:tw-underline"> {{ $t('apple_hero.buy_now') }} </p>
            </span>
            <img class="tw-mx-auto tw-my-3" src="https://res.cloudinary.com/dcm40dfr5/image/upload/v1711970233/cp1_ve9ewq.png" alt="iphone-13-pro">
        </section>
    </a>
</template>
