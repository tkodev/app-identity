<script>
  export default {
    data () {
      return {

      };
    }
  };
</script>

<template lang="pug">
  transition(name="header-fade", appear)
    header.header
      BContainer(fluid)
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
  .header-fade-enter-active, .header-fade-leave-active {
    transition: opacity .5s;
  }
  .header-fade-enter, .header-fade-leave-to {
    opacity: 0;
  }
</style>
