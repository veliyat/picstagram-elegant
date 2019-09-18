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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div app-navbar></div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <app-header></app-header>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <app-footer></app-footer>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 offset-md-4\">\n    <h2>Login</h2>\n    <hr>\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"loginForm.valid && login()\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': username.touched && username.invalid }\"\n          name=\"username\" [(ngModel)]=\"model.username\" id=\"username\" required #username=\"ngModel\">\n        <span class=\"invalid-feedback\">Username can't be blank.</span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': password.touched && password.invalid }\"\n          name=\"password\" [(ngModel)]=\"model.password\" id=\"password\" required #password=\"ngModel\">\n        <span class=\"invalid-feedback\">Password can't be blank.</span>\n      </div>\n\n      <button class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"loginForm.invalid\">Login</button>\n      <button type=\"button\" class=\"btn btn-link btn-lg btn-block\" routerLink=\"/register\">Register</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/picstagram.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/picstagram/picstagram.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 offset-md-2\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<a class=\"btn btn-primary addPost\" routerLink=\"posts/add\">+</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/post-detail/post-detail.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/picstagram/post-detail/post-detail.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\" class=\"col-md-8 offset-md-2\">\n  <h3>{{post.caption | uppercase}}</h3>\n  <p>{{post.description | myUppercase}}</p>\n  <img class=\"img-thumbnail\" [src]=\"post.imageUrl\" [alt]=\"post.caption\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/post-form/post-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/picstagram/post-form/post-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add Post</h2>\n<hr>\n<form action=\"\" (submit)=\"addPost()\">\n  <div class=\"form-group\">\n    <label for=\"caption\">Caption</label>\n    <input type=\"text\" id=\"caption\" class=\"form-control\" [(ngModel)]=\"caption\" name=\"caption\" (input)=\"handleChange()\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"description\">Description</label>\n    <textarea id=\"description\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\"\n      (input)=\"handleChange()\"></textarea>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"imageUrl\">Image</label>\n    <input type=\"file\" id=\"imageUrl\" class=\"form-control-file\" (change)=\"uploadImage($event)\" />\n    <br />\n    <img *ngIf=\"imageUrl\" [src]=\"imageUrl\" [alt]=\"imageUrl\" height=\"200px\">\n  </div>\n\n  <button class=\"btn btn-primary\">Add Post</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/profile/post-list/post-item/post-item.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/picstagram/profile/post-list/post-item/post-item.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{post.caption}} <button (click)=\"remove()\" class=\"btn btn-link btn-sm\">X</button>\n<a [routerLink]=\"['posts/detail', post.id]\">\n  <img appHighlight=\"black\" class=\"img-thumbnail\" src=\"{{post.imageUrl}}\" alt=\"\">\n</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/profile/post-list/post-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/picstagram/profile/post-list/post-list.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n\n<div *ngIf=\"posts.length === 0; else postList\" class=\"alert alert-info\">No Posts to Display.</div>\n\n<ng-template #postList>\n  <div class=\"row\">\n    <div class=\"col\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query\" placeholder=\"Search...\">\n    </div>\n  </div>\n\n  <!-- <button (click)=\"handleClick()\">Click me</button> -->\n\n  <div class=\"row\">\n    <div *ngFor=\"let post of posts | search:query\" class=\"col col-md-4 mt-2\">\n      <app-post-item [post]=\"post\"></app-post-item>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/profile/profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/picstagram/profile/profile.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <app-summary></app-summary>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col\">\n    <app-post-list></app-post-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/profile/summary/summary.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/picstagram/profile/summary/summary.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col col-md-4\">\n    <img height=\"240px\" class=\"ml-4 rounded-circle\" src=\"https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1\" alt=\"\">\n  </div>\n  <div class=\"col ml-4\">\n    <h3>John Doe</h3>\n    <p>Rcu, vitae iaculis eros tristique quis. Donec efficitur nulla eu diam scelerisque mollis. Donec fermentum neque vitae mauris dictum, sodales luctus nisl aliquet. Cras tincidunt magna lacus, quis pretium purus venenatis vel. Proin rutrum ac diam eu malesuada. Duis finibus venenatis odio, a porta nisi placerat vitae. Ut porttitor au</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 offset-md-4\">\n    <h2>Register</h2>\n    <hr>\n\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerForm.valid && register()\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\"\n          [ngClass]=\"{ 'is-invalid': registerForm.get('name').touched && registerForm.get('name').invalid }\"\n          class=\"form-control\" id=\"name\" formControlName=\"name\">\n        <span class=\"invalid-feedback\">Name can't be blank.</span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\"\n          [ngClass]=\"{ 'is-invalid': registerForm.get('email').touched && registerForm.get('email').invalid }\"\n          class=\"form-control\" id=\"email\" formControlName=\"email\">\n        <span class=\"invalid-feedback\">\n          <span *ngIf=\"registerForm.get('email').hasError('required')\">Email can't be blank.</span>\n          <span *ngIf=\"registerForm.get('email').hasError('email')\">Email must be valid.</span>\n        </span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\"\n          [ngClass]=\"{ 'is-invalid': registerForm.get('username').touched && registerForm.get('username').invalid }\"\n          class=\"form-control\" id=\"username\" formControlName=\"username\">\n        <span class=\"invalid-feedback\">Username can't be blank.</span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\"\n          [ngClass]=\"{ 'is-invalid': registerForm.get('password').touched && registerForm.get('password').invalid }\"\n          class=\"form-control\" id=\"password\" formControlName=\"password\">\n        <span class=\"invalid-feedback\">\n          <span *ngIf=\"registerForm.get('password').hasError('required')\">Password can't be blank.</span>\n          <span *ngIf=\"registerForm.get('password').hasError('minlength')\">Password must have minimum\n            {{ registerForm.get('password').errors.minlength.requiredLength }} characters </span>\n          <span *ngIf=\"registerForm.get('password').hasError('symbol')\">Password must contain @ </span>\n        </span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"confirmPassword\">Confirm Password</label>\n        <input type=\"password\"\n          [ngClass]=\"{ 'is-invalid': registerForm.get('confirmPassword').dirty && registerForm.get('confirmPassword').invalid }\"\n          class=\"form-control\" id=\"confirmPassword\" formControlName=\"confirmPassword\">\n        <span class=\"invalid-feedback\">Password must match.</span>\n      </div>\n\n      <button [disabled]=\"registerForm.invalid\" class=\"btn btn-primary btn-lg btn-block\">Register</button>\n      <button type=\"button\" class=\"btn btn-link btn-lg btn-block\" routerLink=\"/login\">Back to Login</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr />\n<small>&copy; Elegant Microweb</small>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/global-alert/global-alert.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/global-alert/global-alert.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"msg !== ''\" class=\"alert alert-{{type}}\">{{msg}}</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-global-alert></app-global-alert>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/navbar/navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\">\n    <a routerLink=\"/\">\n      <img\n        src=\"data:image/png;base64,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\"\n        alt=\"\" height=\"40px\">\n      | Picstagram\n    </a>\n  </h5>\n\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <!-- <a class=\"p-2 text-dark\" href=\"#\">Features</a>\n      <a class=\"p-2 text-dark\" href=\"#\">Enterprise</a>\n      <a class=\"p-2 text-dark\" href=\"#\">Support</a>\n      <a class=\"p-2 text-dark\" href=\"#\">Pricing</a> -->\n  </nav>\n  <!-- {{ user | json }} -->\n  <a *ngIf=\"!user\" class=\"btn btn-primary btn-sm\" routerLink=\"/login\">Login</a>\n  <a *ngIf=\"!user\" class=\"btn btn-default btn-sm\" routerLink=\"/register\">Sign up</a>\n  <button *ngIf=\"user\" class=\"btn btn-danger btn-sm\" (click)=\"logout()\">Logout</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>404 - Page Not Found</h2>\n<a routerLink=\"/\">Go to Home</a>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_picstagram_picstagram_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/picstagram/picstagram.component */ "./src/app/components/picstagram/picstagram.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/page-not-found/page-not-found.component */ "./src/app/components/shared/page-not-found/page-not-found.component.ts");








