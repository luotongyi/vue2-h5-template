
export default {
  state: {
    testState: ''
  },
  mutations: {
    SET_TESTSTATE(state, val) {
      state.testState = val
    }
  },
  actions: {
    changeTestState({ commit }, val) {
      // 此操作是异步操作，可以发送请求等内容
      setTimeout(() => {
        commit('SET_TESTSTATE', val)
      }, 50)
    }
  }
}
