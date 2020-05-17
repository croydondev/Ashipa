(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app-routing.module.ts":
/*!***********************************!*\
  !*** ./app/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authorise_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorise/login/login.component */ "./app/authorise/login/login.component.ts");
/* harmony import */ var _authorise_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorise/register/register.component */ "./app/authorise/register/register.component.ts");
/* harmony import */ var _components_spring_board_spring_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/spring-board/spring-board.component */ "./app/components/spring-board/spring-board.component.ts");
/* harmony import */ var _insurance_products_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insurance-products/components/product-list/product-list.component */ "./app/insurance-products/components/product-list/product-list.component.ts");
/* harmony import */ var _insurance_products_components_policy_detail_policy_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insurance-products/components/policy-detail/policy-detail.component */ "./app/insurance-products/components/policy-detail/policy-detail.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./app/services/auth.service.ts");
/* harmony import */ var _insurance_products_services_insurances_dataservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./insurance-products/services/insurances.dataservice */ "./app/insurance-products/services/insurances.dataservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'login', component: _authorise_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], pathMatch: 'full' },
    { path: 'register', component: _authorise_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], pathMatch: 'full' },
    { path: 'newcase', component: _components_spring_board_spring_board_component__WEBPACK_IMPORTED_MODULE_4__["SpringBoardComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["UrlGuardService"]] },
    {
        path: 'newcase/insurance',
        component: _insurance_products_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"],
        children: [
            {
                path: 'policydetail',
                component: _insurance_products_components_policy_detail_policy_detail_component__WEBPACK_IMPORTED_MODULE_6__["PolicyDetailComponent"],
                canActivateChild: [_insurance_products_services_insurances_dataservice__WEBPACK_IMPORTED_MODULE_8__["InsurancesService"]]
            }
        ],
        canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["UrlGuardService"]]
    },
    { path: '**', component: _authorise_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./app/app.component.sass":
/*!********************************!*\
  !*** ./app/app.component.sass ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  overflow-y: hidden;\n  width: 100vw; }\n\n.wrapper {\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n  background-color: #ffffff;\n  margin-right: 30px; }\n\ni.material-icons {\n  position: relative;\n  top: 7px; }\n\n.page-content {\n  display: contents;\n  width: 100%; }\n\ninput:not([type]):focus:not([readonly]),\ninput[type=\"text\"]:not(.browser-default):focus:not([readonly]) {\n  border-bottom: 1px solid #02162f;\n  box-shadow: 0 1px 0 0 #02162f; }\n\n#dashboard,\n#settings,\n#logout {\n  color: #02162f;\n  transition: all 0.3s ease-out; }\n\n#dashboard #dashboard:hover,\n  #dashboard #settings:hover,\n  #dashboard #logout:hover,\n  #settings #dashboard:hover,\n  #settings #settings:hover,\n  #settings #logout:hover,\n  #logout #dashboard:hover,\n  #logout #settings:hover,\n  #logout #logout:hover {\n    text-decoration: none;\n    color: darkorange;\n    cursor: pointer; }\n\n.top-row {\n  margin: 15px auto 0;\n  height: 55px; }\n\n.card {\n  margin-bottom: 25px; }\n\n.card-title {\n  color: #02162f;\n  font-weight: bold; }\n\n[tooltip] {\n  margin: 20px;\n  position: relative; }\n\n[tooltip] [tooltip]::after {\n    content: attr(tooltip);\n    position: absolute;\n    left: 50%;\n    top: -6px;\n    -webkit-transform: translateX(-50%) translateY(-100%);\n            transform: translateX(-50%) translateY(-100%);\n    text-align: center;\n    color: #02162f;\n    padding: 4px 2px;\n    font-size: 12px;\n    min-width: 80px;\n    border-radius: 5px;\n    pointer-events: none;\n    opacity: 0; }\n\n[tooltip] [tooltip]:hover::after,\n  [tooltip] [tooltip]:hover::before {\n    opacity: 1; }\n\n[tooltip-position=\"bottom\"]::after {\n  top: 100%;\n  margin-top: 10px;\n  -webkit-transform: translateX(-50%) translateY(0%);\n          transform: translateX(-50%) translateY(0%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFNvdXJjZVxcQ0xTR1NcXERldlxcQ0xTLldlYlNpdGVcXENMUy5XZWJTaXRlXFxPcmRlcmluZy1OZXcvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLG1CQUFrQjtFQUNsQixhQUFZLEVBQUc7O0FBRWpCO0VBQ0UsY0FBYTtFQUNiLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLG1CQUFrQixFQUFHOztBQUd2QjtFQUNFLG1CQUFrQjtFQUNsQixTQUFRLEVBQUc7O0FBR2I7RUFDRSxrQkFBaUI7RUFDakIsWUFBVyxFQUFHOztBQUdoQjs7RUFFRSxpQ0FBdUM7RUFFdkMsOEJBQW9DLEVBQUc7O0FBR3pDOzs7RUFHRSxlQUFxQjtFQUlyQiw4QkFBNkIsRUFRUDs7QUFmeEI7Ozs7Ozs7OztJQWFJLHNCQUFxQjtJQUNyQixrQkFBaUI7SUFDakIsZ0JBQWUsRUFBRzs7QUFHdEI7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWSxFQUFHOztBQUdqQjtFQUNFLG9CQUFtQixFQUFHOztBQUd4QjtFQUNFLGVBQXFCO0VBQ3JCLGtCQUFpQixFQUFHOztBQ0R0QjtFREtFLGFBQVk7RUFDWixtQkFBa0IsRUFxQkQ7O0FDeEJqQjtJRE9FLHVCQUFzQjtJQUN0QixtQkFBa0I7SUFDbEIsVUFBUztJQUNULFVBQVM7SUFDVCxzREFBNkM7WUFBN0MsOENBQTZDO0lBQzdDLG1CQUFrQjtJQUNsQixlQUFxQjtJQUNyQixpQkFBZ0I7SUFDaEIsZ0JBQWU7SUFDZixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixxQkFBb0I7SUFDcEIsV0FBVSxFQUFHOztBQ0xmOztJRFVFLFdBQVUsRUFBRzs7QUNOakI7RURVRSxVQUFTO0VBQ1QsaUJBQWdCO0VBQ2hCLG1EQUEwQztVQUExQywyQ0FBMEMsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aWR0aDogMTAwdnc7IH1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1yaWdodDogMzBweDsgfVxuXG5cbmkubWF0ZXJpYWwtaWNvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3B4OyB9XG5cblxuLnBhZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB3aWR0aDogMTAwJTsgfVxuXG5cbmlucHV0Om5vdChbdHlwZV0pOmZvY3VzOm5vdChbcmVhZG9ubHldKSxcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIsIDIyLCA0Nyk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCAwIHJnYigyLCAyMiwgNDcpO1xuICBib3gtc2hhZG93OiAwIDFweCAwIDAgcmdiKDIsIDIyLCA0Nyk7IH1cblxuXG4jZGFzaGJvYXJkLFxuI3NldHRpbmdzLFxuI2xvZ291dCB7XG4gIGNvbG9yOiByZ2IoMiwgMjIsIDQ3KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuXG5cbiAgI2Rhc2hib2FyZDpob3ZlcixcbiAgI3NldHRpbmdzOmhvdmVyLFxuICAjbG9nb3V0OmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9IH1cblxuXG4udG9wLXJvdyB7XG4gIG1hcmdpbjogMTVweCBhdXRvIDA7XG4gIGhlaWdodDogNTVweDsgfVxuXG5cbi5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG5cbi5jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHJnYigyLCAyMiwgNDcpO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG5cblt0b29sdGlwXSB7XG4gIG1hcmdpbjogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG5cbiAgW3Rvb2x0aXBdOjphZnRlciB7XG4gICAgY29udGVudDogYXR0cih0b29sdGlwKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogLTZweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZ2IoMiwgMjIsIDQ3KTtcbiAgICBwYWRkaW5nOiA0cHggMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDA7IH1cblxuXG4gIFt0b29sdGlwXTpob3Zlcjo6YWZ0ZXIsXG4gIFt0b29sdGlwXTpob3Zlcjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuXG5bdG9vbHRpcC1wb3NpdGlvbj1cImJvdHRvbVwiXTo6YWZ0ZXIge1xuICB0b3A6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDAlKTsgfVxuXG4iLCJodG1sLFxuYm9keSB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMHZ3OyB9XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7IH1cblxuaS5tYXRlcmlhbC1pY29ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA3cHg7IH1cblxuLnBhZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB3aWR0aDogMTAwJTsgfVxuXG5pbnB1dDpub3QoW3R5cGVdKTpmb2N1czpub3QoW3JlYWRvbmx5XSksXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMjE2MmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCAwICMwMjE2MmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjMDIxNjJmOyB9XG5cbiNkYXNoYm9hcmQsXG4jc2V0dGluZ3MsXG4jbG9nb3V0IHtcbiAgY29sb3I6ICMwMjE2MmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDsgfVxuICAjZGFzaGJvYXJkICNkYXNoYm9hcmQ6aG92ZXIsXG4gICNkYXNoYm9hcmQgI3NldHRpbmdzOmhvdmVyLFxuICAjZGFzaGJvYXJkICNsb2dvdXQ6aG92ZXIsXG4gICNzZXR0aW5ncyAjZGFzaGJvYXJkOmhvdmVyLFxuICAjc2V0dGluZ3MgI3NldHRpbmdzOmhvdmVyLFxuICAjc2V0dGluZ3MgI2xvZ291dDpob3ZlcixcbiAgI2xvZ291dCAjZGFzaGJvYXJkOmhvdmVyLFxuICAjbG9nb3V0ICNzZXR0aW5nczpob3ZlcixcbiAgI2xvZ291dCAjbG9nb3V0OmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi50b3Atcm93IHtcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMDtcbiAgaGVpZ2h0OiA1NXB4OyB9XG5cbi5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG4uY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjMDIxNjJmO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG5bdG9vbHRpcF0ge1xuICBtYXJnaW46IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICBbdG9vbHRpcF0gW3Rvb2x0aXBdOjphZnRlciB7XG4gICAgY29udGVudDogYXR0cih0b29sdGlwKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogLTZweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMDIxNjJmO1xuICAgIHBhZGRpbmc6IDRweCAycHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMDsgfVxuICBbdG9vbHRpcF0gW3Rvb2x0aXBdOmhvdmVyOjphZnRlcixcbiAgW3Rvb2x0aXBdIFt0b29sdGlwXTpob3Zlcjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG5cblt0b29sdGlwLXBvc2l0aW9uPVwiYm90dG9tXCJdOjphZnRlciB7XG4gIHRvcDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoMCUpOyB9XG4iXX0= */"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _insurance_products_services_insurances_dataservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insurance-products/services/insurances.dataservice */ "./app/insurance-products/services/insurances.dataservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(router, _insuranceService) {
        this.title = 'ordering';
        router.events
            .pipe(
        // The "events" stream contains all the navigation events. For this demo,
        // though, we only care about the NavigationStart event as it contains
        // information about what initiated the navigation sequence.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
            return (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]);
        }))
            .subscribe(function (event) {
            if (event.url === '/newcase/insurance') {
                _insuranceService.sendNewInsurance(false);
            }
            else if (event.url === '/newcase/insurance/policydetail') {
                if (_insuranceService.Products.length > 0) {
                    _insuranceService.sendNewInsurance(true);
                }
                else {
                    router.navigate(['newcase/insurance']);
                }
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _insurance_products_services_insurances_dataservice__WEBPACK_IMPORTED_MODULE_3__["InsurancesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "../node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "../node_modules/apollo-cache-inmemory/lib/index.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular-link-http */ "../node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link-http */ "../node_modules/apollo-link-http/lib/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _insurance_products_insurance_products_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./insurance-products/insurance-products.module */ "./app/insurance-products/insurance-products.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authorise_authorise_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./authorise/authorise.module */ "./app/authorise/authorise.module.ts");
/* harmony import */ var _components_spring_board_spring_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/spring-board/spring-board.component */ "./app/components/spring-board/spring-board.component.ts");
/* harmony import */ var _authorise_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./authorise/shared/shared.module */ "./app/authorise/shared/shared.module.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = /** @class */ (function () {
    function AppModule(apollo, _httpLink) {
        this.apollo = apollo;
        this._httpLink = _httpLink;
        var link = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_6__["createHttpLink"])({ uri: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].graphQl, credentials: 'include' });
        apollo.create({
            link: _httpLink.create({
                uri: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].graphQl,
                withCredentials: true,
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHeaders"]({
                    'apollographql-client-name': 'Web',
                    'client-version': '1',
                    'Access-Control-Allow-Origin': '*'
                }),
            }),
            cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"](),
            connectToDevTools: true,
            defaultOptions: {
                watchQuery: {
                    errorPolicy: 'none'
                },
                query: {
                    errorPolicy: 'none'
                },
                mutate: {
                    errorPolicy: 'none'
                }
            }
        });
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_spring_board_spring_board_component__WEBPACK_IMPORTED_MODULE_13__["SpringBoardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_5__["HttpLinkModule"],
                _insurance_products_insurance_products_module__WEBPACK_IMPORTED_MODULE_9__["InsuranceProductsModule"],
                apollo_angular__WEBPACK_IMPORTED_MODULE_3__["ApolloModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _authorise_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _authorise_authorise_module__WEBPACK_IMPORTED_MODULE_12__["AuthoriseModule"]
            ],
            exports: [],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["UrlGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"],
            apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/authorise/authorise.module.ts":
/*!*******************************************!*\
  !*** ./app/authorise/authorise.module.ts ***!
  \*******************************************/
/*! exports provided: AuthoriseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthoriseModule", function() { return AuthoriseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./app/authorise/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./app/authorise/register/register.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./app/authorise/shared/shared.module.ts");
/* harmony import */ var ngx_loader_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-loader-indicator */ "../node_modules/ngx-loader-indicator/fesm5/ngx-loader-indicator.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthoriseModule = /** @class */ (function () {
    function AuthoriseModule() {
    }
    AuthoriseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ngx_loader_indicator__WEBPACK_IMPORTED_MODULE_5__["NgxLoaderIndicatorModule"].forRoot({
                    loaderStyles: {},
                    imgStyles: {
                        width: '100px'
                    },
                    rotate: {
                        duration: 5000
                    },
                })
            ],
            exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]]
        })
    ], AuthoriseModule);
    return AuthoriseModule;
}());



/***/ }),

/***/ "./app/authorise/login/login.component.html":
/*!**************************************************!*\
  !*** ./app/authorise/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"modal\" style=\"display: block; width:100%; height: 100%; overflow-y:auto; padding-bottom: 50px;\">\n          <div class=\"container-fluid\" [loader]=\"isLoading\">\n\n              <div class=\"row\">\n                  <div class=\"col-sm-12\" style=\"margin-left: auto; margin-right: auto; text-align: center;\">\n                      <br />\n                      <img src=\"../../../assets/cls-logo-sphere.png\" width=\"100\" style=\"padding-top: 10px; padding-bottom: 10px;\" />\n                      <br />\n                      <hr />\n                  </div>\n              </div>\n\n              <br />\n\n              <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                      <form [formGroup]=\"loginForm\" class=\"form-wrap\">\n                            <div class=\"form-group row\">\n                                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label closer\">Account ID</label>\n                                    <div class=\"col-sm-8\">\n                                      <input type=\"number\" class=\"form-control\" formControlName=\"accountid\" />\n                                    </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label closer\">Username</label>\n                                    <div class=\"col-sm-8\">\n                                      <input type=\"text\" class=\"form-control\" formControlName=\"username\" />\n                                    </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                    <label for=\"inputPassword\" class=\"col-sm-4 col-form-label closer\">Password</label>\n                                    <div class=\"col-sm-8\">\n                                      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" />\n                                    </div>\n                            </div>\n                            <div style=\"text-align: center; margin-left: auto; margin-right: auto;\">\n                                    <button class=\"btn btn-primary\" (click)=\"onLogin()\" style=\"color: white;background-color: #193d8a;width:140.141px\">Log In</button>\n                                    <button  class=\"btn btn-secondary\" (click)=\"ResetPassword(true)\" style=\"margin-left:10px;\">Forgot Password?</button>\n                                </div>\n\n\n                                <br />\n                                <div style=\"text-align: center; margin-left: auto; margin-right: auto;\">\n                                    <span style=\"color:red\">{{error}}</span>\n                                    <br />\n                                    <span style=\"color:red\">{{accountIdError}}</span>\n                                </div>\n    \n                                <div style=\"text-align: center; margin-left: auto; margin-right: auto;\">\n                                    Click <a (click)=\"register()\" style=\"color: #1B8EE1;\">here</a> to register\n                                </div>\n\n                      </form>\n                  </div>\n              </div>\n\n<!--\n              <reset-password (cancelClicked)='ResetPassword($event)' *ngIf=\"displayResetPassword\"></reset-password>\n              <change-password [resetKey]='resetKey' *ngIf=\"changePassword\"></change-password>\n-->                            \n\n          </div>\n\n      </div>\n  </div>\n"

/***/ }),

/***/ "./app/authorise/login/login.component.sass":
/*!**************************************************!*\
  !*** ./app/authorise/login/login.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-wrap,\n.mat-form-field {\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 150px;\n  max-width: 400px;\n  width: 100%; }\n\n.login-btn {\n  margin-left: auto;\n  margin-right: auto; }\n\n.hide {\n  display: none; }\n\n.loading {\n  color: #193d8a;\n  font-weight: 700; }\n\n.closer {\n  margin-right: -30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXNlL2xvZ2luL0M6XFxTb3VyY2VcXENMU0dTXFxEZXZcXENMUy5XZWJTaXRlXFxDTFMuV2ViU2l0ZVxcT3JkZXJpbmctTmV3L3NyY1xcYXBwXFxhdXRob3Jpc2VcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUFHOztBQUVoQjtFQUNFLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFBRzs7QUFFdkI7RUFDSSxjQUFhLEVBQUc7O0FBRXBCO0VBQ0ksZUFBYztFQUNkLGlCQUFnQixFQUFHOztBQUV2QjtFQUNFLG9CQUFtQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9yaXNlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0td3JhcCxcbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5sb2dpbi1idG4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG5cbi5sb2FkaW5nIHtcbiAgICBjb2xvcjogIzE5M2Q4YTtcbiAgICBmb250LXdlaWdodDogNzAwOyB9XG5cbi5jbG9zZXIge1xuICBtYXJnaW4tcmlnaHQ6IC0zMHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./app/authorise/login/login.component.ts":
/*!************************************************!*\
  !*** ./app/authorise/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "../node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "../node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dataservice.service */ "./app/services/dataservice.service.ts");
/* harmony import */ var src_app_insurance_products_services_insurance_products_dataservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/insurance-products/services/insurance-products.dataservice */ "./app/insurance-products/services/insurance-products.dataservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(_mainservice, router, route, _insuranceProductsService) {
        this._mainservice = _mainservice;
        this.router = router;
        this.route = route;
        this._insuranceProductsService = _insuranceProductsService;
        this.error = "";
        this.accountIdError = "";
        this.displayResetPassword = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            accountid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.changePassword = false;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var self = this;
        this.error = "";
        this.accountIdError = "";
        this._username = this.loginForm.value.username;
        this._password = this.loginForm.value.password;
        this._accountid = this.loginForm.value.accountid;
        if (!this.isLoginValidated(this._username, this._password, this._accountid)) {
            this.isLoading = true;
            this._mainservice.signinUser(parseInt(this.loginForm.value.accountid), this.loginForm.value.username, this.loginForm.value.password).subscribe(function (loggedin) {
                _this.isLoading = false;
                if (loggedin) {
                    localStorage.setItem("accountid", self._accountid);
                    localStorage.setItem("username", _this._username);
                    _this._mainservice.changeLoggedInUserAtAppLevel("true");
                    _this._insuranceProductsService.getProducts(true).subscribe();
                    self.router.navigate(["../newcase"]);
                }
                else {
                    _this.error = "The username and password that you entered did not match our records. Please double-check and try again.";
                }
            });
        }
    };
    LoginComponent.prototype.ResetPassword = function (_resetPassword) {
        alert("reset password");
    };
    LoginComponent.prototype.isLoginValidated = function (username, password, accountId) {
        var noError = false;
        if (username === null || password === null) {
            this.error = "You must enter a username/password.";
            noError = true;
        }
        if (accountId === null) {
            this.accountIdError = "You must enter a account id.";
            noError = true;
        }
        return noError;
    };
    LoginComponent.prototype.onCheckUser = function () {
        this._mainservice.checkUser().subscribe();
    };
    LoginComponent.prototype.redirect = function () {
        this.router.navigate(['CaseFiles']);
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/Register']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./app/authorise/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./app/authorise/login/login.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_dataservice_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_insurance_products_services_insurance_products_dataservice__WEBPACK_IMPORTED_MODULE_6__["InsuranceProductDataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./app/authorise/register/register.component.html":
/*!********************************************************!*\
  !*** ./app/authorise/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./app/authorise/register/register.component.sass":
/*!********************************************************!*\
  !*** ./app/authorise/register/register.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcmlzZS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./app/authorise/register/register.component.ts":
/*!******************************************************!*\
  !*** ./app/authorise/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./app/authorise/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.sass */ "./app/authorise/register/register.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./app/authorise/shared/shared.module.ts":
/*!***********************************************!*\
  !*** ./app/authorise/shared/shared.module.ts ***!
  \***********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/leftsidebar/leftsidebar.component */ "./app/components/leftsidebar/leftsidebar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_insurance_products_services_insurance_products_dataservice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/insurance-products/services/insurance-products.dataservice */ "./app/insurance-products/services/insurance-products.dataservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { RegistrationComponent } from './registration/registration.component';




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_7__["LeftsidebarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _components_leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_7__["LeftsidebarComponent"]
            ],
            providers: [
                src_app_insurance_products_services_insurance_products_dataservice__WEBPACK_IMPORTED_MODULE_9__["InsuranceProductDataService"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./app/classes/Case.ts":
/*!*****************************!*\
  !*** ./app/classes/Case.ts ***!
  \*****************************/
/*! exports provided: Case, CaseStatus, Draft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Case", function() { return Case; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStatus", function() { return CaseStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draft", function() { return Draft; });
var Case = /** @class */ (function () {
    function Case(_casereference, _date, _lines, _orders, _status, _drafts, _caseaddresses, _address) {
        this.CaseAdd = false;
        this.casereference = _casereference;
        this.datecreated = _date;
        this.orders = _orders;
        this.status = _status;
        this.drafts = _drafts;
        this.caseaddresses = _caseaddresses;
        this.address = _address;
        this.lines = _lines;
    }
    return Case;
}());

var CaseStatus;
(function (CaseStatus) {
    CaseStatus[CaseStatus["Incomplete"] = 0] = "Incomplete";
    CaseStatus[CaseStatus["Complete"] = 1] = "Complete";
})(CaseStatus || (CaseStatus = {}));
var Draft = /** @class */ (function () {
    function Draft() {
    }
    return Draft;
}());



/***/ }),

/***/ "./app/classes/PriceAttribute.ts":
/*!***************************************!*\
  !*** ./app/classes/PriceAttribute.ts ***!
  \***************************************/
/*! exports provided: Prices, PriceAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prices", function() { return Prices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceAttribute", function() { return PriceAttribute; });
var Prices = /** @class */ (function () {
    function Prices() {
        this.attributes = [];
        this.price = 0;
        this.productName = '';
    }
    return Prices;
}());

var PriceAttribute = /** @class */ (function () {
    function PriceAttribute() {
    }
    return PriceAttribute;
}());



/***/ }),

