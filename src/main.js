import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/iconfont.css'        //字体图标
import '@/assets/styles/main.scss'    //全局样式
import $ from 'jquery'
import component from '@/components/component/index.js'
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css'


// require('bootstrap')
Vue.use(Mint)
Vue.use(component)        //全局挂载自定义组件
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
