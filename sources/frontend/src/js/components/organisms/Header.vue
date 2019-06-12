<script>
  export default {
    data () {
      return {

      };
    }
  };
</script>

<template lang="pug">
  header.header
    BContainer(fluid)
      slot
        HeaderContent
</template>

<style lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $header-height;
    background-color: rgba($black, 0.1);
  }
</style>