/***/ "./app/classes/Product.ts":
/*!********************************!*\
  !*** ./app/classes/Product.ts ***!
  \********************************/
/*! exports provided: Product, ProductPrice, ProductAttribute, BaseProductAttributes, BaseProductAttributesValues, Tax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPrice", function() { return ProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttribute", function() { return ProductAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseProductAttributes", function() { return BaseProductAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseProductAttributesValues", function() { return BaseProductAttributesValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tax", function() { return Tax; });
var Product = /** @class */ (function () {
    function Product(_name, _prices, _id) {
        this.hideProduct = false;
        this.hiddenBySize = false;
        this.hiddenPropertyType = false;
        this.name = _name;
        this.prices = _prices;
        this.id = _id;
        this.hideProduct = false;
        this.hiddenBySize = false;
        this.hiddenPropertyType = false;
        this.stateFact = false;
    }
    return Product;
}());

var ProductPrice = /** @class */ (function () {
    function ProductPrice(_price, _attributes, _fromPrice) {
        this.price = _price;
        this.attributes = _attributes;
        this.fromPrice = _fromPrice;
    }
    return ProductPrice;
}());

var ProductAttribute = /** @class */ (function () {
    function ProductAttribute(_name, _value, _desc, _attributeDescription, _options) {
        this.name = _name;
        this.value = _value;
        this.description = _desc;
        this.attributeDescription = _attributeDescription;
        this.options = _options;
    }
    return ProductAttribute;
}());

var BaseProductAttributes = /** @class */ (function () {
    function BaseProductAttributes() {
    }
    return BaseProductAttributes;
}());

var BaseProductAttributesValues = /** @class */ (function () {
    function BaseProductAttributesValues() {
    }
    return BaseProductAttributesValues;
}());

var Tax = /** @class */ (function () {
    function Tax() {
    }
    return Tax;
}());



/***/ }),

/***/ "./app/classes/tokenResponse.ts":
/*!**************************************!*\
  !*** ./app/classes/tokenResponse.ts ***!
  \**************************************/
/*! exports provided: TokenResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenResponse", function() { return TokenResponse; });
var TokenResponse = /** @class */ (function () {
    function TokenResponse(_success, _token) {
        this.success = _success;
        this.token = _token;
    }
    return TokenResponse;
}());



/***/ }),

/***/ "./app/components/leftsidebar/leftsidebar.component.html":
/*!***************************************************************!*\
  !*** ./app/components/leftsidebar/leftsidebar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\" class=\"col-md-12\">\r\n  <!-- Logo -->\r\n  <div class=\"circle\" style=\"padding-top: 25px;\">\r\n    <a routerLink=\"CaseFiles\">\r\n      <img src=\"../../../assets/cls-logo-sphere.png\" style=\"margin-bottom: 10px; width: 85px; height: 113px;\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"sidebar-container\" style=\"padding-bottom: 10px;padding-top: 40px; color: #707070\">\r\n    <span style=\"font-weight: 600; font-size: 20px; color: #272727; font-family: Source Sans Pro, SemiBold;\">{{ username }}</span>\r\n    <h6 *ngIf=\"credit\" style=\"font-weight: 500; font-size: 15px; color:#9B9B9B; margin-top: 1px; font-family: Source Sans Pro, Regular;\">\r\n        {{ credit[0].company }}\r\n    </h6>\r\n    <h6 *ngIf=\"credit\"  style=\"font-weight: 400; font-size: 15px; color:#9B9B9B; margin-top: 1px; font-family: Source Sans Pro, Regular;\">\r\n      Credit £ {{ credit | number:'.'}} \r\n    </h6>\r\n  </div>\r\n\r\n  <div style=\"border-top: 1px solid #C7CACC; width: 249px; position: relative; right: 15px;\">&nbsp;</div>\r\n\r\n  <div id=\"navigmenu\">\r\n    <ul class=\"side-menu\">\r\n      <li>\r\n        <a routerLink=\"CreateCase\" style=\"font-size: 15px; font-family: Source Sans Pro, Regular;\" (click)=\"goToPage('newcase')\">\r\n          <i class=\"material-icons\" style=\"color:#1B8EE1\">add</i>\r\n          <span style=\"position: relative; bottom: 6px; left: 8px; color:#1B8EE1\">New Case</span></a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"CaseFiles\" style=\"font-size: 15px; font-family: Source Sans Pro, Regular;\">\r\n          <i class=\"material-icons\" style=\"color:grey\">view_headline</i>\r\n          <span style=\"position: relative; bottom: 6px; left: 8px; color:grey\">My Cases</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"PromptPrice\" style=\"font-size: 15px; font-family: Source Sans Pro, Regular;\">\r\n          <i class=\"material-icons\" style=\"color:grey\">trending_up</i>\r\n          <span style=\"position: relative; bottom: 6px; left: 8px; color:grey\">View Invoices</span></a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"side-menu\" style=\"bottom: 50px; position: fixed;\">\r\n      <li>\r\n        <a routerLink=\"CreateCase\" style=\"font-size: 15px; font-family: Source Sans Pro, Regular;\">\r\n          <i class=\"material-icons\" style=\"color:grey\">ring_volume</i>\r\n          <span style=\"position: relative; bottom: 6px; left: 8px; color:grey\">Help and Advice</span></a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"CaseFiles\" style=\"font-size: 15px; font-family: Source Sans Pro, Regular;\">\r\n          <i class=\"material-icons\" style=\"color:grey\">settings</i>\r\n          <span style=\"position: relative; bottom: 6px; left: 8px; color:grey\">Settings</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a (click)=\"OnLogout()\" style=\"font-size: 15px; font-family: Source Sans Pro, Regular;\">\r\n          <i class=\"material-icons\" style=\"color:#1B8EE1\">exit_to_app</i>\r\n          <span style=\"position: relative; bottom: 6px; left: 8px; color:#1B8EE1\">Sign Out</span></a>\r\n      </li>      \r\n    </ul>      \r\n\r\n  </div><!-- /.navigation menu -->\r\n\r\n  <div id=\"sidebar-footer\">\r\n    <div style=\"border-top: 1px solid #C7CACC; width: 249px;height: 15px;\">&nbsp;</div>\r\n    <!--<div><a href=\"https://dev.clsl.co.uk/Content/PDFs/Website/Privacy%20Statement.pdf\" target=\"_blank\">Privacy Policy</a><a href=\"https://dev.clsl.co.uk/Content/PDFs/Website/TermsConditions-B2B.pdf\" target=\"_blank\">Terms & Conditions</a></div>-->\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">&nbsp;</div>\r\n      <div class=\"col-sm-1\" style=\"padding-left: 0px;\">\r\n        <a href=\"https://www.linkedin.com/company/clsl/\" target=\"_blank\" style=\"padding-left: 0px;\">\r\n            <i class=\"zmdi zmdi-linkedin-box\" style=\"font-size:25px; color:#1B8EE1;\"></i>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n          <a href=\"https://twitter.com/clslimited?lang=en\" target=\"_blank\">\r\n              <i class=\"zmdi zmdi-twitter\" style=\"font-size:25px; color:#1B8EE1;\"></i>\r\n          </a>\r\n      </div>      \r\n      <div class=\"col-sm-7\">\r\n      <a href=\"https://dev.clsl.co.uk/Content/PDFs/Website/TermsConditions-B2B.pdf\" target=\"_blank\" style=\"color:#1B8EE1; font-size: 14px; font-family: Arial, Regular;\">Terms & Policy</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><!-- /#sidebar-->\r\n\r\n\r\n"

/***/ }),

/***/ "./app/components/leftsidebar/leftsidebar.component.sass":
/*!***************************************************************!*\
  !*** ./app/components/leftsidebar/leftsidebar.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar {\n  border-right: 1px solid #dedede;\n  min-height: 100vh;\n  height: 100%;\n  position: fixed;\n  min-width: 250px;\n  max-width: 250px;\n  color: #000;\n  /*background-color: rgb(240, 240, 240)*/\n  background-color: #F3F4F7;\n  transition: all 1s ease-out; }\n\n#sidebar.closed,\n#sidebar.closed #sidebar-footer {\n  margin-left: -250px; }\n\n#sidebar .sidebar-container {\n  margin: 10px auto 15px;\n  max-width: 220px;\n  text-align: center; }\n\n#sidebar .sidebar-container h6 {\n    text-align: center;\n    font-size: 14px;\n    line-height: 22px;\n    margin-top: 5px;\n    padding-bottom: 0px;\n    margin-bottom: 0px; }\n\n#sidebar .sidebar-container h6 strong {\n      font-size: 13.5px; }\n\n#sidebar #sidebar-footer {\n  border-right: 1px solid #dedede;\n  width: 250px;\n  height: 50px;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  background-color: #F3F4F7;\n  transition: all 1s ease-out; }\n\n.circle {\n  width: 100px;\n  height: 100px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 15px; }\n\n#navigmenu {\n  width: 100%; }\n\n#navigmenu ul {\n  list-style: none;\n  padding-left: 0; }\n\n#navigmenu ul li {\n  height: 50px;\n  display: grid;\n  align-content: center;\n  position: relative;\n  left: 15px;\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px; }\n\n#navigmenu ul li:hover {\n  background-color: #ffffff;\n  z-index: 999;\n  border-right: 221px solid #ffffff; }\n\n#navigmenu ul li a {\n  width: 220px;\n  margin-left: 0;\n  padding-left: 15px;\n  transition: all 0.3s ease-out; }\n\n#sidebar-footer div a {\n  padding-left: 16px;\n  font-size: 13px;\n  transition: all 0.3s ease-out; }\n\n#navigmenu ul li a:hover,\n#sidebar-footer div a:hover {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWZ0c2lkZWJhci9DOlxcU291cmNlXFxDTFNHU1xcRGV2XFxDTFMuV2ViU2l0ZVxcQ0xTLldlYlNpdGVcXE9yZGVyaW5nLU5ldy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGVmdHNpZGViYXJcXGxlZnRzaWRlYmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQStCO0VBQy9CLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsMEJBQXlCO0VBSXpCLDRCQUEyQixFQUFHOztBQUVoQzs7RUFFRSxvQkFBbUIsRUFBRzs7QUFFeEI7RUFDRSx1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQVdVOztBQWQ5QjtJQU1JLG1CQUFrQjtJQUNsQixnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLG9CQUFtQjtJQUNuQixtQkFBa0IsRUFHTTs7QUFkNUI7TUFjTSxrQkFBaUIsRUFBRzs7QUFFMUI7RUFDRSxnQ0FBK0I7RUFDL0IsYUFBWTtFQUNaLGFBQVk7RUFDWixnQkFBZTtFQUNmLFFBQU87RUFDUCxVQUFTO0VBQ1QsMEJBQXlCO0VBSXpCLDRCQUEyQixFQUFHOztBQUVoQztFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2IsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQUc7O0FBRXRCO0VBQ0UsWUFBVyxFQUFHOztBQUVoQjtFQUNFLGlCQUFnQjtFQUNoQixnQkFBZSxFQUFHOztBQUVwQjtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsK0JBQThCO0VBQzlCLDRCQUEyQixFQUFHOztBQUVoQztFQUNFLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osa0NBQWlDLEVBQUc7O0FBRXRDO0VBQ0UsYUFBWTtFQUNaLGVBQWM7RUFDZCxtQkFBa0I7RUFJbEIsOEJBQTZCLEVBQUc7O0FBRWxDO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBSWYsOEJBQTZCLEVBQUc7O0FBRWxDOztFQUVFLHNCQUFxQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sZWZ0c2lkZWJhci9sZWZ0c2lkZWJhci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlYmFyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZGVkZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBjb2xvcjogIzAwMDtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCkqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEY3O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0OyB9XG5cbiNzaWRlYmFyLmNsb3NlZCxcbiNzaWRlYmFyLmNsb3NlZCAjc2lkZWJhci1mb290ZXIge1xuICBtYXJnaW4tbGVmdDogLTI1MHB4OyB9XG5cbiNzaWRlYmFyIC5zaWRlYmFyLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweCBhdXRvIDE1cHg7XG4gIG1heC13aWR0aDogMjIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBoNiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG5cbiAgICBzdHJvbmcge1xuICAgICAgZm9udC1zaXplOiAxMy41cHg7IH0gfSB9XG5cbiNzaWRlYmFyICNzaWRlYmFyLWZvb3RlciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWRlZGU7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjRGNztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDsgfVxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6IDE1cHg7IH1cblxuI25hdmlnbWVudSB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbiNuYXZpZ21lbnUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7IH1cblxuI25hdmlnbWVudSB1bCBsaSB7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4OyB9XG5cbiNuYXZpZ21lbnUgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvcmRlci1yaWdodDogMjIxcHggc29saWQgI2ZmZmZmZjsgfVxuXG4jbmF2aWdtZW51IHVsIGxpIGEge1xuICB3aWR0aDogMjIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDsgfVxuXG4jc2lkZWJhci1mb290ZXIgZGl2IGEge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0OyB9XG5cbiNuYXZpZ21lbnUgdWwgbGkgYTpob3ZlcixcbiNzaWRlYmFyLWZvb3RlciBkaXYgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4iXX0= */"

/***/ }),

/***/ "./app/components/leftsidebar/leftsidebar.component.ts":
/*!*************************************************************!*\
  !*** ./app/components/leftsidebar/leftsidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: LeftsidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftsidebarComponent", function() { return LeftsidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dataservice.service */ "./app/services/dataservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeftsidebarComponent = /** @class */ (function () {
    function LeftsidebarComponent(_dataService, _route, _l, _router) {
        this._dataService = _dataService;
        this._route = _route;
        this._l = _l;
        this._router = _router;
    }
    LeftsidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.checkUser(false).subscribe(function (u) {
            _this.username = u.firstname + " " + u.lastname;
        });
        this._dataService.getCredit().subscribe(function (res) {
            _this.credit = new String(res[0].available).split(".")[0];
        });
    };
    LeftsidebarComponent.prototype.OnLogout = function () {
        var _this = this;
        this._dataService.logout().subscribe(function (s) {
            console.log(s);
            if (s) {
                _this._dataService.changeLoggedInUserAtAppLevel("false");
                localStorage.clear();
                _this._router.navigate(['login']);
            }
        });
    };
    LeftsidebarComponent.prototype.goToPage = function (page) {
        this._router.navigate([page]);
    };
    LeftsidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leftsidebar',
            template: __webpack_require__(/*! ./leftsidebar.component.html */ "./app/components/leftsidebar/leftsidebar.component.html"),
            styles: [__webpack_require__(/*! ./leftsidebar.component.sass */ "./app/components/leftsidebar/leftsidebar.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LeftsidebarComponent);
    return LeftsidebarComponent;
}());



/***/ }),

/***/ "./app/components/spring-board/spring-board.component.html":
/*!*****************************************************************!*\
  !*** ./app/components/spring-board/spring-board.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n    <app-leftsidebar></app-leftsidebar>\n</div>\n<div  class=\"main\">\n    <div class=\"container-fluid\" style=\"padding-bottom: 45px;\">\n        <div>\n          <div style=\"margin-top:34px\" class=\"row\">\n            <div class=\"col-md-12\">\n              <div style=\"text-align: center;\">\n                <div class=\"header\">\n                  <span>Create New Case</span>\n                </div>\n                <div class=\"greyline\">\n                </div>\n                <div class=\"quickinfo\">\n                  <i class=\"material-icons\"\n                    style=\"transform: rotate(180deg); position: relative; top: 7px;\">error_outline</i>\n                  What would you like to Order?</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <br />\n              <br />\n              <div style=\"text-align: center;\">\n                <div class=\"card\">\n                  <div class=\"cardtitle\">Fraud Protection</div>\n                  <div class=\"prod-quickdesc\">\n                    AML, KYC, ID \n                    <br/>and Company checks\n                  </div>\n                  <div class=\"prod-desc\">\n                    Manage risk and compliance. Products specifically focused on the conveyancing market.\n                  </div>\n                  <div style=\"margin-top:42px;margin-bottom:46px;\">\n                  <button  class=\"prod-type-button-disabled\"> NEXT\n                  </button>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"cardtitle\">Searches</div>\n                  <div  class=\"prod-quickdesc\">\n                    Residential & Commercial\n                    <br/>Conveyancing Products\n                  </div>\n                  <div class=\"prod-desc\">\n                    Local Authority, Regulated Searches, Environmental, Hazard detection and more…\n                  </div>\n                  <div style=\"margin-top:42px;margin-bottom:46px;\">\n                    <button class=\"prod-type-button-disabled\" > ORDER\n                    </button>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div  class=\"cardtitle\">Insurance</div>\n                  <div class=\"prod-quickdesc\">\n                    Residential, Commercial\n                    <br/>& Bespoke Policies\n                  </div>\n                  <div class=\"prod-desc\">\n                    Lorem ipsum dolor amet glossier af 90’s wayfarers, street art williamsburg.\n                  </div>\n                  <div style=\"margin-top:42px;margin-bottom:46px;\">\n                    <button class=\"prod-type-button\" (click)=\"onCreateCase()\"> ORDER\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <br />\n              <br />\n              <div style=\"text-align: center;\">\n                <div class=\"card\">\n                  <div  class=\"cardtitle\">Lawyer Checker</div>\n                  <div class=\"prod-quickdesc\">\n                    Vendors Conveyancer \n                    <br/>Verification\n                  </div>\n                  <div class=\"prod-desc\" style=\"width:245px\">\n                    Protect your clients money through enhanced risk management when sending funds.\n                  </div>\n                  <div style=\"margin-top:42px;margin-bottom:46px;\">\n                    <button  class=\"prod-type-button-disabled\" > ORDER\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>  \n</div>"

/***/ }),

/***/ "./app/components/spring-board/spring-board.component.sass":
/*!*****************************************************************!*\
  !*** ./app/components/spring-board/spring-board.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-family: Source Sans Pro;\n  font-size: 33px;\n  font-weight: 600;\n  text-align: center; }\n\n.greyline {\n  margin: 0 auto;\n  height: 33.5px;\n  width: 111px;\n  border-bottom: 1px solid #C7CACC; }\n\n.card {\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  border: 1px solid #C7CACC;\n  width: 292px;\n  height: 346px;\n  display: inline-block;\n  margin-right: 34px;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16); }\n\n.cardtitle {\n  font-size: 22px;\n  margin-top: 46px;\n  font-family: Source Sans Pro;\n  font-weight: 600;\n  height: 28px; }\n\n.quickinfo {\n  margin: 0 auto;\n  width: 500px;\n  height: 60px;\n  margin-top: 35.5px;\n  font-family: Source Sans Pro;\n  color: #6F6D6D;\n  font-size: 16px; }\n\n.prod-quickdesc {\n  font-size: 16px;\n  margin-top: 18px;\n  font-family: Source Sans Pro; }\n\n.prod-desc {\n  margin: 0 auto;\n  margin-top: 18px;\n  width: 210px;\n  color: #6B7072; }\n\n.prod-type-button {\n  border: none;\n  font-weight: bold;\n  font-size: 14px;\n  color: white;\n  width: 120px;\n  height: 40px;\n  border-radius: 4px;\n  background-image: linear-gradient(179deg, #034EA2, #022751);\n  box-shadow: 0px 2px 8px #b2b2b2;\n  font-family: Source Sans Pro;\n  font-size: 14px; }\n\n.prod-type-button-disabled {\n  border: none;\n  font-weight: bold;\n  font-size: 14px;\n  color: white;\n  width: 120px;\n  height: 40px;\n  border-radius: 4px;\n  background-color: grey;\n  box-shadow: 0px 2px 8px #b2b2b2;\n  font-family: Source Sans Pro;\n  font-size: 14px; }\n\n.main-newcase {\n  margin-left: 250px;\n  padding: 0px 10px;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\n.mat-hint a,\n.mat-hint .link {\n  color: #007bff;\n  cursor: pointer; }\n\n.mat-hint a:hover,\n.mat-hint .link:hover {\n  color: #0056b3;\n  text-decoration: none; }\n\na,\na:not([href]):not([tabindex]),\n.link {\n  color: #007bff;\n  cursor: pointer; }\n\na:hover,\na:not([href]):not([tabindex]):hover,\n.link:hover {\n  color: #0056b3;\n  text-decoration: none; }\n\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {\n  background: none; }\n\n.mat-card-content {\n  margin-bottom: 0px; }\n\n.mandatory {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcHJpbmctYm9hcmQvQzpcXFNvdXJjZVxcQ0xTR1NcXERldlxcQ0xTLldlYlNpdGVcXENMUy5XZWJTaXRlXFxPcmRlcmluZy1OZXcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNwcmluZy1ib2FyZFxcc3ByaW5nLWJvYXJkLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssNkJBQTRCO0VBQzVCLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUFHOztBQUMxQjtFQUNJLGVBQWM7RUFDZCxlQUFjO0VBQ2QsYUFBWTtFQUNaLGlDQUFnQyxFQUFHOztBQUN2QztFQUNJLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQiw0Q0FBMkMsRUFBRzs7QUFDbEQ7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQiw2QkFBNEI7RUFDNUIsaUJBQWdCO0VBQ2hCLGFBQVksRUFBRzs7QUFDbkI7RUFDSSxlQUFjO0VBQ2QsYUFBWTtFQUNaLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsNkJBQTRCO0VBQzVCLGVBQWM7RUFDZCxnQkFBZSxFQUFHOztBQUN0QjtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLDZCQUE0QixFQUFHOztBQUNuQztFQUNJLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGVBQWMsRUFBRzs7QUFDckI7RUFDSSxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGFBQVk7RUFDWixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLDREQUF5RDtFQUN6RCxnQ0FBOEM7RUFDOUMsNkJBQTRCO0VBQzVCLGdCQUFlLEVBQUc7O0FBQ3RCO0VBQ0ksYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGFBQVk7RUFDWixhQUFZO0VBQ1osYUFBWTtFQUNaLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsZ0NBQThDO0VBQzlDLDZCQUE0QjtFQUM1QixnQkFBZSxFQUFHOztBQUV0QjtFQUNFLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUFHOztBQUN2Qjs7RUFFSSxlQUFjO0VBQ2QsZ0JBQWUsRUFBRzs7QUFFdEI7O0VBRUksZUFBYztFQUNkLHNCQUFxQixFQUFHOztBQUU1Qjs7O0VBR0ksZUFBYztFQUNkLGdCQUFlLEVBQUc7O0FBRXRCOzs7RUFHSSxlQUFjO0VBQ2Qsc0JBQXFCLEVBQUc7O0FBRTVCO0VBQ0UsaUJBQWdCLEVBQUc7O0FBRXJCO0VBQ0UsbUJBQWtCLEVBQUc7O0FBRXZCO0VBQ0UsV0FBVSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcHJpbmctYm9hcmQvc3ByaW5nLWJvYXJkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm87XG4gICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4uZ3JleWxpbmUge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogMzMuNXB4O1xuICAgIHdpZHRoOiAxMTFweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0M3Q0FDQzsgfVxuLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDN0NBQ0M7XG4gICAgd2lkdGg6IDI5MnB4O1xuICAgIGhlaWdodDogMzQ2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMzRweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTYpOyB9XG4uY2FyZHRpdGxlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luLXRvcDogNDZweDtcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgaGVpZ2h0OiAyOHB4OyB9XG4ucXVpY2tpbmZvIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi10b3A6IDM1LjVweDtcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvO1xuICAgIGNvbG9yOiAjNkY2RDZEO1xuICAgIGZvbnQtc2l6ZTogMTZweDsgfVxuLnByb2QtcXVpY2tkZXNjIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvOyB9XG4ucHJvZC1kZXNjIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIHdpZHRoOiAyMTBweDtcbiAgICBjb2xvcjogIzZCNzA3MjsgfVxuLnByb2QtdHlwZS1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNzlkZWcsIzAzNEVBMiwjMDIyNzUxKTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDE3OCwgMTc4LCAxNzgsIDEpO1xuICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm87XG4gICAgZm9udC1zaXplOiAxNHB4OyB9XG4ucHJvZC10eXBlLWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDE3OCwgMTc4LCAxNzgsIDEpO1xuICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm87XG4gICAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5tYWluLW5ld2Nhc2Uge1xuICBtYXJnaW4tbGVmdDogMjUwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxuLm1hdC1oaW50IGEsXG4ubWF0LWhpbnQgLmxpbmsge1xuICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4ubWF0LWhpbnQgYTpob3Zlcixcbi5tYXQtaGludCAubGluazpob3ZlciB7XG4gICAgY29sb3I6ICMwMDU2YjM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbmEsXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSxcbi5saW5rIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuYTpob3ZlcixcbmE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmhvdmVyLFxuLmxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjMDA1NmIzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lOyB9XG5cbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4OyB9XG5cbi5tYW5kYXRvcnkge1xuICBjb2xvcjogcmVkOyB9XG4iXX0= */"

