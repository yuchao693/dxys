<template>
  <div class="wuzi">
    <!-- 顶部图片 -->
    <div class="top">
      <img src="../assets/images/wuzi-logo.png" >
      <van-button round type="info" @click="back">返回疫情地图</van-button>
    </div>
    <!-- 内容 -->
    <div class="content">
      <van-row type="flex" justify="space-between" class="nav">
        <van-col span="5"
          :class="activeIndex==0?'active':''"
          data-i="0"
          @click="goto"
        >消毒剂</van-col>
        <van-col span="5"
          :class="activeIndex==1?'active':''"
          data-i="1"
          @click="goto"
        >口罩</van-col>
        <van-col span="5"
          :class="activeIndex==2?'active':''"
          data-i="2"
          @click="goto"
        >洗手液</van-col>
        <van-col span="5"
          :class="activeIndex==3?'active':''"
          data-i="3"
          @click="goto"
        >温度计</van-col>
      </van-row>
      <van-swipe class="info" :show-indicators="false" @change="onchange" ref="info">
        <van-swipe-item>
          <img src="../assets/images/xiaoduji.png"  v-show="activeIndex==0">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/kouzhao.png"  v-show="activeIndex==1">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/xishouye.png"  v-show="activeIndex==2">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/wenduji.png"  v-show="activeIndex==3">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 底部购买 -->
    <div class="buy">
      <van-button round type="info" @click="onShow">防疫物资购买<img src="../assets/images/xianliang.png" ></van-button>
    </div>
    <!-- 遮罩层 -->
    <van-overlay class="overlay" :show="show" @click="show = false">
      <div class="wrapper">
        <img src="../assets/images/buy.png" >
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      show: false
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    goto(e) {
      this.$refs.info.swipeTo(e.target.dataset.i)
    },
    onchange(index) {
      this.activeIndex = index
    },
    onShow() {
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
.wuzi {
  position: relative;
  .top {
    position: relative;
    img {
      width: 100%;
      display: block;
    }
    .van-button {
      font-size: 0.15rem;
      height: 0.5rem;
      position: absolute;
      top: 0.3rem;
      left: 0.3rem;
      background-color: rgba(0,0,0,0.3);
      border: none;
    }
  }
  .content {
    padding: 0.3rem;
    background-color: #3343ff;
    margin-bottom: 1rem;
    .nav {
      margin-bottom: 0.3rem;
      .van-col {
        text-align: center;
        background-color: #4169e2;
        height: 0.5rem;
        line-height: 0.5rem;
        color: #fff;
      }
      .active {
        background-color: #f78207;
      }
    }
    .info {
      img {
        width: 100%;
      }
    }
  }
  .buy {
    width: 100%;
    height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #3343ff;
    text-align: center;
    box-shadow: 0 -0.01rem 0.08rem 0 rgba(0,0,0,0.3);
    .van-button {
      width: 80%;
      height: 0.8rem;
      margin-top: 0.1rem;
      background-color: #f74c31;
      border: none;
      img {
        height: 0.3rem;
      }
    }
  }
  .overlay {
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      img {
        width: 5rem;
      }
    }
  }
}
</style>
