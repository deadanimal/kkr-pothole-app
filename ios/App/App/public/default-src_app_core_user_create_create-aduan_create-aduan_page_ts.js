(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["default-src_app_core_user_create_create-aduan_create-aduan_page_ts"],{

/***/ 64021:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 37673:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 64021);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 14028)).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 45458:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* binding */ Directory),
/* harmony export */   "Encoding": () => (/* binding */ Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* binding */ FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* binding */ FilesystemEncoding)
/* harmony export */ });
var Directory;
(function (Directory) {
    /**
     * The Documents directory
     * On iOS it's the app's documents directory.
     * Use this directory to store user-generated content.
     * On Android it's the Public Documents folder, so it's accessible from other apps.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`.
     * It's not accesible on Android 11 or newer.
     *
     * @since 1.0.0
     */
    Directory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     * On iOS it will use the Documents directory
     * On Android it's the directory holding application files.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.0.0
     */
    Directory["Data"] = "DATA";
    /**
     * The Cache directory
     * Can be deleted in cases of low memory, so use this directory to write app-specific files
     * that your app can re-create easily.
     *
     * @since 1.0.0
     */
    Directory["Cache"] = "CACHE";
    /**
     * The external directory
     * On iOS it will use the Documents directory
     * On Android it's the directory on the primary shared/external
     * storage device where the application can place persistent files it owns.
     * These files are internal to the applications, and not typically visible
     * to the user as media.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.0.0
     */
    Directory["External"] = "EXTERNAL";
    /**
     * The external storage directory
     * On iOS it will use the Documents directory
     * On Android it's the primary shared/external storage directory.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`.
     * It's not accesible on Android 11 or newer.
     *
     * @since 1.0.0
     */
    Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));
var Encoding;
(function (Encoding) {
    /**
     * Eight-bit UCS Transformation Format
     *
     * @since 1.0.0
     */
    Encoding["UTF8"] = "utf8";
    /**
     * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
     * Unicode character set
     * This encoding is only supported on Android.
     *
     * @since 1.0.0
     */
    Encoding["ASCII"] = "ascii";
    /**
     * Sixteen-bit UCS Transformation Format, byte order identified by an
     * optional byte-order mark
     * This encoding is only supported on Android.
     *
     * @since 1.0.0
     */
    Encoding["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */
const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */
const FilesystemEncoding = Encoding;
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 61977:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory),
/* harmony export */   "Encoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding),
/* harmony export */   "Filesystem": () => (/* binding */ Filesystem)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 45458);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 85143)).then(m => new m.FilesystemWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 86461:
/*!********************************************************************!*\
  !*** ./src/app/core/user/create/create-aduan/create-aduan.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAduanPage": () => (/* binding */ CreateAduanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_create_aduan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-aduan.page.html */ 55717);
/* harmony import */ var _create_aduan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-aduan.page.scss */ 84845);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/photo/photo.service */ 27287);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var src_app_shared_services_aduan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/aduan.service */ 51162);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 15257);




/* eslint-disable @typescript-eslint/naming-convention */







