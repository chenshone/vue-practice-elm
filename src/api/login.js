import { request } from './request'
import { getStore } from 'common/utils'

export const getcaptchas = () => request({ url: '/v1/captchas' }, 'POST')

export const accountLogin = (username, password, captcha_code) =>
  request(
    { url: '/v2/login', data: { username, password, captcha_code } },
    'POST'
  )

/**
 * 获取用户信息
 */

export const getUser = () =>
  request({ url: '/v1/user', user_id: getStore('user_id') })

/**
 * 退出登录
 */
export const signout = () => request({ url: '/v2/signout' })
