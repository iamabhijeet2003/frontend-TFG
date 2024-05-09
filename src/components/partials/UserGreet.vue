<template>
    <section class="tw-px-5">
        <div class="tw-bg-gradient-to-br tw-from-sky-400 tw-via-sky-400 tw-to-violet-400 tw-p-6 sm:tw-p-10 tw-rounded-2xl tw-w-full tw-text-white tw-flex tw-items-center tw-justify-center tw-max-w-9xl tw-mx-auto tw-mt-6">
            <div class="tw-flex tw-flex-col tw-gap-6 text-center">
                <div>
                    <h1 class="text-light fs-1 fw-bolder">{{ $t('greetings.' + greeting) }}, <span class="text-uppercase">{{ user.toUpperCase() }}</span> !</h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      greeting: ""
    };
  },
  mounted() {
    // Retrieve username from local storage
    this.user = localStorage.getItem("username");

    // Determine time of day
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      this.greeting = "goodMorning";
    } else if (hour >= 12 && hour < 18) {
      this.greeting = "goodAfternoon";
    } else if (hour >= 18 && hour < 22) {
      this.greeting = "goodEvening";
    } else {
      this.greeting = "goodNight";
    }
  }
};
</script>
