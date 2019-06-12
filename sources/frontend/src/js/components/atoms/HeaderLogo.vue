<script>
  export default {
    props: {
      to: { type: String, default: '' }
    },
    data () {
      return {};
    }
  };
</script>

<template lang="pug">
  router-link.header-logo(v-bind:to="to")
    //- img.img-fluid(src="@/assets/logo-invert-full.png" alt="Logo")
</template>

<style lang="scss">
  .header-logo {
    display: block;
    width: 12rem;
    transition: all 0.4s ease;
    border-radius: $border-radius;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba($link-hover-color, 0.25);
    }
  }
</style>
