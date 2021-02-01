<template>
  <div class="activityList">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="filterBox">
      <div class="dateFilter">
        <div
          :class="active === 'a' ? 'activeDateBox' : 'dateBox'"
          @click="choseDate('a')"
        >
          全部
        </div>
        <div
          :class="active === 'b' ? 'activeDateBox' : 'dateBox'"
          @click="choseDate('b')"
        >
          <div>12.03</div>
          <div class="weekDay">周一</div>
        </div>
        <div
          :class="active === 'c' ? 'activeDateBox' : 'dateBox'"
          @click="choseDate('c')"
        >
          <div>12.03</div>
          <div class="weekDay">周二</div>
        </div>
        <div
          :class="active === 'd' ? 'activeDateBox' : 'dateBox'"
          @click="choseDate('d')"
        >
          <div>12.03</div>
          <div class="weekDay">周三</div>
        </div>
        <div
          :class="active === 'e' ? 'activeDateBox' : 'dateBox'"
          @click="choseDate('e')"
        >
          <div>12.03</div>
          <div class="weekDay">周四</div>
        </div>
        <div
          :class="active === 'f' ? 'activeDateBox' : 'dateBox'"
          @click="choseDate('f')"
        >
          <div>12.03</div>
          <div class="weekDay">周五</div>
        </div>
        <div
          :class="active === 'g' ? 'activeDateBox' : 'dateBox'"
          @click="choseDate('g')"
        >
          <div>12.03</div>
          <div class="weekDay">周六</div>
        </div>
        <div
          :class="active === 'h' ? 'activeDateBox' : 'dateBox'"
          @click="choseDate('h')"
        >
          <div>12.03</div>
          <div class="weekDay">周日</div>
        </div>
        <div class="dateIcon">
          <img src="../../assets/images/日 历.png" alt="" />
        </div>
      </div>
      <div class="sorting">
        <div class="sortingName">默认排序</div>
        <div class="sortingName iconBox">
          <div class="iconText">最新发布</div>
          <div class="triangleUpAndDown">
            <div class="triangleUp"></div>
            <div class="triangleDown"></div>
          </div>
        </div>
        <div class="sortingName iconBox" @click="chooseCategory">
          <div :class="{ iconText: !category, chooseIconText: category }">
            类别筛选
          </div>
          <div
            :class="{
              'triangleDown restoreTriangle': !category,
              'rotateTriangle ': category,
            }"
          ></div>
        </div>
        <div class="sortingName iconBox" @click="chooseCity">
          <div :class="{ iconText: !city, chooseIconText: city }">市州筛选</div>
          <div
            :class="{
              'triangleDown restoreTriangle': !city,
              'rotateTriangle ': city,
            }"
          ></div>
        </div>
      </div>
      <div class="filterBoxCon" v-show="filter">
        <div class="checkBoxs">
          <el-checkbox-group v-model="checkList">
            <el-checkbox
              :label="item"
              v-for="(item, index) in checkFilter"
              :key="index"
            ></el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="submitBox"><div class="filterSubmit" @click="toFilter">确定</div></div>
      </div>
    </div>

    <div class="activityListCon">
      <div
        class="listItem"
        v-for="(item, i) in activeList"
        :key="i"
        @click="goActivityDetails"
      >
        <div class="itemLf">
          <img src="../../assets/images/分类背景.jpeg" alt="" />
        </div>
        <div class="itemRt">
          <div class="itemTop">
            <div class="activityName">唐蕃古道-七省区精品文物联展</div>
            <div class="lableBox">
              <div class="activityLable">正在进行</div>
              <div class="activityLable">展览演出</div>
            </div>
          </div>
          <div class="itemBottom">
            <div class="activityDate">活动时间：2020.12.01-2020.01.31</div>
            <div class="activityAddress">
              活动地点：青海省博物馆 | 青海省西宁市西关大街58号
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activityList',
  data () {
    return {
      active: '',
      activeList: 3,
      category: false,
      city: false,
      filter: false,
      checkList: [],
      checkFilter: [
        '西宁市',
        '海东市',
        '海北藏族自治州',
        '黄南藏族自治州',
        '海南藏族自治州',
        '果洛藏族自治州',
        '玉树藏族自治州',
        '海西蒙古族藏族自治州'
      ]
    }
  },
  methods: {
    choseDate (i) {
      this.active = i
    },
    goActivityDetails () {
      this.$router.push('/qinghai/activityDetails')
    },
    chooseCategory () {
      this.category = !this.category
      this.filter = !this.filter
    },
    chooseCity () {
      this.city = !this.city
      this.filter = !this.filter
    },
    toFilter () {
      this.filter = false
      this.city = false
      this.category = false
    }
  }
}
</script>

