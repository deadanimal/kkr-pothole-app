(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_core_user_create_create-user_create-user_module_ts"],{

/***/ 41407:
/*!****************************************************************************!*\
  !*** ./src/app/core/user/create/create-user/create-user-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserPageRoutingModule": () => (/* binding */ CreateUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _create_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-user.page */ 1049);




const routes = [
    {
        path: '',
        component: _create_user_page__WEBPACK_IMPORTED_MODULE_0__.CreateUserPage
    }
];
let CreateUserPageRoutingModule = class CreateUserPageRoutingModule {
};
CreateUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateUserPageRoutingModule);



/***/ }),

/***/ 70209:
/*!********************************************************************!*\
  !*** ./src/app/core/user/create/create-user/create-user.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserPageModule": () => (/* binding */ CreateUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _create_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-user-routing.module */ 41407);
/* harmony import */ var _create_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user.page */ 1049);







let CreateUserPageModule = class CreateUserPageModule {
};
CreateUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateUserPageRoutingModule
        ],
        declarations: [_create_user_page__WEBPACK_IMPORTED_MODULE_1__.CreateUserPage]
    })
], CreateUserPageModule);



/***/ }),

/***/ 1049:
/*!******************************************************************!*\
  !*** ./src/app/core/user/create/create-user/create-user.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserPage": () => (/* binding */ CreateUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_create_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-user.page.html */ 13763);
/* harmony import */ var _create_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user.page.scss */ 71322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let CreateUserPage = class CreateUserPage {
    constructor() { }
    ngOnInit() {
    }
};
CreateUserPage.ctorParameters = () => [];
CreateUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-create-user',
        template: _raw_loader_create_user_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_user_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateUserPage);



/***/ }),

/***/ 71322:
/*!********************************************************************!*\
  !*** ./src/app/core/user/create/create-user/create-user.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  border-radius: 0.5rem;\n  margin-bottom: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJjcmVhdGUtdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAuN3JlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 13763:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/create/create-user/create-user.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Tambah Pengguna</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tambah Pengguna</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <form #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n            <div padding>\n              <ion-item>\n                <ion-label position=\"floating\">Nama Penuh</ion-label>\n                <ion-input name=\"name\" type=\"text\" placeholder=\"Nama\" ngModel required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Emel</ion-label>\n                <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\" ngModel required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Telefon Bimbit</ion-label>\n                <ion-input name=\"no_tel\" type=\"text\" placeholder=\"No Telefon Anda\" ngModel required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Jenis Pengguna</ion-label>\n                <ion-input name=\"no_tel\" type=\"text\" placeholder=\"Pilih Pengguna\" ngModel required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Keterangan Pengguna</ion-label>\n                <ion-input name=\"no_tel\" type=\"text\" placeholder=\"Masukkan Keterangan Pengguna\" ngModel required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Kata Laluan</ion-label>\n                <ion-input name=\"password\" type=\"password\" placeholder=\"Masukkkan Kata Laluan\" ngModel required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Sahkan Kata Laluan</ion-label>\n                <ion-input name=\"confirm\" type=\"password\" placeholder=\"Masukkkan Kata Laluan sama diatas\" ngModel required></ion-input>\n              </ion-item>\n            </div>\n            <div padding>\n              <ion-button size=\"medium\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Tambah</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_core_user_create_create-user_create-user_module_ts.js.map