/***/ }),

/***/ "./app/components/spring-board/spring-board.component.ts":
/*!***************************************************************!*\
  !*** ./app/components/spring-board/spring-board.component.ts ***!
  \***************************************************************/
/*! exports provided: SpringBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringBoardComponent", function() { return SpringBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpringBoardComponent = /** @class */ (function () {
    function SpringBoardComponent(route, _router) {
        this.route = route;
        this._router = _router;
    }
    SpringBoardComponent.prototype.ngOnInit = function () {
    };
    SpringBoardComponent.prototype.onCreateCase = function (order) {
        this._router.navigate(['newcase/insurance']);
    };
    SpringBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spring-board',
            template: __webpack_require__(/*! ./spring-board.component.html */ "./app/components/spring-board/spring-board.component.html"),
            styles: [__webpack_require__(/*! ./spring-board.component.sass */ "./app/components/spring-board/spring-board.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SpringBoardComponent);
    return SpringBoardComponent;
}());



/***/ }),

/***/ "./app/insurance-products/components/insurance-attributes/insurance-attributes.component.html":
/*!****************************************************************************************************!*\
  !*** ./app/insurance-products/components/insurance-attributes/insurance-attributes.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom: 30px;\" class=\"col-sm-11 padding-0\">\n    <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n        <span>&nbsp;</span>\n        <span class=\"font-size-1rem text-color text-format\">Apply a Voucher Code</span>\n    </h4>\n\n    <div class=\"price-container\">\n        <div class=\"row\" id=\"your-price\">\n            <div class=\"col-md-12\">\n                <span class=\"font-size-16 padding-left-11 text-format\">YOUR PRICE:</span>\n            </div>\n        </div>\n        <div class=\"row total-price-container\">\n            <div class=\"col-md-10 padding-left-25\" *ngIf=\"!productListBespokeOnly\">\n                <span class=\"pound-symbol text-format\">£</span>\n                <span class=\"font-size-30 text-format\">{{TotalPrice | number : '1.2-2'}}</span>\n            </div>\n            <div class=\"col-md-10 padding-left-25\" *ngIf=\"productListBespokeOnly\">\n                <span class=\"font-size-30 text-format\">Bespoke</span>\n                <i (click)=\"bespokeAlert()\" id=\"bespoke-Info\" class=\"material-icons\">info_outlined</i>\n            </div>\n            <div class=\"col-md-2 blue-color pointer padding-left-7\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\" *ngIf=\"isRightOrDown\" (click)=\"toggleIsRightOrDown()\"><a>\n                            <i class=\"material-icons font-size-45\">keyboard_arrow_down</i>\n                        </a></div>\n                    <div class=\"col-md-12\" *ngIf=\"!isRightOrDown\" (click)=\"toggleIsRightOrDown()\"><a>\n                            <i class=\"material-icons font-size-45\">keyboard_arrow_right</i>\n                        </a></div>\n                </div>\n            </div>\n        </div>\n        <div id=\"IptContainer\" class=\"row\">\n            <div class=\"col-md-12 padding-left-25\">\n                <span *ngIf=\"!productListBespokeOnly\" class=\"font-size-14 color-grey text-format\">Includes IPT of\n                    £{{TotalTax | number : '1.2-2'}}</span>\n                <div *ngIf=\"productListContainBespoke\" style=\"display: inline-block;\">\n                    <i class=\"material-icons danger\">warning</i>\n                    <span id=\"bespoke-text\" class=\"danger font-size-14 text-format\">Bespoke price(s) not included.</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row border-row\">\n            <div class=\"col-md-12\">\n                <hr />\n            </div>\n        </div>\n        <div class=\"row revealedpricecontainer\" *ngIf=\"isRightOrDown\">\n            <div class=\"col-md-12\">\n                <div *ngFor=\"let p of Products; let i = index\" class=\"row individual-product\">\n                    <div style=\"padding-right:1px;\" class=\"col-md-9 padding-left-15 revealedpricelabel\">\n                        <span class=\"revealedprice product-color\">{{p.name}}</span>\n                        <i class=\"material-icons\" style=\"color: #D86161; cursor: pointer; vertical-align: bottom;\" (click)=\"deleteThisProduct(i, p)\">delete</i>\n                    </div>\n                    <div class=\"col-md-3 padding-left-0 price-per-product\">\n                        <span class=\"revealedprice font-weight-600\" *ngIf=\"!p.isBespokeProduct\"><span>£{{p.Price|\n                                number : '1.2-2'}}</span></span>\n                        <span class=\"revealedprice font-weight-600\" *ngIf=\"p.isBespokeProduct\"><span>Bespoke</span></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"isRightOrDown\" class=\"row border-row\">\n            <div class=\"col-md-12\">\n                <hr />\n            </div>\n        </div>\n        <form class=\"revealedpriceform\">\n            <div *ngFor=\"let attribute of PriceAttributes\" class=\"form-group attribute-container\">\n                <label for=\"exampleInputEmail1\"><span class=\"text-format attribute-names\">{{attribute.description}}</span></label>\n                <select (change)=\"GetPriceFromAttribute(attribute, $event.target.value)\" *ngIf=\"attribute.dataType === 'Dictionary'\"\n                    class=\"custom-select\" required>\n                    <option *ngFor=\"let option of attribute.options\" class=\"text-format\" [value]=\"option.value\">{{option.description}}</option>\n                </select>\n            </div>\n            <button style=\"width:100%;font-size:15px;\" (click)=\"continueWithInsurance()\" *ngIf=\"!showPlaceOrder\" class=\"prod-type-button text-format\">\n                <i class=\"material-icons forward-arrow\">arrow_forward</i>\n                CONTINUE\n            </button>\n            <div  *ngIf=\"showPlaceOrder\">\n                <a (click)=\"backToproducts()\"style=\"color: #007bff; \" backToproducts class=\"back-button\">\n                    BACK\n                </a>\n                <button style=\"width:100%;font-size:15px; margin-top:20px;\" (click)=\"continueWithInsurance()\"\n                    class=\"button-disabled text-format\">\n                    <i class=\"material-icons forward-arrow\">done</i>\n                    PLACE ORDER\n                </button>\n                <div class=\"draft-container\">\n                        <span class=\"save-for-later\">SAVE FOR LATER</span>\n                        <i (click)=\"saveForLaterAlert()\" class=\"material-icons save-for-later-icon\">info_outlined</i>\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class=\"row\" style=\"padding-top: 10px;\" *ngIf=\"showPlaceOrder\">\n            <div  class=\"col-md-1\">\n                    <a (click)=\"getSampleFiles(this._InsuranceService.Products)\" style=\"color: #007bff;\"  target=\"_blank\">\n                      <i class=\"material-icons\">file_download</i>\n                    </a>\n            </div>\n            <div  class=\"col-md-10\" >                            \n                    <a (click)=\"getDemandsAndNeeds(this._InsuranceService.Products)\">\n                      <span class=\"demands-Needs\">Demands and Needs Statement</span>\n                    </a>                            \n            </div>  \n    </div>\n</div>\n<div class=\"col-sm-2\"></div>"

/***/ }),

/***/ "./app/insurance-products/components/insurance-attributes/insurance-attributes.component.sass":
/*!****************************************************************************************************!*\
  !*** ./app/insurance-products/components/insurance-attributes/insurance-attributes.component.sass ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".revealedprice {\n  font-size: 15px; }\n\n.revealedpricelabel {\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.revealedpricecontainer {\n  width: 98%;\n  padding-left: 30px; }\n\n.revealedpriceform {\n  width: 95%;\n  padding-left: 27px;\n  padding-right: 20px; }\n\n.individual-product {\n  margin-top: 9px;\n  padding-bottom: 9px; }\n\n.margin-top-160 {\n  margin-top: 160px; }\n\n.font-size-1rem {\n  font-size: 1.0rem; }\n\n.text-color {\n  color: #1B8EE1; }\n\n.padding-left-25 {\n  padding-left: 25px; }\n\n#IptContainer {\n  width: 95%;\n  padding-left: 20px; }\n\n.price-container {\n  background: #F3F4F7;\n  width: 100%;\n  padding-bottom: 20px; }\n\n#your-price {\n  width: 95%;\n  padding-left: 20px;\n  padding-top: 20px; }\n\n.font-size-16 {\n  font-size: 16px; }\n\n.total-price-container {\n  width: 95%;\n  padding-left: 20px;\n  margin-top: 10px; }\n\n.pound-symbol {\n  font-size: 16px;\n  position: relative;\n  bottom: 8px;\n  margin-right: 10px; }\n\n.font-size-30 {\n  font-size: 30px; }\n\n.blue-color {\n  color: #1B8EE1; }\n\n.pointer {\n  cursor: pointer; }\n\n.font-size-45 {\n  font-size: 45px; }\n\n.font-size-14 {\n  font-size: 14px; }\n\n.color-grey {\n  color: #6F6D6D; }\n\n.product-color {\n  color: #34455A; }\n\n.border-row {\n  width: 98%;\n  padding-left: 30px;\n  margin-top: 10px;\n  height: 12px; }\n\n.border-row hr {\n  border: 1px solid #C7CACC; }\n\n.padding-left-15 {\n  padding-left: 15px; }\n\n.padding-left-11 {\n  padding-left: 11px; }\n\n.padding-left-0 {\n  padding-left: 0px; }\n\n.padding-left-7 {\n  padding-left: 7px; }\n\n.padding-left-8 {\n  padding-left: 8px; }\n\n.attribute-container {\n  padding-left: 9px;\n  padding-right: 21px;\n  margin-bttom: 30px; }\n\n.btn {\n  width: 89%;\n  margin-left: 9px; }\n\n.padding-right-34 {\n  padding-right: 34px; }\n\n.padding-left-26 {\n  padding-left: 26px; }\n\n.padding-0 {\n  padding: 0px; }\n\n.position-relative {\n  position: relative; }\n\n.top-84 {\n  top: 84px; }\n\n.text-format {\n  font-family: Source Sans Pro;\n  font-weight: 600; }\n\n.attribute-names {\n  color: #34455A;\n  font-size: 15px;\n  font-weight: 600; }\n\n.font-weight-600 {\n  font-weight: 600; }\n\n.price-per-product {\n  text-align: right;\n  padding-right: 10px; }\n\nspan {\n  font-family: Source Sans Pro; }\n\n.danger {\n  color: red; }\n\n#bespoke-text {\n  top: 3px;\n  left: 4px;\n  position: relative; }\n\n#bespoke-Info {\n  padding-left: 10px;\n  color: #007bff;\n  width: 10px; }\n\n#bespoke-Info:hover {\n    cursor: pointer; }\n\n.back-button {\n  margin-left: 10px;\n  font-size: 15px;\n  font-family: Source Sans Pro;\n  font-weight: 600; }\n\n.forward-arrow {\n  position: relative;\n  padding-right: 10px;\n  font-size: 18px;\n  top: 3px; }\n\n.prod-type-button:hover {\n  cursor: pointer; }\n\n.button-disabled {\n  border: none;\n  font-weight: bold;\n  font-size: 14px;\n  color: white;\n  width: 120px;\n  height: 40px;\n  background: #C7CACC;\n  border-radius: 4px;\n  font-family: Source Sans Pro;\n  font-size: 14px; }\n\n.save-for-later {\n  font-size: 15px;\n  font-family: Source Sans Pro;\n  font-weight: 600;\n  margin-left: 20%;\n  color: #007bff; }\n\n.save-for-later-icon {\n  margin-right: 1%;\n  position: relative;\n  color: #007bff;\n  width: 15px;\n  top: 6px; }\n\n.save-for-later-icon:hover {\n    cursor: pointer; }\n\n.draft-container {\n  margin-top: 35px;\n  text-align: end; }\n\n.no-padding {\n  padding: 0;\n  margin: 0;\n  text-align: start; }\n\n.demands-Needs {\n  font-size: 13px;\n  position: relative;\n  bottom: 4px;\n  font-family: Source Sans Pro;\n  color: #007bff; }\n\n.demands-Needs-icon {\n  color: #007bff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdXJhbmNlLXByb2R1Y3RzL2NvbXBvbmVudHMvaW5zdXJhbmNlLWF0dHJpYnV0ZXMvQzpcXFNvdXJjZVxcQ0xTR1NcXERldlxcQ0xTLldlYlNpdGVcXENMUy5XZWJTaXRlXFxPcmRlcmluZy1OZXcvc3JjXFxhcHBcXGluc3VyYW5jZS1wcm9kdWN0c1xcY29tcG9uZW50c1xcaW5zdXJhbmNlLWF0dHJpYnV0ZXNcXGluc3VyYW5jZS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQWUsRUFBRzs7QUFDcEI7RUFDRSxrQkFBaUI7RUFDakIsbUJBQWtCLEVBQUc7O0FBQ3ZCO0VBQ0UsV0FBVTtFQUNWLG1CQUFrQixFQUFHOztBQUN2QjtFQUNFLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQUc7O0FBQ3hCO0VBQ0ksZ0JBQWU7RUFDZixvQkFBbUIsRUFBRzs7QUFFMUI7RUFDSSxrQkFBaUIsRUFBRzs7QUFFeEI7RUFDSSxrQkFBaUIsRUFBRzs7QUFFeEI7RUFDSSxlQUFjLEVBQUc7O0FBRXJCO0VBQ0ksbUJBQWtCLEVBQUc7O0FBRXpCO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUFHOztBQUV6QjtFQUNJLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gscUJBQW9CLEVBQUc7O0FBRTNCO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixrQkFBaUIsRUFBRzs7QUFFeEI7RUFDSSxnQkFBZSxFQUFHOztBQUV0QjtFQUNJLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQUc7O0FBRXZCO0VBQ0ksZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLG1CQUFrQixFQUFHOztBQUV6QjtFQUNJLGdCQUFlLEVBQUc7O0FBRXRCO0VBQ0ksZUFBYyxFQUFHOztBQUVyQjtFQUNJLGdCQUFlLEVBQUc7O0FBRXRCO0VBQ0ksZ0JBQWUsRUFBRzs7QUFDdEI7RUFDSSxnQkFBZSxFQUFHOztBQUV0QjtFQUNJLGVBQWMsRUFBRzs7QUFFckI7RUFDSSxlQUFjLEVBQUc7O0FBRXJCO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsYUFBWSxFQUFHOztBQUVuQjtFQUNJLDBCQUF5QixFQUFHOztBQUVoQztFQUNJLG1CQUFrQixFQUFHOztBQUV6QjtFQUNJLG1CQUFrQixFQUFHOztBQUV6QjtFQUNJLGtCQUFpQixFQUFHOztBQUV4QjtFQUNJLGtCQUFpQixFQUFHOztBQUV4QjtFQUNJLGtCQUFpQixFQUFHOztBQUV4QjtFQUNJLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsbUJBQWtCLEVBQUc7O0FBRXpCO0VBQ0ksV0FBVTtFQUNWLGlCQUFnQixFQUFHOztBQUV2QjtFQUNJLG9CQUFtQixFQUFHOztBQUUxQjtFQUNJLG1CQUFrQixFQUFHOztBQUV6QjtFQUNJLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxtQkFBa0IsRUFBRzs7QUFFekI7RUFDSSxVQUFTLEVBQUc7O0FBRWhCO0VBQ0ksNkJBQTRCO0VBQzVCLGlCQUFnQixFQUFHOztBQUV2QjtFQUNJLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGlCQUFnQixFQUFHOztBQUV2QjtFQUNJLGlCQUFnQixFQUFHOztBQUV2QjtFQUNJLGtCQUFpQjtFQUNqQixvQkFBbUIsRUFBRzs7QUFFMUI7RUFDSSw2QkFBNEIsRUFBRzs7QUFFbkM7RUFDSSxXQUFVLEVBQUc7O0FBRWpCO0VBQ0ksU0FBUTtFQUNSLFVBQVM7RUFDVCxtQkFBa0IsRUFBRzs7QUFFekI7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLFlBQVcsRUFFYTs7QUFMNUI7SUFLUSxnQkFBZSxFQUFHOztBQUMxQjtFQUNJLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLDZCQUE0QjtFQUM1QixpQkFBZ0IsRUFBRzs7QUFDdkI7RUFDSSxtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsU0FBUSxFQUFHOztBQUdmO0VBQ0ksZ0JBQWUsRUFBRzs7QUFFdEI7RUFDSSxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGFBQVk7RUFDWixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQiw2QkFBNEI7RUFDNUIsZ0JBQWUsRUFBRzs7QUFDdEI7RUFDSSxnQkFBZTtFQUNmLDZCQUE0QjtFQUM1QixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVBQWMsRUFBRzs7QUFDckI7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxZQUFXO0VBQ1gsU0FBUSxFQUVnQjs7QUFQNUI7SUFPUSxnQkFBZSxFQUFHOztBQUMxQjtFQUNJLGlCQUFnQjtFQUNoQixnQkFBZSxFQUFHOztBQUN0QjtFQUNHLFdBQVU7RUFDVixVQUFTO0VBQ1Qsa0JBQWlCLEVBQUc7O0FBQ3ZCO0VBQ0ksZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLDZCQUE0QjtFQUM1QixlQUFjLEVBQUc7O0FBQ3JCO0VBQ0ksZUFBYyxFQUFHIiwiZmlsZSI6InNyYy9hcHAvaW5zdXJhbmNlLXByb2R1Y3RzL2NvbXBvbmVudHMvaW5zdXJhbmNlLWF0dHJpYnV0ZXMvaW5zdXJhbmNlLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yZXZlYWxlZHByaWNlIHtcbiAgZm9udC1zaXplOiAxNXB4OyB9XG4ucmV2ZWFsZWRwcmljZWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDsgfVxuLnJldmVhbGVkcHJpY2Vjb250YWluZXIge1xuICB3aWR0aDogOTglO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7IH1cbi5yZXZlYWxlZHByaWNlZm9ybSB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmctbGVmdDogMjdweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxuLmluZGl2aWR1YWwtcHJvZHVjdCB7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7IH1cblxuLm1hcmdpbi10b3AtMTYwIHtcbiAgICBtYXJnaW4tdG9wOiAxNjBweDsgfVxuXG4uZm9udC1zaXplLTFyZW0ge1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtOyB9XG5cbi50ZXh0LWNvbG9yIHtcbiAgICBjb2xvcjogIzFCOEVFMTsgfVxuXG4ucGFkZGluZy1sZWZ0LTI1IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7IH1cblxuI0lwdENvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cblxuLnByaWNlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI0YzRjRGNztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxuXG4jeW91ci1wcmljZSB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7IH1cblxuLmZvbnQtc2l6ZS0xNiB7XG4gICAgZm9udC1zaXplOiAxNnB4OyB9XG5cbi50b3RhbC1wcmljZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cblxuLnBvdW5kLXN5bWJvbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuLmZvbnQtc2l6ZS0zMCB7XG4gICAgZm9udC1zaXplOiAzMHB4OyB9XG5cbi5ibHVlLWNvbG9yIHtcbiAgICBjb2xvcjogIzFCOEVFMTsgfVxuXG4ucG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5mb250LXNpemUtNDUge1xuICAgIGZvbnQtc2l6ZTogNDVweDsgfVxuLmZvbnQtc2l6ZS0xNCB7XG4gICAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5jb2xvci1ncmV5IHtcbiAgICBjb2xvcjogIzZGNkQ2RDsgfVxuXG4ucHJvZHVjdC1jb2xvciB7XG4gICAgY29sb3I6ICMzNDQ1NUE7IH1cblxuLmJvcmRlci1yb3cge1xuICAgIHdpZHRoOiA5OCU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMnB4OyB9XG5cbi5ib3JkZXItcm93IGhyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzdDQUNDOyB9XG5cbi5wYWRkaW5nLWxlZnQtMTUge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDsgfVxuXG4ucGFkZGluZy1sZWZ0LTExIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDExcHg7IH1cblxuLnBhZGRpbmctbGVmdC0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDsgfVxuXG4ucGFkZGluZy1sZWZ0LTcge1xuICAgIHBhZGRpbmctbGVmdDogN3B4OyB9XG5cbi5wYWRkaW5nLWxlZnQtOCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7IH1cblxuLmF0dHJpYnV0ZS1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogOXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIxcHg7XG4gICAgbWFyZ2luLWJ0dG9tOiAzMHB4OyB9XG5cbi5idG4ge1xuICAgIHdpZHRoOiA4OSU7XG4gICAgbWFyZ2luLWxlZnQ6IDlweDsgfVxuXG4ucGFkZGluZy1yaWdodC0zNCB7XG4gICAgcGFkZGluZy1yaWdodDogMzRweDsgfVxuXG4ucGFkZGluZy1sZWZ0LTI2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7IH1cblxuLnBhZGRpbmctMCB7XG4gICAgcGFkZGluZzogMHB4OyB9XG5cbi5wb3NpdGlvbi1yZWxhdGl2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi50b3AtODQge1xuICAgIHRvcDogODRweDsgfVxuXG4udGV4dC1mb3JtYXQge1xuICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm87XG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4uYXR0cmlidXRlLW5hbWVzIHtcbiAgICBjb2xvcjogIzM0NDU1QTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4uZm9udC13ZWlnaHQtNjAwIHtcbiAgICBmb250LXdlaWdodDogNjAwOyB9XG5cbi5wcmljZS1wZXItcHJvZHVjdCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDsgfVxuXG5zcGFuIHtcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvOyB9XG5cbi5kYW5nZXIge1xuICAgIGNvbG9yOiByZWQ7IH1cblxuI2Jlc3Bva2UtdGV4dCB7XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4jYmVzcG9rZS1JbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfSB9XG4uYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi5mb3J3YXJkLWFycm93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdG9wOiAzcHg7IH1cblxuXG4ucHJvZC10eXBlLWJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5idXR0b24tZGlzYWJsZWQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogI0M3Q0FDQztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybztcbiAgICBmb250LXNpemU6IDE0cHg7IH1cbi5zYXZlLWZvci1sYXRlciB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm87XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIGNvbG9yOiAjMDA3YmZmOyB9XG4uc2F2ZS1mb3ItbGF0ZXItaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgdG9wOiA2cHg7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfSB9XG4uZHJhZnQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGVuZDsgfVxuLm5vLXBhZGRpbmcge1xuICAgcGFkZGluZzogMDtcbiAgIG1hcmdpbjogMDtcbiAgIHRleHQtYWxpZ246IHN0YXJ0OyB9XG4uZGVtYW5kcy1OZWVkcyB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDRweDtcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvO1xuICAgIGNvbG9yOiAjMDA3YmZmOyB9XG4uZGVtYW5kcy1OZWVkcy1pY29uIHtcbiAgICBjb2xvcjogIzAwN2JmZjsgfVxuIl19 */"

