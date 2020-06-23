<template>
    <div>
        <header-img
            content="Do something new"
            focus="top center"
            img="https://www.newzealand.com/assets/Tourism-NZ/Queenstown/e6291cf145/img-1541656087-7959-24721-p-0BCBACDF-ED33-F02B-50E4E69CF1723BE5-2544003__aWxvdmVrZWxseQo_FocalPointCropWzY2MCwxOTIwLDUwLDUwLDc1LCJqcGciLDY1LDIuNV0.jpg"></header-img>
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
                    <base-material-card>
                        <template v-slot:heading>
                            <div class="display-2 font-weight-light">
                                Login
                            </div>

                            <div class="subtitle-1 font-weight-light">
                                Driving Test
                            </div>
                        </template>

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
