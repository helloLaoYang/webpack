/*!
 * vuex配置文件
 * 基于vuex模块开发，实例本身除modules，其他属性方法不允许被使用
 * @version: 1.0.0
 * @author: helloLaoYang<aaron@codons.cn>
 * @document: https://github.com/ctimmerm/axios-mock-adapter
 * @update:
 *  v1.0.0 (2018年06月21日12:30:23)
 *    - 初始化项目配置文件
 */
import Vue from 'vue'
import Vuex from 'vuex'
import token from './modules/token'

// install vuex in vue
Vue.use(Vuex)

// export vuex instance
export default new Vuex.Store({
  state: {},
  modules: {
    token
  }
})
