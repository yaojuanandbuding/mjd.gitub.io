import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
//第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel);
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
import { Button,MessageBox} from 'element-ui';
//注册全局组件
Vue.component(Button.name,Button)
//ElenmentUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入路由
import router from '@/router'
// 测试
// import {reqCategoryList} from '@/api'
// reqCategoryList();
//引入仓库
import store from '@/store'
//引入MockServe.js----mock数据
import '@/mock/mockServe'
// 引入Swiper样式
import "swiper/css/swiper.css"
import {reqGetSearchInfo} from '@/api'
console.log(reqGetSearchInfo({}));
Vue.config.productionTip = false

//统一接受api文件夹里面全部请求函数
//统一引入
import * as API  from '@/api';
import atm from '@/assets/1.gif'
// console.log(API);
//引入插件
import VueLazyload from 'vue-lazyload'
//注册插件
Vue.use(VueLazyload,{
  //懒加载默认的图片
  loading:atm
});

// 引入自定义插件
import myPlugins from './plugins/myPlugins';
Vue.use(myPlugins,{
  name:'upper'
})
//引入表单校验插件
import "@/plugins/validate"
new Vue({
  render: h => h(App),
  beforeCreate(){
    //全局事件总线$bus配置
    Vue.prototype.$bus = this;
    Vue.prototype.$API =API;
  },
  //注册路由:底下写法是kv一致【router小写的】
  // 注册路由信息：这里书写router时候，组件身上都拥有$route,$router属性
  router,
  //注册仓库:组件身上会多了一个属性$store属性
  store
}).$mount('#app')
