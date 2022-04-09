<template>
  <div id="china_map_box" style="width: 100%;height: 6rem;">
      <div id="china_map"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import 'echarts/map/js/china.js'
export default {
  data() {
    return {
      //echart 配制option
      options: {
        backgroundColor: '#f7f7f7',
        tooltip: {
          triggerOn: "mousemove",   //mousemove、click
          padding:8,
          borderWidth:1,
          borderColor:'#409eff',
          backgroundColor:'rgba(255,255,255,0.7)',
          textStyle:{
            color:'#000000',
            fontSize:10
          },
          formatter: function(e, t, n) {
            let data = e.data;
            let context = `
               <div>
                   <p>省份:<b style="font-size:15px;">${data.name}</b></p>
                   <p class="tooltip_style"><span class="tooltip_left">风险地区数量:</span><span class="tooltip_right">${data.value}</span></p>
               </div>
            `
            return context;
          }
        },
        visualMap: {
          orient: 'horizontal',
          show:true,
          left: 40,
          bottom: 10,
          showLabel:true,
          pieces: [
            {
              lte: 0,
              label: '0',
              color: '#fff'
            },
            {
              gte: 1,
              lt: 10,
              label: '中风险地区',
              color: '#f3bab0'
            },
            {
              gte: 10,
              label: '高风险地区',
              color: '#e0462e'
            }
          ]
        },
        geo: {
          map: "china",
          scaleLimit: {
            min: 1,
            max: 2
          },
          zoom: 1.1,
          top: 20,
          label: {
            normal: {
              show:true,
              fontSize: "8",
              color: "#333"
            }
          },
          itemStyle: {
            normal: {
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: "#fff700",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
        series: [
          {
            name: "突发事件",
            type: "map",
            geoIndex: 0,
            data:[]
          }
        ]
      },
      //echart data
      dataList: [
        { name: '北京', value: 35 },
        { name: '天津', value: 12 },
        { name: '上海', value: 0 },
        { name: '重庆', value: 0 },
        { name: '河北', value: 5 },
        { name: '河南', value: 0 },
        { name: '云南', value: 0 },
        { name: '辽宁', value: 30 },
        { name: '黑龙江', value: 8 },
        { name: '湖南', value: 0 },
        { name: '安徽', value: 0 },
        { name: '山东', value: 0 },
        { name: '新疆', value: 0 },
        { name: '江苏', value: 0 },
        { name: '浙江', value: 6 },
        { name: '江西', value: 0 },
        { name: '湖北', value: 0 },
        { name: '广西', value: 11 },
        { name: '甘肃', value: 0 },
        { name: '山西', value: 0 },
        { name: '内蒙古', value: 0 },
        { name: '陕西', value: 0 },
        { name: '吉林', value: 0 },
        { name: '福建', value: 0 },
        { name: '贵州', value: 0 },
        { name: '广东', value: 8 },
        { name: '青海', value: 0 },
        { name: '西藏', value: 0 },
        { name: '四川', value: 0 },
        { name: '宁夏', value: 0 },
        { name: '海南', value: 0 },
        { name: '台湾', value: 0 },
        { name: '香港', value: 0 },
        { name: '澳门', value: 0 }
      ]
    };
  },
  methods: {
    //初始化中国地图
    initEchartMap() {
      let mapDiv = document.getElementById('china_map');
      let myChart = echarts.init(mapDiv);
      myChart.setOption(this.options);
    },
    //修改echart配制
    setEchartOption(){
       this.options.series[0]['data'] = this.dataList;
    }
  },
  created() {
    this.setEchartOption();
  },
  mounted() {
      this.$nextTick(()=>{
          this.initEchartMap();
      })

  }
};
</script>

<style scoped>
    #china_map_box {
        height: 100%;
        position: relative;
    }
    #china_map_box #china_map{
        height: 100%;
    }
     #china_map_box .china_map_logo{
        position: absolute;
        top: 0;
        left: 0;
        width:45px;
     }
</style>
<style>
  #china_map .tooltip_style{
      line-height:1.7;
      overflow: hidden;
  }
  #china_map .tooltip_left{
      float: left;
  }
  #china_map .tooltip_right{
      float: right;
  }

</style>
