(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _image_comparer_image_comparer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-comparer/image-comparer.component */ "./src/app/image-comparer/image-comparer.component.ts");






const routes = [
    { path: 'edit/:id', component: _image_comparer_image_comparer_component__WEBPACK_IMPORTED_MODULE_3__["ImageComparerComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"] },
    { path: '', redirectTo: '/gallery', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'desize';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[1, "navbar", "navbar-dark", "bg-dark"], [1, "container-fluid"], [1, "navbar-brand", 3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Desize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _image_comparer_image_comparer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-comparer/image-comparer.component */ "./src/app/image-comparer/image-comparer.component.ts");
/* harmony import */ var _pipes_percent_with_sign_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/percent-with-sign.pipe */ "./src/app/pipes/percent-with-sign.pipe.ts");
/* harmony import */ var _pipes_bytes_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/bytes.pipe */ "./src/app/pipes/bytes.pipe.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/safe.pipe */ "./src/app/pipes/safe.pipe.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _image_comparer_image_comparer_component__WEBPACK_IMPORTED_MODULE_5__["ImageComparerComponent"],
        _pipes_percent_with_sign_pipe__WEBPACK_IMPORTED_MODULE_6__["PercentWithSignPipe"],
        _pipes_bytes_pipe__WEBPACK_IMPORTED_MODULE_7__["BytesPipe"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"],
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _image_comparer_image_comparer_component__WEBPACK_IMPORTED_MODULE_5__["ImageComparerComponent"],
                    _pipes_percent_with_sign_pipe__WEBPACK_IMPORTED_MODULE_6__["PercentWithSignPipe"],
                    _pipes_bytes_pipe__WEBPACK_IMPORTED_MODULE_7__["BytesPipe"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"],
                    _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _libs_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/selection */ "./src/app/libs/selection.js");
/* harmony import */ var _services_image_compression_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/image-compression.service */ "./src/app/services/image-compression.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_bytes_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/bytes.pipe */ "./src/app/pipes/bytes.pipe.ts");








function GalleryComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.handleImgFrameClick(item_r2.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Output Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "bytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + item_r2.value.original.url + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r1.selected[item_r2.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-id", item_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, item_r2.value.quality / 100), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 9, item_r2.value.compressed.f.size, "MB"), "");
} }
const DOUBLECLICK_THRESHHOLD = 200;
class GalleryComponent {
    constructor(imgService, route) {
        this.imgService = imgService;
        this.route = route;
        this.images = {};
        this.selected = {};
        this.clickTimer = {};
        this.imageCounter = 0;
        this.lastClick = 0;
        this.quality = 100;
        this.busy = false;
        console.log('gallery.component constructor');
    }
    clickTest() {
        let now = new Date().valueOf();
        console.log(`current time: ${now}, time between last and now: ${now - this.lastClick}`);
        this.lastClick = now;
    }
    handleApplyQuality() {
        if (this.busy)
            return;
        this.busy = true;
        let imgsToApply = Object.keys(this.selected).filter(id => this.selected[id]);
        imgsToApply.map(id => this.imgService.compressImg(Number(id), this.quality));
        Promise.all(imgsToApply)
            .then(() => {
            this.busy = false;
        });
    }
    handleImgFrameClick(imgId) {
        console.log('handleImgFrameClick:', imgId);
        let now = new Date().valueOf();
        let last = this.clickTimer[imgId];
        // is this a double click event? 
        if (last && now - last < DOUBLECLICK_THRESHHOLD) {
            this.route.navigateByUrl('/edit/' + imgId);
        }
        this.clickTimer[imgId] = now;
    }
    handleFileSelect() {
        const input = document.getElementById('fileselector');
        if (input.files.length < 1)
            return;
        for (let i = 0; i < input.files.length; i++) {
            this.imgService.addImg(input.files[i]);
        }
    }
    ngOnInit() {
        console.log('gallery.component OnInit');
        let selection = Object(_libs_selection__WEBPACK_IMPORTED_MODULE_1__["default"])({
            class: 'selection',
            frame: document,
            selectables: ['.img-frame'],
            boundaries: ['.img-container']
        }).on('start', ({ inst, selected, oe }) => {
            // Remove class if the user isn't pressing the control key or ⌘ key
            if (!oe.ctrlKey && !oe.metaKey) {
                // Unselect all elements
                for (const el of selected) {
                    let imgId = +el.getAttribute('data-id');
                    this.selected[imgId] = false;
                }
                // Clear previous selection
                inst.clearSelection();
            }
        }).on('move', ({ changed: { removed, added } }) => {
            // Add a custom class to the elements that where selected.
            for (const el of added) {
                let imgId = +el.getAttribute('data-id');
                this.selected[imgId] = true;
            }
            // Remove the class from elements that where removed
            // since the last selection
            for (const el of removed) {
                let imgId = +el.getAttribute('data-id');
                this.selected[imgId] = false;
            }
        }).on('stop', ({ inst }) => {
            // Remember selection in case the user wants to add smth in the next one
            inst.keepSelection();
        });
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_compression_service__WEBPACK_IMPORTED_MODULE_2__["ImageCompressionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 11, vars: 4, consts: [[1, "gallery-container", 3, "click"], ["id", "fileselector", "type", "file", "multiple", "", 3, "input"], ["fileselector", ""], ["type", "number", "min", "0", "max", "100", "id", "quality", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-dark", "ml-3", 3, "click"], [1, "img-container"], ["class", "img-frame", 3, "selected", "background-image", "click", 4, "ngFor", "ngForOf"], [1, "img-frame", 3, "click"], [1, "attribute-label"], [1, "mr-3"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_div_click_0_listener() { return ctx.clickTest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function GalleryComponent_Template_input_input_1_listener() { return ctx.handleFileSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quality: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GalleryComponent_Template_input_ngModelChange_5_listener($event) { return ctx.quality = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_button_click_6_listener() { return ctx.handleApplyQuality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GalleryComponent_div_9_Template, 12, 12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quality);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 2, ctx.imgService.getImgs()));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["PercentPipe"], _pipes_bytes_pipe__WEBPACK_IMPORTED_MODULE_6__["BytesPipe"]], styles: [".gallery-container[_ngcontent-%COMP%] {\n  padding: 10px 20px 10px 20px;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n}\n\n.img-frame[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  margin: 10px 10px 0px 10px;\n  width: 375px;\n  height: 300px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border: 1px solid #C4C4C4;\n}\n\n.img-frame.selected[_ngcontent-%COMP%] {\n  border: 1px solid #5296FC;\n}\n\n.img-frame.selected[_ngcontent-%COMP%]   .attribute-label[_ngcontent-%COMP%] {\n  background-color: #D7E7FF;\n}\n\n.img-frame[_ngcontent-%COMP%]   .attribute-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  width: 100%;\n  padding: 6px 10px 6px 10px;\n  font-size: 14px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBR0U7RUFDRSx5QkFBQTtBQURKOztBQUdJO0VBQ0UseUJBakJNO0FBZ0JaOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnktY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbn1cblxuLmltZy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuJGhpZ2hsaWdodDogI0Q3RTdGRjtcblxuLmltZy1mcmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDtcbiAgd2lkdGg6IDM3NXB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDNEM0QzQ7XG5cbiAgJi5zZWxlY3RlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUyOTZGQztcblxuICAgIC5hdHRyaWJ1dGUtbGFiZWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodDtcbiAgICB9XG4gIH1cblxuICAuYXR0cmlidXRlLWxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDZweCAxMHB4IDZweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.scss']
            }]
    }], function () { return [{ type: _services_image_compression_service__WEBPACK_IMPORTED_MODULE_2__["ImageCompressionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/helpers/canvas.ts":
/*!***********************************!*\
  !*** ./src/app/helpers/canvas.ts ***!
  \***********************************/
/*! exports provided: drawImage, toJPEG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawImage", function() { return drawImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJPEG", function() { return toJPEG; });
function getInnerWidth(e) {
    var styles = window.getComputedStyle(e);
    var padding = parseFloat(styles.paddingLeft) +
        parseFloat(styles.paddingRight);
    return e.clientWidth - padding;
}
function drawImage(canvas, url, resize = true) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = url;
        img.onload = function () {
            if (resize) {
                // set canvas to width for the parents element (not including padding/margin)
                var dWidth = getInnerWidth(canvas.parentElement);
                var dHeight = dWidth / img.width * img.height;
                // image should not exceed a portion of the screen
                if (dHeight > window.innerHeight * 0.8) {
                    dHeight = window.innerHeight * 0.8;
                    dWidth = dHeight / img.height * img.width;
                }
            }
            else {
                var dWidth = img.width;
                var dHeight = img.height;
            }
            canvas.width = dWidth;
            canvas.height = dHeight;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, dWidth, dHeight);
            resolve();
        };
    });
}
function toJPEG(canvas, quality) {
    return new Promise((resolve, reject) => {
        if (quality < 0 || quality > 100)
            reject(new Error(`jpeg quality should be between 0 to 100, got ${quality}`));
        canvas.toBlob(resolve, 'image/jpeg', quality / 100);
    });
}


/***/ }),

/***/ "./src/app/image-comparer/image-comparer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/image-comparer/image-comparer.component.ts ***!
  \************************************************************/
/*! exports provided: ImageComparerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComparerComponent", function() { return ImageComparerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _helpers_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/canvas */ "./src/app/helpers/canvas.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_image_compression_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/image-compression.service */ "./src/app/services/image-compression.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pipes_bytes_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/bytes.pipe */ "./src/app/pipes/bytes.pipe.ts");
/* harmony import */ var _pipes_percent_with_sign_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/percent-with-sign.pipe */ "./src/app/pipes/percent-with-sign.pipe.ts");