const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/profile' },
    {
        path: 'profile',
        component: _components_picstagram_picstagram_component__WEBPACK_IMPORTED_MODULE_4__["PicstagramComponent"],
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./components/picstagram/picstagram.module */ "./src/app/components/picstagram/picstagram.module.ts")).then(m => m.PicstagramModule),
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: '**', component: _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'picstagram';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_picstagram_picstagram_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/picstagram/picstagram.module */ "./src/app/components/picstagram/picstagram.module.ts");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ "./src/app/interceptors/jwt.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_shared_global_alert_global_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shared/global-alert/global-alert.component */ "./src/app/components/shared/global-alert/global-alert.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shared/page-not-found/page-not-found.component */ "./src/app/components/shared/page-not-found/page-not-found.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
            _components_shared_global_alert_global_alert_component__WEBPACK_IMPORTED_MODULE_12__["GlobalAlertComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
            _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _components_picstagram_picstagram_module__WEBPACK_IMPORTED_MODULE_6__["PicstagramModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .ng-invalid {\r\n  border: 1px solid red;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm5nLWludmFsaWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufSAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, authService, messageService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.model = {};
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        // console.log('Inside login on destroy')
    }
    login() {
        this.authService.login(this.model)
            .subscribe(() => {
            this.router.navigate(['/profile']);
        }, (err) => {
            this.messageService.setMsg({ msg: 'Invalid Credentials.', type: 'danger' });
        });
        // if (this.authService.login(this.model)) {
        //   this.router.navigate(['/profile']);
        // } else {
        //   this.messageService.setMsg({ msg: 'Invalid Credentials.', type: 'danger' })
        // }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/picstagram/directives/highlight.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/picstagram/directives/highlight.directive.ts ***!
  \*************************************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HighlightDirective = class HighlightDirective {
    constructor(el) {
        this.el = el;
    }
    onMouseOver() {
        this.el.nativeElement.style.border = `2px solid ${this.color}`;
        this.el.nativeElement.style.boxShadow = `1px 1px 10px ${this.color}, 1px 1px 10px ${this.color}`;
    }
    onmouseout() {
        this.el.nativeElement.style.border = 'none';
        this.el.nativeElement.style.boxShadow = 'none';
    }
};
HighlightDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appHighlight')
], HighlightDirective.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseover')
], HighlightDirective.prototype, "onMouseOver", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseout')
], HighlightDirective.prototype, "onmouseout", null);
HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHighlight]'
    })
], HighlightDirective);



