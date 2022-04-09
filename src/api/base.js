// 公共的请求接口
const base = {
  host: 'http://api.tianapi.com', //天行数据
  covInfo: '/ncov/index?key=9113e0927e455f55604d9e9d41c7515f', //疫情信息接口
  chinaDataInfo: 'https://yspm.api.storeapi.net/api/94/219?format=json&appid=14089&sign=5d82ee217b1a500db751585a05b8d485'
}

// 全国疫情数据
// https://yspm.api.storeapi.net/api/94/219?format=json&appid=14089&sign=5d82ee217b1a500db751585a05b8d485
// https://yspm.api.storeapi.net/api/94/221?format=json&appid=14089&city_name=武汉&sign=5d82ee217b1a500db751585a05b8d485
// 国外疫情数据
// https://yupn.api.storeapi.net/api/94/220?format=json&appid=6938&sign=687569b1fd450f3491cd6e72f82aacf7
// 全球疫情数据
// https://yupn.api.storeapi.net/api/94/222?format=json&appid=6938&sign=687569b1fd450f3491cd6e72f82aacf7

// 丁香医生
// https://ncov.dxy.cn/ncovh5/view/pneumonia?link=&share=&source=
export default base;
