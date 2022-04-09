<template>
  <div class="home">
    <!-- 顶部图片 -->
    <div class="top">
      <img src="../assets/images/top.png" >
      <div class="count">{{ totalCount | addPoint }} 人次已浏览</div>
    </div>
    <!-- 热点新闻 -->
    <div class="hot">
      <van-row type="flex" justify="space-between" class="title">
        <van-col span="6" class="hotImg">
          <img src="../assets/images/hot-logo.png" >
        </van-col>
        <van-col span="6" class="more">
          查看更多
          <img src="../assets/images/arrow-blue.png" >
        </van-col>
      </van-row>
      <div class="hotNews">
        <van-row v-for="(item, index) in hotNews" type="flex" justify="space-between">
          <van-col span="22">
            <span class="new">最新</span>
            {{ item.title }}
          </van-col>
          <van-col span="2" class="more">
            <img src="../assets/images/arrow-gray.png" >
          </van-col>
        </van-row>
      </div>
    </div>
    <van-divider />
    <!-- 功能导航 -->
    <div class="nav">
      <van-row>
        <van-col span="6">
          <img src="../assets/images/1.png" >
          <div>问医生</div>
        </van-col>
        <van-col span="6">
          <img src="../assets/images/2.png" >
          <div>核酸检测</div>
          <img src="../assets/images/hot.png" class="hotimg">
        </van-col>
        <van-col span="6">
          <img src="../assets/images/3.png" >
          <div>防疫物资</div>
        </van-col>
        <van-col span="6">
          <img src="../assets/images/4.png" >
          <div>出行政策</div>
        </van-col>
      </van-row>
    </div>
    <!-- 楼层导航 -->
    <floor-head :activeIndex="1"></floor-head>
    <!-- 国内疫情地图 -->
    <div class="chinaMap">
      <div class="title">国内疫情地图</div>
      <china-map></china-map>
    </div>
    <floor-head :activeIndex="2"></floor-head>
    <!-- 国内疫情数据 -->
    <div class="chinaData">
      <p class="time">截至北京时间 {{ modifyTime | time }}</p>
      <data-grid :data="chinaDataCount"></data-grid>
    </div>
    <floor-head :activeIndex="3"></floor-head>
    <!-- 全球疫情数据 -->
    <div class="globalData">
      <p class="time">截至北京时间 {{ modifyTime | time }}</p>
      <data-grid :data="globalDataCount"></data-grid>
    </div>
    <!-- 疫苗问答 -->
    <floor-head :activeIndex="4"></floor-head>
    <ul class="question">
    	<li v-for="(item, index) in list">
        <Card :info="item"></Card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../api/index.js'
