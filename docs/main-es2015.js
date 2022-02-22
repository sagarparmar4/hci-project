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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"main-content\">\r\n\t<router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Area -->\n<div id=\"content-area\" class=\"d-flex flex-column bd-highlight ch-100 cw-100\">\n    <!-- Information Area -->\n    <div id=\"heading-area\" class=\"p-2 bd-highlight\">\n        HCI Project\n    </div>\n    <div id=\"heading-area\" class=\"p-2\">\n        Please provide your details below to start the experiment.\n    </div>\n\n    <!-- Input Area -->\n    <div id=\"input-area\" class=\"p-4\">\n        <form #userDetails=\"ngForm\" (ngSubmit)=\"startExperiment(userDetails)\">\n            <div class=\"form-group\">\n                <label for=\"fname\">First Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"fname\" placeholder=\"Enter first name\" required ngModel>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"lname\">Last Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"lname\" placeholder=\"Enter last name\" required ngModel>\n            </div>\n            <button class=\"btn btn-secondary\" type=\"submit\">Submit</button>\n            <div class=\"invalid-feedback d-block\" *ngIf=\"showError\">\n                Invalid details provided.\n            </div>\n        </form>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/new-layout/new-layout.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/new-layout/new-layout.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- New Layout -->\n<div id=\"layout-container\" class=\"d-flex bd-highlight ch-100 cw-100\" [ngClass]=\"{\n    'flex-column': !isLandscapeMode\n}\">\n    <!-- Content Area -->\n    <div id=\"content-area\" class=\"d-flex flex-column\" [ngClass]=\"{\n        'ch-60 cw-100': !isLandscapeMode,\n        'ch-100 cw-60': isLandscapeMode\n    }\">\n        <!-- Information Area -->\n        <div id=\"information-container\" class=\"d-flex\">\n            <div id=\"heading-area\" class=\"p-2 bd-highlight flex-grow-1\">\n                New Layout\n            </div>\n            <div id=\"show-home\" class=\"p-2 bd-highlight\" routerLink=\"/\">\n                Home\n            </div>\n            <div id=\"show-result\" class=\"p-2 bd-highlight\" (click)=\"showResults(newLayoutForm)\">\n                Show Result\n            </div>\n        </div>\n        \n        <!-- Text Area -->\n        <div id=\"text-area\" class=\"p-2 overflow-auto ch-60\">\n            {{ sampleText }}\n        </div>\n\n        <!-- Input Area -->\n        <div id=\"input-area\" class=\"p-2 ch-40\">\n            <form #newLayoutForm=\"ngForm\">\n                <div class=\"form-group\">\n                    <label for=\"textarea\">Entered text will be shown here:</label>\n                    <textarea class=\"form-control\" name=\"textarea\" rows=\"2\" placeholder=\"Entered text will be shown here\" disabled ngModel></textarea>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <!-- Keyboard Area -->\n    <div id=\"keyboard\" class=\"p-2 bd-highlight\" [ngClass]=\"{\n        'ch-40 cw-100': !isLandscapeMode,\n        'ch-100 cw-40': isLandscapeMode\n    }\">\n        Keyboard Area\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/standard-layout/standard-layout.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/standard-layout/standard-layout.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Standard Layout -->\n<!-- Content Area -->\n<div id=\"content-area\" class=\"d-flex bd-highlight cw-100 flex-column\" [ngClass]=\"{\n    'ch-60': !isLandscapeMode,\n    'ch-50': isLandscapeMode\n}\">\n    <!-- Information Area -->\n    <div id=\"information-container\" class=\"d-flex\">\n        <div id=\"heading-area\" class=\"p-2 bd-highlight flex-grow-1\">\n            Standard Layout\n        </div>\n        <div id=\"show-home\" class=\"p-2 bd-highlight\" routerLink=\"/\">\n            Home\n        </div>\n        <div id=\"next-layout\" class=\"p-2 bd-highlight\" (click)=\"nextLayout(standardLayoutForm)\">\n            Next Layout\n        </div>\n    </div>\n    \n    <!-- Text Area -->\n    <div id=\"text-area\" class=\"p-2 overflow-auto\" [ngClass]=\"{\n        'ch-70': !isLandscapeMode,\n        'ch-15': isLandscapeMode\n    }\">\n        {{ sampleText }}\n    </div>\n\n    <!-- Input Area -->\n    <div id=\"input-area\" class=\"p-2\" [ngClass]=\"{\n        'ch-30': !isLandscapeMode,\n        'ch-15': isLandscapeMode\n    }\">\n        <form #standardLayoutForm=\"ngForm\">\n            <div class=\"form-group\">\n                <label for=\"textarea\" *ngIf=\"!isLandscapeMode\">Enter above text Here:</label>\n                <textarea class=\"form-control\" name=\"textarea\" rows=\"2\" placeholder=\"Entered text will be shown here\" [(ngModel)]=\"textarea\" disabled></textarea>\n            </div>\n        </form>\n    </div>\n</div>\n\n<!-- Keyboard Area -->\n<div id=\"keyboard\" class=\"p-2 bd-highlight cw-100\" [ngClass]=\"{\n    'ch-40': !isLandscapeMode,\n    'ch-50': isLandscapeMode\n}\">\n    <div class=\"simple-keyboard\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/result-page/result-page.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/result-page/result-page.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Area -->\n<div id=\"content-area\" class=\"d-flex flex-column bd-highlight ch-100 cw-100\">\n    <!-- Information Area -->\n    <div id=\"heading-area\" class=\"p-2 bd-highlight\">\n        Results\n    </div>\n\n    <!-- Input Area -->\n    <div id=\"input-area\" class=\"p-2 overflow-auto\">\n        <form #resultDetails=\"ngForm\">\n            <div class=\"form-group\">\n                <label for=\"fname\">Name:</label>{{ ' ' + fname + ' ' + lname }}\n            </div>\n            <div class=\"form-group\">\n                <label for=\"sLayoutSpeed\">Standard Layout (Time Taken):</label>{{ ' ' + (standardLayout.getTimeTaken() | date: 'mm:ss') }}\n            </div>\n            <div class=\"form-group\">\n                <label for=\"sLayoutAccuracy\">Standard Layout (Accuracy):</label>{{ ' ' + (standardLayout.accuracy | number: '1.2-3') + '%' }}\n            </div>\n            <div class=\"form-group\">\n                <label for=\"nLayoutSpeed\">New Layout (Time Taken):</label>{{ ' ' + (newLayout.getTimeTaken() | date: 'mm:ss') }}\n            </div>\n            <div class=\"form-group\">\n                <label for=\"nLayoutAccuracy\">New Layout (Accuracy):</label>{{ ' ' + (newLayout.accuracy | number: '1.2-3') + '%' }}\n            </div>\n            <button class=\"btn btn-secondary\" type=\"submit\" routerLink=\"/\">Home</button>\n        </form>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_layouts_standard_layout_standard_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layouts/standard-layout/standard-layout.component */ "./src/app/components/layouts/standard-layout/standard-layout.component.ts");
/* harmony import */ var _components_layouts_new_layout_new_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layouts/new-layout/new-layout.component */ "./src/app/components/layouts/new-layout/new-layout.component.ts");
/* harmony import */ var _components_result_page_result_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/result-page/result-page.component */ "./src/app/components/result-page/result-page.component.ts");







