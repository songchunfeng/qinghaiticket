<template>
  <div class="teamScheduled">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/qinghai/AllScenicSpots' }"
        >全部景区</el-breadcrumb-item
      >
      <el-breadcrumb-item>互助土族故土园旅游区</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="scenicAreaInfo">
      <div class="areaLf">
        <img src="../../assets/images/分类背景.jpeg" alt="" />
      </div>
      <div class="areaRt">
        <div class="areaName">互助土族故土园旅游区</div>
        <div class="areaLableBox">
          <div class="areaLable">5A级景区</div>
          <div class="areaLable">人文民俗</div>
        </div>
        <div class="lableBox">
          <div class="lable">景区地址</div>
          <div class="detail">青海省海东市互助土族自治县威远镇天佑德大道</div>
        </div>
        <div class="lableBox">
          <div class="lable">开放时间</div>
          <div class="detail">08:00—18:00</div>
        </div>
        <div class="lableBox">
          <div class="lable">服务承诺</div>
          <div class="detail">
            实名购票，分时游览，预约限流，快速入园。
            全价票持身份证原件、半价优惠票持二维码或身份证原件及学生证原件即可验票。
          </div>
        </div>
      </div>
    </div>
    <div class="ticketKindBox">
      <div class="ticketTitle">门票</div>
      <el-form ref="form" :model="form" label-width="100px" class="chooseForm">
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
      </el-form>
      <div class="TicketForm">
        <el-row class="titleRow">
          <el-col :span="12"><div class="titleName">门票种类</div></el-col>
          <el-col :span="6"><div class="titleName">门票价格</div></el-col>
          <el-col :span="6"><div class="titleName">门票数量</div></el-col>
        </el-row>
        <el-row class="ticketItem">
          <el-col :span="12"><div class="ticketInfo">成人入园通票</div></el-col>
          <el-col :span="6"><div class="ticketInfo">¥ 50.00</div></el-col>
          <el-col :span="6">
            <el-input-number
              v-model="num"
              :min="1"
              :max="10"
              size="small"
              label="描述文字"
            ></el-input-number>
          </el-col>
        </el-row>
        <el-row class="ticketItem">
          <el-col :span="12"
            ><div class="ticketInfo">学生&儿童入园通票</div></el-col
          >
          <el-col :span="6"><div class="ticketInfo">¥ 25.00</div></el-col>
          <el-col :span="6">
            <el-input-number
              v-model="num"
              :min="1"
              :max="10"
              size="small"
              label="描述文字"
            ></el-input-number>
          </el-col>
        </el-row>
      </div>
      <div class="buyRow"><div class="buyBtn" @click="toTeamReservation">购买</div></div>
    </div>
    <div class="scenicSpotInstructions">
      <div class="tabBox">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="预订须知" name="first"
            ><reservationInstru></reservationInstru
          ></el-tab-pane>
          <el-tab-pane label="景区详情" name="second">
              <scenicSpotsInfo></scenicSpotsInfo>
          </el-tab-pane>
          <el-tab-pane label="交通指南" name="third">
              <trafficInfo></trafficInfo>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import reservationInstru from './reservationInstru'
import scenicSpotsInfo from './scenicSpotsInfo'
import trafficInfo from './trafficInfo'
export default {
  name: 'teamScheduled',
  components: {
    reservationInstru,
    scenicSpotsInfo,
    trafficInfo
  },
  data () {
    return {
      num: 0,
      form: {
        date: '',
        time: ''
      },
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    toTeamReservation () {
      this.$router.push('/qinghai/teamReservation')
    }
  }
}
</script>

<style lang="less" scoped>
.teamScheduled {
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
  .scenicAreaInfo {
    margin-top: 26px;
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
      .areaLableBox {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 19px;
        .areaLable {
          width: 74px;
          height: 26px;
          border-radius: 15px;
          border: 1px solid #cdcdcd;
          margin-right: 10px;
          font-size: 12px;
          font-family: MicrosoftYaHei;
          color: #999999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .lableBox {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 20px;
        .lable {
          font-size: 14px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: #333333;
          margin-right: 16px;
          width: 65px;
        }
        .detail {
          width: 100%;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #333333;
          text-align: left;
          display: flex;
        }
      }
    }
  }
  .ticketKindBox {
    width: 1200px;
    // height: 380px;
    background: #ffffff;
    margin-top: 16px;
    padding: 24px 20px 24px 20px;
    box-sizing: border-box;
    .ticketTitle {
      width: 100%;
      height: 43px;
      border-bottom: 1px solid #dddddd;
      font-size: 16px;
      font-family: MicrosoftYaHeiSemibold;
      color: #000000;
    }
    .chooseForm {
      margin-top: 14px;
    }
    .TicketForm {
      margin-top: 15px;
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
      .ticketItem {
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
    .buyRow {
      width: 100%;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      .buyBtn {
        width: 120px;
        height: 46px;
        background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
        border-radius: 2px;
        font-size: 15px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
  .scenicSpotInstructions {
    width: 1200px;
    background: #ffffff;
    margin-top: 16px;
    padding: 24px 20px 24px 20px;
    box-sizing: border-box;
    .tabBox {
      width: 100%;
    }
  }
}
</style>
