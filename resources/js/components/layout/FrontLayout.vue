<template>
    <v-app>
        <front-app-bar />

        <front-drawer />

        <front-view />
    </v-app>
</template>


<script>
    export default {
        components: {
            FrontAppBar: () => import('_c/front/AppBar'),
            FrontDrawer: () => import('_c/front/Drawer'),
            FrontView: () => import('_c/front/View'),
        },
        data: () => ({
            expandOnHover: false,
            menuItems: [
                {text: "home", to: '/'},
                {
                    text: "learning rules",
                    children: [
                        {text: 'Core Rules (62)', icon: 'mdi-clock'},
                        {text: 'Driving Behavior (77)', icon: 'mdi-account'},
                        {text: 'Parking Signs (18)', icon: 'mdi-flag'},
                        {text: 'Accidents (17)', icon: 'mdi-flag'},
                        {text: 'Road Location (13)', icon: 'mdi-flag'},
                        {text: 'Traffic intersection (47)', icon: 'mdi-flag'},
                        {text: 'Theoretical knowledge (28)', icon: 'mdi-flag'},
                        {text: 'road signs (51)', icon: 'mdi-flag'},
                    ]
                },
                {
                    text: "mock test",
                    children: [
                        {text: 'Random 30 Quizzes', icon: 'mdi-clock'},
                        {text: 'Random 50 Quizzes', icon: 'mdi-clock'},
                    ]
                },
                {text: "traffic laws", to: '/law'},
                {text: "about", to: '/about'},
                {text: "visit system", to: '/admin'},
            ],
        }),
        created(){
            this.$store.dispatch('user/getUserAction', this.$route)
        }
    }
</script>
