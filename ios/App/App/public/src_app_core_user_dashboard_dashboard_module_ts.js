(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_core_user_dashboard_dashboard_module_ts"],{

/***/ 53752:
/*!*****************************************************************!*\
  !*** ./src/app/core/user/dashboard/dashboard-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 10273);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 58950:
/*!*********************************************************!*\
  !*** ./src/app/core/user/dashboard/dashboard.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 53752);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 10273);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 10273:
/*!*******************************************************!*\
  !*** ./src/app/core/user/dashboard/dashboard.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 90213);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 20925);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);



/* eslint-disable @typescript-eslint/naming-convention */



let DashboardPage = class DashboardPage {
    constructor(geolocation, loadingCtrl, zone) {
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
    }
    ngOnInit() { }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({ message: 'Loading...' });
            loading.present();
            this.googleMap();
            if (this.googleMap) {
                loading.dismiss();
            }
        });
    }
    // 3.0738, 101.5183
    addMarker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.myMarker = new google.maps.Marker({
                map: this.map,
                // animation: google.maps.Animation.DROP,
                position: this.map.getCenter(),
                draggable: false,
            });
            const content = '<p>' + this.address + '</p>';
            console.log(this.address, this.map.center.lat());
            yield this.addInfoWindow(this.myMarker, content);
        });
    }
    addInfoWindow(marker, content) {
        this.infoWindow = new google.maps.InfoWindow({
            content,
        });
        google.maps.event.addListener(marker, 'click', () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.infoWindow.open({
                anchor: marker,
                map: this.map,
                shouldFocus: false,
            });
            yield this.infoWindow.setContent('<p>' + this.address + '</p>');
            console.log(this.address);
        }));
    }
    googleMap() {
        this.geolocation
            .getCurrentPosition()
            .then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            const mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                zoomControl: false,
                scaleControl: false,
                streetViewControl: false,
                fullscreenControl: false,
            };
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.addMarker();
            this.map.addListener('drag', () => {
                this.latitude = this.map.center.lat();
                this.longitude = this.map.center.lng();
                this.myMarker.setPosition(this.map.getCenter());
                this.infoWindow.close();
            });
            this.map.addListener('dragend', () => {
                this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
            });
        })
            .catch((error) => {
            console.log('Error getting location', error);
        });
    }
    getAddressFromCoords(lattitude, longitude) {
        console.log('getAddressFromCoords :' + lattitude + ',' + longitude);
        const latlng = new google.maps.LatLng(lattitude, longitude);
        // This is making the Geocode request
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ latLng: latlng }, (results, status) => {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status === google.maps.GeocoderStatus.OK) {
                this.address = results[0].formatted_address;
                console.log(this.address);
            }
        });
    }
    getCurrentCoords() {
        this.geolocation
            .getCurrentPosition()
            .then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            const pos = {
                zoom: 14,
                lat: resp.coords.latitude,
                lng: resp.coords.longitude,
            };
            const content = '<p>' + this.address + '</p>';
            this.infoWindow.setContent(content);
            this.map.setCenter(pos);
            this.myMarker.setPosition(pos);
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
        })
            .catch((error) => {
            console.log('Error getting location', error);
        });
    }
    //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
    UpdateSearchResults() {
        if (this.autocomplete.input === '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, (predictions, status) => {
            this.autocompleteItems = [];
            this.zone.run(() => {
                predictions.forEach((prediction) => {
                    this.autocompleteItems.push(prediction);
                });
            });
        });
    }
    //wE CALL THIS FROM EACH ITEM.
    SelectSearchResult(item) {
        // this.clearMarkers();
        this.autocompleteItems = [];
        this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({ placeId: item.place_id }, (results, status) => {
            if (status === 'OK' && results[0]) {
                const position = {
                    lat: results[0].geometry.location.lat,
                    lng: results[0].geometry.location.lng,
                };
                this.myMarker.setPosition(results[0].geometry.location);
                // const marker = new google.maps.Marker({
                //   position: results[0].geometry.location,
                //   map: this.map,
                // });
                this.map.setCenter(results[0].geometry.location);
            }
        });
        // alert(JSON.stringify(item));
        // this.placeid = item.place_id;
    }
    clearMarkers() {
        throw new Error('Method not implemented.');
    }
    //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
    ClearAutocomplete() {
        this.autocompleteItems = [];
        this.autocomplete.input = '';
    }
    //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
    GoTo() {
        return (window.location.href =
            'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' +
                this.placeid);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone }
];
DashboardPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['map', { static: false },] }]
};
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 20925:
/*!*********************************************************!*\
  !*** ./src/app/core/user/dashboard/dashboard.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#map {\n  min-height: 100%;\n}\n\nion-tab-bar {\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  background: var(--ion-color-primary);\n  align-self: center;\n  border-radius: 23px;\n  margin: 0 10px 25px;\n  padding: 10px 0;\n}\n\nion-tab-bar ion-tab-button {\n  background: var(--ion-color-primary);\n  color: white;\n}\n\nion-toolbar {\n  position: absolute;\n  top: 13px;\n  width: 90%;\n  align-self: center;\n  border-radius: 23px;\n  margin: 25s 17px 0;\n  padding: 5px 5px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-toolbar ion-searchbar {\n  --border-radius: 10px;\n  box-shadow: none;\n}\n\nion-toolbar .sc-ion-searchbar-md-h {\n  --box-shadow: none !important ;\n}\n\nion-toolbar .sc-ion-searchbar-ios-h {\n  padding: 1px 4px;\n  height: 52px;\n}\n\nion-toolbar ion-item {\n  --background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNFO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpSEFBQTtBQUFGOztBQUVFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsOEJBQUE7QUFESjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtFO0VBQ0UsMENBQUE7QUFISiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBtYXJnaW46IDAgMTBweCAyNXB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG5cbiAgaW9uLXRhYi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTNweDtcbiAgd2lkdGg6IDkwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBtYXJnaW46IDI1cyAxN3B4IDA7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcbiAgfVxuXG4gIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIHtcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xuICAgIGhlaWdodDogNTJweDtcbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 90213:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/dashboard/dashboard.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-tabs>\n    <ion-toolbar>\n      <ion-searchbar [(ngModel)]=\"autocomplete.input\" (ionInput)=\"UpdateSearchResults()\"\n        placeholder=\"Search for a place\" (ionClear)=\"ClearAutocomplete()\"></ion-searchbar>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"getCurrentCoords()\" color=\"primary\">\n          <ion-icon slot=\"icon-only\" name=\"locate-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n      <ion-list [hidden]=\"autocompleteItems.length === 0\">\n        <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\n          {{ item.description }}\n        </ion-item>\n      </ion-list>\n    </ion-toolbar>\n\n    <!-- <div>Address: {{address}}</div>\n    <div>Latitude: {{latitude}}</div>\n    <div>Longitude: {{longitude}}</div> -->\n    <div #map id=\"map\"></div>\n\n    <ion-tab-bar slot=\"bottom\" color-primary>\n      <ion-tab-button href=\"/profile\">\n        <ion-icon name=\"person-outline\"></ion-icon>\n        <ion-label>Profil</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button href=\"/info\">\n        <ion-icon name=\"receipt-outline\"></ion-icon>\n        <ion-label>Aduan</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button href=\"/aduan-list\">\n        <ion-icon name=\"desktop-outline\"></ion-icon>\n        <ion-label>Status</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button href=\"/jalan-list\">\n        <ion-icon name=\"megaphone-outline\"></ion-icon>\n        <ion-label>Hebahan</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_core_user_dashboard_dashboard_module_ts.js.map