import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'index',
  component: resolve => require(['./views/index.vue'], resolve)
},
{
  path: '/text',
  name: 'text',
  component: resolve => require(['./views/text.vue'], resolve)
},
{
  path: '/login/team',
  name: 'teamLogin',
  component: resolve => require(['./views/login/teamLogin.vue'], resolve)
},
{
  path: '/login/tourists',
  name: 'touristsLogin',
  component: resolve => require(['./views/login/touristsLogin.vue'], resolve)
},
{
  path: '/login/retrievePassword',
  name: 'retrievePassword',
  component: resolve => require(['./views/login/retrievePassword.vue'], resolve)
},
{
  path: '/registered/tourists',
  name: 'touristsRegistered',
  component: resolve => require(['./views/registered/touristsRegistered.vue'], resolve)
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
    path: '/qinghai/travelAgency',
    name: 'TravelAgencyReg',
    component: resolve => require(['./views/registered/TravelAgencyReg.vue'], resolve)
  },
  {
    path: '/qinghai/InformationDetails',
    name: 'InformationDetails',
    component: resolve => require(['./views/scenicSpotInfo/InformationDetails.vue'], resolve)
  },
  {
    path: '/qinghai/activityCalendar',
    name: 'activityCalendar',
    component: resolve => require(['./views/activityCalendar/index.vue'], resolve)
  },
  {
    path: '/qinghai/activityList',
    name: 'activityList',
    component: resolve => require(['./views/activityCalendar/activityList.vue'], resolve)
  },
  {
    path: '/qinghai/activityDetails',
    name: 'activityDetails',
    component: resolve => require(['./views/activityCalendar/activityDetails.vue'], resolve)
  },
  {
    path: '/qinghai/travelGuides',
    name: 'travelGuides',
    component: resolve => require(['./views/travelGuides/index.vue'], resolve)
  },
  {
    path: '/qinghai/detailedStrategy',
    name: 'detailedStrategy',
    component: resolve => require(['./views/travelGuides/detailedStrategy.vue'], resolve)
  },
  {
    path: '/qinghai/RecommendedScenicSpots',
    name: 'RecommendedScenicSpots',
    component: resolve => require(['./views/RecommendedScenicSpots/index.vue'], resolve)
  },
  {
    path: '/qinghai/PurchaseDetails',
    name: 'PurchaseDetails',
    component: resolve => require(['./views/PurchaseDetails/PurchaseDetails.vue'], resolve)
  },
  {
    path: '/qinghai/packageTicket',
    name: 'packageTicket',
    component: resolve => require(['./views/PurchaseDetails/packageTicket.vue'], resolve)
  },
  {
    path: '/qinghai/teamScheduled',
    name: 'teamScheduled',
    component: resolve => require(['./views/PurchaseDetails/teamScheduled.vue'], resolve)
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
    path: '/qinghai/buyPackages',
    name: 'buyPackages',
    component: resolve => require(['./views/ticketReservation/buyPackages.vue'], resolve)
  },
  {
    path: '/qinghai/packagesPay',
    name: 'packagesPay',
    component: resolve => require(['./views/ticketReservation/packagesPay.vue'], resolve)
  },
  {
    path: '/qinghai/individualPurchase',
    name: 'individualPurchase',
    component: resolve => require(['./views/ticketReservation/individualPurchase.vue'], resolve)
  },
  {
    path: '/qinghai/individualPay',
    name: 'individualPay',
    component: resolve => require(['./views/ticketReservation/individualPay.vue'], resolve)
  },
  {
    path: '/qinghai/teamReservation',
    name: 'teamReservation',
    component: resolve => require(['./views/ticketReservation/teamReservation.vue'], resolve)
  },
  {
    path: '/qinghai/teamPay',
    name: 'teamPay',
    component: resolve => require(['./views/ticketReservation/teamPay.vue'], resolve)
  },
  {
    path: '/qinghai/toPay',
    name: 'toPay',
    component: resolve => require(['./views/methodOfPayment/pay.vue'], resolve)
  },
  {
    path: '/qinghai/payToComplete',
    name: 'payToComplete',
    component: resolve => require(['./views/methodOfPayment/payToComplete.vue'], resolve)
  },
  {
    path: '/qinghai/openCardPay',
    name: 'openCardPay',
    component: resolve => require(['./views/AnnualCardProcess/openCardPay.vue'], resolve)
  },
  {
    path: '/qinghai/AnnualCardProcess',
    name: 'AnnualCardProcess',
    component: resolve => require(['./views/AnnualCardProcess/index.vue'], resolve),
    children: [{
      path: '/qinghai/AnnualCardProcess/openCardInformation',
      name: 'openCardInformation',
      component: resolve => require(['./views/AnnualCardProcess/openCardInformation.vue'], resolve)
    },
    {
      path: '/qinghai/AnnualCardProcess/queryRenewal',
      name: 'queryRenewal',
      component: resolve => require(['./views/AnnualCardProcess/queryRenewal.vue'], resolve)
    },
    {
      path: '/qinghai/AnnualCardProcess/queryRenewalPay',
      name: 'queryRenewalPay',
      component: resolve => require(['./views/AnnualCardProcess/queryRenewalPay.vue'], resolve)
    }
    ]
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
