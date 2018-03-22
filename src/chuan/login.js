export function login (router) {
  /*
    判断用户是否登陆过如果登陆过直接跳转到主页面
 */
  router.beforeEach((to, form, next) => {
    var data1 = JSON.parse(sessionStorage.getItem('key'))
    if (data1) {
      if (to.fullPath === '/home/login') {
        console.log(to.fullPath)
        next({path: '/home/main'})
      } else {
        next()
      }
    } else {
      next()
    }
  })
}
