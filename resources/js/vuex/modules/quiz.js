import {getQuizList} from "_a/admin";

const state = {
    quizItems: [],
    size: 10,
    page: 0,
    type: 0, // 所有类型：0,  1-8 对应8种题库类型
    total: 0,
}

// getters
const getters = {
};

// actions
const actions = {
    getQuizList({commit}, payload){
        return new Promise(async (resolve) => {
            const {data, status} = await getQuizList(payload);
            if(status === 200){
                commit('SET_QUIZ_ITEMS', data.data.items)
                commit('SET_PAGE', data.data.page)
                commit('SET_TOTAL', data.data.total)
            }
            resolve("finished")
        })

    }
}

// mutations
const mutations = {
    SET_QUIZ_ITEMS(state, payload) {
        state.quizItems = payload;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_SIZE(state, payload) {
        state.size = payload;
    },
    SET_TOTAL(state, payload) {
        state.total = payload;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
