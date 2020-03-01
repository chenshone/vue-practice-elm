<template>
  <div>
    <van-index-anchor :index="title" />
    <van-grid>
      <van-grid-item v-for="(item, index) in arrList" :key="index">
        <span :class="{ isChangeBlue: changeBlue }" class="city-name">{{
          item.name
        }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { IndexAnchor, Grid, GridItem } from 'vant'

  Vue.use(IndexAnchor)
  Vue.use(Grid)
  Vue.use(GridItem)
  export default {
    name: 'CityListItem',
    props: {
      title: {
        type: String,
        default() {
          return ''
        }
      },
      list: {
        type: Array,
        default() {
          return []
        }
      },
      changeBlue: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    computed: {
      arrList() {
        if (typeof this.list[0] === 'object') {
          return this.list
        } else {
          return this.list.map(val => {
            return { name: val }
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .city-name {
    display: inline-block;
    white-space: nowrap;

    width: 60px;
    text-align: center;
    overflow: hidden !important;

    text-overflow: ellipsis !important;
  }
  .isChangeBlue {
    color: #3190e8;
  }
</style>
