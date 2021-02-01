<template>
  <div class="buyPackages">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/qinghai/AllScenicSpots' }"
        >全部景区</el-breadcrumb-item
      >
      <el-breadcrumb-item :to="{ path: '/qinghai/packageTicket' }"
        >青海湖多景区套票</el-breadcrumb-item
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
      <div>
        <el-carousel :interval="5000" height="280px" class="areaLf">
          <el-carousel-item>
            <img src="../../assets/images/分类背景.jpeg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../../assets/images/分类背景.jpeg" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="areaRt">
        <div class="areaName">青海湖多景区套票</div>
        <div class="priceBox">
          <div class="instructionsRow">
            <div class="Lable">门票数量：</div>
            <div class="content">1</div>
          </div>
          <div class="instructionsRow">
            <div class="Lable">优惠（CNY）：</div>
            <div class="content">0</div>
          </div>
          <div class="instructionsRow">
            <div class="Lable">总价格（CNY）：</div>
            <div class="price">100</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tourGuideInfo">
      <div class="ticketTitle">取票信息</div>
      <el-form
        :inline="true"
        label-width="100px"
        :model="collectTicketForm"
        :rules="collectTicketRules"
        ref="collectTicketForm"
        class="collectTicketForm"
        label-position="right"
      >
        <el-form-item label="姓名：" prop="name">
          <el-input
            v-model="collectTicketForm.name"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item label="证件类型：" prop="documentType">
          <el-select
            v-model="collectTicketForm.documentType"
            placeholder="请选择"
          >
            <el-option label="身份证" value="idCard"></el-option>
            <el-option label="护照" value="passport"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号：" prop="idNum">
          <el-input
            v-model="collectTicketForm.idNum"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item label="联系方式：" prop="phone">
          <el-input
            v-model="collectTicketForm.phone"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="ticketInfo">
      <div class="ticketTitle">门票信息</div>
      <div class="ticketList">
        <div class="ticketItem">
          <div class="ticketTypeTitle">
            <div class="ticketTypeName">二郎剑景区-成人入园通票</div>
          </div>
          <div class="dateBox">
            <el-form
              :inline="true"
              label-width="100px"
              :model="playForm"
              ref="reservationForm"
              class="reservationForm"
              label-position="right"
            >
              <el-form-item label="游玩日期：">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="playForm.date"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="游玩时段：">
                <el-select v-model="playForm.time" placeholder="请选择游玩时段">
                  <el-option label="上午" value="shanghai"></el-option>
                  <el-option label="下午" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div class="line"></div>
          </div>

          <div class="reservationInfoBox">
            <div class="primaryTitle">预订人信息</div>
            <el-form
              :inline="true"
              label-width="100px"
              :model="reservationForm"
              :rules="reservationRules"
              ref="reservationForm"
              class="reservationForm"
              label-position="right"
            >
              <el-form-item label="姓名：" prop="name">
                <el-input
                  v-model="reservationForm.name"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="证件类型：" prop="documentType">
                <el-select
                  v-model="reservationForm.documentType"
                  placeholder="请选择"
                >
                  <el-option label="身份证" value="idCard"></el-option>
                  <el-option label="护照" value="passport"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="证件号：" prop="idNum">
                <el-input
                  v-model="reservationForm.idNum"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="联系方式：" prop="phone">
                <el-input
                  v-model="reservationForm.phone"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="ticketItem">
          <div class="ticketTypeTitle">
            <div class="ticketTypeName">仙女湾景区-成人入园通票</div>
          </div>
          <div class="dateBox">
            <el-form
              :inline="true"
              label-width="100px"
              :model="playForm"
              ref="reservationForm"
              class="reservationForm"
              label-position="right"
            >
              <el-form-item label="游玩日期：">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="playForm.date"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="游玩时段：">
                <el-select v-model="playForm.time" placeholder="请选择游玩时段">
                  <el-option label="上午" value="shanghai"></el-option>
                  <el-option label="下午" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div class="line"></div>
          </div>

          <div class="reservationInfoBox">
            <div class="primaryTitle">预订人信息</div>
            <el-form
              :inline="true"
              label-width="100px"
              :model="reservationForm"
              :rules="reservationRules"
              ref="reservationForm"
              class="reservationForm"
              label-position="right"
            >
              <el-form-item label="姓名：" prop="name">
                <el-input
                  v-model="reservationForm.name"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="证件类型：" prop="documentType">
                <el-select
                  v-model="reservationForm.documentType"
                  placeholder="请选择"
                >
                  <el-option label="身份证" value="idCard"></el-option>
                  <el-option label="护照" value="passport"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="证件号：" prop="idNum">
                <el-input
                  v-model="reservationForm.idNum"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="联系方式：" prop="phone">
                <el-input
                  v-model="reservationForm.phone"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="ticketItem">
          <div class="ticketTypeTitle">
            <div class="ticketTypeName">沙岛-成人入园通票</div>
          </div>
          <div class="dateBox">
            <el-form
              :inline="true"
              label-width="100px"
              :model="playForm"
              ref="reservationForm"
              class="reservationForm"
              label-position="right"
            >
              <el-form-item label="游玩日期：">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="playForm.date"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="游玩时段：">
                <el-select v-model="playForm.time" placeholder="请选择游玩时段">
                  <el-option label="上午" value="shanghai"></el-option>
                  <el-option label="下午" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div class="line"></div>
          </div>

          <div class="reservationInfoBox">
            <div class="primaryTitle">预订人信息</div>
            <el-form
              :inline="true"
              label-width="100px"
              :model="reservationForm"
              :rules="reservationRules"
              ref="reservationForm"
              class="reservationForm"
              label-position="right"
            >
              <el-form-item label="姓名：" prop="name">
                <el-input
                  v-model="reservationForm.name"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="证件类型：" prop="documentType">
                <el-select
                  v-model="reservationForm.documentType"
                  placeholder="请选择"
                >
                  <el-option label="身份证" value="idCard"></el-option>
                  <el-option label="护照" value="passport"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="证件号：" prop="idNum">
                <el-input
                  v-model="reservationForm.idNum"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="联系方式：" prop="phone">
                <el-input
                  v-model="reservationForm.phone"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="ticketItem">
          <div class="ticketTypeTitle">
            <div class="ticketTypeName">鸟岛-成人入园通票</div>
          </div>
          <div class="dateBox">
            <el-form
              :inline="true"
              label-width="100px"
              :model="playForm"
              ref="reservationForm"
              class="reservationForm"
              label-position="right"
            >
              <el-form-item label="游玩日期：">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="playForm.date"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="游玩时段：">
                <el-select v-model="playForm.time" placeholder="请选择游玩时段">
                  <el-option label="上午" value="shanghai"></el-option>
                  <el-option label="下午" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div class="line"></div>
          </div>

          <div class="reservationInfoBox">
            <div class="primaryTitle">预订人信息</div>
            <el-form
              :inline="true"
              label-width="100px"
              :model="reservationForm"
              :rules="reservationRules"
              ref="reservationForm"
              class="reservationForm"
              label-position="right"
            >
              <el-form-item label="姓名：" prop="name">
                <el-input
                  v-model="reservationForm.name"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="证件类型：" prop="documentType">
                <el-select
                  v-model="reservationForm.documentType"
                  placeholder="请选择"
                >
                  <el-option label="身份证" value="idCard"></el-option>
                  <el-option label="护照" value="passport"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="证件号：" prop="idNum">
                <el-input
                  v-model="reservationForm.idNum"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="联系方式：" prop="phone">
                <el-input
                  v-model="reservationForm.phone"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="submitBox">
      <div class="submitBtn" @click="toPackagesPay">提交订单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buyPackages',
  data () {
    return {
      playForm: {
        date: '',
        time: ''
      },
      form: {
        date: '',
        time: ''
      },
      collectTicketForm: {
        name: '',
        documentType: '',
        idNum: '',
        phone: ''
      },
      reservationForm: {
        name: '',
        documentType: '',
        idNum: '',
        phone: ''
      },
      collectTicketRules: {
        name: [
          { required: true, message: '请输入取票人姓名', trigger: 'blur' }
        ],
        documentType: [
          { required: true, message: '请选择证件类型', trigger: 'blur' }
        ],
        idNum: [{ required: true, message: '请输入证件号码', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入联系方式', trigger: 'blur' }]
      },
      reservationRules: {
        name: [
          { required: true, message: '请输入取票人姓名', trigger: 'blur' }
        ],
        documentType: [
          { required: true, message: '请选择证件类型', trigger: 'blur' }
        ],
        idNum: [{ required: true, message: '请输入证件号码', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入联系方式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    toPackagesPay () {
      this.$router.push('/qinghai/packagesPay')
    }
  }
}
</script>

<style lang='less' scoped>
.buyPackages {
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
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
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
        .instructionsRow {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-top: 20px;
          .lable {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #999999;
          }
          .content {
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

    .collectTicketForm {
      width: 100%;
      margin-top: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .ticketInfo {
    width: 1200px;
    background: #ffffff;
    margin-top: 16px;
    padding: 24px 20px 24px 20px;
    box-sizing: border-box;
    /deep/ .el-form--inline .el-form-item__content {
      width: 240px;
      margin-right: 22px;
    }
    /deep/ .el-select {
      width: 240px;
    }
    /deep/ .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 240px;
    }
    .ticketTitle {
      width: 100%;
      height: 43px;
      border-bottom: 1px solid #dddddd;
      font-size: 16px;
      font-family: MicrosoftYaHeiSemibold;
      color: #000000;
      margin-bottom: 5px;
    }
    .ticketList {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      .ticketItem {
        width: 100%;
        margin-top: 15px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        .ticketTypeTitle {
          width: 100%;
          padding: 18px 20px 18px 20px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.02);
          .ticketTypeName {
            font-size: 14px;
            font-family: MicrosoftYaHeiSemibold;
            color: #333333;
          }
        }
        .dateBox {
          width: 100%;
          padding: 20px 20px 0px 20px;
          box-sizing: border-box;
          .reservationForm {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
          }
          .line {
            width: 100%;
            border-bottom: 1px dashed #dddddd;
          }
        }
        .reservationInfoBox {
          width: 100%;
          padding-left: 20px;
          padding-right: 20px;
          box-sizing: border-box;
          .primaryTitle {
            margin-top: 20px;
            font-size: 14px;
            font-family: MicrosoftYaHeiSemibold;
            color: #333333;
          }
          .reservationForm {
            margin-top: 20px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
          }
        }
      }
    }
  }
  .submitBox {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .submitBtn {
      width: 120px;
      height: 46px;
      background: #369aff;
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