let CreateAduanPage = class CreateAduanPage {
    constructor(photoService, geolocation, nativeGeocoder, formBuilder, aduanService, loadingCtrl, modalCtrl) {
        this.photoService = photoService;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.formBuilder = formBuilder;
        this.aduanService = aduanService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.isEditMode = false;
    }
    ngOnInit() {
        // await this.photoService.loadSaved();
        this.initAddAduanForm();
        console.log('aduan data', this.aduanForm.value);
        if (this.aduan) {
            this.isEditMode = true;
            this.setFormValues();
        }
    }
    initAddAduanForm() {
        this.aduanForm = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            gambar_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null),
            pengadu_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null),
            latitud: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.latitude),
            langitud: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.latitude),
        });
    }
    setFormValues() {
        this.aduanForm.setValue({
            title: this.aduan.title,
            detail: this.aduan.detail,
            gambar_id: this.aduan.gambar_id,
            pengadu_id: this.aduan.pengadu_id,
            latitud: this.aduan.latitud,
            langitud: this.aduan.langitud,
        });
    }
    setLatLng() {
        this.aduanForm.patchValue({
            latitud: this.latitude,
            langitud: this.longitude,
        });
    }
    submitAduan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({ message: 'Loading ...' });
            loading.present();
            let response;
            this.setLatLng();
            if (this.isEditMode) {
                response = this.aduanService.updateAduan(this.aduan.id, this.aduanForm.value);
            }
            else {
                response = this.aduanService.addAduan(this.aduanForm.value);
            }
            response.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe((aduan) => {
                console.log(aduan);
                this.aduanForm.reset();
                loading.dismiss();
                if (this.isEditMode) {
                    this.closeModal(aduan);
                }
            });
        });
    }
    closeModal(data = null) {
        this.modalCtrl.dismiss(data);
    }
    ionViewWillEnter() {
        this.googleMap();
    }
    // ============  GOOGLE MAPS =============
    addMarker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.myMarker = new google.maps.Marker({
                map: this.map2,
                // animation: google.maps.Animation.DROP,
                position: this.map2.getCenter(),
                draggable: false,
            });
            const content = '<p>' + this.address + '</p>';
            console.log(this.address, this.map2.center.lat());
            yield this.addInfoWindow(this.myMarker, content);
        });
    }
    addInfoWindow(marker, content) {
        this.infoWindow = new google.maps.InfoWindow({
            content,
        });
        google.maps.event.addListener(marker, 'click', () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.infoWindow.open({
                anchor: marker,
                map: this.map2,
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
            this.map2 = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.addMarker();
            this.map2.addListener('drag', () => {
                this.latitude = this.map2.center.lat();
                this.longitude = this.map2.center.lng();
                this.myMarker.setPosition(this.map2.getCenter());
                this.infoWindow.close();
            });
            this.map2.addListener('dragend', () => {
                this.getAddressFromCoords(this.map2.center.lat(), this.map2.center.lng());
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
            this.map2.setCenter(pos);
            this.myMarker.setPosition(pos);
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
        })
            .catch((error) => {
            console.log('Error getting location', error);
        });
    }
    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
};
CreateAduanPage.ctorParameters = () => [
    { type: _shared_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_shared_services_aduan_service__WEBPACK_IMPORTED_MODULE_5__.AduanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
CreateAduanPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['map2', { static: false },] }],
    aduan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
CreateAduanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-create-aduan',
        template: _raw_loader_create_aduan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_aduan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateAduanPage);



/***/ }),

/***/ 51162:
/*!**************************************************!*\
  !*** ./src/app/shared/services/aduan.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanService": () => (/* binding */ AduanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let AduanService = class AduanService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://kkr-pothole-stg.prototype.com.my/api';
    }
    getAduans() {
        return this.http.get(`${this.apiUrl}/aduan`);
    }
    addAduan(aduan) {
        return this.http.post(`${this.apiUrl}/aduan/`, aduan);
    }
    updateAduan(aduanId, aduan) {
        return this.http.put(`${this.apiUrl}/aduan/${aduanId}`, aduan);
    }
    deleteAduan(aduanId) {
        return this.http.delete(`${this.apiUrl}/aduan/${aduanId}`);
    }
};
AduanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
AduanService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], AduanService);



/***/ }),

/***/ 27287:
/*!********************************************************!*\
  !*** ./src/app/shared/services/photo/photo.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/camera */ 37673);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 61977);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/member-ordering */





