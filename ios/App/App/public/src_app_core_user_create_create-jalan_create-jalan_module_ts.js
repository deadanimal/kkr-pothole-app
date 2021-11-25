(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_core_user_create_create-jalan_create-jalan_module_ts"],{

/***/ 92300:
/*!******************************************************************************!*\
  !*** ./src/app/core/user/create/create-jalan/create-jalan-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateJalanPageRoutingModule": () => (/* binding */ CreateJalanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _create_jalan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-jalan.page */ 11617);





const routes = [
    {
        path: '',
        component: _create_jalan_page__WEBPACK_IMPORTED_MODULE_0__.CreateJalanPage,
    },
];
let CreateJalanPageRoutingModule = class CreateJalanPageRoutingModule {
};
CreateJalanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], CreateJalanPageRoutingModule);



/***/ }),

/***/ 26049:
/*!**********************************************************************!*\
  !*** ./src/app/core/user/create/create-jalan/create-jalan.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateJalanPageModule": () => (/* binding */ CreateJalanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _create_jalan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-jalan-routing.module */ 92300);
/* harmony import */ var _create_jalan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-jalan.page */ 11617);







let CreateJalanPageModule = class CreateJalanPageModule {
};
CreateJalanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_jalan_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateJalanPageRoutingModule
        ],
        declarations: [_create_jalan_page__WEBPACK_IMPORTED_MODULE_1__.CreateJalanPage]
    })
], CreateJalanPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_core_user_create_create-jalan_create-jalan_module_ts.js.map