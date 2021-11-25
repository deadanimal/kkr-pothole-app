(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_core_global_info_info_module_ts"],{

/***/ 4150:
/*!*********************************************************!*\
  !*** ./src/app/core/global/info/info-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageRoutingModule": () => (/* binding */ InfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.page */ 48143);




const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_0__.InfoPage
    }
];
let InfoPageRoutingModule = class InfoPageRoutingModule {
};
InfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InfoPageRoutingModule);



/***/ }),

/***/ 14676:
/*!*************************************************!*\
  !*** ./src/app/core/global/info/info.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageModule": () => (/* binding */ InfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-routing.module */ 4150);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.page */ 48143);







let InfoPageModule = class InfoPageModule {
};
InfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _info_routing_module__WEBPACK_IMPORTED_MODULE_0__.InfoPageRoutingModule
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_1__.InfoPage]
    })
], InfoPageModule);



/***/ }),

/***/ 48143:
/*!***********************************************!*\
  !*** ./src/app/core/global/info/info.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPage": () => (/* binding */ InfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./info.page.html */ 21196);
/* harmony import */ var _info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.page.scss */ 50418);
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





let InfoPage = class InfoPage {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() { }
    logout() {
        this.authService.logout();
    }
};
InfoPage.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
InfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-info',
        template: _raw_loader_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InfoPage);



/***/ }),

/***/ 50418:
/*!*************************************************!*\
  !*** ./src/app/core/global/info/info.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background {\n  background: url('bg-login.png') no-repeat center/cover fixed;\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: var(--ion-color-primary);\n  position: absolute;\n  top: 5px;\n}\n\nion-card {\n  margin: 100px 10px 10px 10px;\n  border-radius: 10px;\n}\n\nion-card ion-card-title {\n  --color: var(--ion-color-primary);\n}\n\nion-button {\n  --border-radius: 19px;\n  width: 70%;\n  margin: 30px 10px 30px;\n  text-align: center;\n}\n\nh3,\nh4 {\n  font-weight: 500;\n  margin-bottom: 0;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0RBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVFO0VBQ0UsaUNBQUE7QUFBSjs7QUFLQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTs7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFGRiIsImZpbGUiOiJpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmctbG9naW4ucG5nKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xuICB6LWluZGV4OiAtMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMTAwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cblxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG5cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTlweDtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAzMHB4IDEwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMyxcbmg0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 21196:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/global/info/info.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button href=\"/dashboard\" >\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"background\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col>\n          <ion-card class=\"ion-padding\">\n            <ion-card-header>\n              <ion-card-title>PERHATIAN</ion-card-title>\n              <p align=\"justify\">Sila baca nota penting di bawah, sebelum membuat dan menghantar aduan anda.\n              </p>\n            </ion-card-header>\n            <ion-card-content>\n              <h3>1. Konfigurasi</h3>\n              <p align=\"justify\">Gunakan \"High Accuracy Mode\" bagi Location konfigurasi dalam telefon bimbit anda. Ini\n                membolehkan\n                lokasi anda dapat direkod dengan lebih tepat semasa membuat aduan. Sila rujuk gambarajah dibawah sebagai\n                panduan.</p>\n              <br>\n              <h3>2. Peringatan</h3>\n              <p align=\"justify\">Menggunakan telefon bimbit ketika memandu adalah salah di sisi undang-undang. Membuat\n                aduan jalan raya menggunakan aplikasi ini ketika memandu adalah dilarang dan boleh mengundang kepada\n                kemalangan jalan raya.</p>\n            </ion-card-content>\n          </ion-card>\n          <br>\n          <div class=\"ion-text-center\">\n            <ion-button href=\"/create-aduan\">\n              <ion-icon slot=\"start\" name=\"create-outline\"></ion-icon>\n              Daftar Aduan\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_core_global_info_info_module_ts.js.map