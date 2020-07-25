<template>
    <v-container
        id="user-profile"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <v-col
                cols="12"
            >
                <v-data-table
                    :headers="headers"
                    :items="quizItems"
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
                            <v-toolbar-title class="ml-4">Quiz table</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="500px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="primary"
                                        dark
                                        class="mb-2"
                                        v-bind="attrs"
                                        v-on="on"
                                    >New Item
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">{{ formTitle }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.question"
                                                                  label="Question"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.audio"
                                                                  label="Audio"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-select
                                                        v-model="editedItem.i18n"
                                                        :items="i18ns"
                                                        label="i18n"
                                                    ></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.image"
                                                                  label="Image"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-select
                                                        v-model="editedItem.type"
                                                        :items="types"
                                                        label="Type"
                                                    ></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-select
                                                        v-model="editedItem.input"
                                                        :items="inputs"
                                                        label="Role"
                                                    ></v-select>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-textarea
                                                        v-model="editedItem.description"
                                                        label="Description"
                                                        hint="Description"
                                                    ></v-textarea>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:item.image="{ item }">
                        <v-img aspect-ratio="1" :src="getImageOfQuiz(item.image)"></v-img>
                    </template>
                    <template v-slot:item.type="{ item }">
                        <v-chip dark>{{getTypeOfQuiz(item.type)}}</v-chip>
                    </template>
                    <template v-slot:footer>
                           <p class="pl-4 pt-4 pb-4">Total records: {{total}} </p>
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
            dialog: false,
            pageCount:0,
            options:{},
            loading:false,
            i18ns:['en'],
            inputs:['Radio', 'Checkbox'],
            types:['1','2','3','4','5','6','7','8'],
            headers: [
                {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                },
                {text: 'Question', sortable: false, value: 'question'},
                {text: 'i18n', sortable: false, value: 'i18n'},
                {text: 'Image', sortable: false, value: 'image'},
                {text: 'Type', sortable: false, value: 'type'},
                {text: 'Input', sortable: false, value: 'input'},
                {text: 'Actions', value: 'actions', sortable: false},
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                question: '',
                audio:'',
                description: '',
                i18n: 'en',
                image: '',
                type: '',
                input: '',
            },
            defaultItem: {
                question: '',
                audio:'',
                description: '',
                i18n: 'en',
                image: '',
                type: '',
                input: '',
            },
        }),

        computed: {
            ...mapState({
                size: state => state.quiz.size,
                type: state => state.quiz.type,
                total: state => state.quiz.total,
                quizItems: state => state.quiz.quizItems,
            }),
            formTitle() {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            },
            page: {
                get() {
                    return this.$store.state.quiz.page;
                },
                set(val) {
                    return this.$store.commit("quiz/SET_PAGE", val);
                }
            },
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            options:{
                deep: true,
                handler (val) {
                    let page = this.options.page;
                    let itemsPerPage = this.options.itemsPerPage;
                    if(this.options.itemsPerPage === -1){
                        itemsPerPage = this.total
                    }
                    this.getQuizItems(page, itemsPerPage)
                },
            }
        },

        methods: {
            ...mapActions({
                addQuiz : 'quiz/addQuiz',
                getQuizList : 'quiz/getQuizList',
                updateQuizById : 'quiz/updateQuizById',
                deleteQuizById : 'quiz/deleteQuizById',
            }),
            getQuizItems(page = this.page, size = this.size){
                this.loading = true;
                this.getQuizList({page: page, size: size, type: this.type}).then(() => {
                    this.loading = false;
                })
            },
            getTypeOfQuiz(index) {
                const items = ["Core", "Behavior", "Parking", "Emergencies", "Road Position", "Intersection", "Theory", "Signs"]
                return items[index -1]
            },
            getImageOfQuiz(image){
                return image ? image.replace('module-images', 'question-images') : '';
            },
            editItem(item) {
                this.editedIndex = this.quizItems.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                if (confirm('Are you sure you want to delete this item?')) {
                    this.deleteQuizById(item.id).then((data) => {
                        this.getQuizItems()
                        this.$store.dispatch('notice/show', data.message)
                    })
                }
            },

            close() {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save() {
                if (this.editedIndex > -1) {
                    this.updateQuizById(this.editedItem).then((data) => {
                        this.getQuizItems()
                        this.$store.dispatch('notice/show', data.message)
                    });
                } else {
                    // New a quiz
                    this.addQuiz(this.editedItem).then((data) => {
                        this.getQuizItems()
                        this.$store.dispatch('notice/show', data.message)
                    });
                }
                this.close()
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
