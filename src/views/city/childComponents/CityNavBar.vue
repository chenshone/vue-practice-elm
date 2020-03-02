<template>
  <my-nav-bar my-left-text="elm.me" @clickRightSelf="goMe">
    <van-icon name="manager-o" slot="myRight" color="#fff" size="20" />
  </my-nav-bar>
</template>

<script>
  import Vue from 'vue'
  import { Icon } from 'vant'
  import MyNavBar from 'components/common/MyNavBar'

  Vue.use(Icon)

  export default {
    name: 'NavBar',
    components: {
      MyNavBar
    },
    methods: {
      goMe() {
        this.$router.replace('/me')
      }
    }
  }
</script>

<style lang="less" scoped></style>
