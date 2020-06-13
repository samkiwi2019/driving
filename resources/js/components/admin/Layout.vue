<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        >
            <template v-slot:prepend>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="https://randomuser.me/api/portraits/women/81.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Jane Smith</v-list-item-title>
                        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>

            <v-divider></v-divider>
            <v-subheader>Main</v-subheader>
            <v-list dense>
                <v-list-item
                    v-for="([icon, text], i) in items"
                    :key="i"
                    link
                >
                    <v-list-item-action>
                        <v-icon>{{icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block dark>Logout</v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-app-bar
            app
            clipped-left
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Driving Test Manage System</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container
                class="fill-height"
                fluid
            >
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>
                Driving Test &copy; {{ new Date().getFullYear() }}
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
            items: [
                ['mdi-view-dashboard', 'Dashboard'],
                ['mdi-view-list', 'Quiz List'],
                ['mdi-earth-box-plus', 'Add Quiz'],
                ['mdi-file-edit', 'Edit Quiz'],
                ['mdi-help-box', 'About'],
            ],
        }),
        created() {
            this.$vuetify.theme.dark = true
        },
    }
</script>
