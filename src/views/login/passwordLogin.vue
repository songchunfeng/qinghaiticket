<template>
  <div class="passwordLogin">
    <el-form class="form" ref="form" :model="form" label-width="60px">
      <el-form-item label="账号">
        <el-input v-model="form.account" placeholder="请输入手机号"></el-input>
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
    <div class="otherBtn">
      <div class="otherBtnCon">忘记密码</div>
      <div class="line"></div>
      <div class="otherBtnCon">立即注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'passwordLogin',
  data () {
    return {
      form: {
        account: '',
        password: '',
        verificationCode: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.passwordLogin {
  @media screen and (max-width: 1440px) {
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
    .loginBtn {
      width: 315px;
      height: 35px;
      margin-top: 65px;
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
    .otherBtn {
      width: 315px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .otherBtnCon {
        font-size: 11px;
        font-family: MicrosoftYaHei;
        color: #369aff;
        cursor: pointer;
      }
      .line {
        width: 3px;
        height: 14px;
        background-color: #369aff;
        margin-left: 8px;
        margin-right: 8px;
      }
    }
  }
  @media screen and (min-width: 1441px) {
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
    .loginBtn {
      width: 420px;
      height: 46px;
      margin-top: 85px;
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
    .otherBtn {
      width: 420px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .otherBtnCon {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #369aff;
        cursor: pointer;
      }
      .line {
        width: 4px;
        height: 19px;
        background-color: #369aff;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
}
</style>
