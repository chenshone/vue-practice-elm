<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar />
  </div>
</template>

<script>
  import TabBar from 'components/common/TabBar'
  export default {
    name: 'App',
    components: {
      TabBar
    }
  }
</script>

<style scoped>
  @import './assets/style/normalize.css';
</style>
