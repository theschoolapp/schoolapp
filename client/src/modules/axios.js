import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: process.env.NODE_ENV === 'production' ? `https://${location.host}` : 'http://localhost:3000'
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default instance
