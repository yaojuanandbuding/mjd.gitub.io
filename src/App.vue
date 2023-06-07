<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示的，在登录或者注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name:'App',
components:{
  Header,
  Footer
},
mounted() {
    //通知Vuex发请求，获取数据，存储于仓库中
    //派发一个action获取三级分类的三级列表的数据
    this.$store.dispatch("peiqi");
},
}
</script>

<style>

</style>