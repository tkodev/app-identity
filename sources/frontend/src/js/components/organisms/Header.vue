<script>
  // components
  import { BContainer } from 'bootstrap-vue';

  // init vue
  export default {
    components: { BContainer },
    data () {
      return {

      };
    }
  };
</script>

<template lang="pug">
  header.header
    BContainer(fluid)
      p test
</template>

<style lang="scss">
  .header {
    height: $header-height;
  }
</style>
