<template>
    <v-container
        id="user-profile"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <v-col
                cols="12"
                lg="6"
                md="8"
                sm="10"
            >
                <base-material-card
                    class="v-card-profile"
                    avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
                >
                    <v-card-text class="text-center">
                        <h6 class="display-1 mb-1 grey--text">
                            Web developer / Full stack
                        </h6>

                        <h4 class="display-2 font-weight-light mb-3 black--text">
                            Bin Liu / Sam
                        </h4>

                        <p class="font-weight-light grey--text">
                            Hi, I am Sam. I am a web developer with 5+ years of experience.
                            <br>
                            I like React in the front-end and Laravel technology stack in the back-end.
                            <br>
                            My Email: <strong :style="`color:${$vuetify.theme.themes['light'].primary}`">sam.kiwi2019@gmail.com</strong>
                        </p>

                        <v-btn
                            color="success"
                            rounded
                            class="mr-0"
                        >
                            Follow
                        </v-btn>
                    </v-card-text>
                </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>
