<script>
  export default {
    data () {
      return {
        msg: 'FirstRoute'
      }
    }
  } 
</script>

<template lang="pug">
  div
    h1 {{msg}}
    p hello
</template>

<style lang="scss" scoped>
  h1 {
    color: red
  }
</style>
