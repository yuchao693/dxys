import axios from 'axios'
import base from './base.js'

const api = {
  getCovInfo() {
    return axios.get(base.host + base.covInfo)
  }
}

export default api;
