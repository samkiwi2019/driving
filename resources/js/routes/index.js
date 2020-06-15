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
                    name: 'Dashboard',
                    component: () => import("../views/admin/Dashboard"),
                },
                {
                    path: 'list',
                    name: 'Quiz List',
                    component: () => import("../views/admin/ListQuiz"),
                },
                {
                    path: 'about',
                    name: 'About',
                    component: () => import("../views/admin/About"),
                },
                {
                    path: 'profile',
                    name: 'Profile',
                    component: () => import("../views/admin/profile"),
                }
            ]
        },
    ]
})
