import {getCustomers, register, updateUser, deleteUserById} from "_a/admin";

const state = {
    customerItems: [],
    size: 10,
    page: 0,
    total: 0,
}

// getters
const getters = {
};

// actions
const actions = {
    addCustomer({state,commit, dispatch}, payload){
        return new Promise(async (resolve) => {
            const {data, status} =  await register(payload);
            if(status === 200){
                resolve('succeed')
            }
        })

    },
    getCustomerList({commit}, payload){
        return new Promise(async (resolve) => {
            const {data, status} = await getCustomers(payload);
            if(status === 200){
                commit('SET_CUSTOMER_ITEMS', data.data.items)
                commit('SET_PAGE', data.data.page)
                commit('SET_TOTAL', data.data.total)
            }
            resolve("finished")
        })
    },
   updateCustomerById({commit}, payload){
       return new Promise(async (resolve) => {
           const {data, status} = await updateUser(payload);
           if(status === 200){
               resolve(data)
           }
       })
    },
   deleteCustomerById({commit}, id){
       return new Promise(async (resolve) => {
           const {data, status} = await deleteUserById(id);
           if(status === 200){
               resolve(data)
           }
       })
    }
}

// mutations
const mutations = {
    SET_CUSTOMER_ITEMS(state, payload) {
        state.customerItems = payload;
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
