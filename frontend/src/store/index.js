import { createStore } from 'vuex'
import axiosClient from '../axios'
const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN')
    }
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post('/register', user).then(({ data }) => {
        commit('setUser', data.user)
        commit('setToken', data.token)
        return data
      })
    },
    getUser({ commit }) {
      return axiosClient.get('/user').then((res) => {
        console.log(res.data, 'res data set user')
        commit('setUser', res.data)
      })
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user.data = user
    },
    setToken: (state, token) => {
      state.user.token = token
      sessionStorage.setItem('TOKEN', token)
    }
  },
  modules: {}
})

export default store
