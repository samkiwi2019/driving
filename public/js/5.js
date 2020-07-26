(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MockTest.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MockTest.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "mockTest",
  props: {
    type: {
      type: String,
      "default": 'all'
    },
    length: {
      type: String | Number,
      "default": 30
    }
  },
  data: function data() {
    return {
      loading: false,
      usersAnswers: [],
      status: false,
      // false = answer  true = next
      categories: ['All', 'Core', 'Behavior', 'Parking', 'Emergencies', 'Road Position', 'Intersection', 'Theory', 'Signs']
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    mockItems: function mockItems(state) {
      return state.mock.mockItems;
    },
    index: function index(state) {
      return state.mock.index;
    },
    user: function user(state) {
      return state.user.user;
    }
  })), {}, {
    currentItem: function currentItem() {
      var items = _toConsumableArray(this.mockItems);

      return items[this.index] || {};
    },
    correctNum: function correctNum() {
      var items = _toConsumableArray(this.mockItems).slice(0, this.index + 1);

      return items.filter(function (item) {
        return item.marked === true;
      }).length;
    },
    incorrectNum: function incorrectNum() {
      var items = _toConsumableArray(this.mockItems).slice(0, this.index + 1);

      return items.filter(function (item) {
        return item.marked === false;
      }).length;
    },
    isAnswered: function isAnswered() {
      if (this.usersAnswers instanceof Array) {
        return this.usersAnswers.length > 0;
      }

      return this.usersAnswers !== null;
    },
    isMultiple: function isMultiple() {
      return this.currentItem.input === 'Checkbox';
    },
    isLastOne: function isLastOne() {
      return this.index === this.mockItems.length - 1 && this.status;
    },
    len: function len() {
      return parseInt(this.length) > 30 ? 50 : 30;
    },
    icon: function icon() {
      return this.type === 'all' ? 'mdi-test-tube' : 'mdi-ruler-square-compass';
    },
    title: function title() {
      return this.type === 'all' ? 'All Categories' : this.categories[parseInt(this.type)];
    }
  }),
  watch: {
    '$route': function $route(to) {
      if (to.name === 'mock') {
        this.getInitial('all', to.params.id);
      } else {
        this.getInitial(to.params.id, 30);
      }
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getMockItems: "mock/getMockItems",
    createRecordItem: "record/createRecordItem"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])({
    setIndex: "mock/SET_INDEX",
    setMockItems: "mock/SET_MOCK_ITEMS"
  })), {}, {
    getItemColor: function getItemColor(item, index) {
      if (index === this.index && !this.status) {
        return 'grey';
      }

      if (index > this.index) {
        return 'grey';
      }

      if (item.marked) {
        return 'success';
      }

      if (!item.marked) {
        return 'pink';
      }
    },
    checkUsersAnswers: function checkUsersAnswers() {
      var _this = this;

      var items = this.isMultiple ? _toConsumableArray(this.usersAnswers) : [this.usersAnswers];

      var arr = _toConsumableArray(this.currentItem.options);

      var usersAnswers = items.map(function (n) {
        return _this.currentItem.options[n].id;
      }).sort(function (a, b) {
        return b - a;
      });
      var corrects = arr.filter(function (item) {
        return item.is_correct;
      }).map(function (item) {
        return item.id;
      }).sort(function (a, b) {
        return b - a;
      });

      if (this.$route.name === 'mock') {
        this.createRecordItem({
          user_id: this.user.id,
          quiz_id: this.currentItem.id,
          my_answers: usersAnswers.join(',')
        });
      }

      return JSON.stringify(usersAnswers) === JSON.stringify(corrects);
    },
    toggleStatus: function toggleStatus() {
      var _this2 = this;

      if (!this.isAnswered) {
        return this.$store.dispatch('notice/show', 'You haven\'t answered yet!');
      }

      if (this.status) {
        this.loading = true;
        this.usersAnswers = this.mockItems[this.index + 1].input === 'Checkbox' ? [] : null;
        this.setIndex(Math.min(this.index + 1, this.mockItems.length - 1));
        setTimeout(function () {
          _this2.loading = false;
        }, 500);
      } else {
        var items = _toConsumableArray(this.mockItems);

        items[this.index].marked = this.checkUsersAnswers();
        this.setMockItems(items);
      }

      this.status = !this.status;
    },
    finished: function finished() {
      this.$store.dispatch('notice/show', 'You have already finished all questions!');
    },
    getInitial: function getInitial(type, length) {
      var _this3 = this;

      this.loading = true;
      this.getMockItems({
        type: type,
        length: length
      }).then(function () {
        _this3.loading = false;
      });
    }
  }),
  created: function created() {
    this.getInitial(this.type, this.len);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MockTest.vue?vue&type=style&index=0&id=207d34a7&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MockTest.vue?vue&type=style&index=0&id=207d34a7&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container-main[data-v-207d34a7] {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"https://demos.creative-tim.com/vuetify-material-dashboard-pro/img/clint-mckoy.36f95307.jpg\");\n  background-position: center center;\n  min-height: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n.container-main .mr-min[data-v-207d34a7] {\n  margin-right: 1px;\n  margin-top: 1px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MockTest.vue?vue&type=style&index=0&id=207d34a7&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MockTest.vue?vue&type=style&index=0&id=207d34a7&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MockTest.vue?vue&type=style&index=0&id=207d34a7&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MockTest.vue?vue&type=style&index=0&id=207d34a7&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MockTest.vue?vue&type=template&id=207d34a7&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MockTest.vue?vue&type=template&id=207d34a7&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "container-main pt-16" },
    [
      _c(
        "v-scroll-x-transition",
        [
          !_vm.loading && _vm.mockItems.length > 0
            ? _c(
                "v-container",
                { attrs: { id: "mock-test", fluid: "", tag: "section" } },
                [
                  _c(
                    "v-row",
                    { attrs: { justify: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "8" } },
                        [
                          _c(
                            "base-material-card",
                            {
                              staticClass: "px-5",
                              attrs: {
                                color: "success",
                                icon: _vm.icon,
                                title: _vm.title
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "mb-2" },
                                [
                                  _vm.currentItem.image
                                    ? _c("v-img", {
                                        attrs: {
                                          src: _vm.currentItem.image,
                                          "aspect-ratio": "2",
                                          contain: ""
                                        }
                                      })
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.currentItem.image
                                ? _c("v-divider")
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "blockquote",
                                {
                                  staticClass: "blockquote font-weight-medium"
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.index + 1) +
                                      ". " +
                                      _vm._s(_vm.currentItem.question) +
                                      "\n\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c("v-subheader", [
                                _vm._v(
                                  _vm._s(
                                    _vm.isMultiple
                                      ? "multiple answers"
                                      : "single answer"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-list",
                                { attrs: { disabled: !!_vm.status } },
                                [
                                  _c(
                                    "v-list-item-group",
                                    {
                                      attrs: {
                                        multiple: _vm.isMultiple,
                                        "active-class": "primary--text"
                                      },
                                      model: {
                                        value: _vm.usersAnswers,
                                        callback: function($$v) {
                                          _vm.usersAnswers = $$v
                                        },
                                        expression: "usersAnswers"
                                      }
                                    },
                                    _vm._l(_vm.currentItem.options, function(
                                      item
                                    ) {
                                      return _c("v-list-item", {
                                        key: item.id,
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var active = ref.active
                                                var toggle = ref.toggle
                                                return [
                                                  _c(
                                                    "v-list-item-action",
                                                    [
                                                      _c("v-checkbox", {
                                                        attrs: {
                                                          color: "primary"
                                                        },
                                                        on: { click: toggle },
                                                        model: {
                                                          value: active,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            active = $$v
                                                          },
                                                          expression: "active"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c("div", [
                                                        _vm._v(
                                                          _vm._s(
                                                            item.description
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      item.image
                                                        ? _c("v-img", {
                                                            attrs: {
                                                              src: item.image,
                                                              "aspect-ratio":
                                                                "6",
                                                              contain: ""
                                                            }
                                                          })
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-action",
                                                    [
                                                      _c(
                                                        "v-scroll-x-transition",
                                                        [
                                                          !!_vm.status &&
                                                          item.is_correct
                                                            ? _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      "success"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                    mdi-check\n                                                "
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          !!_vm.status &&
                                                          !item.is_correct
                                                            ? _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      "pink"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "mdi-close\n                                                "
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e()
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    }),
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "spacing-playground py-2 d-flex justify-space-between"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "d-flex align-center" },
                                    [
                                      _c(
                                        "strong",
                                        {
                                          staticClass:
                                            "pr-4 success--text text--light-1"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    Correct: " +
                                              _vm._s(_vm.correctNum) +
                                              "\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("v-divider", {
                                        attrs: { vertical: "" }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "strong",
                                        {
                                          staticClass:
                                            "pl-4 pink--text text--light-1"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    Incorrect: " +
                                              _vm._s(_vm.incorrectNum) +
                                              "\n                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.isLastOne
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "primary", dark: "" },
                                          on: { click: _vm.finished }
                                        },
                                        [_vm._v("Finished")]
                                      )
                                    : _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            rounded: !_vm.status,
                                            color: "primary",
                                            dark: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.toggleStatus()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              !_vm.status ? "Confirm" : "Next"
                                            ) + "\n                            "
                                          )
                                        ]
                                      )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c("v-subheader", [
                                _vm._v(
                                  "Progress (" +
                                    _vm._s(_vm.index + 1) +
                                    " / " +
                                    _vm._s(_vm.mockItems.length) +
                                    ")"
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "spacing-playground pl-5 pb-5 d-flex flex-wrap"
                                },
                                _vm._l(_vm.mockItems, function(item, i) {
                                  return _c("v-sheet", {
                                    key: i,
                                    staticClass: "d-flex",
                                    attrs: {
                                      color:
                                        _vm.getItemColor(item, i) +
                                        " lighten-1 mr-min",
                                      height: "20",
                                      "min-width": "8"
                                    }
                                  })
                                }),
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c("v-slide-y-reverse-transition", [
                                _vm.status
                                  ? _c(
                                      "div",
                                      [
                                        _c("v-subheader", [
                                          _vm._v("Description")
                                        ]),
                                        _vm._v(" "),
                                        _c("div", {
                                          staticClass:
                                            "mt-2 font-weight-light d-flex flex-wrap",
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.currentItem.description ||
                                                "No Explanation"
                                            )
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ])
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
            : _vm._e()
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

/***/ "./resources/js/components/MockTest.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/MockTest.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MockTest_vue_vue_type_template_id_207d34a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MockTest.vue?vue&type=template&id=207d34a7&scoped=true& */ "./resources/js/components/MockTest.vue?vue&type=template&id=207d34a7&scoped=true&");
/* harmony import */ var _MockTest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MockTest.vue?vue&type=script&lang=js& */ "./resources/js/components/MockTest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MockTest_vue_vue_type_style_index_0_id_207d34a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockTest.vue?vue&type=style&index=0&id=207d34a7&lang=scss&scoped=true& */ "./resources/js/components/MockTest.vue?vue&type=style&index=0&id=207d34a7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSheet */ "./node_modules/vuetify/lib/components/VSheet/index.js");
/* harmony import */ var vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MockTest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MockTest_vue_vue_type_template_id_207d34a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MockTest_vue_vue_type_template_id_207d34a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "207d34a7",
  null
  
)

/* vuetify-loader */


















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__["VImg"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemContent"],VListItemGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemGroup"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VScrollXTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_12__["VScrollXTransition"],VSheet: vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_13__["VSheet"],VSlideYReverseTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_12__["VSlideYReverseTransition"],VSubheader: vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_14__["VSubheader"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MockTest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MockTest.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/MockTest.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MockTest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MockTest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MockTest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MockTest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MockTest.vue?vue&type=style&index=0&id=207d34a7&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/MockTest.vue?vue&type=style&index=0&id=207d34a7&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MockTest_vue_vue_type_style_index_0_id_207d34a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MockTest.vue?vue&type=style&index=0&id=207d34a7&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MockTest.vue?vue&type=style&index=0&id=207d34a7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MockTest_vue_vue_type_style_index_0_id_207d34a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MockTest_vue_vue_type_style_index_0_id_207d34a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MockTest_vue_vue_type_style_index_0_id_207d34a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MockTest_vue_vue_type_style_index_0_id_207d34a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MockTest_vue_vue_type_style_index_0_id_207d34a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/MockTest.vue?vue&type=template&id=207d34a7&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/MockTest.vue?vue&type=template&id=207d34a7&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MockTest_vue_vue_type_template_id_207d34a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MockTest.vue?vue&type=template&id=207d34a7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MockTest.vue?vue&type=template&id=207d34a7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MockTest_vue_vue_type_template_id_207d34a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MockTest_vue_vue_type_template_id_207d34a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);