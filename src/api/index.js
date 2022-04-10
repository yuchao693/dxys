import axios from 'axios'
import base from './base.js'

const api = {
  // 获取疫情数据
  getCovInfo() {
    return axios.get(base.host + base.covInfo)
  },
  // 获取中国各地区数据
  getChinaData() {
    return axios.get(base.chinaDataInfo)
  }
}

export default api;
