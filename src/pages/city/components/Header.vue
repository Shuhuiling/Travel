<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div>
        <span class="iconfont header-back">&#xe624;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $pageHeader
    line-height: $pageHeader
    background-color: $bgColor
    color: #fff
    font-size: .32rem
    .header-back
      position: absolute
      top: 0
      left: 0
      width: 0.64rem
      font-size: .4rem
      color: #fff
</style>
