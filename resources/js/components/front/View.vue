<template>
    <v-main style="padding-top: 0">
        <router-view />

        <dashboard-core-footer />
    </v-main>
</template>

<script>
    export default {
        name: 'FrontView',

        components: {
            DashboardCoreFooter: () => import('_v/admin/components/core/Footer'),
        },
    }
</script>
