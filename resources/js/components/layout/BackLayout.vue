<template>
    <v-app>
        <dashboard-core-app-bar />

        <dashboard-core-drawer />

        <dashboard-core-view />

        <dashboard-core-settings />

        <app-notice />
    </v-app>
</template>

<script>
    export default {
        name: 'DashboardIndex',

        components: {
            DashboardCoreAppBar: () => import('../../views/admin/components/core/AppBar'),
            DashboardCoreDrawer: () => import('../../views/admin/components/core/Drawer'),
            DashboardCoreSettings: () => import('../../views/admin/components/core/Settings'),
            DashboardCoreView: () => import('../../views/admin/components/core/View'),
            AppNotice: () => import('_c/layout/AppNotice'),
        },

        data: () => ({
            expandOnHover: false,
        }),
    }
</script>
