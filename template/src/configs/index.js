/*!
 *
 * 项目配置文件
 * @version: 0.0.1
 * @author: helloLaoYang<aaron@codons.cn>
 * @update:
 *  v0.0.1 (2018年0月20日10:10:43)
 *    - 初始化项目配置文件
 */

// 获取当前环境变量
export const env = process.env.NODE_ENV || 'production'

// debug
// 是否处于开发环境
export const debug = env === 'development'

/**
 * 关于请求接口配置
 * 配合proxyTable达到开发环境跨域
 * @example:
 * '/api': {
 *   target: 'http://example.com/api/v1', // 接口的域名
 *     secure: false,  // 如果是https接口，需要配置这个参数
 *     changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
 *     pathRewrite: {
 *       '^/api': ''
 *     }
 *  }
 */
export const apiConfig = {
  baseURL: debug ? '' : 'https://api.example.com'
}
