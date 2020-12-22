<template>
  <div class="scenicSpotInfo">
    <div class="scenicSpotInfoCent">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>景区资讯</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="scenicSpotList">
        <div class="scenicSpotItem">
          <div class="infoImg">
            <img src="../../assets/images/banner.png" alt="" />
          </div>
          <div class="itemRt">
            <div class="infoTitle">关于青海省博物馆等景区恢复预约开放通知</div>
            <div class="infoAuthor">青海省博物馆</div>
            <div class="infoIntroduction">
              青海省博物馆于2020.10.15日恢复开放，游客可通过大美青海官方预约平台或青海省博物馆官方微信公众号进行预约参观，青海省博物馆恢复开放，游客可通过大美青海官方预约平台或青海省博物馆官方微
            </div>
            <div class="itemBottom">
              <div class="btnBox">
                <div class="scenixSpotBtn">景区</div>
                <div class="noticeBtn">通知</div>
              </div>
              <div class="releaseTime">发布时间:2020-10-14</div>
            </div>
          </div>
        </div>
        <div class="scenicSpotItem">
          <div class="infoImg">
            <img src="../../assets/images/banner.png" alt="" />
          </div>
          <div class="itemRt">
            <div class="infoTitle">关于青海省博物馆等景区恢复预约开放通知</div>
            <div class="infoAuthor">青海省博物馆</div>
            <div class="infoIntroduction">
              青海省博物馆于2020.10.15日恢复开放，游客可通过大美青海官方预约平台或青海省博物馆官方微信公众号进行预约参观，青海省博物馆恢复开放，游客可通过大美青海官方预约平台或青海省博物馆官方微
            </div>
            <div class="itemBottom">
              <div class="btnBox">
                <div class="scenixSpotBtn">景区</div>
                <div class="noticeBtn">通知</div>
              </div>
              <div class="releaseTime">发布时间:2020-10-14</div>
            </div>
          </div>
        </div>
        <div class="scenicSpotItem">
          <div class="infoImg">
            <img src="../../assets/images/banner.png" alt="" />
          </div>
          <div class="itemRt">
            <div class="infoTitle">关于青海省博物馆等景区恢复预约开放通知</div>
            <div class="infoAuthor">青海省博物馆</div>
            <div class="infoIntroduction">
              青海省博物馆于2020.10.15日恢复开放，游客可通过大美青海官方预约平台或青海省博物馆官方微信公众号进行预约参观，青海省博物馆恢复开放，游客可通过大美青海官方预约平台或青海省博物馆官方微
            </div>
            <div class="itemBottom">
              <div class="btnBox">
                <div class="scenixSpotBtn">景区</div>
                <div class="noticeBtn">通知</div>
              </div>
              <div class="releaseTime">发布时间:2020-10-14</div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
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
  </div>
</template>

<script>
export default {
  name: 'scenicSpotInfo',
  data () {
    return {
      currentPage: 4,
      bgc: true
    }
  }
}
</script>

<style lang="less" scoped>
.scenicSpotInfo {
  width: 100%;
  height: 100%;
  padding-top: 27px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  /deep/ .el-breadcrumb__inner.is-link {
    color: #999999 !important;
    font-weight: 400;
  }
  /deep/ .el-breadcrumb__inner {
    color: #333333;
  }
  .scenicSpotInfoCent {
    width: 1200px;
    .scenicSpotList {
      width: 100%;
      margin-top: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      .scenicSpotItem:hover {
        background-color: #dddddd;
      }
      .scenicSpotItem {
        width: 100%;
        background-color: #fff;
        padding: 30px 20px 30px 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #dddddd;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .infoImg {
          width: 350px;
          height: 198px;
          margin-right: 30px;
          img {
            width: 350px;
            height: 198px;
          }
        }
        .itemRt {
          height: 200px;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          justify-content: space-between;
          .infoTitle {
            font-size: 20px;
            font-family: MicrosoftYaHeiSemibold;
            color: #333333;
          }
          .infoAuthor {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #999999;
          }
          .infoIntroduction {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #333333;
          }
          .itemBottom {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .btnBox {
              display: flex;
              align-items: center;
              justify-content: center;
              .scenixSpotBtn {
                width: 50px;
                height: 26px;
                border-radius: 15px;
                border: 1px solid #cdcdcd;
                font-size: 12px;
                font-family: MicrosoftYaHei;
                color: #999999;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 10px;
              }
              .noticeBtn {
                width: 50px;
                height: 26px;
                border-radius: 15px;
                border: 1px solid #cdcdcd;
                font-size: 12px;
                font-family: MicrosoftYaHei;
                color: #999999;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
            .releaseTime {
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: #999999;
            }
          }
        }
      }
    }
    .pagination {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      margin-bottom: 85px;
    }
  }
}
</style>
