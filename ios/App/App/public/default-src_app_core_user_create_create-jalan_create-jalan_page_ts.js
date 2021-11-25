(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["default-src_app_core_user_create_create-jalan_create-jalan_page_ts"],{

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

/***/ 11617:
/*!********************************************************************!*\
  !*** ./src/app/core/user/create/create-jalan/create-jalan.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateJalanPage": () => (/* binding */ CreateJalanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_create_jalan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-jalan.page.html */ 28025);
/* harmony import */ var _create_jalan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-jalan.page.scss */ 99348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/photo/photo.service */ 27287);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var src_app_shared_services_jalan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/jalan.service */ 75837);




/* eslint-disable @typescript-eslint/naming-convention */





let CreateJalanPage = class CreateJalanPage {
    constructor(photoService, formBuilder, jalanService, loadingCtrl, modalCtrl) {
        this.photoService = photoService;
        this.formBuilder = formBuilder;
        this.jalanService = jalanService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.isEditMode = false;
    }
    ngOnInit() {
        // await this.photoService.loadSaved();
        this.initAddJalanForm();
        console.log('jalan data', this.jalanForm.value);
        if (this.jalan) {
            this.isEditMode = true;
            this.setFormValues();
        }
    }
    initAddJalanForm() {
        this.jalanForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            response_party: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            // alamat: new FormControl(null, [Validators.required]),
            // daerah: new FormControl(null, [Validators.required]),
            // negeri: new FormControl(null, [Validators.required]),
            // poskod: new FormControl(null, [Validators.required]),
            admin_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
        });
    }
    setFormValues() {
        this.jalanForm.setValue({
            name: this.jalan.name,
            detail: this.jalan.detail,
            status: this.jalan.status,
            start_date: this.jalan.start_date,
            end_date: this.jalan.end_date,
            response_party: this.jalan.response_party,
            // alamat: this.jalan.alamat,
            // daerah: this.jalan.daerah,
            // negeri: this.jalan.negeri,
            // poskod: this.jalan.poskod,
            admin_id: this.jalan.admin_id,
        });
    }
    submitJalan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({ message: 'Loading ...' });
            loading.present();
            let response;
            console.log('JALAN :', this.jalanForm.value);
            if (this.isEditMode) {
                response = this.jalanService.updateJalan(this.jalan.id, this.jalanForm.value);
            }
            else {
                response = this.jalanService.addJalan(this.jalanForm.value);
            }
            response.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe((jalan) => {
                console.log(jalan);
                this.jalanForm.reset();
                loading.dismiss();
                if (this.isEditMode) {
                    this.closeModal(jalan);
                }
            });
        });
    }
    closeModal(data = null) {
        this.modalCtrl.dismiss(data);
    }
    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
};
CreateJalanPage.ctorParameters = () => [
    { type: _shared_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_shared_services_jalan_service__WEBPACK_IMPORTED_MODULE_3__.JalanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
CreateJalanPage.propDecorators = {
    jalan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
CreateJalanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-create-jalan',
        template: _raw_loader_create_jalan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_jalan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateJalanPage);



/***/ }),

/***/ 75837:
/*!**************************************************!*\
  !*** ./src/app/shared/services/jalan.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JalanService": () => (/* binding */ JalanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let JalanService = class JalanService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://kkr-pothole-stg.prototype.com.my/api';
    }
    getJalans() {
        return this.http.get(`${this.apiUrl}/jalan`);
    }
    addJalan(jalan) {
        return this.http.post(`${this.apiUrl}/jalan/`, jalan);
    }
    updateJalan(aduanId, jalan) {
        return this.http.put(`${this.apiUrl}/jalan/${aduanId}`, jalan);
    }
    deleteJalan(aduanId) {
        return this.http.delete(`${this.apiUrl}/jalan/${aduanId}`);
    }
};
JalanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
JalanService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], JalanService);



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

/***/ 99348:
/*!**********************************************************************!*\
  !*** ./src/app/core/user/create/create-jalan/create-jalan.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtamFsYW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 28025:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/create/create-jalan/create-jalan.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{isEditMode ? 'Kemaskini':'Daftar'}} Jalan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\">\n    <form [formGroup]=\"jalanForm\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n            <div padding>\n\n              <ion-item>\n                <ion-label position=\"floating\">Nama Jalan</ion-label>\n                <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Nama Jalan\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Keterangan Jalan</ion-label>\n                <ion-input formControlName=\"detail\" type=\"text\" placeholder=\"Nyatakan Keadaan Jalan\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Status</ion-label>\n                <ion-input formControlName=\"status\" type=\"text\" placeholder=\"Nyatakan Status Jalan\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Tarikh Mula</ion-label>\n                <ion-input formControlName=\"start_date\" type=\"date\" placeholder=\"Pilih\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Tarikh Akhir</ion-label>\n                <ion-input formControlName=\"end_date\" type=\"date\" placeholder=\"Pilih\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Pihak Bertanggungjawab</ion-label>\n                <ion-input formControlName=\"response_party\" type=\"text\" placeholder=\"Nyatakan Pihak\"></ion-input>\n              </ion-item>\n            </div>\n            <div padding>\n              <ion-button size=\"medium\" (click)=\"submitJalan()\" [disabled]=\"jalanForm.invalid\" expand=\"block\">\n                {{isEditMode ? 'Kemaskini':'Daftar'}}</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_user_create_create-jalan_create-jalan_page_ts.js.map