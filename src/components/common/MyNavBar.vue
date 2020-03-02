<template>
  <van-nav-bar
    class="my-nav-bar"
    :title="myTitle"
    :left-text="myLeftText"
    :right-text="myRightText"
    :left-arrow="myLeftArrow"
    :fixed="myFixed"
    :border="myBorder"
    :z-index="myZIndex"
    @click-left="myClickLeft"
    @click-right="myClickRight"
  >
    <slot name="myRight" slot="right"></slot>
  </van-nav-bar>
</template>

<script>
  import Vue from 'vue'
  import { NavBar } from 'vant'

  Vue.use(NavBar)
  export default {
    name: 'NavBar',
    props: {
      myTitle: {
        type: String,
        default: ''
      },
      myLeftText: {
        type: String,
        default: ''
      },
      myRightText: {
        type: String,
        default: ''
      },
      myLeftArrow: {
        type: Boolean,
        default: false
      },
      myFixed: {
        type: Boolean,
        default: false
      },
      myBorder: {
        type: Boolean,
        default: false
      },
      myZIndex: {
        type: Number,
        default: 1
      }
    },
    methods: {
      myClickLeft() {
        this.$emit('clickLeftSelf')
      },
      myClickRight() {
        this.$emit('clickRightSelf')
      }
    }
  }
</script>

<style lang="less" scoped>
  @color: #3190e8;
  .my-nav-bar {
    background-color: @color;
    .van-nav-bar__text {
      color: #fff;
      font-size: 20px;
    }
  }
</style>
