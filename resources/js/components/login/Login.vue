<template>
        <v-container
            id="user-profile"
            fluid
            tag="section"
            justify="center"
        >
            <v-row justify="center">
                <v-col
                    cols="12"
                    md="8"
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
                                        v-model="access.checkbox"
                                        value="1"
                                        label="Remember Me"
                                        type="checkbox"
                                    ></v-checkbox>
                                </ValidationProvider>
                                <v-btn :class="`mr-4 ${!valid || 'success'}`" @click="handleSubmit(login)">Login</v-btn>
                            </form>
                        </ValidationObserver>
                    </base-material-card>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
    import { login } from '_a/admin'
    export default {
        name: 'login',
        data: () => ({
            access: {
                email:'',
                password: '',
                checkbox: false
            }
        }),
        methods:{
            login(){
                this.setAccessToken()
            },
            async setAccessToken(){
                const res = await login(this.access);
                if(res.status === 200){
                    const {access_token} = res.data;
                    localStorage.setItem("access_token", access_token)
                    //TODO:  emit web login

                }else{
                    //TODO:  alert the message of email or password incorrect!
                }

            },
        },
        created() {
        }
    }
</script>
