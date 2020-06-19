<template>
    <v-navigation-drawer
        id="core-navigation-drawer"
        v-model="drawer"
        :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
        :expand-on-hover="expandOnHover"
        :right="$vuetify.rtl"
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

        <v-divider class="mb-1"/>

        <v-list
            dense
            nav
        >
            <v-list-item two-line>
                <v-list-item-avatar>
                    <v-img src="https://getvectorlogo.com/wp-content/uploads/2019/10/rsg-test-drive-vector-logo.png" aspect-ratio="1.4" cover></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>Driving Test</v-list-item-title>
                    <v-list-item-subtitle>Management System</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider class="mb-1"/>
            <v-subheader>User info</v-subheader>
            <v-list-group>
                <template v-slot:activator>
                    <v-list-item-avatar>
                        <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg">
                    </v-list-item-avatar>
                    <v-list-item-title>Jane Smith</v-list-item-title>
                </template>
                <v-list-item
                    link
                    to="/admin/profile"
                >
                    <v-list-item-icon>
                        <v-icon v-text="'mdi-face-profile-woman'"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="'My Profile'"></v-list-item-title>
                </v-list-item>
            </v-list-group>
        </v-list>
        <v-divider class="mb-2"/>
        <v-subheader>Menu</v-subheader>
        <v-list
            expand
            nav
        >
            <div/>

            <template v-for="(item, i) in computedItems">
                <base-item-group
                    v-if="item.children"
                    :key="`group-${i}`"
                    :item="item"
                >
                    <!--  -->
                </base-item-group>

                <base-item
                    v-else
                    :key="`item-${i}`"
                    :item="item"
                />
            </template>

            <div/>
        </v-list>

        <template v-slot:append>
            <div class="pa-3">
                <v-btn
                    color="error"
                    class="white--text"
                    block
                    @click="logout"
                >
                    Logout
                    <v-icon right dark>mdi-logout</v-icon>
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
    // Utilities

    import {createNamespacedHelpers} from 'vuex'

    const {mapState} = createNamespacedHelpers('config');
    const {mapActions} = createNamespacedHelpers('user');

    export default {
        name: 'DashboardCoreDrawer',

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
                    title: 'dashboard',
                    to: '/admin/dashboard',
                },
                {
                    icon: 'mdi-clipboard-outline',
                    title: 'quiz',
                    to: '/admin/list',
                },
                {
                    icon: 'mdi-account',
                    title: 'about',
                    to: '/admin/about',
                },
            ],
        }),

        computed: {
            ...mapState(['barColor', 'barImage']),
            drawer: {
                get() {
                    return this.$store.state.config.drawer
                },
                set(val) {
                    this.$store.commit('config/SET_DRAWER', val)
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
                logoutAction: 'logout'
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
                // document.getElementById('logout-form').submit();
            }
        },
    }
</script>

<style lang="sass">
    @import '../../../../../../node_modules/vuetify/src/styles/tools/rtl'

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