const _c0 = function () { return { "compare": "Compare View", "y": "Y View" }; };
class ImageComparerComponent {
    constructor(route, ref, imgService) {
        this.route = route;
        this.ref = ref;
        this.imgService = imgService;
        /* control fields */
        this.quality = 85;
        this.outputNameField = 'output';
        this.viewMode = 'y';
    }
    getOGFileSize() {
        return this.imageInfo ? this.imageInfo.original.f.size : -1;
    }
    getCPFileSize() {
        return this.imageInfo ? this.imageInfo.compressed.f.size : -1;
    }
    getFileDifference() {
        return (this.imageInfo.compressed.f.size - this.imageInfo.original.f.size) / this.imageInfo.original.f.size;
    }
    getCurrentViewModel() {
        return this.viewMode;
    }
    selectedImg() {
        return this.imageInfo != undefined;
    }
    drawView() {
        if (!this.imageInfo)
            return;
        switch (this.viewMode) {
            case 'compare':
                Object(_helpers_canvas__WEBPACK_IMPORTED_MODULE_1__["drawImage"])(this.compareXCanvas, this.imageInfo.original.url);
                Object(_helpers_canvas__WEBPACK_IMPORTED_MODULE_1__["drawImage"])(this.compareYCanvas, this.imageInfo.compressed.url);
            case 'y':
                Object(_helpers_canvas__WEBPACK_IMPORTED_MODULE_1__["drawImage"])(this.YCanvas, this.imageInfo.compressed.url);
            case 'vertical':
        }
    }
    handleDownload() {
        var a = document.createElement('a');
        a.download = this.outputNameField + '.jpeg';
        a.href = this.imageInfo.compressed.url;
        a.click();
        a.remove();
    }
    handleQualityChange() {
        this.imgService.compressImg(this.imageInfo.imgId, this.quality)
            .then((info) => {
            this.imageInfo = info;
            this.drawView();
        });
    }
    handleViewChange(mode) {
        if (mode === this.viewMode) {
            return;
        }
        this.viewMode = mode;
        this.drawView();
    }
    handleChangeImg(orderReversed = false) {
        this.imgId = this.imgService.getNextImg(this.imgId, orderReversed);
        this.imageInfo = this.imgService.getImg(this.imgId);
        this.outputNameField = `${this.imageInfo.original.f.name.split('.')[0]}-compressed`;
        this.quality = this.imageInfo.quality;
        this.drawView();
    }
    imgFileSelectHandler() {
        var fileInput = document.getElementById('file-selector');
        var file = fileInput.files[0];
        console.log(file);
        if (file.type !== 'image/jpeg') {
            alert(`${file.name} is not a JPEG file`);
            return;
        }
        this.imageInfo = this.imgService.addImg(file);
        this.outputNameField = `${file.name.split('.')[0]}-compressed`;
        this.drawView();
    }
    ngOnInit() {
        this.compareXCanvas = document.getElementById('before');
        this.compareYCanvas = document.getElementById('after');
        this.YCanvas = document.getElementById('y-canvas');
        // resize images appropriately if view size changes
        window.addEventListener('resize', this.drawView);
        this.imgId = +this.route.snapshot.paramMap.get('id');
        this.imageInfo = this.imgService.getImg(this.imgId);
        this.outputNameField = `${this.imageInfo.original.f.name.split('.')[0]}-compressed`;
        this.quality = this.imageInfo.quality;
        this.drawView();
    }
}
ImageComparerComponent.ɵfac = function ImageComparerComponent_Factory(t) { return new (t || ImageComparerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_compression_service__WEBPACK_IMPORTED_MODULE_3__["ImageCompressionService"])); };
ImageComparerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageComparerComponent, selectors: [["image-comparer"]], decls: 47, vars: 23, consts: [[1, "edit-container"], [1, "view-selection", "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-lg", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "image-comparer-container"], [1, "container"], [1, "container", 3, "hidden"], [1, "row", "gx-3", "justify-content-md-center"], [1, "col-md"], [1, "align-content-center"], ["id", "y-canvas"], [1, "row", "gx-5", "justify-content-md-center"], [1, "col-md-6", "col-lg-6"], ["id", "before"], ["id", "after"], [1, "vertical-split-line", "hidden-md"], ["id", "input-canvas", "hidden", ""], [1, "pos-fixed", "left", "center", "next-btn", "ml-2", 3, "hidden", "click"], [1, "fas", "fa-arrow-alt-circle-left"], [1, "pos-fixed", "right", "center", "next-btn", "mr-2", 3, "hidden", "click"], [1, "fas", "fa-arrow-alt-circle-right"], [1, "control-bar"], [1, "control-bar-row", "align-content-center"], [1, "pop-up"], [1, "control-bar-row", "quality-selector", "input-group"], ["type", "range", "min", "0", "max", "100", "id", "quality", 1, "form-range", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "0", "max", "100", "id", "quality", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [1, "input-group-text"], [1, "pos-fixed", "right", "bottom"], [1, "download-control", 3, "click"], [1, "fas", "fa-download"]], template: function ImageComparerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageComparerComponent_Template_a_click_6_listener() { return ctx.handleViewChange("compare"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Compare View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageComparerComponent_Template_a_click_9_listener() { return ctx.handleViewChange("y"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Y View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "canvas", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "canvas", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "canvas", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageComparerComponent_Template_div_click_28_listener() { return ctx.handleChangeImg(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageComparerComponent_Template_div_click_30_listener() { return ctx.handleChangeImg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "bytes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "bytes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "percentWithSign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ImageComparerComponent_Template_input_ngModelChange_40_listener($event) { return ctx.quality = $event; })("change", function ImageComparerComponent_Template_input_change_40_listener() { return ctx.handleQualityChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ImageComparerComponent_Template_input_ngModelChange_41_listener($event) { return ctx.quality = $event; })("change", function ImageComparerComponent_Template_input_change_41_listener() { return ctx.handleQualityChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageComparerComponent_Template_div_click_45_listener() { return ctx.handleDownload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0)[ctx.viewMode], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.getCurrentViewModel() !== "y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.getCurrentViewModel() !== "compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.imgService.isFirstImg(ctx.imgId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.imgService.isLastImg(ctx.imgId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("red", ctx.getFileDifference() > 0)("green", ctx.getFileDifference() < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 14, ctx.getCPFileSize(), "KB"), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 17, ctx.getOGFileSize(), "KB"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 20, ctx.getFileDifference()), ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quality);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quality);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], pipes: [_pipes_bytes_pipe__WEBPACK_IMPORTED_MODULE_5__["BytesPipe"], _pipes_percent_with_sign_pipe__WEBPACK_IMPORTED_MODULE_6__["PercentWithSignPipe"]], styles: [".edit-container[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #ECECEC;\n  height: 100%;\n}\n\n.image-comparer-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 30px;\n  padding-bottom: 10px;\n}\n\n.vertical-split-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  width: 3px;\n  padding: 0;\n  background-color: #C4C4C4;\n}\n\n.hidden-md[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .hidden-md[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.pop-up[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 10px 20px 10px 20px;\n  background-color: #C4C4C4;\n  color: #505050;\n}\n\n.pop-up.green[_ngcontent-%COMP%] {\n  background-color: rgba(165, 255, 151, 0.84);\n  color: #0F6F00;\n}\n\n.pop-up.red[_ngcontent-%COMP%] {\n  background-color: rgba(244, 176, 176, 0.84);\n  color: #A80000;\n}\n\n\n\n.pos-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\n.pos-fixed.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.pos-fixed.center[_ngcontent-%COMP%] {\n  top: 50%;\n}\n\n.pos-fixed.bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\n.pos-fixed.right[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.align-content-center[_ngcontent-%COMP%], .quality-selector[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-wrapper[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n\n\n.control-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n\n.control-bar[_ngcontent-%COMP%]   .control-bar-row[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.download-control[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  padding: 8px 13px 18px 13px;\n  margin: 0 10px 10px 0;\n  background-color: #505050;\n}\n\n.download-control[_ngcontent-%COMP%]:hover {\n  background-color: #C4C4C4;\n  cursor: pointer;\n}\n\n.next-btn[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.next-btn[_ngcontent-%COMP%]:hover {\n  color: #5296FC;\n  cursor: pointer;\n}\n\n.quality-selector[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: white;\n}\n\n.quality-selector[_ngcontent-%COMP%]   .form-range[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: 0 5px 0 10px;\n}\n\n@media (min-width: 992px) {\n  .quality-selector[_ngcontent-%COMP%]   .form-range[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .quality-selector[_ngcontent-%COMP%]   .form-range[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .quality-selector[_ngcontent-%COMP%]   .form-range[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n\n.quality-selector[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  max-width: 4.5em;\n  min-width: 4.5em;\n}\n\n.view-selection[_ngcontent-%COMP%] {\n  background-color: #C4C4C4;\n}\n\n.view-selection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtY29tcGFyZXIvaW1hZ2UtY29tcGFyZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL19jb2xvdXJzLnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxrQkFBQTtFQUNBLHlCQ0xXO0VETVgsWUFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQzVCSztBRHVCUDs7QUFRQTtFQUNFLGFBQUE7QUFMRjs7QUVtQ0k7RUYzQkY7SUFDRSxjQUFBO0VBSkY7QUFDRjs7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkMzQ0s7RUQ0Q0wsY0MxQ1U7QURxQ1o7O0FBTUU7RUFDRSwyQ0FBQTtFQUNBLGNBQUE7QUFKSjs7QUFNRTtFQUNFLDJDQUFBO0VBQ0EsY0FBQTtBQUpKOztBQVFBOzs4Q0FBQTs7QUFHQTtFQUNFLGVBQUE7QUFMRjs7QUFNRTtFQUNFLE9BQUE7QUFKSjs7QUFNRTtFQUNFLFFBQUE7QUFKSjs7QUFNRTtFQUNFLFNBQUE7QUFKSjs7QUFNRTtFQUNFLFFBQUE7QUFKSjs7QUFRQTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0FBTkY7O0FBU0E7OzhDQUFBOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFORjs7QUFRRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkM3R1U7QURzR1o7O0FBUUU7RUFDRSx5QkNqSEc7RURrSEgsZUFBQTtBQU5KOztBQVVBO0VBQ0UsZUFBQTtBQVBGOztBQVFFO0VBQ0UsY0NwSEc7RURxSEgsZUFBQTtBQU5KOztBQVVBO0VBRUUsa0JBQUE7RUFDQSx1QkFBQTtBQVJGOztBQVNFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBUEo7O0FFL0RJO0VGb0VGO0lBSUksWUFBQTtFQUxKO0FBQ0Y7O0FFdkRJO0VGdURGO0lBUUksWUFBQTtFQUpKO0FBQ0Y7O0FFNURJO0VGdURGO0lBWUksWUFBQTtFQUhKO0FBQ0Y7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBT0E7RUFDRSx5QkN4Sks7QURvSlA7O0FBS0U7RUFDRSxpQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2UtY29tcGFyZXIvaW1hZ2UtY29tcGFyZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiLi4vY29sb3Vyc1wiO1xuQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvZnVuY3Rpb25zXCIsXG4gIFwiLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC92YXJpYWJsZXNcIixcbiAgXCIuLi8uLi9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9icmVha3BvaW50c1wiO1xuXG4uZWRpdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG91cnMuJGxpZ2h0LWdyZXk7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltYWdlLWNvbXBhcmVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgLy8gd2lsbCBhbGlnbiBjb250ZW50IGluIHRoZSBjZW50ZXJcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnZlcnRpY2FsLXNwbGl0LWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG91cnMuJGdyZXk7XG59XG5cbi5oaWRkZW4tbWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAuaGlkZGVuLW1kIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4ucG9wLXVwIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Vycy4kZ3JleTtcbiAgY29sb3I6IGNvbG91cnMuJGRhcmstZ3JleTtcbiAgJi5ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDI1NSwgMTUxLCAwLjg0KTtcbiAgICBjb2xvcjogIzBGNkYwMDtcbiAgfVxuICAmLnJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDE3NiwgMTc2LCAwLjg0KTtcbiAgICBjb2xvcjogI0E4MDAwMDtcbiAgfVxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBVVElMU1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5wb3MtZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gICYubGVmdCB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAmLmNlbnRlciB7XG4gICAgdG9wOiA1MCU7XG4gIH1cbiAgJi5ib3R0b20ge1xuICAgIGJvdHRvbTogMDtcbiAgfVxuICAmLnJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgfVxufVxuXG4uYWxpZ24tY29udGVudC1jZW50ZXIge1xuICAvLyB3aWxsIGFsaWduIGNvbnRlbnQgaW4gdGhlIGNlbnRlclxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltZy13cmFwcGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDT05UUk9MIEVMRU1FTlRTXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmNvbnRyb2wtYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcblxuICAuY29udHJvbC1iYXItcm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxufVxuXG4uZG93bmxvYWQtY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmc6IDhweCAxM3B4IDE4cHggMTNweDtcbiAgbWFyZ2luOiAwIDEwcHggMTBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvdXJzLiRkYXJrLWdyZXk7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG91cnMuJGdyZXk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5uZXh0LWJ0biB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IGNvbG91cnMuJGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5xdWFsaXR5LXNlbGVjdG9yIHtcbiAgQGV4dGVuZCAuYWxpZ24tY29udGVudC1jZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC5mb3JtLXJhbmdlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIDVweCAwIDEwcHg7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xuICAgICAgd2lkdGg6IDYwMHB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihsZykge1xuICAgICAgd2lkdGg6IDQwMHB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cbiAgfVxuICAuZm9ybS1jb250cm9sIHtcbiAgICBtYXgtd2lkdGg6IDQuNWVtO1xuICAgIG1pbi13aWR0aDogNC41ZW07XG4gIH1cbn1cblxuLnZpZXctc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Vycy4kZ3JleTtcbiAgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn0iLCJcbiRncmV5OiAjQzRDNEM0O1xuJGxpZ2h0LWdyZXk6ICNFQ0VDRUM7XG4kZGFyay1ncmV5OiAjNTA1MDUwO1xuXG4kbGlnaHQtYmx1ZTogI0Q3RTdGRjtcbiRibHVlOiAjNTI5NkZDOyIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEBpZiBub3QgJG4ge1xuICAgIEBlcnJvciBcImJyZWFrcG9pbnQgYCN7JG5hbWV9YCBub3QgZm91bmQgaW4gYCN7JGJyZWFrcG9pbnRzfWBcIjtcbiAgfVxuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heChicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cykpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageComparerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'image-comparer',
                templateUrl: 'image-comparer.component.html',
                styleUrls: ['./image-comparer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_image_compression_service__WEBPACK_IMPORTED_MODULE_3__["ImageCompressionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/libs/selection.js":
/*!***********************************!*\
  !*** ./src/app/libs/selection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/app/libs/utils.js");


// Some var shorting for better compression and readability
const {abs, max, min, round, ceil} = Math;
const preventDefault = e => e.preventDefault();

// Edge < 79 uses the unofficial name ClienRect
const DOMRect = typeof window.DOMRect === 'undefined' ? window.ClientRect : window.DOMRect;

/* eslint-disable new-cap */
function Selection(options = {}) {

    const that = {

        options: Object.assign({
            class: 'selection-area',
            frame: document,
            mode: 'touch',
            tapMode: 'native',
            startThreshold: 10,
            singleClick: true,
            disableTouch: false,

            selectables: [],
            scrollSpeedDivider: 10,
            manualScrollSpeed: 750,

            startareas: ['html'],
            boundaries: ['html'],
            selectionAreaContainer: 'body'
        }, options),

        // Store for keepSelection
        _stored: [],
        _selectables: [],
        _selected: [], // Currently touched elements
        _changed: {
            added: [], // Added elements since last selection
            removed: [] // Removed elements since last selection
        },

        // Evenlistener name: [callbacks]
        _eventListener: {
            beforestart: [],
            start: [],
            move: [],
            stop: []
        },

        // Create area element
        _area: null,
        _areaDomRect: null, // Caches the position of the selection-area
        _clippingElement: null,

        // Is getting set on movement. Varied.
        _scrollAvailable: true,
        _scrollSpeed: {x: null, y: null},

        _init() {
            const {frame} = that.options;
            that._area = frame.createElement('div');
            that._clippingElement = frame.createElement('div');
            that._clippingElement.appendChild(that._area);

            // Add class to the area element
            that._area.classList.add(that.options.class);

            // Apply basic styles to the area element
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["css"])(that._area, {
                willChange: 'top, left, bottom, right, width, height',
                top: 0,
                left: 0,
                position: 'fixed'
            });

            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["css"])(that._clippingElement, {
                overflow: 'hidden',
                position: 'fixed',
                transform: 'translate3d(0, 0, 0)', // https://stackoverflow.com/a/38268846
                pointerEvents: 'none',
                zIndex: '1'
            });

            that.enable();
        },

        _bindStartEvents(type) {
            const {frame} = that.options;
            const fn = type === 'on' ? _utils__WEBPACK_IMPORTED_MODULE_0__["on"] : _utils__WEBPACK_IMPORTED_MODULE_0__["off"];
            fn(frame, 'mousedown', that._onTapStart);

            if (!that.options.disableTouch) {
                fn(frame, 'touchstart', that._onTapStart, {
                    passive: false
                });
            }
        },

        _onTapStart(evt, silent = false) {
            const {x, y, target} = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["simplifyEvent"])(evt);
            const {startareas, boundaries, frame} = that.options;
            const targetBoundingClientRect = target.getBoundingClientRect();

            // Find start-areas and boundaries
            const startAreas = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(startareas, frame);
            that._boundaries = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(boundaries, frame);

            // Check in which container the user currently acts
            that._targetContainer = that._boundaries.find(el =>
                Object(_utils__WEBPACK_IMPORTED_MODULE_0__["intersects"])(el.getBoundingClientRect(), targetBoundingClientRect)
            );

            // Check if area starts in one of the start areas / boundaries
            const evtpath = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["eventPath"])(evt);
            if (!that._targetContainer ||
                !startAreas.find(el => evtpath.includes(el)) ||
                !that._boundaries.find(el => evtpath.includes(el))) {
                return;
            }

            if (!silent && that._emit('beforestart', evt) === false) {
                return;
            }

            // Area start point
            that._ax1 = x;
            that._ay1 = y;

            // Area end point
            that._ax2 = 0;
            that._ay2 = 0;

            // To detect single-click
            that._singleClick = true;
            that.clearSelection(false);

            // Prevent default select event
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["on"])(frame, 'selectstart', preventDefault);

            // Add listener
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["on"])(frame, ['touchmove', 'mousemove'], that._delayedTapMove, {passive: false});
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["on"])(frame, ['mouseup', 'touchcancel', 'touchend'], that._onTapStop);

            // Firefox will scroll down the page which would break the selection.
            evt.preventDefault();
        },

        _onSingleTap(evt) {
            const {tapMode} = that.options;
            const spl = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["simplifyEvent"])(evt);
            let target = null;

            if (tapMode === 'native') {
                target = spl.target;
            } else if (tapMode === 'touch') {
                that.resolveSelectables();

                const {x, y} = spl;
                target = that._selectables.find(v => {
                    const {right, left, top, bottom} = v.getBoundingClientRect();
                    return x < right && x > left && y < bottom && y > top;
                });
            } else {
                throw new Error(`Unknown tapMode option: ${tapMode}`);
            }

            if (!target) {
                return false;
            }

            /**
             * Resolve selectables again.
             * If the user starded in a scrollable area they will be reduced
             * to the current area. Prevent the exclusion of these if a range-selection
             * gets performed.
             */
            that.resolveSelectables();

            // Traverse dom upwards to check if target is selectable
            while (!that._selectables.includes(target)) {
                if (!target.parentElement) {
                    return;
                }

                target = target.parentElement;
            }

            that._emit('start', evt);
            const stored = that._stored;
            if (evt.shiftKey && stored.length) {
                const reference = stored[stored.length - 1];

                // Resolve correct range
                const [preceding, following] = reference.compareDocumentPosition(target) & 4 ? [target, reference] : [reference, target];

                const rangeItems = [...that._selectables.filter(el =>
                    (el.compareDocumentPosition(preceding) & 4) &&
                    (el.compareDocumentPosition(following) & 2)
                ), target];

                that.select(rangeItems);
                that._emit('move', evt);
                that._emit('stop', evt);
            } else {

                if (that._stored.includes(target)) {
                    that.removeFromSelection(target);
                } else {
                    that.select(target);
                }

                that._emit('move', evt);
                that._emit('stop', evt);
            }
        },

        _delayedTapMove(evt) {
            const {x, y} = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["simplifyEvent"])(evt);
            const {startThreshold, frame} = that.options;
            const {_ax1, _ay1} = that; // Coordinates of first "tap"

            // Check pixel threshold
            const thresholdType = typeof startThreshold;
            if ((thresholdType === 'number' && abs((x + y) - (_ax1 + _ay1)) >= startThreshold) ||
                (thresholdType === 'object' && abs(x - _ax1) >= startThreshold.x || abs(y - _ay1) >= startThreshold.y)) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_0__["off"])(frame, ['mousemove', 'touchmove'], that._delayedTapMove, {passive: false});
                Object(_utils__WEBPACK_IMPORTED_MODULE_0__["on"])(frame, ['mousemove', 'touchmove'], that._onTapMove, {passive: false});

                // Make area element visible
                Object(_utils__WEBPACK_IMPORTED_MODULE_0__["css"])(that._area, 'display', 'block');

                // Apppend selection-area to the dom
                Object(_utils__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(that.options.selectionAreaContainer, frame)[0].appendChild(that._clippingElement);

                // Now after the threshold is reached resolve all selectables
                that.resolveSelectables();

                // An action is recognized as single-select until the user performed a mutli-selection
                that._singleClick = false;

                // Just saving the boundaries of this container for later
                const tb = that._targetBoundary = that._targetContainer.getBoundingClientRect();

                // Find container and check if it's scrollable
                if (round(that._targetContainer.scrollHeight) !== round(tb.height) ||
                    round(that._targetContainer.scrollWidth) !== round(tb.width)) {

                    // Indenticates if the user is currently in a scrollable area
                    that._scrollAvailable = true;

                    // Detect mouse scrolling
                    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["on"])(window, 'wheel', that._manualScroll, {passive: false});

                    /**
                     * The selection-area will also cover other element which are
                     * out of the current scrollable parent. So find all elements
                     * which are in the current scrollable element. Later these are
                     * the only selectables instead of all.
                     */
                    that._selectables = that._selectables.filter(s => that._targetContainer.contains(s));

                    /**
                     * To clip the area, the selection area has a parent
                     * which has exact the same dimensions as the scrollable elemeent.
                     * Now if the area exeeds these boundaries it will be cropped.
                     */
                    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["css"])(that._clippingElement, {
                        top: tb.top,
                        left: tb.left,
                        width: tb.width,
                        height: tb.height
                    });

                    /**
                     * The area element is relative to the clipping element,
                     * but when this is moved or transformed we need to correct
                     * the positions via a negative margin.
                     */
                    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["css"])(that._area, {
                        marginTop: -tb.top,
                        marginLeft: -tb.left
                    });
                } else {
                    that._scrollAvailable = false;

                    /**
                     * Reset margin and clipping element dimensions.
                     */
                    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["css"])(that._clippingElement, {
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    });

                    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["css"])(that._area, {
                        marginTop: 0,
                        marginLeft: 0
                    });
                }

                // Trigger recalc and fire event
                that._onTapMove(evt);
                that._emit('start', evt);
            }

            evt.preventDefault(); // Prevent swipe-down refresh
        },

        _onTapMove(evt) {
            const {x, y} = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["simplifyEvent"])(evt);
            const {scrollSpeedDivider} = that.options;
            const scon = that._targetContainer;
            let ss = that._scrollSpeed;
            that._ax2 = x;
            that._ay2 = y;

            if (that._scrollAvailable && (ss.y !== null || ss.x !== null)) {

                // Continous scrolling
                requestAnimationFrame(function scroll() {

                    // Make sure that ss is not outdated
                    ss = that._scrollSpeed;
                    const scrollY = ss.y !== null;
                    const scrollX = ss.x !== null;

                    // Scrolling is not anymore required
                    if (!scrollY && !scrollX) {
                        return;
                    }

                    /**
                     * If the value exeeds the scrollable area it will
                     * be set to the max / min value. So change only
                     */
                    const {scrollTop, scrollLeft} = scon;

                    // Reduce velocity, use ceil in both directions to scroll at least 1px per frame
                    if (scrollY) {
                        scon.scrollTop += ceil(ss.y / scrollSpeedDivider);
                        that._ay1 -= scon.scrollTop - scrollTop;
                    }

                    if (scrollX) {
                        scon.scrollLeft += ceil(ss.x / scrollSpeedDivider);
                        that._ax1 -= scon.scrollLeft - scrollLeft;
                    }

                    /**
                     * We changed the start coordinates -> redraw the selectiona area
                     * We changed the dimensions of the area element -> re-calc selected elements
                     * The selected elements array has been changed -> fire event
                     */
                    that._recalcAreaRect();
                    that._updatedTouchingElements();
                    that._emit('move', evt);
                    that._redrawArea();

                    // Keep scrolling even if the user stops to move his pointer
                    requestAnimationFrame(scroll);
                });
            } else {

                /**
                 * Perform redraw only if scrolling is not active.
                 * If scrolling is active this area is getting re-dragwed by the
                 * anonymized scroll function.
                 */
                that._recalcAreaRect();
                that._updatedTouchingElements();
                that._emit('move', evt);
                that._redrawArea();
            }

            evt.preventDefault(); // Prevent swipe-down refresh
        },

        _manualScroll(evt) {
            const {manualScrollSpeed} = that.options;

            // Consistent scrolling speed on all browsers
            const deltaY = evt.deltaY ? (evt.deltaY > 0 ? 1 : -1) : 0;
            const deltaX = evt.deltaX ? (evt.deltaX > 0 ? 1 : -1) : 0;
            that._scrollSpeed.y += deltaY * manualScrollSpeed;
            that._scrollSpeed.x += deltaX * manualScrollSpeed;
            that._onTapMove(evt);

            // Prevent defaul scrolling behaviour, eg. page scrolling
            evt.preventDefault();
        },

        _recalcAreaRect() {
            const {scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth} = that._targetContainer;
            const brect = that._targetBoundary;
            const ss = that._scrollSpeed;
            let x = that._ax2;
            let y = that._ay2;

            if (x < brect.left) {
                ss.x = scrollLeft ? -abs(brect.left - x) : null;
                x = brect.left;
            } else if (x > brect.left + brect.width) {
                ss.x = scrollWidth - scrollLeft - clientWidth ? abs(brect.left + brect.width - x) : null;
                x = brect.left + brect.width;
            } else {
                ss.x = null;
            }

            if (y < brect.top) {
                ss.y = scrollTop ? -abs(brect.top - y) : null;
                y = brect.top;
            } else if (y > brect.top + brect.height) {
                ss.y = scrollHeight - scrollTop - clientHeight ? abs(brect.top + brect.height - y) : null;
                y = brect.top + brect.height;
            } else {
                ss.y = null;
            }

            const x3 = min(that._ax1, x);
            const y3 = min(that._ay1, y);
            const x4 = max(that._ax1, x);
            const y4 = max(that._ay1, y);
            that._areaDomRect = new DOMRect(x3, y3, x4 - x3, y4 - y3);
        },

        _redrawArea() {
            const {x, y, width, height} = that._areaDomRect;
            const areaStyle = that._area.style;

            // It's generally faster to not use es6-templates
            // It's also faster to manually change the properties instead of calling Object.assign
            /* eslint prefer-template: "off" */
            areaStyle.transform = 'translate3d(' + x + 'px,' + y + 'px, 0)';
            areaStyle.width = width + 'px';
            areaStyle.height = height + 'px';
        },

        _onTapStop(evt, noevent) {
            const {frame, singleClick} = that.options;

            // Remove event handlers
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["off"])(frame, ['mousemove', 'touchmove'], that._delayedTapMove);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["off"])(frame, ['touchmove', 'mousemove'], that._onTapMove);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["off"])(frame, ['mouseup', 'touchcancel', 'touchend'], that._onTapStop);

            if (evt && that._singleClick && singleClick) {
                that._onSingleTap(evt);
            } else if (!that._singleClick && !noevent) {
                that._updatedTouchingElements();
                that._emit('stop', evt);
            }

            // Reset scroll speed
            that._scrollSpeed = {x: null, y: null};

            // Unbind mouse scrolling listener
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["off"])(window, 'wheel', that._manualScroll);

            // Remove selection-area from dom
            that._clippingElement.remove();

            // Enable default select event
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["off"])(frame, 'selectstart', preventDefault);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["css"])(that._area, 'display', 'none');
        },

        _updatedTouchingElements() {
            const {_selected, _selectables, options, _areaDomRect} = that;
            const {mode} = options;

            // Update
            const touched = [];
            const added = [];
            const removed = [];

            // Itreate over the selectable elements
            for (let i = 0; i < _selectables.length; i++) {
                const node = _selectables[i];

                // Check if area intersects element
                if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["intersects"])(_areaDomRect, node.getBoundingClientRect(), mode)) {

                    // Check if the element wasn't present in the last selection.
                    if (!_selected.includes(node)) {
                        added.push(node);
                    }

                    touched.push(node);
                }
            }

            // Check which elements where removed since last selection
            for (let i = 0; i < _selected.length; i++) {
                const el = _selected[i];
                if (!touched.includes(el)) {
                    removed.push(el);
                }
            }

            // Save
            that._selected = touched;
            that._changed = {added, removed};
        },

        _emit(event, evt) {
            let ok = true;

            for (const listener of that._eventListener[event]) {
                ok = listener.call(that, {
                    inst: that,
                    area: that._area,
                    selected: that._selected.concat(that._stored),
                    changed: that._changed,
                    oe: evt
                }) && ok;
            }

            return ok;
        },

        /**
         * Manually triggers the start of a selection
         * @param evt A MouseEvent / TouchEvent -like object
         * @param silent If beforestart should be fired,
         */
        trigger(evt, silent = true) {
            that._onTapStart(evt, silent);
        },

        /**
         * Adds an eventlistener
         * @param event
         * @param cb
         */
        on(event, cb) {
            that._eventListener[event].push(cb);
            return that;
        },

        /**
         * Removes an event listener
         * @param event
         * @param cb
         */
        off(event, cb) {
            const callBacks = that._eventListener[event];

            if (callBacks) {
                const index = callBacks.indexOf(cb);

                if (~index) {
                    callBacks.splice(index, 1);
                }
            }

            return that;
        },

        /**
         * Can be used if during a selection elements have been added.
         * Will update everything which can be selected.
         */
        resolveSelectables() {

            // Resolve selectors
            that._selectables = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(that.options.selectables, that.options.frame);
        },

        /**
         * Saves the current selection for the next selecion.
         * Allows multiple selections.
         */
        keepSelection() {
            const {_selected, _stored} = that;

            for (let i = 0; i < _selected.length; i++) {
                const el = _selected[i];
                if (!_stored.includes(el)) {
                    _stored.push(el);
                }
            }
        },

        /**
         * Clear the elements which where saved by 'keepSelection()'.
         * @param store If the store should also get cleared
         */
        clearSelection(store = true) {
            store && (that._stored = []);
            that._selected = [];
            that._changed.added = [];
            that._changed.removed = [];
        },

        /**
         * Removes an particular element from the selection.
         */
        removeFromSelection(el) {
            that._changed.removed.push(el);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(that._stored, el);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(that._selected, el);
        },

        /**
         * @returns {Array} Selected elements
         */
        getSelection() {
            return that._stored;
        },

        /**
         * Cancel the current selection process.
         * @param keepEvent {boolean} true to fire the onStop listener after cancel.
         */
        cancel(keepEvent = false) {
            that._onTapStop(null, !keepEvent);
        },

        /**
         * Set or get an option.
         * @param   {string} name
         * @param   {*}      value
         * @return  {*}      the new value
         */
        option(name, value) {
            const {options} = that;
            return value === undefined ? options[name] : (options[name] = value);
        },

        /**
         * Disable the selection functinality.
         */
        disable() {
            that._bindStartEvents('off');
        },

        /**
         * Unbinds all events and removes the area-element
         */
        destroy() {
            that.disable();
            that._clippingElement.remove();
        },

        /**
         * Disable the selection functinality.
         */
        enable() {
            that._bindStartEvents('on');
        },

        /**
         * Manually select elements
         * @param query - CSS Query, can be an array of queries
         */
        select(query) {
            const {_selected, _stored, options} = that;
            const elements = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(query, options.frame).filter(el =>
                !_selected.includes(el) &&
                !_stored.includes(el)
            );

            that._selected.push(...elements);
            that._changed.added.push(...elements);
            return elements;
        }
    };

    // Initialize
    that._init();

    return that;
}

