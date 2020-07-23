import Vue from 'vue'
import Vuex from 'vuex'
import config from './modules/config'
import user from './modules/user'
import quiz from './modules/quiz'
import customer from './modules/customer'
import notice from './modules/notice'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        config,
        quiz,
        customer,
        notice
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
})
