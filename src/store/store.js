import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});