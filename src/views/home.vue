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
    <!-- 内容 -->
    <div class="scenicSpotContent">
      <router-view />
    </div>
    <!-- 底部 -->
    <foot></foot>
  </div>
</template>

<script>
import foot from '../components/footer';
export default {
  name: 'home',
  components: {
    foot
  },
  data () {
    return {
      navList: ['景区资讯', '推荐景区', '全部景区', '团队预订', '年卡办理'],
      searchText: '',
      currentTab: ''
    }
  },
  methods: {
    handleTab (item) {
      if (item !== this.currentTab) {
        if (item == '景区资讯') {
          this.$router.push('/qinghai/scenicSpotInfo')
        }
        if (item == '推荐景区') {
          this.$router.push('/qinghai/RecommendedScenicSpots')
        }
        if (item == '全部景区') {
          this.$router.push('/qinghai/AllScenicSpots')
        }
        if (item == '团队预订') {
          this.$router.push('/qinghai/TeamBook')
        }
        if (item == '年卡办理') {
          this.$router.push('/qinghai/AllScenicSpots')
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
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .bannerBox {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    background: #243979;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .navBox {
      width: 1200px;
      height: 60px;
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
        padding-right: 9%;
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
        }
        .navItemActive {
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
        }
        .navItemActive::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 45%;
          width: 4px;
          height: 4px;
          background-color: #fff;
          border-radius: 50%;
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
          width: 120px;
        }
        /deep/ .el-input__inner {
          border: none !important;
          color: #ffffff;
          background-color: transparent !important;
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
    padding-top: 27px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
