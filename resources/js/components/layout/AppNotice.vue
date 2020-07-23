<template>
    <v-snackbar v-model="snackbar" :timeout="timeout" top>
        {{ text }}
        <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
        </template>
    </v-snackbar>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        name: 'app-notice',
        computed: {
            ...mapState({
                text: state => state.notice.text,
                timeout: state => state.notice.timeout || 3000
            }),
            snackbar: {
                get() {
                    return this.$store.state.notice.snackbar;
                },
                set(val) {
                    this.$store.dispatch("notice/close", val);
                }
            }
        }
    };
</script>
<style>
</style>
