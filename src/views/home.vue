<template>
  <div class="homeBox">
    <!-- 导航 -->
    <div class="bannerBox">
      <div class="navBox">
        <div class="logo">
          <img src="../assets/images/大美青海.png" alt="" />
        </div>
        <div class="nav">
          <div
            :class="{
              navItem: item != currentTab,
              navItemActive: item == currentTab,
            }"
            v-for="(item, i) in navList"
            :key="i"
            @click="handleTab(item)"
          >
            <div class="titleIcon">
              <img src="../assets/images/标题左.png" alt="" />
            </div>
            <div class="title">
              {{ item }}
            </div>

            <div class="titleIcon">
              <img src="../assets/images/标题右.png" alt="" />
            </div>
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
    <!-- 内容 -->
    <div class="scenicSpotContent">
      <router-view />
    </div>
    <!-- 底部 -->
    <foot></foot>
  </div>
</template>

<script>
import foot from '../components/footer'
export default {
  name: 'home',
  components: {
    foot
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
      currentTab: ''
    }
  },
  created () {
    this.getCurrentTab()
  },
  methods: {
    getCurrentTab () {
      this.currentTab = window.sessionStorage.getItem('Tab')
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

<style lang="less" scoped>
.homeBox {
  width: 100%;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .bannerBox {
    width: 100%;
    height: 60px;
    z-index: 100;
    position: fixed;
    top: 0;
    background: linear-gradient(90deg, #369aff 0%, #167de5 100%);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .navBox {
      width: 100%;
      height: 60px;
      padding-left: 43px;
      padding-right: 41px;
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
        padding-left: 17%;
        padding-right: 7%;
        box-sizing: border-box;
        .navItem {
          width: 58px;
          margin-right: 5px;
          margin-left: 5px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #ffffff;
          position: relative;
          box-sizing: border-box;
          padding-bottom: 5px;
          cursor: pointer;
          .titleIcon {
            visibility: hidden;
          }
        }
        .navItemActive {
          margin-right: 5px;
          margin-left: 5px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #ffffff;
          position: relative;
          box-sizing: border-box;
          padding-bottom: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          .title {
            margin-left: 5px;
            margin-right: 5px;
          }
          .titleIcon {
            width: 17px;
            height: 13px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .navRight {
        width: 250px;
        height: 100%;
        // border: 1px solid red;
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
  .scenicSpotContent {
    margin-top: 62px;
    width: 100%;
    // padding-top: 27px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
