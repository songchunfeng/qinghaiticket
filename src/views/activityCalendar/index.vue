<template>
  <div class="activityCalendar">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动日历</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="recommendBox">
      <div class="recommendCell">
        <div class="smallBox">
          <img src="../../assets/images/推荐活动.png" alt="" />
        </div>
        <div class="smallBox">
          <img src="../../assets/images/封面.jpeg" alt="" />
        </div>
        <div class="longBox">
          <img src="../../assets/images/风景图.jpg" alt="" />
        </div>
      </div>
      <div class="recommendCell">
        <div class="longBox">
          <img src="../../assets/images/风景图.jpg" alt="" />
        </div>
        <div class="smallBox">
          <img src="../../assets/images/推荐活动.png" alt="" />
        </div>
        <div class="smallBox">
          <img src="../../assets/images/封面.jpeg" alt="" />
        </div>
      </div>
    </div>
    <!-- 今日活动 -->
    <div class="todayActivity">
      <div class="activityTitle">
        <div class="centerRt"></div>
        <div class="centerTitle">
          <div class="titleText">
            <div class="textIcon">
              <img src="../../assets/images/标题左@2x.png" alt="" />
            </div>
            <div class="textCon">今日活动</div>
            <div class="textIcon">
              <img src="../../assets/images/标题右@2x.png" alt="" />
            </div>
          </div>
          <div class="date">2020.12.02</div>
        </div>
        <div class="centerLt" @click="goActivityList">
          <div class="more">更多</div>
          <div class="goIcon">
            <img src="../../assets/images/前往备份.png" alt="" />
          </div>
        </div>
      </div>

      <div class="activityList">
        <div class="activityItem">
          <div class="itemLeft">
            <img src="../../assets/images/分类背景.jpeg" alt="" />
          </div>
          <div class="itemRight">
            <div class="introduceTop">
              <div class="activityName">唐蕃古道-七省区精品文物联展</div>
              <div class="activityLableBox">
                <div class="activityLabel">正在进行</div>
                <div class="activityLabel">展览演出</div>
              </div>
            </div>
            <div class="introduceBot">
              <div class="activityDate">活动时间：2020.12.01-2020.01.31</div>
              <div class="activityAddress">
                活动地点：青海省博物馆 | 青海省西宁市西关大街58号
              </div>
            </div>
          </div>
        </div>
        <div class="activityItem">
          <div class="itemLeft">
            <img src="../../assets/images/分类背景.jpeg" alt="" />
          </div>
          <div class="itemRight">
            <div class="introduceTop">
              <div class="activityName">唐蕃古道-七省区精品文物联展</div>
              <div class="activityLableBox">
                <div class="activityLabel">正在进行</div>
                <div class="activityLabel">展览演出</div>
              </div>
            </div>
            <div class="introduceBot">
              <div class="activityDate">活动时间：2020.12.01-2020.01.31</div>
              <div class="activityAddress">
                活动地点：青海省博物馆 | 青海省西宁市西关大街58号
              </div>
            </div>
          </div>
        </div>
        <div class="activityItem">
          <div class="itemLeft">
            <img src="../../assets/images/分类背景.jpeg" alt="" />
          </div>
          <div class="itemRight">
            <div class="introduceTop">
              <div class="activityName">唐蕃古道-七省区精品文物联展</div>
              <div class="activityLableBox">
                <div class="activityLabel">正在进行</div>
                <div class="activityLabel">展览演出</div>
              </div>
            </div>
            <div class="introduceBot">
              <div class="activityDate">活动时间：2020.12.01-2020.01.31</div>
              <div class="activityAddress">
                活动地点：青海省博物馆 | 青海省西宁市西关大街58号
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 活动概览 -->
    <div class="activityOverview">
      <div class="activityTitle">
        <div class="centerRt"></div>
        <div class="centerTitle">
          <div class="titleText">
            <div class="textIcon">
              <img src="../../assets/images/标题左@2x.png" alt="" />
            </div>
            <div class="textCon">活动概览</div>
            <div class="textIcon">
              <img src="../../assets/images/标题右@2x.png" alt="" />
            </div>
          </div>
          <div class="date">2020.12.02</div>
        </div>
        <div class="centerLt" @click="goActivityList">
          <div class="more">更多</div>
          <div class="goIcon">
            <img src="../../assets/images/前往.png" alt="" />
          </div>
        </div>
      </div>
      <div class="overviewList">

        <div class="overviewItem" v-for="(item,index) in 12" :key="index">
          <div class="themeShade">
            <div class="themeName">自驾畅游</div>
            <div class="themeAmount">1场</div>
          </div>
          <div class="bgIMG">
            <img src="../../assets/images/封面.jpeg" alt="" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activityCalendar',
  methods: {
    goActivityList () {
      this.$router.push('/qinghai/activityList')
    }
  }
}
</script>

