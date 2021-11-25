(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_core_user_create_create-aduan_create-aduan_module_ts"],{

/***/ 55373:
/*!******************************************************************************!*\
  !*** ./src/app/core/user/create/create-aduan/create-aduan-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAduanPageRoutingModule": () => (/* binding */ CreateAduanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _create_aduan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-aduan.page */ 86461);





const routes = [
    {
        path: '',
        component: _create_aduan_page__WEBPACK_IMPORTED_MODULE_0__.CreateAduanPage
    }
];
let CreateAduanPageRoutingModule = class CreateAduanPageRoutingModule {
};
CreateAduanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], CreateAduanPageRoutingModule);



/***/ }),

/***/ 7542:
/*!**********************************************************************!*\
  !*** ./src/app/core/user/create/create-aduan/create-aduan.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAduanPageModule": () => (/* binding */ CreateAduanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _create_aduan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-aduan-routing.module */ 55373);
/* harmony import */ var _create_aduan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-aduan.page */ 86461);







let CreateAduanPageModule = class CreateAduanPageModule {
};
CreateAduanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_aduan_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateAduanPageRoutingModule
        ],
        declarations: [_create_aduan_page__WEBPACK_IMPORTED_MODULE_1__.CreateAduanPage]
    })
], CreateAduanPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_core_user_create_create-aduan_create-aduan_module_ts.js.map