/***/ }),

/***/ "./src/app/components/picstagram/picstagram-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/picstagram/picstagram-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: PicstagramRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicstagramRoutingModule", function() { return PicstagramRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var src_app_guards_post_form_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guards/post-form.guard */ "./src/app/guards/post-form.guard.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/components/picstagram/profile/profile.component.ts");
/* harmony import */ var _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-form/post-form.component */ "./src/app/components/picstagram/post-form/post-form.component.ts");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "./src/app/components/picstagram/post-detail/post-detail.component.ts");








const routes = [
    { path: '', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'posts/add', component: _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_6__["PostFormComponent"], canDeactivate: [src_app_guards_post_form_guard__WEBPACK_IMPORTED_MODULE_4__["PostFormGuard"]] },
    { path: 'posts/detail/:id', component: _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_7__["PostDetailComponent"] }
];
let PicstagramRoutingModule = class PicstagramRoutingModule {
};
PicstagramRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PicstagramRoutingModule);



/***/ }),

/***/ "./src/app/components/picstagram/picstagram.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/picstagram/picstagram.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGljc3RhZ3JhbS9waWNzdGFncmFtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/picstagram/picstagram.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/picstagram/picstagram.component.ts ***!
  \***************************************************************/
/*! exports provided: PicstagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicstagramComponent", function() { return PicstagramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PicstagramComponent = class PicstagramComponent {
    constructor() { }
    ngOnInit() {
    }
};
PicstagramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-picstagram',
        template: __webpack_require__(/*! raw-loader!./picstagram.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/picstagram.component.html"),
        styles: [__webpack_require__(/*! ./picstagram.component.css */ "./src/app/components/picstagram/picstagram.component.css")]
    })
], PicstagramComponent);