/***/ }),

/***/ "./app/insurance-products/components/insurance-attributes/insurance-attributes.component.ts":
/*!**************************************************************************************************!*\
  !*** ./app/insurance-products/components/insurance-attributes/insurance-attributes.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: InsuranceAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceAttributesComponent", function() { return InsuranceAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _insurance_products_services_insurances_dataservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../insurance-products/services/insurances.dataservice */ "./app/insurance-products/services/insurances.dataservice.ts");
/* harmony import */ var _insurance_products_services_insurance_products_dataservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../insurance-products/services/insurance-products.dataservice */ "./app/insurance-products/services/insurance-products.dataservice.ts");
/* harmony import */ var _classes_PriceAttribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../classes/PriceAttribute */ "./app/classes/PriceAttribute.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InsuranceAttributesComponent = /** @class */ (function () {
    function InsuranceAttributesComponent(_InsuranceService, _ProductService) {
        this._InsuranceService = _InsuranceService;
        this._ProductService = _ProductService;
        this.PriceAttributes = [];
        this.Products = [];
        this.TotalPrice = 0;
        this.TotalTax = 0;
        this.continueInsuranceClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backToProductsClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveForLaterClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showBespokeInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendFoundPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.removeProductFromList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    InsuranceAttributesComponent.prototype.ngOnChanges = function (_changes) {
        // Calls ngOnInit once after this is called
        if (this.enteredLoi === '' || this.enteredLoi === undefined) {
            this.enteredLoi = this._InsuranceService.loi;
        }
        if (this.TotalPrice === 0) {
            this.TotalPrice = this._InsuranceService.CurrentPrice;
        }
        if (this.TotalTax === 0) {
            this.TotalTax = this._InsuranceService.CurrentTaxTotal;
        }
        if (this.PriceAttributes.length === 0) {
            this.PriceAttributes = this._InsuranceService.PriceAttributes;
        }
        if (this.Products.length === 0) {
            this.Products = this._InsuranceService.Products;
        }
    };
    InsuranceAttributesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._InsuranceService.PriceAttributeState
            .subscribe(function (state) {
            _this.PriceAttributes = state;
        });
        this.productSubscription = this._InsuranceService.ProductState
            .subscribe(function (state) {
            _this.Products = state;
        });
        this.loiSubscription = this._InsuranceService.loiState
            .subscribe(function (state) {
            _this.enteredLoi = state;
        });
        this.totalPriceSubscription = this._InsuranceService.CurrentPriceState
            .subscribe(function (state) {
            _this.TotalPrice = state;
        });
        this._InsuranceService.isInsuranceState.subscribe(function (x) {
            _this.showPlaceOrder = x;
        });
        this.taxSubscription = this._InsuranceService.CurrentTaxState
            .subscribe(function (state) {
            _this.TotalTax = state;
        });
        // Check if any products are currently Bespoke
        this.productListContainBespokeAndPrice = this.CheckForBespokeProductsAndPriceProducts(this.Products);
        this.productListBespokeOnly = this.CheckForBespokeOnly(this.Products);
    };
    InsuranceAttributesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.productSubscription.unsubscribe();
        this.loiSubscription.unsubscribe();
        this.totalPriceSubscription.unsubscribe();
    };
    InsuranceAttributesComponent.prototype.toggleIsRightOrDown = function () {
        if (!this.isRightOrDown) {
            this.isRightOrDown = true;
        }
        else {
            this.isRightOrDown = false;
        }
    };
    InsuranceAttributesComponent.prototype.CheckForBespokeProductsAndPriceProducts = function (products) {
        var bespoke = products.find(function (x) { return x.isBespokeProduct; });
        var anyPrices = products.find(function (x) { return x.Price !== 0 || x.FromPrice !== 0; });
        if (bespoke && anyPrices) {
            return true;
        }
        return false;
    };
    InsuranceAttributesComponent.prototype.CheckForBespokeOnly = function (products) {
        var bespoke = products.find(function (x) { return x.isBespokeProduct; });
        var anyPrices = products.find(function (x) { return x.Price !== 0 || x.FromPrice !== 0; });
        if (bespoke && !anyPrices) {
            return true;
        }
        return false;
    };
    /// Change event
    InsuranceAttributesComponent.prototype.GetPriceFromAttribute = function (attribute, value) {
        var product = this.GetProductFromAttribute(attribute);
        var loiBracket = product.loiBracketValue;
        if (loiBracket === undefined) {
            this.ProductIsBespoke(product, attribute, value);
        }
        else {
            // Getting Individual product price based off attribute
            var price = this.FindPriceFromAttributes(product, loiBracket, attribute, value);
            // Subtract existing ipt
            this.TotalTax -= this._InsuranceService.getProductTax(product.id);
            // Santity Check - tax and price
            if (this.TotalPrice < 0) {
                this.TotalPrice = 0;
            }
            if (this.TotalTax < 0) {
                this.TotalTax = 0;
            }
            // Getting the new IPT based of the attr price
            var newIpt = this.FindIptFromAttrPrice(price, product.prices, product.id);
            product.Price = price;
            // Adding new found price from attributes with minimum product prices
            this.TotalPrice = this.TotalProductPricesAndAttributePrice(price, attribute, product);
            // Adding new found Ipt
            this.TotalTax += newIpt;
            this.sendFoundPrice.emit(this.TotalPrice);
        }
    };
    InsuranceAttributesComponent.prototype.FindIptFromAttrPrice = function (price, prices, id) {
        var newIpt = 0;
        var foundPrice = prices.find(function (x) { return x.price === price; });
        if (foundPrice !== undefined) {
            newIpt = foundPrice.ipt;
            this._InsuranceService.editIptPerProduct(newIpt, id);
            return newIpt;
        }
        return newIpt;
    };
    InsuranceAttributesComponent.prototype.FindPriceFromAttributes = function (product, loiBracket, attribute, value) {
        var loi = loiBracket.toString();
        var productPriceAttributes = this.PriceAttributes.filter(function (x) { return x.productId === product.id; });
        var formAttributesPerProduct = new Array();
        productPriceAttributes.forEach(function (formAttr) {
            if (formAttr.name === attribute.name) {
                formAttr.value = value;
            }
            else if (formAttr.value === undefined) { // this logic could be flawed
                formAttr.value = formAttr.options[0].value;
            }
            formAttributesPerProduct.push(formAttr);
        });
        if (formAttributesPerProduct.find(function (x) { return x.name !== 'LIMITOFINDEMNITY'; })) {
            var loiAttr = new _classes_PriceAttribute__WEBPACK_IMPORTED_MODULE_3__["PriceAttribute"]();
            loiAttr.name = 'LIMITOFINDEMNITY';
            loiAttr.value = loiBracket.toString();
            loiAttr.productId = product.id;
            formAttributesPerProduct.push(loiAttr);
        }
        var totalPrice = 0;
        product.prices.forEach(function (p, index) {
            var i = index;
            var price = p.price;
            var matchingAttributes = [];
            var foundPrice = false;
            var attributecount = p.attributes.length;
            p.attributes.forEach(function (attr) {
                if (!foundPrice) {
                    formAttributesPerProduct.forEach(function (formAttr) {
                        if (attr.name === formAttr.name && attr.value === formAttr.value) {
                            matchingAttributes.push(formAttr);
                            if (matchingAttributes.length === attributecount) {
                                foundPrice = true;
                                totalPrice = price;
                            }
                        }
                    });
                }
            });
        });
        return totalPrice;
    };
    InsuranceAttributesComponent.prototype.GetProductFromAttribute = function (attr) {
        return this.Products.find(function (x) { return x.id === attr.productId; });
    };
    InsuranceAttributesComponent.prototype.ProductIsBespoke = function (_product, attributeChanged, value) {
    };
    InsuranceAttributesComponent.prototype.TotalProductPricesAndAttributePrice = function (attributePrice, productAttribute, product) {
        var newTotal = attributePrice;
        var productsExludedPassedIn = this.Products.filter(function (x) { return x !== product; });
        productsExludedPassedIn.forEach(function (p) {
            newTotal += p.FromPrice;
        });
        newTotal = newTotal;
        return newTotal;
    };
    InsuranceAttributesComponent.prototype.deleteThisProduct = function (pIndex, product) {
        this.RemoveProductFromList(product);
    };
    InsuranceAttributesComponent.prototype.RemoveProductFromList = function (product) {
        this.removeProductFromList.emit(product);
    };
    InsuranceAttributesComponent.prototype.bespokeAlert = function () {
        this.showBespokeInfo.emit(true);
    };
    InsuranceAttributesComponent.prototype.continueWithInsurance = function () {
        this.continueInsuranceClicked.emit(true);
    };
    InsuranceAttributesComponent.prototype.backToproducts = function () {
        this.backToProductsClicked.emit(false);
    };
    InsuranceAttributesComponent.prototype.saveForLaterAlert = function () {
        this.saveForLaterClicked.emit(true);
    };
    InsuranceAttributesComponent.prototype.getSampleFiles = function (products) {
        var self = this;
        var url = 'https://dev.clsl.co.uk/Content/PDFs/SamplePolicies/';
        products.forEach(function (product) {
            window.open(url + product.samplefilename);
        });
    };
    InsuranceAttributesComponent.prototype.getDemandsAndNeeds = function (products) {
        var self = this;
        products.forEach(function (product) {
            self._ProductService.GetDemandsAndNeedsFile(product.demandsAndNeeds[0].demandId);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InsuranceAttributesComponent.prototype, "continueInsuranceClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InsuranceAttributesComponent.prototype, "backToProductsClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InsuranceAttributesComponent.prototype, "saveForLaterClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InsuranceAttributesComponent.prototype, "showBespokeInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InsuranceAttributesComponent.prototype, "sendFoundPrice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InsuranceAttributesComponent.prototype, "removeProductFromList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InsuranceAttributesComponent.prototype, "isProductSelected", void 0);
    InsuranceAttributesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insurance-pricing',
            template: __webpack_require__(/*! ./insurance-attributes.component.html */ "./app/insurance-products/components/insurance-attributes/insurance-attributes.component.html"),
            styles: [__webpack_require__(/*! ./insurance-attributes.component.sass */ "./app/insurance-products/components/insurance-attributes/insurance-attributes.component.sass")]
        }),
        __metadata("design:paramtypes", [_insurance_products_services_insurances_dataservice__WEBPACK_IMPORTED_MODULE_1__["InsurancesService"], _insurance_products_services_insurance_products_dataservice__WEBPACK_IMPORTED_MODULE_2__["InsuranceProductDataService"]])
    ], InsuranceAttributesComponent);
    return InsuranceAttributesComponent;
}());



/***/ }),

/***/ "./app/insurance-products/components/policy-detail/policy-detail.component.html":
/*!**************************************************************************************!*\
  !*** ./app/insurance-products/components/policy-detail/policy-detail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div style=\"text-align: center;\">\n              <div class=\"title\">\n                  <h2 style=\"text-align: center;\" class=\"title-page\">New Insurance Case</h2>\n                </div>\n            <div class=\"greyline\">\n            </div>\n          </div>\n        </div>\n      </div>    \n\n      <div class=\"row\" style=\"margin-top:34px\">\n          <div class=\"col-sm-3\"></div>\n          <div class=\"col-sm-6 center\">\n            <div class=\"md-form\" id=\"loi-container\">\n              <div class=\"float-left\">\n                <label for=\"loi\" id=\"loi-label\" class=\"\">Limit of Indemnity&nbsp;</label>\n              </div>\n              <div id=\"loi-input-container\">\n                <input [(ngModel)]=\"amount\" mdbInput placeholder=\"e.g £250,000\" type=\"text\" id=\"loi\" class=\"form-control\">\n              </div>\n              <div style=\"text-align: right;\">\n                <span *ngIf=\"loiValidation\" id=\"loi-validation\">You must enter a value.</span>\n                <span style=\"max-width:190px;\" *ngIf=\"NoProductsMessage\" class=\"warning\">{{NoProductsMessage}}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-3\"></div>\n        </div> \n        \n        \n        <div class=\"row\" style=\"margin-top:34px\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-9 panel-container group-container\">\n              <div class=\"col-sm-6 padding-0\">\n                <span class=\"panel-title\">Policy Detail</span>\n              </div>\n              <div class=\"col-sm-6 padding-0 plus-container\">\n                <a data-toggle=\"collapse\" href=\"#resi-products\" role=\"button\" aria-expanded=\"false\" aria-controls=\"resi-products\">\n                  <i class=\"material-icons plus-icon\">clear</i>\n                </a>\n              </div>\n            </div>\n            <div class=\"col-sm-1\"></div>\n        </div>      \n        \n                             \n          <div class=\"row\">\n              <div class=\"col-sm-2\"></div>\n              <div class=\"col-sm-9 panel-container  residential-products-container collapse multi-collapse row padding-0 background-none\" id=\"resi-products\">\n                <div class=\"col-sm-12\">\n                  <div class=\"col-sm-12 row padding-0 margin-0\" id=\"residential-products\">\n  \n                      <form class=\"needs-validation\" style=\"width:55%;\">\n                          <div class=\"form-group row\">\n                            <label for=\"txtClientReferance\" class=\"col-sm-3 col-form-label\" style=\"font-family:Source Sans Pro, SemiBold; font-size:15px; font-weight:600;\">Client Reference *</label>\n                            <div class=\"col-sm-9\">\n                              <input type=\"text\" class=\"form-control\" id=\"txtClientReferance\" placeholder=\"\" style=\"width:240px;\">\n                            </div>\n                          </div>\n                          <div class=\"form-group row\">\n                              <label for=\"txtAddressPostCode\" class=\"col-sm-3 col-form-label\" style=\"font-family:Source Sans Pro, SemiBold; font-size:15px; font-weight:600;\">Address / Postcode</label>\n                              <div class=\"col-sm-9\">                                \n                                <div class=\"input-group md-form form-sm form-2 pl-0 search-input\">\n                                    <input id=\"txtAddressPostCode\" class=\"form-control my-0 py-1 red-border\" type=\"text\" placeholder=\"\" style=\"width:190px;\">\n                                    <div class=\"input-group-append\">\n                                      <span class=\"input-group-text red lighten-3 search-span\" id=\"basic-text1\"><i\n                                          style=\"color: #007bff;\" class=\"material-icons link\">search</i></span>\n                                    </div>\n                                </div>                                \n                              </div>\n                          </div>  \n                          \n                          <div class=\"form-group row\">\n                              <label for=\"exampleFormControlTextarea1\" class=\"col-sm-3 col-form-label\" style=\"font-family:Source Sans Pro, SemiBold; font-size:15px; font-weight:600;\">Insured Name(s) *</label>\n                              <div class=\"col-sm-9\">\n                                <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" style=\"width:400px;\"></textarea>\n                            </div>\n                          </div>  \n                          \n                          <div class=\"form-group row\">\n                              <label for=\"txtAddressPostCode\" class=\"col-sm-3 col-form-label\" style=\"font-family:Source Sans Pro, SemiBold; font-size:15px; font-weight:600;\">Another field *</label>\n                              <div class=\"col-sm-9\">\n                                <input type=\"text\" class=\"form-control\" id=\"txtAddressPostCode\" placeholder=\"\" style=\"width:400px;\">\n                              </div>\n                          </div>      \n                          \n                          <div class=\"form-group row\">\n                              <label for=\"txtAddressPostCode\" class=\"col-sm-3 col-form-label\" style=\"font-family:Source Sans Pro, SemiBold; font-size:15px; font-weight:600;\">Inception Date</label>\n                              <div class=\"col-sm-9\">\n                                \n                                <div class=\"input-group md-form form-sm form-2 pl-0 search-input\">\n                                    <input id=\"txtAddressPostCode\" class=\"form-control my-0 py-1 red-border\" type=\"text\" placeholder=\"\" style=\"width:190px;\">\n                                    <div class=\"input-group-append\">\n                                      <span class=\"input-group-text red lighten-3 search-span\" id=\"basic-text1\"><i\n                                          style=\"color: #007bff;\" class=\"material-icons link\">date_range</i></span>\n                                    </div>\n                                </div>                                \n\n                              </div>\n                          </div>                            \n\n                      </form>                    \n                    \n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-1\"></div>\n            </div>           \n\n  \n\n"

/***/ }),