<style lang="less" scoped>
.activityCalendar {
  width: 1200px;
  background: #f4f4f4;
  padding-top: 27px;
  box-sizing: border-box;
  /deep/ .el-breadcrumb {
    background-color: #f4f4f4 !important;
  }
  /deep/ .el-breadcrumb__inner.is-link {
    color: #999999 !important;
    font-weight: 400;
  }
  /deep/ .el-breadcrumb__inner {
    color: #333333;
  }
  .recommendBox {
    width: 100%;
    height: 480px;
    margin-top: 25px;
    .recommendCell {
      width: 100%;
      height: 240px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .smallBox {
      width: 300px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .longBox {
      width: 600px;
      height: 240px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .todayActivity {
    width: 1200px;
    height: 935px;
    background: #369aff;
    margin-top: 30px;
    padding: 30px;
    box-sizing: border-box;
    .activityTitle {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .centerTitle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .titleText {
          display: flex;
          align-items: center;
          justify-content: center;
          .textCon {
            font-size: 24px;
            font-family: MicrosoftYaHeiSemibold;
            color: #ffffff;
            letter-spacing: 1px;
            margin-left: 7px;
            margin-right: 7px;
          }

          .textIcon {
            width: 27px;
            height: 25px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .date {
          margin-top: 5px;
          font-size: 14px;
          font-family: MicrosoftYaHeiSemibold;
          color: #ffffff;
          letter-spacing: 1px;
        }
      }
      .centerLt {
        display: flex;
        align-items: center;
        justify-content: center;
        .more {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #ffffff;
          letter-spacing: 1px;
          margin-right: 5px;
          cursor: pointer;
        }
        .goIcon {
          width: 17px;
          height: 17px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .activityList {
      width: 1140px;
      height: 775px;
      background: #ffffff;
      margin-top: 30px;
      padding-left: 30px;
      padding-right: 30px;
      box-sizing: border-box;
      .activityItem {
        width: 100%;
        height: 258px;
        border-bottom: 1px solid #dddddd;
        padding: 30px 5px 30px 5px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .itemLeft {
          width: 350px;
          height: 198px;
          img {
            width: 350px;
            height: 198px;
          }
        }
        .itemRight {
          margin-left: 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          .introduceTop {
            .activityName {
              font-size: 20px;
              font-family: MicrosoftYaHeiSemibold;
              color: #333333;
            }
            .activityLableBox {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin-top: 15px;
              .activityLabel {
                width: 58px;
                height: 22px;
                border-radius: 2px;
                border: 1px solid #ffb455;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-family: MicrosoftYaHei;
                color: #ffb455;
                margin-right: 10px;
              }
            }
          }
          .introduceBot {
            .activityDate {
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: #333333;
            }
            .activityAddress {
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: #333333;
              margin-top: 16px;
            }
          }
        }
      }
      .activityItem:last-child {
        border: none;
      }
    }
  }
  .activityOverview {
    width: 1200px;
    background: #ffffff;
    margin-top: 30px;
    padding: 35px 30px 30px 30px;
    box-sizing: border-box;

    margin-bottom: 95px;
    .activityTitle {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .centerTitle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .titleText {
          display: flex;
          align-items: center;
          justify-content: center;
          .textCon {
            font-size: 24px;
            font-family: MicrosoftYaHeiSemibold;
            color: #369aff;
            letter-spacing: 1px;
            margin-left: 7px;
            margin-right: 7px;
          }

          .textIcon {
            width: 27px;
            height: 25px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .date {
          margin-top: 5px;
          font-size: 14px;
          font-family: MicrosoftYaHeiSemibold;
          color: #369aff;
          letter-spacing: 1px;
        }
      }
      .centerLt {
        display: flex;
        align-items: center;
        justify-content: center;
        .more {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #333333;
          letter-spacing: 1px;
          margin-right: 5px;
        }
        .goIcon {
          width: 17px;
          height: 17px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .overviewList {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;
      .overviewItem {
        position: relative;
        margin-top: 15px;
        width: 273px;
        height: 273px;
        .themeShade {
          position: absolute;
          top: 0;
          width: 273px;
          height: 273px;
          background: #000000;
          opacity: 0.6;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
          .themeName {
            font-size: 20px;
            font-family: MicrosoftYaHeiSemibold;
            color: #ffffff;
            letter-spacing: 1px;
          }
          .themeAmount {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #ffffff;
            letter-spacing: 1px;
            margin-top: 28px;
          }
        }
        .bgIMG {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
