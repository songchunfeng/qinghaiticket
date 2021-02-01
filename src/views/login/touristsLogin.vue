<template>
  <div class="touristsLogin">
    <div class="logo">
      <img src="../../assets/images/大美青海.png" alt="" />
    </div>
    <div class="loginForm">
      <div class="formTitle">散客登录</div>
      <el-tabs v-model="activeLogin" stretch class="tabs">
        <el-tab-pane label="密码登录" name="first">
          <password></password>
        </el-tab-pane>
        <el-tab-pane label="短信登录" name="second">
          <sms></sms>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import password from './passwordLogin'
import sms from './smsLogin'
export default {
  name: 'touristsLogin',
  components: {
    password,
    sms
  },
  data () {
    return {
      activeLogin: 'first'
    }
  }
}
</script>

<style lang="less" scoped>
.touristsLogin {
  width: 100%;
  height: 100vh;
  background: url("../../assets/images/登录背景.jpg") no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1440px) {
    .logo {
      width: 117px;
      height: 30px;
      position: absolute;
      top: 60px;
      left: 60px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .loginForm {
      width: 360px;
      height: 510px;
      background: #ffffff;
      box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      opacity: 0.86;
      padding: 30px 23px 0px 23px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      .formTitle {
        font-size: 27px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #333333;
        letter-spacing: 8px;
      }
      .tabs {
        width: 100%;
        margin-top: 45px;
        /deep/ .el-tabs__active-bar {
            width: 100px!important;
        }
        // /deep/ #tab-first {
        //     flex: 0!important;
        //     width: 120px!important;
        // }
      }
    }
  }
  @media screen and (min-width: 1441px) {
    .logo {
      width: 156px;
      height: 40px;
      position: absolute;
      top: 80px;
      left: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .loginForm {
      width: 480px;
      height: 680px;
      background: #ffffff;
      box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      opacity: 0.86;
      padding: 40px 30px 0px 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      /deep/ .el-form-item__content {
        display: flex;
        align-items: center;
      }
      .formTitle {
        font-size: 36px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #333333;
        letter-spacing: 10px;
      }
      .tabs {
        width: 100%;
        margin-top: 60px;

      }
    }
  }
}
</style>
