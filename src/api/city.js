import { request } from './request'

export function getCity(type) {
  return request({
    url: '/v1/cities',
    params: {
      type
    }
  })
}
