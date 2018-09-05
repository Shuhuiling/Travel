<template>
  <div >
    <router-link tag="div" to="/" class="header-back" v-show="!headershow">
      <span class="iconfont header-back-icon">&#xe624;</span>
    </router-link>
    <div class="header-abs" v-show="headershow" :style="opacityStyle">
      <router-link to="/">
        <div>
          <span class="iconfont header-abs-back-icon">&#xe624;</span>
        </div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      headershow: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // const定义：必须先初始化/不可改变数值
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.headershow = true
      } else {
        this.headershow = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 对全局的解绑
  deactivated () {
    window.removeaddEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-back
    position: absolute
    top: .2rem
    left: .2rem
    height: .6rem
    line-height: .6rem
    width: .6rem
    border-radius: 50%
    background: rgba(0, 0, 0, .6)
    .header-back-icon
      font-size: .3rem
      color: #fff
  .header-abs
    position: fixed
    top: 0
    left: 0
    overflow: hidden
    height: $pageHeader
    line-height: $pageHeader
    width: 100%
    background-color: $bgColor
    color: #fff
    font-size: .32rem
    .header-abs-back-icon
      position: fixed
      top: 0
      left: 0
      width: 0.64rem
      font-size: .4rem
      color: #fff
</style>
