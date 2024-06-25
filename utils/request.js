// axios 公共配置
// 基地址
axios.defaults.baseURL = 'https://geek.itheima.net'
// 请求拦截器
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  token && (config.headers.Authorization = `Bearer ${token}`)
  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  const result = response.data
  return result
}, function (error) {
  if (error?.response?.status === 401) {
    localStorage.clear()
    alert('用户过期，请重新登录')
    location.href = '../login/index.html'
  }
  return Promise.reject(error);
})