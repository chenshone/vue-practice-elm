<template>
  <div id="base-info">
    <div class="account" @click="loginOrInfo">
      <div class="head-photo">
        <img src="~assets/img/elmlogo.jpeg" alt="" />
      </div>
      <div class="info">
        <div class="count">{{ myCount }}</div>
        <div>
          <img src="~assets/img/bindphone.png" alt="" />
          <span class="number">{{ myPhoneNumber }}</span>
        </div>
      </div>
      <i class="arrow"></i>
    </div>
    <van-grid :column-num="3" class="my-info">
      <van-grid-item>
        <div class="balance">
          <div class="number">
            <span>{{ myBalance }}</span>
            <span>元</span>
          </div>
          <div class="info">我的余额</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="benefit">
          <div class="number">
            <span>{{ myBenefit }}</span>
            <span>个</span>
          </div>
          <div class="info">我的优惠</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="points">
          <div class="number">
            <span>{{ myPoints }}</span>
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

  import { getImgPath } from 'common/mixin'

  Vue.use(Grid)
  Vue.use(GridItem)
  export default {
    name: 'BaseInfo',
    mixins: [getImgPath],
    methods: {
      loginOrInfo() {
        const route = this.$store.state.login ? '/me/info' : '/login'
        this.$router.push(route)
      }
    },
    computed: {
      myCount() {
        return this.$store.state.login
          ? this.$store.state.userInfo.username
          : '登录/注册'
      },
      myPhoneNumber() {
        return '暂无绑定手机号'
      },
      myBalance() {
        return this.$store.state.login
          ? this.$store.state.userInfo.balance.toFixed(2)
          : '0.00'
      },
      myBenefit() {
        return this.$store.state.login
          ? this.$store.state.userInfo.point.toString()
          : '0'
      },
      myPoints() {
        return this.$store.state.login
          ? this.$store.state.userInfo.point.toString()
          : '0'
      },
      myPhoto() {
        // const url = this.$store.state.login
        //   ? this.$store.state.userInfo.avatar
        //   : ''
        // console.log(url)
        // return this.getImgPath('http://elm.cangdu.org/img/default.jpg')
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
