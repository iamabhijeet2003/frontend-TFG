<!--App.vue-->
<template>
  <div id="app">
    <NavBar v-if="$route.name !== 'Login'"></NavBar>
    <OnlineOffline></OnlineOffline>
    <router-view ></router-view>
    <FooterPart v-if="$route.name !== 'Login'"></FooterPart>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterPart from './components/partials/footer/FooterPart.vue';
import { mapGetters, mapActions } from 'vuex';
import OnlineOffline from '@/components/OfflineOnline.vue';
export default {
  name: 'App',
  async mounted() {
   await this.$store.commit('initialiseStore')
  },
  components:{
    NavBar,
    FooterPart,
    OnlineOffline
  },
  data(){
    return {
      
    }
  },
  computed: {
        ...mapGetters(['isLoggedIn']), // Map isLoggedIn getter
    },
    methods: {
        ...mapActions(['checkAuthentication']), // Map checkAuthentication action
        ...mapActions(['logout']),
            handleLogout() {
            this.logout(); // Call the logout action when the logout button is clicked
            }
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
</style>
