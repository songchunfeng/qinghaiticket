<template>
  <div class="reservationInstru">
    <div class="primaryTitle">
      <div class="iconBox">
        <img src="../../assets/images/文章.png" alt="" />
      </div>
      <div class="titleText">预订须知</div>
    </div>
    <div class="details">
      <p>预订时间： 最早可提前15天网上预订，</p>
      预订时间： 最早可提前15天网上预订，
      <p>最迟可于当日18:00前预订当日游览的景区门票。 预订说明：</p>
      <p>
        一、景区开放时间：8:30-18:00。 二、全价票：1.4米以上、无证件购票者。
      </p>
      <p>
        三、半票价：全日制在校大学本科及以下学历学生，凭本人学生证购票（不包含成人院校学生）；现役军人（凭军官证或士兵证）；老人、残疾人（凭老人证、残疾人证）；本省域身份居民（凭身份证）。凡凭证件办理的优惠票限本人使用。
      </p>
      <p>四、免票：身高1.20米（含1.20米）以下的儿童（需成人陪同）。</p>
      <p>五、售出门票当日有效，一张门票只可入园一次。</p>
      <p>
        六、现金购买售出的门票超过30分钟概不退换，门票遗失，自行负责。网络预订的门票未打印出票随时可退。
      </p>
      <p>七、购票过程中，钱、票请当面点清，离柜概不负责。</p>
      <p>
        八、若您在购票时需要开具发票，请您现场告知售票员，如事后需补开发票，请在工作时间内到游客服务中心售票窗口进行办理。
      </p>
      <p>
        九、由于自助售（取）票机暂时不提供发票开具功能，若需要开具相关发票，请携带所购门票到游客服务中心售票窗口办理。
      </p>
      <p>
        十、为了您的游览安全，请不要听信工作人员以外的陌生人带入景区等诱导服务，谨防上当受骗。
      </p>
      <p>注意事项：</p>
      <p>①本单包含项目：</p>
      <p>
        中国青稞酒之源+彩虹部落土族园+纳顿庄园+西部土族民俗文化村（试营业）+小庄村通票1张，不含餐，不含演艺。
      </p>
      <p>②入园换票方式：</p>
      <p>
        请您凭供应商二次下发的短信，至互助土族故土园景区游客服务中心（互助县南大街与振兴大道十字路口往西100米）换取门票入园，需携带预订时的身份证；若忘带身份证，可凭借订单号至游客服务中心取票机输入订单号及密码取票，密码为下单购票所用身份证号码的出生年月日。
      </p>
      <p>③关于退票的相关事宜： Ⅰ 、可以退票的情况：</p>
      <p>
        本平台买的票，在景区没打印出票，游客可在平台订单管理里面退订，钱款原路退回。
      </p>
      <p>Ⅱ、不能退票的情况： 本平台买的票，在景区已经打印出票，禁止退票。</p>
      <p>客服电话：09728311120 09728318818</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reservationInstru'
}
</script>

<style lang="less" scoped>
.reservationInstru {
  width: 100%;
  margin-top: 24px;
  .primaryTitle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .iconBox {
      width: 28px;
      height: 28px;
      background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 16px;
        height: 16px;
      }
    }
    .titleText {
      font-size: 14px;
      font-family: MicrosoftYaHeiSemibold;
      color: #000000;
      margin-left: 8px;
    }
  }
  .details {
    margin-top: 15px;
    padding-left: 36px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: #333333;
    line-height: 28px;
  }
}
</style>
