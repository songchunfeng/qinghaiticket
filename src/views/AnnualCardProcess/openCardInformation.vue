<template>
  <div class="openCardInformation">
    <div class="title">开卡须知</div>
    <div class="infoContent">
      <p>友情提醒：</p>
      <p>
        1、大美青海年卡一经续费，上期剩余次数自动失效。年卡业务一经办理，不可退换。
      </p>
      <p>
        2、青海各景区均实行网上实名制分时预约游览制度，持有大美青海年卡的居民，如需游览大美青海内涵盖景区，须提前在“大美青海官方预约平台”或“青海旅游”微信公众号等网络平台预约。预约成功后，凭预约凭证、电子年卡二维码及本人身份证件验证入园。
      </p>
      <p>3、如有疑问，您可拨打客服热xxxxxx咨询。</p>
      <p>1、青海省户籍居民凭居民身份证办理；</p>
      <p>
        2、身高1.4米以上，年龄16周岁以下的青海省居民凭户口簿或居民身份证办理；
      </p>
      <p>
        3、外地长期驻青海省居民凭本人身份证和公安局签发或续签的居住证办理（居住证签发需满半年并在有效期内）；
      </p>
      <p>
        持大美青海年卡可游览下列景区景点：青海湖二郎剑景区、仙女湾景区、塔尔寺景区……
        等景区。
      </p>
    </div>
    <div class="title" style="margin-top: 40px">年卡权益</div>
    <div class="infoContent">
      <p>大美青海年卡开卡金额：300元/年；</p>
      <p>使用次数：30次；</p>
      <p>有效期：当天办理，次日生效，有效期为1周年（次年该日期的前一天）；</p>
    </div>
    <el-checkbox v-model="checked" class="checkbox"
      ><div class="know">我已阅读，并知晓</div>
      <span>相关规则规定</span></el-checkbox
    >
    <div class="btnBox">
      <div class="submitBtn" @click="toOpenCard">申请年卡</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'openCardInformation',
  data () {
    return {
      checked: false
    }
  },
  methods: {
    toOpenCard () {
      // this.$router.push('')
    }
  }
}
</script>

<style lang='less' scoped>
.openCardInformation {
  width: 100%;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
  .title {
    font-size: 20px;
    font-family: MicrosoftYaHeiSemibold;
    color: #333333;
  }
  .infoContent {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #333333;
    line-height: 28px;
    margin-top: 13px;
  }
  .checkbox {
    margin-top: 40px;
    .know {
      display: inline-block;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #333333;
    }
  }
  .btnBox {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    .submitBtn {
      width: 120px;
      height: 46px;
      background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
      border-radius: 2px;
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
</style>
