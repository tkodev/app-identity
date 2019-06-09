<script>
  // init vue
  export default {
    data () {
      return {

      };
    }
  };
</script>

<template lang="pug">
  section.section
    slot
</template>

<style lang="scss">
  .section {
    min-height: 40rem;
  }
</style>
