function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/bill/bill.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/bill/bill.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomersBillBillComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<chart [type]=\"type\" [data]=\"data\" [options]=\"options\" style=\"height: 400px;\"></chart>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/consumption/consumption.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/consumption/consumption.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomersConsumptionConsumptionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<chart [type]=\"type\" [data]=\"data\" [options]=\"options\" style=\"height: 400px;\"></chart>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-list/customers-list.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-list/customers-list.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomersCustomersListCustomersListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-filter-textbox (changed)=\"filter($event)\"></app-filter-textbox>\r\n<br />\r\n<br />\r\n<table class=\"table table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <th (click)=\"sort('name')\">Name</th>\r\n            <th (click)=\"sort('city')\">City</th>\r\n            <th (click)=\"sort('orderTotal')\">Order Total</th>\r\n        </tr>\r\n    </thead>\r\n    <tr *ngFor=\"let cust of filteredCustomers\">\r\n        <td>\r\n            <a [routerLink]=\"['/orders', cust.id]\">\r\n                {{ cust.name | capitalize }}\r\n            </a>\r\n        </td>\r\n        <td>{{ cust.city }}</td>\r\n        <td>{{ cust.orderTotal | currency:currencyCode:'symbol' }}\r\n    </tr>\r\n    <tr *ngIf=\"filteredCustomers && filteredCustomers.length\">\r\n        <td colspan=\"2\">&nbsp;</td>\r\n        <td>\r\n            {{ customersOrderTotal | currency:currencyCode:'symbol' }}\r\n        </td>\r\n    </tr>\r\n    <tr *ngIf=\"!filteredCustomers || !filteredCustomers.length\">\r\n        <td colspan=\"4\">No customers found</td>\r\n    </tr>\r\n</table>\r\nNumber of Customers: {{ filteredCustomers.length }}\r\n<br />";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomersCustomersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>{{ title }}</h1>\r\n<br />\r\n<app-customers-list [customers]=\"people\"></app-customers-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/generation/generation.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/generation/generation.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomersGenerationGenerationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<chart [type]=\"type\" [data]=\"data\" [options]=\"options\" style=\"height: 400px;\"></chart>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/login/login.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/login/login.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomersLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-signin\">\n    <div class=\"text-center mb-4\">\n\n      <h1 class=\"h3 mb-3 font-weight-normal\">Customer Login </h1>    \n    </div>\n  \n    <div class=\"form-label-group\">\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\">\n      <label for=\"inputEmail\">Username</label>\n    </div>\n  \n    <div class=\"form-label-group\">\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n      <label for=\"inputPassword\">Password</label>\n    </div>\n  \n    <div class=\"checkbox mb-3\">\n      <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n    </div>\n    <button class=\"btn btn-lg btn-ashipa btn-block\" style=\"color: #ffffff;\" type=\"submit\">Log in</button>\n    <p class=\"mt-5 mb-3 text-muted text-center\">© 2020</p>\n  </form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/properties/properties.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/properties/properties.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomersPropertiesPropertiesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<chart [type]=\"type\" [data]=\"data\" [options]=\"options\" style=\"height: 400px;\"></chart>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing/landing.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing/landing.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingLandingLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Are you a customer or an operator?</h1>\n\n\n<div class=\"mainlanding\">\n\n    <div class=\"innerlanding\">\n\n        <button class=\"btn btn-lg btn-ashipa btn-block\" type=\"submit\" style=\"color: #ffffff;\" (click)=\"customers()\">Customer</button>\n        <button class=\"btn btn-lg btn-ashipa btn-block\" type=\"submit\" style=\"color: #ffffff;\" (click)=\"operators()\">Operator</button>    \n    \n    </div>    \n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/operators/login/login.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operators/login/login.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOperatorsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-signin\">\n    <div class=\"text-center mb-4\">\n\n      <h1 class=\"h3 mb-3 font-weight-normal\">Operator Login </h1>    \n    </div>\n  \n    <div class=\"form-label-group\">\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\">\n      <label for=\"inputEmail\">Username</label>\n    </div>\n  \n    <div class=\"form-label-group\">\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n      <label for=\"inputPassword\">Password</label>\n    </div>\n  \n    <div class=\"checkbox mb-3\">\n      <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n    </div>\n    <button class=\"btn btn-lg btn-ashipa btn-block\" style=\"color: #ffffff;\" type=\"submit\">Log in</button>\n    <p class=\"mt-5 mb-3 text-muted text-center\">© 2020</p>\n  </form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/operators/operators-list/operators-list.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operators/operators-list/operators-list.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOperatorsOperatorsListOperatorsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>operators-list works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/operators/operators/operators.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operators/operators/operators.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOperatorsOperatorsOperatorsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>operators works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"customer\">\r\n    <h1>Orders for {{ customer.name | capitalize }}</h1>\r\n\r\n    <table class=\"table table-hover orders-table\" \r\n           *ngFor=\"let order of orders\">\r\n        <tr *ngFor=\"let orderItem of order.orderItems\">\r\n            <td>{{ orderItem.productName }}</td>\r\n            <td>{{ orderItem.itemCost | currency:'USD':'symbol' }}</td>    \r\n        </tr>\r\n    </table>\r\n</div>\r\n<div *ngIf=\"!customer\">\r\n   No customer found\r\n</div>  \r\n<br />\r\n<a routerLink=\"/customers\">View All Customers</a>\r\n\r\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: '/landing'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], AppRoutingModule);
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
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: "\n    <router-outlet></router-outlet>\n  "
    }), __metadata("design:paramtypes", [])], AppComponent);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _customers_customers_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customers/customers.module */
    "./src/app/customers/customers.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _orders_orders_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./orders/orders.module */
    "./src/app/orders/orders.module.ts");
    /* harmony import */


    var _landing_landing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./landing/landing.module */
    "./src/app/landing/landing.module.ts");
    /* harmony import */


    var _operators_operators_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./operators/operators.module */
    "./src/app/operators/operators.module.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _customers_customers_module__WEBPACK_IMPORTED_MODULE_3__["CustomersModule"], _orders_orders_module__WEBPACK_IMPORTED_MODULE_6__["OrdersModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _landing_landing_module__WEBPACK_IMPORTED_MODULE_7__["LandingModule"], _operators_operators_module__WEBPACK_IMPORTED_MODULE_8__["OperatorsModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/core/data.service.ts");
    /* harmony import */


    var _sorter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sorter.service */
    "./src/app/core/sorter.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
      providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _sorter_service__WEBPACK_IMPORTED_MODULE_3__["SorterService"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/data.service.ts":
  /*!**************************************!*\
    !*** ./src/app/core/data.service.ts ***!
    \**************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppCoreDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http; // Use the following properties if running the Docker containers via Docker Compose
        // customersUrl = 'http://localhost:3000/api/customers';
        // ordersUrl = 'http://localhost:3000/api/orders';
        // Use the following properties if running the app stand-alone with no external dependencies

        this.customersUrl = 'assets/customers.json';
        this.ordersUrl = 'assets/orders.json';
      }

      _createClass(DataService, [{
        key: "getCustomers",
        value: function getCustomers() {
          return this.http.get(this.customersUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "getCustomer",
        value: function getCustomer(id) {
          return this.http.get(this.customersUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (customers) {
            var customer = customers.filter(function (cust) {
              return cust.id === id;
            });
            return customer && customer.length ? customer[0] : null;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "getOrders",
        value: function getOrders(id) {
          return this.http.get(this.ordersUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (orders) {
            var custOrders = orders.filter(function (order) {
              return order.customerId === id;
            });
            return custOrders;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.error('server error:', error);

          if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMessage);
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error || 'Server error');
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    DataService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], DataService);
    /***/
  },

  /***/
  "./src/app/core/sorter.service.ts":
  /*!****************************************!*\
    !*** ./src/app/core/sorter.service.ts ***!
    \****************************************/

  /*! exports provided: SorterService */

  /***/
  function srcAppCoreSorterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SorterService", function () {
      return SorterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SorterService =
    /*#__PURE__*/
    function () {
      function SorterService() {
        _classCallCheck(this, SorterService);

        this.property = null;
        this.direction = 1;
      }

      _createClass(SorterService, [{
        key: "sort",
        value: function sort(collection, prop) {
          var _this = this;

          this.property = prop;
          this.direction = this.direction * -1;
          collection.sort(function (a, b) {
            var aVal;
            var bVal; // Handle resolving complex properties such as 'state.name' for prop value

            if (prop && prop.indexOf('.') > -1) {
              aVal = _this.resolveProperty(prop, a);
              bVal = _this.resolveProperty(prop, b);
            } else {
              aVal = a[prop];
              bVal = b[prop];
            } // Fix issues that spaces before/after string value can cause such as ' San Francisco'


            if (_this.isString(aVal)) {
              aVal = aVal.trim().toUpperCase();
            }

            if (_this.isString(bVal)) {
              bVal = bVal.trim().toUpperCase();
            }

            if (aVal === bVal) {
              return 0;
            } else if (aVal > bVal) {
              return _this.direction * -1;
            } else {
              return _this.direction * 1;
            }
          });
        }
      }, {
        key: "isString",
        value: function isString(val) {
          return val && (typeof val === 'string' || val instanceof String);
        }
      }, {
        key: "resolveProperty",
        value: function resolveProperty(path, obj) {
          return path.split('.').reduce(function (prev, curr) {
            return prev ? prev[curr] : undefined;
          }, obj || self);
        }
      }]);

      return SorterService;
    }();

    SorterService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], SorterService);
    /***/
  },

  /***/
  "./src/app/customers/bill/bill.component.css":
  /*!***************************************************!*\
    !*** ./src/app/customers/bill/bill.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomersBillBillComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9iaWxsL2JpbGwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customers/bill/bill.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/customers/bill/bill.component.ts ***!
    \**************************************************/

  /*! exports provided: BillComponent */

  /***/
  function srcAppCustomersBillBillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillComponent", function () {
      return BillComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var BillComponent =
    /*#__PURE__*/
    function () {
      function BillComponent() {
        _classCallCheck(this, BillComponent);

        this.type = 'bar';
        this.data = {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40]
          }]
        };
        this.options = {
          responsive: true,
          maintainAspectRatio: false
        };
      }

      _createClass(BillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BillComponent;
    }();

    BillComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-bill',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./bill.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/bill/bill.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./bill.component.css */
      "./src/app/customers/bill/bill.component.css")).default]
    }), __metadata("design:paramtypes", [])], BillComponent);
    /***/
  },

  /***/
  "./src/app/customers/consumption/consumption.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/customers/consumption/consumption.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomersConsumptionConsumptionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jb25zdW1wdGlvbi9jb25zdW1wdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/customers/consumption/consumption.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/customers/consumption/consumption.component.ts ***!
    \****************************************************************/

  /*! exports provided: ConsumptionComponent */

  /***/
  function srcAppCustomersConsumptionConsumptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsumptionComponent", function () {
      return ConsumptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ConsumptionComponent =
    /*#__PURE__*/
    function () {
      function ConsumptionComponent() {
        _classCallCheck(this, ConsumptionComponent);

        this.type = 'line';
        this.data = {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40]
          }]
        };
        this.options = {
          responsive: true,
          maintainAspectRatio: false
        };
      }

      _createClass(ConsumptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConsumptionComponent;
    }();

    ConsumptionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-consumption',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./consumption.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/consumption/consumption.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./consumption.component.css */
      "./src/app/customers/consumption/consumption.component.css")).default]
    }), __metadata("design:paramtypes", [])], ConsumptionComponent);
    /***/
  },

  /***/
  "./src/app/customers/customers-list/customers-list.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/customers/customers-list/customers-list.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CustomersListComponent */

  /***/
  function srcAppCustomersCustomersListCustomersListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function () {
      return CustomersListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_sorter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../core/sorter.service */
    "./src/app/core/sorter.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomersListComponent =
    /*#__PURE__*/
    function () {
      function CustomersListComponent(sorterService) {
        _classCallCheck(this, CustomersListComponent);

        this.sorterService = sorterService;
        this._customers = [];
        this.filteredCustomers = [];
        this.currencyCode = 'USD';
      }

      _createClass(CustomersListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "calculateOrders",
        value: function calculateOrders() {
          var _this2 = this;

          this.customersOrderTotal = 0;
          this.filteredCustomers.forEach(function (cust) {
            _this2.customersOrderTotal += cust.orderTotal;
          });
        }
      }, {
        key: "filter",
        value: function filter(data) {
          if (data) {
            this.filteredCustomers = this.customers.filter(function (cust) {
              return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 || cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 || cust.orderTotal.toString().indexOf(data) > -1;
            });
          } else {
            this.filteredCustomers = this.customers;
          }

          this.calculateOrders();
        }
      }, {
        key: "sort",
        value: function sort(prop) {
          this.sorterService.sort(this.filteredCustomers, prop);
        }
      }, {
        key: "customerTrackBy",
        value: function customerTrackBy(index, customer) {
          return customer.id;
        }
      }, {
        key: "customers",
        get: function get() {
          return this._customers;
        },
        set: function set(value) {
          if (value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
          }
        }
      }]);

      return CustomersListComponent;
    }();

    CustomersListComponent.ctorParameters = function () {
      return [{
        type: _core_sorter_service__WEBPACK_IMPORTED_MODULE_1__["SorterService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], CustomersListComponent.prototype, "customers", null);

    CustomersListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-customers-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./customers-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-list/customers-list.component.html")).default
    }), __metadata("design:paramtypes", [_core_sorter_service__WEBPACK_IMPORTED_MODULE_1__["SorterService"]])], CustomersListComponent);
    /***/
  },

  /***/
  "./src/app/customers/customers-list/filter-textbox.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/customers/customers-list/filter-textbox.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FilterTextboxComponent */

  /***/
  function srcAppCustomersCustomersListFilterTextboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function () {
      return FilterTextboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FilterTextboxComponent =
    /*#__PURE__*/
    function () {
      function FilterTextboxComponent() {
        _classCallCheck(this, FilterTextboxComponent);

        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FilterTextboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "filter",
        get: function get() {
          return this._filter;
        },
        set: function set(val) {
          this._filter = val;
          this.changed.emit(this.filter); // Raise changed event
        }
      }]);

      return FilterTextboxComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], FilterTextboxComponent.prototype, "filter", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], FilterTextboxComponent.prototype, "changed", void 0);

    FilterTextboxComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-filter-textbox',
      template: "\n        Filter: <input type=\"text\" [(ngModel)]=\"filter\" />\n    "
    }), __metadata("design:paramtypes", [])], FilterTextboxComponent);
    /***/
  },

  /***/
  "./src/app/customers/customers-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/customers/customers-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: CustomersRoutingModule */

  /***/
  function srcAppCustomersCustomersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function () {
      return CustomersRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./customers.component */
    "./src/app/customers/customers.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/customers/login/login.component.ts");
    /* harmony import */


    var _consumption_consumption_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./consumption/consumption.component */
    "./src/app/customers/consumption/consumption.component.ts");
    /* harmony import */


    var _bill_bill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bill/bill.component */
    "./src/app/customers/bill/bill.component.ts");
    /* harmony import */


    var _properties_properties_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./properties/properties.component */
    "./src/app/customers/properties/properties.component.ts");
    /* harmony import */


    var _generation_generation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./generation/generation.component */
    "./src/app/customers/generation/generation.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: 'customers',
      component: _customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"]
    }, {
      path: 'customer/login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'customer/consumption',
      component: _consumption_consumption_component__WEBPACK_IMPORTED_MODULE_4__["ConsumptionComponent"]
    }, {
      path: 'customer/bill',
      component: _bill_bill_component__WEBPACK_IMPORTED_MODULE_5__["BillComponent"]
    }, {
      path: 'customer/properties',
      component: _properties_properties_component__WEBPACK_IMPORTED_MODULE_6__["PropertiesComponent"]
    }, {
      path: 'customer/generation',
      component: _generation_generation_component__WEBPACK_IMPORTED_MODULE_7__["GenerationComponent"]
    }];

    var CustomersRoutingModule = function CustomersRoutingModule() {
      _classCallCheck(this, CustomersRoutingModule);
    };

    CustomersRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], CustomersRoutingModule);
    /***/
  },

  /***/
  "./src/app/customers/customers.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/customers/customers.component.ts ***!
    \**************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../core/data.service */
    "./src/app/core/data.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomersComponent =
    /*#__PURE__*/
    function () {
      function CustomersComponent(dataService) {
        _classCallCheck(this, CustomersComponent);

        this.dataService = dataService;
      }

      _createClass(CustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.title = 'Customers';
          this.dataService.getCustomers().subscribe(function (customers) {
            return _this3.people = customers;
          }); // this.people = [
          //     { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
          //     { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
          //     { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
          //     { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
          // ];
        }
      }]);

      return CustomersComponent;
    }();

    CustomersComponent.ctorParameters = function () {
      return [{
        type: _core_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
      }];
    };

    CustomersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-customers',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./customers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html")).default
    }), __metadata("design:paramtypes", [_core_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], CustomersComponent);
    /***/
  },

  /***/
  "./src/app/customers/customers.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/customers/customers.module.ts ***!
    \***********************************************/

  /*! exports provided: CustomersModule */

  /***/
  function srcAppCustomersCustomersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersModule", function () {
      return CustomersModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./customers-list/customers-list.component */
    "./src/app/customers/customers-list/customers-list.component.ts");
    /* harmony import */


    var _customers_list_filter_textbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./customers-list/filter-textbox.component */
    "./src/app/customers/customers-list/filter-textbox.component.ts");
    /* harmony import */


    var _customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customers.component */
    "./src/app/customers/customers.component.ts");
    /* harmony import */


    var _customers_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./customers-routing.module */
    "./src/app/customers/customers-routing.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/customers/login/login.component.ts");
    /* harmony import */


    var _consumption_consumption_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./consumption/consumption.component */
    "./src/app/customers/consumption/consumption.component.ts");
    /* harmony import */


    var _bill_bill_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./bill/bill.component */
    "./src/app/customers/bill/bill.component.ts");
    /* harmony import */


    var _properties_properties_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./properties/properties.component */
    "./src/app/customers/properties/properties.component.ts");
    /* harmony import */


    var _generation_generation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./generation/generation.component */
    "./src/app/customers/generation/generation.component.ts");
    /* harmony import */


    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular2-chartjs */
    "./node_modules/angular2-chartjs/dist/index.js");
    /* harmony import */


    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_13__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomersModule = function CustomersModule() {
      _classCallCheck(this, CustomersModule);
    };

    CustomersModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _customers_routing_module__WEBPACK_IMPORTED_MODULE_7__["CustomersRoutingModule"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_13__["ChartModule"]],
      declarations: [_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomersListComponent"], _customers_list_filter_textbox_component__WEBPACK_IMPORTED_MODULE_5__["FilterTextboxComponent"], _customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _consumption_consumption_component__WEBPACK_IMPORTED_MODULE_9__["ConsumptionComponent"], _bill_bill_component__WEBPACK_IMPORTED_MODULE_10__["BillComponent"], _properties_properties_component__WEBPACK_IMPORTED_MODULE_11__["PropertiesComponent"], _generation_generation_component__WEBPACK_IMPORTED_MODULE_12__["GenerationComponent"]]
    })], CustomersModule);
    /***/
  },

  /***/
  "./src/app/customers/generation/generation.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/customers/generation/generation.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomersGenerationGenerationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9nZW5lcmF0aW9uL2dlbmVyYXRpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customers/generation/generation.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/customers/generation/generation.component.ts ***!
    \**************************************************************/

  /*! exports provided: GenerationComponent */

  /***/
  function srcAppCustomersGenerationGenerationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerationComponent", function () {
      return GenerationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var GenerationComponent =
    /*#__PURE__*/
    function () {
      function GenerationComponent() {
        _classCallCheck(this, GenerationComponent);

        this.type = 'pie';
        this.data = {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40]
          }]
        };
        this.options = {
          responsive: true,
          maintainAspectRatio: false
        };
      }

      _createClass(GenerationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GenerationComponent;
    }();

    GenerationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-generation',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./generation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/generation/generation.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./generation.component.css */
      "./src/app/customers/generation/generation.component.css")).default]
    }), __metadata("design:paramtypes", [])], GenerationComponent);
    /***/
  },

  /***/
  "./src/app/customers/login/login.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/customers/login/login.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomersLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/customers/login/login.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/customers/login/login.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppCustomersLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/login/login.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/customers/login/login.component.css")).default]
    }), __metadata("design:paramtypes", [])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/customers/properties/properties.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/customers/properties/properties.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomersPropertiesPropertiesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customers/properties/properties.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/customers/properties/properties.component.ts ***!
    \**************************************************************/

  /*! exports provided: PropertiesComponent */

  /***/
  function srcAppCustomersPropertiesPropertiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertiesComponent", function () {
      return PropertiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PropertiesComponent =
    /*#__PURE__*/
    function () {
      function PropertiesComponent() {
        _classCallCheck(this, PropertiesComponent);

        this.type = 'line';
        this.data = {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40]
          }]
        };
        this.options = {
          responsive: true,
          maintainAspectRatio: false
        };
      }

      _createClass(PropertiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PropertiesComponent;
    }();

    PropertiesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-properties',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./properties.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/properties/properties.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./properties.component.css */
      "./src/app/customers/properties/properties.component.css")).default]
    }), __metadata("design:paramtypes", [])], PropertiesComponent);
    /***/
  },

  /***/
  "./src/app/landing/landing-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/landing/landing-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: LandingRoutingModule */

  /***/
  function srcAppLandingLandingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function () {
      return LandingRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing/landing.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: 'landing',
      component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
    }];

    var LandingRoutingModule = function LandingRoutingModule() {
      _classCallCheck(this, LandingRoutingModule);
    };

    LandingRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], LandingRoutingModule);
    /***/
  },

  /***/
  "./src/app/landing/landing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/landing/landing.module.ts ***!
    \*******************************************/

  /*! exports provided: LandingModule */

  /***/
  function srcAppLandingLandingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingModule", function () {
      return LandingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing/landing.component.ts");
    /* harmony import */


    var _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing-routing.module */
    "./src/app/landing/landing-routing.module.ts");
    /* harmony import */


    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-chartjs */
    "./node_modules/angular2-chartjs/dist/index.js");
    /* harmony import */


    var angular2_chartjs__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_4__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LandingModule = function LandingModule() {
      _classCallCheck(this, LandingModule);
    };

    LandingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingRoutingModule"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_4__["ChartModule"]]
    })], LandingModule);
    /***/
  },

  /***/
  "./src/app/landing/landing/landing.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/landing/landing/landing.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLandingLandingLandingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/landing/landing/landing.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/landing/landing/landing.component.ts ***!
    \******************************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppLandingLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LandingComponent =
    /*#__PURE__*/
    function () {
      function LandingComponent(_router) {
        _classCallCheck(this, LandingComponent);

        this._router = _router;
        this.type = 'line';
        this.data = {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40]
          }]
        };
        this.options = {
          responsive: true,
          maintainAspectRatio: false
        };
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "customers",
        value: function customers() {
          this._router.navigate(['customer/login']);
        }
      }, {
        key: "operators",
        value: function operators() {
          this._router.navigate(['operator/login']);
        }
      }]);

      return LandingComponent;
    }();

    LandingComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    LandingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-landing',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing/landing.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./landing.component.css */
      "./src/app/landing/landing/landing.component.css")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], LandingComponent);
    /***/
  },

  /***/
  "./src/app/operators/login/login.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/operators/login/login.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOperatorsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/operators/login/login.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/operators/login/login.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppOperatorsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/operators/login/login.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/operators/login/login.component.css")).default]
    }), __metadata("design:paramtypes", [])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/operators/operators-list/operators-list.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/operators/operators-list/operators-list.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOperatorsOperatorsListOperatorsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy9vcGVyYXRvcnMtbGlzdC9vcGVyYXRvcnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/operators/operators-list/operators-list.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/operators/operators-list/operators-list.component.ts ***!
    \**********************************************************************/

  /*! exports provided: OperatorsListComponent */

  /***/
  function srcAppOperatorsOperatorsListOperatorsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperatorsListComponent", function () {
      return OperatorsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OperatorsListComponent =
    /*#__PURE__*/
    function () {
      function OperatorsListComponent() {
        _classCallCheck(this, OperatorsListComponent);
      }

      _createClass(OperatorsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OperatorsListComponent;
    }();

    OperatorsListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-operators-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./operators-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/operators/operators-list/operators-list.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./operators-list.component.css */
      "./src/app/operators/operators-list/operators-list.component.css")).default]
    }), __metadata("design:paramtypes", [])], OperatorsListComponent);
    /***/
  },

  /***/
  "./src/app/operators/operators-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/operators/operators-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: OperatorsRoutingModule */

  /***/
  function srcAppOperatorsOperatorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperatorsRoutingModule", function () {
      return OperatorsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _operators_operators_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./operators/operators.component */
    "./src/app/operators/operators/operators.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/operators/login/login.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: 'operators',
      component: _operators_operators_component__WEBPACK_IMPORTED_MODULE_2__["OperatorsComponent"]
    }, {
      path: 'operator/login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];

    var OperatorsRoutingModule = function OperatorsRoutingModule() {
      _classCallCheck(this, OperatorsRoutingModule);
    };

    OperatorsRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], OperatorsRoutingModule);
    /***/
  },

  /***/
  "./src/app/operators/operators.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/operators/operators.module.ts ***!
    \***********************************************/

  /*! exports provided: OperatorsModule */

  /***/
  function srcAppOperatorsOperatorsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperatorsModule", function () {
      return OperatorsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _operators_list_operators_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./operators-list/operators-list.component */
    "./src/app/operators/operators-list/operators-list.component.ts");
    /* harmony import */


    var _operators_operators_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./operators/operators.component */
    "./src/app/operators/operators/operators.component.ts");
    /* harmony import */


    var _operators_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./operators-routing.module */
    "./src/app/operators/operators-routing.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/operators/login/login.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OperatorsModule = function OperatorsModule() {
      _classCallCheck(this, OperatorsModule);
    };

    OperatorsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_operators_list_operators_list_component__WEBPACK_IMPORTED_MODULE_2__["OperatorsListComponent"], _operators_operators_component__WEBPACK_IMPORTED_MODULE_3__["OperatorsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _operators_routing_module__WEBPACK_IMPORTED_MODULE_4__["OperatorsRoutingModule"]]
    })], OperatorsModule);
    /***/
  },

  /***/
  "./src/app/operators/operators/operators.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/operators/operators/operators.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOperatorsOperatorsOperatorsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdG9ycy9vcGVyYXRvcnMvb3BlcmF0b3JzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/operators/operators/operators.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/operators/operators/operators.component.ts ***!
    \************************************************************/

  /*! exports provided: OperatorsComponent */

  /***/
  function srcAppOperatorsOperatorsOperatorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperatorsComponent", function () {
      return OperatorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OperatorsComponent =
    /*#__PURE__*/
    function () {
      function OperatorsComponent() {
        _classCallCheck(this, OperatorsComponent);
      }

      _createClass(OperatorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OperatorsComponent;
    }();

    OperatorsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-operators',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./operators.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/operators/operators/operators.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./operators.component.css */
      "./src/app/operators/operators/operators.component.css")).default]
    }), __metadata("design:paramtypes", [])], OperatorsComponent);
    /***/
  },

  /***/
  "./src/app/orders/orders-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/orders/orders-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: OrdersRoutingModule */

  /***/
  function srcAppOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function () {
      return OrdersRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../orders/orders.component */
    "./src/app/orders/orders.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: 'orders/:id',
      component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"]
    }];

    var OrdersRoutingModule = function OrdersRoutingModule() {
      _classCallCheck(this, OrdersRoutingModule);
    };

    OrdersRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], OrdersRoutingModule);
    /***/
  },

  /***/
  "./src/app/orders/orders.component.css":
  /*!*********************************************!*\
    !*** ./src/app/orders/orders.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrdersOrdersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".orders-table {\r\n    margin-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVycy10YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/orders/orders.component.ts":
  /*!********************************************!*\
    !*** ./src/app/orders/orders.component.ts ***!
    \********************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/data.service */
    "./src/app/core/data.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OrdersComponent =
    /*#__PURE__*/
    function () {
      function OrdersComponent(dataService, route) {
        _classCallCheck(this, OrdersComponent);

        this.dataService = dataService;
        this.route = route;
        this.orders = [];
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          var id = +this.route.snapshot.paramMap.get('id');
          this.dataService.getOrders(id).subscribe(function (orders) {
            _this4.orders = orders;
          });
          this.dataService.getCustomer(id).subscribe(function (customer) {
            _this4.customer = customer;
          });
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ctorParameters = function () {
      return [{
        type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    OrdersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-orders',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./orders.component.css */
      "./src/app/orders/orders.component.css")).default]
    }), __metadata("design:paramtypes", [_core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/orders/orders.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.module.ts ***!
    \*****************************************/

  /*! exports provided: OrdersModule */

  /***/
  function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
      return OrdersModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./orders.component */
    "./src/app/orders/orders.component.ts");
    /* harmony import */


    var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orders-routing.module */
    "./src/app/orders/orders-routing.module.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OrdersModule = function OrdersModule() {
      _classCallCheck(this, OrdersModule);
    };

    OrdersModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersRoutingModule"]],
      declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"]]
    })], OrdersModule);
    /***/
  },

  /***/
  "./src/app/shared/capitalize.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/capitalize.pipe.ts ***!
    \*******************************************/

  /*! exports provided: CapitalizePipe */

  /***/
  function srcAppSharedCapitalizePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function () {
      return CapitalizePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CapitalizePipe =
    /*#__PURE__*/
    function () {
      function CapitalizePipe() {
        _classCallCheck(this, CapitalizePipe);
      }

      _createClass(CapitalizePipe, [{
        key: "transform",
        value: function transform(value) {
          if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
          }

          return value;
        }
      }]);

      return CapitalizePipe;
    }();

    CapitalizePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'capitalize'
    })], CapitalizePipe);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./capitalize.pipe */
    "./src/app/shared/capitalize.pipe.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_capitalize_pipe__WEBPACK_IMPORTED_MODULE_1__["CapitalizePipe"]],
      exports: [_capitalize_pipe__WEBPACK_IMPORTED_MODULE_1__["CapitalizePipe"]]
    })], SharedModule);
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
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.log(err);
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
    /*! F:\aa\Ashipa\repos\AshipaAngularClient\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map