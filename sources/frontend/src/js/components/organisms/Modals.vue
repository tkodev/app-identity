<script>
  export default {
    data () {
      return {

      };
    }
  };
</script>

<template lang="pug">
  .modals
    slot
    BModal#modal-menu(centered scrollable no-fade)
      template(slot="modal-header", slot-scope="{ close }")
        BContainer(fluid)
          HeaderContent
            HeaderItem.d-desktop.ml-3.px-2(v-on:click.native="close()")
              FontAwesomeIcon(:icon="['far', 'times']", size="2x")
      template(slot="modal-body")
      template(slot="modal-footer")
        BContainer(fluid)
          BRow.modal-row

</template>

<style lang="scss">
  #modal-menu {
    .modal-row {
      height: $header-height;
    }
    .col-menu {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .modal-dialog, .modal-content {
      height: 100%;
      width: 100%;
      max-height: 100%;
      max-width: 100%;
      background-color: transparent;
      margin: 0;
      border: 0;
      color: $body-color;
    }
    .modal-header, .modal-footer {
      padding: 0;
      border: 0;
    }
    & ~ .modal-backdrop {
      opacity: 1;
    }
  }
</style>
