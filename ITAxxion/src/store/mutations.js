let mutations = {
  SET_IS_USER_AUTHENTICATED (state, isUserAuthenticated) {
    state.isUserAuthenticated = isUserAuthenticated
  },
  SET_LOGIN_PROVIDER (state, loginProvider) {
    state.currentProvider = loginProvider
  },
  SET_UPORT_DATA (state, data) {
    state.uPort = data
  }
}

export default mutations
