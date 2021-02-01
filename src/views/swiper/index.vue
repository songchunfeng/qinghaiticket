<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
        <div style="width:100%;height: 100%; background: red;"></div>
    </swiper-slide>
    <swiper-slide>
        <div style="width:100%;height: 100%; background: yellow;"></div>
    </swiper-slide>
    <swiper-slide>
        <div style="width:100%;height: 100%; background: green;"></div>
    </swiper-slide>
    <swiper-slide>
        <div style="width:100%;height: 100%; background: pink;"></div>
    </swiper-slide>
    <swiper-slide>
        <div style="width:100%;height: 100%; background: skyblue;"></div>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev" @click="prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <div class="swiper-button-next" slot="button-next" @click="next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
  </swiper>
</template>

<style lang="less" scoped>
    .swiper-container {
        height: 100%;
    }
</style>
<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        // Some Swiper option/callback...
      }

    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    prev () {
      this.$refs.mySwiper.$swiper.slidePrev()
    },
    next () {
      this.$refs.mySwiper.$swiper.slideNext()
    }
  },
  mounted () {
    //   console.log('Current Swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
  }
}
</script>
