import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://lookarm.cn:8000/api/v1'
Vue.prototype.$http = axios
