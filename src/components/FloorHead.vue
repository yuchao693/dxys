<template>
  <div class="floorHead">
    <van-row>
      <van-col span="6" :class="activeIndex == 1 ? 'active' : ''">地区风险</van-col>
      <van-col span="6" :class="activeIndex == 2 ? 'active' : ''">国内数据</van-col>
      <van-col span="6" :class="activeIndex == 3 ? 'active' : ''">全球数据</van-col>
      <van-col span="6" :class="activeIndex == 4 ? 'active' : ''">新冠疫苗</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: Number
  }
}
</script>

<style lang="scss" scoped>
.floorHead {
  padding-top: 0.3rem;
  background-color: #f7f7f7;
  text-align: center;
  .van-row {
    height: 0.8rem;
    line-height: 0.8rem;
    background-color: #e6edff;
    font-size: 0.3rem;
    color: #333;
    border-radius: 0.3rem 0.3rem 0 0;
  }
  .van-col.active {
    background-color: #fff;
    color: #4169f2;
    border-radius: 0.3rem 0.3rem 0 0;
  }
}
</style>