/***/ }),

/***/ "./src/app/components/picstagram/picstagram.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/picstagram/picstagram.module.ts ***!
  \************************************************************/
/*! exports provided: PicstagramModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicstagramModule", function() { return PicstagramModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _picstagram_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./picstagram-routing.module */ "./src/app/components/picstagram/picstagram-routing.module.ts");
/* harmony import */ var _picstagram_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./picstagram.component */ "./src/app/components/picstagram/picstagram.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/components/picstagram/profile/profile.component.ts");
/* harmony import */ var _profile_summary_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/summary/summary.component */ "./src/app/components/picstagram/profile/summary/summary.component.ts");
/* harmony import */ var _profile_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/post-list/post-list.component */ "./src/app/components/picstagram/profile/post-list/post-list.component.ts");
/* harmony import */ var _profile_post_list_post_item_post_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/post-list/post-item/post-item.component */ "./src/app/components/picstagram/profile/post-list/post-item/post-item.component.ts");
/* harmony import */ var _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post-form/post-form.component */ "./src/app/components/picstagram/post-form/post-form.component.ts");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "./src/app/components/picstagram/post-detail/post-detail.component.ts");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/highlight.directive */ "./src/app/components/picstagram/directives/highlight.directive.ts");
/* harmony import */ var _pipes_my_uppercase_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/my-uppercase.pipe */ "./src/app/components/picstagram/pipes/my-uppercase.pipe.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/components/picstagram/pipes/search.pipe.ts");















let PicstagramModule = class PicstagramModule {
};
PicstagramModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _picstagram_component__WEBPACK_IMPORTED_MODULE_5__["PicstagramComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
            _profile_summary_summary_component__WEBPACK_IMPORTED_MODULE_7__["SummaryComponent"],
            _profile_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_8__["PostListComponent"],
            _profile_post_list_post_item_post_item_component__WEBPACK_IMPORTED_MODULE_9__["PostItemComponent"],
            _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_10__["PostFormComponent"],
            _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_11__["PostDetailComponent"],
            _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_12__["HighlightDirective"],
            _pipes_my_uppercase_pipe__WEBPACK_IMPORTED_MODULE_13__["MyUppercasePipe"],
            _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_14__["SearchPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _picstagram_routing_module__WEBPACK_IMPORTED_MODULE_4__["PicstagramRoutingModule"]
        ],
        exports: [
            _picstagram_component__WEBPACK_IMPORTED_MODULE_5__["PicstagramComponent"]
        ]
    })
], PicstagramModule);



/***/ }),

/***/ "./src/app/components/picstagram/pipes/my-uppercase.pipe.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/picstagram/pipes/my-uppercase.pipe.ts ***!
  \******************************************************************/
/*! exports provided: MyUppercasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyUppercasePipe", function() { return MyUppercasePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyUppercasePipe = class MyUppercasePipe {
    transform(value, ...args) {
        // return '<h2>' + value.toUpperCase() + '</h2>'; //this would not work.
        return value.toUpperCase();
    }
};
MyUppercasePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'myUppercase'
    })
], MyUppercasePipe);



/***/ }),

