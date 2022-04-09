<template>
  <div class="card">
    <div class="img" v-if="info.imgName!=''">
      <img :src="require('../assets/images/'+info.imgName)" >
    </div>
    <div class="content">
      <div class="title">{{ info.title }}</div>
      <div class="desc">{{ info.desc }}</div>
      <div class="detail">查看详情</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  padding: 0.3rem;
  min-height: 2rem;
  border-radius: 0.2rem;
  overflow: hidden;
  box-shadow: 0 0 0.1rem 0.02rem #ddd;
  position: relative;
  img {
    width: 2rem;
    margin-right: 0.3rem;
    border-radius: 0.2rem;
  }
  .title {
    font-size: 0.35rem;
    margin-bottom: 0.1rem;
  }
  .desc {
    font-size: 0.15rem;
    color: #777;
    line-height: 0.3rem;
  }
  .detail {
    position: absolute;
    right: 0.3rem;
    bottom: 0.3rem;
    color: #4169e2;
  }
}
</style>
