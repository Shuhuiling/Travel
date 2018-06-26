<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- 控制有多少个轮播页面 -->
      <swiper-slide v-for="(list, index) in pages" :key="index" >
        <div class="icon" v-for="item in list" :key=item.id>
          <div class="img">
            <img class="img-icon" :src="item.imgUrl"/>
          </div>
          <p class="img-icon-context">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .4rem
      .img-icon
        height: 100%
        box-sizing: border-box
        padding: .1rem
        display: block
        margin: 0 auto // 图片居中显示
    .img-icon-context
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .4rem
      line-height: .4rem
      color: #darkTextColor
      ellipsis()
</style>
