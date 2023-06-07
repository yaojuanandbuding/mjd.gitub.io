<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要在引入 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Link/>
    <!-- floor这个组件：总结组件内部是没有发请求的，数据是父组件给的 -->
    <Floor v-for="(floor,index) in floorlist" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
//引入其他组件
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Link from '@/pages/Home/Link';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
import {mapState} from 'vuex'
export default {
  name:'',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Link,
    Floor,
    Brand
  },
  mounted() {
    //派发action获取floor组件的数据
    this.$store.dispatch("getFloorList")
  },
  computed:{
    ...mapState({
      floorlist:(state)=>state.home.floorlist
    })
  }
}
</script>

<style>

</style>