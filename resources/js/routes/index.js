import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router =  new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import("../views/Home"),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("../views/Login"),
        },
        {
            path: '/register',
            component: () => import("../views/Register"),
        },
        {
            path: '/admin',
            redirect: {path: '/admin/dashboard'},
            meta: {requiresAuth: true},
            name: 'Admin',
        },
        {
            path: '/admin/dashboard',
            name: 'Dashboard',
            meta: {requiresAuth: true},
            component: () => import("../views/admin/Dashboard"),
        },
        {
            path: '/admin/list',
            name: 'Quiz List',
            meta: {requiresAuth: true},
            component: () => import("../views/admin/ListQuiz"),
        },
        {
            path: '/admin/about',
            name: 'About',
            meta: {requiresAuth: true},
            component: () => import("../views/admin/About"),
        },
        {
            path: '/admin/profile',
            name: 'Profile',
            meta: {requiresAuth: true},
            component: () => import("../views/admin/profile"),
        }
    ]
})


export default router;
