<template>
    <div class="container-main">
        <div class="login-card">
            <base-material-card
                color="success"
                icon="mdi-car"
                title="Registration">

                <ValidationObserver ref="observer" v-slot="{ handleSubmit ,valid}">
                    <form>
                        <ValidationProvider v-slot="{ errors }" name="name" rules="required">
                            <v-text-field
                                v-model="access.name"
                                :error-messages="errors"
                                label="Name"
                                required
                            ></v-text-field>
                        </ValidationProvider>
                        <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                            <v-text-field
                                v-model="access.email"
                                :error-messages="errors"
                                label="E-mail"
                                required
                            ></v-text-field>
                        </ValidationProvider>
                        <ValidationProvider v-slot="{ errors }" name="nickname" rules="required">
                            <v-text-field
                                v-model="access.nickname"
                                :error-messages="errors"
                                label="Nickname"
                                required
                            ></v-text-field>
                        </ValidationProvider>
                        <ValidationProvider v-slot="{ errors }" name="password" rules="required|min:8">
                            <v-text-field
                                v-model="access.password"
                                :error-messages="errors"
                                label="Password"
                                type="password"
                                required
                            ></v-text-field>
                        </ValidationProvider>
                        <ValidationProvider v-slot="{ errors }" name="password_confirmation" rules="required|min:8">
                            <v-text-field
                                v-model="access.password_confirmation"
                                :error-messages="errors"
                                label="Password confirmation"
                                type="password"
                                required
                            ></v-text-field>
                        </ValidationProvider>
                        <br>
                        <div class="d-flex justify-center">
                            <v-btn
                                :class="`mr-4 ${!valid || 'success'}`"
                                @click="handleSubmit(register)"
                                :loading="loading"
                                :disabled="loading"
                                text
                                rounded
                                color="success"
                            >GET STARTED
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

    export default {
        name: "Register",
        components: {HeaderImg},
        data: () => ({
            access: {
                name: '',
                email: '',
                nickname: '',
                password: '',
                password_confirmation: '',
            },
            loading: false,
        }),
        methods: {
            register() {
                this.loading = true;
                this.$store.dispatch('user/registerAction', this.access).then(text => {
                    this.$store.dispatch('notice/show', text);
                    this.loading = false;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container-main {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://demos.creative-tim.com/vuetify-material-dashboard-pro/img/register.85b37874.jpg");
        background-position: center center;
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
