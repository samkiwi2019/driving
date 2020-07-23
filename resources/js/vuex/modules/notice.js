const state = {
    snackbar: false,
    timeout: 3000,
    text:'',
}

// getters
const getters = {
}

// actions
const actions = {
    show({commit}, paload){
        commit('SHOW_SNACKBAR', paload)
    },
    close({commit}){
        commit('CLEAR_SNACKBAR')
    },
}

// mutations
const mutations = {
    CLEAR_SNACKBAR (state) {
        state.snackbar = false
    },
    SHOW_SNACKBAR(state, paload){
        if(typeof paload === 'string'){
            state.text = paload

        }else{
            const {text, timeout} = paload
            state.timeout = timeout || 3000
            state.text = text
        }
        state.snackbar = true
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