/***/ "./app/insurance-products/components/policy-detail/policy-detail.component.sass":
/*!**************************************************************************************!*\
  !*** ./app/insurance-products/components/policy-detail/policy-detail.component.sass ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reset {\n  color: #007bff;\n  margin-left: -51px;\n  z-index: 100;\n  height: 38px;\n  outline: none;\n  box-shadow: none; }\n\n.search-span {\n  background-color: white; }\n\n.search-input {\n  bottom: 5px; }\n\n.nopadding {\n  padding: 0 !important;\n  margin: 0 !important;\n  text-align: start; }\n\n.product-panel {\n  background-color: grey;\n  height: 40px; }\n\n.margin-bottom-20 {\n  margin-bottom: 20px; }\n\n#loi {\n  height: 40px;\n  border-color: #1B8EE1;\n  color: #272727;\n  font-family: Source Sans Pro;\n  border-radius: 4px;\n  border-width: 2px; }\n\n#searchResInput {\n  outline: none;\n  box-shadow: none; }\n\n#searchComInput {\n  outline: none;\n  box-shadow: none; }\n\n#loi:focus {\n  box-shadow: none; }\n\n#loi-label {\n  font-size: 22px;\n  font-weight: 600;\n  font-family: Source Sans Pro, SemiBold; }\n\n#loi-container {\n  display: inline-block;\n  position: relative;\n  right: 54px; }\n\n#loi-input-container {\n  margin-left: 18px;\n  float: right; }\n\n.title {\n  padding-top: 15px;\n  margin-top: 25px;\n  margin-bottom: 0px; }\n\n#underline-container {\n  margin-bottom: 29px; }\n\n#underline {\n  height: 1px;\n  background: #c7cacc;\n  width: 111px;\n  margin: 0 auto; }\n\n.cancel {\n  float: right;\n  width: 100px;\n  font-size: 14px;\n  margin-top: 42px;\n  margin-right: 53px; }\n\n.title-page {\n  font-weight: 600;\n  font-family: Source Sans Pro, SemiBold;\n  font-size: 33px; }\n\n.padding-0 {\n  padding: 0px; }\n\n.group-container {\n  background-color: #F3F4F7;\n  border-radius: 4px;\n  margin: 0 auto;\n  height: 60px; }\n\n.group-container-v1 {\n  background-color: #F3F4F7;\n  border-radius: 4px;\n  margin: 0 auto;\n  height: 90px; }\n\n.margin-top-20 {\n  margin-top: 20px; }\n\n.panel-title {\n  font-size: 22px;\n  font-family: Source Sans Pro, SemiBold;\n  color: #272727;\n  font-weight: 600; }\n\n.panel-container {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 13px;\n  display: flex; }\n\n.margin-top-15 {\n  margin-top: 15px; }\n\n.plus-container {\n  text-align: right; }\n\n.plus-icon {\n  color: #1B8EE1;\n  font-size: 18px;\n  font-size: 33px; }\n\n.plus-icon:hover {\n    cursor: pointer; }\n\n.product-row {\n  height: auto;\n  font-size: 15px;\n  font-weight: 500;\n  text-align: left;\n  color: #34455A;\n  font-family: Source Sans Pro;\n  padding-top: 22px;\n  padding-bottom: 19px; }\n\n.product-row:nth-child(4n), .product-row:nth-child(4n-1) {\n  background: #F2F3F6; }\n\n.product-row:nth-child(4n-2), .product-row:nth-child(4n-3) {\n  background: #FFFFFF; }\n\n.margin-0 {\n  margin: 0px; }\n\n.border-blue {\n  border: 1px solid #1B8EE1; }\n\n.change-scale {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2); }\n\n.background-none {\n  background: none; }\n\n#resi-products {\n  border-radius: 4px;\n  margin: 0 auto;\n  height: auto; }\n\n#commercial-products {\n  border-radius: 4px;\n  margin: 0 auto;\n  height: auto; }\n\n#loi-validation {\n  font-size: 14px;\n  color: red; }\n\n.warning {\n  font-size: 14px;\n  color: red; }\n\n.show {\n  display: block; }\n\n.hide {\n  display: none; }\n\n.uk-checkbox:hover {\n  cursor: pointer; }\n\n.center {\n  text-align: center;\n  margin: 0 auto; }\n\n.float-left {\n  float: left; }\n\n.height-100 {\n  height: 100%; }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n.icon-container {\n  width: 50px;\n  position: relative;\n  left: 5px;\n  display: inline-block; }\n\n.icon-container i {\n  width: 25px; }\n\n.align-top {\n  vertical-align: top; }\n\n.position-relative {\n  position: relative; }\n\n.top-84 {\n  top: 84px; }\n\n.position-left-36 {\n  position: relative;\n  left: 36px; }\n\n.top-135 {\n  top: 135px; }\n\n.top-143 {\n  top: 143px; }\n\n.show-product-description {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n.show-bespoke-alert {\n  font-family: Source Sans Pro;\n  text-align: left;\n  color: #6F6D6D;\n  font-size: 15px;\n  width: 728px;\n  height: 176px;\n  position: absolute;\n  z-index: 999999;\n  top: 40%;\n  left: 33%;\n  background-color: #FFFFFF; }\n\n.clear-icon-bespoke-alert {\n  padding: 10px;\n  float: right; }\n\n.bespoke-alert-title {\n  margin-top: 29px;\n  height: 28px;\n  font-family: Source Sans Pro;\n  font-weight: 600;\n  font-size: 22px;\n  text-align: left;\n  color: #272727; }\n\n.greyline {\n  margin: 0 auto;\n  height: 0px;\n  width: 111px;\n  border-bottom: 1px solid #C7CACC; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdXJhbmNlLXByb2R1Y3RzL2NvbXBvbmVudHMvcG9saWN5LWRldGFpbC9DOlxcU291cmNlXFxDTFNHU1xcRGV2XFxDTFMuV2ViU2l0ZVxcQ0xTLldlYlNpdGVcXE9yZGVyaW5nLU5ldy9zcmNcXGFwcFxcaW5zdXJhbmNlLXByb2R1Y3RzXFxjb21wb25lbnRzXFxwb2xpY3ktZGV0YWlsXFxwb2xpY3ktZGV0YWlsLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBYztFQUNkLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osYUFBWTtFQUNaLGNBQWE7RUFDYixpQkFBZ0IsRUFBRzs7QUFDdkI7RUFDRyx3QkFBdUIsRUFBRzs7QUFDN0I7RUFDRyxZQUFXLEVBQUc7O0FBQ2pCO0VBQ0csc0JBQXFCO0VBQ3JCLHFCQUFvQjtFQUNwQixrQkFBaUIsRUFBRzs7QUFHdkI7RUFDSSx1QkFBc0I7RUFDdEIsYUFBWSxFQUFHOztBQUVuQjtFQUNJLG9CQUFtQixFQUFHOztBQUUxQjtFQUNJLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsZUFBYztFQUNkLDZCQUE0QjtFQUM1QixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQUc7O0FBQ3hCO0VBQ0ssY0FBYTtFQUNiLGlCQUFnQixFQUFHOztBQUN4QjtFQUNLLGNBQWE7RUFDYixpQkFBZ0IsRUFBRzs7QUFDeEI7RUFDSSxpQkFBZ0IsRUFBRzs7QUFFdkI7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQix1Q0FBc0MsRUFBRzs7QUFFN0M7RUFDSSxzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFlBQVcsRUFBRzs7QUFFbEI7RUFDSSxrQkFBaUI7RUFDakIsYUFBWSxFQUFHOztBQUVuQjtFQUNJLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQUc7O0FBRXpCO0VBQ0ksb0JBQW1CLEVBQUc7O0FBRTFCO0VBQ0ksWUFBVztFQUNYLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osZUFBYyxFQUFHOztBQUVyQjtFQUNJLGFBQVk7RUFDWixhQUFZO0VBQ1osZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQUc7O0FBRXpCO0VBQ0ksaUJBQWdCO0VBQ2hCLHVDQUFzQztFQUN0QyxnQkFBZSxFQUFHOztBQUV0QjtFQUNJLGFBQVksRUFBRzs7QUFFbkI7RUFDSSwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxhQUFZLEVBQUc7O0FBRW5CO0VBQ0ksMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsYUFBWSxFQUFHOztBQUVuQjtFQUNJLGlCQUFnQixFQUFHOztBQUV2QjtFQUNJLGdCQUFlO0VBQ2YsdUNBQXNDO0VBQ3RDLGVBQWM7RUFDZCxpQkFBZ0IsRUFBRzs7QUFFdkI7RUFDSSxrQkFBaUI7RUFDakIscUJBQW9CO0VBQ3BCLG1CQUFrQjtFQUNsQixjQUFhLEVBQUc7O0FBRXBCO0VBQ0ksaUJBQWdCLEVBQUc7O0FBRXZCO0VBQ0ksa0JBQWlCLEVBQUc7O0FBRXhCO0VBQ0ksZUFBYztFQUNkLGdCQUFlO0VBQ2YsZ0JBQWUsRUFFUzs7QUFMNUI7SUFLUSxnQkFBZSxFQUFHOztBQUUxQjtFQUNJLGFBQVk7RUFDWixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLDZCQUE0QjtFQUM1QixrQkFBaUI7RUFDakIscUJBQW9CLEVBQUc7O0FBRzNCO0VBQ0ksb0JBQW1CLEVBQUc7O0FBRTFCO0VBQ0ksb0JBQW1CLEVBQUc7O0FBRTFCO0VBQ0ksWUFBVyxFQUFHOztBQUVsQjtFQUNJLDBCQUF5QixFQUFHOztBQUVoQztFQUNJLDhCQUFxQjtVQUFyQixzQkFBcUIsRUFBRzs7QUFFNUI7RUFDSSxpQkFBZ0IsRUFBRzs7QUFFdkI7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxnQkFBZTtFQUNmLFdBQVUsRUFBRzs7QUFFakI7RUFDSSxnQkFBZTtFQUNmLFdBQVUsRUFBRzs7QUFFakI7RUFDSSxlQUFjLEVBQUc7O0FBRXJCO0VBQ0ksY0FBYSxFQUFHOztBQUVwQjtFQUNJLGdCQUFlLEVBQUc7O0FBRXRCO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWMsRUFBRzs7QUFFckI7RUFDSSxZQUFXLEVBQUc7O0FBRWxCO0VBQ0ksYUFBWSxFQUFHOztBQUVuQjtFQUNJLGlCQUFnQixFQUFHOztBQUV2QjtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsVUFBUztFQUNULHNCQUFxQixFQUFHOztBQUU1QjtFQUNJLFlBQVcsRUFBRzs7QUFFbEI7RUFDSSxvQkFBbUIsRUFBRzs7QUFFMUI7RUFDSSxtQkFBa0IsRUFBRzs7QUFFekI7RUFDSSxVQUFTLEVBQUc7O0FBRWhCO0VBQ0ksbUJBQWtCO0VBQ2xCLFdBQVUsRUFBRzs7QUFFakI7RUFDSSxXQUFVLEVBQUc7O0FBRWpCO0VBQ0ksV0FBVSxFQUFHOztBQUVqQjtFQUNJLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFBRzs7QUFFMUI7RUFDSSw2QkFBNEI7RUFDNUIsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGFBQVk7RUFDWixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsU0FBUTtFQUNSLFVBQVM7RUFDVCwwQkFBeUIsRUFBRzs7QUFFaEM7RUFDSSxjQUFhO0VBQ2IsYUFBWSxFQUFHOztBQUduQjtFQUNJLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixlQUFjLEVBQUc7O0FBR3JCO0VBQ0ksZUFBYztFQUNkLFlBQVc7RUFDWCxhQUFZO0VBQ1osaUNBQWdDLEVBQUciLCJmaWxlIjoic3JjL2FwcC9pbnN1cmFuY2UtcHJvZHVjdHMvY29tcG9uZW50cy9wb2xpY3ktZGV0YWlsL3BvbGljeS1kZXRhaWwuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yZXNldCB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgbWFyZ2luLWxlZnQ6IC01MXB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lOyB9XG4uc2VhcmNoLXNwYW4ge1xuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cbi5zZWFyY2gtaW5wdXQge1xuICAgYm90dG9tOiA1cHg7IH1cbi5ub3BhZGRpbmcge1xuICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICB0ZXh0LWFsaWduOiBzdGFydDsgfVxuXG5cbi5wcm9kdWN0LXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGhlaWdodDogNDBweDsgfVxuXG4ubWFyZ2luLWJvdHRvbS0yMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4jbG9pIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjMUI4RUUxO1xuICAgIGNvbG9yOiAjMjcyNzI3O1xuICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm87XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci13aWR0aDogMnB4OyB9XG4jc2VhcmNoUmVzSW5wdXQge1xuICAgICBvdXRsaW5lOiBub25lO1xuICAgICBib3gtc2hhZG93OiBub25lOyB9XG4jc2VhcmNoQ29tSW5wdXQge1xuICAgICBvdXRsaW5lOiBub25lO1xuICAgICBib3gtc2hhZG93OiBub25lOyB9XG4jbG9pOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lOyB9XG5cbiNsb2ktbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm8sIFNlbWlCb2xkOyB9XG5cbiNsb2ktY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiA1NHB4OyB9XG5cbiNsb2ktaW5wdXQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICBmbG9hdDogcmlnaHQ7IH1cblxuLnRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDsgfVxuXG4jdW5kZXJsaW5lLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjlweDsgfVxuXG4jdW5kZXJsaW5lIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjYzdjYWNjO1xuICAgIHdpZHRoOiAxMTFweDtcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxuXG4uY2FuY2VsIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiA0MnB4O1xuICAgIG1hcmdpbi1yaWdodDogNTNweDsgfVxuXG4udGl0bGUtcGFnZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvLCBTZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDMzcHg7IH1cblxuLnBhZGRpbmctMCB7XG4gICAgcGFkZGluZzogMHB4OyB9XG5cbi5ncm91cC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y0Rjc7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogNjBweDsgfVxuXG4uZ3JvdXAtY29udGFpbmVyLXYxIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEY3O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDkwcHg7IH1cblxuLm1hcmdpbi10b3AtMjAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLnBhbmVsLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybywgU2VtaUJvbGQ7XG4gICAgY29sb3I6ICMyNzI3Mjc7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4ucGFuZWwtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gICAgZGlzcGxheTogZmxleDsgfVxuXG4ubWFyZ2luLXRvcC0xNSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDsgfVxuXG4ucGx1cy1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi5wbHVzLWljb24ge1xuICAgIGNvbG9yOiAjMUI4RUUxO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXNpemU6IDMzcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfSB9XG5cbi5wcm9kdWN0LXJvdyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzNDQ1NUE7XG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybztcbiAgICBwYWRkaW5nLXRvcDogMjJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTlweDsgfVxuXG5cbi5wcm9kdWN0LXJvdzpudGgtY2hpbGQoNG4pLCAucHJvZHVjdC1yb3c6bnRoLWNoaWxkKDRuLTEpIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjJGM0Y2OyB9XG5cbi5wcm9kdWN0LXJvdzpudGgtY2hpbGQoNG4tMiksIC5wcm9kdWN0LXJvdzpudGgtY2hpbGQoNG4tMykge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7IH1cblxuLm1hcmdpbi0wIHtcbiAgICBtYXJnaW46IDBweDsgfVxuXG4uYm9yZGVyLWJsdWUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQjhFRTE7IH1cblxuLmNoYW5nZS1zY2FsZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XG5cbi5iYWNrZ3JvdW5kLW5vbmUge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7IH1cblxuI3Jlc2ktcHJvZHVjdHMge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87IH1cblxuI2NvbW1lcmNpYWwtcHJvZHVjdHMge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87IH1cblxuI2xvaS12YWxpZGF0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJlZDsgfVxuXG4ud2FybmluZyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiByZWQ7IH1cblxuLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG5cbi51ay1jaGVja2JveDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxuXG4uZmxvYXQtbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQ7IH1cblxuLmhlaWdodC0xMDAge1xuICAgIGhlaWdodDogMTAwJTsgfVxuXG4ub3ZlcmZsb3ctaGlkZGVuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLmljb24tY29udGFpbmVyIGkge1xuICAgIHdpZHRoOiAyNXB4OyB9XG5cbi5hbGlnbi10b3Age1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IH1cblxuLnBvc2l0aW9uLXJlbGF0aXZlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnRvcC04NCB7XG4gICAgdG9wOiA4NHB4OyB9XG5cbi5wb3NpdGlvbi1sZWZ0LTM2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMzZweDsgfVxuXG4udG9wLTEzNSB7XG4gICAgdG9wOiAxMzVweDsgfVxuXG4udG9wLTE0MyB7XG4gICAgdG9wOiAxNDNweDsgfVxuXG4uc2hvdy1wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7IH1cblxuLnNob3ctYmVzcG9rZS1hbGVydCB7XG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjNkY2RDZEO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB3aWR0aDogNzI4cHg7XG4gICAgaGVpZ2h0OiAxNzZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDMzJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyB9XG5cbi5jbGVhci1pY29uLWJlc3Bva2UtYWxlcnQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0OyB9XG5cblxuLmJlc3Bva2UtYWxlcnQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtZmFtaWx5IDogU291cmNlIFNhbnMgUHJvO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMyNzI3Mjc7IH1cblxuXG4uZ3JleWxpbmUge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogMHB4O1xuICAgIHdpZHRoOiAxMTFweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0M3Q0FDQzsgfVxuIl19 */"

/***/ }),

/***/ "./app/insurance-products/components/policy-detail/policy-detail.component.ts":
/*!************************************************************************************!*\
  !*** ./app/insurance-products/components/policy-detail/policy-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: PolicyDetailComponent, defaultPolicyDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyDetailComponent", function() { return PolicyDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPolicyDetailsModel", function() { return defaultPolicyDetailsModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_insurances_dataservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/insurances.dataservice */ "./app/insurance-products/services/insurances.dataservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PolicyDetailComponent = /** @class */ (function () {
    function PolicyDetailComponent(formBuilder, _InsuranceService, _router, currencyPipe) {
        this.formBuilder = formBuilder;
        this._InsuranceService = _InsuranceService;
        this._router = _router;
        this.currencyPipe = currencyPipe;
    }
    PolicyDetailComponent.prototype.ngOnInit = function () {
        this.amount = this.currencyPipe.transform(this._InsuranceService.loi, 'GBP', '£', '1.0');
    };
    PolicyDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policy-detail',
            template: __webpack_require__(/*! ./policy-detail.component.html */ "./app/insurance-products/components/policy-detail/policy-detail.component.html"),
            host: {
                class: 'col-sm-8'
            },
            styles: [__webpack_require__(/*! ./policy-detail.component.sass */ "./app/insurance-products/components/policy-detail/policy-detail.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_insurances_dataservice__WEBPACK_IMPORTED_MODULE_2__["InsurancesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]])
    ], PolicyDetailComponent);
    return PolicyDetailComponent;
}());

var defaultPolicyDetailsModel = {};


/***/ }),

/***/ "./app/insurance-products/components/product-description/product-description.component.html":
/*!**************************************************************************************************!*\
  !*** ./app/insurance-products/components/product-description/product-description.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n  <div class=\"col-sm-12 padding-0\" style=\"display:flex;\">\n      <div class=\"col-md-12\" style=\"color:#707070; font-family: Source Sans Pro, Regular; font-size: 14px;\">\n        {{selectedProduct.description}}\n      </div>\n  </div> \n  <div class=\"col-sm-12 padding-0\" style=\"display:flex;padding-top:10px;\">\n      <div class=\"col-md-1\">\n          <a style=\"color: #1B8EE1;\" href=\"https://dev.clsl.co.uk/Content/PDFs/SamplePolicies/{{selectedProduct.samplefilename}}\" target=\"_blank\">\n            <i class=\"material-icons\">file_download</i>\n          </a>\n      </div>\n      <div class=\"col-md-8\">                            \n          <a (click)=\"GetDemandsAndNeeds(selectedProduct.demandsAndNeeds[0].demandId)\" style=\"color: #1B8EE1; font-size: 16px; font-weight: 600;\n          font-family: Source Sans Pro;\">\n            <span>Demands and Needs Statement</span>\n          </a>                            \n      </div>                        \n </div>"

/***/ }),

/***/ "./app/insurance-products/components/product-description/product-description.component.sass":
/*!**************************************************************************************************!*\
  !*** ./app/insurance-products/components/product-description/product-description.component.sass ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border-blue {\n  border: 1px solid #1B8EE1; }\n\n.change-scale {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2); }\n\n.n-padding {\n  padding: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdXJhbmNlLXByb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1kZXNjcmlwdGlvbi9DOlxcU291cmNlXFxDTFNHU1xcRGV2XFxDTFMuV2ViU2l0ZVxcQ0xTLldlYlNpdGVcXE9yZGVyaW5nLU5ldy9zcmNcXGFwcFxcaW5zdXJhbmNlLXByb2R1Y3RzXFxjb21wb25lbnRzXFxwcm9kdWN0LWRlc2NyaXB0aW9uXFxwcm9kdWN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCLEVBQUc7O0FBRWhDO0VBQ0ksOEJBQXFCO1VBQXJCLHNCQUFxQixFQUFHOztBQUU1QjtFQUNJLGFBQVksRUFBRyIsImZpbGUiOiJzcmMvYXBwL2luc3VyYW5jZS1wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGVzY3JpcHRpb24vcHJvZHVjdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItYmx1ZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFCOEVFMTsgfVxuXG4uY2hhbmdlLXNjYWxlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cblxuLm4tcGFkZGluZyB7XG4gICAgcGFkZGluZzogMXB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./app/insurance-products/components/product-description/product-description.component.ts":
/*!************************************************************************************************!*\
  !*** ./app/insurance-products/components/product-description/product-description.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ProductDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescriptionComponent", function() { return ProductDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_insurance_products_dataservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/insurance-products.dataservice */ "./app/insurance-products/services/insurance-products.dataservice.ts");
/* harmony import */ var src_app_classes_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/Product */ "./app/classes/Product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDescriptionComponent = /** @class */ (function () {
    function ProductDescriptionComponent(productService) {
        this.productService = productService;
    }
    ProductDescriptionComponent.prototype.ngOnInit = function () {
    };
    ProductDescriptionComponent.prototype.GetDemandsAndNeeds = function (demandId) {
        this.productService.GetDemandsAndNeedsFile(demandId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProductDescriptionComponent.prototype, "productIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductDescriptionComponent.prototype, "productType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_classes_Product__WEBPACK_IMPORTED_MODULE_2__["Product"])
    ], ProductDescriptionComponent.prototype, "selectedProduct", void 0);
    ProductDescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-description',
            template: __webpack_require__(/*! ./product-description.component.html */ "./app/insurance-products/components/product-description/product-description.component.html"),
            styles: [__webpack_require__(/*! ./product-description.component.sass */ "./app/insurance-products/components/product-description/product-description.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_insurance_products_dataservice__WEBPACK_IMPORTED_MODULE_1__["InsuranceProductDataService"]])
    ], ProductDescriptionComponent);
    return ProductDescriptionComponent;
}());



/***/ }),

