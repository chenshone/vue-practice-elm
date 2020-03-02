<template>
  <div id="me">
    <my-nav-bar
      class="me-nav-bar"
      :my-left-arrow="true"
      my-title="我的"
      :my-border="false"
      @clickLeftSelf="goBack"
    ></my-nav-bar>
    <base-info />
    <money-info />
    <others />
  </div>
</template>

<script>
  import MyNavBar from 'components/common/MyNavBar'

  import BaseInfo from './childComponents/baseInfo/BaseInfo'
  import MoneyInfo from './childComponents/moneyInfo/MoneyInfo'
  import Others from './childComponents/others/Others'

  import { goBackMixin } from 'common/mixin'

  export default {
    name: 'Me',
    components: {
      MyNavBar,
      BaseInfo,
      MoneyInfo,
      Others
    },
    mixins: [goBackMixin]
  }
</script>

<style lang="less">
  #me {
    font-size: 20px;

    .me-nav-bar {
      .van-nav-bar__title {
        font-weight: bolder;
      }
    }
  }
</style>
