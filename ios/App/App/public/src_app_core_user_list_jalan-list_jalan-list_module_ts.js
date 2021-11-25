(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_core_user_list_jalan-list_jalan-list_module_ts"],{

/***/ 49980:
/*!************************************************************************!*\
  !*** ./src/app/core/user/list/jalan-list/jalan-list-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JalanListPageRoutingModule": () => (/* binding */ JalanListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _jalan_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jalan-list.page */ 70140);




const routes = [
    {
        path: '',
        component: _jalan_list_page__WEBPACK_IMPORTED_MODULE_0__.JalanListPage
    }
];
let JalanListPageRoutingModule = class JalanListPageRoutingModule {
};
JalanListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JalanListPageRoutingModule);



/***/ }),

/***/ 97264:
/*!****************************************************************!*\
  !*** ./src/app/core/user/list/jalan-list/jalan-list.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JalanListPageModule": () => (/* binding */ JalanListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _jalan_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jalan-list-routing.module */ 49980);
/* harmony import */ var _jalan_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jalan-list.page */ 70140);







let JalanListPageModule = class JalanListPageModule {
};
JalanListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _jalan_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.JalanListPageRoutingModule
        ],
        declarations: [_jalan_list_page__WEBPACK_IMPORTED_MODULE_1__.JalanListPage]
    })
], JalanListPageModule);



/***/ }),

/***/ 70140:
/*!**************************************************************!*\
  !*** ./src/app/core/user/list/jalan-list/jalan-list.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JalanListPage": () => (/* binding */ JalanListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_jalan_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./jalan-list.page.html */ 17733);
/* harmony import */ var _jalan_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jalan-list.page.scss */ 86809);
/* harmony import */ var _shared_services_jalan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/services/jalan.service */ 75837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_modal_jalan_detail_jalan_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modal/jalan-detail/jalan-detail.page */ 50838);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88002);




/* eslint-disable @typescript-eslint/no-shadow */




let JalanListPage = class JalanListPage {
    constructor(modalCtrl, jalanService, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.jalanService = jalanService;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({ message: 'Loading...' });
            loading.present();
            this.jalans$ = this.jalanService.getJalans().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((jalans) => {
                loading.dismiss();
                console.log('jalans:', jalans);
                return jalans;
            }));
        });
    }
    openDetailModal(jalan) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_modal_jalan_detail_jalan_detail_page__WEBPACK_IMPORTED_MODULE_3__.JalanDetailPage,
                componentProps: { jalan },
            });
            yield modal.present();
            const { data: updatedJalan, role } = yield modal.onDidDismiss();
            if (updatedJalan && role === 'edit') {
                this.jalans$ = this.jalans$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((jalans) => {
                    jalans.forEach((element) => {
                        if (element.id === updatedJalan.id) {
                            element = updatedJalan;
                        }
                        return element;
                    });
                    return jalans;
                }));
            }
            if (role === 'delete') {
                this.jalans$ = this.jalans$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((jalans) => {
                    jalans.filter((adu) => adu.id !== updatedJalan.id);
                    return jalans;
                }));
            }
        });
    }
};
JalanListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _shared_services_jalan_service__WEBPACK_IMPORTED_MODULE_2__.JalanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
JalanListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-jalan-list',
        template: _raw_loader_jalan_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_jalan_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], JalanListPage);



/***/ }),

/***/ 86809:
/*!****************************************************************!*\
  !*** ./src/app/core/user/list/jalan-list/jalan-list.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background {\n  background-image: url('bg-login.png');\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\nion-list {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphbGFuLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFHQTtFQUNFLDZCQUFBO0FBQUYiLCJmaWxlIjoiamFsYW4tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JnLWxvZ2luLnBuZyk7XG4gIHotaW5kZXg6IC0xO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIl19 */");

/***/ }),

/***/ 17733:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/list/jalan-list/jalan-list.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Senarai Jalan</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button href=\"/create-jalan\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\" class=\"background\">\n    <ion-list>\n      <ion-card *ngFor=\"let jalan of jalans$|async\" (click)=\"openDetailModal(jalan)\" color=\"light\">\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"3\">\n              <ion-thumbnail>\n                <img src=\"https://c8.alamy.com/comp/B3MXEK/broken-road-B3MXEK.jpg\" alt=\"img\" />\n              </ion-thumbnail>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-label>\n                <p>{{jalan.detail}}</p>\n                <ion-badge color=\"tertiary\">{{jalan.status}}</ion-badge>\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-list>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_core_user_list_jalan-list_jalan-list_module_ts.js.map