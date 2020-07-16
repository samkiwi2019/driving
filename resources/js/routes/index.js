import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
    let scrollTo = 0;
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
            component: () => import("../views/Login"),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import("../views/Register"),
        },
        {
            path: '/records',
            name: 'records',
            component: () => import("../views/Records"),
        },
        {
            path: '/learn/:id',
            name: 'learn',
            component: () => import("../views/Learn"),
        },
        {
            path: '/mock/:id',
            name:"mock",
            component: () => import("../views/Mock"),
        },
        {
            path: '/about',
            name:"about",
            component: () => import("../views/About"),
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
