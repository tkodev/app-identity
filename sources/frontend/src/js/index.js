// dependencies
import Vue from 'vue';
import appRouter from '@/js/router/app.js';

// components
import App from '@/js/components/pages/App.vue';

// init vue
new Vue({
  el: '#vue-root',
  appRouter,
  render (h) {
    return h(App);
  }
})