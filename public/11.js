(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/vuetify/lib/components/VSparkline/VSparkline.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSparkline/VSparkline.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _helpers_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/core */ "./node_modules/vuetify/lib/components/VSparkline/helpers/core.js");
/* harmony import */ var _helpers_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/path */ "./node_modules/vuetify/lib/components/VSparkline/helpers/path.js");
// Mixins
 // Utilities




/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_0__["default"]).extend({
  name: 'VSparkline',
  inheritAttrs: false,
  props: {
    autoDraw: Boolean,
    autoDrawDuration: {
      type: Number,
      default: 2000
    },
    autoDrawEasing: {
      type: String,
      default: 'ease'
    },
    autoLineWidth: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    },
    fill: {
      type: Boolean,
      default: false
    },
    gradient: {
      type: Array,
      default: () => []
    },
    gradientDirection: {
      type: String,
      validator: val => ['top', 'bottom', 'left', 'right'].includes(val),
      default: 'top'
    },
    height: {
      type: [String, Number],
      default: 75
    },
    labels: {
      type: Array,
      default: () => []
    },
    labelSize: {
      type: [Number, String],
      default: 7
    },
    lineWidth: {
      type: [String, Number],
      default: 4
    },
    padding: {
      type: [String, Number],
      default: 8
    },
    showLabels: Boolean,
    smooth: {
      type: [Boolean, Number, String],
      default: false
    },
    type: {
      type: String,
      default: 'trend',
      validator: val => ['trend', 'bar'].includes(val)
    },
    value: {
      type: Array,
      default: () => []
    },
    width: {
      type: [Number, String],
      default: 300
    }
  },
  data: () => ({
    lastLength: 0
  }),
  computed: {
    parsedPadding() {
      return Number(this.padding);
    },

    parsedWidth() {
      return Number(this.width);
    },

    parsedHeight() {
      return parseInt(this.height, 10);
    },

    parsedLabelSize() {
      return parseInt(this.labelSize, 10) || 7;
    },

    totalHeight() {
      let height = this.parsedHeight;
      if (this.hasLabels) height += parseInt(this.labelSize, 10) * 1.5;
      return height;
    },

    totalWidth() {
      let width = this.parsedWidth;
      if (this.type === 'bar') width = Math.max(this.value.length * this._lineWidth, width);
      return width;
    },

    totalValues() {
      return this.value.length;
    },

    _lineWidth() {
      if (this.autoLineWidth && this.type !== 'trend') {
        const totalPadding = this.parsedPadding * (this.totalValues + 1);
        return (this.parsedWidth - totalPadding) / this.totalValues;
      } else {
        return parseFloat(this.lineWidth) || 4;
      }
    },

    boundary() {
      if (this.type === 'bar') return {
        minX: 0,
        maxX: this.totalWidth,
        minY: 0,
        maxY: this.parsedHeight
      };
      const padding = this.parsedPadding;
      return {
        minX: padding,
        maxX: this.totalWidth - padding,
        minY: padding,
        maxY: this.parsedHeight - padding
      };
    },

    hasLabels() {
      return Boolean(this.showLabels || this.labels.length > 0 || this.$scopedSlots.label);
    },

    parsedLabels() {
      const labels = [];
      const points = this._values;
      const len = points.length;

      for (let i = 0; labels.length < len; i++) {
        const item = points[i];
        let value = this.labels[i];

        if (!value) {
          value = typeof item === 'object' ? item.value : item;
        }

        labels.push({
          x: item.x,
          value: String(value)
        });
      }

      return labels;
    },

    normalizedValues() {
      return this.value.map(item => typeof item === 'number' ? item : item.value);
    },

    _values() {
      return this.type === 'trend' ? Object(_helpers_core__WEBPACK_IMPORTED_MODULE_2__["genPoints"])(this.normalizedValues, this.boundary) : Object(_helpers_core__WEBPACK_IMPORTED_MODULE_2__["genBars"])(this.normalizedValues, this.boundary);
    },

    textY() {
      let y = this.parsedHeight;
      if (this.type === 'trend') y -= 4;
      return y;
    },

    _radius() {
      return this.smooth === true ? 8 : Number(this.smooth);
    }

  },
  watch: {
    value: {
      immediate: true,

      handler() {
        this.$nextTick(() => {
          if (!this.autoDraw || this.type === 'bar' || !this.$refs.path) return;
          const path = this.$refs.path;
          const length = path.getTotalLength();

          if (!this.fill) {
            path.style.transition = 'none';
            path.style.strokeDasharray = length + ' ' + length;
            path.style.strokeDashoffset = Math.abs(length - (this.lastLength || 0)).toString();
            path.getBoundingClientRect();
            path.style.transition = `stroke-dashoffset ${this.autoDrawDuration}ms ${this.autoDrawEasing}`;
            path.style.strokeDashoffset = '0';
          } else {
            path.style.transformOrigin = 'bottom center';
            path.style.transition = 'none';
            path.style.transform = `scaleY(0)`;
            path.getBoundingClientRect();
            path.style.transition = `transform ${this.autoDrawDuration}ms ${this.autoDrawEasing}`;
            path.style.transform = `scaleY(1)`;
          }

          this.lastLength = length;
        });
      }

    }
  },
  methods: {
    genGradient() {
      const gradientDirection = this.gradientDirection;
      const gradient = this.gradient.slice(); // Pushes empty string to force
      // a fallback to currentColor

      if (!gradient.length) gradient.push('');
      const len = Math.max(gradient.length - 1, 1);
      const stops = gradient.reverse().map((color, index) => this.$createElement('stop', {
        attrs: {
          offset: index / len,
          'stop-color': color || 'currentColor'
        }
      }));
      return this.$createElement('defs', [this.$createElement('linearGradient', {
        attrs: {
          id: this._uid,
          x1: +(gradientDirection === 'left'),
          y1: +(gradientDirection === 'top'),
          x2: +(gradientDirection === 'right'),
          y2: +(gradientDirection === 'bottom')
        }
      }, stops)]);
    },

    genG(children) {
      return this.$createElement('g', {
        style: {
          fontSize: '8',
          textAnchor: 'middle',
          dominantBaseline: 'mathematical',
          fill: 'currentColor'
        }
      }, children);
    },

    genPath() {
      const points = Object(_helpers_core__WEBPACK_IMPORTED_MODULE_2__["genPoints"])(this.normalizedValues, this.boundary);
      return this.$createElement('path', {
        attrs: {
          d: Object(_helpers_path__WEBPACK_IMPORTED_MODULE_3__["genPath"])(points, this._radius, this.fill, this.parsedHeight),
          fill: this.fill ? `url(#${this._uid})` : 'none',
          stroke: this.fill ? 'none' : `url(#${this._uid})`
        },
        ref: 'path'
      });
    },

    genLabels(offsetX) {
      const children = this.parsedLabels.map((item, i) => this.$createElement('text', {
        attrs: {
          x: item.x + offsetX + this._lineWidth / 2,
          y: this.textY + this.parsedLabelSize * 0.75,
          'font-size': Number(this.labelSize) || 7
        }
      }, [this.genLabel(item, i)]));
      return this.genG(children);
    },

    genLabel(item, index) {
      return this.$scopedSlots.label ? this.$scopedSlots.label({
        index,
        value: item.value
      }) : item.value;
    },

    genBars() {
      if (!this.value || this.totalValues < 2) return undefined;
      const bars = Object(_helpers_core__WEBPACK_IMPORTED_MODULE_2__["genBars"])(this.normalizedValues, this.boundary);
      const offsetX = (Math.abs(bars[0].x - bars[1].x) - this._lineWidth) / 2;
      return this.$createElement('svg', {
        attrs: {
          display: 'block',
          viewBox: `0 0 ${this.totalWidth} ${this.totalHeight}`
        }
      }, [this.genGradient(), this.genClipPath(bars, offsetX, this._lineWidth, 'sparkline-bar-' + this._uid), this.hasLabels ? this.genLabels(offsetX) : undefined, this.$createElement('g', {
        attrs: {
          'clip-path': `url(#sparkline-bar-${this._uid}-clip)`,
          fill: `url(#${this._uid})`
        }
      }, [this.$createElement('rect', {
        attrs: {
          x: 0,
          y: 0,
          width: this.totalWidth,
          height: this.height
        }
      })])]);
    },

    genClipPath(bars, offsetX, lineWidth, id) {
      const rounding = typeof this.smooth === 'number' ? this.smooth : this.smooth ? 2 : 0;
      return this.$createElement('clipPath', {
        attrs: {
          id: `${id}-clip`
        }
      }, bars.map(item => {
        return this.$createElement('rect', {
          attrs: {
            x: item.x + offsetX,
            y: item.y,
            width: lineWidth,
            height: item.height,
            rx: rounding,
            ry: rounding
          }
        }, [this.autoDraw ? this.$createElement('animate', {
          attrs: {
            attributeName: 'height',
            from: 0,
            to: item.height,
            dur: `${this.autoDrawDuration}ms`,
            fill: 'freeze'
          }
        }) : undefined]);
      }));
    },

    genTrend() {
      return this.$createElement('svg', this.setTextColor(this.color, {
        attrs: { ...this.$attrs,
          display: 'block',
          'stroke-width': this._lineWidth || 1,
          viewBox: `0 0 ${this.width} ${this.totalHeight}`
        }
      }), [this.genGradient(), this.hasLabels && this.genLabels(-(this._lineWidth / 2)), this.genPath()]);
    }

  },

  render(h) {
    if (this.totalValues < 2) return undefined;
    return this.type === 'trend' ? this.genTrend() : this.genBars();
  }

}));
//# sourceMappingURL=VSparkline.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSparkline/helpers/core.js":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSparkline/helpers/core.js ***!
  \************************************************************************/
