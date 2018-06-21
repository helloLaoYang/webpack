/*!
 * 用户token接口拦截以及数据模拟
 * 数据模拟可以采用mock.js，请自行斟酌
 * @version: 1.0.0
 * @author: helloLaoYang<aaron@codons.cn>
 * @document:
 * @update:
 */
const {mock} = global

if (mock) {
  mock.onGet('/api/user/token').reply(function ({params: {code: tickToken}}) {
    return [200, {
      status: true,
      code: 200,
      data: {
        token: `${tickToken}kfw001`
      },
      msg: 'get user token: ok'
    }]
  })
}
