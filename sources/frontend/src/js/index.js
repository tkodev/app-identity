// dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
import appRouter from '@/js/router.js';

// components
import { faSearch, faBars, faTimes } from '@fortawesome/pro-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  VBModal, BModal, BContainer, BRow, BCol, BButton
} from 'bootstrap-vue';
import App from '@/js/components/pages/App.vue';
import Header from '@/js/components/organisms/Header.vue';
import Footer from '@/js/components/organisms/Footer.vue';
import Main from '@/js/components/organisms/Main.vue';
import Modals from '@/js/components/organisms/Modals.vue';
import Section from '@/js/components/organisms/Section.vue';
import HeaderContent from '@/js/components/molecules/HeaderContent.vue';
import FooterContent from '@/js/components/molecules/FooterContent.vue';
import HeaderLogo from '@/js/components/atoms/HeaderLogo.vue';
import HeaderItem from '@/js/components/atoms/HeaderItem.vue';

// modules - init
Vue.use(VueRouter);
library.add(faSearch, faBars, faTimes);
Vue.directive('b-modal', VBModal);

// components - init
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.component('BModal', BModal);
Vue.component('BContainer', BContainer);
Vue.component('BRow', BRow);
Vue.component('BCol', BCol);
Vue.component('BButton', BButton);
Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('Main', Main);
Vue.component('Modals', Modals);
Vue.component('Section', Section);
Vue.component('HeaderContent', HeaderContent);
Vue.component('FooterContent', FooterContent);
Vue.component('HeaderLogo', HeaderLogo);
Vue.component('HeaderItem', HeaderItem);

// vue - init
new Vue({
  el: '#vue-root',
  router: appRouter,
  render: (h) => h(App)
});
