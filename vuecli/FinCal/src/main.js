// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@blexar/framework'
import VueForm from 'vue-form'
import Axios from 'axios'
import VueNumeric from 'vue-numeric'

Vue.use(VueForm)
Vue.use(VueNumeric)
Vue.config.productionTip = true
Axios.defaults.baseURL = process.env.API_ENDPOINT

//new Vue({
//    render: h => h(App)
//}).$mount('#app');

var app = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})




