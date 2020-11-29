<template>
  <div class="InformationDetails">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">景区资讯</el-breadcrumb-item>
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
                <div>青海省博物馆</div>
                <div>2020-10-14</div>
            </div>
            <div class="shareBox">
                <div>分享到</div>
                <div></div>
                <div></div>
            </div>
        </div>
      </div>
      <div class="contentRt"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.InformationDetails {
  width: 1200px;
  background: #ffffff;
  /deep/ .el-breadcrumb__inner.is-link {
    color: #999999 !important;
    font-weight: 400;
  }
  /deep/ .el-breadcrumb__inner {
    color: #333333;
  }
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
      }
    }
    .contentRt {
      width: 300px;
      height: 277px;
      background: #ffffff;
      border: 1px solid #cccccc;
    }
  }
}
</style>