<template>
  <div class="container" @click="handleGallaryclick">
    <div class="wrapper" >
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="swiper-img" :src="item"/>
        </swiper-slide>
        <!-- 显示页码 -->
         <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryclick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
// 下标页码应显示在swiper的下方，swiper-container本身有hidden，将超过轮播图的部分隐藏，需解封
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background-color: #000
  .wrapper
    height: 0
    width: 100%
    padding-bottom: 73.3%
    .swiper-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
