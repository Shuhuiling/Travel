<template>
  <div class="search">
    <input class="search-content" type="text" placeholder="输入城市名字或拼音" />
  </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    line-height: .72rem
    background-color: $bgColor
    padding: 0 .1rem
    .search-content
      box-sizing: border-box
      width: 100%
      padding: 0 .1rem
      border-radius: .06rem
      text-align: center
      color: #666
</style>
