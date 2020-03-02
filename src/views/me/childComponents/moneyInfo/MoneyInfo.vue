<template>
  <van-cell-group id="money-info">
    <van-cell title="我的订单" is-link to="order" icon="bars"> </van-cell>
    <van-cell title="积分商城" is-link to="order">
      <van-icon class="my-icon" slot="icon" name="bag" color="#FF3300" />
    </van-cell>
    <van-cell title="饿了么会员卡" is-link to="vipcard">
      <van-icon class="my-icon" slot="icon" name="vip-card" color="#FFCC00" />
    </van-cell>
  </van-cell-group>
</template>

<script>
  import Vue from 'vue'
  import { Cell, CellGroup, Icon } from 'vant'

  Vue.use(Cell)
  Vue.use(CellGroup)
  Vue.use(Icon)
  export default {
    name: 'MoneyInfo'
  }
</script>

<style lang="less" scoped>
  #money-info {
    margin-bottom: 15px;
    .my-icon {
      padding-top: 2px;
      padding-left: 2px;
      padding-right: 5px;
      &::before {
        vertical-align: middle;
      }
    }
  }
</style>
