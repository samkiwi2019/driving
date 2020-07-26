<template>
    <div class="container-main pt-16">
        <v-scroll-x-transition>
            <v-container
                id="mock-test"
                fluid
                tag="section"
                v-if="!loading && mockItems.length > 0"
            >
                <v-row justify="center">
                    <v-col
                        cols="12"
                        md="8"
                    >
                        <base-material-card
                            color="success"
                            :icon="icon"
                            :title="title"
                            class="px-5"
                        >
                            <div class="mb-2">
                                <v-img :src="currentItem.image" aspect-ratio="2" contain
                                       v-if="currentItem.image"></v-img>
                            </div>
                            <v-divider v-if="currentItem.image"></v-divider>
                            <blockquote class="blockquote font-weight-medium">
                                {{index+1}}. {{currentItem.question}}

                            </blockquote>
                            <v-divider></v-divider>
                            <v-subheader>{{isMultiple ? 'multiple answers' : 'single answer'}}</v-subheader>

                            <v-list :disabled="!!status">
                                <v-list-item-group
                                    v-model="usersAnswers"
                                    :multiple="isMultiple"
                                    active-class="primary--text"
                                >
                                    <v-list-item v-for=" item in currentItem.options" :key="item.id">
                                        <template v-slot:default="{ active, toggle }">
                                            <v-list-item-action>
                                                <v-checkbox
                                                    v-model="active"
                                                    color="primary"
                                                    @click="toggle"
                                                ></v-checkbox>
                                            </v-list-item-action>
                                            <v-list-item-content>
                                                    <div>{{item.description}}</div>
                                                    <v-img v-if="item.image" :src="item.image" aspect-ratio="6" contain></v-img>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <v-scroll-x-transition>
                                                    <v-icon v-if="!!status && item.is_correct" color="success">
                                                        mdi-check
                                                    </v-icon>
                                                    <v-icon v-if="!!status && !item.is_correct" color="pink">mdi-close
                                                    </v-icon>
                                                </v-scroll-x-transition>
                                            </v-list-item-action>
                                        </template>
                                    </v-list-item>

                                </v-list-item-group>
                            </v-list>
                            <v-divider></v-divider>
                            <div class="spacing-playground py-2 d-flex justify-space-between">
                                <div class="d-flex align-center">
                                    <strong class="pr-4 success--text text--light-1">
                                        Correct: {{correctNum}}
                                    </strong>
                                    <v-divider vertical></v-divider>
                                    <strong class="pl-4 pink--text text--light-1">
                                        Incorrect: {{incorrectNum}}
                                    </strong>
                                </div>
                                <v-btn v-if="isLastOne" color="primary" dark @click="finished">Finished</v-btn>
                                <v-btn v-else :rounded="!status" color="primary" dark @click="toggleStatus()">{{ !status ?
                                    'Confirm' : 'Next'}}
                                </v-btn>
                            </div>
                            <v-divider></v-divider>
                            <v-subheader>Progress ({{index + 1}} / {{ mockItems.length }})</v-subheader>
                            <div class="spacing-playground pl-5 pb-5 d-flex flex-wrap">
                                <v-sheet
                                    v-for="(item, i ) in mockItems"
                                    :key="i"
                                    class="d-flex"
                                    :color="`${getItemColor(item, i)} lighten-1 mr-min`"
                                    height="20"
                                    min-width="8"
                                >
                                </v-sheet>
                            </div>
                            <v-divider></v-divider>
                            <v-slide-y-reverse-transition>
                                <div v-if="status">
                                    <v-subheader >Description</v-subheader>
                                    <div class="mt-2 font-weight-light d-flex flex-wrap" v-html="currentItem.description || 'No Explanation'"></div>
                                </div>
                            </v-slide-y-reverse-transition>
                        </base-material-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-scroll-x-transition>
    </div>
</template>

