/*!
 * 全局混合/全局路由钩子
 * 针对全局混合和全局路由钩子进行数据预加载操作
 * @tip: 在未启用vuex以及vue-router时，请根据自身情况改写
 * @version: 1.0.0
 * @author: helloLaoYang<aaron@codons.cn>
 * @document: https://github.com/ctimmerm/axios-mock-adapter
 * @update:
 *  v1.0.0 (2018年06月21日12:30:23)
 *    - 初始化项目配置文件
 */
import App from '../App.vue'
import router from '../router'
import store from '../store'

// App.vue的独立钩子
// 且仅执行一次
// 如果想每次路由变化都执行，将globalAsyncHook改变为工厂函数即可
const globalAsyncHook = new Promise(function (resolve, reject) {
  try {
    const {asyncData = function asyncData () {}} = App
    Promise.all([
      asyncData({
        route: router.currentRoute,
        store
      })
    ]).then(r => resolve(r))
      .catch(e => reject(e))
  } catch (e) {
    reject(e)
  }
})

// 路由组件加载完成钩子
// 适用于异步组件
router.beforeResolve(function (to, from, next) {
  // 获取当前路由组件集
  const components = router.getMatchedComponents(to)
  // 处理组件asyn钩子进行
  const asyncHooks = components.map(({asyncData}) => asyncData && asyncData({
    route: to,
    store
  }))
  // 添加全局钩子
  asyncHooks.unshift(globalAsyncHook)
  // 筛选执行钩子集
  Promise.all(asyncHooks).then(next).catch((e) => {
    console.warn(e)
    next()
  })
})
