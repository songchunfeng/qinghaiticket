<template>
  <div class="PurchaseDetails">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/qinghai/AllScenicSpots' }"
        >全部景区</el-breadcrumb-item
      >
      <el-breadcrumb-item>互助土族故土园旅游区</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="scenicAreaInfo">
      <div class="areaLf">
        <img src="../../assets/images/分类背景.jpeg" alt="" />
      </div>
      <div class="areaRt">
        <div class="areaName">互助土族故土园旅游区</div>
        <div class="areaLableBox">
          <div class="areaLable">5A级景区</div>
          <div class="areaLable">人文民俗</div>
        </div>
        <div class="lableBox">
          <div class="lable">景区地址</div>
          <div class="detail">青海省海东市互助土族自治县威远镇天佑德大道</div>
        </div>
        <div class="lableBox">
          <div class="lable">开放时间</div>
          <div class="detail">08:00—18:00</div>
        </div>
        <div class="lableBox">
          <div class="lable">服务承诺</div>
          <div class="detail">
            实名购票，分时游览，预约限流，快速入园。
            全价票持身份证原件、半价优惠票持二维码或身份证原件及学生证原件即可验票。
          </div>
        </div>
      </div>
    </div>
    <div class="ticketKindBox">
      <div class="ticketTitle">门票</div>
      <div>
        <div>游玩日期：</div>
        <el-date-picker v-model="date" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PurchaseDetails'
}
</script>

<style lang="less" scoped>
.PurchaseDetails {
  width: 1200px;
  background: #f4f4f4;
  padding-top: 27px;
  box-sizing: border-box;
  /deep/ .el-breadcrumb__inner.is-link {
    color: #999999 !important;
    font-weight: 400;
  }
  /deep/ .el-breadcrumb__inner {
    color: #333333;
  }
  .scenicAreaInfo {
    margin-top: 26px;
    width: 1200px;
    height: 320px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    box-sizing: border-box;
    .areaLf {
      width: 495px;
      height: 280px;
      margin-right: 24px;
      img {
        width: 495px;
        height: 280px;
      }
    }
    .areaRt {
      width: 100%;
      height: 100%;
      .areaName {
        font-size: 30px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #333333;
        letter-spacing: 1px;
      }
      .areaLableBox {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 19px;
        .areaLable {
          width: 74px;
          height: 26px;
          border-radius: 15px;
          border: 1px solid #cdcdcd;
          margin-right: 10px;
          font-size: 12px;
          font-family: MicrosoftYaHei;
          color: #999999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .lableBox {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 20px;
        .lable {
          font-size: 14px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: #333333;
          margin-right: 16px;
          width: 65px;
        }
        .detail {
          width: 100%;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #333333;
          text-align: left;
          display: flex;
        }
      }
    }
  }
  .ticketKindBox {
    width: 1200px;
    height: 380px;
    background: #ffffff;
    margin-top: 16px;
    padding: 24px 20px 24px 20px;
    box-sizing: border-box;
    .ticketTitle {
      width: 100%;
      height: 43px;
      border-bottom: 1px solid #dddddd;
      font-size: 16px;
      font-family: MicrosoftYaHeiSemibold;
      color: #000000;
    }
  }
}
</style>
