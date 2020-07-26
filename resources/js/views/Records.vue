<template>
    <v-container
        id="records"
        fluid
        tag="section"
        class="mt-16"
    >
        <v-row justify="center">
            <v-col
                cols="12"
            >
                <v-data-table
                    :headers="headers"
                    :items="recordItems"
                    sort-by="correct_rate"
                    class="elevation-4"
                    :server-items-length="total"
                    :options.sync="options"
                    :loading="loading"
                    hide-default-footer
                    :page.sync="page"
                    @page-count="pageCount = $event"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="dark">
                            <v-sheet
                                class="d-flex pa-7 v-card--material-heading"
                                color="success"
                                height="88"
                                width="88"
                                dark
                                elevation="6"
                            >
                                <v-icon dark size="32">mdi-clipboard-text</v-icon>
                            </v-sheet>
                            <v-toolbar-title class="ml-4">Records table</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            small
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:item.question="{ item }">
                        <div class="d-flex flex-wrap py-5">
                            <v-img aspect-ratio="2" contain :src="item.quiz.image" v-if="item.quiz.image"></v-img>
                            <div>{{item.quiz.question}}</div>
                        </div>
                    </template>
                    <template v-slot:item.options="{ item }">
                        <div class="d-flex flex-wrap">
                            <div v-for="em in getCorrects(item.quiz.options)" :key="em.id">
                                {{em.description}}
                                <v-img contain :src="em.image" v-if="em.image"></v-img>
                            </div>
                        </div>
                    </template>
                    <template v-slot:item.answers="{ item }">
                        <div class="d-flex flex-wrap">
                            <div v-for="em in getMyAnswers(item)" :key="em.id">
                                {{em.description}}
                                <v-img contain :src="em.image" v-if="em.image"></v-img>
                            </div>
                        </div>
                    </template>
                </v-data-table>
            </v-col>
            <v-col cols="12" v-if="pageCount">
                <v-pagination v-model="page" :length="pageCount" :total-visible="7"></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        data: () => ({
            pageCount: 0,
            options: {},
            loading: false,
            headers: [
                {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                },
                {text: 'Question', sortable: false, value: 'question'},
                {text: 'Correct Answer', sortable: false, value: 'options'},
                {text: 'Your Answer', sortable: false, value: 'answers'},
                {text: 'Actions', value: 'actions', sortable: false},
            ],
        }),

        computed: {
            ...mapState({
                size: state => state.record.size,
                total: state => state.record.total,
                recordItems: state => state.record.recordItems,
            }),
            page: {
                get() {
                    return this.$store.state.record.page;
                },
                set(val) {
                    return this.$store.commit("record/SET_PAGE", val);
                }
            },
        },

        watch: {
            options: {
                deep: true,
                handler(val) {
                    let page = this.options.page;
                    let itemsPerPage = this.options.itemsPerPage;
                    if (this.options.itemsPerPage === -1) {
                        itemsPerPage = this.total
                    }
                    this.getRecords(page, itemsPerPage)
                },
            }
        },

        methods: {
            ...mapActions({
                getRecordItems: 'record/getRecordItems',
                deleteRecordById: 'record/deleteRecordById',
            }),
            getCorrects(items){
                return items.filter(em => em.is_correct)
            },
            getMyAnswers(item) {
                const answers = item['my_answers'].split(',').map(i => +i);
                const options = [...item.quiz.options];
                return options.filter(em => answers.includes(em.id))
            },
            getRecords(page = this.page, size = this.size) {
                this.loading = true;
                this.getRecordItems({page: page, size: size, type: this.type}).then(() => {
                    this.loading = false;
                })
            },
            deleteItem(item) {
                if (confirm('Are you sure you want to delete this item?')) {
                    this.deleteRecordById(item.id).then((data) => {
                        this.getRecords()
                        this.$store.dispatch('notice/show', data.message)
                    })
                }
            },
        },
    }
</script>
<style lang="scss" scoped>
    .v-card--material-heading {
        transform: translateY(-10px);
        border-radius: 4px;
    }
</style>
