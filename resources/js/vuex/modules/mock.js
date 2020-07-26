import {getMockList} from "_a/admin";

const state = {
    mockItems: [],
    index: 0, // current index of mockItems
    type: "", // current type of quiz
    length: 30, // how many quizzes will be got. only works on mock model.
}

// getters
const getters = {};

// actions
const actions = {

    getMockItems({state, commit}, payload) {
        return new Promise(async (resolve) => {
            const {data, status} = await getMockList(payload);
            if (status === 200 && data.data.length > 0) {
                const items = data.data.map(item => ({
                    ...item,
                    marked: null, // save users' answer if it is correct.
                }))
                commit('SET_MOCK_ITEMS', items)
                resolve('finished')
            }
            resolve('finished')
        })

    }
};

// mutations
const mutations = {
    SET_MOCK_ITEMS(state, payload) {
        state.mockItems = payload
    },
    SET_INDEX(state, payload) {
        state.index = payload
    },
    SET_TYPE(state, payload) {
        state.type = payload
    },
    SET_LENGTH(state, payload) {
        state.length = payload
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
