<!--App.vue-->
<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view ></router-view>
    <FooterPart></FooterPart>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterPart from './components/partials/FooterPart.vue';
export default {
  name: 'App',
  async mounted() {
   await this.$store.commit('initialiseStore')
  },
  components:{
    NavBar,
    FooterPart,
  },
  data(){
    return {
      
    }
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
