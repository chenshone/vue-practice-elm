<template>
  <div>
    <div class="current-city">
      <div class="tip">
        <span>当前定位城市:</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <div class="guess-city">
        <span>{{ guessCity }}</span>
        <van-icon name="arrow" size="14" />
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Icon } from 'vant'

  Vue.use(Icon)
  export default {
    name: 'CurrentCity',
    props: {
      guessCity: {
        type: String,
        default() {
          return '定位不成功'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @color: #3190e8;

  .current-city {
    .tip {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      padding: 20px 10px 10px 10px;
      span {
        &:last-child {
          font-weight: bolder;
          color: #9f9f9f;
        }
      }
    }
    .guess-city {
      color: @color;
      font-weight: bolder;
      font-size: 20px;
      padding: 10px;
      border-top: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;

      display: flex;
      justify-content: space-between;
      align-items: center;

      i {
        height: 14px;
      }
    }
  }
</style>
