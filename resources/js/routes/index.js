import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/admin',
            redirect: {path: '/admin/dashboard'},
            component: () => import("../views/admin/components/Layout"),
            children: [
                {
                    path: 'dashboard',
                    component: () => import("../views/admin/Dashboard"),
                },
                {
                    path: 'list',
                    component: () => import("../views/admin/ListQuiz"),
                },
                {
                    path: 'about',
                    component: () => import("../views/admin/About"),
                }
            ]
        },
    ]
})
