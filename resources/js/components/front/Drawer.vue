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
