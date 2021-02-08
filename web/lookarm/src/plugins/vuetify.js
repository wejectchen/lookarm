// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import Message from 'vue-multiple-message'
Vue.prototype.$message = Message

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  breakpoint: {
    mobileBreakpoint: 'sm' // 这个值等于960
  }
})