// Export utils
Selection.utils = {
    on: _utils__WEBPACK_IMPORTED_MODULE_0__["on"],
    off: _utils__WEBPACK_IMPORTED_MODULE_0__["off"],
    css: _utils__WEBPACK_IMPORTED_MODULE_0__["css"],
    intersects: _utils__WEBPACK_IMPORTED_MODULE_0__["intersects"],
    selectAll: _utils__WEBPACK_IMPORTED_MODULE_0__["selectAll"],
    eventPath: _utils__WEBPACK_IMPORTED_MODULE_0__["eventPath"],
    removeElement: _utils__WEBPACK_IMPORTED_MODULE_0__["removeElement"]
};

/**
 * Create selection instance
 * @param {Object} [options]
 */
Selection.create = options => Selection(options);

/* harmony default export */ __webpack_exports__["default"] = (Selection);

/***/ }),

/***/ "./src/app/libs/utils.js":
/*!*******************************!*\
  !*** ./src/app/libs/utils.js ***!
  \*******************************/
/*! exports provided: on, off, css, intersects, selectAll, eventPath, removeElement, simplifyEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersects", function() { return intersects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventPath", function() { return eventPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElement", function() { return removeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyEvent", function() { return simplifyEvent; });
/* eslint-disable prefer-rest-params */
function eventListener(method, elements, events, fn, options = {}) {

  // Normalize array
  if (elements instanceof HTMLCollection || elements instanceof NodeList) {
      elements = Array.from(elements);
  } else if (!Array.isArray(elements)) {
      elements = [elements];
  }

  if (!Array.isArray(events)) {
      events = [events];
  }

  for (const element of elements) {
      for (const event of events) {
          element[method](event, fn, {capture: false, ...options});
      }
  }

  return Array.prototype.slice.call(arguments, 1);
}

