<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <!-- 轮播图 -->
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
      <div class="swiper-slide"></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      //代表立即监听：不管数据有没有变化，立即监听一次
      // 为什么watch监听不到list变化，因为数据从来没有发生变化，父亲给的时候就是一个对象，对面里面该有数据都是有的
      immediate: true,
      handler() {
        //只能监听到数据已经有了，但是v-for动态渲染的结构我们还是没有办法去确定，因此还是需要用到nextTick
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.cur, {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //点击小球的时候也切换图片
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>