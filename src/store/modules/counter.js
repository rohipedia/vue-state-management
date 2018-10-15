import * as types from '../types'

const state = {
    counter: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return `${state.counter} Clicks`;
    }
};

const mutations = {
    [types.MUTATE_INCREMENT]: (state, payload) => {
        state.counter += payload;
    },
    [types.MUTATE_DECREMENT]: (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
    [types.INCREMENT]: ({ commit }, payload) => {
        commit(types.MUTATE_INCREMENT, payload);
    },
    [types.DECREMENT]: ({ commit }, payload) => {
        commit(types.MUTATE_DECREMENT, payload);
    },
    [types.ASYNC_INCREMENT]: ({ commit }, payload) => {
        setTimeout(() => {
            commit(types.MUTATE_INCREMENT, payload.by);
        }, payload.delay)
    },
    [types.ASYNC_DECREMENT]: ({ commit }, payload) => {
        setTimeout(() => {
            commit(types.MUTATE_DECREMENT, payload.by);
        }, payload.delay)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}