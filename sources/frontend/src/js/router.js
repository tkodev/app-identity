// dependencies
import VueRouter from 'vue-router';

// components
import Index from '@/js/components/pages/Index.vue';
import DevWork from '@/js/components/pages/DevWork.vue';
import DesignWork from '@/js/components/pages/DesignWork.vue';
import AboutMe from '@/js/components/pages/AboutMe.vue';
import Errors from '@/js/components/pages/Errors.vue';

// router
const appRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index, meta: { title: 'Tony Ko | Front End Developer' } },
    { path: '/dev-work', component: DevWork, meta: { title: 'Tony Ko | Dev Work' } },
    { path: '/design-work', component: DesignWork, meta: { title: 'Tony Ko | Design Work' } },
    { path: '/about-me', component: AboutMe, meta: { title: 'Tony Ko | About Me' } },
    { path: '/*', component: Errors, meta: { title: 'Tony Ko | Error Page' } }
  ]
});

// meta tag changes
appRouter.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

// export
export default appRouter;
