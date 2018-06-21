/*!
 *
 * 接口请求拦截
 * 基于axios的数据模拟
 * 可配置localforage进行本地数据持久化
 * 可配置mockjs进行数据生成
 * webpack entry 中自动执行
 * @version: 1.0.0
 * @author: helloLaoYang<aaron@codons.cn>
 * @document: https://github.com/ctimmerm/axios-mock-adapter
 * @update:
 *  v1.0.0 (2018年06月21日10:13:43)
 *    - 初始化项目配置文件
 */
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

/**
 * 将mock实例挂在到node全局
 * 在store中使用global.mock进行请求拦截
 * 启动方式： 在webpack.dev.conf.js添加入口配置 
 * 配置样例
 *  entry: {
 *    app: ['./src/store/mock.js', './src/main.js']
 *  }
 */
if (global) {
  global.mock = new MockAdapter(axios)
}