<script>
    import {mapActions, mapState, mapMutations} from 'vuex'

    export default {
        name: "mockTest",
        props: {
            type: {
                type: String,
                default: 'all',
            },
            length: {
                type: String | Number,
                default: 30,
            }
        },
        data: () => ({
            loading: false,
            usersAnswers: [],
            status: false, // false = answer  true = next
            categories: [
                'All',
                'Core',
                'Behavior',
                'Parking',
                'Emergencies',
                'Road Position',
                'Intersection',
                'Theory',
                'Signs',
            ]
        }),
        computed: {
            ...mapState({
                mockItems: state => state.mock.mockItems,
                index: state => state.mock.index,
            }),
            currentItem() {
                const items = [...this.mockItems];
                return items[this.index] || {};
            },
            correctNum(){
                const items = [...this.mockItems].slice(0, this.index+1);
                return items.filter(item => item.marked === true).length
            },
            incorrectNum(){
                const items = [...this.mockItems].slice(0, this.index+1);
                return items.filter(item => item.marked === false).length
            },
            isAnswered(){
                if(this.usersAnswers instanceof Array){
                    return this.usersAnswers.length > 0
                }
                return this.usersAnswers !== null;
            },
            isMultiple() {
                return this.currentItem.input === 'Checkbox';
            },
            isLastOne(){
                return this.index === this.mockItems.length - 1 && this.status;
            },
            len() {
                return parseInt(this.length) > 30 ? 50 : 30;
            },
            icon() {
                return this.type === 'all' ? 'mdi-test-tube' : 'mdi-ruler-square-compass'
            },
            title() {
                return this.type === 'all' ? 'All Categories' : this.categories[parseInt(this.type)];
            }
        },
        watch:{
            '$route':function(to){
                if(to.name === 'mock'){
                    this.getInitial('all',to.params.id)
                }else{
                    this.getInitial(to.params.id, 30)
                }
            }
        },
        methods: {
            ...mapActions({
                getMockItems: "mock/getMockItems",
            }),
            ...mapMutations({
                setIndex: "mock/SET_INDEX",
                setMockItems: "mock/SET_MOCK_ITEMS",
            }),
            getItemColor(item, index){
                if(index === this.index && !this.status){
                    return  'grey'
                }
                if(index > this.index){
                    return  'grey'
                }
                if(item.marked){
                    return 'success'
                }
                if(!item.marked){
                    return 'pink'
                }
            },
            checkUsersAnswers(){
                const items = this.isMultiple ? [...this.usersAnswers] : [this.usersAnswers];
                const arr = [...this.currentItem.options]
                const usersAnswers = items.map(n => this.currentItem.options[n].id).sort((a,b) => b - a);
                const corrects = arr.filter(item => item.is_correct).map(item => item.id).sort((a,b) => b - a)
                return JSON.stringify(usersAnswers) === JSON.stringify(corrects)
            },
            toggleStatus() {
                if(!this.isAnswered){
                    return this.$store.dispatch('notice/show', 'You haven\'t answered yet!')
                }
                if(this.status){
                    this.loading = true;
                    this.usersAnswers = this.mockItems[this.index + 1].input === 'Checkbox' ? [] : null;
                    this.setIndex(Math.min( this.index + 1, this.mockItems.length - 1));
                    setTimeout(() => {
                        this.loading = false
                    }, 500)
                }else{
                    const items = [...this.mockItems]
                    items[this.index].marked =  this.checkUsersAnswers()
                    this.setMockItems(items)
                }
                this.status = !this.status
            },
            finished(){
                this.$store.dispatch('notice/show', 'You have already finished all questions!')
            },
            getInitial(type, length){
                this.loading = true;
                this.getMockItems({type: type, length: length}).then(() => {
                    this.loading = false;
                })
            }
        },
        created() {
            this.getInitial(this.type, this.len)
        }
    }
</script>

<style lang="scss" scoped>

    .container-main {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://demos.creative-tim.com/vuetify-material-dashboard-pro/img/clint-mckoy.36f95307.jpg");
        background-position: center center;
        min-height: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;

        .mr-min {
            margin-right: 1px;
            margin-top: 1px;
        }
    }

</style>