/***/ "./app/insurance-products/components/product-list/product-list.component.html":
/*!************************************************************************************!*\
  !*** ./app/insurance-products/components/product-list/product-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 height-100\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-2 padding-0\">\n      <app-leftsidebar></app-leftsidebar>\n    </div>\n\n    <div *ngIf=\"!this.showPolicyDetail\" class=\"col-sm-8\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4\">\n          <div class=\"title\">\n            <h2 style=\"text-align: center;\" class=\"title-page\">New Insurance Case</h2>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n        </div>\n      </div>\n      <div class=\"row\" id=\"underline-container\">\n        <div class=\"col-sm-5\"></div>\n        <div id=\"underline\">\n        </div>\n        <div class=\"col-sm-5\"></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-3\"></div>\n        <div class=\"col-sm-6 center\">\n          <div class=\"md-form\" id=\"loi-container\">\n            <div class=\"float-left\">\n              <label for=\"loi\" id=\"loi-label\" class=\"\">Limit of Indemnity&nbsp;</label>\n            </div>\n            <div id=\"loi-input-container\">\n              <input (change)=\"transformAmount($event)\" [(ngModel)]=\"amount\" #loibox\n                mdbInput placeholder=\"e.g £250,000\" type=\"text\" id=\"loi\" class=\"form-control\" (keyup)=\"EnteredLoi(loibox.value, loibox)\">\n            </div>\n            <div style=\"text-align: right;\">\n              <span *ngIf=\"loiValidation\" id=\"loi-validation\">You must enter a value.</span>\n              <span style=\"max-width:190px;\" *ngIf=\"NoProductsMessage\" class=\"warning\">{{NoProductsMessage}}</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-3\"></div>\n      </div>\n      <div class=\"row margin-top-20\">\n        <div class=\"col-sm-12\">\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-9 panel-container group-container\">\n              <div class=\"col-sm-6 padding-0\">\n                <span class=\"panel-title\">Residential</span>\n              </div>\n              <div *ngIf=\"!residentialProductDisplay\" class=\"col-sm-6 padding-0 plus-container\">\n                <a data-toggle=\"collapse\" href=\"#resi-products\" role=\"button\" aria-expanded=\"false\"\n                  aria-controls=\"resi-products\" (click)=\"DisplayProducts(true, 'resi')\">\n                  <i class=\"material-icons plus-icon\">add</i>\n                </a>\n              </div>\n              <div *ngIf=\"residentialProductDisplay\" class=\"col-sm-6 padding-0 plus-container\">\n                <div class=\"row\">\n                  <div *ngIf=\"!showSearchBar\" class=\"col-sm-10 padding-0\">\n                    <a (click)=\"showSearch()\" style=\"color: #007bff;\">\n                      <i class=\"material-icons plus-icon\">search</i>\n                    </a>\n                  </div>\n                  <div *ngIf=\"showSearchBar\" class=\"col-sm-10 padding-0\">\n                    <div class=\"input-group md-form form-sm form-2 pl-0 search-input\">\n                      <input id=\"searchResInput\" [formControl]=\"searchProduct\" (keyup)=\"Search($event.target.value)\"\n                        class=\"form-control my-0 py-1 red-border\" type=\"text\" placeholder=\"Policy Name or Description\"\n                        aria-label=\"Search\">\n                      <button (click)=\"showSearch()\" class=\"btn bg-transparent reset\">\n                        <i class=\"material-icons\">\n                          highlight_off\n                        </i>\n                      </button>\n                      <div (click)=\"showSearch()\" class=\"input-group-append\">\n                        <span class=\"input-group-text red lighten-3 search-span\" id=\"basic-text1\"><i\n                            style=\"color: #007bff;\" class=\"material-icons link\">search</i></span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-2\">\n                    <a data-toggle=\"collapse\" href=\"#resi-products\" role=\"button\" aria-expanded=\"false\"\n                      aria-controls=\"resi-products\" (click)=\"DisplayProducts(false, 'resi') ; reset()\">\n                      <i class=\"material-icons plus-icon\">clear</i>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-1\"></div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div *ngIf=\"residentialProductDisplay\"\n              class=\"col-sm-9 panel-container  residential-products-container collapse multi-collapse row padding-0 background-none\"\n              id=\"resi-products\">\n              <div class=\"col-sm-12\">\n                <div class=\"col-sm-12 row padding-0 margin-0\" id=\"residential-products\">\n                  <div *ngFor=\"let p of resiProducts; let i = index\" class=\"col-sm-6 product-row padding-0\"\n                    [ngClass]=\"{'show-product-description': ResProductDescriptionState[i]}\">\n                    <div class=\"col-sm-12 padding-0\" style=\"display:flex;\">\n                      <div class=\"col-md-1\">\n                        <input (change)=\"ProductSelected(p, $event.target.checked)\" [checked]=\"p.checked\"\n                          id=\"product_{{p.id}}_resi\" class=\"uk-checkbox border-blue change-scale\" type=\"checkbox\">\n                      </div>\n                      <div class=\"col-md-9\" *ngIf=\"!ResProductDescriptionState[i]\">\n                        <span class=\"align-top font-weight-600\">{{p.name}}</span>\n                        <div class=\"icon-container\">\n                          <a style=\"color: #1B8EE1;\">\n                            <i class=\"material-icons\"\n                              (click)=\"ShowProductDescription(i, 'residential')\">info_outlined</i>\n                          </a>\n                          <a style=\"color: #1B8EE1;\"\n                            href=\"https://dev.clsl.co.uk/Content/PDFs/SamplePolicies/{{p.samplefilename}}\"\n                            target=\"_blank\">\n                            <i class=\"material-icons\">file_download</i>\n                          </a>\n                        </div>\n                      </div>\n                      <div class=\"col-md-11\" *ngIf=\"ResProductDescriptionState[i]\">\n                        <span class='font-weight-600'>{{p.name}}</span>&nbsp;&nbsp;&nbsp;\n                        <div class=\"icon-container\">\n                          <a style=\"color: #1B8EE1; font-size: large; font-weight: 700;\">\n                            <span (click)=\"onClose(i, 'residential')\">Close</span>\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                    <app-product-description [selectedProduct]=\"p\" [productType]=\"productType\" [productIndex]=\"i\"\n                      *ngIf=\"ResProductDescriptionState[i]\"></app-product-description>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-1\"></div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-9 margin-top-15 panel-container group-container\">\n              <div class=\"col-sm-6 padding-0\">\n                <span class=\"panel-title\">Commercial</span>\n              </div>\n              <div *ngIf=\"!commercialProductDisplay\" class=\"col-sm-6 padding-0 plus-container\">\n                <a data-toggle=\"collapse\" href=\"#commercial-products\" role=\"button\" aria-expanded=\"false\"\n                  aria-controls=\"commercial-products\" (click)=\"DisplayProducts(true, 'commerc')\">\n                  <i class=\"material-icons plus-icon\">add</i>\n                </a>\n              </div>\n              <div *ngIf=\"commercialProductDisplay\" class=\"col-sm-6 padding-0 plus-container\">\n                <div class=\"row\">\n                  <div *ngIf=\"!showSearchBar\" class=\"col-sm-10 padding-0\">\n                    <a (click)=\"showSearch()\" style=\"color: #007bff;\">\n                      <i class=\"material-icons plus-icon\">search</i>\n                    </a>\n                  </div>\n                  <div *ngIf=\"showSearchBar\" class=\"col-sm-10 padding-0\">\n                    <div class=\"input-group md-form form-sm form-2 pl-0 search-input\">\n                      <input id=\"searchResInput\" [formControl]=\"searchProduct\" (keyup)=\"Search($event.target.value)\"\n                        class=\"form-control my-0 py-1 red-border\" type=\"text\" placeholder=\"Policy Name or Description\"\n                        aria-label=\"Search\">\n                      <button (click)=\"showSearch()\" class=\"btn bg-transparent reset\">\n                        <i class=\"material-icons\">\n                          highlight_off\n                        </i>\n                      </button>\n                      <div (click)=\"showSearch()\" class=\"input-group-append\">\n                        <span class=\"input-group-text red lighten-3 search-span\" id=\"basic-text1\"><i\n                            style=\"color: #007bff;\" class=\"material-icons link\">search</i></span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-2 nopadding\">\n                    <a data-toggle=\"collapse\" class=\"position-left-36\" href=\"#resi-products\" role=\"button\"\n                      aria-expanded=\"false\" aria-controls=\"resi-products\"\n                      (click)=\"DisplayProducts(false, 'commerc') ; reset()\">\n                      <i class=\"material-icons plus-icon\">clear</i>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-1\"></div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-2\"></div>\n            <div *ngIf=\"commercialProductDisplay\"\n              class=\"col-sm-9 panel-container  residential-products-container collapse multi-collapse row padding-0 background-none\"\n              id=\"commercial-products\">\n              <div class=\"col-sm-12\">\n                <div class=\"col-sm-12 row padding-0 margin-0\" id=\"commerc-products\">\n                  <div *ngFor=\"let p of commercialProducts; let i = index\" class=\"col-sm-6 product-row padding-0\"\n                    [ngClass]=\"{'show-product-description': ComProductDescriptionState[i]}\">\n                    <div class=\"col-sm-12 padding-0\" style=\"display:flex;\">\n                      <div class=\"col-md-1\">\n                        <input (change)=\"ProductSelected(p, $event.target.checked)\" id=\"product_{{p.id}}_commerc\"\n                          class=\"uk-checkbox border-blue change-scale\" type=\"checkbox\">\n                      </div>\n\n                      <div style=\"position: relative; bottom: 2px;\" class=\"col-md-11\"\n                        *ngIf=\"!ComProductDescriptionState[i]\">\n                        <span class=\"font-weight-600\">{{p.name}}</span>\n                        <div class=\"icon-container\">\n                          <a style=\"color: #1B8EE1;\">\n                            <i class=\"material-icons\"\n                              (click)=\"ShowProductDescription(i, 'commercial')\">info_outlined</i>\n                          </a>\n                          <a style=\"color: #1B8EE1;\"\n                            href=\"https://dev.clsl.co.uk/Content/PDFs/SamplePolicies/{{p.samplefilename}}\"\n                            target=\"_blank\">\n                            <i class=\"material-icons\">file_download</i>\n                          </a>\n                        </div>\n                      </div>\n                      <div style=\"position: relative; bottom: 2px;\" class=\"col-md-11\"\n                        *ngIf=\"ComProductDescriptionState[i]\">\n                        <span  class=\"font-weight-600\">{{p.name}}</span>&nbsp;&nbsp;&nbsp;\n                        <div class=\"icon-container\">\n                          <a style=\"color: #1B8EE1; font-size: large; font-weight: 700;\">\n                            <span (click)=\"onClose(i, 'commercial')\">Close</span>\n                          </a>\n                        </div>\n                      </div>\n\n\n                    </div>\n                    <app-product-description [selectedProduct]=\"p\" [productType]=\"productType\" [productIndex]=\"i\"\n                      *ngIf=\"ComProductDescriptionState[i]\"></app-product-description>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-1\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <router-outlet></router-outlet>\n    <div class=\"col-sm-2 padding-0\">\n      <div class=\"col-sm-12 padding-0 overflow-hidden\">\n        <button type=\"button\" href=\"/cases\" class=\"btn btn-outline-danger cancel\">\n          CANCEL\n        </button>\n      </div>\n      <div class=\"col-sm-12 padding-0 position-relative top-143\">\n        <app-insurance-pricing *ngIf=\"isProductSelected\" (showBespokeInfo)=\"onShowBespokeAlert($event)\"\n          (continueInsuranceClicked)=\"onContinueWithInsurance($event)\"\n          (backToProductsClicked)=\"backToProductList($event)\" (saveForLaterClicked)=\"onSaveForLaterAlert($event)\"\n          (sendFoundPrice)=\"UpdatePrice($event)\" (removeProductFromList)=\"RemoveProductFromList($event)\" [isProductSelected]=\"isProductSelected\"></app-insurance-pricing>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"showingBespokeAlert\" class=\"show-bespoke-alert\">\n  <i (click)=\"onCloseShowBespokeAlert()\" class=\"material-icons plus-icon clear-icon-bespoke-alert\">clear</i>\n  <div class=\"container-fluid\">\n    <div class=\"col-md-12\">\n      <div class=\"bespoke-alert-title\">\n        Bespoke Quote</div>\n      <div style=\"margin-top: 28px\">\n        <p>\n          Don’t worry, your choices on the online platform mean we cannot quote you directly, but please continue\n          through your Order as normal and our team of specialists will be in touch.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"showingSaveForLater\" class=\"show-bespoke-alert\">\n  <i (click)=\"onCloseSaveForLaterAlert()\" class=\"material-icons plus-icon clear-icon-bespoke-alert\">clear</i>\n  <div class=\"container-fluid\">\n    <div class=\"col-md-12\">\n      <div class=\"bespoke-alert-title\">\n        How does ‘Save for Later’ work?</div>\n      <div style=\"margin-top: 28px\">\n        <p>\n          By clicking ‘Saving for Later’ a draft policy will be created in your Case Files and sent to you via email. \n          This can then be converted to a live order at a later stage.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./app/insurance-products/components/product-list/product-list.component.sass":
/*!************************************************************************************!*\
  !*** ./app/insurance-products/components/product-list/product-list.component.sass ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reset {\n  color: #007bff;\n  margin-left: -51px;\n  z-index: 100;\n  height: 38px;\n  outline: none;\n  box-shadow: none; }\n\n.search-span {\n  background-color: white; }\n\n.search-input {\n  bottom: 5px; }\n\n.nopadding {\n  padding: 0;\n  margin: 0;\n  text-align: start; }\n\n.product-panel {\n  background-color: grey;\n  height: 40px; }\n\n.margin-bottom-20 {\n  margin-bottom: 20px; }\n\n#loi {\n  height: 40px;\n  border-color: #1B8EE1;\n  color: #272727;\n  font-family: Source Sans Pro;\n  border-radius: 4px;\n  border-width: 2px; }\n\n#searchResInput {\n  outline: none;\n  box-shadow: none; }\n\n#searchComInput {\n  outline: none;\n  box-shadow: none; }\n\n#loi:focus {\n  box-shadow: none; }\n\n#loi-label {\n  font-size: 22px;\n  font-weight: 600;\n  font-family: Source Sans Pro, SemiBold; }\n\n#loi-container {\n  display: inline-block;\n  position: relative;\n  right: 54px; }\n\n#loi-input-container {\n  margin-left: 18px;\n  float: right; }\n\n.title {\n  padding-top: 15px;\n  margin-top: 25px;\n  margin-bottom: 27px; }\n\n#underline-container {\n  margin-bottom: 29px; }\n\n#underline {\n  height: 1px;\n  background: #c7cacc;\n  width: 111px;\n  margin: 0 auto; }\n\n.cancel {\n  float: right;\n  width: 100px;\n  font-size: 14px;\n  margin-top: 42px;\n  margin-right: 53px; }\n\n.title-page {\n  font-weight: 600;\n  font-family: Source Sans Pro, SemiBold;\n  font-size: 33px; }\n\n.padding-0 {\n  padding: 0px; }\n\n.group-container {\n  background-color: #F3F4F7;\n  border-radius: 4px;\n  margin: 0 auto;\n  height: 60px; }\n\n.margin-top-20 {\n  margin-top: 20px; }\n\n.panel-title {\n  font-size: 22px;\n  font-family: Source Sans Pro, SemiBold;\n  color: #272727;\n  font-weight: 600; }\n\n.panel-container {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 13px;\n  display: flex; }\n\n.margin-top-15 {\n  margin-top: 15px; }\n\n.plus-container {\n  text-align: right; }\n\n.plus-icon {\n  color: #1B8EE1;\n  font-size: 18px;\n  font-size: 33px; }\n\n.plus-icon:hover {\n    cursor: pointer; }\n\n.product-row {\n  height: auto;\n  font-size: 15px;\n  font-weight: 500;\n  text-align: left;\n  color: #34455A;\n  font-family: Source Sans Pro;\n  padding-top: 22px;\n  padding-bottom: 19px; }\n\n.product-row:nth-child(4n), .product-row:nth-child(4n-1) {\n  background: #F2F3F6; }\n\n.product-row:nth-child(4n-2), .product-row:nth-child(4n-3) {\n  background: #FFFFFF; }\n\n.margin-0 {\n  margin: 0px; }\n\n.border-blue {\n  border: 1px solid #1B8EE1; }\n\n.change-scale {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2); }\n\n.background-none {\n  background: none; }\n\n#resi-products {\n  border-radius: 4px;\n  margin: 0 auto;\n  height: auto; }\n\n#commercial-products {\n  border-radius: 4px;\n  margin: 0 auto;\n  height: auto; }\n\n#loi-validation {\n  font-size: 14px;\n  color: red; }\n\n.warning {\n  font-size: 14px;\n  color: red; }\n\n.show {\n  display: block; }\n\n.hide {\n  display: none; }\n\n.uk-checkbox:hover {\n  cursor: pointer; }\n\n.center {\n  text-align: center;\n  margin: 0 auto; }\n\n.float-left {\n  float: left; }\n\n.height-100 {\n  height: 100%; }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n.icon-container {\n  width: 50px;\n  position: relative;\n  left: 5px;\n  display: inline-block; }\n\n.icon-container i {\n  width: 25px; }\n\n.align-top {\n  vertical-align: top; }\n\n.position-relative {\n  position: relative; }\n\n.top-84 {\n  top: 84px; }\n\n.position-left-36 {\n  position: relative;\n  left: 36px; }\n\n.top-135 {\n  top: 135px; }\n\n.top-143 {\n  top: 143px; }\n\n.show-product-description {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n.show-bespoke-alert {\n  font-family: Source Sans Pro;\n  text-align: left;\n  color: #6F6D6D;\n  font-size: 15px;\n  width: 728px;\n  height: 176px;\n  position: absolute;\n  z-index: 999999;\n  top: 40%;\n  left: 33%;\n  background-color: #FFFFFF; }\n\n.clear-icon-bespoke-alert {\n  padding: 10px;\n  float: right; }\n\n.bespoke-alert-title {\n  margin-top: 29px;\n  height: 28px;\n  font-family: Source Sans Pro;\n  font-weight: 600;\n  font-size: 22px;\n  text-align: left;\n  color: #272727; }\n\ninput[id^=\"searchResInput\"]::-webkit-input-placeholder {\n  font-size: 15px; }\n\ninput[id^=\"searchResInput\"]::-moz-placeholder {\n  font-size: 15px; }\n\ninput[id^=\"searchResInput\"]:-ms-input-placeholder {\n  font-size: 15px; }\n\ninput[id^=\"searchResInput\"]:-moz-placeholder {\n  font-size: 15px; }\n\n.font-weight-600 {\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdXJhbmNlLXByb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L0M6XFxTb3VyY2VcXENMU0dTXFxEZXZcXENMUy5XZWJTaXRlXFxDTFMuV2ViU2l0ZVxcT3JkZXJpbmctTmV3L3NyY1xcYXBwXFxpbnN1cmFuY2UtcHJvZHVjdHNcXGNvbXBvbmVudHNcXHByb2R1Y3QtbGlzdFxccHJvZHVjdC1saXN0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBYztFQUNkLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osYUFBWTtFQUNaLGNBQWE7RUFDYixpQkFBZ0IsRUFBRzs7QUFFdkI7RUFDRyx3QkFBdUIsRUFBRzs7QUFFN0I7RUFDRyxZQUFXLEVBQUc7O0FBRWpCO0VBQ0csV0FBVTtFQUNWLFVBQVM7RUFDVCxrQkFBaUIsRUFBRzs7QUFHdkI7RUFDSSx1QkFBc0I7RUFDdEIsYUFBWSxFQUFHOztBQUVuQjtFQUNJLG9CQUFtQixFQUFHOztBQUUxQjtFQUNJLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsZUFBYztFQUNkLDZCQUE0QjtFQUM1QixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQUc7O0FBR3hCO0VBQ0ssY0FBYTtFQUNiLGlCQUFnQixFQUFHOztBQUN4QjtFQUNLLGNBQWE7RUFDYixpQkFBZ0IsRUFBRzs7QUFDeEI7RUFDSSxpQkFBZ0IsRUFBRzs7QUFFdkI7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQix1Q0FBc0MsRUFBRzs7QUFFN0M7RUFDSSxzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFlBQVcsRUFBRzs7QUFFbEI7RUFDSSxrQkFBaUI7RUFDakIsYUFBWSxFQUFHOztBQUVuQjtFQUNJLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQUc7O0FBRTFCO0VBQ0ksb0JBQW1CLEVBQUc7O0FBRTFCO0VBQ0ksWUFBVztFQUNYLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osZUFBYyxFQUFHOztBQUVyQjtFQUNJLGFBQVk7RUFDWixhQUFZO0VBQ1osZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQUc7O0FBS3pCO0VBQ0ksaUJBQWdCO0VBQ2hCLHVDQUFzQztFQUN0QyxnQkFBZSxFQUFHOztBQUV0QjtFQUNJLGFBQVksRUFBRzs7QUFFbkI7RUFDSSwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxhQUFZLEVBQUc7O0FBRW5CO0VBQ0ksaUJBQWdCLEVBQUc7O0FBRXZCO0VBQ0ksZ0JBQWU7RUFDZix1Q0FBc0M7RUFDdEMsZUFBYztFQUNkLGlCQUFnQixFQUFHOztBQUV2QjtFQUNJLGtCQUFpQjtFQUNqQixxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLGNBQWEsRUFBRzs7QUFFcEI7RUFDSSxpQkFBZ0IsRUFBRzs7QUFFdkI7RUFDSSxrQkFBaUIsRUFBRzs7QUFFeEI7RUFDSSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixnQkFBZSxFQUVTOztBQUw1QjtJQUtRLGdCQUFlLEVBQUc7O0FBRTFCO0VBQ0ksYUFBWTtFQUNaLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsNkJBQTRCO0VBQzVCLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFBRzs7QUFHM0I7RUFDSSxvQkFBbUIsRUFBRzs7QUFFMUI7RUFDSSxvQkFBbUIsRUFBRzs7QUFFMUI7RUFDSSxZQUFXLEVBQUc7O0FBRWxCO0VBQ0ksMEJBQXlCLEVBQUc7O0FBRWhDO0VBQ0ksOEJBQXFCO1VBQXJCLHNCQUFxQixFQUFHOztBQUU1QjtFQUNJLGlCQUFnQixFQUFHOztBQUV2QjtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsYUFBWSxFQUFHOztBQUVuQjtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsYUFBWSxFQUFHOztBQUVuQjtFQUNJLGdCQUFlO0VBQ2YsV0FBVSxFQUFHOztBQUVqQjtFQUNJLGdCQUFlO0VBQ2YsV0FBVSxFQUFHOztBQUVqQjtFQUNJLGVBQWMsRUFBRzs7QUFFckI7RUFDSSxjQUFhLEVBQUc7O0FBRXBCO0VBQ0ksZ0JBQWUsRUFBRzs7QUFFdEI7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYyxFQUFHOztBQUVyQjtFQUNJLFlBQVcsRUFBRzs7QUFFbEI7RUFDSSxhQUFZLEVBQUc7O0FBRW5CO0VBQ0ksaUJBQWdCLEVBQUc7O0FBRXZCO0VBQ0ksWUFBVztFQUNYLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1Qsc0JBQXFCLEVBQUc7O0FBRTVCO0VBQ0ksWUFBVyxFQUFHOztBQUVsQjtFQUNJLG9CQUFtQixFQUFHOztBQUUxQjtFQUNJLG1CQUFrQixFQUFHOztBQUV6QjtFQUNJLFVBQVMsRUFBRzs7QUFFaEI7RUFDSSxtQkFBa0I7RUFDbEIsV0FBVSxFQUFHOztBQUVqQjtFQUNJLFdBQVUsRUFBRzs7QUFFakI7RUFDSSxXQUFVLEVBQUc7O0FBRWpCO0VBQ0ksaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUFHOztBQUUxQjtFQUNJLDZCQUE0QjtFQUM1QixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixTQUFRO0VBQ1IsVUFBUztFQUNULDBCQUF5QixFQUFHOztBQUVoQztFQUNJLGNBQWE7RUFDYixhQUFZLEVBQUc7O0FBR25CO0VBQ0ksaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGVBQWMsRUFBRzs7QUFFckI7RUFDRyxnQkFBZSxFQUFHOztBQUVyQjtFQUNHLGdCQUFlLEVBQUc7O0FBRXJCO0VBQ0UsZ0JBQWUsRUFBRzs7QUFFcEI7RUFDRSxnQkFBZSxFQUFHOztBQUVwQjtFQUNJLGlCQUFnQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvaW5zdXJhbmNlLXByb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnJlc2V0IHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICBtYXJnaW4tbGVmdDogLTUxcHg7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGhlaWdodDogMzhweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLnNlYXJjaC1zcGFuIHtcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICAgYm90dG9tOiA1cHg7IH1cblxuLm5vcGFkZGluZyB7XG4gICBwYWRkaW5nOiAwO1xuICAgbWFyZ2luOiAwO1xuICAgdGV4dC1hbGlnbjogc3RhcnQ7IH1cblxuXG4ucHJvZHVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBoZWlnaHQ6IDQwcHg7IH1cblxuLm1hcmdpbi1ib3R0b20tMjAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuI2xvaSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1jb2xvcjogIzFCOEVFMTtcbiAgICBjb2xvcjogIzI3MjcyNztcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItd2lkdGg6IDJweDsgfVxuXG5cbiNzZWFyY2hSZXNJbnB1dCB7XG4gICAgIG91dGxpbmU6IG5vbmU7XG4gICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cbiNzZWFyY2hDb21JbnB1dCB7XG4gICAgIG91dGxpbmU6IG5vbmU7XG4gICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cbiNsb2k6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuI2xvaS1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybywgU2VtaUJvbGQ7IH1cblxuI2xvaS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDU0cHg7IH1cblxuI2xvaS1pbnB1dC1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgIGZsb2F0OiByaWdodDsgfVxuXG4udGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjdweDsgfVxuXG4jdW5kZXJsaW5lLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjlweDsgfVxuXG4jdW5kZXJsaW5lIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjYzdjYWNjO1xuICAgIHdpZHRoOiAxMTFweDtcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxuXG4uY2FuY2VsIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiA0MnB4O1xuICAgIG1hcmdpbi1yaWdodDogNTNweDsgfVxuXG5cblxuXG4udGl0bGUtcGFnZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvLCBTZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDMzcHg7IH1cblxuLnBhZGRpbmctMCB7XG4gICAgcGFkZGluZzogMHB4OyB9XG5cbi5ncm91cC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y0Rjc7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogNjBweDsgfVxuXG4ubWFyZ2luLXRvcC0yMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4ucGFuZWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvLCBTZW1pQm9sZDtcbiAgICBjb2xvcjogIzI3MjcyNztcbiAgICBmb250LXdlaWdodDogNjAwOyB9XG5cbi5wYW5lbC1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTNweDtcbiAgICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5tYXJnaW4tdG9wLTE1IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XG5cbi5wbHVzLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLnBsdXMtaWNvbiB7XG4gICAgY29sb3I6ICMxQjhFRTE7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9IH1cblxuLnByb2R1Y3Qtcm93IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzM0NDU1QTtcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvO1xuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxOXB4OyB9XG5cblxuLnByb2R1Y3Qtcm93Om50aC1jaGlsZCg0biksIC5wcm9kdWN0LXJvdzpudGgtY2hpbGQoNG4tMSkge1xuICAgIGJhY2tncm91bmQ6ICNGMkYzRjY7IH1cblxuLnByb2R1Y3Qtcm93Om50aC1jaGlsZCg0bi0yKSwgLnByb2R1Y3Qtcm93Om50aC1jaGlsZCg0bi0zKSB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjsgfVxuXG4ubWFyZ2luLTAge1xuICAgIG1hcmdpbjogMHB4OyB9XG5cbi5ib3JkZXItYmx1ZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFCOEVFMTsgfVxuXG4uY2hhbmdlLXNjYWxlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cblxuLmJhY2tncm91bmQtbm9uZSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTsgfVxuXG4jcmVzaS1wcm9kdWN0cyB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogYXV0bzsgfVxuXG4jY29tbWVyY2lhbC1wcm9kdWN0cyB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogYXV0bzsgfVxuXG4jbG9pLXZhbGlkYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmVkOyB9XG5cbi53YXJuaW5nIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJlZDsgfVxuXG4uc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cblxuLnVrLWNoZWNrYm94OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvOyB9XG5cbi5mbG9hdC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdDsgfVxuXG4uaGVpZ2h0LTEwMCB7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5vdmVyZmxvdy1oaWRkZW4ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLmljb24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4uaWNvbi1jb250YWluZXIgaSB7XG4gICAgd2lkdGg6IDI1cHg7IH1cblxuLmFsaWduLXRvcCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxuXG4ucG9zaXRpb24tcmVsYXRpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4udG9wLTg0IHtcbiAgICB0b3A6IDg0cHg7IH1cblxuLnBvc2l0aW9uLWxlZnQtMzYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAzNnB4OyB9XG5cbi50b3AtMTM1IHtcbiAgICB0b3A6IDEzNXB4OyB9XG5cbi50b3AtMTQzIHtcbiAgICB0b3A6IDE0M3B4OyB9XG5cbi5zaG93LXByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDsgfVxuXG4uc2hvdy1iZXNwb2tlLWFsZXJ0IHtcbiAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICM2RjZENkQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiA3MjhweDtcbiAgICBoZWlnaHQ6IDE3NnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogMzMlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cblxuLmNsZWFyLWljb24tYmVzcG9rZS1hbGVydCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7IH1cblxuXG4uYmVzcG9rZS1hbGVydC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgZm9udC1mYW1pbHkgOiBTb3VyY2UgU2FucyBQcm87XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzI3MjcyNzsgfVxuXG5pbnB1dFtpZF49XCJzZWFyY2hSZXNJbnB1dFwiXTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICBmb250LXNpemU6IDE1cHg7IH1cblxuaW5wdXRbaWRePVwic2VhcmNoUmVzSW5wdXRcIl06Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgZm9udC1zaXplOiAxNXB4OyB9XG5cbmlucHV0W2lkXj1cInNlYXJjaFJlc0lucHV0XCJdOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTVweDsgfVxuXG5pbnB1dFtpZF49XCJzZWFyY2hSZXNJbnB1dFwiXTotbW96LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxNXB4OyB9XG5cbi5mb250LXdlaWdodC02MDAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cblxuXG4iXX0= */"

