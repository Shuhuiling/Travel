<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="part">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="part">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
           <div class="button-wrapper">
            <div class="button">深圳</div>
          </div>
           <div class="button-wrapper">
            <div class="button">成都</div>
          </div>
           <div class="button-wrapper">
            <div class="button">南京</div>
          </div>
        </div>
      </div>
      <div class="part">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
      <div class="part">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'List',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .list 
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      text-align: left
      color: #666
      line-height: .44rem
      font-size: .24rem
      padding-left: .20rem
      // background: #eee
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      text-align: left
      padding-left: .2rem
      .item
        padding: .2rem 0
</style>
