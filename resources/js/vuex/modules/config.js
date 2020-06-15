const state = {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
    SET_BAR_IMAGE (state, payload) {
        state.barImage = payload
    },
    SET_DRAWER (state, payload) {
        state.drawer = payload
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
