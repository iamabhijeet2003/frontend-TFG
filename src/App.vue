<!--App.vue-->
<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view ></router-view>
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  async mounted() {
   await this.$store.commit('initialiseStore')
  },
  components:{
    NavBar,
    
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
