import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { Button, Container, Header, Aside, Main, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui';

Vue.use(Button)
Vue.use(Container)
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
