<template>
    <v-navigation-drawer
        id="core-navigation-drawer"
        v-model="frontDrawer"
        :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
        right
        :src="barImage"
        mobile-breakpoint="960"
        app
        width="260"
        v-bind="$attrs"
    >
        <template v-slot:img="props">
            <v-img
                :gradient="`to bottom, ${barColor}`"
                v-bind="props"
            />
        </template>

        <v-subheader>User</v-subheader>
        <v-list-group>
            <template v-slot:activator>
                <v-list-item-avatar>
                    <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg">
                </v-list-item-avatar>
                <v-list-item-title>{{ user.nickname || 'Not logged in' }}</v-list-item-title>
            </template>
            <v-list-item
                link
                to="/login"
                v-if="!isLogin"
            >
                <v-list-item-icon>
                    <v-icon v-text="'mdi-login'"></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="'Login'"></v-list-item-title>
            </v-list-item>
            <v-list-item
                link
                to="/register"
                v-if="!isLogin"
            >
                <v-list-item-icon>
                    <v-icon v-text="'mdi-registered-trademark'"></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="'register'"></v-list-item-title>
            </v-list-item>
            <v-list-item
                link
                to="/records"
                v-if="isLogin"
            >
                <v-list-item-icon>
                    <v-icon v-text="'mdi-album'"></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="'My records'"></v-list-item-title>
            </v-list-item>
            <v-list-item
                link
                @click="logout"
                v-if="isLogin"
            >
                <v-list-item-icon>
                    <v-icon v-text="'mdi-logout'"></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="'Logout'"></v-list-item-title>
            </v-list-item>
        </v-list-group>
        <v-subheader>Navigation</v-subheader>
        <v-list
            expand
            nav
        >
            <div/>

            <template v-for="(item, i) in computedItems" v-if="!item.auth || (item.auth && isLogin)">
                <base-item-group
                    v-if="item.children"
                    :key="`group-${i}`"
                    :item="item"
                >
                </base-item-group>

                <base-item
                    v-else
                    :key="`item-${i}`"
                    :item="item"
                />
            </template>

            <div/>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    // Utilities

    import {mapState, mapActions, mapGetters} from 'vuex'

    export default {
        name: 'FrontDrawer',

        props: {
            expandOnHover: {
                type: Boolean,
                default: false,
            },
        },

        data: () => ({
            model: false,
            items: [
                {
                    icon: 'mdi-view-dashboard',
                    title: 'visit',
                    to: '/admin/dashboard',
                    auth: true
                },
                {
                    icon: 'mdi-home',
                    title: 'home',
                    to: '/',
                },
                {
                    icon: 'mdi-clipboard-outline',
                    title: 'learn',
                    children: [
                        {title: 'core', icon: 'mdi-ansible', to: '/learn/1'},
                        {title: 'behavior', icon: 'mdi-cursor-move', to: '/learn/2'},
                        {title: 'parking', icon: 'mdi-car-brake-parking', to: '/learn/3'},
                        {title: 'emergencies', icon: 'mdi-car-traction-control', to: '/learn/4'},
                        {title: 'position', icon: 'mdi-road', to: '/learn/5'},
                        {title: 'intersection', icon: 'mdi-vector-intersection', to: '/learn/6'},
                        {title: 'theory', icon: 'mdi-crosshairs-question', to: '/learn/7'},
                        {title: 'signs', icon: 'mdi-traffic-light', to: '/learn/8'},
                    ]
                },
                {
                    icon: 'mdi-test-tube',
                    title: 'mock',
                    children: [
                        {title: 'mock-30', icon: 'mdi-theory', to: '/mock/30'},
                        {title: 'mock-50', icon: 'mdi-signs', to: '/mock/50'},
                    ]
                },
                {
                    icon: 'mdi-information',
                    title: 'about',
                    to: '/about',
                }
            ],
        }),

        computed: {
            ...mapGetters({
                isLogin: 'user/isLogin'
            }),
            ...mapState({
                barColor: state => state.config.barColor,
                barImage: state => state.config.barImage,
                user: state => state.user.user
            }),
            frontDrawer: {
                get() {
                    return this.$store.state.config.frontDrawer
                },
                set(val) {
                    this.$store.commit('config/SET_FRONT_DRAWER', val)
                },
            },
            computedItems() {
                return this.items.map(this.mapItem)
            },
            profile() {
                return {
                    avatar: true,
                    title: this.$t('avatar'),
                }
            },
        },

        methods: {
            ...mapActions({
                logoutAction: 'user/logoutAction'
            }),
            mapItem(item) {
                return {
                    ...item,
                    children: item.children ? item.children.map(this.mapItem) : undefined,
                    title: this.$t(item.title),
                }
            },
            logout(){
                this.logoutAction();
            }
        },
    }
</script>

<style lang="sass" scoped>
    @import '../../../../node_modules/vuetify/src/styles/tools/rtl'

    #core-navigation-drawer
        .v-list-group__header.v-list-item--active:before
            opacity: .24

        .v-list-item
            &__icon--text,
            &__icon:first-child
                justify-content: center
                text-align: center
                width: 20px

                +ltr()
                    margin-right: 24px
                    margin-left: 12px !important

                +rtl()
                    margin-left: 24px
                    margin-right: 12px !important

        .v-list--dense
            .v-list-item
                &__icon--text,
                &__icon:first-child
                    margin-top: 10px

        .v-list-group--sub-group
            .v-list-item
                +ltr()
                    padding-left: 8px

                +rtl()
                    padding-right: 8px

            .v-list-group__header
                +ltr()
                    padding-right: 0

                +rtl()
                    padding-right: 0

                .v-list-item__icon--text
                    margin-top: 19px
                    order: 0

                .v-list-group__header__prepend-icon
                    order: 2

                    +ltr()
                        margin-right: 8px

                    +rtl()
                        margin-left: 8px
</style>
