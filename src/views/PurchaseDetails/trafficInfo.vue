<template>
  <div class="trafficInfo">
    <div class="primaryTitle">
      <div class="iconBox">
        <img src="../../assets/images/文章.png" alt="" />
      </div>
      <div class="titleText">交通指南</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trafficInfo'
}
</script>

<style lang="less">
.trafficInfo {
  width: 100%;
  margin-top: 24px;
  .primaryTitle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .iconBox {
      width: 28px;
      height: 28px;
      background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 16px;
        height: 16px;
      }
    }
    .titleText {
      font-size: 14px;
      font-family: MicrosoftYaHeiSemibold;
      color: #000000;
      margin-left: 8px;
    }
  }
}
</style>
