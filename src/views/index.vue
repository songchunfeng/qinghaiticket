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
          <div class="navItem" @click="toScenicSpotInfo">景区资讯</div>
          <div class="navItem" @click="toRecommendedScenicSpot">推荐景区</div>
          <div class="navItem" @click="toAllScenicSpot">全部景区</div>
          <div class="navItem">活动日历</div>
          <div class="navItem">旅游攻略</div>
          <div class="navItem" @click="toTeamBook">团队预订</div>
          <div class="navItem" @click="toAnnualCard">年卡办理</div>
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
      <!-- <div class="recommendBox">
        <div class="lfRecommend">
          <div class="lfRecommendTop">
            <div class="recommendImg">
              <img class="img" src="../assets/images/封面.jpeg" alt="" />
              <div class="shadeBox"></div>
            </div>
            <div
              class="recommendSign"
              @mouseenter="changeImageSrc(2)"
              @mouseleave="LeaveImageSrc(2)"
            >
              <img :src="recommendImg" alt="" />
            </div>
          </div>
          <div class="lfRecommendBottom">
            <img class="img" src="../assets/images/风景图.jpg" alt="" />
          </div>
        </div>
        <div class="rtRecommend">
          <div class="rtReLogo">
            <img src="../assets/images/景区资讯.png" alt="" />
          </div>
          <div class="remind">关于游客购票相关事项友情提醒</div>
        </div>
      </div> -->
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
    toScenicSpotInfo () {
      this.$router.push('/qinghai/scenicSpotInfo')
    },
    toRecommendedScenicSpot () {
      this.$router.push('/qinghai/RecommendedScenicSpots')
    },
    toAllScenicSpot () {
      this.$router.push('/qinghai/AllScenicSpots')
    },
    toTeamBook () {
      this.$router.push('/qinghai/TeamBook')
    },
    toAnnualCard () {
      this.$router.push('/qinghai/AllScenicSpots')
    }
  }
}
</script>

<style lang='less' scoped>
@baseWidth: 1920px;
@baseHeight: 1080px;

.pxfix(@w) {
  width: (@w / @baseWidth) * 100vw;
}

// @aa:.pxfix(732);
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
      img {
        width: 100%;
        height: 100vh;
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
      // border: 1px solid green;
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
    .recommendBox {
      width: 100%;
      // height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 35px;
      .lfRecommend {
        .lfRecommendTop {
          display: flex;
          align-items: center;
          justify-content: center;
          .recommendImg {
            .pxfix(583);
            overflow: hidden;
            position: relative;
            .shadeBox {
              height: 100%;
              width: 17.8%;
              background: #ffb455;
              opacity: 0.6;
              position: absolute;
              right: 0;
              top: 0;
              z-index: 100;
            }
            img {
              width: 100%;
              height: 460px;
              // height: width*(460/568);
              transition: all 0.8s;
            }
          }
          .recommendSign {
            .pxfix(568);
            img {
              width: 100%;
            }
          }
        }
        .lfRecommendBottom {
          width: 100%;
          overflow: hidden;
          img {
            width: 100%;
            transition: all 0.8s;
          }
        }
      }
      .rtRecommend {
        .pxfix(732);
        background: #369aff;
        padding-left: 9%;
        padding-right: 9%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        .rtReLogo {
          .pxfix(384);
          margin-top: 5.9%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .remind {
          margin-top: 3.5%;
          font-size: 28px;
          font-family: MicrosoftYaHeiSemibold;
          color: #ffffff;
        }
      }
    }
  }
  .footer {
    margin-top: 65px;
    width: 100%;
  }
}
</style>
