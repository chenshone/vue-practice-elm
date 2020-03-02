import { request } from './request'

/**
 * 获取首页默认地址
 */

// export const cityGuess = request('/v1/cities', {
//   type: 'guess'
// })

export function getCity(type) {
  return request({
    url: '/v1/cities',
    params: {
      type
    }
  })
}
// /**
//  * 获取首页热门城市
//  */

// export const hotcity = request('/v1/cities', {
//   type: 'hot'
// })

// /**
//  * 获取首页所有城市
//  */

// export const groupcity = request('/v1/cities', {
//   type: 'group'
// })
