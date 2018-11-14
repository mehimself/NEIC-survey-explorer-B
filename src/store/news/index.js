import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import state from './state'

const module = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  strict: !__PROD__
}

export default module