/***/ "./src/app/components/picstagram/pipes/search.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/components/picstagram/pipes/search.pipe.ts ***!
  \************************************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    transform(value, ...args) {
        const query = args[0];
        if (typeof query === 'undefined')
            return value;
        return value.filter((post) => {
            return post.caption.toUpperCase().indexOf(query.toUpperCase()) > -1;
        });
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/components/picstagram/post-detail/post-detail.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/picstagram/post-detail/post-detail.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGljc3RhZ3JhbS9wb3N0LWRldGFpbC9wb3N0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/picstagram/post-detail/post-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/picstagram/post-detail/post-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");




let PostDetailComponent = class PostDetailComponent {
    constructor(route, postService) {
        this.route = route;
        this.postService = postService;
        this.post = null;
    }
    ngOnInit() {
        // this.route.params.subscribe(p => console.log(p))
        const id = this.route.snapshot.params.id;
        this.postService.getSinglePost(id)
            .subscribe(post => this.post = post);
    }
};
PostDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }
];
PostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-detail',
        template: __webpack_require__(/*! raw-loader!./post-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/post-detail/post-detail.component.html"),
        styles: [__webpack_require__(/*! ./post-detail.component.css */ "./src/app/components/picstagram/post-detail/post-detail.component.css")]
    })
], PostDetailComponent);



/***/ }),

/***/ "./src/app/components/picstagram/post-form/post-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/picstagram/post-form/post-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGljc3RhZ3JhbS9wb3N0LWZvcm0vcG9zdC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/picstagram/post-form/post-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/picstagram/post-form/post-form.component.ts ***!
  \************************************************************************/
/*! exports provided: PostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFormComponent", function() { return PostFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");





let PostFormComponent = class PostFormComponent {
    constructor(postService, messageService, router) {
        this.postService = postService;
        this.messageService = messageService;
        this.router = router;
        this.caption = '';
        this.description = '';
        this.imageUrl = '';
        this.formDirty = false;
    }
    ngOnInit() {
    }
    handleChange() {
        this.formDirty = true;
    }
    uploadImage(event) {
        this.postService.uploadImage(event.target.files[0])
            .subscribe((res) => {
            this.imageUrl = res.imageUrl;
        });
    }
    addPost() {
        const data = {
            caption: this.caption,
            description: this.description,
            imageUrl: this.imageUrl
        };
        this.postService.addPost(data)
            .subscribe(() => {
            this.messageService.setMsg({ msg: 'Post Added!', type: 'success' });
            this.caption = '';
            this.description = '';
            this.imageUrl = '';
            this.formDirty = false;
            this.router.navigate(['/profile']);
        });
    }
};
PostFormComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PostFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-form',
        template: __webpack_require__(/*! raw-loader!./post-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/post-form/post-form.component.html"),
        styles: [__webpack_require__(/*! ./post-form.component.css */ "./src/app/components/picstagram/post-form/post-form.component.css")]
    })
], PostFormComponent);



/***/ }),

/***/ "./src/app/components/picstagram/profile/post-list/post-item/post-item.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/picstagram/profile/post-list/post-item/post-item.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGljc3RhZ3JhbS9wcm9maWxlL3Bvc3QtbGlzdC9wb3N0LWl0ZW0vcG9zdC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/picstagram/profile/post-list/post-item/post-item.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/picstagram/profile/post-list/post-item/post-item.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PostItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostItemComponent", function() { return PostItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");




let PostItemComponent = class PostItemComponent {
    constructor(postService, messageService) {
        this.postService = postService;
        this.messageService = messageService;
        // console.log('Inside Constructor')
    }
    ngOnChanges(changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        // console.log(changes)
    }
    ngOnInit() {
        // console.log('Inside Ng On Init')
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        // console.log('Inside On Destroy')
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        // console.log('After view init.')
    }
    remove() {
        this.postService.removePost(this.post.id).subscribe((data) => {
            this.messageService.setMsg({ msg: 'Post Deleted!', type: 'success' });
        });
    }
};
PostItemComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostItemComponent.prototype, "post", void 0);
PostItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-item',
        template: __webpack_require__(/*! raw-loader!./post-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/profile/post-list/post-item/post-item.component.html"),
        styles: [__webpack_require__(/*! ./post-item.component.css */ "./src/app/components/picstagram/profile/post-list/post-item/post-item.component.css")]
    })
], PostItemComponent);