import FloorHead from '../components/FloorHead.vue'
import ChinaMap from '../components/ChinaMap.vue'
import DataGrid from '../components/DataGrid.vue'
import Card from '../components/Card.vue'
export default {
  components: {
    FloorHead,
    ChinaMap,
    DataGrid,
    Card
  },
  data () {
    return {
      totalCount: 4677767419, //总浏览人数
      hotNews: [], //热点新闻
      modifyTime: 0, //修改时间
      chinaDataCount: [], //中国数据统计
      globalDataCount: [], //全球数据统计
      //信息列表
      list: [
        {
          imgName: '',
          title: '新冠病毒疫苗是一种什么药？',
          desc: '接种后可刺激人体产生针对新型冠状病毒（2019-nCoV）的抗体，从而为受种者提供免疫保护，抵御新型冠状病毒感染人体或导致发病。'
        },
        {
          imgName: '41.jpg',
          title: '所有人都能接种吗？',
          desc: '接种新冠病毒疫苗的效果如何？保护期有多久？可以和其他疫苗一起接种吗？'
        },
        {
          imgName: '42.jpg',
          title: '新冠疫苗分几种？',
          desc: '不同疫苗种类的优缺点是什么？如何进行选择？'
        },
        {
          imgName: '43.jpg',
          title: '新冠疫苗接种方法',
          desc: '新冠病毒疫苗接种频率？剂次？每次间隔多久？'
        },
        {
          imgName: '44.jpg',
          title: '疫苗不良反应',
          desc: '接种新冠病毒疫苗可能出现哪些不良反应？如何处理？'
        },
        {
          imgName: '45.jpg',
          title: '紧急上市的研发流程',
          desc: '国内疫苗的研发和上市进度怎么判断？'
        }
      ]
    }
  },
  filters: {
    addPoint(val) {
      return val.toLocaleString()
    },
    time(val) {
      return new Date(val).toLocaleString()
    }
  },
  created() {
    api.getCovInfo()
      .then(res => {
        console.log(res)
        let data = res.data.newslist[0]
        console.log(data)
        // 热点新闻
        this.hotNews = data.news
        let desc = data.desc
        // 修改时间
        this.modifyTime = desc.modifyTime
        // 中国数据统计
        this.chinaDataCount = [
          {
            type: '现存确诊',
            incr: desc.currentConfirmedIncr,
            count: desc.currentConfirmedCount
          },
          {
            type: '境外输入',
            incr: desc.suspectedIncr,
            count: desc.suspectedCount
          },
          {
            type: '现存无症状',
            incr: desc.seriousIncr,
            count: desc.seriousCount
          },
          {
            type: '累计确诊',
            incr: desc.confirmedIncr,
            count: desc.confirmedCount
          },
          {
            type: '累计死亡',
            incr: desc.deadIncr,
            count: desc.deadCount
          },
          {
            type: '累计治愈',
            incr: desc.curedIncr,
            count: desc.curedCount
          }
        ],
        //全球数据统计
        this.globalDataCount = [
          {
            type: '现存确诊',
            incr: desc.globalStatistics.currentConfirmedIncr,
            count: desc.globalStatistics.currentConfirmedCount
          },
          {
            type: '累计确诊',
            incr: desc.globalStatistics.confirmedIncr,
            count: desc.globalStatistics.confirmedCount
          },
          {
            type: '累计死亡',
            incr: desc.globalStatistics.deadIncr,
            count: desc.globalStatistics.deadCount
          },
          {
            type: '累计治愈',
            incr: desc.globalStatistics.curedIncr,
            count: desc.globalStatistics.curedCount
          }
        ]
      })
  }
}
</script>

<style lang="scss" scoped>
// 标题蓝色小块
@mixin title {
  border-left: solid 0.08rem #4169e2;
  padding-left: 0.1rem;
}
// 顶部
.top {
  position: relative;
  img {
    width: 100%;
  }
  .count {
    position: absolute;
    left: 0.5rem;
    bottom: 0.3rem;
    color: #fff;
  }
}
// 热点新闻
.hot {
  padding: 0.3rem;
  .title {
    height: 0.5rem;
    line-height: 0.5rem;
    .hotImg {
      height: 0.5rem;
      @include title;
      img {
        height: 0.5rem;
      }
    }
    .more {
      height: 0.5rem;
      color: #4169e2;
      text-align: right;
      img {
        height: 0.25rem;
      }
    }
  }
  .hotNews {
    .van-row {
      margin-top: 0.2rem;
      font-size: 0.3rem;
      color: #1a1a1a;
      .van-col {
        line-height: 0.5rem;
        .new {
          background-color: #f74c31;
          color: #fff;
          padding: 0.05rem;
        }
      }
      .more {
        text-align: right;
        img {
          width: 0.25rem;
        }
      }
    }
  }
}
// 功能导航
.nav {
  padding: 0.3rem;
  text-align: center;
  .van-col {
    position: relative;
    img {
      width: 1rem;
    }
    .hotimg {
      width: 0.6rem;
      position: absolute;
      top: 0;
      right: 0.1rem;
    }
  }
}
// 楼层导航
// 国内疫情地图
.chinaMap {
  .title {
    margin: 0.3rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.3rem;
    @include title;
  }
}
//国内疫情数据
.chinaData {
  padding: 0.3rem;
  .time {
    color: #999;
    margin-bottom: 0.3rem;
  }
}
//全球疫情数据
.globalData {
  padding: 0.3rem;
  .time {
    color: #999;
    margin-bottom: 0.3rem;
  }
}
// 疫苗问答
.question {
  padding: 0.3rem;
  li {
    margin-bottom: 0.3rem;
  }
  li:last-child {
    margin-bottom: 0;
  }
}
</style>
