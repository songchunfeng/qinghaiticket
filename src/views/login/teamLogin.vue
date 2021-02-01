<template>
  <div class="teamLogin">
    <div class="logo">
      <img src="../../assets/images/大美青海.png" alt="" />
    </div>
    <div class="loginForm">
      <div class="formTitle">团队预约</div>
      <el-form class="form" ref="form" :model="form" label-width="60px">
        <el-form-item label="账号">
          <el-input
            v-model="form.account"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
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
            <div class="verificationCode">BJUS</div>
          </el-col>
        </el-form-item>
      </el-form>
      <div class="loginBtn">立即登录</div>
      <div class="registeredBtn" @click="toTravelAgency">旅行社注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teamLogin',
  data () {
    return {
      form: {
        account: '',
        password: '',
        verificationCode: ''
      }
    }
  },
  methods: {
    toTravelAgency () {
      this.$router.push('/qinghai/travelAgency')
    }
  }
}
</script>

<style lang="less" scoped>
.teamLogin {
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
      /deep/ .el-form-item__content {
        display: flex;
        align-items: center;
      }
      .formTitle {
        font-size: 27px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #333333;
        letter-spacing: 8px;
      }
      .form {
        width: 100%;
        margin-top: 60px;
        .verificationCode {
          width: 93px;
          height: 40px;
          margin-left: 8px;
          background: #ffffff;
          border: 1px solid #dddddd;
        }
      }
    }
    .loginBtn {
      width: 315px;
      height: 35px;
      margin-top: 95px;
      background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-family: MicrosoftYaHei;
      color: #ffffff;
    }
    .registeredBtn {
      width: 315px;
      height: 35px;
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
      .form {
        width: 100%;
        margin-top: 80px;
        .verificationCode {
          width: 124px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #dddddd;
          margin-left: 10px;
        }
      }
    }
    .loginBtn {
      width: 420px;
      height: 46px;
      margin-top: 127px;
      background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-family: MicrosoftYaHei;
      color: #ffffff;
    }
    .registeredBtn {
      width: 420px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-family: MicrosoftYaHei;
      color: #369aff;
      cursor: pointer;
    }
  }
}
</style>
