<template>
    <v-app-bar
        id="app-bar"
        absolute
        app
        color="transparent"
        flat
        height="64"
        :class="`${isTop ? '' : 'app-bar-fix'}`"
        :elevation="isTop ? 0 : 4"
        style="z-index: 5"
    >

        <v-btn rounded color="primary" dark>Driving Test</v-btn>


        <v-spacer/>


        <div class="mx-3"/>

        <v-tooltip bottom  v-if="isLogin && !breakpoint">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="ml-2"
                    min-width="0"
                    text
                    v-bind="attrs"
                    v-on="on"
                    to="/admin/dashboard"
                    color="primary"
                >
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-btn>
            </template>
            <span>Visit Management System</span>
        </v-tooltip>


        <v-btn
            class="ml-2"
            min-width="0"
            text
            to="/"
            v-if="!breakpoint"
        >
            <v-icon color="primary">mdi-home</v-icon>
        </v-btn>


        <v-menu
            bottom
            left
            offset-y
            origin="top right"
            transition="scale-transition"
            v-if="!breakpoint"
        >
            <template v-slot:activator="{ attrs, on }">
                <v-btn
                    class="ml-2"
                    min-width="0"
                    text
                    v-bind="attrs"
                    v-on="on"
                    color="primary"
                >
                    <v-icon>mdi-ruler-square-compass</v-icon>
                </v-btn>
            </template>

            <v-list
                :tile="false"
                nav
            >
                <v-subheader>Traffic rules category</v-subheader>
                <div>
                    <app-bar-item
                        v-for="(item, i) in trafficCategory"
                        :key="`item-${i}`"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </app-bar-item>
                </div>
            </v-list>
        </v-menu>
        <v-menu
            bottom
            left
            offset-y
            origin="top right"
            transition="scale-transition"
            v-if="!breakpoint"
        >
            <template v-slot:activator="{ attrs, on }">
                <v-btn
                    class="ml-2"
                    min-width="0"
                    text
                    v-bind="attrs"
                    v-on="on"
                    color="primary"
                >
                    <v-icon>mdi-test-tube</v-icon>
                </v-btn>
            </template>

            <v-list
                :tile="false"
                nav
                min-width="200"
            >
                <v-subheader>Mock test at random</v-subheader>
                <div>
                    <app-bar-item to="/mock?i=30">
                        <v-list-item-title v-text="'30 questions'"/>
                    </app-bar-item>
                    <v-divider></v-divider>
                    <app-bar-item to="/mock?i=50">
                        <v-list-item-title v-text="'50 questions'"/>
                    </app-bar-item>
                </div>
            </v-list>
        </v-menu>
        <v-menu
            bottom
            left
            offset-y
            origin="top right"
            transition="scale-transition"
            v-if="!breakpoint"
        >
            <template v-slot:activator="{ attrs, on }">
                <v-btn
                    class="ml-2"
                    min-width="0"
                    text
                    :fab="isLogin"
                    :small="isLogin"
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-list-item-avatar v-if="isLogin" style="margin-right: 0 !important;">
                        <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg">
                    </v-list-item-avatar>
                    <v-icon color="primary" v-else>mdi-account</v-icon>
                </v-btn>
            </template>

            <v-list
                :tile="false"
                nav
                min-width="200"
            >
                <div>
                    <app-bar-item to="/login" v-if="!isLogin">
                        <v-list-item-title v-text="'Log in'"/>
                    </app-bar-item>
                    <v-divider v-if="!isLogin"></v-divider >
                    <app-bar-item to="/register" v-if="!isLogin">
                        <v-list-item-title v-text="'Sign up'"/>
                    </app-bar-item>
                    <app-bar-item to="/profile" v-if="isLogin">
                        <v-list-item-title v-text="'Profile'"/>
                    </app-bar-item>
                    <v-divider v-if="isLogin"></v-divider>
                    <app-bar-item @click.native="logoutAction" v-if="isLogin">
                        <v-list-item-title v-text="'Logout'"/>
                    </app-bar-item>
                </div>
            </v-list>
        </v-menu>
        <v-btn
            class="mr-3 ml-3"
            elevation="1"
            fab
            x-small
            color="primary"
            @click="setFrontDrawer(!frontDrawer)"
            v-if="breakpoint || frontDrawer"
        >
            <v-icon v-if="!frontDrawer" color="white">
                mdi-view-quilt
            </v-icon>

            <v-icon v-else color="white">
                mdi-dots-vertical
            </v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    // Components
    import {VHover, VListItem} from 'vuetify/lib'

    // Utilities
    import {mapState, mapGetters ,mapMutations,mapActions} from 'vuex'

    export default {
        name: 'FrontAppBar',

        components: {
            AppBarItem: {
                render(h) {
                    return h(VHover, {
                        scopedSlots: {
                            default: ({hover}) => {
                                return h(VListItem, {
                                    attrs: this.$attrs,
                                    class: {
                                        'black--text': !hover,
                                        'white--text secondary elevation-12': hover,
                                    },
                                    props: {
                                        activeClass: '',
                                        dark: hover,
                                        link: true,
                                        ...this.$attrs,
                                    },
                                }, this.$slots.default)
                            },
                        },
                    })
                },
            },
        },

        data: () => ({
            isTop: true,
            trafficCategory: [
                {text: 'Core', icon: 'mdi-ansible'},
                {text: 'Behavior', icon: 'mdi-cursor-move'},
                {text: 'Parking', icon: 'mdi-car-brake-parking'},
                {text: 'Emergencies', icon: 'mdi-car-traction-control'},
                {text: 'Road Position', icon: 'mdi-road'},
                {text: 'Intersection', icon: 'mdi-vector-intersection'},
                {text: 'Theory', icon: 'mdi-crosshairs-question'},
                {text: 'Signs', icon: 'mdi-traffic-light'},
            ]
        }),

        computed: {
            ...mapState({
                frontDrawer: state => state.config.frontDrawer,
                user: state => state.user.user,
            }),
            ...mapGetters({
                isLogin: 'user/isLogin'
            }),
            breakpoint: function (){
                return  this.$vuetify.breakpoint.smAndDown
            }
        },

        methods: {
            ...mapActions({
                logoutAction: 'user/logoutAction'
            }),
            ...mapMutations({
                setFrontDrawer: 'config/SET_FRONT_DRAWER',
            }),
            setAttributeByScrollTop: function () {
                const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                this.isTop = !(top > 3);
            }
        },
        mounted() {
            window.addEventListener('scroll', this.setAttributeByScrollTop, false)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.setAttributeByScrollTop)
        }
    }
</script>
<style lang="scss" scoped>
    .app-bar-fix {
        position: fixed !important;
        top: 0;
        left: 0;
        transition: background .5s;
        background: rgba(255, 255, 255, .8)!important;
    }
</style>
