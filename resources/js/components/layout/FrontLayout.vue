<template>
    <v-app>
        <v-app-bar
            app
            absolute
            :color="isTop ? 'transparent' : 'rgba(200,200,200,0.8)'"
            elevate-on-scroll
            scroll-target="#scrolling-techniques-7"
        >
            <v-toolbar-title>
                <v-btn class="mx-2" dark large rounded color="purple" elevation="0">
                    Driving Test
                </v-btn>
            </v-toolbar-title>
            <v-toolbar-title>
                <v-btn
                    color="primary"
                    elevation="0"
                    text
                    to="/login"
                >
                    Log in
                </v-btn>
                <v-btn
                    color="primary"
                    elevation="0"
                    text
                    to="/register"
                >
                    sign up
                </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu
                bottom
                origin="center center"
                transition="scale-transition"
                v-if="!breakPoint"
                v-for="(menu, index) in menuItems"
                :key="index"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        elevation="0"
                        outlined
                        v-bind="attrs"
                        v-on="on"
                        class="gap"
                        :to="menu.to"
                    >
                        {{ menu.text }}
                    </v-btn>
                </template>

                <v-list v-if="menu.children">
                    <v-list-item
                        v-for="(item, i) in menu.children"
                        :key="i"
                        @click=""
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon" style="margin-top: 3px"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-app-bar-nav-icon @click="drawer = true" v-if="breakPoint"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
            app
            v-model="drawer"
            absolute
            temporary
            right
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-sheet
            id="scrolling-techniques-7"
            class="overflow-y-auto"
            max-height="100vh"
            @scroll="toggle"
        >
            <router-view></router-view>
            <dashboard-core-footer></dashboard-core-footer>
        </v-sheet>
    </v-app>
</template>

<script>
    export default {
        components: {
            DashboardCoreFooter: () => import('../../views/admin/components/core/Footer'),
        },
        data: () => ({
            isTop: true,
            drawer: false,
            group: true,
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
        methods: {
            toggle() {
                const elmnt = document.getElementById("scrolling-techniques-7");
                const y = elmnt.scrollTop;
                this.isTop = !y > 0
            }
        },
        computed: {
            breakPoint: function () {
                return this.$vuetify.breakpoint.mdAndDown;
            }
        },
        created() {
        }
    }
</script>

<style lang="scss" scoped>
    .gap {
        margin-right: 6px;
    }
</style>
