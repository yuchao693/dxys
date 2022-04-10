<template>
  <div class="dataTable">
    <van-row class="title">
      <van-col span="4" style="background: #E3E7F3;">地区</van-col>
      <van-col span="5" style="background: #f3bab0;">现存确诊</van-col>
      <van-col span="5" style="background: #e69a8d;">累计确诊</van-col>
      <van-col span="4" style="background: #b4c0d5;">死亡</van-col>
      <van-col span="4" style="background: #95db9a;">治愈</van-col>
      <van-col span="2" style="background: #E3E7F3;">疫情</van-col>
    </van-row>
    <div class="detail">
      <van-collapse v-model="activeNames" >
        <van-collapse-item
          v-for="(item, index) in data"
          :name="index"
          :is-link="false"
          :border="false"
        >
          <template #title>
            <van-row class="area">
              <van-col span="4">
                <!-- <van-icon name="play" color="#4169e2" v-if="item.subList.length!=0" />
                {{ item.xArea }} -->
                <van-row>
                  <van-col span="6">
                    <van-icon name="play" color="#4169e2" v-if="item.subList.length!=0" />
                  </van-col>
                  <van-col span="18">{{ item.xArea }}</van-col>
                </van-row>
              </van-col>
              <van-col span="5">{{ item.curConfirm | addPoint }}</van-col>
              <van-col span="5">{{ item.confirm | addPoint }}</van-col>
              <van-col span="4">{{ item.died | addPoint }}</van-col>
              <van-col span="4">{{ item.heal | addPoint }}</van-col>
              <van-col span="2">详情</van-col>
            </van-row>
          </template>
          <div class="citys" v-if="item.subList.length!=0">
            <van-row v-for="(subItem, index) in item.subList">
              <van-col span="4">{{ subItem.city }}</van-col>
              <van-col span="5">{{ subItem.curConfirm | addPoint }}</van-col>
              <van-col span="5">{{ subItem.confirm | addPoint }}</van-col>
              <van-col span="4">{{ subItem.died | addPoint }}</van-col>
              <van-col span="4">{{ subItem.heal | addPoint }}</van-col>
              <van-col span="2"></van-col>
            </van-row>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {
      activeNames: []
    }
  },
  filters: {
    addPoint(val) {
      if(val!=''){
        return parseInt(val).toLocaleString()
      }else{
        return 0
      }
    }
  },
  methods: {
    onChange() {
      console.log(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.dataTable {
  .title {
    text-align: center;
    line-height: 0.6rem;
    font-weight: bold;
    font-size: 0.14rem;
    .van-col {
      border-right: 1px solid #fff;
    }
  }
  .detail {
    /deep/ .van-cell {
      padding: 0;
      font-size: 0.14rem;
      line-height: 0.6rem;
      text-align: center;
      .area {
        > .van-col {
          background: #f7f7f7;
          border-right: 1px solid #fff;
          &:first-child {
            font-weight: bold;
          }
          &:last-child {
            color: #4169e2;
          }
        }
      }
    }
    /deep/ .van-collapse-item__content {
      padding: 0;
      .citys {
        text-align: center;
        .van-row {
          border-bottom: 1px solid #f7f7f7;
          .van-col {
            line-height: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
