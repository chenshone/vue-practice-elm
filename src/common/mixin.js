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

export const getImgPath = {
  methods: {
    //传递过来的图片地址需要处理后才能正常使用
    getImgPath(path) {
      let suffix
      if (!path) {
        return 'http://elm.cangdu.org/img/default.jpg'
      }
      if (path.indexOf('jpeg') !== -1) {
        suffix = '.jpeg'
      } else {
        suffix = '.png'
      }
      let url =
        '/' +
        path.substr(0, 1) +
        '/' +
        path.substr(1, 2) +
        '/' +
        path.substr(3) +
        suffix
      return 'https://fuss10.elemecdn.com' + url
    }
  }
}

export const imgBaseURL = {
  data() {
    return {
      imgBaseURL: '//elm.cangdu.org/img/'
    }
  }
}
