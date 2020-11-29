import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'index',
  component: resolve => require(['./views/index.vue'], resolve)
},
{
  path: '/qinghai',
  name: 'home',
  component: resolve => require(['./views/home.vue'], resolve),
  children: [{
    path: '/qinghai/scenicSpotInfo',
    name: 'scenicSpotInfo',
    component: resolve => require(['./views/scenicSpotInfo/index.vue'], resolve)
  },
  {
    path: '/qinghai/InformationDetails',
    name: 'InformationDetails',
    component: resolve => require(['./views/scenicSpotInfo/InformationDetails.vue'], resolve)
  },
  {
    path: '/qinghai/RecommendedScenicSpots',
    name: 'RecommendedScenicSpots',
    component: resolve => require(['./views/RecommendedScenicSpots/index.vue'], resolve)
  },
  {
    path: '/qinghai/AllScenicSpots',
    name: 'AllScenicSpots',
    component: resolve => require(['./views/AllScenicSpots/index.vue'], resolve)
  }, {
    path: '/qinghai/TeamBook',
    name: 'TeamBook',
    component: resolve => require(['./views/TeamBook/index.vue'], resolve)
  },
  {
    path: '/qinghai/AnnualCardProcess',
    name: 'AnnualCardProcess',
    component: resolve => require(['./views/AnnualCardProcess/index.vue'], resolve)
  }
  ]
}
]

const router = new Router({
  routes
})

// router.beforeEach((to, from, next) => {
//   const title = to.meta && to.meta.title
//   if (title) {
//     document.title = title
//   }
//   next()
// })

export {
  router
}
