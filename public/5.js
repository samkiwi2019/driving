(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ListQuiz.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/ListQuiz.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      dialog: false,
      headers: [{
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Calories',
        value: 'calories'
      }, {
        text: 'Fat (g)',
        value: 'fat'
      }, {
        text: 'Carbs (g)',
        value: 'carbs'
      }, {
        text: 'Protein (g)',
        value: 'protein'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      this.desserts = [{
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0
      }, {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3
      }, {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0
      }, {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3
      }, {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9
      }, {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0
      }, {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0
      }, {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5
      }, {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9
      }, {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7
      }];
    },
    editItem: function editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var index = this.desserts.indexOf(item);
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1);
    },
    close: function close() {
      var _this = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this.editedItem = Object.assign({}, _this.defaultItem);
        _this.editedIndex = -1;
      });
    },
    save: function save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }

      this.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ListQuiz.vue?vue&type=template&id=fffc5f04&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/ListQuiz.vue?vue&type=template&id=fffc5f04& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("v-data-table", {
    staticClass: "elevation-1",
    attrs: { headers: _vm.headers, items: _vm.desserts, "sort-by": "calories" },
    scopedSlots: _vm._u([
      {
        key: "top",
        fn: function() {
          return [
            _c(
              "v-toolbar",
              { attrs: { flat: "", color: "dark" } },
              [
                _c("v-toolbar-title", [_vm._v("My CRUD")]),
                _vm._v(" "),
                _c("v-divider", {
                  staticClass: "mx-4",
                  attrs: { inset: "", vertical: "" }
                }),
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
                                    attrs: { color: "primary", dark: "" }
                                  },
                                  "v-btn",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [_vm._v("New Item")]
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
                                        attrs: { cols: "12", sm: "6", md: "4" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: { label: "Dessert name" },
                                          model: {
                                            value: _vm.editedItem.name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "name",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.name"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        attrs: { cols: "12", sm: "6", md: "4" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: { label: "Calories" },
                                          model: {
                                            value: _vm.editedItem.calories,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "calories",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.calories"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        attrs: { cols: "12", sm: "6", md: "4" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: { label: "Fat (g)" },
                                          model: {
                                            value: _vm.editedItem.fat,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "fat",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.fat"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        attrs: { cols: "12", sm: "6", md: "4" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: { label: "Carbs (g)" },
                                          model: {
                                            value: _vm.editedItem.carbs,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "carbs",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.carbs"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        attrs: { cols: "12", sm: "6", md: "4" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: { label: "Protein (g)" },
                                          model: {
                                            value: _vm.editedItem.protein,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "protein",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.protein"
                                          }
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
                                attrs: { color: "blue darken-1", text: "" },
                                on: { click: _vm.close }
                              },
                              [_vm._v("Cancel")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { color: "blue darken-1", text: "" },
                                on: { click: _vm.save }
                              },
                              [_vm._v("Save")]
                            )
                          ],
                          1
                        )
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
              [_vm._v("\n            mdi-pencil\n        ")]
            ),
            _vm._v(" "),
            _c(
              "v-icon",
              {
                attrs: { small: "" },
                on: {
                  click: function($event) {
                    return _vm.deleteItem(item)
                  }
                }
              },
              [_vm._v("\n            mdi-delete\n        ")]
            )
          ]
        }
      },
      {
        key: "no-data",
        fn: function() {
          return [
            _c(
              "v-btn",
              { attrs: { color: "primary" }, on: { click: _vm.initialize } },
              [_vm._v("Reset")]
            )
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/ListQuiz.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/ListQuiz.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListQuiz_vue_vue_type_template_id_fffc5f04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListQuiz.vue?vue&type=template&id=fffc5f04& */ "./resources/js/components/admin/ListQuiz.vue?vue&type=template&id=fffc5f04&");
/* harmony import */ var _ListQuiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListQuiz.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/ListQuiz.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListQuiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListQuiz_vue_vue_type_template_id_fffc5f04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListQuiz_vue_vue_type_template_id_fffc5f04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/ListQuiz.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/ListQuiz.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/ListQuiz.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListQuiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListQuiz.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ListQuiz.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListQuiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/ListQuiz.vue?vue&type=template&id=fffc5f04&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/ListQuiz.vue?vue&type=template&id=fffc5f04& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListQuiz_vue_vue_type_template_id_fffc5f04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListQuiz.vue?vue&type=template&id=fffc5f04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ListQuiz.vue?vue&type=template&id=fffc5f04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListQuiz_vue_vue_type_template_id_fffc5f04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListQuiz_vue_vue_type_template_id_fffc5f04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);