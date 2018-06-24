<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in itemList" :key="item.id">
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
  data: function () {
    return {
      itemList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
        title: '南京必游Top10',
        desc: '看尽王侯将相荣辱成败，六朝金粉潮起潮落'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/e1/cdbf56d837da59.jpg_r_640x214_105fc3f2.jpg',
        title: '民国情怀国共风华',
        desc: '找到你心中想要的那个民国时期的南京'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f3/d51669250308cc.jpg_r_640x214_7a127cd0.jpg',
        title: '秦淮金粉的南京',
        desc: '六朝金粉，处处诉说着南京的历史'
      }]
    }
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
