import {login, apiLogin, logout} from "_a/admin";

const state = {
    user: {}
}

// getters
const getters = {};

// actions
const actions = {
    loginAction({dispatch, commit}, payload) {
        return new Promise(async (resolve) => {
            try {
                const responses = await Promise.all([
                    login(payload),
                    apiLogin(payload),
                ]);
                const is_login_succeed = responses[0].status === 204;
                const is_api_login_succeed = responses[1].status === 200;
                if (is_login_succeed && is_api_login_succeed) {
                    const {data} = responses[1];
                    localStorage.setItem("access_token", data.access_token)
                    commit('SET_USER', data.user)
                    dispatch('redirect');
                }

            } catch (err) {
                resolve('E-mail or Password is incorrect.')
            }
        })
    },
    logout({dispatch,commit}, payload) {
        commit('CLEAR_USER');
        localStorage.removeItem('access_token')
        logout();
        dispatch('redirect');

    },
    redirect(){
        window.location.replace('/')
    }
}

// mutations
const mutations = {
    SET_USER(state, payload) {
        state.user = payload;
    },
    CLEAR_USER(state, payload) {
        state.user = {}
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
