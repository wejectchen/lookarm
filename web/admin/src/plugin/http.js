import Vue from 'vue'
import axios from 'axios'

let Url = 'http://lookarm.cn:8000/api/v1/'

axios.defaults.baseURL = Url

axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
  return config
})

Vue.prototype.$http = axios
