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
                                                    <v-text-field v-model="editedItem.i18n"
                                                                  label="i18n"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.image"
                                                                  label="Image"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.type"
                                                                  label="Type"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.input"
                                                                  label="input"></v-text-field>
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
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data: () => ({
            dialog: false,
            options:{},
            loading:false,
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
                i18n: '',
                image: '',
                type: '',
                input: '',
            },
            defaultItem: {
                question: '',
                i18n: '',
                image: '',
                type: '',
                input: '',
            },
        }),

        computed: {
            ...mapState({
                page: state => state.quiz.page,
                size: state => state.quiz.size,
                type: state => state.quiz.type,
                total: state => state.quiz.total,
                quizItems: state => state.quiz.quizItems,
            }),
            formTitle() {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            },
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            options:{
                deep: true,
                handler () {
                    let page = this.options.page;
                    let itemsPerPage = this.options.itemsPerPage;
                    if(this.options.itemsPerPage === -1){
                        itemsPerPage = this.total
                    }
                    this.loading = true;
                    this.$store.dispatch('quiz/getQuizList', {page: page, size: itemsPerPage, type: this.type}).then(() => {
                        this.loading = false;
                    })
                },
            }
        },

        methods: {
            getTypeOfQuiz(index) {
                const items = ["Core", "Behavior", "Parking", "Emergencies", "Road Position", "Intersection", "Theory", "Signs"]
                return items[index -1]
            },
            getImageOfQuiz(image){
                return image ? image.replace('module-images', 'question-images') : '';
            },
            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                const index = this.desserts.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
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
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
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