/**
* Add event(s) to element(s).
* @param elements DOM-Elements
* @param events Event names
* @param fn Callback
* @param options Optional options
* @return Array passed arguments
*/
const on = eventListener.bind(null, 'addEventListener');

/**
* Remove event(s) from element(s).
* @param elements DOM-Elements
* @param events Event names
* @param fn Callback
* @param options Optional options
* @return Array passed arguments
*/
const off = eventListener.bind(null, 'removeEventListener');

const unitify = (val, unit = 'px') => typeof val === 'number' ? val + unit : val;

/**
* Add css to a DOM-Element or returns the current
* value of a property.
*
* @param el The Element.
* @param attr The attribute or a object which holds css key-properties.
* @param val The value for a single attribute.
* @returns {*}
*/
function css(el, attr, val) {
  const style = el && el.style;
  if (style) {
      if (typeof attr === 'object') {

          for (const [key, value] of Object.entries(attr)) {
              style[key] = unitify(value);
          }

      } else if (val && typeof attr === 'string') {
          style[attr] = unitify(val);
      }
  }
}

/**
* Check if two DOM-Elements intersects each other.
* @param a BoundingClientRect of the first element.
* @param b BoundingClientRect of the second element.
* @param mode Options are center, cover or touch.
* @returns {boolean} If both elements intersects each other.
*/
function intersects(a, b, mode) {
  switch (mode || 'touch') {
      case 'center': {
          const bxc = b.left + b.width / 2;
          const byc = b.top + b.height / 2;

          return bxc >= a.left &&
              bxc <= a.right &&
              byc >= a.top &&
              byc <= a.bottom;
      }
      case 'cover': {
          return b.left >= a.left &&
              b.top >= a.top &&
              b.right <= a.right &&
              b.bottom <= a.bottom;
      }
      case 'touch': {
          return a.right >= b.left &&
              a.left <= b.right &&
              a.bottom >= b.top &&
              a.top <= b.bottom;
      }
      default: {
          throw new Error(`Unkown intersection mode: ${mode}`);
      }
  }
}

