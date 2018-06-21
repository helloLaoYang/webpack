/*!
 *
 * 插件样式等集中处理
 * 确保样式顺序的一致性
 * @version: 0.0.1
 * @author: helloLaoYang<aaron@codons.cn>
 * @document: https://github.com/declandewet/vue-meta
 * @update:
 *  v0.0.1 (2018年06月21日15:40:40)
 *    - 初始化
 */
import 'normalize.css'
// 此次引入css文件/具有css样式的插件以及组件库
import './meta'
export {default as App} from '../App.vue'
export {default as router} from '../router'
export {default as store} from '../store'
