import {getRecords, createRecord, deleteRecord} from "_a/admin";

const state = {
    recordItems: [],
    size: 10,
    page: 1,
    total: 0,
}

// getters
const getters = {
};

// actions
const actions = {
    createRecordItem({commit}, payload){
        return new Promise(async (resolve) => {
            const {data, status} =  await createRecord(payload);
            if(status === 200){
                resolve(data)
            }
        })
    },
    getRecordItems({commit}, payload){
        return new Promise(async (resolve) => {
            const {data, status} = await getRecords(payload);
            if(status === 200){
                commit('SET_RECORD_ITEMS', data.data.items)
                commit('SET_PAGE', data.data.page)
                commit('SET_TOTAL', data.data.total)
            }
            resolve("finished")
        })
    },
    deleteRecordById({commit}, id){
        return new Promise(async (resolve) => {
            const {data, status} = await deleteRecord(id);
            if(status === 200){
                resolve(data)
            }
        })
    }
}

// mutations
const mutations = {
    SET_RECORD_ITEMS(state, payload) {
        state.recordItems = payload;
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
