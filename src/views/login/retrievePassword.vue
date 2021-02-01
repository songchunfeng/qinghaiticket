<template>
  <div class="retrievePassword">
    <div class="logo">
      <img src="../../assets/images/大美青海.png" alt="" />
    </div>
    <div class="loginForm">
      <div class="formTitle">找回密码</div>
      <div class="retrieveForm">
        <el-form class="form" ref="form" :model="form" label-width="60px">
          <el-form-item label="手机号">
            <el-input
              v-model="form.phone"
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
              <div class="verificationCode">BJUS</div>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
      <div class="submitBtn">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'retrievePassword',
  data () {
    return {
      form: {
        phone: '',
        verificationCode: ''
      }
    }
  }
}
</script>

<style lang='less' scoped>
.retrievePassword {
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
      .form {
        width: 100%;
        margin-top: 32px;
        .verificationCode {
          width: 93px;
          height: 40px;
          margin-left: 8px;
          background: #ffffff;
          border: 1px solid #dddddd;
        }
      }
      .submitBtn {
        width: 315px;
        height: 35px;
        background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
        border-radius: 2px;
        margin-top: 93px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        cursor: pointer;
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
      .formTitle {
        font-size: 36px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #333333;
        letter-spacing: 10px;
      }
      .form {
        width: 100%;
        margin-top: 42px;
        .verificationCode {
          width: 124px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #dddddd;
          margin-left: 10px;
        }
      }
      .submitBtn {
        width: 420px;
        height: 46px;
        background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
        border-radius: 2px;
        margin-top: 125px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
}
</style>
