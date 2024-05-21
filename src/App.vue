<!--App.vue-->
<template>
  <div id="app">
    <NavBar v-if="$route.name !== 'Login'"></NavBar>
    <OnlineOffline></OnlineOffline>
    <router-view></router-view>
    <FooterPart v-if="$route.name !== 'Login'"></FooterPart>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterPart from './components/partials/footer/FooterPart.vue';
import OnlineOffline from '@/components/OfflineOnline.vue';
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterPart,
    OnlineOffline
  },
  async mounted() {
    await this.$store.commit('initialiseStore');
    document.documentElement.setAttribute('data-theme', this.theme);
  },
  computed: {
    ...mapGetters(['isLoggedIn']), // Map isLoggedIn getter
    ...mapState(['theme']),
  },
  methods: {
    ...mapActions(['checkAuthentication']), // Map checkAuthentication action
    ...mapActions(['logout']),
    handleLogout() {
      this.logout(); // Call the logout action when the logout button is clicked
    },
  },
  created() {
    this.checkAuthentication(); // Check authentication status when the component is created
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
@import '@/assets/css/dark-mode.css';
</style>
