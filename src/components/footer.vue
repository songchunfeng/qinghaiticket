<template>
  <div class="footerBox">
    <div class="footerContent">
      <div class="footerLt">
        <div class="logoImg">
          <img src="../assets/images/大美青海.png" alt="" />
        </div>
        <div class="Copyright">Copyright © 2006-2020</div>
      </div>
      <div class="footerCenter">
        <div class="contact">联系我们</div>
        <div class="webSite">文旅厅官网</div>
        <div class="custService">+86 400-888-6888</div>
        <div class="accountBox">
          <div class="weiboBox">
            <div class="weiboLogo">
              <img src="../assets/images/微博.png" alt="" />
            </div>
            <div class="accountName">大美青海</div>
          </div>
          <div class="WeChatBox">
            <div class="WeChatLogo">
              <img src="../assets/images/微信.png" alt="" />
            </div>
            <div class="accountName">大美青海</div>
          </div>
        </div>
      </div>
      <div class="footerRt">
        <div class="scanReservation">扫一扫立即预订</div>
        <div class="QR"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.footerBox {
  width: 100%;
  height: 230px;
  background: #3d4348;
  display: flex;
  align-items: center;
  justify-content: center;
  .footerContent {
    width: 1200px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 40px;
    box-sizing: border-box;
    .footerLt {
      .logoImg {
        width: 110px;
        height: 28px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .Copyright {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        margin-top: 10px;
      }
    }
    .footerCenter {
      .contact {
        font-size: 20px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
      }
      .webSite {
        margin-top: 13px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
      }
      .custService {
        margin-top: 13px;
        font-size: 24px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
      }
      .accountBox {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 13px;
        .accountName {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #ffffff;
        }
        .weiboBox {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-right: 54px;
          .weiboLogo {
            width: 17px;
            height: 17px;
            margin-right: 5px;
            img {
              width: 100%;
            }
          }
        }
        .WeChatBox {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .WeChatLogo {
            width: 17px;
            height: 17px;
            margin-right: 5px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    .footerRt {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      .scanReservation {
        font-size: 20px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
      }
      .QR {
        margin-top: 20px;
        width: 98px;
        height: 98px;
        background: #d8d8d8;
        border: 1px solid #979797;
      }
    }
  }
}
</style>
