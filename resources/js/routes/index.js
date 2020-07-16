import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
        scrollTo = to.hash
    } else if (savedPosition) {
        scrollTo = savedPosition.y
    }

    return goTo(scrollTo, {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
    })
}

const router = new VueRouter({
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
