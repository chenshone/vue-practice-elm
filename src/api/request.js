import axios from 'axios'

export function request(config, method = 'GET') {
  return new Promise((resolve, reject) => {
    // 1. 创建axios的实例
    const instance = axios.create({
      timeout: 5000,
      method
    })

    // 2. axios的拦截器
    instance.interceptors.response.use(
      res => {
        return res.data
        // return res
      },
      err => {
        if (error.message.includes('timeout')) {
          // 判断请求异常信息中是否含有超时timeout字符串
          console.log('错误回调', err)
          return Promise.reject(err) // reject这个错误信息
        }
        return Promise.reject(err)
      }
    )

    // 3. 发送真正的网络请求
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)

        // 将错误统一处理
        // console.log(error)
      })
  })
}
