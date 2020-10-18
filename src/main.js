import Vue from 'vue'
import router from './Router'
import store from './Store'
import App from './App.vue'
import "@/assets/css/style.css"
import "@/assets/css/media.css"
import "@/assets/css/animation.css"

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requireAuth)
  let is_auth = store.getters["users/is_auth"];

  if (requiresAuth && !is_auth) {
    next("login")
  }
  else if (!requiresAuth && is_auth) {
    next("admin-home")
  }
  else {
    next()
  }

})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
