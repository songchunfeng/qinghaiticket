<template>
  <div class="teamPay">
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
          <div class="text">27</div>
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
      <div class="ticketTitle">导游信息</div>
      <div class="tourGuideFormBox">
        <el-form :inline="true">
          <el-form-item label="带团导游：" prop="name" :required="true">
            <div>zhangsan</div>
          </el-form-item>
          <el-form-item label="联系方式：" prop="phone" :required="true">
            <div>123</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="ticketList">
      <div class="ticketItem">
        <div class="ticketInfoTitle">
          <div class="ticketName">成人入园通道</div>
          <div class="numAndPrice">
            <div class="lable">数量：</div>
            <div class="value">25</div>
            <div class="lable" style="margin-left: 40px">价格：</div>
            <div class="value">100</div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="reservationInfo">
          <div class="secondaryTitle">预订人信息</div>
          <el-form :inline="true" class="touristInfoForm">
            <el-form-item label="姓名：" prop="name" :required="true">
              <div>李四一个</div>
            </el-form-item>
            <el-form-item
              label="证件类型："
              prop="documentType"
              :required="true"
            >
              <div>身份证</div>
            </el-form-item>
            <el-form-item label="证件号：" prop="documentNum" :required="true">
              <div>111111111111111111</div>
            </el-form-item>
          </el-form>
          <el-form :inline="true">
            <el-form-item label="联系方式：" prop="name" :required="true">
              <div>176××××1234</div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="ticketItem">
        <div class="ticketInfoTitle">
          <div class="ticketName">学生&儿童入园通票</div>
          <div class="numAndPrice">
            <div class="lable">数量：</div>
            <div class="value">25</div>
            <div class="lable" style="margin-left: 40px">价格：</div>
            <div class="value">100</div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="reservationInfo">
          <div class="secondaryTitle">预订人信息</div>
          <el-form :inline="true" class="touristInfoForm">
            <el-form-item label="姓名：" prop="name" :required="true">
              <div>李四一个</div>
            </el-form-item>
            <el-form-item
              label="证件类型："
              prop="documentType"
              :required="true"
            >
              <div>身份证</div>
            </el-form-item>
            <el-form-item label="证件号：" prop="documentNum" :required="true">
              <div>111111111111111111</div>
            </el-form-item>
          </el-form>
          <el-form :inline="true">
            <el-form-item label="联系方式：" prop="name" :required="true">
              <div>176××××1234</div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="tourGuideInfo">
      <div class="ticketTitle">团队预订须知</div>
      <div class="attentionCon">
        <div class="heading">
          <div class="headingIcon">
            <img src="../../assets/images/注意.png" alt="" />
          </div>
          <div class="headingText">旅行社入园确认：</div>
        </div>
        <div class="attentionText">
          <p>
            1、导游凭短信至景区人工检票处进行入园确认，按照“只减不增”的原则进行确认（注：只减不增为，团队的人数只可减少，并且减少后的人数仍需满足5人及5人以上，如人数增加，整单退订，重新进入网站进行预约，预约时间与网站预约时间要求相同）。
          </p>
          <p>
            2、工作人员对订单进行查询及确认，主要查看导游信息、团队人数以及预约时间。
          </p>
          <p>
            3、订单如需退改，仅可整单进行操作，不支持单张或个别门票的改签及退票。
          </p>
          <p>4、订单一旦确认，无论是否使用，都不可退单及退款。</p>
          <p>
            5、导游收到订单信息，凭订单短信内二维码进行入园，或凭预约时登记的二代身份证进行刷卡入园，如遇特殊情况可凭订单号在客服处换票入园。
          </p>
        </div>
        <div class="heading" style="margin-top: 30px">
          <div class="headingIcon">
            <img src="../../assets/images/注意.png" alt="" />
          </div>
          <div class="headingText">注意事项：</div>
        </div>
        <div class="attentionText">
          <p>
            1、导游凭短信至景区人工检票处进行入园确认，按照“只减不增”的原则进行确认（注：只减不增为，团队的人数只可减少，并且减少后的人数仍需满足5人及5人以上，如人数增加，整单退订，重新进入网站进行预约，预约时间与网站预约时间要求相同）。
          </p>
          <p>
            2、工作人员对订单进行查询及确认，主要查看导游信息、团队人数以及预约时间。
          </p>
          <p>
            3、订单如需退改，仅可整单进行操作，不支持单张或个别门票的改签及退票。
          </p>
          <p>4、订单一旦确认，无论是否使用，都不可退单及退款。</p>
          <p>
            5、导游收到订单信息，凭订单短信内二维码进行入园，或凭预约时登记的二代身份证进行刷卡入园，如遇特殊情况可凭订单号在客服处换票入园。
          </p>
        </div>
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
        <div class="methodOfPayment" @click="toPay('cooperation')">
          <div class="payIcon">
            <img src="../../assets/images/合作.png" alt="" />
          </div>
          <div class="payName">合作月结</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teamPay',
  data () {
    return {}
  },
  methods: {
    toPay (params) {
      if (params === 'cooperation') {
        this.$router.push({
          path: '/qinghai/payToComplete',
          query: {
            params: params
          }
        })
      } else {
        this.$router.push({
          path: '/qinghai/toPay',
          query: {
            params: params
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.teamPay {
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
    overflow: hidden;
    .ticketTitle {
      width: 100%;
      height: 43px;
      border-bottom: 1px solid #dddddd;
      font-size: 16px;
      font-family: MicrosoftYaHeiSemibold;
      color: #000000;
    }
    .attentionCon {
      padding-left: 19px;
      box-sizing: border-box;
      margin-top: 20px;
      margin-bottom: 24px;
      .heading {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .headingIcon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .headingText {
          font-size: 14px;
          font-family: MicrosoftYaHeiSemibold;
          color: #333333;
        }
      }
      .attentionText {
        margin-top: 10px;
        line-height: 28px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #333333;
      }
    }
    .choosePay {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 20px;
      margin-bottom: 24px;
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
    .tourGuideFormBox {
      margin-top: 20px;
      width: 100%;
      padding-left: 24px;
      box-sizing: border-box;
      .el-form--inline .el-form-item {
        margin-right: 280px !important;
      }
    }
  }
  .ticketList {
    .ticketItem {
      width: 1200px;
      background: #ffffff;
      margin-top: 16px;
      padding: 24px 20px 24px 20px;
      box-sizing: border-box;
      .ticketInfoTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .ticketName {
          font-size: 16px;
          font-family: MicrosoftYaHeiSemibold;
          color: #000000;
        }
        .numAndPrice {
          display: flex;
          align-items: center;
          justify-content: center;
          .lable {
            font-size: 14px;
            font-family: MicrosoftYaHeiSemibold;
            color: #333333;
          }
          .value {
            font-size: 20px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: #369aff;
          }
        }
      }
      .reservationInfo {
        padding-left: 19px;
        box-sizing: border-box;
        .secondaryTitle {
          font-size: 14px;
          font-family: MicrosoftYaHeiSemibold;
          color: #333333;
        }
        /deep/.el-form--inline .el-form-item {
          margin-right: 220px !important;
        }
        .touristInfoForm {
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
