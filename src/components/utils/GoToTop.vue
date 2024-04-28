<template>
    <div>
        <button 
            ref="scrollTopBtn" 
            @click="scrollToTop" 
            id="scrollToTopBtn" 
            title="Go to top"
            class="btn btn-lg btn-primary"    
        >
            <i class="bi bi-arrow-up"></i>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showButton: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.showButton = window.scrollY > 20;
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    },
};
</script>

<style scoped>
#scrollToTopBtn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
}

</style>
