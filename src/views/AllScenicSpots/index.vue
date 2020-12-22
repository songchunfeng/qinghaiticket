<template>
  <div class="AllScenicSpots">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>全部景区</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="navBox">
      <div class="classifyNameBox">
        <div
          :class="{
            classifyName: currentNav != '1',
            cutClassifyName: currentNav == '1',
          }"
          @click="handleClassify('1')"
        >
          全部景区
        </div>
        <div
          :class="{
            classifyName: currentNav != '2',
            cutClassifyName: currentNav == '2',
          }"
          @click="handleClassify('2')"
        >
          A级景区
        </div>
        <div
          :class="{
            classifyName: currentNav != '3',
            cutClassifyName: currentNav == '3',
          }"
          @click="handleClassify('3')"
        >
          人文民俗
        </div>
        <div
          :class="{
            classifyName: currentNav != '4',
            cutClassifyName: currentNav == '4',
          }"
          @click="handleClassify('4')"
        >
          自然风光
        </div>
        <div
          :class="{
            classifyName: currentNav != '5',
            cutClassifyName: currentNav == '5',
          }"
          @click="handleClassify('5')"
        >
          红色旅游
        </div>
        <div
          :class="{
            classifyName: currentNav != '6',
            cutClassifyName: currentNav == '6',
          }"
          @click="handleClassify('6')"
        >
          其他
        </div>
        <div
          :class="{
            classifyName: currentNav != '7',
            cutClassifyName: currentNav == '7',
            hot: true,
          }"
          @click="handleClassify('7')"
        >
          景区套票
          <div class="hotIMG">
            <img src="../../assets/images/火.png" alt="" />
          </div>
        </div>
      </div>
      <div class="navLine"></div>
      <div class="sortBox">
        <div
          :class="{
            sortName: currentSort != 'a',
            cursortName: currentSort == 'a',
          }"
          @click="handleSort('a')"
        >
          默认排序
        </div>
        <div
          :class="{
            sortName: currentSort != 'b',
            cursortName: currentSort == 'b',
          }"
          @click="handleSort('b')"
        >
          价格升序
          <div class="priceImg">
            <img src="../../assets/images/排序.png" alt="" />
          </div>
        </div>
        <div
          :class="{
            sortName: currentSort != 'c',
            cursortName: currentSort == 'c',
          }"
          @click="handleSort('c')"
        >
          销量优先
        </div>
      </div>
    </div>
    <div class="scenicSpotList">
      <div class="scenicSpotItem">
        <div class="itemLt">
          <img src="../../assets/images/分类背景.jpeg" alt="" />
        </div>
        <div class="itemRt">
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
      <div class="scenicSpotItem">
        <div class="itemLt">
          <img src="../../assets/images/分类背景.jpeg" alt="" />
        </div>
        <div class="itemRt">
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
                <span style="font-size: 18px">50</span>
              </div>
              <div class="purchaseBtn">购买</div>
            </div>
          </div>
        </div>
      </div>
      <div class="scenicSpotItem">
        <div class="itemLt">
          <img src="../../assets/images/分类背景.jpeg" alt="" />
        </div>
        <div class="itemRt">
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
                <span style="font-size: 18px">50</span>
              </div>
              <div class="purchaseBtn">购买</div>
            </div>
          </div>
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
  name: 'AllScenicSpots',
  data () {
    return {
      currentNav: '1',
      currentSort: 'a',
      currentPage: 1
    }
  },
  methods: {
    handleClassify (cut) {
      this.currentNav = cut
    },
    handleSort (sort) {
      this.currentSort = sort
    }
  }
}
</script>

<style lang="less" scoped>
.AllScenicSpots {
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
  .navBox {
    width: 100%;
    height: 130px;
    background: #ffffff;
    margin-top: 25px;
    box-sizing: border-box;
    padding: 18px 20px 18px 20px;
    .classifyNameBox {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .cutClassifyName {
        width: 100px;
        height: 38px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        cursor: pointer;
        background-color: #243979;
      }
      .classifyName {
        width: 100px;
        height: 38px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #333333;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        cursor: pointer;
      }
      .hot {
        display: flex;
        align-items: center;
        justify-content: center;
        .hotIMG {
          width: 16px;
          height: 16px;
          margin-left: 3px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .navLine {
      width: 100%;
      height: 1px;
      background-color: #dddddd;
      margin-top: 20px;
    }
    .sortBox {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 15px 18px 0 18px;
      box-sizing: border-box;
      .cursortName {
        color: #243979;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 50px;
        cursor: pointer;
      }
      .sortName {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #666666;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 50px;
        cursor: pointer;
      }
      .priceImg {
        width: 8px;
        margin-left: 4px;
        img {
          width: 100%;
        }
      }
    }
  }
  .scenicSpotList {
    width: 100%;
    margin-bottom: ;
    .scenicSpotItem {
      width: 100%;
      height: 170px;
      background: #ffffff;
      margin-top: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      box-sizing: border-box;
      .itemLt {
        width: 230px;
        height: 130px;
        img {
          width: 230px;
          height: 130px;
        }
      }
      .itemRt {
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
  .currentPage {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    /deep/ .el-pagination button:disabled {
      background-color: transparent!important;
    }

    /deep/ .el-pagination .btn-next, .el-pagination .btn-prev {
      background-color: transparent!important;
    }
    /deep/ .el-input__inner {
      background-color: transparent!important;
    }
    /deep/ li {
      background-color: transparent!important;
    }
  }
}
</style>
