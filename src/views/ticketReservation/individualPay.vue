<template>
  <div class="individualPay">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/qinghai/AllScenicSpots' }"
        >全部景区</el-breadcrumb-item
      >
      <el-breadcrumb-item :to="{ path: '/qinghai/teamScheduled' }"
        >互助土族故土园旅游区</el-breadcrumb-item
      >
      <el-breadcrumb-item>门票购买</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="stepNav">
      <el-steps :active="1" simple>
        <el-step title="确认订单信息">
          <i class="iconfont icon-buzhou1" slot="icon"></i>
        </el-step>
        <el-step title="付款">
          <i class="iconfont icon-buzhou" slot="icon"></i>
        </el-step>
        <el-step title="交易成功">
          <i class="iconfont icon-buzhou2" slot="icon"></i>
        </el-step>
      </el-steps>
    </div>

    <div class="scenicAreaInfo">
      <div class="areaLf">
        <img src="../../assets/images/分类背景.jpeg" alt="" />
      </div>
      <div class="areaRt">
        <div class="areaName">互助土族故土园旅游区</div>
        <div class="instructionsRow" style="margin-top: 29px">
          <div class="lable">游玩日期：</div>
          <div class="text">2020-10-14</div>
        </div>
        <div class="instructionsRow">
          <div class="lable">入园时段：</div>
          <div class="text">08:00-12:00</div>
        </div>
        <div class="instructionsRow">
          <div class="lable">门票数量：</div>
          <div class="text">2</div>
        </div>
        <div class="instructionsRow">
          <div class="lable">优惠（CNY）：</div>
          <div class="discount">460（八折）</div>
        </div>
        <div class="instructionsRow">
          <div class="lable">总价格（CNY）：</div>
          <div class="price">1300</div>
        </div>
      </div>
    </div>
    <div class="tourGuideInfo">
      <div class="ticketTitle">取票信息</div>
      <el-form
        :inline="true"
        label-width="100px"
        ref="collectTicketForm"
        class="collectTicketForm"
        label-position="right"
      >
        <el-form-item label="姓名：" prop="name" :required="true">
          <div>zhangsan</div>
        </el-form-item>
        <el-form-item label="证件类型：" prop="documentType" :required="true">
          <div>身份证</div>
        </el-form-item>
        <el-form-item label="证件号：" prop="idNum" :required="true">
          <div>111111111111111111</div>
        </el-form-item>
        <el-form-item label="联系方式：" prop="phone" :required="true">
          <div>176××××1234</div>
        </el-form-item>
      </el-form>
    </div>
    <div class="ticketInfo">
      <div class="ticketTitle">门票信息</div>
      <div class="ticketList">
        <div class="ticketItem">
          <div class="ticketTypeTitle">
            <div class="ticketTypeName">成人入园通道</div>
            <div class="ticketPriceBox">
              <div class="priceLable">价格：</div>
              <div class="priceNum">50</div>
            </div>
          </div>
          <div class="reservationInfoBox">
            <div class="primaryTitle">预订人信息</div>
            <el-form
              :inline="true"
              label-width="100px"
              class="reservationForm"
              label-position="right"
            >
              <el-form-item label="姓名：" prop="name" :required="true">
                <div>张三</div>
              </el-form-item>
              <el-form-item
                label="证件类型："
                prop="documentType"
                :required="true"
              >
                <div>身份证</div>
              </el-form-item>
              <el-form-item label="证件号：" prop="idNum" :required="true">
                <div>111111111111111111</div>
              </el-form-item>
              <el-form-item label="联系方式：" prop="phone" :required="true">
                <div>176××××1234</div>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="ticketItem">
          <div class="ticketTypeTitle">
            <div class="ticketTypeName">成人入园通道</div>
            <div class="ticketPriceBox">
              <div class="priceLable">价格：</div>
              <div class="priceNum">50</div>
            </div>
          </div>
          <div class="reservationInfoBox">
            <div class="primaryTitle">预订人信息</div>
            <el-form
              :inline="true"
              label-width="100px"
              class="reservationForm"
              label-position="right"
            >
              <el-form-item label="姓名：" prop="name" :required="true">
                <div>张三</div>
              </el-form-item>
              <el-form-item
                label="证件类型："
                prop="documentType"
                :required="true"
              >
                <div>身份证</div>
              </el-form-item>
              <el-form-item label="证件号：" prop="idNum" :required="true">
                <div>111111111111111111</div>
              </el-form-item>
              <el-form-item label="联系方式：" prop="phone" :required="true">
                <div>176××××1234</div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="tourGuideInfo">
      <div class="ticketTitle">积分抵扣</div>
      <div class="pointsDeductionBox">
        <el-select
          v-model="pointsDeduction"
          placeholder="请选择"
          class="pointsDeductionSelect"
        >
          <el-option label="不使用" value="no"></el-option>
          <el-option label="使用" value="yes"></el-option>
        </el-select>
        <div class="pointsDeductionText">积分进行抵扣，可抵扣</div>
        <el-input v-model="integral" readonly></el-input>
        <div class="pointsDeductionText">元</div>
      </div>
    </div>
    <div class="tourGuideInfo">
      <div class="ticketTitle">支付方式</div>
      <div class="choosePay">
        <div class="methodOfPayment" @click="toPay('weixin')">
          <div class="payIcon">
            <img src="../../assets/images/微信 (2).png" alt="" />
          </div>
          <div class="payName">微信支付</div>
        </div>
        <div class="methodOfPayment" @click="toPay('alipay')">
          <div class="payIcon">
            <img src="../../assets/images/支付宝.png" alt="" />
          </div>
          <div class="payName">支付宝支付</div>
        </div>
        <div class="methodOfPayment" @click="toPay('unionpay')">
          <div class="payIcon">
            <img src="../../assets/images/银联.png" alt="" />
          </div>
          <div class="payName">银联支付</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'individualPay',
  data () {
    return {
      pointsDeduction: '',
      integral: '0'
    }
  },
  methods: {
    toPay (params) {
      this.$router.push({
        path: '/qinghai/toPay',
        query: {
          params: params
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.individualPay {
  width: 1200px;
  background: #f4f4f4;
  padding-top: 27px;
  box-sizing: border-box;
  margin-bottom: 100px;
  /deep/ .el-breadcrumb__inner.is-link {
    color: #999999 !important;
    font-weight: 400;
  }
  /deep/ .el-breadcrumb__inner {
    color: #333333;
  }
  .stepNav {
    margin-top: 25px;
    /deep/ .is-finish {
      color: #5cb87a;
      border-color: #5cb87a;
    }
    .el-steps--simple {
      background-color: #fff;
    }
  }
  .scenicAreaInfo {
    margin-top: 25px;
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
      .instructionsRow {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 20px;
        .lable {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #999999;
        }
        .text {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #333333;
        }
        .discount {
          font-size: 16px;
          font-family: MicrosoftYaHeiSemibold;
          color: #333333;
        }
        .price {
          font-size: 24px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: #369aff;
        }
      }
    }
  }
  .tourGuideInfo {
    width: 1200px;
    background: #ffffff;
    margin-top: 16px;
    padding: 24px 20px 0px 20px;
    box-sizing: border-box;
    .ticketTitle {
      width: 100%;
      height: 43px;
      border-bottom: 1px solid #dddddd;
      font-size: 16px;
      font-family: MicrosoftYaHeiSemibold;
      color: #000000;
    }
    .pointsDeductionBox {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 20px;
      padding-bottom: 24px;
      box-sizing: border-box;
      .pointsDeductionSelect {
        /deep/ .el-input {
          width: 150px !important;
        }
      }
      /deep/ .el-input {
        width: 90px !important;
      }
      /deep/ .el-select {
        width: 150px !important;
      }
      .pointsDeductionText {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #333333;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    /deep/.el-form--inline .el-form-item {
      margin-right: 180px !important;
    }
    .collectTicketForm {
      width: 100%;
      margin-top: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .choosePay {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 20px;
      padding-bottom: 24px;
      box-sizing: border-box;
      .methodOfPayment {
        width: 150px;
        height: 86px;
        border-radius: 2px;
        border: 1px solid #dddddd;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-right: 20px;
        cursor: pointer;
        .payIcon {
          width: 26px;
          height: 26px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .payName {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #333333;
          margin-top: 5px;
        }
      }
    }
  }
  .ticketInfo {
    width: 1200px;
    background: #ffffff;
    margin-top: 16px;
    padding: 24px 20px 24px 20px;
    box-sizing: border-box;
    /deep/.el-form--inline .el-form-item {
      margin-right: 180px !important;
    }
    .ticketTitle {
      width: 100%;
      height: 43px;
      border-bottom: 1px solid #dddddd;
      font-size: 16px;
      font-family: MicrosoftYaHeiSemibold;
      color: #000000;
      margin-bottom: 5px;
    }
    .ticketList {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      .ticketItem {
        width: 100%;
        margin-top: 15px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        .ticketTypeTitle {
          width: 100%;
          padding: 18px 20px 18px 20px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.02);
          .ticketTypeName {
            font-size: 14px;
            font-family: MicrosoftYaHeiSemibold;
            color: #333333;
          }
          .ticketPriceBox {
            display: flex;
            align-items: center;
            justify-content: center;
            .priceLable {
              font-size: 14px;
              font-family: MicrosoftYaHeiSemibold;
              color: #333333;
              margin-right: 5px;
            }
            .priceNum {
              font-size: 24px;
              font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
              font-weight: bold;
              color: #369aff;
            }
          }
        }
        .reservationInfoBox {
          width: 100%;
          padding-left: 20px;
          padding-right: 20px;
          box-sizing: border-box;
          .primaryTitle {
            margin-top: 20px;
            font-size: 14px;
            font-family: MicrosoftYaHeiSemibold;
            color: #333333;
          }
          .reservationForm {
            margin-top: 20px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
          }
        }
      }
    }
  }
}
</style>
