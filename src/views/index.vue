<template>
  <div class="home">
    <!-- 头部 -->
    <div class="bannerBox">
      <div class="navBox">
        <div class="logo">
          <img src="../assets/images/大美青海.png" alt="" />
        </div>
        <div class="nav">
          <div class="navItem" @click="toScenicSpotInfo">景区资讯</div>
          <div class="navItem" @click="toRecommendedScenicSpot">推荐景区</div>
          <div class="navItem" @click="toAllScenicSpot">全部景区</div>
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
      <!-- 地图 -->
      <div class="mapBox">
        <div class="mapBg"></div>
        <div class="map"></div>
      </div>

      <div class="title">
        <div class="titleBox">
          <div class="titleImg">
            <img src="../assets/images/门票预订.png" alt="" />
          </div>
          <div class="titleRight">
            <div class="moreText">更多</div>
            <div class="moreImg">
              <img src="../assets/images/前往.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <!-- 门票预定 -->
      <div class="bookModule">
        <div class="bookBgR"></div>
        <div class="bookBgL"></div>
        <div class="scenicSpot">
          <div class="scenicSpotItem">
            <div class="scenicSpotImg">
              <img src="../assets/images/封面.jpeg" alt="" />
            </div>
            <div class="scenicSpotIntroduction">
              <div class="IntroductionLeft">
                <div class="scenicSpotName">祁连风光旅游区</div>
                <div class="scenicSpotPrice">
                  <div class="symbol">CYN：¥</div>
                  <div class="Price">50</div>
                </div>
              </div>
              <div class="IntroductionRight">购票</div>
            </div>
          </div>
          <div class="scenicSpotItem">
            <div class="scenicSpotImg">
              <img src="../assets/images/封面.jpeg" alt="" />
            </div>
            <div class="scenicSpotIntroduction">
              <div class="IntroductionLeft">
                <div class="scenicSpotName">祁连风光旅游区</div>
                <div class="scenicSpotPrice">
                  <div class="symbol">CYN：¥</div>
                  <div class="Price">50</div>
                </div>
              </div>
              <div class="IntroductionRight">购票</div>
            </div>
          </div>
          <div class="scenicSpotItem">
            <div class="scenicSpotImg">
              <img src="../assets/images/封面.jpeg" alt="" />
            </div>
            <div class="scenicSpotIntroduction">
              <div class="IntroductionLeft">
                <div class="scenicSpotName">祁连风光旅游区</div>
                <div class="scenicSpotPrice">
                  <div class="symbol">CYN：¥</div>
                  <div class="Price">50</div>
                </div>
              </div>
              <div class="IntroductionRight">购票</div>
            </div>
          </div>
          <div class="scenicSpotItem">
            <div class="scenicSpotImg">
              <img src="../assets/images/封面.jpeg" alt="" />
            </div>
            <div class="scenicSpotIntroduction">
              <div class="IntroductionLeft">
                <div class="scenicSpotName">祁连风光旅游区</div>
                <div class="scenicSpotPrice">
                  <div class="symbol">CYN：¥</div>
                  <div class="Price">50</div>
                </div>
              </div>
              <div class="IntroductionRight">购票</div>
            </div>
          </div>
          <div class="scenicSpotItem">
            <div class="scenicSpotImg">
              <img src="../assets/images/封面.jpeg" alt="" />
            </div>
            <div class="scenicSpotIntroduction">
              <div class="IntroductionLeft">
                <div class="scenicSpotName">祁连风光旅游区</div>
                <div class="scenicSpotPrice">
                  <div class="symbol">CYN：¥</div>
                  <div class="Price">50</div>
                </div>
              </div>
              <div class="IntroductionRight">购票</div>
            </div>
          </div>
          <div class="scenicSpotItem">
            <div class="scenicSpotImg">
              <img src="../assets/images/封面.jpeg" alt="" />
            </div>
            <div class="scenicSpotIntroduction">
              <div class="IntroductionLeft">
                <div class="scenicSpotName">祁连风光旅游区</div>
                <div class="scenicSpotPrice">
                  <div class="symbol">CYN：¥</div>
                  <div class="Price">50</div>
                </div>
              </div>
              <div class="IntroductionRight">购票</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 景区资讯 -->
      <div class="title">
        <div class="titleBox">
          <div class="titleImg">
            <img src="../assets/images/景区资讯.png" alt="" />
          </div>
          <div class="titleRight">
            <div class="moreText">更多</div>
            <div class="moreImg">
              <img src="../assets/images/前往.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="scenicSpotIfo">
        <div class="cenicSpotContent">
          <div class="cenicSpotContentL">
            <div class="infoTitle">关于游客购票相关事项友情提醒</div>
            <div class="scenicSpotOutline">
              <div class="verticalBar"></div>
              <div class="infoCon">
                关于游客购票相关事项友情提醒的正文内容在这里展示，展示简介内容，在这里展示相关内容。
                关于游客购票相关事项友情提醒的正文内容在这里…
              </div>
            </div>
            <div class="infoImg">
              <img src="../assets/images/封面.jpeg" alt="" />
            </div>
            <div class="releaseDate">2020-10-28</div>
          </div>
          <div class="cenicSpotContentR">
            <div class="cenicSpotContItem">
              <div class="cenicSpotContItemR">
                <div class="cenicSpotContItemTitle">
                  暂停青海省博物馆延迟闭关公告
                </div>
                <div class="cenicSpotContItemCon">
                  关于游客购票相关事项友情提醒的正文内容在这里展示，展示简介内容，在这里展示相关内容。
                  关于游客购票相关事项友情提醒的正文内容在这里展…
                </div>
              </div>
            </div>
            <div class="cenicSpotContentRLine"></div>
            <div class="cenicSpotContItem">
              <div class="cenicSpotContItemR">
                <div class="cenicSpotContItemTitle">
                  暂停青海省博物馆延迟闭关公告
                </div>
                <div class="cenicSpotContItemCon">
                  关于游客购票相关事项友情提醒的正文内容在这里展示，展示简介内容，在这里展示相关内容。
                  关于游客购票相关事项友情提醒的正文内容在这里展…
                </div>
              </div>
            </div>
            <div class="cenicSpotContentRLine"></div>
            <div class="cenicSpotContItem">
              <div class="cenicSpotContItemR">
                <div class="cenicSpotContItemTitle">
                  暂停青海省博物馆延迟闭关公告
                </div>
                <div class="cenicSpotContItemCon">
                  关于游客购票相关事项友情提醒的正文内容在这里展示，展示简介内容，在这里展示相关内容。
                  关于游客购票相关事项友情提醒的正文内容在这里展…
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 景区分类 -->
      <div class="title">
        <div class="titleBox">
          <div class="titleImg">
            <img src="../assets/images/景区分类.png" alt="" />
          </div>
          <div class="titleRight">
            <div class="moreText">更多</div>
            <div class="moreImg">
              <img src="../assets/images/前往.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="scenicSpotClassification">
        <div class="classificationBg"></div>
        <div class="classificationCon">
          <div
            class="classificationItem"
            :style="activeA"
            @mouseover="mouseOver('A')"
            @mouseleave="mouseLeave"
          >
            <div class="iconBox">
              <div class="iconImg">
                <img src="../assets/images/A级景区.png" alt="" />
              </div>
              <div class="classificationName">A级景区</div>
            </div>
          </div>
          <div
            class="classificationItem"
            :style="activeB"
            @mouseover="mouseOver('B')"
            @mouseleave="mouseLeave"
          >
            <div class="iconBox">
              <div class="iconImg">
                <img src="../assets/images/人文民俗.png" alt="" />
              </div>
              <div class="classificationName">人文民俗</div>
            </div>
          </div>
          <div
            class="classificationItem"
            :style="activeC"
            @mouseover="mouseOver('C')"
            @mouseleave="mouseLeave"
          >
            <div class="iconBox">
              <div class="iconImg">
                <img src="../assets/images/自然风光.png" alt="" />
              </div>
              <div class="classificationName">自然风光</div>
            </div>
          </div>
          <div
            class="classificationItem"
            :style="activeD"
            @mouseover="mouseOver('D')"
            @mouseleave="mouseLeave"
          >
            <div class="iconBox">
              <div class="iconImg">
                <img src="../assets/images/红色旅游.png" alt="" />
              </div>
              <div class="classificationName">红色旅游</div>
            </div>
          </div>
          <div
            class="classificationItem"
            :style="activeE"
            @mouseover="mouseOver('E')"
            @mouseleave="mouseLeave"
          >
            <div class="iconBox">
              <div class="iconImg">
                <img src="../assets/images/其他.png" alt="" />
              </div>
              <div class="classificationName">其他景区</div>
            </div>
          </div>
        </div>
      </div>
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
export default {
  name: 'home',
  components: {
    foot
  },
  data () {
    return {
      searchText: '',
      activeA: '',
      activeB: '',
      activeC: '',
      activeD: '',
      activeE: ''
    }
  },
  methods: {
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
.home {
  width: 100%;
  background-color: #ffffff;
  // box-sizing: border-box;
  .bannerBox {
    width: 100%;
    height: 760px;
    background: url("../assets/images/banner.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .navBox {
      width: 80%;
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
          cursor: pointer;
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
  .bodyBox {
    width: 100%;
    margin-top: 50px;
    .mapBox {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .mapBg {
        width: 844px;
        height: 415px;
        background: #f4f4f4;
        position: absolute;
        left: 0;
        top: 0;
        // z-index: -1;
      }
      .map {
        z-index: 100;
        margin-top: 70px;
        width: 1200px;
        height: 738px;
        background: #ffffff;
        border: 1px solid #cccccc;
      }
    }
    .title {
      margin-top: 120px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      .titleBox {
        width: 1200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .titleImg {
          width: 203px;
          height: 97px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .titleRight {
          display: flex;
          align-items: center;
          justify-content: center;
          .moreText {
            width: 40px;
            height: 27px;
            font-size: 20px;
            font-family: MicrosoftYaHei;
            color: #333333;
            line-height: 27px;
            margin-right: 7px;
          }
          .moreImg {
            width: 16px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .bookModule {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 60px;
      .bookBgR {
        position: absolute;
        right: 0;
        top: 72px;
        width: 1165px;
        height: 230px;
        background: #f4f4f4;
      }
      .bookBgL {
        position: absolute;
        left: 0;
        top: 590px;
        width: 1165px;
        height: 230px;
        background: #f4f4f4;
      }
      .scenicSpot {
        z-index: 100;
        width: 1200px;
        // height: 760px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        // border: 1px solid red;
        .scenicSpotItem {
          width: 380px;
          margin-bottom: 45px;
          .scenicSpotImg {
            width: 380px;
            height: 380px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .scenicSpotIntroduction {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 20px;
            box-sizing: border-box;
            .IntroductionLeft {
              .scenicSpotName {
                font-size: 16px;
                font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
                font-weight: bold;
                color: #333333;
              }
              .scenicSpotPrice {
                display: flex;
                align-items: center;
                margin-top: 8px;
                .symbol {
                  font-size: 14px;
                  font-family: MicrosoftYaHei;
                  color: #999999;
                  margin-right: 5px;
                }
                .Price {
                  font-size: 20px;
                  font-family: MicrosoftYaHei;
                  color: #333333;
                }
              }
            }
            .IntroductionRight {
              width: 80px;
              height: 34px;
              border: 1px solid #333333;
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: #333333;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
    }
    .scenicSpotIfo {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .cenicSpotContent {
        margin-top: 60px;
        width: 1200px;
        // border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .cenicSpotContentL {
          width: 500px;
          height: 476px;
          background: #f5f5f5;
          box-sizing: border-box;
          padding: 50px 75px 49px 75px;
          .infoTitle {
            font-size: 18px;
            font-family: MicrosoftYaHeiSemibold;
            color: #333333;
          }
          .scenicSpotOutline {
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 19px;
            .verticalBar {
              width: 6px;
              height: 68px;
              background: #d8d8d8;
              margin-right: 14px;
            }
            .infoCon {
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: #666666;
            }
          }
          .infoImg {
            width: 350px;
            height: 198px;
            margin-top: 20px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .releaseDate {
            margin-top: 20px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 19px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #999999;
          }
        }
        .cenicSpotContentR {
          width: 609px;
          height: 476px;
          padding-top: 15px;
          box-sizing: border-box;
          border-top: 2px solid #dddddd;
          border-bottom: 2px solid #dddddd;
          .cenicSpotContItem {
            width: 100%;
            padding: 34px 54px 34px 55px;
            box-sizing: border-box;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            .cenicSpotRound {
              margin-right: 20px;
              width: 6px;
              height: 6px;
              background: #d8d8d8;
              border-radius: 50%;
            }
            .cenicSpotContItemR::before {
              content: "";
              position: absolute;
              left: 0;
              top: 4px;
              width: 6px;
              height: 6px;
              background-color: red;
              border-radius: 50%;
            }
            .cenicSpotContItemR {
              padding-left: 26px;
              box-sizing: border-box;
              position: relative;
              width: 100%;
              height: 100%;
              .cenicSpotContItemTitle {
                font-size: 16px;
                font-family: MicrosoftYaHei;
                color: #333333;
              }
              .cenicSpotContItemCon {
                margin-top: 14px;
                font-size: 14px;
                font-family: MicrosoftYaHei;
                color: #666666;
              }
            }
          }
          .cenicSpotContentRLine {
            width: 100%;
            height: 2px;
            background-color: #dddddd;
          }
        }
      }
    }
    .scenicSpotClassification {
      width: 100%;
      height: 690px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 58px;
      .classificationBg {
        width: 1090px;
        height: 497px;
        background: #f4f4f4;
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .classificationCon {
        width: 1200px;
        height: 634px;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        // border: 1px solid red;
        background: url("../assets/images/分类背景.jpeg") no-repeat;
        background-size: 100% 100%;
        .classificationItem {
          width: 240px;
          height: 634px;
          background: #000000;
          opacity: 0.6;
          border: 1px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          .iconBox {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            .iconImg {
              width: 80px;
              height: 80px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .classificationName {
              font-size: 16px;
              font-family: MicrosoftYaHei;
              color: #ffffff;
              margin-top: 20px;
            }
          }
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
