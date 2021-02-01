<template>
  <div class="home">
    <!-- 头部 -->
    <div class="bannerBox">
      <div class="bannerBgImg">
        <img src="../assets/images/banner.png" alt="" />
      </div>
      <div class="navBox">
        <div class="logo">
          <img src="../assets/images/大美青海.png" alt="" />
        </div>
        <div class="nav">
          <div
            class="navItem"
            v-for="(item, i) in navList"
            :key="i"
            @click="handleTab(item)"
          >
            {{ item }}
          </div>
        </div>
        <div class="navRight">
          <el-input suffix-icon="el-icon-search" v-model="searchText">
          </el-input>
          <div class="navRightItem">登录</div>
          <div class="navRightItem">注册</div>
        </div>
      </div>
    </div>
    <!-- /头部 -->

    <!-- 中部 -->
    <div class="bodyBox">
      <!-- 门票预定 -->
      <div class="TicketReservation">
        <!-- <div
          class="ticketSign"
          @mouseenter="changeImageSrc(1)"
          @mouseleave="LeaveImageSrc(1)"
        >
          <img :src="reserveImg" alt="" />
        </div> -->
        <div class="scenicAreaSwiper">
          <swiper></swiper>
        </div>
      </div>
      <!-- 推荐活动 -->
    </div>
    <!-- /中部 -->

    <!-- 底部 -->
    <div class="footer">
      <foot></foot>
    </div>
    <!-- /底部 -->
  </div>
</template>

<script>
import foot from '../components/footer'
import swiper from './swiper/index'
export default {
  name: 'home',
  components: {
    foot,
    swiper
  },
  data () {
    return {
      navList: [
        '景区资讯',
        '推荐景区',
        '全部景区',
        '活动日历',
        '旅游攻略',
        '团队预订',
        '年卡办理'
      ],
      searchText: '',
      activeA: '',
      activeB: '',
      activeC: '',
      activeD: '',
      activeE: '',
      reserveImg: require('../assets/images/门票预订.png'),
      recommendImg: require('../assets/images/推荐活动.png')
    }
  },
  methods: {
    changeImageSrc (key) {
      switch (key) {
        case 1:
          this.reserveImg = require('../assets/images/门票预订-hover.png')
          break
        case 2:
          this.recommendImg = require('../assets/images/推荐活动-hover.png')
          break
      }
    },
    LeaveImageSrc (key) {
      switch (key) {
        case 1:
          this.reserveImg = require('../assets/images/门票预订.png')
          break
        case 2:
          this.recommendImg = require('../assets/images/推荐活动.png')
          break
      }
    },
    mouseOver (id) {
      if (id === 'A') {
        this.activeA = 'background: none'
      }
      if (id === 'B') {
        this.activeB = 'background: none'
      }
      if (id === 'C') {
        this.activeC = 'background: none'
      }
      if (id === 'D') {
        this.activeD = 'background: none'
      }
      if (id === 'E') {
        this.activeE = 'background: none'
      }
    },
    mouseLeave: function () {
      this.activeA = ''
      this.activeB = ''
      this.activeC = ''
      this.activeD = ''
      this.activeE = ''
    },
    handleTab (item) {
      if (item !== this.currentTab) {
        window.sessionStorage.setItem('Tab', item)
        if (item === '景区资讯') {
          this.$router.push('/qinghai/scenicSpotInfo')
        }
        if (item === '推荐景区') {
          this.$router.push('/qinghai/RecommendedScenicSpots')
        }
        if (item === '全部景区') {
          this.$router.push('/qinghai/AllScenicSpots')
        }
        if (item === '活动日历') {
          this.$router.push('/qinghai/activityCalendar')
        }
        if (item === '旅游攻略') {
          this.$router.push('/qinghai/travelGuides')
        }
        if (item === '团队预订') {
          this.$router.push('/login/team')
        }
        if (item === '年卡办理') {
          this.$router.push('/qinghai/AnnualCardProcess/openCardInformation')
        }
      }
      this.currentTab = item
    }
  }
}
</script>

<style lang='less' scoped>
.home {
  width: 100%;
  background-color: #ffffff;
  .img:hover {
    transform: scale(1.4); //放大 倍数随意
  }
  .bannerBox {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    .bannerBgImg {
      width: 100vw;
      height: 100vh;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .navBox {
      position: absolute;
      top: 0;
      z-index: 0;
      z-index: 100;
      width: 100%;
      height: 60px;
      padding-left: 40px;
      padding-right: 40px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 110px;
        height: 28px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .nav {
        flex: 1;
        height: 100%;
        // border: 1px solid yellow;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 19%;
        padding-right: 6%;
        box-sizing: border-box;
        .navItem {
          width: 58px;
          margin-right: 5px;
          margin-left: 5px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #ffffff;
          cursor: pointer;
        }
      }
      .navRight {
        width: 250px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .el-input {
          border: 1px solid #ffffff;
          background-color: transparent;
          width: 115px;
        }
        /deep/ .el-input__inner {
          border: none !important;
          color: #ffffff;
          background-color: transparent !important;
          width: 115px;
          height: 26px;
        }
        /deep/ .el-input__icon {
          height: 26px !important;
          line-height: 26px !important;
        }
        .navRightItem {
          width: 29px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
  }
  .bodyBox {
    width: 100%;
    margin-top: 48px;
    .TicketReservation {
      width: 100%;
      // height: 100%;
      height: 586px;
      display: flex;
      align-items: center;
      justify-content: center;
      .ticketSign {
        width: 25%;
        img {
          width: 100%;
        }
      }
      .scenicAreaSwiper {
        width: 75%;
        height: 100%;
        overflow: auto;
      }
    }
  }
  .footer {
    margin-top: 65px;
    width: 100%;
  }
}
</style>
