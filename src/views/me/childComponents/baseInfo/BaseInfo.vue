<template>
  <div id="base-info">
    <div class="account" @click="login">
      <div class="head-photo">
        <img src="~assets/img/elmlogo.jpeg" alt="" />
      </div>
      <div class="info">
        <div class="count">{{ count }}</div>
        <div>
          <img src="~assets/img/bindphone.png" alt="" />
          <span class="number">{{ phoneNumber }}</span>
        </div>
      </div>
      <i class="arrow"></i>
    </div>
    <van-grid :column-num="3" class="my-info">
      <van-grid-item>
        <div class="balance">
          <div class="number">
            <span>{{ balance }}</span>
            <span>元</span>
          </div>
          <div class="info">我的余额</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="benefit">
          <div class="number">
            <span>{{ benefit }}</span>
            <span>个</span>
          </div>
          <div class="info">我的余额</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="points">
          <div class="number">
            <span>{{ points }}</span>
            <span>分</span>
          </div>
          <div class="info">我的余额</div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Grid, GridItem } from 'vant'

  Vue.use(Grid)
  Vue.use(GridItem)
  export default {
    name: 'BaseInfo',
    data() {
      return {
        count: '登录/注册',
        phoneNumber: '暂无绑定手机号',
        balance: '0.00',
        benefit: '0',
        points: '0'
      }
    },
    methods: {
      login() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="less" scoped>
  #base-info {
    margin-bottom: 15px;
    .account {
      color: #fff;
      background-color: #3190e8;
      display: flex;
      align-items: center;
      padding: 16px 15px;
      .head-photo {
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .info {
        padding-left: 11.25px;
        flex: 1;
        .count {
          font-weight: bolder;
        }
        div {
          &:last-child {
            img {
              border-radius: 5px;
              vertical-align: middle;
            }
            .number {
              padding-left: 5px;
              font-size: 16px;
            }
          }
        }
      }
      .arrow {
        width: 10px;
        height: 10px;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        display: inline-block;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
    }

    .my-info {
      font-size: 14px;
      text-align: center;
      .number {
        span {
          &:first-child {
            font-size: 20px;
            font-weight: bolder;
          }
        }
      }
      .balance {
        .number {
          span {
            &:first-child {
              color: #f90;
            }
          }
        }
      }
      .benefit {
        .number {
          span {
            &:first-child {
              color: #ff5f3e;
            }
          }
        }
      }
      .points {
        .number {
          span {
            &:first-child {
              color: #6ac20b;
            }
          }
        }
      }
    }
  }
</style>
