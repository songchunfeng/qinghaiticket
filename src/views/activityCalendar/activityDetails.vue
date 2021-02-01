<template>
  <div class="activityDetails">
    <div class="detailsCont">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/qinghai/activityList' }"
          >活动列表</el-breadcrumb-item
        >
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="introduceBox">
        <div class="introduceLt">
          <div class="titleBox">
            <div class="activityName">南丝绸之路青海段自驾活动</div>
            <div class="shareBox">
              <div class="toShare">分享到</div>
              <div class="iconImg">
                <img src="../../assets/images/微博咨询.png" alt="" />
              </div>
              <div class="iconImg">
                <img src="../../assets/images/微信咨询.png" alt="" />
              </div>
              <div class="iconImg">
                <img src="../../assets/images/qq.png" alt="" />
              </div>
            </div>
          </div>
          <div class="activityIntroduce">
            <div class="lable">活动时间</div>
            <div class="introduceCont">2020.11.01-2021.04.30</div>
          </div>
          <div class="activityIntroduce">
            <div class="lable">活动地点</div>
            <div class="introduceCont">
              青海湖景区 | 青海省海南藏族自治州共和县京拉线(109国道北侧)
            </div>
          </div>
          <div class="activityIntroduce">
            <div class="lable">联系方式</div>
            <div class="introduceCont">02887103555 王女士</div>
          </div>
          <div class="lable tab">相关景区</div>
          <div class="scenicSpot">
            <div class="scenicSpotImg">
              <img src="../../assets/images/分类背景.jpeg" alt="" />
            </div>
            <div class="scenicSpotName">二郎剑景区</div>
          </div>
          <div class="lable tab">活动详情</div>
          <div class="specificContent">
            活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容活动详情内容
          </div>
        </div>
        <div class="introduceRt">
          <div class="recommendedTitle">推荐活动</div>
          <div class="newsBriefBox">
            <div class="newsBriefItem">
              <div class="newsBriefItemLt">
                <img src="../../assets/images/分类背景.jpeg" alt="" />
              </div>
              <div class="newsBriefItemRt">唐蕃古道-七省区精品文物联展</div>
            </div>
            <div class="newsBriefItem">
              <div class="newsBriefItemLt">
                <img src="../../assets/images/分类背景.jpeg" alt="" />
              </div>
              <div class="newsBriefItemRt">互助彩虹部落第九届冰雪节</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activityDetails'
}
</script>

<style lang="less" scoped>
.activityDetails {
  width: 100%;
  background: #ffffff;
  padding-top: 27px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  .detailsCont {
    width: 1200px;
    margin-bottom: 120px;
    /deep/ .el-breadcrumb__inner.is-link {
      color: #999999 !important;
      font-weight: 400;
    }
    /deep/ .el-breadcrumb__inner {
      color: #333333;
    }
    .introduceBox {
      width: 100%;
      padding-left: 35px;
      padding-right: 35px;
      box-sizing: border-box;
      //   background-color: red;
      margin-top: 39px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .introduceLt {
        padding-right: 50px;
        box-sizing: border-box;
        width: 100%;
        .titleBox {
          width: 100%;
          padding-bottom: 20px;
          margin-bottom: 10px;

          box-sizing: border-box;
          border-bottom: 1px solid #dddddd;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .activityName {
            font-size: 30px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: #333333;
            letter-spacing: 1px;
          }
          .shareBox {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .toShare {
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: #999999;
            }
            .iconImg {
              width: 20px;
              height: 20px;
              margin-left: 10px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .activityIntroduce {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-top: 20px;
          box-sizing: border-box;
        }
        .lable {
          font-size: 14px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: #333333;
          margin-right: 15px;
        }
        .tab {
          margin-top: 35px;
        }
        .specificContent {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #333333;
          margin-top: 12px;
        }
        .scenicSpot {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          margin-top: 12px;
          .scenicSpotImg {
            width: 212px;
            height: 120px;
            margin-right: 20px;
            img {
              width: 212px;
              height: 120px;
            }
          }
          .scenicSpotName {
            font-size: 20px;
            font-family: MicrosoftYaHeiSemibold;
            color: #333333;
          }
        }
        .introduceCont {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #333333;
        }
      }
      .introduceRt {
        width: 300px;
        height: 277px;
        background: #ffffff;
        border: 1px solid #cccccc;
        .recommendedTitle {
          width: 100%;
          height: 61px;
          border-bottom: 1px solid #dddddd;
          padding-left: 20px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 16px;
          font-family: MicrosoftYaHeiSemibold;
          color: #000000;
        }
        .newsBriefBox {
          width: 100%;
          height: 215px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 25px 20px 25px 20px;
          box-sizing: border-box;
          .newsBriefItem {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .newsBriefItemLt {
              width: 110px;
              height: 62px;
              margin-right: 15px;
              img {
                width: 110px;
                height: 62px;
              }
            }
            .newsBriefItemRt {
              font-size: 16px;
              font-family: MicrosoftYaHei;
              color: #333333;
            }
          }
        }
      }
    }
  }
}
</style>
