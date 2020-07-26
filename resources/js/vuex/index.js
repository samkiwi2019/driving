import Vue from 'vue'
import Vuex from 'vuex'
import config from './modules/config'
import user from './modules/user'
import quiz from './modules/quiz'
import customer from './modules/customer'
import mock from './modules/mock'
import notice from './modules/notice'
import record from './modules/record'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        config,
        quiz,
        customer,
        notice,
        mock,
        record
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
})
