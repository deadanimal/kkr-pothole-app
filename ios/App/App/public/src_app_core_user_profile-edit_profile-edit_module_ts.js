(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_core_user_profile-edit_profile-edit_module_ts"],{

/***/ 75333:
/*!***********************************************************************!*\
  !*** ./src/app/core/user/profile-edit/profile-edit-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditPageRoutingModule": () => (/* binding */ ProfileEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-edit.page */ 85028);




const routes = [
    {
        path: '',
        component: _profile_edit_page__WEBPACK_IMPORTED_MODULE_0__.ProfileEditPage
    }
];
let ProfileEditPageRoutingModule = class ProfileEditPageRoutingModule {
};
ProfileEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileEditPageRoutingModule);



/***/ }),

/***/ 3026:
/*!***************************************************************!*\
  !*** ./src/app/core/user/profile-edit/profile-edit.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditPageModule": () => (/* binding */ ProfileEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-edit-routing.module */ 75333);
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit.page */ 85028);







let ProfileEditPageModule = class ProfileEditPageModule {
};
ProfileEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileEditPageRoutingModule
        ],
        declarations: [_profile_edit_page__WEBPACK_IMPORTED_MODULE_1__.ProfileEditPage]
    })
], ProfileEditPageModule);



/***/ }),

/***/ 85028:
/*!*************************************************************!*\
  !*** ./src/app/core/user/profile-edit/profile-edit.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditPage": () => (/* binding */ ProfileEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile-edit.page.html */ 40963);
/* harmony import */ var _profile_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit.page.scss */ 15510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ProfileEditPage = class ProfileEditPage {
    constructor() { }
    ngOnInit() {
    }
};
ProfileEditPage.ctorParameters = () => [];
ProfileEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile-edit',
        template: _raw_loader_profile_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfileEditPage);



/***/ }),

/***/ 15510:
/*!***************************************************************!*\
  !*** ./src/app/core/user/profile-edit/profile-edit.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\nion-content ion-button {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\nion-toolbar {\n  --background: transparent;\n}\nion-chip {\n  --background: #9dc912;\n  --color: #fff;\n}\n.card {\n  margin: 0 auto;\n}\n.card .header {\n  height: 200px;\n}\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  border: 6px solid #129ec9;\n  background-color: #fff;\n}\n.card-body {\n  background-color: #7c7c7c;\n  padding: 30px;\n  height: calc(100vh - (150px + 56px));\n  overflow: hidden;\n}\n.card-body .user-meta {\n  padding-top: 40px;\n}\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #ffffff;\n  text-transform: uppercase;\n}\n.card-body .user-meta .email {\n  font-size: 100%;\n  color: #bbbbbb;\n  margin: 0 auto;\n}\nion-item {\n  border-radius: 1rem;\n  margin-bottom: 0.7rem;\n}\nion-label {\n  --ion-text-color:rgb(180, 149, 209);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7QUFFRTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUFOO0FBSUE7RUFDRSx5QkFBQTtBQURGO0FBSUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFERjtBQUlBO0VBQ0UsY0FBQTtBQURGO0FBR0U7RUFDSSxhQUFBO0FBRE47QUFHTTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRFY7QUFHVTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBRGQ7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFKRjtBQU1FO0VBQ0ksaUJBQUE7QUFKTjtBQU1NO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBSlY7QUFPTTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUxWO0FBVUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBUEY7QUFTQTtFQUNFLG1DQUFBO0FBTkYiLCJmaWxlIjoicHJvZmlsZS1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi9hc3NldHMvaW1nL2xhbmRvLmpwZWcpIG5vLXJlcGVhdCB0b3AgY2VudGVyL2NvdmVyIGZpeGVkLCAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW1cbiAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jaGlwIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOWRjOTEyO1xuICAtLWNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIC5oZWFkZXIge1xuICAgICAgaGVpZ2h0OiAyMDBweDsgLy8gMjB2aDtcblxuICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDE2MHB4OyAvLzQwdndcbiAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgNHB4KSk7IC8vIC00MnB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDZweCBzb2xpZCAjMTI5ZWM5O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjN2M3YztcbiAgcGFkZGluZzogMzBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDE1MHB4ICsgNTZweCkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC51c2VyLW1ldGEge1xuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgICAgIC5wbGF5ZXJuYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuXG4gICAgICAuZW1haWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICBjb2xvcjogI2JiYmJiYjtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgfVxufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IC43cmVtO1xufVxuaW9uLWxhYmVse1xuICAtLWlvbi10ZXh0LWNvbG9yOnJnYigxODAsIDE0OSwgMjA5KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 40963:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/profile-edit/profile-edit.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Kemaskini Profil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Kemaskini Profil</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <div class=\"card\">\n      <div class=\"header\">\n        <div class=\"avatar\">\n          <img src=\"../../assets/img/default_icon.jpeg\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"user-meta ion-text-center\">\n          <ion-item>\n            <ion-input name=\"complaint_detail\" type=\"text\" value=\"Azlan Zawawi\" disabled>\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input name=\"complaint_detail\" type=\"text\" value=\"Orang Awam\" disabled>\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input name=\"complaint_detail\" type=\"text\" value=\"017456789\" placeholder=\"No Telefon\">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input name=\"complaint_detail\" type=\"text\" value=\"Tutup pothole\" placeholder=\"Keterangan Pengguna\">\n            </ion-input>\n          </ion-item>\n\n        </div>\n\n        <ion-button expand=\"block\" size=\"medium\" color=\"secondary\">Simpan</ion-button>\n\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_core_user_profile-edit_profile-edit_module_ts.js.map