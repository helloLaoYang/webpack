/*!
 *
 * 接口请求函数封装
 * 基于axios进行接口请求函数封装
 * @version: 0.0.1
 * @author: helloLaoYang<aaron@codons.cn>
 * @document: https://github.com/axios/axios
 * @update:
 *  v1.0.0 (2018年05月20日10:13:43)
 *    - 初始化
 */
import axios from 'axios'
import {apiConfig} from '@/configs'

const {CancelToken} = axios
const {baseURL} = apiConfig

/**
 * 接口请求基础函数
 * @param {Object} options 接口请求的配置项目，基本等同axios的配置
 * @param {*} callback 回调函数，用于获取取消请求令牌
 */
export const request = function request (options = {}, callback = function callback () {}) {
  // 校验URL地址是否为空
  const {url} = options
  if (url == null) {
    const err = new Error('Invalid URL')
    err.code = -1
    err.status = false
    err.msg = 'Invalid URL'
    return Promise.reject(err)
  }
  // 返回axios实例
  // 进行参数合并定制
  return axios.request(Object.assign({}, options, {
    baseURL,
    cancelToken: new CancelToken(callback),
    transformRequest (data) {
      return data
    }
  })).then(({data}) => {
    return data
  })
}

/**
 * 对request函数进行get化封装
 * @todo: 可针对RESTful API进行额外优化
 * @param {String} url 请求地址
 * @param {Object} data 请求参数
 * @param {Function} callback 回调函数，用于获取取消请求令牌
 */
export const get = function get (url, params, callback) {
  return request({url, method: 'get', params}, callback)
}

/**
 * 对request函数进行post化封装
 * @todo: 可针对RESTful API进行额外优化
 * @param {String} url 请求地址
 * @param {Object} data 请求参数
 * @param {Function} callback 回调函数，用于获取取消请求令牌
 */
export const post = function post (url, data, callback) {
  return request({url, method: 'post', data}, callback)
}
