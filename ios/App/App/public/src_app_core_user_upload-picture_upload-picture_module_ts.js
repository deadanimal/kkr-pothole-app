(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_core_user_upload-picture_upload-picture_module_ts"],{

/***/ 63184:
/*!***************************************************************************!*\
  !*** ./src/app/core/user/upload-picture/upload-picture-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPicturePageRoutingModule": () => (/* binding */ UploadPicturePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _upload_picture_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-picture.page */ 91829);




const routes = [
    {
        path: '',
        component: _upload_picture_page__WEBPACK_IMPORTED_MODULE_0__.UploadPicturePage
    }
];
let UploadPicturePageRoutingModule = class UploadPicturePageRoutingModule {
};
UploadPicturePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UploadPicturePageRoutingModule);



/***/ }),

/***/ 58991:
/*!*******************************************************************!*\
  !*** ./src/app/core/user/upload-picture/upload-picture.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPicturePageModule": () => (/* binding */ UploadPicturePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _upload_picture_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-picture-routing.module */ 63184);
/* harmony import */ var _upload_picture_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-picture.page */ 91829);







let UploadPicturePageModule = class UploadPicturePageModule {
};
UploadPicturePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _upload_picture_routing_module__WEBPACK_IMPORTED_MODULE_0__.UploadPicturePageRoutingModule
        ],
        declarations: [_upload_picture_page__WEBPACK_IMPORTED_MODULE_1__.UploadPicturePage]
    })
], UploadPicturePageModule);



/***/ }),

/***/ 91829:
/*!*****************************************************************!*\
  !*** ./src/app/core/user/upload-picture/upload-picture.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPicturePage": () => (/* binding */ UploadPicturePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_upload_picture_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./upload-picture.page.html */ 36735);
/* harmony import */ var _upload_picture_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-picture.page.scss */ 32620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let UploadPicturePage = class UploadPicturePage {
    constructor() { }
    ngOnInit() {
    }
};
UploadPicturePage.ctorParameters = () => [];
UploadPicturePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-upload-picture',
        template: _raw_loader_upload_picture_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_upload_picture_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UploadPicturePage);



/***/ }),

/***/ 32620:
/*!*******************************************************************!*\
  !*** ./src/app/core/user/upload-picture/upload-picture.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtcGljdHVyZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 36735:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/upload-picture/upload-picture.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button href=\"/dashboard\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-title>{{isEditMode ? 'Kemaskini':'Daftar'}} Aduan</ion-title> -->\n    <ion-buttons slot=\"end\" *ngIf=\"!isEditMode\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"isEditMode\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-content>\n    <div #map2 id=\"map2\"></div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"gambarForm\">\n        <ion-grid>\n          <ion-row color=\"primary\" justify-content-center>\n            <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n              <div padding>\n                <ion-item>\n                  <ion-label>Gambar Aduan</ion-label>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"6\" *ngFor=\"let photo of photoService.photos; index as position\">\n                        <ion-img [src]=\"photo.webviewPath\"></ion-img>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                  <ion-button round (click)=\"addPhotoToGallery()\" slot=\"end\">\n                    <ion-icon name=\"camera\"></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </div>\n              <br>\n              <div padding>\n                <ion-button size=\"medium\" [disabled]=\"gambarForm.invalid\" (click)=\"submitAduan()\" expand=\"block\">\n                 Seterusnya</ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n\n  </ion-content>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_core_user_upload-picture_upload-picture_module_ts.js.map