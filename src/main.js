import Vue from 'vue'
import VueRouter from 'vue-router'
import { MdToolbar, MdButton, MdIcon, MdTabs, MdCard } from 'vue-material/dist/components'
import App from './App.vue'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueRouter)
Vue.use(MdToolbar)
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdTabs)
Vue.use(MdCard)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
