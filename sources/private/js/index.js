// dependencies
import Vue from 'vue';
import router from '@/js/router.js';

// components
import App from '@/js/organisms/App.vue';

// init vue
new Vue({
  el: '#vue-root',
  router,
  render (h) {
    return h(App);
  }
})