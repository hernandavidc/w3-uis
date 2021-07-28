import state from './state'
import * as mutations from './mutations'
import * as getters from './getters'

const namespaced = true

export default {
    namespaced,
    state,
    mutations,
    getters
}