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
                    :items="customerItems"
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
                            <v-toolbar-title class="ml-4">Users table</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="500px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="primary"
                                        dark
                                        class="mb-2"
                                        v-bind="attrs"
                                        v-on="on"
                                    >New User
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">{{ formTitle }}</span>
                                    </v-card-title>
                                    <ValidationObserver ref="observer" v-slot="{ handleSubmit ,valid}">
                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field
                                                            v-model="editedItem.id"
                                                            label="Id"
                                                            disabled
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <ValidationProvider v-slot="{ errors }" name="name"
                                                                            rules="required">
                                                            <v-text-field
                                                                v-model="editedItem.name"
                                                                :error-messages="errors"
                                                                label="Name"
                                                                required
                                                            ></v-text-field>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <ValidationProvider v-slot="{ errors }" name="email"
                                                                            rules="required|email">
                                                            <v-text-field
                                                                v-model="editedItem.email"
                                                                :error-messages="errors"
                                                                label="E-mail"
                                                                required
                                                            ></v-text-field>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <ValidationProvider v-slot="{ errors }" name="nickname"
                                                                            rules="required">
                                                            <v-text-field
                                                                v-model="editedItem.nickname"
                                                                :error-messages="errors"
                                                                label="Nickname"
                                                                required
                                                            ></v-text-field>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-select
                                                            v-model="editedItem.role"
                                                            :items="roles"
                                                            label="Role"
                                                        ></v-select>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4" v-if="editedIndex === -1">
                                                        <ValidationProvider v-slot="{ errors }" name="password"
                                                                            rules="required|min:8">
                                                            <v-text-field
                                                                v-model="editedItem.password"
                                                                :error-messages="errors"
                                                                label="Password"
                                                                type="password"
                                                                required
                                                            ></v-text-field>
                                                        </ValidationProvider>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4" v-if="editedIndex === -1">
                                                        <ValidationProvider v-slot="{ errors }"
                                                                            name="password_confirmation"
                                                                            rules="required|min:8">
                                                            <v-text-field
                                                                v-model="editedItem.password_confirmation"
                                                                :error-messages="errors"
                                                                label="Password confirmation"
                                                                type="password"
                                                                required
                                                            ></v-text-field>
                                                        </ValidationProvider>
                                                    </v-col>
                                                </v-row>

                                            </v-container>
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                            <v-btn color="blue darken-1" text @click="handleSubmit(save)">Save</v-btn>
                                        </v-card-actions>
                                    </ValidationObserver>
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
                            @click="deleteItem(item.id)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:item.role="{ item }">
                        <v-chip dark>{{getRole(item.role)}}</v-chip>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "userList",
        data: () => ({
            dialog: false,
            roles: ["member"],
            options: {},
            loading: false,
            headers: [
                {
                    text: 'ID',
                    align: 'start',
                    sortable: true,
                    value: 'id',
                },
                {text: 'Name', sortable: false, value: 'name'},
                {text: 'Email', sortable: false, value: 'email'},
                {text: 'Nickname', sortable: false, value: 'nickname'},
                {text: 'Role', sortable: false, value: 'role'},
                {text: 'Actions', value: 'actions', sortable: false},
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                id: '',
                name: '',
                email: '',
                nickname: '',
                role: '',
                password: '',
                password_confirmation: '',
            },
            defaultItem: {
                id: '',
                name: '',
                email: '',
                nickname: '',
                role: 'member',
                password: '',
                password_confirmation: '',
            },
        }),

        computed: {
            ...mapState({
                page: state => state.customer.page,
                size: state => state.customer.size,
                total: state => state.customer.total,
                customerItems: state => state.customer.customerItems,
            }),
            formTitle() {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            },
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            options: {
                deep: true,
                handler() {
                    let page = this.options.page;
                    let itemsPerPage = this.options.itemsPerPage;
                    if (this.options.itemsPerPage === -1) {
                        itemsPerPage = this.total
                    }
                    this.getCustomers(page, itemsPerPage)
                },
            }
        },

        methods: {
            ...mapActions({
                addCustomer: 'customer/addCustomer',
                updateCustomerById: 'customer/updateCustomerById',
                deleteCustomerById: 'customer/deleteCustomerById',
            }),
            getCustomers(page = this.page, size = this.size) {
                this.loading = true;
                this.$store.dispatch('customer/getCustomerList', {page: page, size: size}).then(() => {
                    this.loading = false;
                })
            },
            getRole(role) {
                switch (role) {
                    case 11 :
                        role = 'SuperAdmin';
                        break;
                    default :
                        role = "Member"
                }
                return role;
            },
            editItem(item) {
                this.editedIndex = this.customerItems.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(id) {
                if (confirm('Are you sure you want to delete this item?')) {
                    this.deleteCustomerById(id).then((data) => {
                        this.getCustomers()
                        this.$store.dispatch('notice/show', data.message)
                    })
                }
            },

            close() {
                this.dialog = false;
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save() {
                if (this.editedIndex > -1) {
                    this.updateCustomerById(this.editedItem).then((data) => {
                        this.getCustomers()
                        this.$store.dispatch('notice/show', data.message)
                    });
                } else {
                    // New a customer
                    this.addCustomer(this.editedItem).then((data) => {
                        this.getCustomers()
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
