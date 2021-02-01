<template>
  <div class="queryRenewal">
    <div class="title">大美青海年卡查询</div>
    <el-divider></el-divider>
    <div class="queryBox">
      <el-input
        v-model="name"
        placeholder="请输入姓名"
        class="input"
      ></el-input>
      <el-input v-model="idCard" placeholder="请输入身份证号"></el-input>
      <div class="queryBtn">查询</div>
    </div>
    <div class="TicketForm">
      <el-row class="titleRow">
        <el-col :span="5"><div class="titleName">卡号</div></el-col>
        <el-col :span="3"><div class="titleName">姓名</div></el-col>
        <el-col :span="6"><div class="titleName">身份证号</div></el-col>
        <el-col :span="4"><div class="titleName">起效日期</div></el-col>
        <el-col :span="4"><div class="titleName">失效日期</div></el-col>
        <el-col :span="2"><div class="titleName">操作</div></el-col>
      </el-row>
      <el-row class="ticketItem" type="flex" align="middle">
        <el-col :span="5"><div class="titleName">2020000000001</div></el-col>
        <el-col :span="3"><div class="titleName">张三</div></el-col>
        <el-col :span="6"
          ><div class="titleName">111111111111111111</div></el-col
        >
        <el-col :span="4"><div class="titleName">2020-10-15</div></el-col>
        <el-col :span="4"><div class="titleName">2021-10-15</div></el-col>
        <el-col :span="2"
          ><div class="titleName"><div class="buyBtn" @click="toQueryRenewalPay">续费</div></div></el-col
        >
      </el-row>
    </div>
    <div class="infoTitle">开卡须知</div>
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
    <div class="infoTitle">年卡权益</div>
    <div class="infoContent">
      <p>大美青海年卡开卡金额：300元/年；</p>
      <p>使用次数：30次；</p>
      <p>有效期：当天办理，次日生效，有效期为1周年（次年该日期的前一天）；</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'queryRenewal',
  data () {
    return {
      name: '',
      idCard: ''
    }
  },
  methods: {
    toQueryRenewalPay () {
      this.$router.push('/qinghai/AnnualCardProcess/queryRenewalPay')
    }
  }
}
</script>

<style lang='less' scoped>
.queryRenewal {
  width: 100%;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
  .title {
    font-size: 16px;
    font-family: MicrosoftYaHeiSemibold;
    color: #000000;
  }
  .infoTitle {
    font-size: 20px;
    font-family: MicrosoftYaHeiSemibold;
    color: #333333;
    margin-top: 40px;
  }
  .infoContent {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #333333;
    line-height: 28px;
    margin-top: 13px;
  }
  .queryBox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .el-input {
      width: 240px;
      margin-right: 10px;
    }
    .queryBtn {
      width: 80px;
      height: 34px;
      background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #ffffff;
      cursor: pointer;
    }
  }
  .TicketForm {
    margin-top: 20px;
    margin-bottom: 10px;
    .titleRow {
      width: 100%;
      height: 54px;
      line-height: 54px;
      padding-left: 35px;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.02);
      border-bottom: 1px solid#F0F0F0;
      .titleName {
        font-size: 14px;
        font-family: MicrosoftYaHeiSemibold;
        color: #333333;
      }
    }
    .ticketItem {
      width: 100%;
      height: 60px;
      line-height: 60px;
      padding-left: 35px;
      box-sizing: border-box;
      background: #ffffff;
      border-bottom: 1px solid#F0F0F0;
      .ticketInfo {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #333333;
      }
      .buyBtn {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #369aff;
        cursor: pointer;
      }
    }
  }
}
</style>
