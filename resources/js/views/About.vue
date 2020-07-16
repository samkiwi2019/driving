<template>
    <div>
        <div class="container-main" :style="`background-image: url(${require(`_assets/articles/snowcup.jpg`)})`"></div>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="font-weight-light mt-1" style="font-size: 25px;">About</div>
                    <p>
                        This website contains 2 main modes:
                        <br>
                        1. Learning mode: 8 traffic rules modules, including 331 questions
                        <br>
                        2. Mock mode: 30 or 50 questions are randomly selected to form a quiz. The user needs to answer within 30 minutes. The user’s answer record after login will be on their records page.
                    </p>
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
    padding-top: 64px;
    background-size: cover;
}
</style>
