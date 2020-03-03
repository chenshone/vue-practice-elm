import { request } from './request'

export const getCity = type =>
  request({
    url: '/v1/cities',
    params: {
      type
    }
  })