/**
* Takes a selector (or array of selectors) and returns the matched nodes.
* @param selector The selector or an Array of selectors.
* @returns {Array} Array of DOM-Nodes.
*/
function selectAll(selector, doc = document) {
  if (!Array.isArray(selector)) {
      selector = [selector];
  }

  const nodes = [];
  for (let i = 0, l = selector.length; i < l; i++) {
      const item = selector[i];

      if (typeof item === 'string') {
          nodes.push(...doc.querySelectorAll(item));
      } else if (item instanceof doc.defaultView.HTMLElement) {
          nodes.push(item);
      }
  }

  return nodes;
}

/**
* Polyfill for safari & firefox for the eventPath event property.
* @param evt The event object.
* @return [String] event path.
*/
function eventPath(evt) {
  let path = evt.path || (evt.composedPath && evt.composedPath());

  if (path && path.length > 0) {
      return path;
  }

  let el = evt.target;
  for (path = [el]; (el = el.parentElement);) {
      path.push(el);
  }

  path.push(document, window);
  return path;
}

/**
* Removes an element from an Array.
*/
function removeElement(arr, el) {
  const index = arr.indexOf(el);

  if (~index) {
      arr.splice(index, 1);
  }
}

function simplifyEvent(evt) {
  const tap = (evt.touches && evt.touches[0] || evt);
  return {
      tap,
      x: tap.clientX,
      y: tap.clientY,
      target: tap.target
  };
}

