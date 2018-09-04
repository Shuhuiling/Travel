<template>
  <div>
    <div class="banner" @click="handleBannerclick" >
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1411/13/0cd5a9a57ae0d1b9b935ec604ce0f9bf.water.jpg_600x330_d6101489.jpg">
      <div class="banner-info">
        <div class="banner-title">南京海底世界</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe691;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="gallaryshow" @close="handlegallaryclose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      gallaryshow: false,
      imgs: ['http://img1.qunarzz.com/wugc/p84/201306/06/74e326683176ecb093835fbb.jpg_r_800x800_a1ae76eb.jpg', 'http://img1.qunarzz.com/sight/p0/1411/a8/e946408395558bfaac08124e72c0a036.water.jpg_r_800x800_b1062619.jpg']
    }
  },
  methods: {
    handleBannerclick () {
      this.gallaryshow = true
    },
    handlegallaryclose () {
      this.gallaryshow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  width: 100%
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      flex: 1
      text-align: left
      padding: 0 .2rem
      font-size: .32rem
    .banner-number
      height: .32rem
      line-height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
</style>
