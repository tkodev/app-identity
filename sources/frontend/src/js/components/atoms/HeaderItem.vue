<script>
  export default {
    props: {
      href: {
        type: String,
        default: ''
      },
      external: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {};
    }
  };
</script>

<template lang="pug">
  router-link.header-item(v-if="href && !external", v-bind:to="href")
    slot
  a.header-item(v-else-if="href && external", v-bind:href="href", target="_blank")
      slot
  button.btn.header-item(v-else)
    slot
</template>

<style lang="scss">
  .header-item {
    position: relative;
    padding: 0.5rem 0.1rem;
    font-family: $headings-font-family;
    font-size: $font-size-sm;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: all 0.5s ease;
    border-radius: $border-radius;
    &:after {
      content: '';
      position: absolute;
      display: block;
      bottom: 0;
      left: 50%;
      height: 0px;
      width: 0px;
      transform: translateX(-50%);
      transition: all 0.5s ease;
    }
    &:focus, &.router-link-active, &:hover {
      text-decoration: none;
      &:after {
        height: 4px;
        width: 100%;
      }
    }
    &:focus {
      color: $link-hover-color;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba($link-hover-color, 0.25);
      &:after {
        background-color: rgba($link-hover-color, 0.8);
      }
    }
    &.router-link-active {
      color: $link-hover-color;
      &:after {
        background-color: rgba($link-hover-color, 1.0);
      }
    }
    &:hover {
      color: $link-hover-color;
      &:after {
        background-color: rgba($link-hover-color, 0.8);
      }
    }
  }
</style>
