<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
  
</script> 

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    overflow: hidden
    height: $pageHeader
    line-height: $pageHeader
    background-color: $bgColor
    color: #fff
    font-size: .32rem
    .header-back
      float: left
      width: 0.64rem
      font-size: .4rem
      color: #fff
</style>
