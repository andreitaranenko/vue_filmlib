// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'

import App from './App'
import router from './router'
import store from './store'

// Firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
// Dont need it
// import 'firebase/messaging'
// import 'firebase/storage'

Vue.use(
  Vuelidate
)

Vue.use(
  Uimini
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Configuration
    let config = {
      apiKey: 'AIzaSyAuYPdiLfFm-IJjru2olIUz9kiPg7VeBMI',
      authDomain: 'filmlib-eea5c.firebaseapp.com',
      databaseURL: 'https://filmlib-eea5c.firebaseio.com',
      projectId: 'filmlib-eea5c',
      storageBucket: 'filmlib-eea5c.appspot.com',
      messagingSenderId: '1085767227261',
      appId: '1:1085767227261:web:5587e27d3c13aef02b5e14'
    }
    // Firebase Initialize
    firebase.initializeApp(config)

    // Auth Check
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Check Logged
        this.$store.dispatch('loggedUser', user)
        // Loading All Tasks
        this.$store.dispatch('loadTasks')
        // Loading All Tags
        this.$store.dispatch('loadTags')
        console.log(this.$store.getters.message.title)
      }
    })
  }
})
