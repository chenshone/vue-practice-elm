<template>
  <div id="login">
    <my-nav-bar
      my-title="密码登录"
      :my-left-arrow="true"
      @clickLeftSelf="goBack"
    />

    <van-form @submit="onSubmit" class="my-login-form">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        maxlength="18"
        autosize
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <div class="my-pwd">
        <van-field
          v-model="password"
          :type="pwdType"
          name="password"
          label="密码"
          placeholder="密码"
          autosize
          maxlength="8"
          :rules="[{ required: true, message: '请填写密码' }]"
        >
        </van-field>
        <div class="my-switch">
          <van-switch name="开关" v-model="switchChecked" size="20" />
        </div>
      </div>

      <van-field
        v-model="yzm"
        name="yzm"
        label="验证码"
        placeholder="验证码"
        maxlength="4"
        :rules="[{ required: true, message: '请填写正确的验证码' }]"
      >
        <div class="my-yzm" slot="button" @click="yzmBtn">
          <img :src="yzmImg" alt="验证码" />
        </div>
      </van-field>
      <div class="my-tips">
        <div>温馨提示：未注册过的账号，登录时将自动注册</div>
        <div>注册过的用户可凭账号密码登录</div>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <div class="my-repwd">
      <span @click="handleRepwd">重置密码？</span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Form, Field, Button, Switch, Toast } from 'vant'

  import MyNavBar from 'components/common/MyNavBar'

  import { goBackMixin, yzmListenerMixin } from 'common/mixin'

  import { getcaptchas, accountLogin } from 'api/login'

  Vue.use(Form)
  Vue.use(Field)
  Vue.use(Button)
  Vue.use(Switch)
  Vue.use(Toast)

  export default {
    name: 'Login',
    mixins: [goBackMixin, yzmListenerMixin],
    components: {
      MyNavBar
    },
    data() {
      return {
        username: '',
        password: '',
        switchChecked: false,
        yzm: '',
        yzmImg: null
      }
    },
    created() {
      this.getcaptchas()
    },
    methods: {
      onSubmit(values) {
        this.login(values)
      },
      yzmBtn() {
        this.yzmListener()
      },
      handleRepwd() {
        console.log('1111')
      },
      async getcaptchas() {
        let result = await getcaptchas()
        this.yzmImg = result.code
      },
      async login(values) {
        let result = await accountLogin(
          values.username,
          values.password,
          values.yzm
        )

        this.getcaptchas()

        console.log(result)
        if (result.status === 0) {
          Toast(result.message)
        } else {
          Toast(result.username)
        }
      }
    },
    computed: {
      pwdType() {
        return this.switchChecked ? '' : 'password'
      }
    }
  }
</script>

<style lang="less" scoped>
  #login {
    .my-login-form {
      margin-top: 20px;
      .my-pwd {
        position: relative;
        .my-switch {
          position: absolute;
          right: 16px;
          top: 10px;
        }
      }

      .my-yzm {
        width: 82px;
        height: 35px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .my-tips {
        font-size: 14px;
        color: red;
        padding-left: 15px;
        div {
          &:first-child {
            padding: 10px 0 10px 0;
          }
        }
      }
    }
    .my-repwd {
      color: #3b95e9;
      display: flex;
      flex-direction: row-reverse;
      padding-right: 10px;
    }
  }
</style>