const routes = [
    { path: '', component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] },
    { path: 'standard-layout', component: _components_layouts_standard_layout_standard_layout_component__WEBPACK_IMPORTED_MODULE_4__["StandardLayoutComponent"] },
    { path: 'new-layout', component: _components_layouts_new_layout_new_layout_component__WEBPACK_IMPORTED_MODULE_5__["NewLayoutComponent"] },
    { path: 'result-page', component: _components_result_page_result_page_component__WEBPACK_IMPORTED_MODULE_6__["ResultPageComponent"] },
    { path: '**', redirectTo: '/' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_layouts_standard_layout_standard_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layouts/standard-layout/standard-layout.component */ "./src/app/components/layouts/standard-layout/standard-layout.component.ts");
/* harmony import */ var _components_result_page_result_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/result-page/result-page.component */ "./src/app/components/result-page/result-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_layouts_new_layout_new_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/layouts/new-layout/new-layout.component */ "./src/app/components/layouts/new-layout/new-layout.component.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
            _components_layouts_standard_layout_standard_layout_component__WEBPACK_IMPORTED_MODULE_7__["StandardLayoutComponent"],
            _components_result_page_result_page_component__WEBPACK_IMPORTED_MODULE_8__["ResultPageComponent"],
            _components_layouts_new_layout_new_layout_component__WEBPACK_IMPORTED_MODULE_10__["NewLayoutComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__["CollapseModule"].forRoot(),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/classes/layout-details.ts":
/*!*******************************************!*\
  !*** ./src/app/classes/layout-details.ts ***!
  \*******************************************/
/*! exports provided: LayoutDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDetails", function() { return LayoutDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutDetails = class LayoutDetails {
    constructor() {
        let date = new Date();
        this.startTime = date;
        this.endTime = date;
        this.accuracy = 0;
    }
    getTimeTaken() {
        return this.endTime.getTime() - this.startTime.getTime();
    }
};
LayoutDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LayoutDetails);



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");




let LandingPageComponent = class LandingPageComponent {
    constructor(commonService, router) {
        this.commonService = commonService;
        this.router = router;
        this.showError = false;
    }
    startExperiment(userDetails) {
        if (userDetails.value.fname && userDetails.value.lname) {
            this.showError = false;
            this.commonService.createNewResult(userDetails.value.fname, userDetails.value.lname);
            this.router.navigate(['standard-layout'], { skipLocationChange: true });
        }
        else {
            this.showError = true;
        }
    }
};
LandingPageComponent.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/components/landing-page/landing-page.component.scss")).default]
    })
], LandingPageComponent);



/***/ }),

