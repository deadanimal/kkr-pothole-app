(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_core_user_list_aduan-list_aduan-list_module_ts"],{

/***/ 75636:
/*!************************************************************************!*\
  !*** ./src/app/core/user/list/aduan-list/aduan-list-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanListPageRoutingModule": () => (/* binding */ AduanListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aduan_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduan-list.page */ 59918);




const routes = [
    {
        path: '',
        component: _aduan_list_page__WEBPACK_IMPORTED_MODULE_0__.AduanListPage
    }
];
let AduanListPageRoutingModule = class AduanListPageRoutingModule {
};
AduanListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AduanListPageRoutingModule);



/***/ }),

/***/ 99954:
/*!****************************************************************!*\
  !*** ./src/app/core/user/list/aduan-list/aduan-list.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanListPageModule": () => (/* binding */ AduanListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _aduan_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduan-list-routing.module */ 75636);
/* harmony import */ var _aduan_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduan-list.page */ 59918);








let AduanListPageModule = class AduanListPageModule {
};
AduanListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _aduan_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.AduanListPageRoutingModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule
        ],
        declarations: [_aduan_list_page__WEBPACK_IMPORTED_MODULE_1__.AduanListPage]
    })
], AduanListPageModule);



/***/ }),

/***/ 59918:
/*!**************************************************************!*\
  !*** ./src/app/core/user/list/aduan-list/aduan-list.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanListPage": () => (/* binding */ AduanListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_aduan_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aduan-list.page.html */ 96630);
/* harmony import */ var _aduan_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduan-list.page.scss */ 75997);
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _shared_services_aduan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../shared/services/aduan.service */ 51162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _assets_data_aduanlist_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../assets/data/aduanlist.json */ 69590);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_modal_aduan_detail_aduan_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modal/aduan-detail/aduan-detail.page */ 20282);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88002);





/* eslint-disable @typescript-eslint/no-shadow */





let AduanListPage = class AduanListPage {
    constructor(authService, modalCtrl, aduanService, loadingCtrl) {
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.aduanService = aduanService;
        this.loadingCtrl = loadingCtrl;
        this.aduans = _assets_data_aduanlist_json__WEBPACK_IMPORTED_MODULE_4__;
        console.log(this.aduans);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({ message: 'Loading...' });
            loading.present();
            this.aduans$ = this.aduanService.getAduans().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((aduans) => {
                loading.dismiss();
                console.log('Aduans:', aduans);
                return aduans;
            }));
        });
    }
    openDetailModal(aduan) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_modal_aduan_detail_aduan_detail_page__WEBPACK_IMPORTED_MODULE_5__.AduanDetailPage,
                componentProps: { aduan },
            });
            yield modal.present();
            const { data: updatedAduan, role } = yield modal.onDidDismiss();
            if (updatedAduan && role === 'edit') {
                this.aduans$ = this.aduans$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((aduans) => {
                    aduans.forEach((element) => {
                        if (element.id === updatedAduan.id) {
                            element = updatedAduan;
                        }
                        return element;
                    });
                    return aduans;
                }));
            }
            if (role === 'delete') {
                this.aduans$ = this.aduans$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((aduans) => {
                    aduans.filter((adu) => adu.id !== updatedAduan.id);
                    return aduans;
                }));
            }
        });
    }
    logout() {
        this.authService.logout();
    }
};
AduanListPage.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _shared_services_aduan_service__WEBPACK_IMPORTED_MODULE_3__.AduanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController }
];
AduanListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-aduan-list',
        template: _raw_loader_aduan_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aduan_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AduanListPage);



/***/ }),

/***/ 75997:
/*!****************************************************************!*\
  !*** ./src/app/core/user/list/aduan-list/aduan-list.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background {\n  background-image: url('bg-login.png');\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\nion-card {\n  border-radius: 20px;\n  background: linear-gradient(var(--ion-color-primary), #cad3dcfc);\n}\n\nion-card ion-card-title {\n  color: white;\n  font-size: medium;\n}\n\nion-list {\n  background-color: transparent;\n  margin-top: 80px;\n  margin: 80px 30px 10px;\n}\n\n.text-limit {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: whitesmoke;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: var(--ion-color-primary);\n  position: absolute;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdWFuLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxnRUFBQTtBQUNGOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdEQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFBRiIsImZpbGUiOiJhZHVhbi1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmctbG9naW4ucG5nKTtcbiAgei1pbmRleDogLTE7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLCAjY2FkM2RjZmMpO1xuXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gIH1cbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgbWFyZ2luOiA4MHB4IDMwcHggMTBweDtcbn1cblxuLnRleHQtbGltaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogd2hpdGVzbW9rZVxufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xufVxuIl19 */");

/***/ }),

/***/ 96630:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/list/aduan-list/aduan-list.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button href=\"/dashboard\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title mode=\"ios\">Status Aduan</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\" class=\"background\">\n    <ion-list>\n      <ion-card *ngFor=\"let aduan of aduans$|async\" (click)=\"openDetailModal(aduan)\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n              <ion-card-content>\n                <ion-card-title>{{aduan.title}}</ion-card-title>\n                <span class=\"text-limit\">{{aduan.detail}}</span>\n              </ion-card-content>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-badge color=\"success\" mode=\"ios\">Selesai</ion-badge>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-list>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 69590:
/*!****************************************!*\
  !*** ./src/assets/data/aduanlist.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"complaint_title":"Pothole di tgh jalan","kategori_jalan_aduan":"Lebuhraya","negeri_aduan":"Selangor","poskod":"89823"},{"complaint_title":"Pothole di tepi simpang","kategori_jalan_aduan":"Simpang Jalan","negeri_aduan":"Penang"},{"complaint_title":"Pothole di sana sini","kategori_jalan_aduan":"Jalanraya","negeri_aduan":"Perak"},{"complaint_title":"Pothole besar","kategori_jalan_aduan":"Lebuhraya","negeri_aduan":"Kelantan"},{"complaint_title":"Pothole tajam","kategori_jalan_aduan":"Lebuhraya","negeri_aduan":"Kuala Lumpur"}]');

/***/ })

}]);
//# sourceMappingURL=src_app_core_user_list_aduan-list_aduan-list_module_ts.js.map