function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 2,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");

    var routes = [{
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
      path: ''
    }, {
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
      path: 'about'
    }, {
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
      path: 'contact'
    }, {
      component: _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"],
      path: 'post'
    }, {
      component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
      path: 'product'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'chickenshop';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 65,
      vars: 0,
      consts: [[1, "screen"], [1, "body"], ["routerLink", "/", "routerLinkActive", "active"], ["routerLink", "/product", "routerLinkActive", "active"], ["routerLink", "/post", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], ["routerLink", "/about", "routerLinkActive", "active"], [1, "logo"], ["height", "31pt", "viewBox", "-20 0 511 511.99982", "width", "31pt", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m46.984375 247.132812c-3.34375-28.402343-3.59375-52.003906-1.679687-71.644531 0 0-49.164063 34.34375-33.003907 59.765625 8.261719 13 22.652344 14.25 34.746094 12.371094-.019531-.164062-.042969-.324219-.0625-.492188zm0 0", "fill", "#ff4755"], ["d", "m44.679688 220.945312c-11.15625 1.300782-23.738282-.40625-31.550782-11.457031-4.46875 8.558594-6.003906 17.621094-.828125 25.769531 8.261719 12.996094 22.652344 14.246094 34.75 12.367188-.023437-.164062-.042969-.324219-.066406-.492188-1.085937-9.226562-1.839844-17.941406-2.304687-26.1875zm0 0", "fill", "#fc2b3a"], ["d", "m56.21875 128.753906c-26.710938 7.378906-45.496094 14.210938-43.8125 26.644532 1.550781 11.441406 23.246094 17.808593 32.898438 20.089843 1.863281-19.085937 5.773437-34.417969 10.914062-46.734375zm0 0", "fill", "#ffa812"], ["d", "m20.664062 141.9375c-5.890624 3.773438-8.984374 8.09375-8.257812 13.460938 1.546875 11.441406 23.246094 17.808593 32.898438 20.089843.597656-6.105469 1.402343-11.824219 2.394531-17.183593-9.761719-2.761719-23.742188-8.066407-27.035157-16.367188zm0 0", "fill", "#ff9a00"], ["d", "m87.234375 89.546875c15.222656-9.875 29.851563-10.941406 35.019531-11.066406 29.882813-.71875 46.070313 10.238281 56.726563 26.140625 9.164062-4.828125 27.945312-16.902344 22.234375-32.4375-8.117188-22.082032-30.339844-9.15625-30.339844-9.15625s6.429688-15.648438-7.480469-25.816406c-13.910156-10.164063-30.9375-.644532-30.9375-.644532-4.25-32.402344-49.796875-39.484375-67.34375-5.710937-13.949219 26.851562 12.609375 51.152343 22.121094 58.691406zm0 0", "fill", "#ff4755"], ["d", "m178.980469 104.621094c5.238281-2.757813 13.613281-7.886719 18.765625-14.675782-14.875-15.449218-35.613282-29.992187-61.773438-31.644531-29.289062-1.851562-51.167968 5.734375-65.652344 13.6875 5.777344 8.144531 12.878907 14.363281 16.914063 17.558594 15.222656-9.875 29.847656-10.941406 35.015625-11.066406 29.886719-.71875 46.074219 10.238281 56.730469 26.140625zm0 0", "fill", "#fc2b3a"], ["d", "m122.253906 78.480469c-13.734375.332031-94.273437 7.292969-75.269531 168.652343 16.671875 141.570313 116.761719 186.320313 195.136719 186.078126 113.914062-.351563 255.941406-96.0625 214.339844-246.664063 0 0-12.582032-55.96875-55.957032-53.558594-43.375 2.410157-41.957031 87.695313-135.546875 78.316407-94.941406-9.515626-43.703125-135.210938-142.703125-132.824219zm0 0", "fill", "#ffe9c8"], ["d", "m242.121094 406.210938c-78.375.242187-178.464844-44.507813-195.136719-186.078126-1.347656-11.445312-2.179687-22.089843-2.585937-32.035156-.777344 16.929688-.070313 36.472656 2.585937 59.035156 16.671875 141.570313 116.761719 186.320313 195.136719 186.078126 103.753906-.320313 230.824218-79.75 221.230468-207.707032-8.667968 112.035156-124.984374 180.410156-221.230468 180.707032zm0 0", "fill", "#ffdca7"], ["d", "m389.046875 373.675781c-40.945313 32.898438-95.871094 52.636719-146.921875 52.792969-.203125 0-.40625 0-.613281 0-22.269531 0-55.6875-3.757812-89.574219-21.453125-32.265625-16.847656-57.292969-42.34375-74.390625-75.78125-1.894531-3.703125-6.4375-5.171875-10.136719-3.277344-3.703125 1.894531-5.171875 6.433594-3.277344 10.136719 18.546876 36.273438 45.742188 63.953125 80.828126 82.277344 21.113281 11.023437 42.019531 17.035156 60.542968 20.148437v41.605469l-36.382812-12.652344c-3.933594-1.363281-8.226563.714844-9.59375 4.644532-1.363282 3.929687.714844 8.222656 4.644531 9.589843l24.285156 8.445313-23.953125 7.097656c-3.988281 1.183594-6.265625 5.375-5.082031 9.367188 1.167969 3.933593 5.425781 6.246093 9.363281 5.078124l46.390625-13.75c3.199219-.949218 5.394531-3.886718 5.394531-7.226562v-50.203125c7.65625.742187 14.710938 1.023437 20.945313 1.023437.21875 0 .4375-.003906.65625-.003906 15.703125-.046875 31.75-1.84375 47.679687-5.203125v43.792969l-36.382812-12.652344c-3.929688-1.367187-8.222656.710938-9.589844 4.644532-1.367187 3.929687.710938 8.222656 4.640625 9.589843l24.285157 8.441407-23.953126 7.101562c-3.988281 1.183594-6.261718 5.375-5.082031 9.363281 1.167969 3.9375 5.429688 6.25 9.367188 5.082031l46.390625-13.753906c3.195312-.945312 5.390625-3.886718 5.390625-7.222656v-58.039062c33.902343-9.300782 66.597656-25.59375 93.566406-47.261719 3.242187-2.605469 3.757813-7.347657 1.152344-10.589844s-7.347657-3.761719-10.589844-1.152344zm0 0"], ["d", "m65.914062 301.722656c-5.816406-16.945312-9.953124-35.621094-12.296874-55.507812-7.613282-64.667969.375-112.695313 23.105468-138.890625 16.8125-19.375 37.210938-21.914063 45.199219-22.105469 20.722656-.5 35.289063 4.808594 45.792969 16.703125 9.703125 10.988281 15.125 26.34375 20.867187 42.601563 11.035157 31.257812 23.542969 66.679687 71.167969 73.519531 4.117188.589843 7.9375-2.265625 8.527344-6.386719.59375-4.117188-2.265625-7.933594-6.382813-8.527344-38.597656-5.542968-48.558593-33.753906-59.105469-63.621094-3.886718-11.011718-7.949218-22.503906-13.699218-32.894531 17.027344-10.972656 23.945312-24.503906 19.039062-37.851562-3.84375-10.457031-10.417968-14.726563-15.257812-16.472657-4.617188-1.664062-9.28125-1.699218-13.371094-1.058593-.582031-7.082031-3.675781-15.007813-11.988281-21.078125-10.691407-7.816406-22.472657-6.769532-30.304688-4.617188-4.863281-12.925781-16.105469-22.308594-30.53125-24.851562-19.847656-3.492188-39.089843 6.589844-49.015625 25.691406-13.660156 26.285156 4.402344 49.847656 16.945313 61.945312-3.144531 2.644532-6.253907 5.664063-9.261719 9.128907-6.082031 7.011719-11.21875 15.175781-15.433594 24.445312-22.578125 6.285157-48.621094 14.484375-45.972656 34.0625 1.445312 10.691407 12.382812 17.71875 24.59375 22.273438-.445312.398437-.898438.804687-1.371094 1.230469-9.558594 8.628906-16.671875 17.128906-21.140625 25.261718-8.8125 16.039063-5.453125 27.605469-1.082031 34.480469 6.976562 10.976563 18.128906 16.628906 32.578125 16.625.710937 0 1.429687-.015625 2.15625-.042969 2.574219 18.054688 6.597656 35.121094 11.992187 50.832032 1.332032 3.878906 5.683594 6.011718 9.570313 4.679687 3.9375-1.355469 6.03125-5.640625 4.679687-9.574219zm7.203126-238.933594c-6.207032-10.582031-6.890626-20.222656-2.085938-29.46875 8.296875-15.96875 22.976562-19.566406 33.03125-17.796874 8.761719 1.542968 18.734375 7.882812 20.460938 21.039062.324218 2.464844 1.859374 4.597656 4.070312 5.722656 2.214844 1.128906 4.859375 1.082032 7.039062-.105468.132813-.070313 13.183594-7.03125 22.992188.136718 8.757812 6.398438 5.378906 15.980469 4.992188 16.980469-1.222657 2.972656-.40625 6.382813 2.003906 8.503906 2.410156 2.125 5.921875 2.476563 8.714844.894531 2.132812-1.210937 8.707031-3.960937 13.46875-2.214843.984374.359375 3.96875 1.453125 6.183593 7.480469.929688 2.527343 1.523438 6.589843-4.03125 12.621093-2.714843 2.945313-6.152343 5.5-9.242187 7.488281-11.832032-14.535156-29.53125-24.613281-59.15625-23.914062-6.597656.15625-19.953125 1.585938-34.242188 9.429688-4.4375-3.960938-10.09375-9.800782-14.199218-16.796876zm-54.25 91.148438c-.699219-5.183594 12.597656-10.546875 24.515624-14.367188-2.34375 8.015626-4.148437 16.675782-5.417968 25.953126-11.949219-3.820313-18.679688-8.523438-19.097656-11.585938zm-1.210938 77.183594c-5.851562-9.207032 2-21.605469 9.621094-30.382813 2.78125-3.207031 5.746094-6.179687 8.558594-8.789062-.445313 14.984375.226562 31.253906 2.027343 48.796875-9.316406.050781-16.101562-3.164063-20.207031-9.625zm0 0"], ["d", "m464.75 184.382812c-.453125-1.921874-3.964844-16.015624-12.683594-29.949218-12.804687-20.460938-30.523437-30.675782-51.25-29.515625-20.582031 1.140625-32.214844 16.832031-44.53125 33.441406-15.148437 20.425781-30.8125 41.546875-65.945312 45.347656-4.136719.445313-7.125 4.164063-6.679688 8.300781.449219 4.136719 4.164063 7.128907 8.300782 6.679688 41.6875-4.507812 60.949218-30.480469 76.425781-51.351562 11.03125-14.875 19.742187-26.625 33.265625-27.375 15.023437-.824219 27.617187 6.621093 37.445312 22.15625 7.910156 12.503906 10.96875 25.652343 10.996094 25.773437.027344.117187.054688.234375.089844.355469 8.992187 32.550781 9.527344 63.914062 1.59375 93.21875-7.175782 26.511718-21.089844 50.890625-41.34375 72.460937-2.851563 3.035157-2.699219 7.800781.332031 10.648438 2.992187 2.8125 7.839844 2.660156 10.648437-.332031 21.96875-23.390626 37.078126-49.917969 44.910157-78.839844 8.632812-31.898438 8.105469-65.886719-1.574219-101.019532zm0 0"], ["d", "m303.675781 335.976562c-44.296875 10.703126-80.136719 3.09375-106.527343-22.625-19.925782-19.417968-26.957032-42.511718-27.054688-42.832031-1.167969-3.988281-5.347656-6.269531-9.335938-5.109375-3.992187 1.164063-6.289062 5.34375-5.121093 9.339844.3125 1.078125 7.964843 26.683594 30.5 48.910156 24.738281 24.390625 54.1875 31.960938 81.214843 31.960938 14.324219 0 27.964844-2.125 39.863282-5 54.042968-13.058594 81.988281-59.921875 76.886718-95.851563-.585937-4.117187-4.394531-6.980469-8.519531-6.398437-4.117187.585937-6.984375 4.398437-6.398437 8.519531 2 14.082031-2.972656 30.992187-13.300782 45.230469-8.523437 11.746094-24.5 27.160156-52.207031 33.855468zm0 0"], ["d", "m103.777344 149.738281c0 10.734375 6.761718 19.140625 15.390625 19.140625 8.628906 0 15.386719-8.40625 15.386719-19.140625 0-10.730469-6.757813-19.136719-15.386719-19.136719-8.628907 0-15.390625 8.40625-15.390625 19.136719zm0 0"], ["href", ""], [1, "background"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Trang ch\u1EE7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "S\u1EA3n ph\u1EA9m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Gi\u1EDBi thi\u1EC7u s\u1EA3n ph\u1EA9m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "K\u1EF9 thu\u1EADt ch\u0103n nu\xF4i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Li\xEAn h\u1EC7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ho\u1EA1t \u0111\u1ED9ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "aside");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Gi\u1ED1ng gia c\u1EA7m Kh\xE1nh Ph\u01B0\u01A1ng ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Gi\u1EDBi thi\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Founded in 1976, VEGETEXCO HOCHIMINH CITY is dedicated to bringing Vietnamese fruits, vegetables, agricultural products to the world. Since then, the company has gained experience in developing a wide range of high quality products, including dried, canned, IQF, concentrated and puree fruit, as well as in expanding markets in Asia, Europe and the Middle East. We are committed to building reliable partnerships in the fruit and agricultural product business. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Li\xEAn h\u1EC7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Add : 24 Truong Dinh street , District 3 , Hochi Minh city , Vietnam ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Tel : +84 28 39330483 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Fax : +84 28 39330565 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Email : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " vegetexcohcm@vegetexco.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " vegetexcohcm@hcm.fpt.vn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Copyright @ 2013 Vegetexco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 23);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".screen[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.screen[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  width: 1124px;\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  grid-template-rows: 100px auto;\n  grid-column-gap: 20px;\n  grid-row-gap: 10px;\n}\n.background[_ngcontent-%COMP%] {\n  background-size: contain;\n  -webkit-filter: blur(2px);\n          filter: blur(2px);\n  background-image: url(https://cdn.pixabay.com/photo/2020/02/15/04/19/chicken-4849979_1280.jpg);\n  position: fixed;\n  top: -5%;\n  left: -5%;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\nnav[_ngcontent-%COMP%] {\n  background-color: rgba(10, 10, 10, 0);\n  grid-column: 2;\n  border-bottom: white solid 1px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  top: 0;\n  left: 0;\n  list-style: none;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-items: flex-start;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  display: -webkit-box;\n  display: flex;\n  justify-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 400;\n  color: white;\n  text-decoration: none;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: green;\n}\naside[_ngcontent-%COMP%] {\n  padding: 10px 20px 10px 20px;\n  display: grid;\n  background-color: #e9e9e9;\n  min-height: 600px;\n  grid-column: 1;\n  grid-row: 1/2;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 240px 150px;\n  grid-row-gap: 10px;\n  color: #4a7158;\n}\naside[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  text-transform: uppercase;\n  font-weight: bold;\n}\naside[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\naside[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: solid grey 1px;\n}\naside[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\naside[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: justify;\n}\naside[_ngcontent-%COMP%]   address[_ngcontent-%COMP%] {\n  font-style: normal;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\naside[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\naside[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: justify;\n  line-height: 20px;\n}\naside[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-decoration: none;\n  color: green;\n  align-self: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXENvZGVcXENvbW1lcmNlXFxjaGlja2Vuc2hvcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7QURBSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNFTjtBRENFO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsOEZBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNFSjtBRENFO0VBQ0UscUNBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUNFSjtBRERJO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtBQ0dOO0FERk07RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSVI7QURIUTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNLVjtBREhRO0VBQ0UsWUFBQTtBQ0tWO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7QURESTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0dOO0FERk07RUFDRSxrQkFBQTtBQ0lSO0FEREk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBVUEsNkJBQUE7QUNOTjtBREhNO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDS1I7QURITTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0tSO0FEREk7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNHTjtBREZNO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSVI7QURGTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSVI7QURGTTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmJvZHkge1xyXG4gICAgICB3aWR0aDogMTEyNHB4O1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IDFmcjtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvO1xyXG4gICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgIGdyaWQtcm93LWdhcDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIwLzAyLzE1LzA0LzE5L2NoaWNrZW4tNDg0OTk3OV8xMjgwLmpwZyk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IC01JTtcclxuICAgIGxlZnQ6IC01JTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLDEwLDEwLCAwKTtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogd2hpdGUgc29saWQgMXB4O1xyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgdG9wOjA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAgIFxyXG4gIGFzaWRlIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywyMzMsMjMzKTtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBncmlkLXJvdzogMSAvIDI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMjQwcHggMTUwcHg7XHJcbiAgICBncmlkLXJvdy1nYXA6IDEwcHg7XHJcbiAgICBjb2xvcjogIzRhNzE1ODtcclxuICAgIC5sb2dvIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFydGljbGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWFkZXIge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgfVxyXG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCBncmV5IDFweDtcclxuICAgIH1cclxuICAgIGFkZHJlc3Mge1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgIiwiLnNjcmVlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNjcmVlbiAuYm9keSB7XG4gIHdpZHRoOiAxMTI0cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjgwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG87XG4gIGdyaWQtY29sdW1uLWdhcDogMjBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgZmlsdGVyOiBibHVyKDJweCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIwLzAyLzE1LzA0LzE5L2NoaWNrZW4tNDg0OTk3OV8xMjgwLmpwZyk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAtNSU7XG4gIGxlZnQ6IC01JTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMCk7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBib3JkZXItYm90dG9tOiB3aGl0ZSBzb2xpZCAxcHg7XG59XG5uYXYgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcbn1cbm5hdiB1bCBsaSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubmF2IHVsIGxpIGEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbm5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG5hc2lkZSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMjQwcHggMTUwcHg7XG4gIGdyaWQtcm93LWdhcDogMTBweDtcbiAgY29sb3I6ICM0YTcxNTg7XG59XG5hc2lkZSAubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmFzaWRlIC5sb2dvIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5hc2lkZSBhcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgZ3JleSAxcHg7XG59XG5hc2lkZSBhcnRpY2xlIGhlYWRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuYXNpZGUgYXJ0aWNsZSBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuYXNpZGUgYWRkcmVzcyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmFzaWRlIGFkZHJlc3MgaGVhZGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5hc2lkZSBhZGRyZXNzIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuYXNpZGUgYWRkcmVzcyBhIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogZ3JlZW47XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyLibModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyLibModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyLibModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 2,
      vars: 0,
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 44,
      vars: 0,
      consts: [[1, "ads"], [1, "list"], [1, "item"], ["src", "https://cdn.pixabay.com/photo/2014/05/20/21/25/chicks-349035_1280.jpg", "alt", ""], ["href", ""], ["src", "https://cdn.pixabay.com/photo/2018/10/05/23/24/chicken-3727097_1280.jpg", "alt", ""]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " C\xC1C LO\u1EA0I GI\u1ED0NG GIA C\u1EA6M, TH\u1EE6Y C\u1EA8M ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Gia c\u1EA7m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Gia c\u1EA7m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Gia c\u1EA7m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Gia c\u1EA7m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Gia c\u1EA7m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Gia c\u1EA7m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Gia c\u1EA7m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Gia c\u1EA7m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["main[_ngcontent-%COMP%] {\n  height: 600px;\n  grid-row: 2;\n  grid-column: 2;\n  background-color: rgba(0, 0, 0, 0);\n  display: grid;\n  grid-template-rows: 80px auto;\n}\nmain[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 160px 160px 160px;\n  grid-gap: 20px;\n  padding: 20px 20px 20px 20px;\n}\nmain[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  position: relative;\n}\nmain[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nmain[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n}\nmain[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\nmain[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 125px;\n  width: 100%;\n  padding: 10px;\n  font-size: 12px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  text-transform: uppercase;\n}\nmain[_ngcontent-%COMP%]   .ads[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.4);\n  font-size: 20px;\n  color: white;\n  text-align: center;\n  padding: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcQ29kZVxcQ29tbWVyY2VcXGNoaWNrZW5zaG9wL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQ0NKO0FEQUk7RUFDRSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNFTjtBRERNO0VBQ0Usa0JBQUE7QUNHUjtBREZRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDSVY7QURGUTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNJVjtBREZRO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDSVY7QURGVTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQ0lkO0FEQ0k7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgbWFpbiB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IGF1dG87XHJcbiAgICAubGlzdCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNjBweCAxNjBweCAxNjBweDtcclxuICAgICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgICAgIC5pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nOmhvdmVyIHtcclxuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMTI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWRzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAyNnB4O1xyXG4gICAgfVxyXG4gIH0gIFxyXG4gICIsIm1haW4ge1xuICBoZWlnaHQ6IDYwMHB4O1xuICBncmlkLXJvdzogMjtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvO1xufVxubWFpbiAubGlzdCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNjBweCAxNjBweCAxNjBweDtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG59XG5tYWluIC5saXN0IC5pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWFpbiAubGlzdCAuaXRlbSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbm1haW4gLmxpc3QgLml0ZW0gaW1nOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG59XG5tYWluIC5saXN0IC5pdGVtIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbm1haW4gLmxpc3QgLml0ZW0gYSBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbm1haW4gLmFkcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjZweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/post/post.component.ts":
  /*!****************************************!*\
    !*** ./src/app/post/post.component.ts ***!
    \****************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PostComponent =
    /*#__PURE__*/
    function () {
      function PostComponent() {
        _classCallCheck(this, PostComponent);
      }

      _createClass(PostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PostComponent;
    }();

    PostComponent.ɵfac = function PostComponent_Factory(t) {
      return new (t || PostComponent)();
    };

    PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostComponent,
      selectors: [["app-post"]],
      decls: 2,
      vars: 0,
      template: function PostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "post works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post',
          templateUrl: './post.component.html',
          styleUrls: ['./post.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product/product.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/product/product.component.ts ***!
    \**********************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent() {
        _classCallCheck(this, ProductComponent);
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductComponent;
    }();

    ProductComponent.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)();
    };

    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      decls: 2,
      vars: 0,
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Code\Commerce\chickenshop\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map