import {login, register, logout, getUser} from "_a/admin";
import router from '../../routes'

const state = {
    user: {}
}

// getters
const getters = {
    isLogin: state => Object.keys(state.user).length > 0
};

// actions
const actions = {
    loginAction({dispatch, commit}, payload) {
        return new Promise(async (resolve) => {
            try {
                const res = await login(payload);

                if (res.status === 200) {
                    const {data} = res;
                    localStorage.setItem("access_token", data.access_token);
                    commit('SET_USER', data.user)
                    router.push({path: '/'})
                } else {
                    resolve(data.message)
                }
            } catch (err) {
                resolve(err.data.message)
            }
        })
    },
    logoutAction({dispatch, commit}, payload) {
        commit('CLEAR_USER');
        localStorage.removeItem('access_token')
        logout();
        if (window.location.pathname !== '/') {
            router.push({path: '/'})
        }
    },
    async getUserAction({commit}, route) {
        if (route.meta.requiresAuth && !localStorage.getItem('access_token')) {
            return router.push({path: '/login'})
        }
        if (localStorage.getItem('access_token')) {
            try{
                const {data,status} = await getUser();
                if(status === 200){
                    commit("SET_USER", data)
                }else{
                    router.push({path: '/login'})
                }
            }catch(err){
                const {status} = err
                if(status === 401){
                    localStorage.removeItem('access_token')
                    commit("CLEAR_USER")
                }
            }
        }
    },
    registerAction({commit}, payload) {
        return new Promise((async resolve => {
            try {
                const {data, status} = await register(payload);
                if (status === 200) {
                    commit('SET_USER', data.user);
                    localStorage.setItem("access_token", data.access_token)
                    router.push({path: '/'})
                } else {
                    resolve(data.message)
                }
            } catch (err) {
                resolve(err.data.message)
            }
        }))
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
