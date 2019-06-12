<script>
  export default {
    data () {
      return {

      };
    }
  };
</script>

<template lang="pug">
  .header-content
    BRow.header-row(align-v="center")
      BCol.col-logo(cols="6", md="4")
        HeaderLogo(to="/")
      BCol.col-menu(cols="6", md="8")
        slot
          HeaderItem.d-desktop(href="/dev-work")
            span Dev Work
          HeaderItem.d-desktop.ml-4(href="/design-work")
            span Design Work
          HeaderItem.d-desktop.ml-4(href="/about-me")
            span About Me
          HeaderItem.ml-3.px-2
            FontAwesomeIcon(:icon="['far', 'search']")
          HeaderItem.d-mobile.ml-3.px-2(v-b-modal="'modal-menu'")
            FontAwesomeIcon(:icon="['far', 'bars']")
</template>

<style lang="scss">
  .header-content {
    .header-row {
      height: $header-height;
    }
    .col-logo {
      display: flex;
      align-items: center;
    }
    .col-menu {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
</style>