/***/ "./src/app/components/layouts/new-layout/new-layout.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/layouts/new-layout/new-layout.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9uZXctbGF5b3V0L25ldy1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/layouts/new-layout/new-layout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/layouts/new-layout/new-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: NewLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLayoutComponent", function() { return NewLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var string_similarity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! string-similarity */ "./node_modules/string-similarity/src/index.js");
/* harmony import */ var string_similarity__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(string_similarity__WEBPACK_IMPORTED_MODULE_4__);





let NewLayoutComponent = class NewLayoutComponent {
    constructor(commonService, router) {
        this.commonService = commonService;
        this.router = router;
        this.orientation = screen.orientation;
        this.sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Mauris fermentum venenatis quam vitae tempor. " +
            "Nam dictum risus ut scelerisque tempus. " +
            "Aliquam iaculis turpis ac lobortis iaculis. " +
            "Nulla gravida sem non felis egestas sodales. " +
            "In non velit faucibus, mollis ante in, elementum orci. " +
            "Ut ac convallis enim. " +
            "Suspendisse eget eleifend est. " +
            "Vivamus elementum, lectus eu placerat ullamcorper, lectus justo hendrerit neque, id pharetra massa urna id risus.";
    }
    ngOnInit() {
        this.commonService.newLayout.startTime = new Date();
        this.checkLandscapeMode();
        this.orientation.addEventListener('change', () => {
            this.checkLandscapeMode();
        });
    }
    checkLandscapeMode() {
        this.isLandscapeMode = (this.orientation.type == "landscape-primary" || this.orientation.type == "landscape-secondary");
    }
    showResults(newLayoutForm) {
        this.commonService.newLayout.endTime = new Date();
        this.commonService.newLayout.accuracy = Object(string_similarity__WEBPACK_IMPORTED_MODULE_4__["compareTwoStrings"])(this.sampleText, newLayoutForm.value.textarea);
        this.router.navigate(['result-page'], { skipLocationChange: true });
    }
};
NewLayoutComponent.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NewLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/new-layout/new-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-layout.component.scss */ "./src/app/components/layouts/new-layout/new-layout.component.scss")).default]
    })
], NewLayoutComponent);



/***/ }),

/***/ "./src/app/components/layouts/standard-layout/standard-layout.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/layouts/standard-layout/standard-layout.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9zdGFuZGFyZC1sYXlvdXQvc3RhbmRhcmQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/layouts/standard-layout/standard-layout.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/layouts/standard-layout/standard-layout.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StandardLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardLayoutComponent", function() { return StandardLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var string_similarity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! string-similarity */ "./node_modules/string-similarity/src/index.js");
/* harmony import */ var string_similarity__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(string_similarity__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simple-keyboard */ "./node_modules/simple-keyboard/build/index.js");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(simple_keyboard__WEBPACK_IMPORTED_MODULE_5__);






