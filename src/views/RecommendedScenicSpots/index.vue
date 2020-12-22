<template>
  <div class="RecommendedScenicSpots">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>推荐景区</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="recommendList">
      <div class="recommendItem">
        <div class="ranking">1</div>
        <div class="recommendItemLt">
          <img src="../../assets/images/分类背景.jpeg" alt="" />
        </div>
        <div class="recommendItemRt">
          <div class="scenicSpotTitle">
            <div class="scenicSpotName">二郎剑景区</div>
            <div class="TodaySales">今日已售：24501件</div>
          </div>
          <div class="activity">
            <div class="activityTitle">景区活动：</div>
            <div class="activityInfo">青海湖多景区套票</div>
          </div>
          <div class="tagAndBtn">
            <div class="tagName">自然风光</div>
            <div class="BtnBox">
              <div class="purchasePrice">
                ￥<span style="font-size: 18px">50</span>起
              </div>
              <div class="purchaseBtn">购买</div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommendItem">
        <div class="ranking">2</div>
        <div class="recommendItemLt">
          <img src="../../assets/images/分类背景.jpeg" alt="" />
        </div>
        <div class="recommendItemRt">
          <div class="scenicSpotTitle">
            <div class="scenicSpotName">二郎剑景区</div>
            <div class="TodaySales">今日已售：24501件</div>
          </div>
          <div class="activity">
            <div class="activityTitle">景区活动：</div>
            <div class="activityInfo">青海湖多景区套票</div>
          </div>
          <div class="tagAndBtn">
            <div class="tagName">自然风光</div>
            <div class="BtnBox">
              <div class="purchasePrice">
                ￥<span style="font-size: 18px">50</span>起
              </div>
              <div class="purchaseBtn">购买</div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommendItem">
        <div class="ranking">3</div>
        <div class="recommendItemLt">
          <img src="../../assets/images/分类背景.jpeg" alt="" />
        </div>
        <div class="recommendItemRt">
          <div class="scenicSpotTitle">
            <div class="scenicSpotName">二郎剑景区</div>
            <div class="TodaySales">今日已售：24501件</div>
          </div>
          <div class="activity">
            <div class="activityTitle">景区活动：</div>
            <div class="activityInfo">青海湖多景区套票</div>
          </div>
          <div class="tagAndBtn">
            <div class="tagName">自然风光</div>
            <div class="BtnBox">
              <div class="purchasePrice">
                ￥<span style="font-size: 18px">50</span>起
              </div>
              <div class="purchaseBtn">购买</div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommendItem">
        <div class="ranking">4</div>
        <div class="recommendItemLt">
          <img src="../../assets/images/分类背景.jpeg" alt="" />
        </div>
        <div class="recommendItemRt">
          <div class="scenicSpotTitle">
            <div class="scenicSpotName">二郎剑景区</div>
            <div class="TodaySales">今日已售：24501件</div>
          </div>
          <div class="activity">
            <div class="activityTitle">景区活动：</div>
            <div class="activityInfo">青海湖多景区套票</div>
          </div>
          <div class="tagAndBtn">
            <div class="tagName">自然风光</div>
            <div class="BtnBox">
              <div class="purchasePrice">
                ￥<span style="font-size: 18px">50</span>起
              </div>
              <div class="purchaseBtn">购买</div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommendItem">
        <div class="ranking">5</div>
        <div class="recommendItemLt">
          <img src="../../assets/images/分类背景.jpeg" alt="" />
        </div>
        <div class="recommendItemRt">
          <div class="scenicSpotTitle">
            <div class="scenicSpotName">二郎剑景区</div>
            <div class="TodaySales">今日已售：24501件</div>
          </div>
          <div class="activity">
            <div class="activityTitle">景区活动：</div>
            <div class="activityInfo">青海湖多景区套票</div>
          </div>
          <div class="tagAndBtn">
            <div class="tagName">自然风光</div>
            <div class="BtnBox">
              <div class="purchasePrice">
                ￥<span style="font-size: 18px">50</span>起
              </div>
              <div class="purchaseBtn">购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendedScenicSpots'
}
</script>

<style lang="less" scoped>
.RecommendedScenicSpots {
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
  .recommendList {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 9px;
    margin-bottom: 49px;
    .recommendItem {
      width: 1200px;
      height: 170px;
      background: #ffffff;
      position: relative;
      margin-top: 16px;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .ranking {
        width: 44px;
        height: 44px;
        background: url("../../assets/images/标签.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        font-size: 20px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #ffffff;
        position: absolute;
        right: 20px;
        top: 0;
      }
      .recommendItemLt {
        width: 230px;
        height: 130px;
        img {
          width: 230px;
          height: 130px;
        }
      }
      .recommendItemRt {
        height: 100%;
        width: 100%;
        margin-left: 25px;
        .scenicSpotTitle {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .scenicSpotName {
            font-size: 20px;
            font-family: MicrosoftYaHeiSemibold;
            color: #333333;
            margin-right: 5px;
          }
          .TodaySales {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #999999;
          }
        }
        .activity {
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .activityTitle {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #333333;
          }
          .activityInfo {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #243979;
          }
        }
        .tagAndBtn {
          width: 100%;
          margin-top: 39px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .tagName {
            width: 74px;
            height: 26px;
            border-radius: 15px;
            border: 1px solid #cdcdcd;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: #999999;
          }
          .BtnBox {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .purchasePrice {
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: #243979;
              margin-right: 16px;
            }
            .purchaseBtn {
              width: 80px;
              height: 34px;
              background: #243979;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>
