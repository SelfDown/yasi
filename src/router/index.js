import Vue from 'vue'
import Router from 'vue-router'

import contact from '@/components/pages/contact.vue'
import home from '@/components/pages/home.vue'
import colors from '@/components/pages/colors.vue'
import tuofu from '@/components/pages/tuofu.vue'


// 懒加载方式，当路由被访问的时候才加载对应组件
// const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  routes: [
    // // {
    // //   path: '/login',
    // //   name: '登录',
    // //   component: Login
    // // },
    // {
    //   path: '/imageList',
    //   name: '图片列表',
    //   component: imageList
    // },
    // // {
    // //   path: '/header',
    // //   name: '导航',
    // //   component: header
    // // },
    // {
    //   path: '/list',
    //   name: '导航',
    //   component: list 
    // },
    {
      path: '/contact',
      name: '联系我们',
      component:contact
    },
    {
      path: '/colors',
      name: '图片轮播',
      component: colors
    },
    {
      path: '/',
      name: '首页',
      component: home
    },
    {
      path: '/tuofu',
      name: '托福',
      component: tuofu
    }
    ,
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home,
  //     redirect: '/dashboard',
  //     leaf: true, // 只有一个节点
  //     menuShow: true,
  //     iconCls: 'iconfont icon-home', // 图标样式class
  //     children: [
  //       {path: '/dashboard', component: Dashboard, name: '首页', menuShow: true}
  //     ]
  //   },
  //   {
  //     path: '/',
  //     component: Home,
  //     name: '用户管理',
  //     menuShow: true,
  //     leaf: true, // 只有一个节点
  //     iconCls: 'iconfont icon-users', // 图标样式class
  //     children: [
  //       {path: '/user/list', component: UserList, name: '用户列表', menuShow: true}
  //     ]
  //   },
  //
  //   {
  //     path: '/',
  //     component: Home,
  //     name: '设置',
  //     menuShow: true,
  //     iconCls: 'iconfont icon-setting1',
  //     children: [
  //       {path: '/user/profile', component: UserProfile, name: '个人信息', menuShow: true},
  //       {path: '/user/changepwd', component: UserChangePwd, name: '修改密码', menuShow: true}
  //     ]
  //   }
  ]
})

// router.beforeEach((to, from, next) => {
//   // console.log('to:' + to.path)
//   if (to.path.startsWith('/login')) {
//     window.localStorage.removeItem('access-user')
//     next()
//   } else {
//     let user = JSON.parse(window.localStorage.getItem('access-user'))
//     if (!user) {
//       next({path: '/login'})
//     } else {
//       next()
//     }
//   }
// })

export default router
