(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_modal_aduan-detail_aduan-detail_module_ts"],{

/***/ 51711:
/*!*******************************************************************!*\
  !*** ./src/app/modal/aduan-detail/aduan-detail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanDetailPageRoutingModule": () => (/* binding */ AduanDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aduan_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduan-detail.page */ 20282);




const routes = [
    {
        path: '',
        component: _aduan_detail_page__WEBPACK_IMPORTED_MODULE_0__.AduanDetailPage
    }
];
let AduanDetailPageRoutingModule = class AduanDetailPageRoutingModule {
};
AduanDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AduanDetailPageRoutingModule);



/***/ }),

/***/ 45430:
/*!***********************************************************!*\
  !*** ./src/app/modal/aduan-detail/aduan-detail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanDetailPageModule": () => (/* binding */ AduanDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _aduan_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduan-detail-routing.module */ 51711);
/* harmony import */ var _aduan_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduan-detail.page */ 20282);







let AduanDetailPageModule = class AduanDetailPageModule {
};
AduanDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _aduan_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.AduanDetailPageRoutingModule
        ],
        declarations: [_aduan_detail_page__WEBPACK_IMPORTED_MODULE_1__.AduanDetailPage]
    })
], AduanDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modal_aduan-detail_aduan-detail_module_ts.js.map