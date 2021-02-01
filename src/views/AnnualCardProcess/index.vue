<template>
  <div class="AnnualCardProcess">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>年卡办理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-container class="container">
      <el-aside width="300px">
        <div class="cardImg">
          <img src="../../assets/images/年卡.png" alt="" />
        </div>
        <el-menu

          text-color="#333333"
          :default-active="$route.path"
          active-text-color="#369AFF"
          router
        >
          <el-menu-item index="/qinghai/AnnualCardProcess/openCardInformation">
            <span slot="title">新卡开办</span>
          </el-menu-item>
          <el-menu-item index="/qinghai/AnnualCardProcess/queryRenewal">
            <span slot="title">查询续费</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="mainPart">
        <router-view></router-view>
        </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'AnnualCardProcess'
}
</script>

<style lang='less' scoped>
.AnnualCardProcess {
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
  .container {
    margin-top: 25px;
    margin-bottom: 50px;
    .cardImg {
      width: 300px;
      height: 166px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .el-menu-item.is-active {
      background-color: #dfefff;
      border-right: 6px solid #369aff;
    }
    /deep/ .el-main {
      padding: 0px!important;
    }
    .mainPart {
      margin-left: 20px;
    }
  }
}
</style>
