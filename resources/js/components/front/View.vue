<template>
    <v-main style="padding-top: 0">
        <router-view :key="$route.fullPath" />

        <dashboard-core-footer v-if="showFooter" />
    </v-main>
</template>

<script>
    export default {
        name: 'FrontView',
        components: {
            DashboardCoreFooter: () => import('_v/admin/components/core/Footer'),
        },
        computed:{
            showFooter(){
                return !(['login','register', 'about', 'learn', 'mock'].includes(this.$route.name))
            }
        },
    }
</script>
