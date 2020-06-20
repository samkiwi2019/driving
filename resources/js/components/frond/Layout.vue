<template>
    <v-card class="clear">
        <v-app-bar
            dark
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Driving Test</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
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

        <v-sheet>
            <v-container>
                <slot></slot>
            </v-container>
        </v-sheet>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            group: true,
        }),
    }
</script>

<style lang="scss" scoped>
    .clear{
        margin-top: 0;
        border-radius: 0;
    }

</style>
