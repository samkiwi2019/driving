(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DashboardDashboard',
  data: function data() {
    return {
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50,
          // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000,
          // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function labelInterpolationFnc(value) {
              return value[0];
            }
          }
        }]]
      },
      headers: [{
        sortable: false,
        text: 'ID',
        value: 'id'
      }, {
        sortable: false,
        text: 'Name',
        value: 'name'
      }, {
        sortable: false,
        text: 'Salary',
        value: 'salary',
        align: 'right'
      }, {
        sortable: false,
        text: 'Country',
        value: 'country',
        align: 'right'
      }, {
        sortable: false,
        text: 'City',
        value: 'city',
        align: 'right'
      }],
      items: [{
        id: 1,
        name: 'Dakota Rice',
        country: 'Niger',
        city: 'Oud-Tunrhout',
        salary: '$35,738'
      }, {
        id: 2,
        name: 'Minerva Hooper',
        country: 'Curaçao',
        city: 'Sinaai-Waas',
        salary: '$23,738'
      }, {
        id: 3,
        name: 'Sage Rodriguez',
        country: 'Netherlands',
        city: 'Overland Park',
        salary: '$56,142'
      }, {
        id: 4,
        name: 'Philip Chanley',
        country: 'Korea, South',
        city: 'Gloucester',
        salary: '$38,735'
      }, {
        id: 5,
        name: 'Doris Greene',
        country: 'Malawi',
        city: 'Feldkirchen in Kārnten',
        salary: '$63,542'
      }],
      tabs: 0,
      tasks: {
        0: [{
          text: 'Sign contract for "What are conference organizers afraid of?"',
          value: true
        }, {
          text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
          value: false
        }, {
          text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
          value: false
        }, {
          text: 'Create 4 Invisible User Experiences you Never Knew About',
          value: true
        }],
        1: [{
          text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
          value: true
        }, {
          text: 'Sign contract for "What are conference organizers afraid of?"',
          value: false
        }],
        2: [{
          text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
          value: false
        }, {
          text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
          value: true
        }, {
          text: 'Sign contract for "What are conference organizers afraid of?"',
          value: true
        }]
      },
      list: {
        0: false,
        1: false,
        2: false
      }
    };
  },
  methods: {
    complete: function complete(index) {
      this.list[index] = !this.list[index];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "dashboard", fluid: "", tag: "section" } },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "4" } },
            [
              _c(
                "base-material-chart-card",
                {
                  attrs: {
                    data: _vm.emailsSubscriptionChart.data,
                    options: _vm.emailsSubscriptionChart.options,
                    "responsive-options":
                      _vm.emailsSubscriptionChart.responsiveOptions,
                    color: "#E91E63",
                    "hover-reveal": "",
                    type: "Bar"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "reveal-actions",
                      fn: function() {
                        return [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var attrs = ref.attrs
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: { color: "info", icon: "" }
                                            },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "info" } },
                                            [
                                              _vm._v(
                                                "\n                                    mdi-refresh\n                                "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Refresh")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var attrs = ref.attrs
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            { attrs: { light: "", icon: "" } },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [_c("v-icon", [_vm._v("mdi-pencil")])],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Change Date")])]
                          )
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "actions",
                      fn: function() {
                        return [
                          _c(
                            "v-icon",
                            { staticClass: "mr-1", attrs: { small: "" } },
                            [
                              _vm._v(
                                "\n                        mdi-clock-outline\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "caption grey--text font-weight-light"
                            },
                            [_vm._v("updated 10 minutes ago")]
                          )
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "h4",
                    { staticClass: "card-title font-weight-light mt-2 ml-2" },
                    [
                      _vm._v(
                        "\n                    Website Views\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "d-inline-flex font-weight-light ml-2 mt-1"
                    },
                    [
                      _vm._v(
                        "\n                    Last Campaign Performance\n                "
                      )
                    ]
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "4" } },
            [
              _c(
                "base-material-chart-card",
                {
                  attrs: {
                    data: _vm.dailySalesChart.data,
                    options: _vm.dailySalesChart.options,
                    color: "success",
                    "hover-reveal": "",
                    type: "Line"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "reveal-actions",
                      fn: function() {
                        return [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var attrs = ref.attrs
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: { color: "info", icon: "" }
                                            },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "info" } },
                                            [
                                              _vm._v(
                                                "\n                                    mdi-refresh\n                                "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Refresh")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var attrs = ref.attrs
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            { attrs: { light: "", icon: "" } },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [_c("v-icon", [_vm._v("mdi-pencil")])],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Change Date")])]
                          )
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "actions",
                      fn: function() {
                        return [
                          _c(
                            "v-icon",
                            { staticClass: "mr-1", attrs: { small: "" } },
                            [
                              _vm._v(
                                "\n                        mdi-clock-outline\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "caption grey--text font-weight-light"
                            },
                            [_vm._v("updated 4 minutes ago")]
                          )
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "h4",
                    { staticClass: "card-title font-weight-light mt-2 ml-2" },
                    [
                      _vm._v(
                        "\n                    Daily Sales\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "d-inline-flex font-weight-light ml-2 mt-1"
                    },
                    [
                      _c("v-icon", { attrs: { color: "green", small: "" } }, [
                        _vm._v(
                          "\n                        mdi-arrow-up\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "green--text" }, [
                        _vm._v("55%")
                      ]),
                      _vm._v(
                        " \n                    increase in today's sales\n                "
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "4" } },
            [
              _c(
                "base-material-chart-card",
                {
                  attrs: {
                    data: _vm.dataCompletedTasksChart.data,
                    options: _vm.dataCompletedTasksChart.options,
                    "hover-reveal": "",
                    color: "info",
                    type: "Line"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "reveal-actions",
                      fn: function() {
                        return [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var attrs = ref.attrs
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: { color: "info", icon: "" }
                                            },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "info" } },
                                            [
                                              _vm._v(
                                                "\n                                    mdi-refresh\n                                "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Refresh")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var attrs = ref.attrs
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            { attrs: { light: "", icon: "" } },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [_c("v-icon", [_vm._v("mdi-pencil")])],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Change Date")])]
                          )
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "actions",
                      fn: function() {
                        return [
                          _c(
                            "v-icon",
                            { staticClass: "mr-1", attrs: { small: "" } },
                            [
                              _vm._v(
                                "\n                        mdi-clock-outline\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "caption grey--text font-weight-light"
                            },
                            [_vm._v("campaign sent 26 minutes ago")]
                          )
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "card-title font-weight-light mt-2 ml-2" },
                    [
                      _vm._v(
                        "\n                    Completed Tasks\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "d-inline-flex font-weight-light ml-2 mt-1"
                    },
                    [
                      _vm._v(
                        "\n                    Last Last Campaign Performance\n                "
                      )
                    ]
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c("base-material-stats-card", {
                attrs: {
                  color: "info",
                  icon: "mdi-twitter",
                  title: "Followers",
                  value: "+245",
                  "sub-icon": "mdi-clock",
                  "sub-text": "Just Updated"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c("base-material-stats-card", {
                attrs: {
                  color: "primary",
                  icon: "mdi-poll",
                  title: "Website Visits",
                  value: "75.521",
                  "sub-icon": "mdi-tag",
                  "sub-text": "Tracked from Google Analytics"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c("base-material-stats-card", {
                attrs: {
                  color: "success",
                  icon: "mdi-store",
                  title: "Revenue",
                  value: "$ 34,245",
                  "sub-icon": "mdi-calendar",
                  "sub-text": "Last 24 Hours"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6", lg: "3" } },
            [
              _c("base-material-stats-card", {
                attrs: {
                  color: "orange",
                  icon: "mdi-sofa",
                  title: "Bookings",
                  value: "184",
                  "sub-icon": "mdi-alert",
                  "sub-icon-color": "red",
                  "sub-text": "Get More Space..."
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "6" } },
            [
              _c(
                "base-material-card",
                {
                  staticClass: "px-5 py-3",
                  attrs: { color: "warning" },
                  scopedSlots: _vm._u([
                    {
                      key: "heading",
                      fn: function() {
                        return [
                          _c(
                            "div",
                            { staticClass: "display-2 font-weight-light" },
                            [
                              _vm._v(
                                "\n                        Employees Stats\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "subtitle-1 font-weight-light" },
                            [
                              _vm._v(
                                "\n                        New employees on 15th September, 2016\n                    "
                              )
                            ]
                          )
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "reveal-actions",
                      fn: function() {
                        return [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var attrs = ref.attrs
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: { color: "info", icon: "" }
                                            },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "info" } },
                                            [
                                              _vm._v(
                                                "\n                                    mdi-refresh\n                                "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Refresh")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var attrs = ref.attrs
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            { attrs: { light: "", icon: "" } },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [_c("v-icon", [_vm._v("mdi-pencil")])],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Change Date")])]
                          )
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-data-table", {
                        attrs: { headers: _vm.headers, items: _vm.items }
                      })
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
            "v-col",
            { attrs: { cols: "12", md: "6" } },
            [
              _c(
                "base-material-card",
                {
                  staticClass: "px-5 py-3",
                  scopedSlots: _vm._u([
                    {
                      key: "heading",
                      fn: function() {
                        return [
                          _c(
                            "v-tabs",
                            {
                              attrs: {
                                "background-color": "transparent",
                                "slider-color": "white"
                              },
                              model: {
                                value: _vm.tabs,
                                callback: function($$v) {
                                  _vm.tabs = $$v
                                },
                                expression: "tabs"
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "subheading font-weight-light mx-3",
                                  staticStyle: { "align-self": "center" }
                                },
                                [_vm._v("Tasks:")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                { staticClass: "mr-3" },
                                [
                                  _c("v-icon", { staticClass: "mr-2" }, [
                                    _vm._v(
                                      "\n                                mdi-bug\n                            "
                                    )
                                  ]),
                                  _vm._v(
                                    "\n                            Bugs\n                        "
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                { staticClass: "mr-3" },
                                [
                                  _c("v-icon", { staticClass: "mr-2" }, [
                                    _vm._v(
                                      "\n                                mdi-code-tags\n                            "
                                    )
                                  ]),
                                  _vm._v(
                                    "\n                            Website\n                        "
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab",
                                [
                                  _c("v-icon", { staticClass: "mr-2" }, [
                                    _vm._v(
                                      "\n                                mdi-cloud\n                            "
                                    )
                                  ]),
                                  _vm._v(
                                    "\n                            Server\n                        "
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
                      key: "reveal-actions",
                      fn: function() {
                        return [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var attrs = ref.attrs
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: { color: "info", icon: "" }
                                            },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "info" } },
                                            [
                                              _vm._v(
                                                "\n                                    mdi-refresh\n                                "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Refresh")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var attrs = ref.attrs
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            { attrs: { light: "", icon: "" } },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [_c("v-icon", [_vm._v("mdi-pencil")])],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Change Date")])]
                          )
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _vm._v(" "),
                  _c(
                    "v-tabs-items",
                    {
                      staticClass: "transparent",
                      model: {
                        value: _vm.tabs,
                        callback: function($$v) {
                          _vm.tabs = $$v
                        },
                        expression: "tabs"
                      }
                    },
                    _vm._l(3, function(n) {
                      return _c(
                        "v-tab-item",
                        { key: n },
                        [
                          _c(
                            "v-card-text",
                            [
                              _vm._l(_vm.tasks[_vm.tabs], function(task, i) {
                                return [
                                  _c(
                                    "v-row",
                                    { key: i, attrs: { align: "center" } },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "1" } },
                                        [
                                          _c(
                                            "v-list-item-action",
                                            [
                                              _c("v-checkbox", {
                                                attrs: { color: "secondary" },
                                                model: {
                                                  value: task.value,
                                                  callback: function($$v) {
                                                    _vm.$set(task, "value", $$v)
                                                  },
                                                  expression: "task.value"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-col", { attrs: { cols: "9" } }, [
                                        _c("div", {
                                          staticClass: "font-weight-light",
                                          domProps: {
                                            textContent: _vm._s(task.text)
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-right",
                                          attrs: { cols: "2" }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { staticClass: "mx-1" },
                                            [
                                              _vm._v(
                                                "\n                                            mdi-pencil\n                                        "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "mx-1",
                                              attrs: { color: "error" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            mdi-close\n                                        "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              })
                            ],
                            2
                          )
                        ],
                        1
                      )
                    }),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/Dashboard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_22ef35f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=22ef35f6& */ "./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_22ef35f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_22ef35f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VDataTable"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListItemAction"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_11__["VTab"],VTabItem: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_11__["VTabItem"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_11__["VTabs"],VTabsItems: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_11__["VTabsItems"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_12__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_22ef35f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=22ef35f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_22ef35f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_22ef35f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);