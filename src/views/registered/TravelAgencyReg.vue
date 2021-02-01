<template>
  <div class="TravelAgencyReg">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/login/team' }"
        >团队预约</el-breadcrumb-item
      >
      <el-breadcrumb-item>旅行社注册</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="registeredCon">
      <div class="regTitle">旅行社注册</div>
      <div class="regFormBox">
        <el-form
          ref="form"
          :model="form"
          label-width="190px"
          :rules="rules"
          class="regForm"
        >
          <el-form-item label="账号：" prop="account">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码：" prop="confirmPassword">
            <el-input v-model="form.confirmPassword"></el-input>
          </el-form-item>
          <el-form-item label="公司社会统一信用代码：" prop="creditCode">
            <el-input v-model="form.creditCode"></el-input>
          </el-form-item>
          <el-form-item label="公司名称：" prop="companyName">
            <el-input v-model="form.companyName"></el-input>
          </el-form-item>
          <el-form-item label="工商执照：" prop="companyName">

            <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit='1'>
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
              <div slot="tip">（图片规格：3M以下，图片清晰）</div>
            </el-upload>

            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelAgencyReg',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      form: {
        account: '',
        password: '',
        confirmPassword: '',
        creditCode: '',
        companyName: ''
      },
      rules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        confirmPassword: [
          { required: true, message: '请确认密码', trigger: 'blur' }
        ],
        creditCode: [
          {
            required: true,
            message: '请输入公司社会统一信用代码',
            trigger: 'blur'
          }
        ],
        companyName: [
          { required: true, message: '请输入公司名', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.TravelAgencyReg {
  width: 1200px;
  background: #f4f4f4;
  padding-top: 27px;
  box-sizing: border-box;
  /deep/ .el-breadcrumb__inner.is-link {
    color: #999999 !important;
    font-weight: 400;
  }
  /deep/ .el-breadcrumb__inner {
    color: #333333;
  }
  .registeredCon {
    width: 100%;
    margin-top: 25px;
    .regTitle {
      width: 1200px;
      height: 86px;
      background: #369aff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #ffffff;
    }
    .regFormBox {
      width: 100%;
      background-color: #fff;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      .regForm {
        margin-top: 20px;
        width: 480px;
      }
    }
  }
}
</style>