/***/ }),

/***/ "./src/app/components/picstagram/profile/post-list/post-list.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/picstagram/profile/post-list/post-list.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGljc3RhZ3JhbS9wcm9maWxlL3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/picstagram/profile/post-list/post-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/picstagram/profile/post-list/post-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");




let PostListComponent = class PostListComponent {
    constructor(postService, messageService) {
        this.postService = postService;
        this.messageService = messageService;
        this.posts = [];
    }
    ngOnInit() {
        this.getPosts();
        this.messageService.getMsg()
            .subscribe(() => {
            this.getPosts();
        });
    }
    getPosts() {
        this.postService.getPosts()
            .subscribe((posts) => {
            this.posts = posts;
        });
    }
};
PostListComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-list',
        template: __webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/profile/post-list/post-list.component.html"),
        styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/components/picstagram/profile/post-list/post-list.component.css")]
    })
], PostListComponent);



/***/ }),

/***/ "./src/app/components/picstagram/profile/profile.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/picstagram/profile/profile.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGljc3RhZ3JhbS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/picstagram/profile/profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/picstagram/profile/profile.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/picstagram/profile/profile.component.css")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/picstagram/profile/summary/summary.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/picstagram/profile/summary/summary.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGljc3RhZ3JhbS9wcm9maWxlL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/picstagram/profile/summary/summary.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/picstagram/profile/summary/summary.component.ts ***!
  \****************************************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SummaryComponent = class SummaryComponent {
    constructor() { }
    ngOnInit() {
    }
};
SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: __webpack_require__(/*! raw-loader!./summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/picstagram/profile/summary/summary.component.html"),
        styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/components/picstagram/profile/summary/summary.component.css")]
    })
], SummaryComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _register_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.validators */ "./src/app/components/register/register.validators.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");







let RegisterComponent = class RegisterComponent {
    constructor(router, builder, authService, messageService) {
        this.router = router;
        this.builder = builder;
        this.authService = authService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.registerForm = this.builder.group({
            name: ['', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required }],
            email: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email] }],
            username: ['', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required }],
            password: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _register_validators__WEBPACK_IMPORTED_MODULE_4__["mustContainSymbol"]] }],
            confirmPassword: ''
        }, {
            validators: _register_validators__WEBPACK_IMPORTED_MODULE_4__["passwordMatch"]
        });
    }
    register() {
        this.authService.register(this.registerForm.value)
            .subscribe(() => {
            this.messageService.setMsg({ msg: 'Registration Successful! Please Login', type: 'success' });
            this.router.navigate(['/login']);
        }, () => { });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/register/register.validators.ts":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.validators.ts ***!
  \************************************************************/
/*! exports provided: passwordMatch, mustContainSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatch", function() { return passwordMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mustContainSymbol", function() { return mustContainSymbol; });
const passwordMatch = (formGroup) => {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordMatch: true });
    }
    else {
        confirmPassword.setErrors(null);
    }
};
const mustContainSymbol = (control) => {
    if (control.hasError('required'))
        return null;
    if (control.hasError('minlength') && control.errors.minlength.actualLength < 5) {
        return null;
    }
    ;
    if (control.value.indexOf('@') > -1) {
        return null;
    }
    else {
        return { symbol: true };
    }
};


/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/shared/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/shared/global-alert/global-alert.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/shared/global-alert/global-alert.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2dsb2JhbC1hbGVydC9nbG9iYWwtYWxlcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/global-alert/global-alert.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/global-alert/global-alert.component.ts ***!
  \**************************************************************************/
/*! exports provided: GlobalAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalAlertComponent", function() { return GlobalAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");



let GlobalAlertComponent = class GlobalAlertComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.msg = '';
        this.type = '';
    }
    ngOnInit() {
        this.messageService.getMsg().subscribe(data => {
            this.msg = data.msg;
            this.type = data.type;
        });
    }
};
GlobalAlertComponent.ctorParameters = () => [
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
GlobalAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-global-alert',
        template: __webpack_require__(/*! raw-loader!./global-alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/global-alert/global-alert.component.html"),
        styles: [__webpack_require__(/*! ./global-alert.component.css */ "./src/app/components/shared/global-alert/global-alert.component.css")]
    })
], GlobalAlertComponent);