/*! exports provided: genPoints, genBars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genPoints", function() { return genPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genBars", function() { return genBars; });
function genPoints(values, boundary) {
  const {
    minX,
    maxX,
    minY,
    maxY
  } = boundary;
  const totalValues = values.length;
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const gridX = (maxX - minX) / (totalValues - 1);
  const gridY = (maxY - minY) / (maxValue - minValue || 1);
  return values.map((value, index) => {
    return {
      x: minX + index * gridX,
      y: maxY - (value - minValue) * gridY + +(index === totalValues - 1) * 0.00001 - +(index === 0) * 0.00001,
      value
    };
  });
}
function genBars(values, boundary) {
  const {
    minX,
    maxX,
    minY,
    maxY
  } = boundary;
  const totalValues = values.length;
  let maxValue = Math.max(...values);
  let minValue = Math.min(...values);
  if (minValue > 0) minValue = 0;
  if (maxValue < 0) maxValue = 0;
  const gridX = maxX / totalValues;
  const gridY = (maxY - minY) / (maxValue - minValue || 1);
  const horizonY = maxY - Math.abs(minValue * gridY);
  return values.map((value, index) => {
    const height = Math.abs(gridY * value);
    return {
      x: minX + index * gridX,
      y: horizonY - height + +(value < 0) * height,
      height,
      value
    };
  });
}
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSparkline/helpers/math.js":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSparkline/helpers/math.js ***!
  \************************************************************************/
