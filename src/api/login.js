import { request } from './request'

export const getcaptchas = () => request({ url: '/v1/captchas' }, 'POST')

export const accountLogin = (username, password, captcha_code) =>
  request(
    { url: '/v2/login', data: { username, password, captcha_code } },
    'POST'
  )