/***/ }),

/***/ "./src/app/models/FileWithURL.ts":
/*!***************************************!*\
  !*** ./src/app/models/FileWithURL.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileWithURL; });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _f, _url;
class FileWithURL {
    constructor(f) {
        _f.set(this, void 0);
        _url.set(this, void 0);
        __classPrivateFieldSet(this, _f, f);
        __classPrivateFieldSet(this, _url, URL.createObjectURL(f));
    }
    get url() {
        return __classPrivateFieldGet(this, _url);
    }
    get f() {
        return __classPrivateFieldGet(this, _f);
    }
    release() {
        URL.revokeObjectURL(__classPrivateFieldGet(this, _url));
    }
}
_f = new WeakMap(), _url = new WeakMap();


/***/ }),

/***/ "./src/app/pipes/bytes.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/bytes.pipe.ts ***!
  \*************************************/
/*! exports provided: BytesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BytesPipe", function() { return BytesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var denom = {
    'B': 1,
    'KB': 1000,
    'MB': 1000000,
    'GB': 1000000000
};
class BytesPipe {
    transform(value, unit) {
        return `${value / denom[unit]} ${unit}`;
    }
}
BytesPipe.ɵfac = function BytesPipe_Factory(t) { return new (t || BytesPipe)(); };
BytesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "bytes", type: BytesPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BytesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'bytes'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/percent-with-sign.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/percent-with-sign.pipe.ts ***!
  \*************************************************/
