(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/UserList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/UserList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "userList",
  data: function data() {
    return {
      dialog: false,
      roles: ["member"],
      options: {},
      loading: false,
      headers: [{
        text: 'ID',
        align: 'start',
        sortable: true,
        value: 'id'
      }, {
        text: 'Name',
        sortable: false,
        value: 'name'
      }, {
        text: 'Email',
        sortable: false,
        value: 'email'
      }, {
        text: 'Nickname',
        sortable: false,
        value: 'nickname'
      }, {
        text: 'Role',
        sortable: false,
        value: 'role'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        email: '',
        nickname: '',
        role: '',
        password: '',
        password_confirmation: ''
      },
      defaultItem: {
        id: '',
        name: '',
        email: '',
        nickname: '',
        role: 'member',
        password: '',
        password_confirmation: ''
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    page: function page(state) {
      return state.customer.page;
    },
    size: function size(state) {
      return state.customer.size;
    },
    total: function total(state) {
      return state.customer.total;
    },
    customerItems: function customerItems(state) {
      return state.customer.customerItems;
    }
  })), {}, {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    }
  }),
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    options: {
      deep: true,
      handler: function handler() {
        var page = this.options.page;
        var itemsPerPage = this.options.itemsPerPage;

        if (this.options.itemsPerPage === -1) {
          itemsPerPage = this.total;
        }

        this.getCustomers(page, itemsPerPage);
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    addCustomer: 'customer/addCustomer',
    updateCustomerById: 'customer/updateCustomerById',
    deleteCustomerById: 'customer/deleteCustomerById'
  })), {}, {
    getCustomers: function getCustomers() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.size;
      this.loading = true;
      this.$store.dispatch('customer/getCustomerList', {
        page: page,
        size: size
      }).then(function () {
        _this.loading = false;
      });
    },
    getRole: function getRole(role) {
      switch (role) {
        case 11:
          role = 'SuperAdmin';
          break;

        default:
          role = "Member";
      }

      return role;
    },
    editItem: function editItem(item) {
      this.editedIndex = this.customerItems.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(id) {
      var _this2 = this;

      if (confirm('Are you sure you want to delete this item?')) {
        this.deleteCustomerById(id).then(function (data) {
          _this2.getCustomers();

          _this2.$store.dispatch('notice/show', data.message);
        });
      }
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      });
    },
    save: function save() {
      var _this4 = this;

      if (this.editedIndex > -1) {
        this.updateCustomerById(this.editedItem).then(function (data) {
          _this4.getCustomers();

          _this4.$store.dispatch('notice/show', data.message);
        });
      } else {
        // New a customer
        this.addCustomer(this.editedItem).then(function (data) {
          _this4.getCustomers();

          _this4.$store.dispatch('notice/show', data.message);
        });
      }

      this.close();
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/UserList.vue?vue&type=style&index=0&id=7fe42fb0&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/UserList.vue?vue&type=style&index=0&id=7fe42fb0&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-card--material-heading[data-v-7fe42fb0] {\n  transform: translateY(-10px);\n  border-radius: 4px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/UserList.vue?vue&type=style&index=0&id=7fe42fb0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/UserList.vue?vue&type=style&index=0&id=7fe42fb0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=7fe42fb0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/UserList.vue?vue&type=style&index=0&id=7fe42fb0&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/UserList.vue?vue&type=template&id=7fe42fb0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/UserList.vue?vue&type=template&id=7fe42fb0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { id: "user-profile", fluid: "", tag: "section" } },
    [
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("v-data-table", {
                staticClass: "elevation-4",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.customerItems,
                  "sort-by": "correct_rate",
                  "server-items-length": _vm.total,
                  options: _vm.options,
                  loading: _vm.loading
                },
                on: {
                  "update:options": function($event) {
                    _vm.options = $event
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "top",
                    fn: function() {
                      return [
                        _c(
                          "v-toolbar",
                          { attrs: { flat: "", color: "dark" } },
                          [
                            _c(
                              "v-sheet",
                              {
                                staticClass:
                                  "d-flex pa-7 v-card--material-heading",
                                attrs: {
                                  color: "success",
                                  height: "88",
                                  width: "88",
                                  dark: "",
                                  elevation: "6"
                                }
                              },
                              [
                                _c(
                                  "v-icon",
                                  { attrs: { dark: "", size: "32" } },
                                  [_vm._v("mdi-clipboard-text")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-toolbar-title", { staticClass: "ml-4" }, [
                              _vm._v("Users table")
                            ]),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-dialog",
                              {
                                attrs: { "max-width": "500px" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass: "mb-2",
                                                attrs: {
                                                  color: "primary",
                                                  dark: ""
                                                }
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [
                                            _vm._v(
                                              "New User\n                                "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ]),
                                model: {
                                  value: _vm.dialog,
                                  callback: function($$v) {
                                    _vm.dialog = $$v
                                  },
                                  expression: "dialog"
                                }
                              },
                              [
                                _vm._v(" "),
                                _c(
                                  "v-card",
                                  [
                                    _c("v-card-title", [
                                      _c("span", { staticClass: "headline" }, [
                                        _vm._v(_vm._s(_vm.formTitle))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("ValidationObserver", {
                                      ref: "observer",
                                      scopedSlots: _vm._u([
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var handleSubmit = ref.handleSubmit
                                            var valid = ref.valid
                                            return [
                                              _c(
                                                "v-card-text",
                                                [
                                                  _c(
                                                    "v-container",
                                                    [
                                                      _c(
                                                        "v-row",
                                                        [
                                                          _c(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "4"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    label: "Id",
                                                                    disabled: ""
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .editedItem
                                                                        .id,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.editedItem,
                                                                        "id",
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "editedItem.id"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "4"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "name",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "v-text-field",
                                                                              {
                                                                                attrs: {
                                                                                  "error-messages": errors,
                                                                                  label:
                                                                                    "Name",
                                                                                  required:
                                                                                    ""
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm
                                                                                      .editedItem
                                                                                      .name,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm.editedItem,
                                                                                      "name",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "editedItem.name"
                                                                                }
                                                                              }
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "4"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "email",
                                                                    rules:
                                                                      "required|email"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "v-text-field",
                                                                              {
                                                                                attrs: {
                                                                                  "error-messages": errors,
                                                                                  label:
                                                                                    "E-mail",
                                                                                  required:
                                                                                    ""
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm
                                                                                      .editedItem
                                                                                      .email,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm.editedItem,
                                                                                      "email",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "editedItem.email"
                                                                                }
                                                                              }
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "4"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "nickname",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "v-text-field",
                                                                              {
                                                                                attrs: {
                                                                                  "error-messages": errors,
                                                                                  label:
                                                                                    "Nickname",
                                                                                  required:
                                                                                    ""
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm
                                                                                      .editedItem
                                                                                      .nickname,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm.editedItem,
                                                                                      "nickname",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "editedItem.nickname"
                                                                                }
                                                                              }
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "4"
                                                              }
                                                            },
                                                            [
                                                              _c("v-select", {
                                                                attrs: {
                                                                  items:
                                                                    _vm.roles,
                                                                  label: "Role"
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm
                                                                      .editedItem
                                                                      .role,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.editedItem,
                                                                      "role",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "editedItem.role"
                                                                }
                                                              })
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _vm.editedIndex === -1
                                                            ? _c(
                                                                "v-col",
                                                                {
                                                                  attrs: {
                                                                    cols: "12",
                                                                    sm: "6",
                                                                    md: "4"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "ValidationProvider",
                                                                    {
                                                                      attrs: {
                                                                        name:
                                                                          "password",
                                                                        rules:
                                                                          "required|min:8"
                                                                      },
                                                                      scopedSlots: _vm._u(
                                                                        [
                                                                          {
                                                                            key:
                                                                              "default",
                                                                            fn: function(
                                                                              ref
                                                                            ) {
                                                                              var errors =
                                                                                ref.errors
                                                                              return [
                                                                                _c(
                                                                                  "v-text-field",
                                                                                  {
                                                                                    attrs: {
                                                                                      "error-messages": errors,
                                                                                      label:
                                                                                        "Password",
                                                                                      type:
                                                                                        "password",
                                                                                      required:
                                                                                        ""
                                                                                    },
                                                                                    model: {
                                                                                      value:
                                                                                        _vm
                                                                                          .editedItem
                                                                                          .password,
                                                                                      callback: function(
                                                                                        $$v
                                                                                      ) {
                                                                                        _vm.$set(
                                                                                          _vm.editedItem,
                                                                                          "password",
                                                                                          $$v
                                                                                        )
                                                                                      },
                                                                                      expression:
                                                                                        "editedItem.password"
                                                                                    }
                                                                                  }
                                                                                )
                                                                              ]
                                                                            }
                                                                          }
                                                                        ],
                                                                        null,
                                                                        true
                                                                      )
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _vm.editedIndex === -1
                                                            ? _c(
                                                                "v-col",
                                                                {
                                                                  attrs: {
                                                                    cols: "12",
                                                                    sm: "6",
                                                                    md: "4"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "ValidationProvider",
                                                                    {
                                                                      attrs: {
                                                                        name:
                                                                          "password_confirmation",
                                                                        rules:
                                                                          "required|min:8"
                                                                      },
                                                                      scopedSlots: _vm._u(
                                                                        [
                                                                          {
                                                                            key:
                                                                              "default",
                                                                            fn: function(
                                                                              ref
                                                                            ) {
                                                                              var errors =
                                                                                ref.errors
                                                                              return [
                                                                                _c(
                                                                                  "v-text-field",
                                                                                  {
                                                                                    attrs: {
                                                                                      "error-messages": errors,
                                                                                      label:
                                                                                        "Password confirmation",
                                                                                      type:
                                                                                        "password",
                                                                                      required:
                                                                                        ""
                                                                                    },
                                                                                    model: {
                                                                                      value:
                                                                                        _vm
                                                                                          .editedItem
                                                                                          .password_confirmation,
                                                                                      callback: function(
                                                                                        $$v
                                                                                      ) {
                                                                                        _vm.$set(
                                                                                          _vm.editedItem,
                                                                                          "password_confirmation",
                                                                                          $$v
                                                                                        )
                                                                                      },
                                                                                      expression:
                                                                                        "editedItem.password_confirmation"
                                                                                    }
                                                                                  }
                                                                                )
                                                                              ]
                                                                            }
                                                                          }
                                                                        ],
                                                                        null,
                                                                        true
                                                                      )
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            : _vm._e()
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-card-actions",
                                                [
                                                  _c("v-spacer"),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "blue darken-1",
                                                        text: ""
                                                      },
                                                      on: { click: _vm.close }
                                                    },
                                                    [_vm._v("Cancel")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "blue darken-1",
                                                        text: ""
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return handleSubmit(
                                                            _vm.save
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Save")]
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          }
                                        }
                                      ])
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "item.actions",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-icon",
                          {
                            staticClass: "mr-2",
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.editItem(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-pencil\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-icon",
                          {
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.deleteItem(item.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-delete\n                    "
                            )
                          ]
                        )
                      ]
                    }
                  },
                  {
                    key: "item.role",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("v-chip", { attrs: { dark: "" } }, [
                          _vm._v(_vm._s(_vm.getRole(item.role)))
                        ])
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/UserList.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/admin/UserList.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_7fe42fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=7fe42fb0&scoped=true& */ "./resources/js/views/admin/UserList.vue?vue&type=template&id=7fe42fb0&scoped=true&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserList_vue_vue_type_style_index_0_id_7fe42fb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList.vue?vue&type=style&index=0&id=7fe42fb0&lang=scss&scoped=true& */ "./resources/js/views/admin/UserList.vue?vue&type=style&index=0&id=7fe42fb0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSheet */ "./node_modules/vuetify/lib/components/VSheet/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_7fe42fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_7fe42fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7fe42fb0",
  null
  
)

/* vuetify-loader */



















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__["VSelect"],VSheet: vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_13__["VSheet"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/UserList.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/admin/UserList.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/UserList.vue?vue&type=style&index=0&id=7fe42fb0&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/admin/UserList.vue?vue&type=style&index=0&id=7fe42fb0&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_7fe42fb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=7fe42fb0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/UserList.vue?vue&type=style&index=0&id=7fe42fb0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_7fe42fb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_7fe42fb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_7fe42fb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_7fe42fb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_7fe42fb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/admin/UserList.vue?vue&type=template&id=7fe42fb0&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/admin/UserList.vue?vue&type=template&id=7fe42fb0&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_7fe42fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=7fe42fb0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/UserList.vue?vue&type=template&id=7fe42fb0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_7fe42fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_7fe42fb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);