let PhotoService = class PhotoService {
    constructor(platform) {
        this.photos = [];
        this.PHOTO_STORAGE = 'photos';
        // Save picture to file on device
        // private async savePicture(cameraPhoto: CameraPhoto) {
        //   // Convert photo to base64 format, required by Filesystem API to save
        //   const base64Data = await this.readAsBase64(cameraPhoto);
        //   // Write the file to the data directory
        //   const fileName = new Date().getTime() + '.jpeg';
        //   const savedFile = await Filesystem.writeFile({
        //     path: fileName,
        //     data: base64Data,
        //     directory: Directory.Data
        //   });
        //   if (this.platform.is('hybrid')) {
        //     // Display the new image by rewriting the 'file://' path to HTTP
        //     // Details: https://ionicframework.com/docs/building/webview#file-protocol
        //     return {
        //       filepath: savedFile.uri,
        //       webviewPath: Capacitor.convertFileSrc(savedFile.uri),
        //     };
        //   }
        //   else {
        //     // Use webPath to display the new image instead of base64 since it's
        //     // already loaded into memory
        //     return {
        //       filepath: fileName,
        //       webviewPath: cameraPhoto.webPath
        //     };
        //   }
        // }
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        this.platform = platform;
    }
    addNewToGallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                quality: 100,
            });
            this.photos.unshift({
                filepath: 'soon...',
                webviewPath: capturedPhoto.webPath
            });
            // // Save the picture and add it to photo collection
            // const savedImageFile = await this.savePicture(capturedPhoto);
            // this.photos.unshift(savedImageFile);
            // Storage.set({
            //   key: this.PHOTO_STORAGE,
            //   value: JSON.stringify(this.photos),
            // });
        });
    }
    loadSaved() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Retrieve cached photo array data
            const photoList = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: this.PHOTO_STORAGE });
            this.photos = JSON.parse(photoList.value) || [];
            // Easiest way to detect when running on the web:
            // “when the platform is NOT hybrid, do this”
            if (!this.platform.is('hybrid')) {
                // Display the photo by reading into base64 format
                for (const photo of this.photos) {
                    // Read each saved photo's data from the Filesystem
                    const readFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
                        path: photo.filepath,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Data
                    });
                    // Web platform only: Load the photo as base64 data
                    photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
                }
            }
        });
    }
    readAsBase64(cameraPhoto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // "hybrid" will detect Cordova or Capacitor
            if (this.platform.is('hybrid')) {
                // Read the file into base64 format
                const file = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
                    path: cameraPhoto.path
                });
                return file.data;
            }
            else {
                // Fetch the photo, read as a blob, then convert to base64 format
                const response = yield fetch(cameraPhoto.webPath);
                const blob = yield response.blob();
                return yield this.convertBlobToBase64(blob);
            }
        });
    }
};
PhotoService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], PhotoService);



/***/ }),

/***/ 84845:
/*!**********************************************************************!*\
  !*** ./src/app/core/user/create/create-aduan/create-aduan.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  border-radius: 18px;\n  margin-bottom: 0.7rem;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: var(--ion-color-primary);\n  position: absolute;\n  top: 5px;\n}\n\n#map2 {\n  height: 75%;\n  width: 100%;\n}\n\n.card-body {\n  background: linear-gradient(var(--ion-color-primary), #b6c0cafc);\n  padding: 20px;\n  width: 100%;\n  overflow: hidden;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 2.5rem;\n  border-top-right-radius: 2.5rem;\n}\n\nion-button {\n  --border-radius: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hZHVhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnREFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0VBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUdBO0VBQ0UscUJBQUE7QUFBRiIsImZpbGUiOiJjcmVhdGUtYWR1YW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAuN3JlbTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbn1cblxuI21hcDIge1xuICBoZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLCAjYjZjMGNhZmMpO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIuNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIuNXJlbTtcblxufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOXB4O1xufVxuIl19 */");

/***/ }),

/***/ 55717:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/create/create-aduan/create-aduan.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button href=\"/dashboard\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-title>{{isEditMode ? 'Kemaskini':'Daftar'}} Aduan</ion-title> -->\n    <ion-buttons slot=\"end\" *ngIf=\"!isEditMode\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"isEditMode\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-content>\n    <div #map2 id=\"map2\"></div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"aduanForm\">\n        <ion-grid>\n          <ion-row color=\"primary\" justify-content-center>\n            <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n              <div padding>\n                <!-- <ion-item>\n                  <ion-label>Gambar Aduan</ion-label>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"6\" *ngFor=\"let photo of photoService.photos; index as position\">\n                        <ion-img [src]=\"photo.webviewPath\"></ion-img>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                  <ion-button round (click)=\"addPhotoToGallery()\" slot=\"end\">\n                    <ion-icon name=\"camera\"></ion-icon>\n                  </ion-button>\n                </ion-item> -->\n                <ion-item>\n                  <ion-input formControlName=\"title\" type=\"text\" placeholder=\"Tajuk Aduan\">\n                  </ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-textarea formControlName=\"detail\" type=\"text\" placeholder=\"Keterangan Aduan\">\n                  </ion-textarea>\n                </ion-item>\n              </div>\n              <br>\n              <div padding>\n                <ion-button size=\"medium\" [disabled]=\"aduanForm.invalid\" (click)=\"submitAduan()\" expand=\"block\">\n                 Seterusnya</ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n\n  </ion-content>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_user_create_create-aduan_create-aduan_page_ts.js.map