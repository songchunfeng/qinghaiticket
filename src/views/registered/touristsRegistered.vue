<template>
  <div class="touristsRegistered">
    <div class="logo">
      <img src="../../assets/images/大美青海.png" alt="" />
    </div>
    <div class="loginForm">
      <div class="formTitle">散客注册</div>
      <el-form class="form" ref="form" :model="form" label-width="60px">
        <el-form-item label="手机号">
          <el-input
            v-model="form.account"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-col :span="14">
            <el-input
              v-model="form.verificationCode"
              placeholder="请输入验证码"
            ></el-input>
          </el-col>
          <el-col class="line" :span="10">
            <div class="verificationCode">获取验证码</div>
          </el-col>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            v-model="form.confirmPassword"
            placeholder="请再次确认密码"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="registeredBtn">注册</div>
      <div class="readBox">
        <el-checkbox v-model="readed"
          ><span class="readedInstructions">我已阅读并同意</span
          ><span class="instructionsName"
            >《大美青海景区门票售票平台注册协议》</span
          ></el-checkbox
        >
      </div>
      <div class="goLogin">前往登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'touristsRegistered',
  components: {},
  data () {
    return {
      readed: true,
      form: {
        account: '',
        password: '',
        confirmPassword: '',
        verificationCode: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.touristsRegistered {
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
      /deep/ .el-form-item__label {
        font-size: 11px !important;
      }
      /deep/ .el-input {
        font-size: 11px !important;
      }
      /deep/ .el-form-item__content {
        font-size: 11px !important;
      }
      .form {
        width: 100%;
        margin-top: 45px;

        .verificationCode {
          width: 93px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #dddddd;
          margin-left: 8px;
        }
      }
    }
    .registeredBtn {
      width: 315px;
      height: 35px;
      background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-family: MicrosoftYaHei;
      color: #ffffff;
      cursor: pointer;
    }
    .readBox {
      width: 100%;
      margin-top: 15px;
      .readedInstructions {
        color: #333333;
        font-size: 11px;
      }
      .instructionsName {
        font-size: 11px;
      }
    }
    .goLogin {
      width: 100%;
      margin-top: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-family: MicrosoftYaHei;
      color: #369aff;
      cursor: pointer;
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
      /deep/ .el-form-item__label {
        font-size: 14px !important;
      }
      /deep/ .el-input {
        font-size: 14px !important;
      }
      /deep/ .el-form-item__content {
        font-size: 14px !important;
      }
      .form {
        width: 100%;
        margin-top: 60px;
        .verificationCode {
          width: 124px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #dddddd;
          margin-left: 8px;
        }
      }
    }
    .registeredBtn {
      width: 420px;
      height: 46px;
      background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #ffffff;
      cursor: pointer;
    }
    .readBox {
      width: 100%;
      margin-top: 20px;
      .readedInstructions {
        color: #333333;
        font-size: 14px;
      }
      .instructionsName {
        font-size: 14px;
      }
    }
    .goLogin {
      width: 100%;
      margin-top: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #369aff;
      cursor: pointer;
    }
  }
}
</style>
