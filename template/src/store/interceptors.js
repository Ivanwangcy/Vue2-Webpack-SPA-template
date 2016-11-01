import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)


export default (store) => {
  Vue.http.interceptors.push((request, next) => {
    // 请求前的处理逻辑
    store.commit('loading', true)
    next((response) => {
      // 请求后的处理逻辑
      store.commit('loading', false)
      return response
    })
  })
}
