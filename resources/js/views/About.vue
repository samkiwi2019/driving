<template>
    <div class="container-main">
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
                        color="success"
                        icon="mdi-information"
                        title="About"
                        class="px-5"
                    >
                        <v-card-text class="text-started">
                            <p class="font-weight-light">
                                This website contains 2 main modes:
                                <br>
                                <br>
                                1. Learning mode: 8 traffic rules modules, including 330 questions
                                <br>
                                2. Mock mode: 30 or 50 questions are randomly selected to form a quiz.
                                <br>
                                <br>
                                For logged users, their answers will be recorded on their record pages.
                            </p>

                        </v-card-text>
                    </base-material-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="scss" scoped>
.container-main{
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://demos.creative-tim.com/vuetify-material-dashboard-pro/img/login.d6d3bb09.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
