<template>
  <div>
    <div v-for="(item, index) of list" :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <!-- 递归组件的使用 -->
      <!-- 层级关系需要用css样式 -->
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    text-align: left
    line-height: .60rem
    width: 100%
    font-size: .32rem
    margin: .1rem
    .item-title-icon
      position: relative
      left .2rem
      top: .06rem
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .2rem
      background-size: .4rem 3rem
   .item-children
     padding: 0 .2rem
</style>