/*! exports provided: checkCollinear, getDistance, moveTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCollinear", function() { return checkCollinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistance", function() { return getDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveTo", function() { return moveTo; });
function int(value) {
  return parseInt(value, 10);
}
/**
 * https://en.wikipedia.org/wiki/Collinearity
 * x=(x1+x2)/2
 * y=(y1+y2)/2
 */


function checkCollinear(p0, p1, p2) {
  return int(p0.x + p2.x) === int(2 * p1.x) && int(p0.y + p2.y) === int(2 * p1.y);
}
function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function moveTo(to, from, radius) {
  const vector = {
    x: to.x - from.x,
    y: to.y - from.y
  };
  const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  const unitVector = {
    x: vector.x / length,
    y: vector.y / length
  };
  return {
    x: from.x + unitVector.x * radius,
    y: from.y + unitVector.y * radius
  };
}
//# sourceMappingURL=math.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSparkline/helpers/path.js":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSparkline/helpers/path.js ***!
  \************************************************************************/
/*! exports provided: genPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genPath", function() { return genPath; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/vuetify/lib/components/VSparkline/helpers/math.js");

/**
 * From https://github.com/unsplash/react-trend/blob/master/src/helpers/DOM.helpers.js#L18
 */

function genPath(points, radius, fill = false, height = 75) {
  const start = points.shift();
  const end = points[points.length - 1];
  return (fill ? `M${start.x} ${height - start.x + 2} L${start.x} ${start.y}` : `M${start.x} ${start.y}`) + points.map((point, index) => {
    const next = points[index + 1];
    const prev = points[index - 1] || start;
    const isCollinear = next && Object(_math__WEBPACK_IMPORTED_MODULE_0__["checkCollinear"])(next, point, prev);

    if (!next || isCollinear) {
      return `L${point.x} ${point.y}`;
    }

    const threshold = Math.min(Object(_math__WEBPACK_IMPORTED_MODULE_0__["getDistance"])(prev, point), Object(_math__WEBPACK_IMPORTED_MODULE_0__["getDistance"])(next, point));
    const isTooCloseForRadius = threshold / 2 < radius;
    const radiusForPoint = isTooCloseForRadius ? threshold / 2 : radius;
    const before = Object(_math__WEBPACK_IMPORTED_MODULE_0__["moveTo"])(prev, point, radiusForPoint);
    const after = Object(_math__WEBPACK_IMPORTED_MODULE_0__["moveTo"])(next, point, radiusForPoint);
    return `L${before.x} ${before.y}S${point.x} ${point.y} ${after.x} ${after.y}`;
  }).join('') + (fill ? `L${end.x} ${height - start.x + 2} Z` : '');
}
//# sourceMappingURL=path.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSparkline/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSparkline/axios.js ***!
  \*****************************************************************/
/*! exports provided: VSparkline, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VSparkline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSparkline */ "./node_modules/vuetify/lib/components/VSparkline/VSparkline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VSparkline", function() { return _VSparkline__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VSparkline__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=axios.js.map

/***/ })

}]);
