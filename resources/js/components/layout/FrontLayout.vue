<template>
    <v-app>
        <front-app-bar />

        <front-drawer />

        <front-view />
        <app-notice />
    </v-app>
</template>


<script>
    export default {
        components: {
            FrontAppBar: () => import('_c/front/AppBar'),
            FrontDrawer: () => import('_c/front/Drawer'),
            FrontView: () => import('_c/front/View'),
            AppNotice: () => import('_c/layout/AppNotice'),
        },
        data: () => ({
            expandOnHover: false,
        }),
        created(){
            this.$store.dispatch('user/getUserAction', this.$route)
        }
    }
</script>
