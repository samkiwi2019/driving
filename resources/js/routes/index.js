import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        if (to.hash) {
            position.selector = to.hash
        }
        if (to.matched.some(m => m.meta.scrollToTop)) {
            position.x = 0;
            position.y = 0;
        }
        return position;
    }
}


const router =  new VueRouter({
    mode: 'history',
    scrollBehavior,
    routes: [
        {
            path: '/',
            meta: {scrollToTop: true},
            component: () => import("../views/Home"),
        },
        {
            path: '/login',
            name: 'login',
            meta: {scrollToTop: true},
            component: () => import("../views/Login"),
        },
        {
            path: '/register',
            meta: {scrollToTop: true},
            component: () => import("../views/Register"),
        },
        {
            path: '/admin',
            redirect: {path: '/admin/dashboard'},
            meta: {scrollToTop: true, requiresAuth: true},
            name: 'Admin',
        },
        {
            path: '/admin/dashboard',
            name: 'Dashboard',
            meta: {requiresAuth: true, scrollToTop: true},
            component: () => import("../views/admin/Dashboard"),
        },
        {
            path: '/admin/list',
            name: 'Quiz List',
            meta: {requiresAuth: true, scrollToTop: true},
            component: () => import("../views/admin/ListQuiz"),
        },
        {
            path: '/admin/about',
            name: 'About',
            meta: {requiresAuth: true, scrollToTop: true},
            component: () => import("../views/admin/About"),
        },
        {
            path: '/admin/profile',
            name: 'Profile',
            meta: {requiresAuth: true, scrollToTop: true},
            component: () => import("../views/admin/profile"),
        }
    ]
})


export default router;
