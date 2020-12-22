<template>
  <div class="InformationDetails">
    <div class="InformationDetailsCent">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/qinghai/scenicSpotInfo' }"
          >景区资讯</el-breadcrumb-item
        >
        <el-breadcrumb-item
          >关于青海省博物馆等景区恢复预约开放的通知</el-breadcrumb-item
        >
      </el-breadcrumb>
      <div class="infoContentBox">
        <div class="contentLf">
          <div class="infoTitle">关于青海省博物馆等景区恢复预约开放通知</div>
          <div class="line"></div>
          <div class="timeAngShare">
            <div class="timeBox">
              <div class="authorName">青海省博物馆</div>
              <div class="releaseTime">2020-10-14</div>
            </div>
            <div class="shareBox">
              <div class="shareTo">分享到</div>
              <div class="weChatLogo">
                <img src="../../assets/images/微信咨询.png" alt="" />
              </div>
              <div class="weiboLogo">
                <img src="../../assets/images/微博咨询.png" alt="" />
              </div>
            </div>
          </div>
          <div class="detailedInfo">
            尊敬的观众、市民：
            结合青海省当前疫情防控形势，在全面落实疫情防控措施的前提下，青海省博物馆自2020年3月19日起恢复对外开放。为切实做好疫情防控与正常参观工作，相关事项公告如下：
            1、开馆时间为每周二至周日10：00—16:00（15：30停止入馆）；每周一闭馆（法定节假日除外）。
            2、观众须提前通过大美青海官方预约平台或微信公众号（青海省博物馆）或电话（0971-6117732）预约参观。
            3、每日参观人数不超过200人，实行错时、分批参观。体验项目暂不开放，暂时不提供寄存服务。
            4、入馆前须出示本人身份证（儿童须家长陪同），网上预约者须同时出示预约二维码
            5、入馆时，须进行安检和体温检测，扫描馆内“健康码”，自填体温登记，完成后方可入内。凡有发热（体温超过37.3℃）、咳嗽、胸闷等症状的观众，谢绝参观。
            6、观众须加强个人防护，全程佩戴口罩，在馆内不得摘除口罩。废弃口罩等垃圾，请投入指定垃圾箱内
            7、参观过程中主动与他人保持1.5米以上距离。建议参观时间控制在2小时以内，以免造成人员聚集。
            8、进馆后如遇身体不适等异常情况，请及时与馆方联系：0971-6117732。
            相关信息变动更新，请关注青海省博物馆微信公众号及门前公示牌。
            我馆将全力落实疫情防控工作，保障疫情防控期间对外开放安全、有序，也期待全体观众、市民和我们一起做好防控工作，遵守规定，文明参观。
          </div>
        </div>
        <div class="contentRt">
          <div class="contentRtTitle">更多资讯</div>
          <div class="newsBriefBox">
            <div class="newsBriefItem">
              <div class="newsBriefItemLt">
                <img src="../../assets/images/分类背景.jpeg" alt="" />
              </div>
              <div class="newsBriefItemRt">
                大美青海官方售票平台推出多景区年卡
              </div>
            </div>
            <div class="newsBriefItem">
              <div class="newsBriefItemLt">
                <img src="../../assets/images/分类背景.jpeg" alt="" />
              </div>
              <div class="newsBriefItemRt">暂停青海省博物馆延迟闭关公告</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.InformationDetails {
  width: 100%;
  height: 100%;
  padding-top: 27px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  /deep/ .el-breadcrumb__inner.is-link {
    color: #999999 !important;
    font-weight: 400;
  }
  /deep/ .el-breadcrumb__inner {
    color: #333333;
  }
  .InformationDetailsCent {
    width: 1200px;
    .infoContentBox {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 40px;
      .contentLf {
        width: 815px;
        margin-right: 50px;
        .infoTitle {
          font-size: 30px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: #333333;
          letter-spacing: 1px;
        }
        .line {
          width: 814px;
          height: 1px;
          background: #dddddd;
          margin-top: 20px;
        }
        .timeAngShare {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
          .timeBox {
            display: flex;
            align-items: center;
            justify-content: center;
            .authorName {
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: #999999;
            }
            .releaseTime {
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: #999999;
              margin-left: 12px;
            }
          }
          .shareBox {
            display: flex;
            align-items: center;
            justify-content: center;
            .shareTo {
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: #999999;
            }
            .weChatLogo {
              width: 17px;
              height: 17px;
              margin-left: 11px;
              margin-right: 11px;
              img {
                width: 100%;
              }
            }
            .weiboLogo {
              width: 17px;
              height: 17px;
              img {
                width: 100%;
              }
            }
          }
        }
        .detailedInfo {
          margin-top: 29px;
        }
      }
      .contentRt {
        width: 300px;
        height: 277px;
        background: #ffffff;
        border: 1px solid #cccccc;
        .contentRtTitle {
          width: 100%;
          height: 61px;
          border-bottom: 1px solid #dddddd;
          padding-left: 20px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 16px;
          font-family: MicrosoftYaHeiSemibold;
          color: #000000;
        }
        .newsBriefBox {
          width: 100%;
          height: 215px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 30px 20px 30px 20px;
          box-sizing: border-box;
          .newsBriefItem {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .newsBriefItemLt {
              width: 110px;
              height: 62px;
              margin-right: 15px;
              img {
                width: 110px;
                height: 62px;
              }
            }
            .newsBriefItemRt {
              font-size: 16px;
              font-family: MicrosoftYaHei;
              color: #333333;
            }
          }
        }
      }
    }
  }
}
</style>
