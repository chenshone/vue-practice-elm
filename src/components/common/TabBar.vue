<template>
  <van-tabbar route>
    <van-tabbar-item to="/home" icon="home-o">
      外卖
    </van-tabbar-item>
    <van-tabbar-item to="/search" icon="search">
      搜索
    </van-tabbar-item>
    <van-tabbar-item to="/order" icon="orders-o">
      订单
    </van-tabbar-item>
    <van-tabbar-item to="/me" icon="manager-o">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import Vue from 'vue'
  import { Tabbar, TabbarItem } from 'vant'

  Vue.use(Tabbar)
  Vue.use(TabbarItem)
  export default {
    name: 'TabBar'
  }
</script>

<style scoped></style>