/***/ }),

/***/ "./app/insurance-products/components/product-list/product-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./app/insurance-products/components/product-list/product-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_insurances_dataservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/insurances.dataservice */ "./app/insurance-products/services/insurances.dataservice.ts");
/* harmony import */ var _classes_PriceAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../classes/PriceAttribute */ "./app/classes/PriceAttribute.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_insurance_products_dataservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/insurance-products.dataservice */ "./app/insurance-products/services/insurance-products.dataservice.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "../node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "../node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_insuranceService, _formBuilder, _productService, currencyPipe, route, _router) {
        this._insuranceService = _insuranceService;
        this._formBuilder = _formBuilder;
        this._productService = _productService;
        this.currencyPipe = currencyPipe;
        this.route = route;
        this._router = _router;
        // properties
        this.InsuranceProducts = [];
        this.loiFilteredProducts = [];
        this.resiProducts = [];
        this.searchResults = [];
        this.commercialProducts = [];
        this.searchProduct = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.showPolicyDetail = false;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.TotalPrice = 0;
        this.iptTaxTotal = 0;
        this.FilterProductsCount = 0;
        this.PriceAttributes = [];
        this._productService.getProducts(true).subscribe(function (data) { return _this.InsuranceProductsInstantiated(data); }, function (error) { return _this.error(error); });
        this.isInsurance = this._insuranceService.isInsuranceState.subscribe(function (x) {
            _this.showPolicyDetail = x;
        });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.TotalPrice = 0;
        this.iptTaxTotal = 0;
        this.FilterProductsCount = 0;
        this.PriceAttributes = [];
        this._insuranceService.ClearStates();
    };
    ProductListComponent.prototype.error = function (error) {
        console.log('An Error occured');
        console.log(error);
    };
    ProductListComponent.prototype.InsuranceProductsInstantiated = function (products) {
        this.InsuranceProducts = products;
    };
    /**
    * Entered Loi this is tied to an input (event function)
    */
    ProductListComponent.prototype.EnteredLoi = function (loiValue, element) {
        loiValue = loiValue.replace('£', '');
        loiValue = loiValue.replace(',', '');
        loiValue = parseInt(loiValue).toString();
        this.NoProductsMessage = '';
        if (loiValue === '' || loiValue === undefined || loiValue === 'NaN') {
            this.ResetPriceProductAttrAll();
        }
        else {
            this.loiValidation = false;
            this.loiFilteredProducts = this.FilterProductsByLoI(loiValue, this.InsuranceProducts);
            // Now Need to filter by residential and commerical
            this.resiProducts = this.loiFilteredProducts.filter(function (_item) { return _item.residential === true; });
            this.commercialProducts = this.loiFilteredProducts.filter(function (_item) { return _item.commercial === true; });
            // Sorting alphabetically 
            this.resiProducts.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            this.commercialProducts.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            this.loiFilteredProducts.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            this.enteredLoiVal = loiValue;
            this.PassLimitOfIndemnity(loiValue);
        }
        this.ResProductDescriptionState = new Array(this.resiProducts.length);
        this.ComProductDescriptionState = new Array(this.commercialProducts.length);
    };
    ProductListComponent.prototype.ResetPriceProductAttrAll = function () {
        var self = this;
        this._insuranceService.Products.forEach(function (product) {
            product.isBespokeProduct = false;
            product.Price = 0;
            product.checked = false;
            self._insuranceService.removeProduct(product);
            self.TotalPrice = 0;
            self.RemoveAttributes(product.id);
        });
        this.isProductSelected = false;
        this.commercialProductDisplay = false;
        this.residentialProductDisplay = false;
        this.enteredLoiVal = '';
        this.TotalPrice = 0;
        this.iptTaxTotal = 0;
        this._insuranceService.setPrice(0);
    };
    ProductListComponent.prototype.PassLimitOfIndemnity = function (loiValue) {
        this._insuranceService.sendLimitOfIndemnityEntered(loiValue);
    };
    ProductListComponent.prototype.showSearch = function () {
        if (!this.showSearchBar) {
            this.showSearchBar = true;
        }
        else {
            this.searchProduct.reset();
            this.showSearchBar = false;
        }
    };
    ProductListComponent.prototype.reset = function () {
        this.searchProduct.reset();
    };
    ProductListComponent.prototype.Search = function (_searchTerm) {
        var _this = this;
        this.searchedValue = _searchTerm;
        this.searchProduct.valueChanges.debounceTime(100).distinctUntilChanged().subscribe(function (search) {
            if (search == null) {
                _this.searchResults = _this.loiFilteredProducts;
                _this.setCommResArray(_this.searchResults);
            }
            else if (search.length >= 3) {
                _this.searchResults = _this._productService.searchEntries(search, _this.loiFilteredProducts);
                if (_this.searchResults.length > 0) {
                    _this.setCommResArray(_this.searchResults);
                }
            }
            else {
                _this.searchResults = _this.loiFilteredProducts;
                _this.setCommResArray(_this.searchResults);
            }
        });
    };
    ProductListComponent.prototype.setCommResArray = function (searchResults) {
        this.resiProducts = searchResults.filter(function (_item) { return _item.residential === true; });
        this.commercialProducts = searchResults.filter(function (_item) { return _item.commercial === true; });
    };
    ProductListComponent.prototype.FilterProductsByLoI = function (loiValue, unfilteredProducts) {
        var filteredProducts = new Array();
        var self = this;
        if (loiValue === '') {
            loiValue = '0';
        }
        var newLoiValue = parseInt(loiValue, null);
        unfilteredProducts.forEach(function (product) {
            var productName = product.name;
            var loiValuesPerProduct = new Array();
            // Getting all loi per product - getting all the loi values and storing into a array - loiValuesPerProduct
            if (product.prices !== null) {
                product.prices.forEach(function (p) {
                    var price = p.price;
                    var loiAttributes = p.attributes.filter(function (x) { return x.name === 'LIMITOFINDEMNITY'; });
                    if (loiAttributes !== null) {
                        loiAttributes.forEach(function (loi) {
                            var loiNumber = parseInt(loi.value, null);
                            var duplicateLoi = loiValuesPerProduct.find(function (x) { return x === loiNumber; });
                            if (duplicateLoi === undefined) {
                                loiValuesPerProduct.push(loiNumber);
                            }
                            loi.value = loi.value.toString();
                        });
                    }
                });
            }
            // A list of all the limit of indemnity options for each product - sorted
            loiValuesPerProduct.sort(function (a, b) { return a - b; });
            // Check all loi less than value enetred
            var foundBandValue = self.FindLoiBandValue(loiValuesPerProduct, newLoiValue);
            if (foundBandValue) {
                var nextBracketValue = self.RoundUpLOIToNextBracket(loiValuesPerProduct, newLoiValue);
                product.loiMinValue = foundBandValue;
                product.loiBracketValue = nextBracketValue;
                filteredProducts.push(product);
            }
        });
        this.FilterProductsCount = filteredProducts.length;
        return filteredProducts;
    };
    ProductListComponent.prototype.FindLoiBandValue = function (array, val) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] <= val) {
                return array[i];
            }
        }
    };
    ProductListComponent.prototype.RoundUpLOIToNextBracket = function (array, val) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] >= val) {
                return array[i];
            }
        }
    };
    /**
     * SelectedProduct
     * Event triggered by checkbox when product selected
     */
    ProductListComponent.prototype.ProductSelected = function (product, checked) {
        // Working out price based of limit of indemnity/essentially the from price
        var loiValue = product.loiBracketValue;
        var productPrices = product.prices;
        // Adding Product
        if (checked) {
            this.isProductSelected = true;
            product.checked = true;
            this._insuranceService.addProduct(product);
            // Building productPrices
            this.RetrieveAttributesForProduct(product.id, product);
            // Getting the from price and the ipt
            product.FromPrice = this.FindPriceFromLOI(loiValue, productPrices);
            if (product.FromPrice === 0) {
                product.isBespokeProduct = true;
            }
            var ipt = this.FindIptFromPrice(product.FromPrice, productPrices, product.id);
            product.Price = product.FromPrice;
            this.TotalPrice += product.FromPrice;
            this.iptTaxTotal += ipt;
        }
        else {
            // Removing Product
            product.checked = false;
            this._insuranceService.removeProduct(product);
            this.RemoveAttributes(product.id);
            var productTax = this._insuranceService.getProductTax(product.id);
            this.iptTaxTotal -= productTax;
            // If this condition Matches then that means attributes have changed the price
            if (product.Price !== product.FromPrice) {
                // Subtract price based of attr based price
                this.TotalPrice -= product.Price;
                // Set product price back to the from price
                product.Price = product.FromPrice;
            }
            else {
                this.TotalPrice -= this.FindPriceFromLOI(loiValue, productPrices);
            }
        }
        if (this._insuranceService.Products.length === 0) {
            this.isProductSelected = false;
        }
        this._insuranceService.setPrice(this.TotalPrice);
        this._insuranceService.setIptTax(this.iptTaxTotal);
    };
    /**
   * Finds the from price from the loi
   * gets the price based of loi
   */
    ProductListComponent.prototype.FindPriceFromLOI = function (loi, prices) {
        var self = this;
        if (loi === undefined) {
            loi = 0;
        }
        var loiAsString = loi.toString();
        var foundPrice = 0;
        var foundLoiValues = [];
        prices.forEach(function (p) {
            var loiAttributes = p.attributes.filter(function (x) { return x.name === 'LIMITOFINDEMNITY'; });
            var MatchingLoiAttribute = loiAttributes.find(function (x) { return x.value === loiAsString; });
            if (MatchingLoiAttribute !== undefined) {
                var _price = new _classes_PriceAttribute__WEBPACK_IMPORTED_MODULE_2__["Prices"]();
                _price.price = p.price;
                _price.attributes.push(MatchingLoiAttribute);
                foundLoiValues.push(_price);
            }
            if (foundPrice === 0) {
                var price = p.price;
                var tax = p.ipt;
                if (MatchingLoiAttribute !== undefined) {
                    foundPrice = price;
                }
            }
        });
        // Get the lowest price from found loi prices
        if (foundLoiValues.length > 0) {
            var foundPrices_1 = [];
            foundLoiValues.forEach(function (_p) {
                foundPrices_1.push(_p.price);
            });
            foundPrice = foundPrices_1.reduce(function (a, b) { return Math.min(a, b); });
        }
        return foundPrice;
    };
    /**
  * Finds the ipt price based of the from price found
  * gets the  ipt
  */
    ProductListComponent.prototype.FindIptFromPrice = function (price, prices, productId) {
        var priceAttr = prices.find(function (x) { return x.price === price; });
        if (priceAttr === undefined) {
            return 0;
        }
        this._insuranceService.addTaxPerProduct(priceAttr.ipt, productId);
        return priceAttr.ipt;
    };
    ProductListComponent.prototype.RetrieveAttributesForProduct = function (productId, product) {
        var _this = this;
        this._productService.getProductMainAttributesNEW(productId).subscribe(function (data) { return _this.BuildMainPriceAttributes(data, product); }, function (error) { return _this.error(error); });
    };
    /**
     * BuildMainAttributes
     * Populating the price attributes with the main attribute data, this is because "prices" doesnt contain the correct stuff
     */
    ProductListComponent.prototype.BuildMainPriceAttributes = function (attributes, product) {
        var self = this;
        // This is excluding LoI
        var priceRelatedAttributes = this.GetAllPriceRelatedAttributeNamesFromPrices(product.prices);
        // Need to remove LOI attributes as they arent needed
        attributes = attributes.filter(function (x) { return x.name !== 'LIMITOFINDEMNITY'; });
        priceRelatedAttributes.forEach(function (attrName) {
            var baseAttribute = attributes.find(function (x) { return x.name === attrName; });
            // this is where need to build a attribute element
            var newPriceAttribute = self.ConvertBaseProductAttributeToAttributeElement(baseAttribute);
            newPriceAttribute.productId = product.id;
            self.PriceAttributes.push(newPriceAttribute);
        });
        this._insuranceService.addPriceAttributes(this.PriceAttributes);
    };
    ProductListComponent.prototype.GetAllPriceRelatedAttributeNamesFromPrices = function (prices) {
        var priceRelatedAttributeNames = new Array();
        prices.forEach(function (p) {
            var nonLoiAttributes = p.attributes.filter(function (x) { return x.name !== 'LIMITOFINDEMNITY'; });
            nonLoiAttributes.forEach(function (attr) {
                var duplicateCheck = priceRelatedAttributeNames.find(function (x) { return x === attr.name; });
                if (!duplicateCheck) {
                    priceRelatedAttributeNames.push(attr.name);
                }
            });
        });
        return priceRelatedAttributeNames;
    };
    // Imported from old code
    ProductListComponent.prototype.WorkoutElementHtmlType = function (attrElement) {
        var htmlInputType = '';
        switch (attrElement.type) {
            case 'AddressCoordinate':
                attrElement.hidden = true;
                htmlInputType = 'hidden';
                break;
            case 'String':
                htmlInputType = 'text';
                break;
            case 'DateTime':
                htmlInputType = 'date';
                break;
            case 'Dictionary':
                htmlInputType = 'select';
                break;
            case 'MapPolygon':
                attrElement.hidden = true;
                htmlInputType = 'hidden';
                break;
            case 'MapPolygons':
                attrElement.hidden = true;
                htmlInputType = 'hidden';
                break;
            case 'Upload':
                htmlInputType = 'file';
                break;
            default:
                attrElement.hidden = true;
                return '';
        }
        return htmlInputType;
    };
    ProductListComponent.prototype.GetOptionDefaultValue = function (options) {
        if (options !== undefined) {
            var defaultValue = options.find(function (x) { return x.default; });
            if (!defaultValue) {
                return '';
            }
            return defaultValue.value;
        }
        return '';
    };
    ProductListComponent.prototype.OrderProductAttributeOptions = function (options) {
        options.sort(function (a, b) {
            if (a.sortorder < b.sortorder) {
                return -1;
            }
            if (a.sortorder > b.sortorder) {
                return 1;
            }
            return 0;
        });
    };
    // need to create a "AttributeElement" type based of the "BaseProductAttributes"
    ProductListComponent.prototype.ConvertBaseProductAttributeToAttributeElement = function (attribute) {
        var priceAttr = new _classes_PriceAttribute__WEBPACK_IMPORTED_MODULE_2__["PriceAttribute"]();
        priceAttr.dataType = attribute.type;
        priceAttr.name = attribute.name;
        priceAttr.sortorder = attribute.sortorder;
        priceAttr.isHidden = attribute.hidden;
        priceAttr.htmlType = '';
        priceAttr.isRequired = true;
        priceAttr.mutable = attribute.mutable;
        priceAttr.maximum = attribute.maximum;
        priceAttr.minimum = attribute.minimum;
        priceAttr.excluded = attribute.excluded;
        priceAttr.description = attribute.description;
        priceAttr.htmlType = this.WorkoutElementHtmlType(attribute);
        priceAttr.selectedValue = this.GetOptionDefaultValue(attribute.values);
        priceAttr.options = attribute.values;
        this.OrderProductAttributeOptions(attribute.values);
        return priceAttr;
    };
    ///
    ProductListComponent.prototype.RemoveAttributes = function (productId) {
        this._insuranceService.removePriceAttributes(productId);
        this.PriceAttributes = this._insuranceService.PriceAttributes;
    };
    ProductListComponent.prototype.UpdatePrice = function (price) {
        this.TotalPrice = price;
    };
    ProductListComponent.prototype.transformAmount = function (element) {
        var amount = this.amount;
        if (amount !== undefined) {
            amount = amount.replace('£', '');
            amount = amount.replace(',', '');
            amount = parseInt(amount).toString();
        }
        this.amount = amount;
        if (amount !== 'NaN') {
            this.amount = this.currencyPipe.transform(this.amount, 'GBP', '£', '1.0');
            // Remove or comment this line if you dont want 
            // to show the formatted amount in the textbox.
            element.target.value = this.amount;
        }
        else {
            element.target.value = '';
            this.amount = '';
        }
        // this.EnteredLoi(amount.toString(), element);
    };
    ProductListComponent.prototype.DisplayProducts = function (display, productType) {
        if (this.enteredLoiVal !== undefined && this.enteredLoiVal !== '') {
            this.loiValidation = false;
            this.NoProductsMessage = '';
            var productTypeName = '';
            if (productType === 'commerc') {
                this.commercialProductDisplay = display;
                productTypeName = 'Commercial';
            }
            else {
                this.residentialProductDisplay = display;
                productTypeName = 'Residential';
            }
            if (this.resiProducts.length === 0) {
                this.residentialProductDisplay = false;
                this.NoProductsMessage = 'No ' + productTypeName + ' Products for this LOI, Please enter a higher value.';
            }
            if (this.commercialProducts.length === 0) {
                this.NoProductsMessage = 'No ' + productTypeName + ' Products for this LOI, Please enter a higher value.';
                this.commercialProductDisplay = false;
            }
        }
        else {
            this.commercialProductDisplay = false;
            this.residentialProductDisplay = false;
            this.loiValidation = true;
        }
    };
    ProductListComponent.prototype.ShowProductDescription = function (pid, proType) {
        if (proType === 'residential') {
            for (var i = 0; i < this.ResProductDescriptionState.length; i++) {
                if (i != pid) {
                    this.ResProductDescriptionState[i] = false;
                }
                else {
                    this.ResProductDescriptionState[pid] = true;
                }
            }
            this.productType = "residential";
        }
        if (proType === 'commercial') {
            for (var i_1 = 0; i_1 < this.ComProductDescriptionState.length; i_1++) {
                if (i_1 !== pid) {
                    this.ComProductDescriptionState[i_1] = false;
                }
                else {
                    this.ComProductDescriptionState[pid] = true;
                }
            }
            this.productType = "commercial";
        }
    };
    ProductListComponent.prototype.onClose = function (pid, proType) {
        if (proType === 'residential') {
            this.ResProductDescriptionState[pid] = false;
        }
        if (proType === 'commercial') {
            this.ComProductDescriptionState[pid] = false;
        }
    };
    /**
   * Removed Product form Right panel (red bin click)
   * Event triggered by checkbox when product selected
   */
    ProductListComponent.prototype.RemoveProductFromList = function (product) {
        var productType = product.commercial ? 'commerc' : 'resi';
        this.ProductSelected(product, false);
        var checkbox = document.getElementById('product_' + product.id + '_' + productType);
        checkbox.checked = false;
    };
    /**
   * Show/close bespoke alert
   * Event triggered by info button and X
   */
    ProductListComponent.prototype.onShowBespokeAlert = function (event) {
        this.showingBespokeAlert = event;
    };
    ProductListComponent.prototype.onCloseShowBespokeAlert = function () {
        this.showingBespokeAlert = false;
    };
    ProductListComponent.prototype.onSaveForLaterAlert = function (event) {
        this.showingSaveForLater = event;
    };
    ProductListComponent.prototype.onCloseSaveForLaterAlert = function () {
        this.showingSaveForLater = false;
    };
    /**
   * Show/close bespoke alert
   * Event triggered by info button and X
   */
    ProductListComponent.prototype.onContinueWithInsurance = function (event) {
        if (this._insuranceService.Products.length > 0) {
            this._router.navigate(['newcase/insurance/policydetail']);
        }
    };
    ProductListComponent.prototype.backToProductList = function (event) {
        this._router.navigate(['newcase/insurance']);
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-insurance-products',
            template: __webpack_require__(/*! ./product-list.component.html */ "./app/insurance-products/components/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.sass */ "./app/insurance-products/components/product-list/product-list.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_insurances_dataservice__WEBPACK_IMPORTED_MODULE_1__["InsurancesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _services_insurance_products_dataservice__WEBPACK_IMPORTED_MODULE_4__["InsuranceProductDataService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./app/insurance-products/insurance-products.module.ts":
/*!*************************************************************!*\
  !*** ./app/insurance-products/insurance-products.module.ts ***!
  \*************************************************************/
/*! exports provided: InsuranceProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceProductsModule", function() { return InsuranceProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./app/insurance-products/components/product-list/product-list.component.ts");
/* harmony import */ var _services_insurances_dataservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/insurances.dataservice */ "./app/insurance-products/services/insurances.dataservice.ts");
/* harmony import */ var _components_insurance_attributes_insurance_attributes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/insurance-attributes/insurance-attributes.component */ "./app/insurance-products/components/insurance-attributes/insurance-attributes.component.ts");
/* harmony import */ var _authorise_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authorise/shared/shared.module */ "./app/authorise/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_policy_detail_policy_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/policy-detail/policy-detail.component */ "./app/insurance-products/components/policy-detail/policy-detail.component.ts");
/* harmony import */ var _components_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-description/product-description.component */ "./app/insurance-products/components/product-description/product-description.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var InsuranceProductsModule = /** @class */ (function () {
    function InsuranceProductsModule() {
    }
    InsuranceProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"],
                _components_insurance_attributes_insurance_attributes_component__WEBPACK_IMPORTED_MODULE_4__["InsuranceAttributesComponent"],
                _components_policy_detail_policy_detail_component__WEBPACK_IMPORTED_MODULE_7__["PolicyDetailComponent"],
                _components_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_8__["ProductDescriptionComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _authorise_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            exports: [
                _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"],
                _components_insurance_attributes_insurance_attributes_component__WEBPACK_IMPORTED_MODULE_4__["InsuranceAttributesComponent"],
                _components_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_8__["ProductDescriptionComponent"]
            ],
            providers: [
                _services_insurances_dataservice__WEBPACK_IMPORTED_MODULE_3__["InsurancesService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]
            ]
        })
    ], InsuranceProductsModule);
    return InsuranceProductsModule;
}());



