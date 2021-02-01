<template>
  <div class="payToComplete">
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
      <el-steps :active="2" simple>
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
    <div class="successPay">
      <div class="successImg">
        <img src="../../assets/images/成功.png" alt="" />
      </div>
      <div class="successText" v-show="pay == 'weixin'">
        您已完成本次门票购买，购票短信将发送至取票人预留手机号
        请前往“个人中心”-“我的订单”中查看详细信息
      </div>
      <div class="successText" v-show="pay == 'cooperation'">
        您已完成本次门票购买，本次订单完成核验后，将会以月度付款方式进行支付。
      </div>
      <div class="btnBox">
        <div class="toPersonalCenBtn">前往“个人中心”</div>
        <div class="toHomeBtn">返回首页</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'payToComplete',
  data () {
    return {
      pay: 'cooperation'
    }
  },
  created () {
    this.getPay()
  },
  methods: {
    getPay () {
      this.pay = this.$route.query.params
    }
  }
}
</script>

<style lang='less' scoped>
.payToComplete {
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
  .successPay {
    width: 100%;
    background-color: #fff;
    margin-top: 15px;
    height: 618px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    .successImg {
      width: 100px;
      height: 100px;
      margin-top: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .successText {
      width: 470px;
      margin-top: 34px;
      text-align: center;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #333333;
      line-height: 26px;
    }
    .btnBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 60px;
      .toPersonalCenBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 276px;
        height: 46px;
        background: #369aff;
        border-radius: 2px;
        font-size: 15px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        margin-right: 30px;
        cursor: pointer;
      }
      .toHomeBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 276px;
        height: 46px;
        background: #dfefff;
        border-radius: 2px;
        font-size: 15px;
        font-family: MicrosoftYaHei;
        color: #369aff;
        cursor: pointer;
      }
    }
  }
}
</style>
