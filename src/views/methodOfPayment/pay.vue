<template>
  <div class="toPay">
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
    <div class="payBox">
      <div class="methodPay" v-if="problem">
        <div class="payTitle" v-show="pay == 'weixin'">微信支付：</div>
        <div class="payTitle" v-show="pay == 'alipay'">支付宝支付：</div>
        <div class="payTitle" v-show="pay == 'unionpay'">银联支付：</div>
        <div class="qrAndPrompt">
          <div class="QRBox">
            <div class="price">CNY 100 元</div>
            <div class="QRImg">
              <img
                src="../../assets/images/二维码.png"
                alt=""
                v-show="pay == 'weixin'"
              />
              <img
                src="../../assets/images/二维码.png"
                alt=""
                v-show="pay == 'alipay'"
              />
              <img
                src="../../assets/images/二维码.png"
                alt=""
                v-show="pay == 'unionpay'"
              />
            </div>
            <div class="clues">
              请使用支付宝“扫一扫”扫描上方二维码并完成支付
            </div>
            <div class="payComBtn" @click="toComplete">支付完成</div>
          </div>
          <div class="promptBox">
            <div class="promptImg">
              <img
                src="../../assets/images/扫一扫.png"
                alt=""
                v-show="pay == 'weixin'"
              />
              <img
                src="../../assets/images/扫一扫-支付宝.png"
                alt=""
                v-show="pay == 'alipay'"
              />
              <img
                src="../../assets/images/扫一扫-银联.png"
                alt=""
                v-show="pay == 'unionpay'"
              />
            </div>
            <div class="quesBtn" @click="toHelp">支付遇到问题？</div>
          </div>
        </div>
      </div>
      <div class="errorPay" v-else>
        <div class="errorTitle">支付遇到问题时怎么办？</div>
        <div class="helpContent">
          <p>
            1、付款时提示：抱歉，网络异常，暂时无法查询到付款结果；
            产生的原因可能是支付超时、超过支付限额、系统暂时异常等。建议您检查微信、支付宝、银行卡状态是否正常，您可以重新尝试支付。
          </p>
          <p>
            2、有在新窗口打开支付页面或打开支付页面后报错；
            产生的原因可能是系统暂时异常等，请您重新支付。
          </p>
          <p>
            3、银行扣款已经成功，为什么交易还显示未完成；
            产生的原因可能是由于网络繁忙，系统暂时还未收到微信、支付宝、银行卡返回的支付结果。请您耐心等待。
          </p>
          <p>
            4、银行扣款已经成功，为什么交易关闭了？
            产生的原因可能是由于支付时间较长导致超过商品订单限制支付时间、或商品售完而关闭订单，此时请联系客服进行退款。
          </p>
          <p>
            5、点击去付款，系统提示交易关闭；
            产生的原因可能是列表页未刷新，但其实已经超过商品订单限制支付时间、或商品售完而关闭订单；
            订单支付时间限制为30分钟，如果超过30分钟，订单将无法支付。请您重新下单；
          </p>
          <p>
            6、如仍有其他问题，请联系客服xxxx-xxxxxxxx，或将您遇到的问题发送邮件至xxxxxx@xxx.com。
          </p>
        </div>
        <div class="viewOrder">前往“个人中心”查看订单</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toPay',
  data () {
    return {
      problem: true,
      pay: 'weixin'
    }
  },
  methods: {
    toHelp () {
      this.problem = false
    },
    getPay () {
      this.pay = this.$route.query.params
    },
    toComplete () {
      this.$router.push({
        path: '/qinghai/payToComplete',
        query: {
          params: this.pay
        }
      })
    }
  },
  created () {
    this.getPay()
  }
}
</script>

<style lang="less" scoped>
.toPay {
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
  .payBox {
    width: 100%;
    background-color: #fff;
    margin-top: 15px;
    height: 618px;
    .methodPay {
      width: 100%;
      background-color: #fff;
      padding-top: 24px;
      padding-left: 40px;
      padding-bottom: 70px;
      box-sizing: border-box;
      .payTitle {
        font-size: 30px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #333333;
        letter-spacing: 1px;
      }
      .qrAndPrompt {
        width: 100%;
        height: 458px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-top: 25px;
        .QRBox {
          width: 276px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          margin-right: 30px;
          .price {
            font-size: 28px;
            font-family: MicrosoftYaHeiSemibold;
            color: #369aff;
          }
          .QRImg {
            width: 240px;
            height: 240px;
            margin-top: 15px;
            margin-bottom: ;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .clues {
            width: 220px;
            margin-top: 18px;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            font-size: 16px;
            font-family: MicrosoftYaHei;
            color: #333333;
          }
          .payComBtn {
            width: 276px;
            height: 46px;
            margin-top: 53px;
            background: #369aff;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            font-family: MicrosoftYaHei;
            color: #ffffff;
            cursor: pointer;
          }
        }
        .promptBox {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          .promptImg {
            width: 279px;
            height: 372px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .quesBtn {
            width: 276px;
            height: 46px;
            background: #dfefff;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            font-family: MicrosoftYaHei;
            color: #369aff;
            margin-top: 40px;
            cursor: pointer;
          }
        }
      }
    }
    .errorPay {
      width: 100%;
      padding: 30px 30px 0px 30px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      .errorTitle {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #369aff;
      }
      .helpContent {
        margin-top: 20px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #333333;

        line-height: 26px;
      }
      .viewOrder {
        width: 276px;
        height: 46px;
        background: #369aff;
        border-radius: 2px;
        margin-top: 45px;
        font-size: 15px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
}
</style>
