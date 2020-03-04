<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar />
  </div>
</template>

<script>
  import TabBar from 'components/common/TabBar'

  import { getUser } from 'api/login'
  export default {
    name: 'App',
    components: {
      TabBar
    },
    created() {
      this.$store.dispatch('getUserInfo')
    }
  }
</script>

<style scoped>
  @import './assets/style/base.css';
</style>
