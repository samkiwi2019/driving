(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VNavigationDrawer/VNavigationDrawer.sass":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./node_modules/vuetify/src/components/VNavigationDrawer/VNavigationDrawer.sass ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-navigation-drawer {\n  background-color: #FFFFFF;\n}\n.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-navigation-drawer .v-divider {\n  border-color: rgba(0, 0, 0, 0.12);\n}\n\n.theme--dark.v-navigation-drawer {\n  background-color: #363636;\n}\n.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-navigation-drawer .v-divider {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n\n.v-navigation-drawer {\n  -webkit-overflow-scrolling: touch;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  max-width: 100%;\n  overflow: hidden;\n  pointer-events: auto;\n  top: 0;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: transform;\n  transition-property: transform, visibility, width;\n}\n.v-navigation-drawer:not([data-booted=true]) {\n  transition: none !important;\n}\n.v-navigation-drawer.v-navigation-drawer--right:after {\n  left: 0;\n  right: initial;\n}\n.v-navigation-drawer .v-list:not(.v-select-list) {\n  background: inherit;\n}\n\n.v-navigation-drawer__border {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 1px;\n}\n\n.v-navigation-drawer__content {\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.v-navigation-drawer__image {\n  border-radius: inherit;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n  contain: strict;\n  width: 100%;\n}\n.v-navigation-drawer__image .v-image {\n  border-radius: inherit;\n}\n\n.v-navigation-drawer--bottom.v-navigation-drawer--is-mobile {\n  max-height: 50%;\n  top: auto;\n  bottom: 0;\n  min-width: 100%;\n}\n\n.v-navigation-drawer--right {\n  left: auto;\n  right: 0;\n}\n.v-navigation-drawer--right > .v-navigation-drawer__border {\n  right: auto;\n  left: 0;\n}\n\n.v-navigation-drawer--absolute {\n  z-index: 1;\n}\n\n.v-navigation-drawer--fixed {\n  z-index: 6;\n}\n\n.v-navigation-drawer--absolute {\n  position: absolute;\n}\n\n.v-navigation-drawer--clipped:not(.v-navigation-drawer--temporary):not(.v-navigation-drawer--is-mobile) {\n  z-index: 4;\n}\n\n.v-navigation-drawer--fixed {\n  position: fixed;\n}\n\n.v-navigation-drawer--floating:after {\n  display: none;\n}\n\n.v-navigation-drawer--mini-variant {\n  overflow: hidden;\n}\n.v-navigation-drawer--mini-variant .v-list-item > *:first-child {\n  margin-left: 0;\n  margin-right: 0;\n}\n.v-navigation-drawer--mini-variant .v-list-item > *:not(:first-child) {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n  display: initial;\n}\n.v-navigation-drawer--mini-variant .v-list-group--no-action .v-list-group__items,\n.v-navigation-drawer--mini-variant .v-list-group--sub-group {\n  display: none;\n}\n.v-navigation-drawer--mini-variant.v-navigation-drawer--custom-mini-variant .v-list-item {\n  justify-content: center;\n}\n\n.v-navigation-drawer--temporary {\n  z-index: 7;\n}\n\n.v-navigation-drawer--mobile {\n  z-index: 6;\n}\n\n.v-navigation-drawer--close {\n  visibility: hidden;\n}\n\n.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),\n.v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VNavigationDrawer_VNavigationDrawer_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VNavigationDrawer/VNavigationDrawer.sass */ "./node_modules/vuetify/src/components/VNavigationDrawer/VNavigationDrawer.sass");
/* harmony import */ var _src_components_VNavigationDrawer_VNavigationDrawer_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VNavigationDrawer_VNavigationDrawer_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VImg_VImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VImg/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var _mixins_applicationable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/applicationable */ "./node_modules/vuetify/lib/mixins/applicationable/index.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/dependent */ "./node_modules/vuetify/lib/mixins/dependent/index.js");
/* harmony import */ var _mixins_mobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/mobile */ "./node_modules/vuetify/lib/mixins/mobile/index.js");
/* harmony import */ var _mixins_overlayable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/overlayable */ "./node_modules/vuetify/lib/mixins/overlayable/index.js");
/* harmony import */ var _mixins_ssr_bootable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/ssr-bootable */ "./node_modules/vuetify/lib/mixins/ssr-bootable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/click-outside */ "./node_modules/vuetify/lib/directives/click-outside/index.js");
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/resize */ "./node_modules/vuetify/lib/directives/resize/index.js");
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../directives/touch */ "./node_modules/vuetify/lib/directives/touch/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Components

 // Mixins







 // Directives



 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_mixins_applicationable__WEBPACK_IMPORTED_MODULE_2__["default"])('left', ['isActive', 'isMobile', 'miniVariant', 'expandOnHover', 'permanent', 'right', 'temporary', 'width']), _mixins_colorable__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_mobile__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_overlayable__WEBPACK_IMPORTED_MODULE_6__["default"], _mixins_ssr_bootable__WEBPACK_IMPORTED_MODULE_7__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_8__["default"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (baseMixins.extend({
  name: 'v-navigation-drawer',

  provide() {
    return {
      isInNav: this.tag === 'nav'
    };
  },

  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_9__["default"],
    Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_10__["default"],
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  props: {
    bottom: Boolean,
    clipped: Boolean,
    disableResizeWatcher: Boolean,
    disableRouteWatcher: Boolean,
    expandOnHover: Boolean,
    floating: Boolean,
    height: {
      type: [Number, String],

      default() {
        return this.app ? '100vh' : '100%';
      }

    },
    miniVariant: Boolean,
    miniVariantWidth: {
      type: [Number, String],
      default: 56
    },
    permanent: Boolean,
    right: Boolean,
    src: {
      type: [String, Object],
      default: ''
    },
    stateless: Boolean,
    tag: {
      type: String,

      default() {
        return this.app ? 'nav' : 'aside';
      }

    },
    temporary: Boolean,
    touchless: Boolean,
    width: {
      type: [Number, String],
      default: 256
    },
    value: null
  },
  data: () => ({
    isMouseover: false,
    touchArea: {
      left: 0,
      right: 0
    },
    stackMinZIndex: 6
  }),
  computed: {
    /**
     * Used for setting an app value from a dynamic
     * property. Called from applicationable.js
     */
    applicationProperty() {
      return this.right ? 'right' : 'left';
    },

    classes() {
      return {
        'v-navigation-drawer': true,
        'v-navigation-drawer--absolute': this.absolute,
        'v-navigation-drawer--bottom': this.bottom,
        'v-navigation-drawer--clipped': this.clipped,
        'v-navigation-drawer--close': !this.isActive,
        'v-navigation-drawer--fixed': !this.absolute && (this.app || this.fixed),
        'v-navigation-drawer--floating': this.floating,
        'v-navigation-drawer--is-mobile': this.isMobile,
        'v-navigation-drawer--is-mouseover': this.isMouseover,
        'v-navigation-drawer--mini-variant': this.isMiniVariant,
        'v-navigation-drawer--custom-mini-variant': Number(this.miniVariantWidth) !== 56,
        'v-navigation-drawer--open': this.isActive,
        'v-navigation-drawer--open-on-hover': this.expandOnHover,
        'v-navigation-drawer--right': this.right,
        'v-navigation-drawer--temporary': this.temporary,
        ...this.themeClasses
      };
    },

    computedMaxHeight() {
      if (!this.hasApp) return null;
      const computedMaxHeight = this.$vuetify.application.bottom + this.$vuetify.application.footer + this.$vuetify.application.bar;
      if (!this.clipped) return computedMaxHeight;
      return computedMaxHeight + this.$vuetify.application.top;
    },

    computedTop() {
      if (!this.hasApp) return 0;
      let computedTop = this.$vuetify.application.bar;
      computedTop += this.clipped ? this.$vuetify.application.top : 0;
      return computedTop;
    },

    computedTransform() {
      if (this.isActive) return 0;
      if (this.isBottom) return 100;
      return this.right ? 100 : -100;
    },

    computedWidth() {
      return this.isMiniVariant ? this.miniVariantWidth : this.width;
    },

    hasApp() {
      return this.app && !this.isMobile && !this.temporary;
    },

    isBottom() {
      return this.bottom && this.isMobile;
    },

    isMiniVariant() {
      return !this.expandOnHover && this.miniVariant || this.expandOnHover && !this.isMouseover;
    },

    isMobile() {
      return !this.stateless && !this.permanent && _mixins_mobile__WEBPACK_IMPORTED_MODULE_5__["default"].options.computed.isMobile.call(this);
    },

    reactsToClick() {
      return !this.stateless && !this.permanent && (this.isMobile || this.temporary);
    },

    reactsToMobile() {
      return this.app && !this.disableResizeWatcher && !this.permanent && !this.stateless && !this.temporary;
    },

    reactsToResize() {
      return !this.disableResizeWatcher && !this.stateless;
    },

    reactsToRoute() {
      return !this.disableRouteWatcher && !this.stateless && (this.temporary || this.isMobile);
    },

    showOverlay() {
      return !this.hideOverlay && this.isActive && (this.isMobile || this.temporary);
    },

    styles() {
      const translate = this.isBottom ? 'translateY' : 'translateX';
      const styles = {
        height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_12__["convertToUnit"])(this.height),
        top: !this.isBottom ? Object(_util_helpers__WEBPACK_IMPORTED_MODULE_12__["convertToUnit"])(this.computedTop) : 'auto',
        maxHeight: this.computedMaxHeight != null ? `calc(100% - ${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_12__["convertToUnit"])(this.computedMaxHeight)})` : undefined,
        transform: `${translate}(${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_12__["convertToUnit"])(this.computedTransform, '%')})`,
        width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_12__["convertToUnit"])(this.computedWidth)
      };
      return styles;
    }

  },
  watch: {
    $route: 'onRouteChange',

    isActive(val) {
      this.$emit('input', val);
    },

    /**
     * When mobile changes, adjust the active state
     * only when there has been a previous value
     */
    isMobile(val, prev) {
      !val && this.isActive && !this.temporary && this.removeOverlay();
      if (prev == null || !this.reactsToResize || !this.reactsToMobile) return;
      this.isActive = !val;
    },

    permanent(val) {
      // If enabling prop enable the drawer
      if (val) this.isActive = true;
    },

    showOverlay(val) {
      if (val) this.genOverlay();else this.removeOverlay();
    },

    value(val) {
      if (this.permanent) return;

      if (val == null) {
        this.init();
        return;
      }

      if (val !== this.isActive) this.isActive = val;
    },

    expandOnHover: 'updateMiniVariant',

    isMouseover(val) {
      this.updateMiniVariant(!val);
    }

  },

  beforeMount() {
    this.init();
  },

  methods: {
    calculateTouchArea() {
      const parent = this.$el.parentNode;
      if (!parent) return;
      const parentRect = parent.getBoundingClientRect();
      this.touchArea = {
        left: parentRect.left + 50,
        right: parentRect.right - 50
      };
    },

    closeConditional() {
      return this.isActive && !this._isDestroyed && this.reactsToClick;
    },

    genAppend() {
      return this.genPosition('append');
    },

    genBackground() {
      const props = {
        height: '100%',
        width: '100%',
        src: this.src
      };
      const image = this.$scopedSlots.img ? this.$scopedSlots.img(props) : this.$createElement(_VImg_VImg__WEBPACK_IMPORTED_MODULE_1__["default"], {
        props
      });
      return this.$createElement('div', {
        staticClass: 'v-navigation-drawer__image'
      }, [image]);
    },

    genDirectives() {
      const directives = [{
        name: 'click-outside',
        value: {
          handler: () => {
            this.isActive = false;
          },
          closeConditional: this.closeConditional,
          include: this.getOpenDependentElements
        }
      }];

      if (!this.touchless && !this.stateless) {
        directives.push({
          name: 'touch',
          value: {
            parent: true,
            left: this.swipeLeft,
            right: this.swipeRight
          }
        });
      }

      return directives;
    },

    genListeners() {
      const on = {
        transitionend: e => {
          if (e.target !== e.currentTarget) return;
          this.$emit('transitionend', e); // IE11 does not support new Event('resize')

          const resizeEvent = document.createEvent('UIEvents');
          resizeEvent.initUIEvent('resize', true, false, window, 0);
          window.dispatchEvent(resizeEvent);
        }
      };

      if (this.miniVariant) {
        on.click = () => this.$emit('update:mini-variant', false);
      }

      if (this.expandOnHover) {
        on.mouseenter = () => this.isMouseover = true;

        on.mouseleave = () => this.isMouseover = false;
      }

      return on;
    },

    genPosition(name) {
      const slot = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_12__["getSlot"])(this, name);
      if (!slot) return slot;
      return this.$createElement('div', {
        staticClass: `v-navigation-drawer__${name}`
      }, slot);
    },

    genPrepend() {
      return this.genPosition('prepend');
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-navigation-drawer__content'
      }, this.$slots.default);
    },

    genBorder() {
      return this.$createElement('div', {
        staticClass: 'v-navigation-drawer__border'
      });
    },

    init() {
      if (this.permanent) {
        this.isActive = true;
      } else if (this.stateless || this.value != null) {
        this.isActive = this.value;
      } else if (!this.temporary) {
        this.isActive = !this.isMobile;
      }
    },

    onRouteChange() {
      if (this.reactsToRoute && this.closeConditional()) {
        this.isActive = false;
      }
    },

    swipeLeft(e) {
      if (this.isActive && this.right) return;
      this.calculateTouchArea();
      if (Math.abs(e.touchendX - e.touchstartX) < 100) return;
      if (this.right && e.touchstartX >= this.touchArea.right) this.isActive = true;else if (!this.right && this.isActive) this.isActive = false;
    },

    swipeRight(e) {
      if (this.isActive && !this.right) return;
      this.calculateTouchArea();
      if (Math.abs(e.touchendX - e.touchstartX) < 100) return;
      if (!this.right && e.touchstartX <= this.touchArea.left) this.isActive = true;else if (this.right && this.isActive) this.isActive = false;
    },

    /**
     * Update the application layout
     */
    updateApplication() {
      if (!this.isActive || this.isMobile || this.temporary || !this.$el) return 0;
      const width = Number(this.computedWidth);
      return isNaN(width) ? this.$el.clientWidth : width;
    },

    updateMiniVariant(val) {
      if (this.miniVariant !== val) this.$emit('update:mini-variant', val);
    }

  },

  render(h) {
    const children = [this.genPrepend(), this.genContent(), this.genAppend(), this.genBorder()];
    if (this.src || Object(_util_helpers__WEBPACK_IMPORTED_MODULE_12__["getSlot"])(this, 'img')) children.unshift(this.genBackground());
    return h(this.tag, this.setBackgroundColor(this.color, {
      class: this.classes,
      style: this.styles,
      directives: this.genDirectives(),
      on: this.genListeners()
    }), children);
  }

}));
//# sourceMappingURL=VNavigationDrawer.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VNavigationDrawer/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VNavigationDrawer/index.js ***!
  \************************************************************************/
