import Vue from 'vue'
import Vuex from 'vuex'
import config from './modules/config'
import user from './modules/user'
import quiz from './modules/quiz'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        config,
        quiz
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
})
