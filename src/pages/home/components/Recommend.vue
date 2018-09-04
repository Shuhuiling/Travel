<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
      tag="li" to="/detail/" class="item" v-for="item in list" :key="item.id">
        <!-- 图片是完全卡在框里的，所以外面不需要包裹div标签对 -->
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
            <button class="item-btn">查看更多</button>
          </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
    margin-top: .2rem
  .item
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 1.9rem
    display: flex
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
      float: left
    .item-info
      text-align: left
      flex: 1
      padding-top: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        margin-top: .04rem
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-btn
        line-height: .44rem
        margin-top: .16rem
        background-color: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