/*! exports provided: VNavigationDrawer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VNavigationDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VNavigationDrawer */ "./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNavigationDrawer", function() { return _VNavigationDrawer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/applicationable/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/applicationable/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applicationable; });
/* harmony import */ var _positionable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../positionable */ "./node_modules/vuetify/lib/mixins/positionable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
 // Util


function applicationable(value, events = []) {
  /* @vue/component */
  return Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_positionable__WEBPACK_IMPORTED_MODULE_0__["factory"])(['absolute', 'fixed'])).extend({
    name: 'applicationable',
    props: {
      app: Boolean
    },
    computed: {
      applicationProperty() {
        return value;
      }

    },
    watch: {
      // If previous value was app
      // reset the provided prop
      app(x, prev) {
        prev ? this.removeApplication(true) : this.callUpdate();
      },

      applicationProperty(newVal, oldVal) {
        this.$vuetify.application.unregister(this._uid, oldVal);
      }

    },

    activated() {
      this.callUpdate();
    },

    created() {
      for (let i = 0, length = events.length; i < length; i++) {
        this.$watch(events[i], this.callUpdate);
      }

      this.callUpdate();
    },

    mounted() {
      this.callUpdate();
    },

    deactivated() {
      this.removeApplication();
    },

    destroyed() {
      this.removeApplication();
    },

    methods: {
      callUpdate() {
        if (!this.app) return;
        this.$vuetify.application.register(this._uid, this.applicationProperty, this.updateApplication());
      },

      removeApplication(force = false) {
        if (!force && !this.app) return;
        this.$vuetify.application.unregister(this._uid, this.applicationProperty);
      },

      updateApplication: () => 0
    }
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/ssr-bootable/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/ssr-bootable/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/**
 * SSRBootable
 *
 * @mixin
 *
 * Used in layout components (drawer, toolbar, content)
 * to avoid an entry animation when using SSR
 */

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'ssr-bootable',
  data: () => ({
    isBooted: false
  }),

  mounted() {
    // Use setAttribute instead of dataset
    // because dataset does not work well
    // with unit tests
    window.requestAnimationFrame(() => {
      this.$el.setAttribute('data-booted', 'true');
      this.isBooted = true;
    });
  }

}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/src/components/VNavigationDrawer/VNavigationDrawer.sass":
/*!**************************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VNavigationDrawer/VNavigationDrawer.sass ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js!../../../../sass-loader/dist/cjs.js??ref--10-2!./VNavigationDrawer.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VNavigationDrawer/VNavigationDrawer.sass");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7c7d2985", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);