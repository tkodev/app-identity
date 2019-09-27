<script>
  export default {
    data () {
      return {
        menuState: false
      };
    }
  };
</script>

<template lang='pug'>
  div(id='vue-root')
    Header
    router-view
    Footer
    Menu(:menuState="menuState", @close="menuState = false")
    BButton(@click="menuState = true") ateat
</template>

<style lang='scss'>

</style>
