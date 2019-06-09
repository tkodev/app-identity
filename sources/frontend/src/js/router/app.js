// dependencies
import VueRouter from 'vue-router';

// components
import Index from '@/js/components/pages/Index.vue';

// export
export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index }
  ]
});
