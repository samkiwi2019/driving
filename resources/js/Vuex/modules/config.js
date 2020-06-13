import * as types from '../mutation-types'

const state = {
    isMobileBreakpoint: false,
    showMobileMenu: false,
}

// getters
const getters = {
    getIsMobileBreakpoint: state => state.isMobileBreakpoint,
    getShowMobileMenu: state => state.showMobileMenu,
}

// actions
const actions = {
    setMobileBreakpoint({commit, state}, product) {
        const isbreakpoint = window.matchMedia("(max-width: 991px )").matches;
        commit(types.ISMOBILEBREAKPOINT, isbreakpoint)
        isbreakpoint && commit(types.SHOWMOBILEMENU, isbreakpoint)
    },
    setShowMobileMenu({commit, state}, product){
        commit(types.SHOWMOBILEMENU, product)
    }
}

// mutations
const mutations = {
    [types.ISMOBILEBREAKPOINT](state, products) {
        state.isMobileBreakpoint = products
    },
    [types.SHOWMOBILEMENU](state, product){
        state.showMobileMenu = product
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
