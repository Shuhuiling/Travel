<template>
<div class="home">
<!-- 首页头部 -->
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont src-icon">&#xe632;</span>
      输入城市景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    background-color: $bgColor
    line-height: $pageHeader
    display: flex
    color: #fff
    .header-left
      float: left
      width: 0.64rem
      .back-icon
        font-size: 0.4rem
    .header-input
      flex: 1
      margin-top: 0.12rem
      margin-left: 0.2rem
      height: 0.64rem
      line-height: 0.64rem
      border-radius: 0.1rem
      background: #fff
      color: #ccc
      text-align: left
      .src-icon
        padding-left: 0.1rem
    .header-right
      float: right
      width: 1.24rem
      color: #fff
      .arrow-icon
        margin-left: -0.04rem
</style>
