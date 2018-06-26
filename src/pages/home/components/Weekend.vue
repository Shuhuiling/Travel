<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <!-- 图片是完全卡在框里的，所以外面不需要包裹div标签对 -->
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    text-align: left
    line-height: .8rem
    text-indent: .2rem  /* 首行缩进10px */
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37%
    .item-img
      width: 100%
  .item-info
    text-align: left
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .30rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