/***/ }),

/***/ "./app/insurance-products/services/insurance-products.dataservice.ts":
/*!***************************************************************************!*\
  !*** ./app/insurance-products/services/insurance-products.dataservice.ts ***!
  \***************************************************************************/
/*! exports provided: InsuranceProductDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceProductDataService", function() { return InsuranceProductDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "../node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "../node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _classes_Case__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../classes/Case */ "./app/classes/Case.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./environments/environment.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InsuranceProductDataService = /** @class */ (function () {
    function InsuranceProductDataService(apollo, http) {
        this.apollo = apollo;
        this.http = http;
        this.attributes = [];
    }
    InsuranceProductDataService.prototype.getProducts = function (_isInsurance) {
        return this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()("{\n          user {\n             products(insuranceonly:" + _isInsurance + "){\n               id,\n               name,\n               groupname,\n               prices {\n                 attributes{\n                   name,\n                   value\n                 },\n                 price,\n                 ipt\n               },\n               relatedhazards {\n                keyword\n              },\n               demandsAndNeeds {\n                  demandId,\n                  demandFile,\n                  demandName\n               }\n               samplefilename,\n               description,\n               commercial,\n               residential\n             }\n           }\n          }")
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (x) {
        })).map(function (res) { return res.data['user']['products']; });
    };
    InsuranceProductDataService.prototype.getProductMainAttributes = function (productId) {
        var _this = this;
        var productattributes = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{\n      user {\n        products(productids:[", "]){\n        id,\n        statementOfFacts\n        attributes {\n          description,\n          name,\n          excluded,\n          hidden,\n          maximum,\n          minimum,\n          id\n          mutable,\n          required,\n          sortorder,\n          type,\n          values {\n            default,\n            description,\n            id,\n            sortorder,\n            value\n          }\n       }\n      }\n    }\n    }"], ["{\n      user {\n        products(productids:[", "]){\n        id,\n        statementOfFacts\n        attributes {\n          description,\n          name,\n          excluded,\n          hidden,\n          maximum,\n          minimum,\n          id\n          mutable,\n          required,\n          sortorder,\n          type,\n          values {\n            default,\n            description,\n            id,\n            sortorder,\n            value\n          }\n       }\n      }\n    }\n    }"])), productId);
        return this.apollo.query({
            query: productattributes,
            fetchPolicy: 'network-only'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (x) {
            if (x.data != null) {
                _this.attributes = x.data["user"]["products"][0]["attributes"];
            }
        })).map(function (res) { return res.data = _this.attributes; });
    };
    InsuranceProductDataService.prototype.getProductMainAttributesNEW = function (productId) {
        var productattributesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_2 || (templateObject_2 = __makeTemplateObject(["{\n      user {\n        products(productids:[", "]){\n        id,\n        statementOfFacts\n        attributes {\n          description,\n          name,\n          excluded,\n          hidden,\n          maximum,\n          minimum,\n          id\n          mutable,\n          required,\n          sortorder,\n          type,\n          values {\n            default,\n            description,\n            id,\n            sortorder,\n            value\n          }\n       }\n      }\n    }\n    }"], ["{\n      user {\n        products(productids:[", "]){\n        id,\n        statementOfFacts\n        attributes {\n          description,\n          name,\n          excluded,\n          hidden,\n          maximum,\n          minimum,\n          id\n          mutable,\n          required,\n          sortorder,\n          type,\n          values {\n            default,\n            description,\n            id,\n            sortorder,\n            value\n          }\n       }\n      }\n    }\n    }"])), productId);
        return this.apollo.query({
            query: productattributesQuery,
            fetchPolicy: 'network-only'
        }).map(function (res) { return res.data = res.data["user"]["products"][0]["attributes"]; });
    };
    InsuranceProductDataService.prototype.searchProducts = function (term, commercialProducts, residentialProducts, otherProducts, favouriteProducts) {
        var allResults = new Array();
        allResults = allResults.concat(commercialProducts);
        allResults = allResults.concat(residentialProducts);
        allResults = allResults.concat(otherProducts);
        allResults = allResults.concat(favouriteProducts);
        return this.searchEntries(term, allResults);
    };
    InsuranceProductDataService.prototype.searchEntries = function (term, allResults) {
        term = term.toLowerCase();
        var filteredResults = allResults.filter(function (x) { return x.name.toLowerCase().includes(term) || x.description.toLowerCase().includes(term); });
        var unique = filteredResults.filter(function (item, i, ar) {
            return ar.indexOf(item) === i;
        });
        return unique;
    };
    InsuranceProductDataService.prototype.getDemandsAndNeeds = function (demandId) {
        var demands = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_3 || (templateObject_3 = __makeTemplateObject(["{\n      user {\n        demandsandneedbyid(demandId: ", ")\n      }\n    }"], ["{\n      user {\n        demandsandneedbyid(demandId: ", ")\n      }\n    }"])), demandId);
        return this.apollo.query({
            query: demands,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (x) {
        })).map(function (res) { return res.data = res.data["user"]["demandsandneedbyid"]; });
    };
    InsuranceProductDataService.prototype.GetDemandsAndNeedsFile = function (demandId) {
        var _this = this;
        this.getDemandsAndNeeds(demandId).subscribe(function (res) {
            var blob = _this.b64toBlob(res, "application/pdf", 512);
            var blobUrl = URL.createObjectURL(blob);
            window.open(blobUrl);
        });
    };
    InsuranceProductDataService.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'application/pdf' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    InsuranceProductDataService.prototype.b64toBlob = function (b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    // prompt price
    // create draft
    InsuranceProductDataService.prototype.createDraft = function (_user, _draft, _caseref) {
        // check if a caseref has been passed
        if (_caseref) {
            // need to check if case already exists
            var cr = _user.cases.find(function (c) { return c.casereference === _caseref; });
            //
            if (cr) {
                // caseref matches with a case, need to add the draft to it
                cr.drafts.push(_draft);
                window.location.reload();
            }
            else {
                // caseref does not match with any existing case
                // use caseref to create a new case file
                var c = new _classes_Case__WEBPACK_IMPORTED_MODULE_7__["Case"](_caseref, new Date(), [], [], 0, [], null, null);
                c.drafts.push(_draft);
                var u = JSON.parse(localStorage.getItem('user'));
                u.cases.push(c);
                window.location.reload();
            }
        }
        else {
            // no caseref has been passed, need to autogenerate the case file
            var ref = _user.username + ' ' + (_user.cases.length + 1);
            var c = new _classes_Case__WEBPACK_IMPORTED_MODULE_7__["Case"](ref, new Date(), [], [], 0, [], null, null);
            c.drafts.push(_draft);
            var us = JSON.parse(localStorage.getItem('user'));
            us.cases.push(c);
            localStorage.setItem('user', JSON.stringify(us));
            window.location.reload();
        }
    };
    InsuranceProductDataService.prototype.StatementOfFactsCantAgree = function (sofData) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].webProxy + 'api/OrderSystem/sof_cant_agree_send_email', {
            ChosenAttributes: sofData.ChosenAttributes,
            Username: sofData.username,
            CompanyCode: sofData.companycode,
            AccountId: sofData.AccountId,
            ProductName: sofData.ProductName,
            Reasons: sofData.Reasons,
            Token: sofData.Token,
            CustomerEmailAddress: "",
            CustomerFirstName: "",
            CustomerSurname: "",
            CustomerTelephone: ""
        }).map(function (res) {
            return res;
        });
    };
    InsuranceProductDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InsuranceProductDataService);
    return InsuranceProductDataService;
}());

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./app/insurance-products/services/insurances.dataservice.ts":
/*!*******************************************************************!*\
  !*** ./app/insurance-products/services/insurances.dataservice.ts ***!
  \*******************************************************************/
/*! exports provided: InsurancesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurancesService", function() { return InsurancesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_classes_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/Product */ "./app/classes/Product.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InsurancesService = /** @class */ (function () {
    function InsurancesService() {
        this.priceAttributeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.PriceAttributeState = this.priceAttributeSubject.asObservable();
        this.PriceAttributes = [];
        this.productSelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ProductState = this.productSelectedSubject.asObservable();
        this.Products = [];
        this.loiSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loiState = this.loiSubject.asObservable();
        this.currentPriceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.CurrentPriceState = this.currentPriceSubject.asObservable();
        this.currentTaxSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.CurrentTaxState = this.currentTaxSubject.asObservable();
        this.TaxPerProductArray = new Array();
        this.isInsuaranceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isInsuranceState = this.isInsuaranceSubject.asObservable();
    }
    InsurancesService.prototype.canActivateChild = function () {
        if (this.Products.length > 0) {
            return true;
        }
        return false;
    };
    InsurancesService.prototype.addPriceAttributes = function (attributes) {
        this.PriceAttributes = attributes;
        this.priceAttributeSubject.next(attributes);
    };
    InsurancesService.prototype.removePriceAttributes = function (productId) {
        this.PriceAttributes = this.PriceAttributes.filter(function (_item) { return _item.productId !== productId; });
        this.priceAttributeSubject.next(this.PriceAttributes);
    };
    InsurancesService.prototype.addProduct = function (product) {
        this.Products.push(product);
        this.productSelectedSubject.next(this.Products);
    };
    InsurancesService.prototype.removeProduct = function (product) {
        this.Products = this.Products.filter(function (_item) { return _item.id !== product.id; });
        this.productSelectedSubject.next(this.Products);
    };
    InsurancesService.prototype.sendLimitOfIndemnityEntered = function (loi) {
        this.loi = loi;
        this.loiSubject.next(loi);
    };
    InsurancesService.prototype.setPrice = function (price) {
        this.CurrentPrice = price;
        this.currentPriceSubject.next(price);
    };
    InsurancesService.prototype.setIptTax = function (tax) {
        this.CurrentTaxTotal = tax;
        this.currentTaxSubject.next(tax);
    };
    InsurancesService.prototype.addTaxPerProduct = function (_tax, productId) {
        var t = new src_app_classes_Product__WEBPACK_IMPORTED_MODULE_1__["Tax"]();
        t.amount = _tax;
        t.productId = productId;
        this.TaxPerProductArray.push(t);
    };
    InsurancesService.prototype.getProductTax = function (id) {
        var foundIpt = this.TaxPerProductArray.find(function (x) { return x.productId === id; });
        if (foundIpt) {
            return foundIpt.amount;
        }
        return 0;
    };
    InsurancesService.prototype.editIptPerProduct = function (newIpt, id) {
        var tax = this.TaxPerProductArray.find(function (x) { return x.productId === id; });
        tax.amount = newIpt;
    };
    InsurancesService.prototype.ClearStates = function () {
        this.loi = '';
        this.CurrentPrice = 0;
        this.CurrentTaxTotal = 0;
        this.Products = new Array();
        this.TaxPerProductArray = new Array();
        this.PriceAttributes = new Array();
    };
    InsurancesService.prototype.sendNewInsurance = function (param) {
        this.isInsuaranceSubject.next(param);
    };
    InsurancesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InsurancesService);
    return InsurancesService;
}());



/***/ }),

/***/ "./app/services/auth.service.ts":
/*!**************************************!*\
  !*** ./app/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: UrlGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlGuardService", function() { return UrlGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "../node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "../node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataservice.service */ "./app/services/dataservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UrlGuardService = /** @class */ (function () {
    function UrlGuardService(apollo, http, _dataservice, router) {
        this.apollo = apollo;
        this.http = http;
        this._dataservice = _dataservice;
        this.router = router;
    }
    UrlGuardService.prototype.canActivate = function (activeRoute, state) {
        return this.getUser();
    };
    UrlGuardService.prototype.getUser = function () {
        var username = localStorage.getItem("username");
        if (username === "undefined") {
            username = undefined;
        }
        if (!username) {
            this.router.navigate(['/login']);
        }
        else {
            return this._dataservice.checkUserLoggedIn().map(function (result) {
                return result;
            });
        }
    };
    UrlGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _dataservice_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UrlGuardService);
    return UrlGuardService;
}());



/***/ }),

/***/ "./app/services/dataservice.service.ts":
/*!*********************************************!*\
  !*** ./app/services/dataservice.service.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "../node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable */ "../node_modules/rxjs/observable.js");
/* harmony import */ var rxjs_observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "../node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _classes_tokenResponse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../classes/tokenResponse */ "./app/classes/tokenResponse.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DataService = /** @class */ (function () {
    function DataService(apollo, http) {
        this.apollo = apollo;
        this.http = http;
        this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.loggedIn = this.isUserLoggedIn.asObservable();
    }
    DataService.prototype.changeLoggedInUserAtAppLevel = function (res) {
        this.isUserLoggedIn.next(res);
    };
    DataService.prototype.logout = function () {
        var signoutMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation{\n      signout\n    }"], ["\n    mutation{\n      signout\n    }"])));
        return this.apollo.mutate({ mutation: signoutMutation, fetchPolicy: 'no-cache' }).map(function (r) {
            console.log(r);
            localStorage.clear();
            return r['data']['signout'];
        });
    };
    DataService.prototype.signinUser = function (_accountid, _username, _password) {
        var _this = this;
        return this.signInGraph(_accountid, _username, _password).flatMap(function (res) {
            if (res) {
                return _this.signInProxy(_accountid, _username, _password).map(function (s) { return s; });
            }
            return new rxjs_observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
        });
    };
    DataService.prototype.signInGraph = function (_accountid, _username, _password) {
        var signinMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n       mutation signin($id: Int, $name: String, $pw: String) {\n        signin( user: {\n            accountid: $id,\n            username: $name,\n            password: $pw\n          })\n     }"], ["\n       mutation signin($id: Int, $name: String, $pw: String) {\n        signin( user: {\n            accountid: $id,\n            username: $name,\n            password: $pw\n          })\n     }"])));
        return this.apollo.mutate({
            mutation: signinMutation,
            variables: {
                id: _accountid,
                name: _username,
                pw: _password
            },
        }).map(function (data) {
            console.log(data);
            if (data['data']['signin']) {
                return data['data']['signin'];
            }
            else {
                return new rxjs_observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
            }
        });
    };
    DataService.prototype.signInProxy = function (_accountid, _username, _password) {
        return this.getProxyToken(_accountid, _username, _password).map(function (res) {
            if (res.success) {
                localStorage.setItem('proxyToken', res.token);
                return true;
            }
            else {
                return false;
            }
        });
    };
    DataService.prototype.getProxyToken = function (_accountid, _user, _password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].webProxy + 'api/auth/validate', {
            CompanyCode: 'CLS',
            User: _user,
            Account: _accountid,
            Password: _password
        }).map(function (res) {
            console.log(res);
            localStorage.setItem('user', res['user']);
            return new _classes_tokenResponse__WEBPACK_IMPORTED_MODULE_9__["TokenResponse"](res['success'], res['token']);
        });
    };
    DataService.prototype.checkUserLoggedIn = function (cahce) {
        if (cahce === void 0) { cahce = true; }
        var currentUser = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_3 || (templateObject_3 = __makeTemplateObject(["query  {\n        user {\n          firstname\n          lastname\n          username\n        }\n      }"], ["query  {\n        user {\n          firstname\n          lastname\n          username\n        }\n      }"])));
        if (cahce) {
            return this.apollo.query({ query: currentUser }).map(function (response) {
                if (response.data) {
                    return true;
                }
            });
        }
        else {
            return this.apollo.query({ query: currentUser, fetchPolicy: 'network-only' }).map(function (response) {
                if (response.data) {
                    return true;
                }
            });
        }
    };
    DataService.prototype.checkUser = function (cahce) {
        if (cahce === void 0) { cahce = true; }
        var currentUser = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_4 || (templateObject_4 = __makeTemplateObject(["query  {\n        user {\n          firstname\n          lastname\n          username\n          cases {\n            caseid\n            datecreated\n            casereference\n            caseaddresses {\n              buildingname\n              buildingnumber\n              coordssource\n              country\n              easting\n              northing\n              caseaddressid\n              county\n              dependantthoroughfaredescriptor\n              dependantthoroughfarename\n              doubledependantlocality\n              locality\n              organisation\n              paon\n              postcode\n              saon\n              street\n              subbuildingname\n              thoroughfaredescriptor\n              towncity\n              uprn\n            }\n            lines{\n              lineTypeId\n              lineIdGuid\n              linedetails{\n                linedetailid\n                totalgrossprice\n                casefileId\n                productname\n                lineidguid\n                productId\n                linedetailattributes {\n                  id\n                  attributename\n                  attributevalue\n                }\n              }\n              linedatetime\n            }\n            orders{\n              orderid\n              orderdatetime\n              orderdetails {\n                orderdetailid\n                productname\n                duedate\n                totalgrossprice\n                orderdetailattributes {\n                  id\n                }\n              }\n              orderstatus\n            }\n          }\n        }\n      }"], ["query  {\n        user {\n          firstname\n          lastname\n          username\n          cases {\n            caseid\n            datecreated\n            casereference\n            caseaddresses {\n              buildingname\n              buildingnumber\n              coordssource\n              country\n              easting\n              northing\n              caseaddressid\n              county\n              dependantthoroughfaredescriptor\n              dependantthoroughfarename\n              doubledependantlocality\n              locality\n              organisation\n              paon\n              postcode\n              saon\n              street\n              subbuildingname\n              thoroughfaredescriptor\n              towncity\n              uprn\n            }\n            lines{\n              lineTypeId\n              lineIdGuid\n              linedetails{\n                linedetailid\n                totalgrossprice\n                casefileId\n                productname\n                lineidguid\n                productId\n                linedetailattributes {\n                  id\n                  attributename\n                  attributevalue\n                }\n              }\n              linedatetime\n            }\n            orders{\n              orderid\n              orderdatetime\n              orderdetails {\n                orderdetailid\n                productname\n                duedate\n                totalgrossprice\n                orderdetailattributes {\n                  id\n                }\n              }\n              orderstatus\n            }\n          }\n        }\n      }"])));
        if (cahce) {
            return this.apollo.query({ query: currentUser }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (x) {
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) { return res.data['user']; }));
        }
        else {
            return this.apollo.query({ query: currentUser, fetchPolicy: 'network-only' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (x) {
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) { return res.data['user']; }));
        }
    };
    // average spend
    DataService.prototype.getCredit = function () {
        return this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()("query {\n            user {\n              creditlimits {\n                company,\n                available,\n                limit,\n                onHold\n              }\n            }\n          }")
        }).map(function (res) { return res.data['user']['creditlimits']; });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// URL's probably need the trailing slash.
// Should all be HTTPS, but during dev these might not be.. Check!
var environment = {
    production: false,
    webProxy: 'https://weborderingproxy-dev.azurewebsites.net/',
    graphQl: 'https://clsgraph-dev.azurewebsites.net/graphql/',
    conveymap: 'https://conveymap-dev.azurewebsites.net/',
    conveymaplocal: "http://localhost:54144/"
};


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Source\CLSGS\Dev\CLS.WebSite\CLS.WebSite\Ordering-New\src\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map