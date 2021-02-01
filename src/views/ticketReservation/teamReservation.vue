<template>
  <div class="teamReservation">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/qinghai/AllScenicSpots' }"
        >全部景区</el-breadcrumb-item
      >
      <el-breadcrumb-item :to="{ path: '/qinghai/teamScheduled' }"
        >互助土族故土园旅游区</el-breadcrumb-item
      >
      <el-breadcrumb-item>门票购买</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="stepNav">
      <el-steps :active="0" simple>
        <el-step title="确认订单信息">
          <i class="iconfont icon-buzhou1" slot="icon"></i>
        </el-step>
        <el-step title="付款">
          <i class="iconfont icon-buzhou" slot="icon"></i>
        </el-step>
        <el-step title="交易成功">
          <i class="iconfont icon-buzhou2" slot="icon"></i>
        </el-step>
      </el-steps>
    </div>
    <div class="scenicAreaInfo">
      <div class="areaLf">
        <img src="../../assets/images/分类背景.jpeg" alt="" />
      </div>
      <div class="areaRt">
        <div class="areaName">互助土族故土园旅游区</div>
        <el-form
          ref="form"
          :model="form"
          label-width="90px"
          label-position="left"
          class="chooseForm"
        >
          <el-form-item label="游玩日期：">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="游玩时段：">
            <el-select v-model="form.time" placeholder="请选择游玩时段">
              <el-option label="上午" value="shanghai"></el-option>
              <el-option label="下午" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="门票数量：">
            <div class="ticketNum">1</div>
          </el-form-item>
        </el-form>
        <div class="priceBox">
          <div class="priceLable">总价格（CNY）：</div>
          <div class="price">1300</div>
          <div class="priceLable" style="margin-left: 38px">优惠（CNY）：</div>
          <div class="discount">460（八折）</div>
        </div>
      </div>
    </div>
    <div class="tourGuideInfo">
      <div class="ticketTitle">导游信息</div>
      <div class="tourGuideFormBox">
        <el-form
          :inline="true"
          :model="tourGuideForm"
          :rules="tourGuideRules"
          ref="tourGuideForm"
        >
          <el-form-item label="带团导游：" prop="tourGuide">
            <el-select v-model="tourGuideForm.tourGuide" placeholder="请选择">
              <el-option label="导游1" value="tourGuide1"></el-option>
              <el-option label="导游2" value="tourGuide2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系方式：" prop="phone">
            <el-input
              v-model="tourGuideForm.phone"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="ticketList">
      <div class="ticketItem">
        <div class="ticketInfoTitle">
          <div class="ticketName">成人入园通道</div>
          <div class="numAndPrice">
            <div class="lable">数量：</div>
            <div class="value">25</div>
            <div class="lable" style="margin-left: 40px">价格：</div>
            <div class="value">100</div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="operationRow">
          <div class="operatingHints">
            团队预约需下载附件模板，依照如下格式，标准填写该票种出行人信息，并操作导入。示例如下：
          </div>
          <div class="operationBtn">
            <div class="download">下载模板</div>
            <el-upload action="#" class="uploadBtn">
              <el-button>导入</el-button>
            </el-upload>
          </div>
        </div>
        <div class="touristsList">
          <el-row class="titleRow">
            <el-col :span="6"><div class="titleName">姓名</div></el-col>
            <el-col :span="6"><div class="titleName">联系电话</div></el-col>
            <el-col :span="6"><div class="titleName">有效证件</div></el-col>
            <el-col :span="6"><div class="titleName">证件号码</div></el-col>
          </el-row>
          <el-row class="touristsItem">
            <el-col :span="6"><div class="ticketInfo">张三</div></el-col>
            <el-col :span="6"><div class="ticketInfo">176××××1111</div></el-col>
            <el-col :span="6"><div class="ticketInfo">身份证</div></el-col>
            <el-col :span="6"><div class="ticketInfo">18</div></el-col>
          </el-row>
          <el-row class="touristsItem">
            <el-col :span="6"><div class="ticketInfo">张三</div></el-col>
            <el-col :span="6"><div class="ticketInfo">176××××1111</div></el-col>
            <el-col :span="6"><div class="ticketInfo">身份证</div></el-col>
            <el-col :span="6"><div class="ticketInfo">18</div></el-col>
          </el-row>
        </div>
      </div>
      <div class="ticketItem">
        <div class="ticketInfoTitle">
          <div class="ticketName">学生&儿童入园通票</div>
          <div class="numAndPrice">
            <div class="lable">数量：</div>
            <div class="value">25</div>
            <div class="lable" style="margin-left: 40px">价格：</div>
            <div class="value">100</div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="operationRow">
          <div class="operatingHints">
            团队预约需下载附件模板，依照如下格式，标准填写该票种出行人信息，并操作导入。示例如下：
          </div>
          <div class="operationBtn">
            <div class="download">下载模板</div>
            <el-upload action="#" class="uploadBtn">
              <el-button>导入</el-button>
            </el-upload>
          </div>
        </div>
        <div class="touristsList">
          <el-row class="titleRow">
            <el-col :span="6"><div class="titleName">姓名</div></el-col>
            <el-col :span="6"><div class="titleName">联系电话</div></el-col>
            <el-col :span="6"><div class="titleName">有效证件</div></el-col>
            <el-col :span="6"><div class="titleName">证件号码</div></el-col>
          </el-row>
          <el-row class="touristsItem">
            <el-col :span="6"><div class="ticketInfo">张三</div></el-col>
            <el-col :span="6"><div class="ticketInfo">176××××1111</div></el-col>
            <el-col :span="6"><div class="ticketInfo">身份证</div></el-col>
            <el-col :span="6"><div class="ticketInfo">18</div></el-col>
          </el-row>
          <el-row class="touristsItem">
            <el-col :span="6"><div class="ticketInfo">张三</div></el-col>
            <el-col :span="6"><div class="ticketInfo">176××××1111</div></el-col>
            <el-col :span="6"><div class="ticketInfo">身份证</div></el-col>
            <el-col :span="6"><div class="ticketInfo">18</div></el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="submitBox">
      <div class="submitBtn" @click="toTeamPay">提交订单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teamReservation',
  data () {
    return {
      form: {
        date: '',
        time: ''
      },
      tourGuideForm: {
        phone: '',
        tourGuide: ''
      },
      tourGuideRules: {
        tourGuide: [
          {
            required: true,
            message: '请选择导游',
            trigger: 'blur'
          }
        ],
        phone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    toTeamPay () {
      this.$router.push('/qinghai/teamPay')
    }
  }
}
</script>

<style lang="less" scoped>
.teamReservation {
  width: 1200px;
  background: #f4f4f4;
  padding-top: 27px;
  box-sizing: border-box;
  margin-bottom: 100px;
  /deep/ .el-breadcrumb__inner.is-link {
    color: #999999 !important;
    font-weight: 400;
  }
  /deep/ .el-breadcrumb__inner {
    color: #333333;
  }
  .stepNav {
    margin-top: 25px;
    /deep/ .is-finish {
      color: #5cb87a;
      border-color: #5cb87a;
    }
    .el-steps--simple {
      background-color: #fff;
    }
  }
  .scenicAreaInfo {
    margin-top: 25px;
    width: 1200px;
    height: 320px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    box-sizing: border-box;
    .areaLf {
      width: 495px;
      height: 280px;
      margin-right: 24px;
      img {
        width: 495px;
        height: 280px;
      }
    }
    .areaRt {
      width: 100%;
      height: 100%;
      .areaName {
        font-size: 30px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #333333;
        letter-spacing: 1px;
      }
      .chooseForm {
        margin-top: 50px;
        .ticketNum {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #333333;
        }
        .el-form-item {
          margin-bottom: 15px !important;
        }
      }
      .priceBox {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .priceLable {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #333333;
        }
        .price {
          font-size: 24px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: #369aff;
        }
        .discount {
          font-size: 16px;
          font-family: MicrosoftYaHeiSemibold;
          color: #333333;
        }
      }
    }
  }
  .tourGuideInfo {
    width: 1200px;
    background: #ffffff;
    margin-top: 16px;
    padding: 24px 20px 0px 20px;
    box-sizing: border-box;
    .ticketTitle {
      width: 100%;
      height: 43px;
      border-bottom: 1px solid #dddddd;
      font-size: 16px;
      font-family: MicrosoftYaHeiSemibold;
      color: #000000;
    }
    .tourGuideFormBox {
      margin-top: 20px;
      width: 100%;
      padding-left: 24px;
      box-sizing: border-box;
      .el-form--inline .el-form-item {
        margin-right: 60px !important;
      }
    }
  }
  .ticketList {
    .ticketItem {
      width: 1200px;
      background: #ffffff;
      margin-top: 16px;
      padding: 24px 20px 24px 20px;
      box-sizing: border-box;
      .ticketInfoTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .ticketName {
          font-size: 16px;
          font-family: MicrosoftYaHeiSemibold;
          color: #000000;
        }
        .numAndPrice {
          display: flex;
          align-items: center;
          justify-content: center;
          .lable {
            font-size: 14px;
            font-family: MicrosoftYaHeiSemibold;
            color: #333333;
          }
          .value {
            font-size: 20px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: #369aff;
          }
        }
      }
      .operationRow {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .operatingHints {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #333333;
        }
        .operationBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          .download {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            width: 100px;
            height: 40px;
            background: #ffffff;
            border-radius: 2px;
            border: 1px solid #dddddd;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #333333;
            cursor: pointer;
          }
          .el-button {
            width: 100px;
            height: 40px;
            border: 1px solid #dddddd;
            color: #333333;
          }
          .el-button:hover {
            background-color: #fff;
          }
        }
      }
      .touristsList {
        margin-top: 10px;
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
        .touristsItem {
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
        }
      }
    }
  }
  .submitBox {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    .submitBtn {
      width: 120px;
      height: 46px;
      background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-family: MicrosoftYaHei;
      color: #ffffff;
      cursor: pointer;
    }
  }
}
</style>
