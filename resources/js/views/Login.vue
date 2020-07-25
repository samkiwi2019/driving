<template>
    <div class="container-main">
        <div class="login-card">
        <base-material-card
            color="success"
            icon="mdi-login"
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
                    <br>
                    <div class="d-flex justify-center">
                        <v-btn
                            :class="`mr-4 ${!valid || 'success'}`"
                            @click="handleSubmit(signIn)"
                            :loading="loading"
                            :disabled="loading"
                            text
                            rounded
                            color="success"
                        >Let's go
                        </v-btn>
                    </div>
                </form>
            </ValidationObserver>
        </base-material-card>
        </div>
    </div>
</template>

<script>
    import HeaderImg from "_c/HeaderImg";
    import {mapActions} from 'vuex'

    export default {
        name: 'login',
        components: {HeaderImg},
        data: () => ({
            access: {
                email: '',
                password: '',
            },
            loading: false,
        }),
        methods: {
            ...mapActions({
                login: 'user/loginAction',
            }),
            signIn() {
                this.loading = true;
                const params = this.access;
                !params.remember && delete params.remember;
                this.login(params).then(text => {
                    this.$store.dispatch('notice/show', text);
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
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://demos.creative-tim.com/vuetify-material-dashboard-pro/img/login.d6d3bb09.jpg"); background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-card{
            width: 400px;
        }
    }

</style>
