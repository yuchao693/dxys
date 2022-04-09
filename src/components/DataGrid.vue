<template>
  <div class="dataGrid">
    <van-grid :border="true" :column-num="data.length/2">
      <van-grid-item v-for="(item,index) in data">
        <div class="compare">较昨日<span :class="'color'+index">{{ item.incr | compare }}</span></div>
        <div class="count" :class="'color'+index">{{ item.count | addPoint }}</div>
        <div class="type">{{ item.type }}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  filters: {
    compare(val) {
      if(val>0){
        return '+'+val.toLocaleString()
      }else if(val==0) {
        return '无变化'
      }else {
        return val.toLocaleString()
      }
    },
    addPoint(val) {
      return val.toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
.dataGrid {
  border-radius: 0.2rem;
  overflow: hidden;
  box-shadow: 0 0 0.1rem 0.02rem #ddd;
  .color0 {
    color: #f74c31
  }
  .color1 {
    color: #f78207
  }
  .color2 {
    color: #a25a4e
  }
  .color3 {
    color: #ae212c
  }
  .color4 {
    color: #5d7092
  }
  .color5 {
    color: #28b7a3
  }
  .compare {
    color: #777;
    margin-bottom: 0.1rem;
  }
  .count {
    font-size: 0.4rem;
    font-weight: bold;
    margin-bottom: 0.1rem;
  }
}
</style>