let StandardLayoutComponent = class StandardLayoutComponent {
    constructor(commonService, router) {
        this.commonService = commonService;
        this.router = router;
        this.orientation = screen.orientation;
        this.keyboardOptions = {
            onChange: (input) => this.textarea = input,
            onKeyPress: (input) => this.onKeyPress(input),
            newLineOnEnter: true,
            layout: {
                default: [
                    "` 1 2 3 4 5 6 7 8 9 0 - =",
                    "q w e r t y u i o p [ ] \\",
                    "a s d f g h j k l ; '",
                    "{shift} z x c v b n m , . / {backspace}",
                    "{numbers} {space} {enter}"
                ],
                shift: [
                    "~ ! @ # $ % ^ & * ( ) _ +",
                    "Q W E R T Y U I O P { } |",
                    "A S D F G H J K L : \"",
                    "{shift} Z X C V B N M , . / {backspace}",
                    "{numbers} {space} {enter}"
                ],
                numbers: [
                    "1 2 3 4 5 6 7 8 9 0",
                    "@ # £ _ & - + ( ) /",
                    "{sym2} * \" ' : ; ! ? {backspace}",
                    "{abc} {space} {enter}"
                ]
            },
            display: {
                "{numbers}": "123",
                "{enter}": "←",
                "{escape}": "ESC",
                "{tab}": "TAB",
                "{backspace}": "⌫",
                "{capslock}": "CAPS",
                "{shift}": "⇧",
                "{controlleft}": "CTRL",
                "{controlright}": "CTRL",
                "{altleft}": "ALT",
                "{altright}": "ALT",
                "{metaleft}": "CMD",
                "{metaright}": "CMD",
                "{abc}": "ABC",
                "{space}": " "
            }
        };
        this.sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Mauris fermentum venenatis quam vitae tempor. " +
            "Nam dictum risus ut scelerisque tempus. " +
            "Aliquam iaculis turpis ac lobortis iaculis. " +
            "Nulla gravida sem non felis egestas sodales. " +
            "In non velit faucibus, mollis ante in, elementum orci. " +
            "Ut ac convallis enim. " +
            "Suspendisse eget eleifend est. " +
            "Vivamus elementum, lectus eu placerat ullamcorper, lectus justo hendrerit neque, id pharetra massa urna id risus.";
    }
    ngOnInit() {
        this.commonService.standardLayout.startTime = new Date();
        this.checkLandscapeMode();
        this.orientation.addEventListener('change', () => {
            this.checkLandscapeMode();
        });
        this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_5___default.a(this.keyboardOptions);
    }
    checkLandscapeMode() {
        this.isLandscapeMode = (this.orientation.type == "landscape-primary" || this.orientation.type == "landscape-secondary");
    }
    nextLayout(standardLayoutForm) {
        this.commonService.standardLayout.endTime = new Date();
        this.commonService.standardLayout.accuracy = Object(string_similarity__WEBPACK_IMPORTED_MODULE_4__["compareTwoStrings"])(this.sampleText, standardLayoutForm.value.textarea);
        this.router.navigate(['new-layout'], { skipLocationChange: true });
    }
    onKeyPress(button) {
        if (button === "{shift}" || button === "{lock}") {
            let shiftToggle = (this.keyboard.options.layoutName === "default") ? "shift" : "default";
            this.keyboard.setOptions({ layoutName: shiftToggle });
        }
    }
    ;
};
StandardLayoutComponent.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("standardLayoutForm", { static: false })
], StandardLayoutComponent.prototype, "standardLayoutForm", void 0);
StandardLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-standard-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./standard-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/standard-layout/standard-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./standard-layout.component.scss */ "./src/app/components/layouts/standard-layout/standard-layout.component.scss")).default]
    })
], StandardLayoutComponent);



/***/ }),

/***/ "./src/app/components/result-page/result-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/result-page/result-page.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0LXBhZ2UvcmVzdWx0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/result-page/result-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/result-page/result-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResultPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageComponent", function() { return ResultPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");




let ResultPageComponent = class ResultPageComponent {
    constructor(commonService, router) {
        this.commonService = commonService;
        this.router = router;
    }
    ngOnInit() {
        this.getDetails();
    }
    getDetails() {
        this.fname = this.commonService.fname;
        this.lname = this.commonService.lname;
        this.standardLayout = this.commonService.standardLayout;
        this.newLayout = this.commonService.newLayout;
    }
};
ResultPageComponent.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ResultPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-result-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./result-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/result-page/result-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./result-page.component.scss */ "./src/app/components/result-page/result-page.component.scss")).default]
    })
], ResultPageComponent);



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _classes_layout_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/layout-details */ "./src/app/classes/layout-details.ts");



let CommonService = class CommonService {
    constructor() { }
    createNewResult(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.standardLayout = new _classes_layout_details__WEBPACK_IMPORTED_MODULE_2__["LayoutDetails"]();
        ;
        this.newLayout = new _classes_layout_details__WEBPACK_IMPORTED_MODULE_2__["LayoutDetails"]();
    }
};
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\UCD Study Resources\Semester 2\COMP41710 - Human Computer Interaction\hci-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map