import { getUser } from 'api/login'
import { GET_USERINFO, SAVE_ADDRESS } from './mutationsTypes.js'

export const actions = {
  async getUserInfo({ commit, state }) {
    let res = await getUser()
    commit(GET_USERINFO, res)
  }
}
