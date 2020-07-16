<template>
    <div class="container-main">
        <v-container
            fluid
            tag="section"
        >
            <v-row justify="center">
                <v-col
                    cols="12"
                    md="4"
                >
                    <base-material-card
                        color="success"
                        dark
                        icon="mdi-car"
                        style="opacity: 0.8"
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
        padding-top:  200px;
        background-image: url("https://www.racq.com.au/-/media/racqgroupmvc/feature/article/featuredimages/road-trip/woman-smiling-while-driving-a-female-passenger.jpg?h=609&w=1000&hash=50F3A448B13F0DD9719A36C04AEA1F826A4C30C2");
        background-repeat: no-repeat;
        background-size: cover;
        min-height: calc(100vh - 93px);
    }
</style>
