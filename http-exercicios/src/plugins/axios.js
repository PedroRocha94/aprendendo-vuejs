import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://projeto-vue-f12dc-default-rtdb.firebaseio.com/'

Vue.use({
  install(Vue){
    Vue.prototype.$http = axios;
  }
})