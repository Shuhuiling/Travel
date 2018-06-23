<template>
  <div class="icons">
    <swiper>
      <!-- 控制有多少个轮播页面 -->
      <swiper-slide v-for="(page, index) in pages" :key="index" >
        <div class="icon" v-for="item in page" :key=item.id>
          <div class="img">
            <img class="img-icon" :src="item.imgUrl"/>
          </div>
          <p class="img-icon-context">{{ item.imgtxt }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        imgtxt: '景点门票年年岁岁'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        imgtxt: '水上玩乐'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
        imgtxt: '生活休闲'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
        imgtxt: '本地玩乐'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        imgtxt: '必游榜单'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        imgtxt: '名胜古迹'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
        imgtxt: '茅山'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
        imgtxt: '镇江金山'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
        imgtxt: '镇江金山'
      }]
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
        padding-top: .1rem
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
