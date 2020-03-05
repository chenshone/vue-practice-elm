<template>
  <van-cell-group id="others">
    <van-cell title="服务中心" is-link to="/service" icon="bars">
      <van-icon class="my-icon" slot="icon" name="service" color="#3190e8" />
    </van-cell>
    <van-cell title="下载饿了么APP" is-link to="/download">
      <div class="elm-logo" slot="icon"></div>
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
  #others {
    .my-icon {
      padding-top: 2px;
      padding-left: 2px;
      padding-right: 5px;
      &::before {
        vertical-align: middle;
      }
    }
    .elm-logo {
      width: 14px;
      height: 14px;
      background: url('~assets/img/elmlogo.jpeg') no-repeat;
      background-size: 14px 14px;
      margin: 5px 5px 0 2px;
      border-radius: 3px;
    }
  }
</style>
