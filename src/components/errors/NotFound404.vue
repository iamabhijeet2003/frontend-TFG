<template>
    <div class="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-cover tw-bg-center tw-bg-no-repeat"
        style="background-image: url('https://source.unsplash.com/random/1920x1080?nature')">
        <div
            class="tw-max-w-md tw-mx-auto tw-text-center tw-bg-white tw-bg-opacity-90 tw-p-8 tw-rounded-lg tw-shadow-lg">
            <div class="tw-text-9xl tw-font-bold tw-text-indigo-600 tw-mb-4">404</div>
            <h1 class="tw-text-4xl tw-font-bold tw-text-gray-800 tw-mb-6">Oops! Page Not Found</h1>
            <p class="tw-text-lg tw-text-gray-600 tw-mb-8">The page you're looking for seems to have gone on a little
                adventure. Don't
                worry, we'll help you find your way back home.</p>
            <router-link to="/"
                class="tw-inline-block tw-bg-indigo-600 tw-text-white tw-font-semibold tw-px-6 tw-py-3 tw-rounded-md tw-hover:bg-indigo-700 tw-transition-colors tw-duration-300">
                Go Back Home
            </router-link>
        </div>
    </div>
</template>