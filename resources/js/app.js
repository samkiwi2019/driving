/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import store from './vuex'
import router from './routes'
import vuetify from "./plugins/vuetify";
import i18n from './plugins/i18n'
import App from './views/App'
import './plugins/base'
import './plugins/chartist'
import "./plugins/vee-validate";

'./plugins/vee-validate'


window.Vue = require('vue');
Vue.config.productionTip = false


// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
    'login',
    require('./views/Login.vue').default
);

Vue.component(
    'back-layout',
    require('./components/layout/BackLayout.vue').default
);
Vue.component(
    'front-layout',
    require('./components/layout/FrontLayout.vue').default
);


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('access_token')) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
});


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App),
}).$mount('#app');