<style lang="less" scoped>
.activityList {
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
  .filterBox {
    width: 100%;
    background-color: #fff;
    height: 156px;
    margin-top: 25px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    // overflow: hidden;
    position: relative;
    .dateFilter {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 15px;
      border-bottom: 1px solid #dddddd;
      padding-bottom: 30px;
      box-sizing: border-box;
      .dateIcon {
        width: 32px;
        height: 32px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .activeDateBox {
        width: 110px;
        height: 68px;
        background: #369aff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        cursor: pointer;
        .weekDay {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #ffffff;
          margin-top: 4px;
        }
      }
      .dateBox {
        width: 110px;
        height: 68px;
        // background: yellow;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #333333;
        cursor: pointer;
        .weekDay {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #999999;
          margin-top: 4px;
        }
      }
    }
    .sorting {
      padding-left: 35px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-starts;
      margin-top: 15px;
      .sortingName {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #666666;
        margin-right: 50px;
        cursor: pointer;
      }
      .iconText {
        margin-right: 8px;
      }
      .chooseIconText {
        margin-right: 8px;
        color: #369aff;
      }
      .triangleUpAndDown {
        display: flex;
        height: 12px;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      .restoreTriangle {
        transition: 0.2s;
        transform-origin: center;
        transform: rotateZ(0deg);
      }
      .rotateTriangle {
        transition: 0.2s;
        transform-origin: center;
        transform: rotateZ(180deg);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid#369aff;
      }
      .triangleUp {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #a7a7a7;
      }
      .triangleDown {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid#A7A7A7;
      }
      .iconBox {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .filterBoxCon {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.03),
      0px 9px 28px 0px rgba(0, 0, 0, 0.05),
      0px 6px 16px -8px rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    position: absolute;
    top: 100%;
    z-index: 100;
    left: 0px;
    padding: 15px 55px 15px 55px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .checkBoxs {
      width: 83%;
      height: 100%;
      .el-checkbox {
        width: 150px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
      .filterSubmit {
        width: 80px;
        height: 34px;
        background: linear-gradient(270deg, #297dfa 0%, #369aff 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #ffffff;
        cursor: pointer;
      }
  }
  .activityListCon {
    width: 1200px;
    min-height: 775px;
    background: #ffffff;
    margin-top: 15px;
    margin-bottom: 95px;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    .listItem {
      width: 100%;
      height: 258px;
      border-bottom: 1px solid #dddddd;
      padding: 30px 5px 30px 5px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      .itemLf {
        width: 350px;
        height: 198px;
        img {
          width: 350px;
          height: 198px;
        }
      }
      .itemRt {
        margin-left: 30px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        .itemTop {
          .activityName {
            font-size: 20px;
            font-family: MicrosoftYaHeiSemibold;
            color: #333333;
          }
          .lableBox {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 15px;
            .activityLable {
              width: 58px;
              height: 22px;
              border-radius: 2px;
              border: 1px solid #ffb455;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              font-family: MicrosoftYaHei;
              color: #ffb455;
              margin-right: 10px;
            }
          }
        }
        .itemBottom {
          .activityDate {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #333333;
          }
          .activityAddress {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #333333;
            margin-top: 16px;
          }
        }
      }
    }
    .listItem:last-child {
      border: none;
    }
  }
}
</style>
