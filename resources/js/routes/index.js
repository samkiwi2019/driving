import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import("../views/Home"),
        },
        {
            path: '/login',
            component: () => import("../views/Login"),
        },
        {
            path: '/register',
            component: () => import("../views/Register"),
        },
        {
            path: '/admin',
            redirect: {path: '/admin/dashboard'},
            name: 'Admin',
        },
        {
            path: '/admin/dashboard',
            name: 'Dashboard',
            component: () => import("../views/admin/Dashboard"),
        },
        {
            path: '/admin/list',
            name: 'Quiz List',
            component: () => import("../views/admin/ListQuiz"),
        },
        {
            path: '/admin/about',
            name: 'About',
            component: () => import("../views/admin/About"),
        },
        {
            path: '/admin/profile',
            name: 'Profile',
            component: () => import("../views/admin/profile"),
        }
    ]
})
