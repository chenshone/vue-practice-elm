<template>
  <div id="download">
    <my-nav-bar :my-left-arrow="true" my-title="下载" @clickLeftSelf="goBack" />
    <div class="content">
      <img src="~assets/img/elmlogo.jpeg" />
      <div>下载饿了么APP</div>
      <van-button type="primary" class="down-btn">下载</van-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Button } from 'vant'

  import MyNavBar from 'components/common/MyNavBar'

  import { goBackMixin } from 'common/mixin'

  Vue.use(Button)

  export default {
    name: 'Download',
    mixins: [goBackMixin],
    components: {
      MyNavBar
    }
  }
</script>

<style lang="less" scoped>
  #download {
    .content {
      background-color: #fff;
      position: absolute;
      width: 100%;
      height: calc(100vh - 46px);
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      img {
        width: 200px;
        border-radius: 25px;
      }
      div {
        margin-top: 10px;
        margin-bottom: 20px;
      }
      .down-btn {
        width: 90%;
        border-radius: 5px;
      }
    }
  }
</style>
