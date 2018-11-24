import { Connect } from 'uport-connect'
import { contractAddress, contractABI } from '../util/contractConstant'
const uport = new Connect('BonusTrack')

export default {
  signIn (context) {
    return new Promise((resolve, reject) => {
      uport.requestDisclosure({
        requested: ['name', 'avatar'],
        notifications: true,
        accountType: 'keypair'
      })
      uport.onResponse('disclosureReq').then(payload => {
        context.commit('SET_IS_USER_AUTHENTICATED', true)
        resolve(payload)
      })
        .catch(error => reject(error))
    })
  },

  createNewBono (context, { hashBono, baseline, price, periodoPago, tasaInteres }) {
    return new Promise((resolve, reject) => {
      const statusContract = uport.contract(contractABI).at(contractAddress)
      const reqId = 'createNewBono'
      statusContract.createNewBono(hashBono, baseline, price, periodoPago, tasaInteres, reqId)
      console.log('Bono hash: ' + hashBono)

      uport.onResponse(reqId).then(res => {
        // const txId = res.payload
        console.log(res)
        resolve(res)
      }).catch(error => reject(error))
    })
  },

  validateBono (context, bono) {
    return new Promise((resolve, reject) => {
      const statusContract = uport.contract(contractABI).at(contractAddress)
      const reqId = 'setStatus'
      statusContract.setStatus(bono.hashBono, bono.indiceRiesgo, reqId)

      uport.onResponse(reqId).then(res => {
        // const txId = res.payload
        console.log(res)
        resolve(res)
      }).catch(error => reject(error))
    })
  }

  /* validateBono (context, bono) {
    return new Promise((resolve, reject) => {
      console.log(bono.hashBono)
      console.log(bono.indiceRiesgo)
      const statusContract = uport.contract(contractABI).at(contractAddress)
      const reqId = 'setStatus'
      statusContract.setStatus(bono.hashBono, bono.indiceRiesgo, reqId)

      uport.onResponse(reqId).then(res => {
        console.log(res)
        resolve(res)
      }).catch(error => reject(error))
    })
  } */
}
