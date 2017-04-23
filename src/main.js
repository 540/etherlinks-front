import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import validationLocaleEs from '../node_modules/vee-validate/dist/locale/es'

import SignatureRepository from './model/SignatureRepository'
import './assets/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/scss/font-awesome.scss'

import moment from 'moment'
const signatureRepository = new SignatureRepository()

moment.locale('es')

Vue.use(BootstrapVue)

VeeValidate.Validator.extend('urlExists', value => signatureRepository.checkUrl(value))

VeeValidate.Validator.addLocale(validationLocaleEs)
Vue.use(VeeValidate, {locale: 'es'})
VeeValidate.Validator.setLocale('es')

Vue.config.productionTip = false
Vue.filter('moment', function (value) {
  return moment(value).format('D \\d\\e MMMM \\d\\e\\l YYYY')
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