/*! exports provided: PercentWithSignPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentWithSignPipe", function() { return PercentWithSignPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class PercentWithSignPipe {
    transform(value) {
        let pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"]('en-US');
        return (value >= 0 ? '+' : '') + pipe.transform(value);
    }
}
PercentWithSignPipe.ɵfac = function PercentWithSignPipe_Factory(t) { return new (t || PercentWithSignPipe)(); };
PercentWithSignPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "percentWithSign", type: PercentWithSignPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PercentWithSignPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'percentWithSign'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/safe.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safe'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/image-compression.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/image-compression.service.ts ***!
  \*******************************************************/
/*! exports provided: ImageCompressionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCompressionService", function() { return ImageCompressionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_FileWithURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/FileWithURL */ "./src/app/models/FileWithURL.ts");
/* harmony import */ var _helpers_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/canvas */ "./src/app/helpers/canvas.ts");




class ImageCompressionService {
    constructor() {
        this.images = {};
        this.idCounter = 0;
        this.firstImg = 1;
        this.lastImg = 1;
    }
    addImg(img) {
        this.idCounter++;
        this.lastImg = this.idCounter;
        return this.images[this.idCounter] = {
            'imgId': this.idCounter,
            'original': new _models_FileWithURL__WEBPACK_IMPORTED_MODULE_1__["default"](img),
            'compressed': new _models_FileWithURL__WEBPACK_IMPORTED_MODULE_1__["default"](img),
            'quality': 100
        };
    }
    getImgs() {
        return this.images;
    }
    getImg(id) {
        return this.images[id];
    }
    // get the next in order of ascending img id
    // will wrap around to the first img once the end is reached 
    getNextImg(id, reverse = false) {
        let incre = reverse ? -1 : 1;
        // step forward from the given id, until a image is found
        let i = id;
        do {
            i = (i + incre) % (this.idCounter + 1);
            if (i == 0)
                i = this.idCounter;
            if (this.images.hasOwnProperty(i))
                return i;
        } while (i != id);
        return id;
    }
    isFirstImg(id) {
        return this.firstImg == id;
    }
    isLastImg(id) {
        return this.lastImg == id;
    }
    compressImg(imgId, quality) {
        let img = this.images[imgId];
        let canvas = document.createElement('canvas');
        return Object(_helpers_canvas__WEBPACK_IMPORTED_MODULE_2__["drawImage"])(canvas, img.original.url, false)
            .then(() => {
            return Object(_helpers_canvas__WEBPACK_IMPORTED_MODULE_2__["toJPEG"])(canvas, quality);
        })
            .then((b) => {
            img.compressed.release();
            img.compressed = new _models_FileWithURL__WEBPACK_IMPORTED_MODULE_1__["default"](b);
            img.quality = quality;
            return img;
        })
            .catch(e => {
            throw e;
        });
    }
}
ImageCompressionService.ɵfac = function ImageCompressionService_Factory(t) { return new (t || ImageCompressionService)(); };
ImageCompressionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageCompressionService, factory: ImageCompressionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCompressionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gordon/Workspace/Projects/Angular/desize/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map