<script>
  export default {
    props: {
      menuState: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        lastFocus: null
      };
    },
    mounted () {
      console.log(this.$refs);
      this.$refs.menu.addEventListener('blur', (e) => {
        console.log('focusOut', e);
        // this.$refs.menu.focus();
      });
    },
    methods: {
      close () {
        this.$emit('close');
      }
    }
  };
</script>

<template lang='pug'>
  transition(name='menu-fade', appear)
    .menu(v-if='menuState', ref='menu', @keydown.esc='close', tabindex='-1')
      .menu-backdrop
      .menu-body
        .menu-header
          BContainer(fluid)
            HeaderContent
              HeaderItem.d-mobile.ml-3.px-2(@click.native='close')
                FontAwesomeIcon(:icon='["far", "times"]')
        .menu-content
        .menu-footer
</template>

<style lang='scss'>
  .menu {
    position: relative;
    .menu-backdrop, .menu-body {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
    .menu-backdrop {
      background-color: $body-bg;
    }
    .menu-body {

    }
  }
  .menu-fade-enter-active, .menu-fade-leave-active {
    transition: opacity .5s;
  }
  .menu-fade-enter, .menu-fade-leave-to {
    opacity: 0;
  }
</style>
