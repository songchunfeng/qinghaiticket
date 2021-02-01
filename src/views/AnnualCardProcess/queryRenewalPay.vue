<template>
  <div class="queryRenewalPay">
    <div class="infoBox">
      <div class="title">续费信息</div>
      <el-divider></el-divider>
      <el-form label-width="100px" class="form">
        <el-form-item label="开卡人姓名：">张三</el-form-item>
        <el-form-item label="身份证号：">111111111111111111</el-form-item>
        <el-form-item label="手机号码：">176××××1234</el-form-item>
        <el-form-item label="办理费用："
          >CNY <span class="price">300</span> /年</el-form-item
        >
      </el-form>
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
  name: 'queryRenewalPay',
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
.queryRenewalPay {
  .infoBox {
    width: 100%;
    padding: 20px;
    background-color: #fff;
    box-sizing: border-box;
    .title {
      font-size: 16px;
      font-family: MicrosoftYaHeiSemibold;
      color: #000000;
    }
    .form {
      padding-left: 20px;
      box-sizing: border-box;
      .el-form-item {
        margin-bottom: 20px;
      }
      .price {
        font-size: 20px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #369aff;
      }
    }
  }
  .tourGuideInfo {

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
}
</style>
