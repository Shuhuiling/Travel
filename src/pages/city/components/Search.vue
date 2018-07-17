<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-content" type="text" placeholder="输入城市名字或拼音" />
    </div>
    <div class="search-list" ref="item" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id">{{ item.name }}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'Better-scroll'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.item)
  }
}
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
  .search-list
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background-color: #eee
    text-align: left
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background-color: #fff
</style>
