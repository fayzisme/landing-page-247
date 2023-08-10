import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import router from "./router/index"
import VueYouTubeEmbed from 'vue-youtube-embed'
// import firebase from 'firebase/app'
// import 'firebase/firestore'

Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false

// firebase.initializeApp({
//  Configurações do seu app
// })

// export const db = firebase.firestore()

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
