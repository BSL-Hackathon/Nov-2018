let state = {
  currentProvider: null,
  uPort: {
    name: null,
    did: null,
    avatar: null,
    boxPub: null,
    publicEncKey: null,
    pushToken: null
  },
  web3: {
    isInjected: false,
    web3Instance: null,
    networkId: null,
    coinbase: null,
    balance: null,
    error: null
  },
  contractInstance: null,
  isUserAuthenticated: false
}
export default state