/***/ }),

/***/ "./src/app/components/shared/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/shared/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let NavbarComponent = class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = null;
    }
    ngOnInit() {
        this.authService.getCurrentUserStatus()
            .subscribe((user) => {
            // console.log(user)
            this.user = user;
        });
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[app-navbar]',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/shared/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/shared/page-not-found/page-not-found.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/shared/page-not-found/page-not-found.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/shared/page-not-found/page-not-found.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/shared/page-not-found/page-not-found.component.css")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/config/api.ts":
/*!*******************************!*\
  !*** ./src/app/config/api.ts ***!
  \*******************************/
/*! exports provided: baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
const baseUrl = 'http://localhost:3000';


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate() {
        if (this.authService.checkUser()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/guards/post-form.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/post-form.guard.ts ***!
  \*******************************************/
/*! exports provided: PostFormGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFormGuard", function() { return PostFormGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostFormGuard = class PostFormGuard {
    canDeactivate(postForm) {
        if (postForm.formDirty) {
            return confirm('All Changes would be lost. Are you sure ?');
        }
        return true;
    }
};
PostFormGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostFormGuard);



/***/ }),

/***/ "./src/app/interceptors/jwt.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const user = this.authService.checkUser();
        if (user && user.token) {
            const reqWithHeaders = req.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + user.token
                }
            });
            console.log('Inside If block: JWT Interceptor');
            return next.handle(reqWithHeaders);
        }
        else {
            console.log('Inside Else block: JWT Interceptor');
            return next.handle(req);
        }
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/api */ "./src/app/config/api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.loginUrl = _config_api__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/login';
        this.registerUrl = _config_api__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/register';
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    register(userData) {
        return this.http.post(this.registerUrl, userData);
    }
    login(creds) {
        return this.http.post(this.loginUrl, creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            localStorage.setItem('user', JSON.stringify(data));
            this.subject.next(this.checkUser());
            return data;
        }));
    }
    logout() {
        localStorage.removeItem('user');
        this.subject.next(this.checkUser());
    }
    checkUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
    getCurrentUserStatus() {
        return this.subject.asObservable();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let MessageService = class MessageService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    setMsg(msg) {
        this.subject.next(msg);
        setTimeout(() => {
            this.subject.next({ msg: '' });
        }, 3000);
    }
    getMsg() {
        return this.subject.asObservable();
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_config_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/api */ "./src/app/config/api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PostService = class PostService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_app_config_api__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + '/posts';
        this.posts = [];
    }
    getSinglePost(id) {
        return this.http.get(this.apiUrl + '/' + id);
    }
    getPosts() {
        return this.http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((posts) => {
            return posts.map(post => {
                post.id = post._id;
                delete post._id;
                return post;
            });
        })); /*.pipe(
          filter((posts, index) => posts.filter(post => post.active))
        )*/
    }
    uploadImage(image) {
        const data = new FormData();
        data.append('image', image);
        return this.http.post(this.apiUrl + '/upload', data);
    }
    addPost(data) {
        data.active = true;
        data.date = new Date();
        return this.http.post(this.apiUrl, data);
    }
    removePost(id) {
        return this.http.delete(this.apiUrl + '/' + id);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ravi\Desktop\Elegant\NodeJS\Day21\picstagram\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map