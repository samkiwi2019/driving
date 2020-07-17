<template>
    <div class="container-main">
        <v-container
            id="user-profile"
            fluid
            tag="section"
            justify="center"
        >
            <v-row justify="center">
                <v-col
                    cols="12"
                    md="4"
                >
                    <base-material-card
                        color="success"
                        dark
                        icon="mdi-login"
                        style="opacity: 0.8"
                        title="Welcome, Driving Test">

                        <ValidationObserver ref="observer" v-slot="{ handleSubmit ,valid}">
                            <form>
                                <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                                    <v-text-field
                                        v-model="access.email"
                                        :error-messages="errors"
                                        label="E-mail"
                                        required
                                    ></v-text-field>
                                </ValidationProvider>
                                <ValidationProvider v-slot="{ errors }" name="Password" rules="required|max:10">
                                    <v-text-field
                                        v-model="access.password"
                                        :error-messages="errors"
                                        label="Password"
                                        type="password"
                                        required
                                    ></v-text-field>
                                </ValidationProvider>
                                <ValidationProvider v-slot="{ errors, valid }" name="checkbox">
                                    <v-checkbox
                                        v-model="access.remember"
                                        value="on"
                                        label="Remember Me"
                                        type="checkbox"
                                    ></v-checkbox>
                                </ValidationProvider>
                                <br>
                                <v-btn
                                    :class="`mr-4 ${!valid || 'success'}`"
                                    @click="handleSubmit(signIn)"
                                    :loading="loading"
                                    :disabled="loading"
                                >Login
                                </v-btn>
                            </form>
                        </ValidationObserver>
                    </base-material-card>
                </v-col>
            </v-row>
            <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
                top
            >
                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                        color="red"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                    >
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </v-container>
    </div>
</template>

<script>
    import HeaderImg from "_c/HeaderImg";
    // Utilities
    import {createNamespacedHelpers} from 'vuex'

    const {mapActions} = createNamespacedHelpers('user');

    export default {
        name: 'login',
        components: {HeaderImg},
        data: () => ({
            access: {
                email: '',
                password: '',
                remember: false
            },
            loading: false,
            timeout: 3000,
            snackbar: false,
            text: 'I\'m a snackbar.',
        }),
        methods: {
            ...mapActions({
                login: 'loginAction'
            }),
            message(text) {
                this.text = text
                this.snackbar = true
            },
            signIn() {
                this.loading = true;
                const params = this.access;
                !params.remember && delete params.remember;
                this.login(params).then(text => {
                    this.message(text)
                    this.loading = false;
                });
            },
        },
        created() {
        }
    }
</script>
<style lang="scss" scoped>
    .container-main {
        padding-top: 200px;
        background-image: url("https://www.wearemarmalade.co.uk/driver-hub/app/uploads/2019/09/driving-ready.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: -100px center;
        min-height: calc(100vh - 93px);
    }

</style>
