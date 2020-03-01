<template>
  <van-nav-bar left-text="elm.me" @click-right="goMe" class="my-nav-bar">
    <van-icon name="manager-o" slot="right" color="#fff" size="20" />
  </van-nav-bar>
</template>

<script>
  import Vue from 'vue'
  import { NavBar, Icon } from 'vant'

  Vue.use(NavBar)
  Vue.use(Icon)

  export default {
    name: 'NavBar',
    methods: {
      goMe() {
        this.$router.replace('/me')
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
