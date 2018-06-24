<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item in itemList" :key="item.id">
        <!-- 图片是完全卡在框里的，所以外面不需要包裹div标签对 -->
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
            <button class="item-btn">查看更多</button>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      itemList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/f4/f455d92ba582f608.water.jpg_200x200_375e5775.jpg',
        title: '南京汤山颐尚温泉南京汤山颐尚温泉南京汤山颐尚温泉',
        desc: '热推景点'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_200x200_0b707f70.jpg',
        title: '南京总统府',
        desc: '热推景点'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg',
        title: '银杏湖乐园',
        desc: '热推景点'
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
