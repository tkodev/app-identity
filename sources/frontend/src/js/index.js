// dependencies
import Vue from 'vue';
import appRouter from '@/js/routes/app.js';

// components
import App from '@/js/pages/App.vue';

// init vue
new Vue({
  el: '#vue-root',
  appRouter,
  render (h) {
    return h(App);
  }
})