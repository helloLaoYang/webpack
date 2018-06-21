/*!
 * 关于用户token
 * 获取/验证/更新用户token
 * @version: 1.0.0
 * @author: helloLaoYang<aaron@codons.cn>
 * @document:
 * @update:
 */
import {get} from '@/api'
import './mock'

export default {
  state: {
    token: ''
  },
  mutations: {
    'update/token' (state, {token}) {
      state.token = token
    }
  },
  actions: {
    'get/user/token' ({commit}, {code: tickToken}) {
      return new Promise(async function (resolve, reject) {
        try {
          const {data} = await get('/api/user/token', {code: tickToken})
          const {token} = data
          commit('update/token', {token})
          resolve(data)
        } catch (e) {
          reject(e)
        }
      })
    }
  }
}
