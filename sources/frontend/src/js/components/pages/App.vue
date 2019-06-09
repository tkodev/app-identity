<script>
  // dependencies
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import appRouter from '@/js/router/app.js';

  // components
  import Header  from '@/js/components/organisms/Header.vue';
  import Footer  from '@/js/components/organisms/Footer.vue';
  import Main    from '@/js/components/organisms/Main.vue';
  import Section from '@/js/components/organisms/Section.vue';

  // init modules
  Vue.use(VueRouter);

  // init vue
  export default {
    router: appRouter,
    components: { 
      Header, Footer, Main, Section
    },
    data () {
      return {
        
      }
    },
    
  } 
</script>

<template lang='pug'>
  div(id='vue-root')
    Header
    Main
      router-view
    Footer
</template>

<style lang='scss'>
  
</style>
