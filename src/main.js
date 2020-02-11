// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 程序的入口
import Vue from 'vue'
// 根组件
import App from './App'
import router from './router'
// 导入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局样式
import '@/assets/css/index.css'
// 导入自己写的myaxios插件
import MyAxios from '@/plugins/myaxios'

// 全局配置ElementUI
Vue.use(ElementUI)
// 注册
Vue.use(MyAxios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
