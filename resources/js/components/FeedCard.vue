<template>
    <v-col
        cols="12"
        md="6"
    >
        <base-card
            height="450"
            color="grey lighten-1"
            dark
            :to="value.to"
        >
            <v-img
                :src="require(`_assets/articles/${value.img}`)"
                height="100%"
                gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
            >
                <v-row
                    class="fill-height text-right ma-0"
                >
                    <v-col cols="12">
                        <v-chip
                            label
                            class="mx-0 mb-2 text-uppercase"
                            color="grey darken-3"
                            text-color="white"
                            small
                            @click.stop=""
                        >
                            {{ value.category }}
                        </v-chip>

                        <h3 class="title font-weight-bold mb-2">
                            {{ value.title }}
                        </h3>
                    </v-col>

                    <v-col align-self="end">
                        <v-chip
                            class="text-uppercase ma-0"
                            color="primary"
                            label
                            small
                            @click.stop=""
                        >
                            LET'S GO
                        </v-chip>
                    </v-col>
                </v-row>
            </v-img>
        </base-card>
    </v-col>
</template>
<script>
    export default {
        name: 'FeedCard',
        props: {
            value: {
                type: Object,
                default: () => ({}),
            },
        },
    }
</script>

<style>
    .v-image__image {
        transition: .3s linear;
    }
</style>
