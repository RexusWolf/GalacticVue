import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import { firebaseConfig } from './.env'
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  
  created () {
    firebase.initializeApp(firebaseConfig);
  }
}).$mount('#app')
