<template>
  <div class="packageTicket">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/qinghai/AllScenicSpots' }"
        >全部景区</el-breadcrumb-item
      >
      <el-breadcrumb-item>景区套票</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="includeScenicSpot">
      <div class="packageTicketTitle">青海湖多景区套票</div>
      <div class="parameterBox">
        <div class="parameterLable">景区地址</div>
        <div class="parameterCon">青海</div>
      </div>
      <div class="numAndPrice">
        <div class="parameterBox">
          <div class="parameterLable">门票数量</div>
          <div class="parameterCon">1</div>
        </div>
        <div class="parameterBox">
          <div class="parameterLable">总价格（CNY）</div>
          <div class="parameterPrice">100</div>
        </div>
      </div>
      <div class="allScenicSpotInfo">
        <div class="topIcon">包含景区</div>
        <div class="ticketScenicSpot">
          <div class="ScenicSpotImg">
            <img src="../../assets/images/分类背景.jpeg" alt="" />
          </div>
          <div class="ScenicSpotName">二郎剑景区</div>
        </div>
        <div class="ticketScenicSpot">
          <div class="ScenicSpotImg">
            <img src="../../assets/images/分类背景.jpeg" alt="" />
          </div>
          <div class="ScenicSpotName">二郎剑景区</div>
        </div>
        <div class="ticketScenicSpot">
          <div class="ScenicSpotImg">
            <img src="../../assets/images/分类背景.jpeg" alt="" />
          </div>
          <div class="ScenicSpotName">二郎剑景区</div>
        </div>
        <div class="ticketScenicSpot">
          <div class="ScenicSpotImg">
            <img src="../../assets/images/分类背景.jpeg" alt="" />
          </div>
          <div class="ScenicSpotName">二郎剑景区</div>
        </div>
      </div>
    </div>
    <div class="ticketKindBox">
      <div class="ticketTitle">门票</div>
      <div class="TicketForm">
        <el-row class="titleRow">
          <el-col :span="4"><div class="titleName">景区名称</div></el-col>
          <el-col :span="4"><div class="titleName">门票种类</div></el-col>
          <el-col :span="6"><div class="titleName">游玩日期</div></el-col>
          <el-col :span="6"><div class="titleName">游玩时段</div></el-col>
          <el-col :span="4"><div class="titleName">门票价格</div></el-col>
        </el-row>
        <el-row class="ticketItem">
          <el-col :span="4"><div class="ticketInfo">二郎剑景区</div></el-col>
          <el-col :span="4"><div class="ticketInfo">成人入园通票</div></el-col>
          <el-col :span="6">
            <el-date-picker v-model="date" type="date" placeholder="选择日期">
            </el-date-picker
          ></el-col>
          <el-col :span="6">
            <el-select v-model="time" placeholder="请选择游玩时段">
              <el-option label="上午" value="shangwu"></el-option>
              <el-option label="下午" value="xiawu"></el-option>
            </el-select>
          </el-col>
          <el-col :span="4"><div class="ticketInfo">¥ 50.00</div></el-col>
        </el-row>
        <el-row class="ticketItem">
          <el-col :span="4"><div class="ticketInfo">二郎剑景区</div></el-col>
          <el-col :span="4"><div class="ticketInfo">成人入园通票</div></el-col>
          <el-col :span="6">
            <el-date-picker v-model="date" type="date" placeholder="选择日期">
            </el-date-picker
          ></el-col>
          <el-col :span="6">
            <el-select v-model="time" placeholder="请选择游玩时段">
              <el-option label="上午" value="shangwu"></el-option>
              <el-option label="下午" value="xiawu"></el-option>
            </el-select>
          </el-col>
          <el-col :span="4"><div class="ticketInfo">¥ 50.00</div></el-col>
        </el-row>
        <el-row class="ticketItem">
          <el-col :span="4"><div class="ticketInfo">二郎剑景区</div></el-col>
          <el-col :span="4"><div class="ticketInfo">成人入园通票</div></el-col>
          <el-col :span="6">
            <el-date-picker v-model="date" type="date" placeholder="选择日期">
            </el-date-picker
          ></el-col>
          <el-col :span="6">
            <el-select v-model="time" placeholder="请选择游玩时段">
              <el-option label="上午" value="shangwu"></el-option>
              <el-option label="下午" value="xiawu"></el-option>
            </el-select>
          </el-col>
          <el-col :span="4"><div class="ticketInfo">¥ 50.00</div></el-col>
        </el-row>
        <el-row class="ticketItem">
          <el-col :span="4"><div class="ticketInfo">二郎剑景区</div></el-col>
          <el-col :span="4"><div class="ticketInfo">成人入园通票</div></el-col>
          <el-col :span="6">
            <el-date-picker v-model="date" type="date" placeholder="选择日期">
            </el-date-picker
          ></el-col>
          <el-col :span="6">
            <el-select v-model="time" placeholder="请选择游玩时段">
              <el-option label="上午" value="shangwu"></el-option>
              <el-option label="下午" value="xiawu"></el-option>
            </el-select>
          </el-col>
          <el-col :span="4"><div class="ticketInfo">¥ 50.00</div></el-col>
        </el-row>
      </div>
      <div class="btnBox">
        <div class="buyBtn">立即购买</div>
      </div>
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
  name: 'packageTicket',
  components: {
    reservationInstru,
    scenicSpotsInfo,
    trafficInfo
  },
  data () {
    return {
      date: '',
      time: '',
      activeName: 'first'
    }
  },
  methods: {
    toBuy () {
      this.$router.push('/qinghai/individualPurchase')
    }
  }
}
</script>

<style lang='less' scoped>
.packageTicket {
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
  .includeScenicSpot {
    width: 1200px;
    background: #ffffff;
    margin-top: 25px;
    padding: 24px 20px 24px 20px;
    box-sizing: border-box;
    .packageTicketTitle {
      font-size: 30px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #333333;
      line-height: 40px;
      letter-spacing: 1px;
    }
    .numAndPrice {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .parameterBox {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 20px;
      .parameterLable {
        font-size: 14px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #333333;
        margin-right: 10px;
      }
      .parameterCon {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #333333;
      }
      .parameterPrice {
        font-size: 24px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #369aff;
      }
    }
    .allScenicSpotInfo {
      width: 100%;
      border-radius: 7px;
      border: 1px dashed #369aff;
      margin-top: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0px 20px 20px 20px;
      box-sizing: border-box;
      .topIcon {
        width: 100px;
        height: 26px;
        background: #369aff;
        border-radius: 0px 13px 13px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        position: absolute;
        left: -1px;
        top: -13px;
      }
      .ticketScenicSpot {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-right: 225px;
        margin-top: 20px;
        .ScenicSpotImg {
          width: 212px;
          height: 120px;
          img {
            width: 212px;
            height: 120px;
          }
        }
        .ScenicSpotName {
          font-size: 20px;
          font-family: MicrosoftYaHeiSemibold;
          color: #333333;
          margin-left: 20px;
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
        // height: 60px;
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
    .btnBox {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      .buyBtn {
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
