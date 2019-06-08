<script>
  export default {
    data () {
      return {
        msg: 'FirstRoute',
        test: () => {
          return 'hello'
        }
      }
    }
  } 
</script>

<template lang="pug">
  div
    h1 {{msg}}
    p hello
</template>

<style lang="sass" scoped>
  h1
    color: red
</style>
