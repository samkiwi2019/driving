<template>
    <div class="container-main">
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
                                Register
                            </div>

                            <div class="subtitle-1 font-weight-light">
                                Driving Test
                            </div>
                        </template>

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
                                        required
                                    ></v-text-field>
                                </ValidationProvider>
                                <ValidationProvider v-slot="{ errors }" name="password_confirmation" rules="required|min:8">
                                    <v-text-field
                                        v-model="access.password_confirmation"
                                        :error-messages="errors"
                                        label="Password confirmation"
                                        required
                                    ></v-text-field>
                                </ValidationProvider>
                                <v-btn
                                    :class="`mr-4 ${!valid || 'success'}`"
                                    @click="handleSubmit(register)"
                                    :loading="loading"
                                    :disabled="loading"
                                >Submit</v-btn>
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

    export default {
        name: "Register",
        components: {HeaderImg},
        data: () =>({
            access: {
                name:'',
                email:'',
                nickname:'',
                password: '',
                password_confirmation: '',
            },
            loading: false,
            timeout: 3000,
            snackbar: false,
            text: 'I\'m a snackbar.',
        }),
        methods:{
            message(text){
                this.text = text;
                this.snackbar = true
            },
            register(){
                this.loading = true;
                this.$store.dispatch('user/registerAction', this.access).then(text => {
                    this.message(text);
                    this.loading = false;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container-main {

    }
</style>
