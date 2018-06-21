/*!
 *
 * 对vue-meta的支持样例
 * 直接在/src/plugins/index.js中引用本文件即可
 * 前提是安装依赖：yarn add vue-meta
 * @version: 0.0.1
 * @author: helloLaoYang<aaron@codons.cn>
 * @document: https://github.com/declandewet/vue-meta
 * @update:
 *  v0.0.1 (2018年06月21日15:14:55)
 *    - 初始化
 */
import Vue from 'vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  keyName: 'meta'
})