<template>
  <div id="meInfo">
    <my-nav-bar
      class="me-nav-bar"
      :my-left-arrow="true"
      my-title="账户信息"
      :my-border="false"
      @clickLeftSelf="goBack"
    ></my-nav-bar>
    <van-cell-group>
      <van-cell title="头像" is-link to="/" class="my-head-photo">
        <div class="headPhoto">
          <img :src="headPhotoURL" alt="" />
        </div>
      </van-cell>
      <van-cell title="用户名" is-link to="/" :value="username"> </van-cell>
      <van-cell title="收货地址" is-link to="/"> </van-cell>
    </van-cell-group>
    <van-cell-group title="账号绑定">
      <van-cell title="手机" is-link to="/"> </van-cell
    ></van-cell-group>
    <van-cell-group title="安全设置">
      <van-cell title="登录密码" is-link to="/" value="修改"> </van-cell>
    </van-cell-group>

    <van-button type="danger" size="large" class="my-btn">退出</van-button>
  </div>
</template>

<script>
  import MyNavBar from 'components/common/MyNavBar'

  import { goBackMixin, imgBaseURL } from 'common/mixin'

  import Vue from 'vue'
  import { Cell, CellGroup, Icon, Button } from 'vant'

  import { mapGetters } from 'vuex'
  Vue.use(Cell)
  Vue.use(CellGroup)
  Vue.use(Icon)
  Vue.use(Button)

  export default {
    name: 'Info',
    components: {
      MyNavBar
    },
    mixins: [goBackMixin, imgBaseURL],
    computed: {
      ...mapGetters(['getUserInfo']),
      headPhotoURL() {
        console.log(this.imgBaseURL)
        return this.imgBaseURL + this.getUserInfo.avatar
      },
      username() {
        return this.getUserInfo.username
      }
    }
  }
</script>

<style lang="less" scoped>
  #meInfo {
    .my-head-photo {
      display: flex;
      align-items: center;
      .headPhoto {
        img {
          width: 50px;
          border-radius: 50%;
        }
      }
    }
    .my-btn {
      width: 90%;
      margin: 30px 5% 0 5%;
      border-radius: 10px;
    }
  }
</style>
