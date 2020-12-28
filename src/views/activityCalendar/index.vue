<template>
  <div class="activityCalendar">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动日历</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="recommendBox">
        <div class="recommendTop">
            <div>
                <img src="../assets/images/推荐活动.png" alt="">
            </div>
            <div></div>
        </div>
        <div class="recommendBottom">

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activityCalendar'
}
</script>

<style lang="less" scoped>
.activityCalendar {
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
  .recommendBox {
      width: 100%;
      height: 480px;
      margin-top: 25px;
  }
}
</style>
