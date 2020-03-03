import { debounce } from 'common/utils'

export const goBackMixin = {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}

export const yzmListenerMixin = {
  data() {
    return {
      yzmListener: null
    }
  },
  mounted() {
    // 图片加载完成的事件监听
    const getYZM = debounce(this.getcaptchas, 300)
    // 对监听的事件进行保存
    this.yzmListener = () => {
      getYZM()
    }
  }
}
