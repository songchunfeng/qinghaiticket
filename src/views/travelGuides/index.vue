<template>
  <div class="travelGuides">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>旅游攻略</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="travelGuidesList">
      <div class="guideItem" @click="toDetailedStrategy">
        <div class="guideItemLt">
          <img src="../../assets/images/分类背景.jpeg" alt="" />
        </div>
        <div class="guideItemRt">
          <div class="guideName">去青海一定要看一次最美星空（附拍摄攻略）</div>
          <div class="scenicSpotName">茶卡盐湖景区</div>
          <div class="guideIntroduction">
            山一程水一程，千里迢迢来到人迹罕至的高原，就是为了看一次最美星空！有些地方，可以用手机轻描淡写地拍下来；而有些地方，除了用眼睛去看，用心灵去记录，我认为，在尽可能的情况下，尽量用手中精良的设备去拍摄下来，因为它们值得我们多次瞻览。
          </div>
          <div class="releaseTime">发布时间:2020-10-14</div>
        </div>
      </div>
      <div class="guideItem" @click="toDetailedStrategy">
        <div class="guideItemLt">
          <img src="../../assets/images/分类背景.jpeg" alt="" />
        </div>
        <div class="guideItemRt">
          <div class="guideName">去青海一定要看一次最美星空（附拍摄攻略）</div>
          <div class="scenicSpotName">茶卡盐湖景区</div>
          <div class="guideIntroduction">
            山一程水一程，千里迢迢来到人迹罕至的高原，就是为了看一次最美星空！有些地方，可以用手机轻描淡写地拍下来；而有些地方，除了用眼睛去看，用心灵去记录，我认为，在尽可能的情况下，尽量用手中精良的设备去拍摄下来，因为它们值得我们多次瞻览。
          </div>
          <div class="releaseTime">发布时间:2020-10-14</div>
        </div>
      </div>
      <div class="guideItem" @click="toDetailedStrategy">
        <div class="guideItemLt">
          <img src="../../assets/images/分类背景.jpeg" alt="" />
        </div>
        <div class="guideItemRt">
          <div class="guideName">去青海一定要看一次最美星空（附拍摄攻略）</div>
          <div class="scenicSpotName">茶卡盐湖景区</div>
          <div class="guideIntroduction">
            山一程水一程，千里迢迢来到人迹罕至的高原，就是为了看一次最美星空！有些地方，可以用手机轻描淡写地拍下来；而有些地方，除了用眼睛去看，用心灵去记录，我认为，在尽可能的情况下，尽量用手中精良的设备去拍摄下来，因为它们值得我们多次瞻览。
          </div>
          <div class="releaseTime">发布时间:2020-10-14</div>
        </div>
      </div>
    </div>
    <div class="currentPage">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'travelGuides',
  data () {
    return {
      currentPage: 4
    }
  },
  methods: {
    toDetailedStrategy () {
      this.$router.push('/qinghai/detailedStrategy')
    }
  }
}
</script>

<style lang='less' scoped>
.travelGuides {
  width: 1200px;
  background: #f4f4f4;
  padding-top: 27px;
  box-sizing: border-box;
  /deep/ .el-breadcrumb {
    background-color: #f4f4f4 !important;
  }
  /deep/ .el-breadcrumb__inner.is-link {
    color: #999999 !important;
    font-weight: 400;
  }
  /deep/ .el-breadcrumb__inner {
    color: #333333;
  }
  .travelGuidesList {
    width: 100%;
    margin-top: 25px;
    background-color: #fff;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    .guideItem {
      width: 100%;
      height: 258px;
      border-bottom: 1px solid #dddddd;
      padding: 30px 5px 30px 5px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .guideItemLt {
        width: 350px;
        height: 198px;
        img {
          width: 350px;
          height: 198px;
        }
      }
      .guideItemRt {
        margin-left: 30px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        .guideName {
          font-size: 20px;
          font-family: MicrosoftYaHeiSemibold;
          color: #333333;
        }
        .scenicSpotName {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #999999;
        }
        .guideIntroduction {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #333333;
        }
        .releaseTime {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #999999;
        }
      }
    }
    .guideItem:last-child {
      border: none;
    }
  }
  .currentPage {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    /deep/ .el-pagination button:disabled {
      background-color: transparent !important;
    }

    /deep/ .el-pagination .btn-next,
    .el-pagination .btn-prev {
      background-color: transparent !important;
    }
    /deep/ .el-pagination .btn-prev {
      background-color: transparent !important;
    }
    /deep/ .el-input__inner {
      background-color: transparent !important;
    }
    /deep/ li {
      background-color: transparent !important;
    }
  }
}
</style>
