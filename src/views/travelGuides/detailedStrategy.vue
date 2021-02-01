<template>
  <div class="detailedStrategy">
    <div class="detailCenter">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>

        <el-breadcrumb-item :to="{ path: '/qinghai/travelGuides' }"
          >旅游攻略</el-breadcrumb-item
        >
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="detailTitle">关于青海省博物馆等景区恢复预约开放通知</div>
      <el-divider></el-divider>
      <div class="detailInfoBox">
        <div class="left">
          <div class="authorAndTime">青海省博物馆</div>
          <div class="authorAndTime">2020-10-14</div>
        </div>
        <div class="Right">
          <div class="toShare">分享到</div>
          <div class="shareImg">
            <img src="../../assets/images/微博咨询.png" alt="" />
          </div>
          <div class="shareImg">
            <img src="../../assets/images/微信咨询.png" alt="" />
          </div>
          <div class="shareImg">
            <img src="../../assets/images/qq.png" alt="" />
          </div>
        </div>
      </div>
      <div class="detailCon">
        最梦幻的星空——茶卡盐湖 茶卡盐湖星空
        简介：茶卡盐湖，别称茶卡或达布逊淖尔，是位于青海省海西蒙古族藏族自治州乌兰县茶卡镇附近的一个盐湖。“茶卡”是藏语，意即盐池。茶卡盐湖被旅行者们称为中国“天空之镜”，人生必去的55个地方之一。
        拍摄位置：想要拍星空就得在茶卡镇过夜。建议备好干粮，下午5点之前买票进入，游客开始往外面走，这时可以先观看茶卡的晚霞。然后沿着小火车的铁轨一直往里面走，越到里面约干净拍出的效果也更好。或者也可以选择在入口处的盐雕处拍摄，盐雕和星空相接的景色。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailedStrategy'
}
</script>

<style lang='less' scoped>
.detailedStrategy {
  width: 100%;
  background: #ffffff;
  padding-top: 27px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  .detailCenter {
    width: 1200px;
    margin-bottom: 100px;
    /deep/ .el-breadcrumb__inner.is-link {
      color: #999999 !important;
      font-weight: 400;
    }
    /deep/ .el-breadcrumb__inner {
      color: #333333;
    }
    .detailTitle {
      margin-top: 40px;
      font-size: 30px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #333333;
      letter-spacing: 1px;
    }
    .detailInfoBox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        justify-content: center;
        .authorAndTime {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #999999;
          margin-right: 10px;
        }
      }
      .Right {
        display: flex;
        align-items: center;
        justify-content: center;
        .toShare {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #999999;
        }
        .shareImg {
          height: 20px;
          width: 20px;
          margin-left: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .detailCon {
      margin-top: 30px;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #333333;
      line-height: 28px;
    }
  }
}
</style>
