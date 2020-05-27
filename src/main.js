import Vue from 'vue'
import VueRouter from 'vue-router'
import { MdToolbar, MdButton, MdIcon, MdTabs, MdCard } from 'vue-material/dist/components'
import App from './App.vue'
import firebase from 'firebase/app'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueRouter)
Vue.use(MdToolbar)
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdTabs)
Vue.use(MdCard)
Vue.config.productionTip = false

const router = new VueRouter()

firebase.initializeApp({
  apiKey: "AIzaSyAWfmBf-g-Znc9re4lPyfnx8xg1oGG6_FY",
  authDomain: "pickle-a85cc.firebaseapp.com",
  databaseURL: "https://pickle-a85cc.firebaseio.com",
  projectId: "pickle-a85cc",
  storageBucket: "pickle-a85cc.appspot.com",
  messagingSenderId: "741066861561",
  appId: "1:741066861561:web:74c5d894b9b24e5bc9ab28"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
