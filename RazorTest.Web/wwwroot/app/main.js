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

/***/ "./app/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./app/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lotType_lotType_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lotType/lotType.component */ "./app/app/lotType/lotType.component.ts");
/* harmony import */ var _lotTypeList_lotTypeList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lotTypeList/lotTypeList.component */ "./app/app/lotTypeList/lotTypeList.component.ts");





var routes = [
    { path: '', redirectTo: 'lot-type-list', pathMatch: 'full' },
    { path: 'lot-type/:id', component: _lotType_lotType_component__WEBPACK_IMPORTED_MODULE_3__["LotTypeComponent"] },
    { path: 'lot-type-list', component: _lotTypeList_lotTypeList_component__WEBPACK_IMPORTED_MODULE_4__["LotTypeListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app/app.component.css":
/*!***********************************!*\
  !*** ./app/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./app/app/app.component.ts":
/*!**********************************!*\
  !*** ./app/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Lot Type App';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'client-app',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./app/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./app/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app/app.module.ts":
/*!*******************************!*\
  !*** ./app/app/app.module.ts ***!
  \*******************************/
/*! exports provided: minItemsValidationMessage, maxItemsValidationMessage, minlengthValidationMessage, maxlengthValidationMessage, minValidationMessage, maxValidationMessage, multipleOfValidationMessage, exclusiveMinimumValidationMessage, exclusiveMaximumValidationMessage, constValidationMessage, patternValidationMessage, checkValidModelMessage, validateAgentUserMessage, validateAgentUser, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minItemsValidationMessage", function() { return minItemsValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxItemsValidationMessage", function() { return maxItemsValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minlengthValidationMessage", function() { return minlengthValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxlengthValidationMessage", function() { return maxlengthValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minValidationMessage", function() { return minValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxValidationMessage", function() { return maxValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multipleOfValidationMessage", function() { return multipleOfValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclusiveMinimumValidationMessage", function() { return exclusiveMinimumValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclusiveMaximumValidationMessage", function() { return exclusiveMaximumValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constValidationMessage", function() { return constValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternValidationMessage", function() { return patternValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkValidModelMessage", function() { return checkValidModelMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAgentUserMessage", function() { return validateAgentUserMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAgentUser", function() { return validateAgentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm5/ngx-formly-bootstrap.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_types_array_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/types/array.type */ "./app/app/shared/types/array.type.ts");
/* harmony import */ var _shared_types_object_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/types/object.type */ "./app/app/shared/types/object.type.ts");
/* harmony import */ var _shared_types_multischema_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/types/multischema.type */ "./app/app/shared/types/multischema.type.ts");
/* harmony import */ var _shared_types_null_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/types/null.type */ "./app/app/shared/types/null.type.ts");
/* harmony import */ var _shared_types_datepicker_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/types/datepicker.type */ "./app/app/shared/types/datepicker.type.ts");
/* harmony import */ var _shared_types_hidden_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/types/hidden.type */ "./app/app/shared/types/hidden.type.ts");
/* harmony import */ var _shared_types_textarea_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/types/textarea.type */ "./app/app/shared/types/textarea.type.ts");
/* harmony import */ var _shared_types_radio_type__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/types/radio.type */ "./app/app/shared/types/radio.type.ts");
/* harmony import */ var _shared_types_string_type__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/types/string.type */ "./app/app/shared/types/string.type.ts");
/* harmony import */ var _shared_types_select_type__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/types/select.type */ "./app/app/shared/types/select.type.ts");
/* harmony import */ var _shared_types_multicheckbox_type__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/types/multicheckbox.type */ "./app/app/shared/types/multicheckbox.type.ts");
/* harmony import */ var _shared_wrappers_formlyPanel_wrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/wrappers/formlyPanel.wrapper */ "./app/app/shared/wrappers/formlyPanel.wrapper.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "./app/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./app/app/app.component.ts");
/* harmony import */ var _lotTypeList_lotTypeList_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lotTypeList/lotTypeList.component */ "./app/app/lotTypeList/lotTypeList.component.ts");
/* harmony import */ var _lotType_lotType_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lotType/lotType.component */ "./app/app/lotType/lotType.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/data.service */ "./app/app/shared/data.service.ts");
/* harmony import */ var _shared_formly_json_schema_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/formly-json-schema.service */ "./app/app/shared/formly-json-schema.service.ts");



























function minItemsValidationMessage(err, field) {
    return "should NOT have fewer than " + field.templateOptions.minItems + " items";
}
function maxItemsValidationMessage(err, field) {
    return "should NOT have more than " + field.templateOptions.maxItems + " items";
}
function minlengthValidationMessage(err, field) {
    return "should NOT be shorter than " + field.templateOptions.minLength + " characters";
}
function maxlengthValidationMessage(err, field) {
    return "should NOT be longer than " + field.templateOptions.maxLength + " characters";
}
function minValidationMessage(err, field) {
    return "should be >= " + field.templateOptions.min;
}
function maxValidationMessage(err, field) {
    return "should be <= " + field.templateOptions.max;
}
function multipleOfValidationMessage(err, field) {
    return "should be multiple of " + field.templateOptions.step;
}
function exclusiveMinimumValidationMessage(err, field) {
    return "should be > " + field.templateOptions.step;
}
function exclusiveMaximumValidationMessage(err, field) {
    return "should be < " + field.templateOptions.step;
}
function constValidationMessage(err, field) {
    return "should be equal to constant \"" + field.templateOptions.const + "\"";
}
function patternValidationMessage(err, field) {
    return field.templateOptions.label + " is invalid.";
}
function checkValidModelMessage(err, field) {
    return "\"" + field.formControl.value + "\" is invalid " + field.templateOptions.label + ".";
}
function validateAgentUserMessage(err, field) {
    return "\"" + field.formControl.value + "\" is invalid " + field.templateOptions.label + ".";
}
function validateAgentUser(control) {
    var validAgentUsers = ['A001', 'A002', 'A003', 'A004', 'A005'];
    if (control.value) {
        if (validAgentUsers.includes(control.value))
            return null;
        return { 'validateAgentUser': false };
    }
    return null;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
                _lotTypeList_lotTypeList_component__WEBPACK_IMPORTED_MODULE_22__["LotTypeListComponent"],
                _lotType_lotType_component__WEBPACK_IMPORTED_MODULE_23__["LotTypeComponent"],
                _shared_types_array_type__WEBPACK_IMPORTED_MODULE_8__["ArrayTypeComponent"],
                _shared_types_object_type__WEBPACK_IMPORTED_MODULE_9__["ObjectTypeComponent"],
                _shared_types_multischema_type__WEBPACK_IMPORTED_MODULE_10__["MultiSchemaTypeComponent"],
                _shared_types_null_type__WEBPACK_IMPORTED_MODULE_11__["NullTypeComponent"],
                _shared_types_datepicker_type__WEBPACK_IMPORTED_MODULE_12__["DatepickerTypeComponent"],
                _shared_types_hidden_type__WEBPACK_IMPORTED_MODULE_13__["HiddenTypeComponent"],
                _shared_types_textarea_type__WEBPACK_IMPORTED_MODULE_14__["TextareaTypeComponent"],
                _shared_types_radio_type__WEBPACK_IMPORTED_MODULE_15__["RadioTypeComponent"],
                _shared_types_string_type__WEBPACK_IMPORTED_MODULE_16__["StringTypeComponent"],
                _shared_types_select_type__WEBPACK_IMPORTED_MODULE_17__["SelectTypeComponent"],
                _shared_types_multicheckbox_type__WEBPACK_IMPORTED_MODULE_18__["MulticheckboxTypeComponent"],
                _shared_wrappers_formlyPanel_wrapper__WEBPACK_IMPORTED_MODULE_19__["FormWrapperComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormlyBootstrapModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["FormlyModule"].forRoot({
                    validationMessages: [
                        { name: 'required', message: 'This field is required' },
                        { name: 'null', message: 'should be null' },
                        { name: 'minlength', message: minlengthValidationMessage },
                        { name: 'maxlength', message: maxlengthValidationMessage },
                        { name: 'min', message: minValidationMessage },
                        { name: 'max', message: maxValidationMessage },
                        { name: 'multipleOf', message: multipleOfValidationMessage },
                        { name: 'exclusiveMinimum', message: exclusiveMinimumValidationMessage },
                        { name: 'exclusiveMaximum', message: exclusiveMaximumValidationMessage },
                        { name: 'minItems', message: minItemsValidationMessage },
                        { name: 'maxItems', message: maxItemsValidationMessage },
                        { name: 'uniqueItems', message: 'should NOT have duplicate items' },
                        { name: 'const', message: constValidationMessage },
                        { name: 'pattern', message: patternValidationMessage },
                        { name: 'validateAgentUser', message: validateAgentUserMessage }
                    ],
                    wrappers: [
                        { name: 'form-wrapper', component: _shared_wrappers_formlyPanel_wrapper__WEBPACK_IMPORTED_MODULE_19__["FormWrapperComponent"] }
                    ],
                    types: [
                        { name: 'boolean', extends: 'checkbox' },
                        { name: 'selectFT', component: _shared_types_select_type__WEBPACK_IMPORTED_MODULE_17__["SelectTypeComponent"], wrappers: ['form-wrapper'] },
                        //{ name: 'selectFT', extends: 'select', wrappers: ['form-wrapper']  },
                        { name: 'enum', extends: 'selectFT' },
                        { name: 'null', component: _shared_types_null_type__WEBPACK_IMPORTED_MODULE_11__["NullTypeComponent"] },
                        { name: 'array', component: _shared_types_array_type__WEBPACK_IMPORTED_MODULE_8__["ArrayTypeComponent"] },
                        { name: 'object', component: _shared_types_object_type__WEBPACK_IMPORTED_MODULE_9__["ObjectTypeComponent"] },
                        { name: 'multischema', component: _shared_types_multischema_type__WEBPACK_IMPORTED_MODULE_10__["MultiSchemaTypeComponent"] },
                        { name: 'textareaFT', component: _shared_types_textarea_type__WEBPACK_IMPORTED_MODULE_14__["TextareaTypeComponent"], wrappers: ['form-wrapper'] },
                        { name: 'hidden', component: _shared_types_hidden_type__WEBPACK_IMPORTED_MODULE_13__["HiddenTypeComponent"] },
                        { name: 'datepicker', component: _shared_types_datepicker_type__WEBPACK_IMPORTED_MODULE_12__["DatepickerTypeComponent"], wrappers: ['form-wrapper'] },
                        { name: 'radioFT', component: _shared_types_radio_type__WEBPACK_IMPORTED_MODULE_15__["RadioTypeComponent"], wrappers: ['form-wrapper'] },
                        { name: 'multicheckboxFT', component: _shared_types_multicheckbox_type__WEBPACK_IMPORTED_MODULE_18__["MulticheckboxTypeComponent"], wrappers: ['form-wrapper'] },
                        { name: 'string', component: _shared_types_string_type__WEBPACK_IMPORTED_MODULE_16__["StringTypeComponent"], wrappers: ['form-wrapper'] },
                        //{ name: 'string', extends: 'input' },
                        {
                            name: 'number',
                            extends: 'string',
                            defaultOptions: {
                                templateOptions: {
                                    type: 'number',
                                },
                            },
                        },
                        {
                            name: 'integer',
                            extends: 'string',
                            defaultOptions: {
                                templateOptions: {
                                    type: 'number',
                                },
                            },
                        },
                        {
                            name: 'arrayFT',
                            extends: 'array'
                        },
                    ],
                    validators: [
                        { name: 'validateAgentUser', validation: validateAgentUser }
                    ]
                })
            ],
            providers: [_shared_data_service__WEBPACK_IMPORTED_MODULE_25__["DataService"], _shared_formly_json_schema_service__WEBPACK_IMPORTED_MODULE_26__["FormlyJsonschemaService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_24__["APP_BASE_HREF"], useValue: '/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/app/lotType/lotType.component.ts":
/*!**********************************************!*\
  !*** ./app/app/lotType/lotType.component.ts ***!
  \**********************************************/
/*! exports provided: LotTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotTypeComponent", function() { return LotTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_formly_json_schema_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/formly-json-schema.service */ "./app/app/shared/formly-json-schema.service.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/data.service */ "./app/app/shared/data.service.ts");




//import { FormlyJsonschema } from '@ngx-formly/core/json-schema';


var LotTypeComponent = /** @class */ (function () {
    function LotTypeComponent(route, router, fb, formlyJsonschema, data) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.formlyJsonschema = formlyJsonschema;
        this.data = data;
        this.title = 'Lot Type';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.options = {};
        this.fields = [{
                key: "LotTypeId",
                type: "input",
                className: "col-2",
                templateOptions: {
                    label: 'Lot Type Id',
                    required: true,
                    readonly: true,
                    hidden: true
                },
            },
            {
                key: "Title",
                type: "input",
                className: "col-12",
                templateOptions: {
                    label: 'Title',
                    required: true,
                    minLength: 5,
                    maxLength: 50
                },
            },
            {
                key: "Description",
                type: "textarea",
                className: "col-12",
                templateOptions: {
                    label: 'Description',
                    required: true,
                    rows: 4,
                    minLength: 5,
                    maxLength: 250
                },
                validation: {
                    messages: {
                        minLength: function (error, field) { return "Please enter atleast " + field.templateOptions.minLength + " characters."; },
                        maxLength: function (error, field) { return "Please enter not more than " + field.templateOptions.maxLength + " characters."; }
                    }
                }
            },
            {
                key: "Model",
                type: "input",
                defaultValue: "M000",
                className: "col-12",
                hideExpression: "!model.Description",
                templateOptions: {
                    label: "Model",
                    placeholder: "Enter Model here",
                    maxLength: 150
                },
                asyncValidators: {
                    checkAllowedModel: {
                        expression: function (control) {
                            return new Promise(function (resolve, reject) {
                                setTimeout(function () {
                                    resolve(_this.checkAllowedModel);
                                }, 1000);
                            });
                        },
                        message: '',
                    }
                },
                validation: {
                    checkAllowedModel: function (viewValue, modelValue, scope) { }
                }
            },
            {
                key: "AgentUsercode",
                type: "input",
                className: "col-12",
                templateOptions: {
                    label: "Agent Usercode",
                    maxLength: 150
                }
            },
            {
                key: "PublishedDate",
                type: "input",
                className: "col-6",
                templateOptions: {
                    label: "Published Date",
                    type: "date",
                    datepickerPopup: "dd.MM.yyyy"
                }
            },
            {
                key: "Options",
                type: "radio",
                className: "col-6",
                templateOptions: {
                    label: "Radio",
                    options: [
                        { value: 1, label: 'test 1' }
                    ]
                }
            },
            {
                key: "Options2",
                type: "radioFT",
                className: "col-6",
                templateOptions: {
                    label: "Radio FT",
                    options: [
                        { value: 1, label: 'test 1' },
                        { value: 1, label: 'test 2' }
                    ]
                }
            },
            {
                key: "LotPrice",
                type: "input",
                className: "col-6",
                templateOptions: {
                    label: "Lot Price",
                    type: "number",
                    min: 10,
                    max: 100
                },
                validation: {
                    messages: {
                        min: function (error, field) { return "Lot Price should be atleast " + field.templateOptions.min + "."; },
                        max: function (error, field) { return "Lot Price should be not more than " + field.templateOptions.max + "."; }
                    }
                }
            },
            {
                key: "Color",
                type: "multicheckbox",
                className: "col-12",
                templateOptions: {
                    label: "Color",
                    //multiple: true,
                    required: true,
                    options: [
                        { value: 0, label: "Red" },
                        { value: 1, label: "Orange" },
                        { value: 2, label: "Yellow" },
                        { value: 3, label: "Green" },
                        { value: 4, label: "Blue" },
                        { value: 5, label: "Indigo" },
                        { value: 6, label: "Violet" },
                        { value: 7, label: "Purple" },
                        { value: 8, label: "Pink" },
                        { value: 9, label: "White" },
                        { value: 10, label: "Black" }
                    ]
                }
            },
            {
                template: "<hr /><div><strong>Contact</strong></div>",
                className: "col-12"
            },
            {
                key: "Contact",
                templateOptions: { label: "Contact" },
                fieldGroupClassName: "row",
                className: "col-12",
                fieldGroup: [
                    {
                        key: "ContactId",
                        type: "input",
                        className: "col-12",
                        templateOptions: {
                            label: "Contact Id",
                            readonly: true
                        }
                    }, {
                        key: "Name",
                        type: "input",
                        className: "col-6",
                        templateOptions: {
                            label: "Name"
                        }
                    },
                    {
                        key: "Phone",
                        type: "input",
                        className: "col-6",
                        templateOptions: {
                            label: "Phone Number"
                        }
                    },
                    {
                        key: "Email",
                        type: "input",
                        className: "col-8",
                        templateOptions: {
                            type: "email",
                            label: "Email Address",
                            pattern: "^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$"
                        }
                    }
                ]
            }];
        this.fields3 = [
            {
                "type": "object",
                "templateOptions": {
                    "label": "LotTypeModel"
                },
                "fieldGroup": [
                    {
                        "key": "LotTypeId",
                        "type": "integer",
                        "templateOptions": {
                            "label": "Lot Type Id", "required": true
                        },
                        "ngModelElAttrs": {}
                    },
                    {
                        "key": "Title",
                        "type": "string",
                        "templateOptions": {
                            "label": "Title",
                            "minLength": 5,
                            "maxLength": 150,
                            "required": true
                        }
                    },
                    {
                        "key": "Description",
                        "type": "textarea",
                        "templateOptions": {
                            "label": "Description",
                            "minLength": 5,
                            "maxLength": 500,
                            "required": true,
                            "rows": 5
                        }
                    },
                    {
                        "key": "Model",
                        "type": "string",
                        "templateOptions": {
                            "label": "Model",
                            "maxLength": 150
                        },
                        "validators": {
                            "checkAllowedModel": {
                                "expression": this.checkAllowedModel,
                                "message": "Model provided is not allowed."
                            }
                        },
                        "validation": {
                            "checkAllowedModel": function (viewValue, modelValue, scope) { }
                        }
                    },
                    {
                        "key": "AgentUserCode",
                        "type": "string",
                        "templateOptions": {
                            "label": "Agent Usercode",
                            "maxLength": 150
                        }
                    },
                    {
                        "key": "PPublishedDate",
                        "type": "datepicker",
                        "templateOptions": {
                            "label": "Published Date",
                            "required": true,
                        }
                    },
                    {
                        "key": "LotPrice",
                        "type": "number",
                        "templateOptions": {
                            "label": "Lot Price",
                            "min": 10,
                            "max": 1000
                        }
                    },
                    {
                        "key": "Color",
                        "type": "enum",
                        "templateOptions": {
                            "label": "Color",
                            "description": "",
                            "multiple": false,
                            "options": [
                                { value: 0, label: "Red" },
                                { value: 1, label: "Orange" },
                                { value: 2, label: "Yellow" },
                                { value: 3, label: "Green" },
                                { value: 4, label: "Blue" },
                                { value: 5, label: "Indigo" },
                                { value: 6, label: "Violet" },
                                { value: 7, label: "Purple" },
                                { value: 8, label: "Pink" },
                                { value: 9, label: "White" },
                                { value: 10, label: "Black" }
                            ], "required": true
                        }
                    },
                    {
                        "key": "Contact",
                        "type": "object",
                        "templateOptions": {
                            "label": "Contact"
                        },
                        "fieldGroupClassName": "form-group row",
                        "fieldGroup": [
                            {
                                "type": "integer",
                                "templateOptions": {
                                    "label": "Contact Id",
                                    "readonly": true
                                },
                                "key": "ContactId"
                            },
                            {
                                "type": "string",
                                "className": "col-6",
                                "templateOptions": { "label": "Name" },
                                "key": "Name"
                            },
                            {
                                "type": "string",
                                "className": "col-6",
                                "templateOptions": {
                                    "label": "Phone Number"
                                },
                                "key": "Phone"
                            },
                            {
                                "key": "Email",
                                "type": "string",
                                "className": "col-8",
                                "templateOptions": {
                                    "label": "Email Address",
                                    "pattern": "^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$"
                                }
                            }
                        ]
                    }
                ]
            }
        ];
        this.schema2 = {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "LotType",
            "type": "object",
            "additionalProperties": false,
            "required": ["LotTypeId", "Title", "Description", "Color"],
            "properties": {
                "LotTypeId": {
                    "title": "Lot Type Id",
                    "type": "hidden",
                    "format": "int32"
                },
                "Title": {
                    "title": "Title",
                    "type": "string",
                    "maxLength": 150,
                    "minLength": 5
                },
                "Description": {
                    "title": "Description",
                    "type": "textarea",
                    "maxLength": 500,
                    "minLength": 5,
                    "rows": 4
                },
                "Model": {
                    "title": "Model",
                    "type": ["null", "string"],
                    "maxLength": 150
                },
                "AgentUserCode": {
                    "title": "Agent Usercode",
                    "type": ["null", "string"],
                    "maxLength": 150
                },
                "PublishedDate": {
                    "title": "Publish Date",
                    "type": "datepicker"
                },
                "LotPrice": {
                    "title": "Lot Price",
                    "type": "number",
                    "format": "decimal",
                    "maximum": 1000.0,
                    "minimum": 10.0
                },
                "Comments": {
                    "title": "Comments",
                    "type": "textarea",
                    "rows": 4
                },
                "IsItTrue": {
                    "title": "Is it true?",
                    "default": false,
                    "type": "boolean"
                },
                "Color": { "title": "Color", "minLength": 1, "$ref": "#/definitions/Color" }, "Contact": { "title": "Contact", "$ref": "#/definitions/Contact" }
            },
            "definitions": { "Color": { "type": "string", "description": "", "x-enumNames": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Purple", "Pink", "White", "Black"], "enum": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Purple", "Pink", "White", "Black"] }, "Contact": { "type": "object", "additionalProperties": false, "properties": { "ContactId": { "title": "Contact Id", "type": "integer", "format": "int32" }, "Name": { "title": "Name", "type": ["null", "string"] }, "Phone": { "title": "Phone Number", "type": ["null", "string"] }, "Email": { "title": "Email Address", "type": ["null", "string"], "pattern": "^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$" } } } }
        };
    }
    LotTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var lotTypeId = +this.route.snapshot.paramMap.get('id');
        this.data.loadLotTypeData(lotTypeId).subscribe(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), schema = _b[0], data = _b[1];
            _this.schema2 = schema;
            _this.fields2 = [_this.formlyJsonschema.toFieldConfig(_this.schema2)];
            _this.model = _this.data.lotType;
            _this.addValidators();
            _this.addEvents();
            console.log("fields: ", _this.fields2);
        });
        console.log('Form: ', this.form);
    };
    LotTypeComponent.prototype.submit = function () {
        var _this = this;
        console.log(JSON.stringify(this.model));
        if (this.form.valid) {
            this.data.saveLotType(this.model)
                .subscribe(function (sucess) {
                if (sucess) {
                    _this.router.navigate(['/lot-type-list']);
                }
            });
        }
    };
    LotTypeComponent.prototype.addValidators = function () {
        var _this = this;
        var modelField = this.fields2[0].fieldGroup.find(function (m) { return m.key === "Model"; });
        if (modelField) {
            modelField.asyncValidators = {
                /*checkAllowedModel: {
                    expression: this.checkAllowedModel,
                    message: "Model provided is not allowed."
                }
                */
                checkAllowedModel: {
                    expression: function (viewValue, modelValue) {
                        return new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                resolve(_this.checkAllowedModel(viewValue, modelValue));
                            }, 500);
                        });
                    },
                    message: 'Model provided is not allowed.',
                }
            };
            //modelField.validation = {};
            //modelField.validation.checkAllowedModel = function (viewValue, modelValue, scope) { };
        }
    };
    LotTypeComponent.prototype.addEvents = function () {
        var agentNameField = this.fields2[0].fieldGroup.find(function (m) { return m.key === "AgentName"; });
        var agentUserCodeField = this.fields2[0].fieldGroup.find(function (m) { return m.key === "AgentUserCode"; });
        if (agentNameField && agentUserCodeField) {
            agentUserCodeField.templateOptions.getAgentDetails = "this.getAgentDetails(field, $event)";
            agentUserCodeField.templateOptions.change = Function('field', '$event', agentUserCodeField.templateOptions.getAgentDetails).bind(this);
        }
    };
    LotTypeComponent.prototype.checkAllowedModel = function (vv, mv) {
        var invalidModels = ['M001', 'M002', 'M003', 'M004', 'M005'];
        if (invalidModels.includes(vv.value))
            return false;
        return true;
    };
    LotTypeComponent.prototype.getAgentDetails = function (field, event) {
        if (field) {
            if (field.formControl.valid && field.formControl.value.length > 0) {
                this.form.get('AgentName').setValue(this.data.getAgentDetails(field.formControl.value));
            }
        }
    };
    LotTypeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _shared_formly_json_schema_service__WEBPACK_IMPORTED_MODULE_4__["FormlyJsonschemaService"] },
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
    ]; };
    LotTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lot-type',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lotType.component.html */ "./node_modules/raw-loader/dist/cjs.js!./app/app/lotType/lotType.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.css */ "./app/app/app.component.css")).default]
        })
    ], LotTypeComponent);
    return LotTypeComponent;
}());



/***/ }),

/***/ "./app/app/lotTypeList/lotTypeList.component.ts":
/*!******************************************************!*\
  !*** ./app/app/lotTypeList/lotTypeList.component.ts ***!
  \******************************************************/
/*! exports provided: LotTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotTypeListComponent", function() { return LotTypeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./app/app/shared/data.service.ts");



var LotTypeListComponent = /** @class */ (function () {
    function LotTypeListComponent(data) {
        this.data = data;
        this.title = 'Lot Type List';
        this.lotTypes = [];
    }
    LotTypeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadLotTypes()
            .subscribe(function (lotTypes) {
            _this.lotTypes = lotTypes;
        });
    };
    LotTypeListComponent.ctorParameters = function () { return [
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    LotTypeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lot-type-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lotTypeList.component.html */ "./node_modules/raw-loader/dist/cjs.js!./app/app/lotTypeList/lotTypeList.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.css */ "./app/app/app.component.css")).default]
        })
    ], LotTypeListComponent);
    return LotTypeListComponent;
}());



/***/ }),

/***/ "./app/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./app/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.lotTypes = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    DataService.prototype.loadLotTypeData = function (lotTypeId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([this.loadLotTypeSchema(), this.loadLotType(lotTypeId)]);
    };
    DataService.prototype.loadLotTypeSchema = function () {
        var _this = this;
        return this.http.get("/api/lotType/lotTypeSchema")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.lotTypeSchema = JSON.parse(data);
            console.log("Schema", _this.lotTypeSchema);
            return _this.lotTypeSchema;
        }));
    };
    DataService.prototype.loadLotTypes = function () {
        var _this = this;
        return this.http.get("/api/lotType/")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log('Lot Types: ', data);
            _this.lotTypes = data;
            return _this.lotTypes;
        }));
    };
    DataService.prototype.loadLotType = function (lotTypeId) {
        var _this = this;
        return this.http.get("/api/lotType/" + lotTypeId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.lotType = data;
            console.log('Lot Type: ', _this.lotType);
            return _this.lotType;
        }));
    };
    DataService.prototype.saveLotType = function (lotType) {
        return this.http.post("/api/lotType/saveLotType", lotType, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log("save result: ", data);
            return true;
        }));
    };
    DataService.prototype.getAgentDetails = function (agentUserCode) {
        return agentUserCode + " Name";
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./app/app/shared/formly-json-schema.service.ts":
/*!******************************************************!*\
  !*** ./app/app/shared/formly-json-schema.service.ts ***!
  \******************************************************/
/*! exports provided: FormlyJsonschemaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyJsonschemaService", function() { return FormlyJsonschemaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





function isEmpty(v) {
    return v === '' || v === undefined || v === null;
}
function clearFieldModel(field) {
    if (field.key) {
        field.formControl.patchValue(undefined);
        field.formControl.markAsUntouched();
        delete field.model[field.key];
    }
    else if (field.fieldGroup) {
        field.fieldGroup.forEach(function (f) { return clearFieldModel(f); });
    }
}
function checkField(field) {
    field.options._checkField(field);
}
function isFieldValid(field) {
    if (field.key) {
        return field.formControl.valid;
    }
    return field.fieldGroup.every(function (f) { return isFieldValid(f); });
}
var FormlyJsonschemaService = /** @class */ (function () {
    function FormlyJsonschemaService() {
    }
    FormlyJsonschemaService.prototype.toFieldConfig = function (schema, options) {
        return this._toFieldConfig(schema, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ schema: schema }, (options || {})));
    };
    FormlyJsonschemaService.prototype._toFieldConfig = function (schema, options) {
        var _this = this;
        schema = this.resolveSchema(schema, options);
        var field = {
            type: this.guessType(schema),
            defaultValue: schema.default,
            templateOptions: {
                label: schema.title,
                readonly: schema.readOnly,
                description: schema.description,
            },
        };
        switch (field.type) {
            case 'null': {
                this.addValidator(field, 'null', function (_a) {
                    var value = _a.value;
                    return value === null;
                });
                break;
            }
            case 'number':
            case 'integer': {
                field.parsers = [function (v) { return isEmpty(v) ? null : Number(v); }];
                if (schema.hasOwnProperty('minimum')) {
                    field.templateOptions.min = schema.minimum;
                }
                if (schema.hasOwnProperty('maximum')) {
                    field.templateOptions.max = schema.maximum;
                }
                if (schema.hasOwnProperty('exclusiveMinimum')) {
                    field.templateOptions.exclusiveMinimum = schema.exclusiveMinimum;
                    this.addValidator(field, 'exclusiveMinimum', function (_a) {
                        var value = _a.value;
                        return isEmpty(value) || (value > schema.exclusiveMinimum);
                    });
                }
                if (schema.hasOwnProperty('exclusiveMaximum')) {
                    field.templateOptions.exclusiveMaximum = schema.exclusiveMaximum;
                    this.addValidator(field, 'exclusiveMaximum', function (_a) {
                        var value = _a.value;
                        return isEmpty(value) || (value < schema.exclusiveMaximum);
                    });
                }
                if (schema.hasOwnProperty('multipleOf')) {
                    field.templateOptions.step = schema.multipleOf;
                    this.addValidator(field, 'multipleOf', function (_a) {
                        var value = _a.value;
                        return isEmpty(value) || (value % schema.multipleOf === 0);
                    });
                }
                break;
            }
            case 'textareaFT':
            case 'string': {
                var schemaType = schema.type;
                if (Array.isArray(schemaType) && schemaType.includes('null')) {
                    field.parsers = [function (v) { return isEmpty(v) ? null : v; }];
                }
                ['minLength', 'maxLength', 'pattern', 'readonly'].forEach(function (prop) {
                    if (schema.hasOwnProperty(prop)) {
                        field.templateOptions[prop] = schema[prop];
                    }
                });
                break;
            }
            case 'object': {
                field.fieldGroup = [];
                var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](this.resolveDependencies(schema), 2), propDeps_1 = _a[0], schemaDeps_1 = _a[1];
                Object.keys(schema.properties || {}).forEach(function (key) {
                    var f = _this._toFieldConfig(schema.properties[key], options);
                    field.fieldGroup.push(f);
                    f.key = key;
                    if (Array.isArray(schema.required) && schema.required.indexOf(key) !== -1) {
                        f.templateOptions.required = true;
                    }
                    if (!f.templateOptions.required && propDeps_1[key]) {
                        f.expressionProperties = {
                            'templateOptions.required': function (m) { return m && propDeps_1[key].some(function (k) { return !isEmpty(m[k]); }); },
                        };
                    }
                    if (schemaDeps_1[key]) {
                        field.fieldGroup.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this._toFieldConfig(schemaDeps_1[key], options), { hideExpression: function (m) { return !m || isEmpty(m[key]); } }));
                    }
                });
                if (schema.oneOf) {
                    field.fieldGroup.push(this.resolveMultiSchema('oneOf', schema.oneOf, options));
                }
                if (schema.anyOf) {
                    field.fieldGroup.push(this.resolveMultiSchema('anyOf', schema.anyOf, options));
                }
                break;
            }
            case 'arrayFT':
            case 'array': {
                if (schema.hasOwnProperty('minItems')) {
                    field.templateOptions.minItems = schema.minItems;
                    this.addValidator(field, 'minItems', function (_a) {
                        var value = _a.value;
                        return isEmpty(value) || (value.length >= schema.minItems);
                    });
                }
                if (schema.hasOwnProperty('maxItems')) {
                    field.templateOptions.maxItems = schema.maxItems;
                    this.addValidator(field, 'maxItems', function (_a) {
                        var value = _a.value;
                        return isEmpty(value) || (value.length <= schema.maxItems);
                    });
                }
                if (schema.hasOwnProperty('uniqueItems')) {
                    field.templateOptions.uniqueItems = schema.uniqueItems;
                    this.addValidator(field, 'uniqueItems', function (_a) {
                        var value = _a.value;
                        if (isEmpty(value) || !schema.uniqueItems) {
                            return true;
                        }
                        var uniqueItems = Array.from(new Set(value.map(function (v) { return JSON.stringify(v); })));
                        return uniqueItems.length === value.length;
                    });
                }
                // resolve items schema needed for isEnum check
                if (schema.items && !Array.isArray(schema.items)) {
                    schema.items = this.resolveSchema(schema.items, options);
                }
                // TODO: remove isEnum check once adding an option to skip extension
                if (!this.isEnum(schema)) {
                    field.fieldGroup = [];
                    Object.defineProperty(field, 'fieldArray', {
                        get: function () {
                            if (!Array.isArray(schema.items)) {
                                // When items is a single schema, the additionalItems keyword is meaningless, and it should not be used.
                                return _this._toFieldConfig(schema.items, options);
                            }
                            var itemSchema = schema.items[field.fieldGroup.length]
                                ? schema.items[field.fieldGroup.length]
                                : schema.additionalItems;
                            return itemSchema
                                ? _this._toFieldConfig(itemSchema, options)
                                : {};
                        },
                        enumerable: true,
                        configurable: true,
                    });
                }
                break;
            }
            case 'selectFT': {
                if (schema.hasOwnProperty('multiple')) {
                    field.templateOptions.multiple = schema.multiple;
                }
                if (schema.hasOwnProperty('options')) {
                    field.templateOptions.options = schema.options;
                }
                break;
            }
            case 'multicheckboxFT':
            case 'radioFT':
            case 'radio': {
                if (schema.hasOwnProperty('options')) {
                    field.templateOptions.options = schema.options;
                }
                break;
            }
        }
        if (field.type && schema.hasOwnProperty('validators')) {
            Object.keys(schema.validators || {}).forEach(function (key) {
                _this.addValidator(field, key, schema.validators[key]);
            });
        }
        if (field.type && schema.hasOwnProperty('validation')) {
            Object.keys(schema.validation || {}).forEach(function (key) {
                _this.addValidation(field, key, schema.validation[key]);
            });
        }
        if (schema.hasOwnProperty('const')) {
            field.templateOptions.const = schema.const;
            this.addValidator(field, 'const', function (_a) {
                var value = _a.value;
                return value === schema.const;
            });
            if (!field.type) {
                field.defaultValue = schema.const;
            }
        }
        if (this.isEnum(schema)) {
            field.templateOptions.multiple = field.type === 'array';
            field.type = 'enum';
            field.templateOptions.options = this.toEnumOptions(schema);
        }
        // map in possible formlyConfig options from the widget property
        if (schema['widget'] && schema['widget'].formlyConfig) {
            field = Object(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["ɵreverseDeepMerge"])(schema['widget'].formlyConfig, field);
        }
        // if there is a map function passed in, use it to allow the user to
        // further customize how fields are being mapped
        return options.map ? options.map(field, schema) : field;
    };
    FormlyJsonschemaService.prototype.resolveSchema = function (schema, options) {
        if (schema.$ref) {
            schema = this.resolveDefinition(schema, options);
        }
        if (schema.allOf) {
            schema = this.resolveAllOf(schema, options);
        }
        return schema;
    };
    FormlyJsonschemaService.prototype.resolveAllOf = function (_a, options) {
        var _this = this;
        var allOf = _a.allOf, baseSchema = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["allOf"]);
        if (!allOf.length) {
            throw Error("allOf array can not be empty " + allOf + ".");
        }
        return allOf.reduce(function (base, schema) {
            schema = _this.resolveSchema(schema, options);
            if (base.required && schema.required) {
                base.required = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](base.required, schema.required);
            }
            if (schema.uniqueItems) {
                base.uniqueItems = schema.uniqueItems;
            }
            // resolve to min value
            ['maxLength', 'maximum', 'exclusiveMaximum', 'maxItems', 'maxProperties']
                .forEach(function (prop) {
                if (!isEmpty(base[prop]) && !isEmpty(schema[prop])) {
                    base[prop] = base[prop] < schema[prop] ? base[prop] : schema[prop];
                }
            });
            // resolve to max value
            ['minLength', 'minimum', 'exclusiveMinimum', 'minItems', 'minProperties']
                .forEach(function (prop) {
                if (!isEmpty(base[prop]) && !isEmpty(schema[prop])) {
                    base[prop] = base[prop] > schema[prop] ? base[prop] : schema[prop];
                }
            });
            return Object(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["ɵreverseDeepMerge"])(base, schema);
        }, baseSchema);
    };
    FormlyJsonschemaService.prototype.resolveMultiSchema = function (mode, schemas, options) {
        var _this = this;
        var subscription = null;
        return {
            type: 'multischema',
            fieldGroup: [
                {
                    type: 'enum',
                    templateOptions: {
                        multiple: mode === 'anyOf',
                        options: schemas
                            .map(function (s, i) { return ({ label: s.title, value: i }); }),
                    },
                    hooks: {
                        onInit: function (f) {
                            var modeField = f.parent.fieldGroup[1];
                            var value = modeField.fieldGroup
                                .map(function (f, i) { return isFieldValid(f) ? i : -1; })
                                .filter(function (v) { return v !== -1; });
                            var normalizedValue = [value.length === 0 ? 0 : value[0]];
                            var formattedValue = mode === 'anyOf' ? normalizedValue : normalizedValue[0];
                            f.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](formattedValue);
                            setTimeout(function () { return checkField(modeField); });
                            subscription = f.formControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(formattedValue), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])()).subscribe(function (_a) {
                                var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), p = _b[0], q = _b[1];
                                if (Array.isArray(p)) {
                                    if (p.length >= q.length) {
                                        var indexToClear = p.find(function (v) { return !q.includes(v); });
                                        clearFieldModel(modeField.fieldGroup[indexToClear]);
                                    }
                                }
                                else {
                                    clearFieldModel(modeField);
                                }
                                checkField(modeField);
                            });
                        },
                        onDestroy: function () {
                            subscription && subscription.unsubscribe();
                        },
                    },
                },
                {
                    fieldGroup: schemas.map(function (s, i) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this._toFieldConfig(s, options), { hideExpression: function (m, fs, f) {
                            var control = f.parent.parent.fieldGroup[0].formControl;
                            return !control || (Array.isArray(control.value)
                                ? !control.value.includes(i)
                                : control.value !== i);
                        } })); }),
                },
            ],
        };
    };
    FormlyJsonschemaService.prototype.resolveDefinition = function (schema, options) {
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](schema.$ref.split('#/'), 2), uri = _a[0], pointer = _a[1];
        if (uri) {
            throw Error("Remote schemas for " + schema.$ref + " not supported yet.");
        }
        var definition = !pointer ? null : pointer.split('/').reduce(function (def, path) { return def && def.hasOwnProperty(path) ? def[path] : null; }, options.schema);
        if (!definition) {
            throw Error("Cannot find a definition for " + schema.$ref + ".");
        }
        if (definition.$ref) {
            return this.resolveDefinition(definition, options);
        }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, definition, ['title', 'description', 'default'].reduce(function (annotation, p) {
            if (schema.hasOwnProperty(p)) {
                annotation[p] = schema[p];
            }
            return annotation;
        }, {}));
    };
    FormlyJsonschemaService.prototype.resolveDependencies = function (schema) {
        var deps = {};
        var schemaDeps = {};
        Object.keys(schema.dependencies || {}).forEach(function (prop) {
            var dependency = schema.dependencies[prop];
            if (Array.isArray(dependency)) {
                // Property dependencies
                dependency.forEach(function (dep) {
                    if (!deps[dep]) {
                        deps[dep] = [prop];
                    }
                    else {
                        deps[dep].push(prop);
                    }
                });
            }
            else {
                // schema dependencies
                schemaDeps[prop] = dependency;
            }
        });
        return [deps, schemaDeps];
    };
    FormlyJsonschemaService.prototype.guessType = function (schema) {
        var type = schema.type;
        if (!type && schema.properties) {
            return 'object';
        }
        if (Array.isArray(type)) {
            if (type.length === 1) {
                return type[0];
            }
            if (type.length === 2 && type.indexOf('null') !== -1) {
                return type[type[0] === 'null' ? 1 : 0];
            }
        }
        return type;
    };
    FormlyJsonschemaService.prototype.addValidator = function (field, name, validator) {
        field.validators = field.validators || {};
        field.validators[name] = validator;
    };
    FormlyJsonschemaService.prototype.addValidation = function (field, name, validation) {
        field.validation = field.validation || {};
        field.validation[name] = validation;
    };
    FormlyJsonschemaService.prototype.isEnum = function (schema) {
        var isConst = function (s) { return s.hasOwnProperty('const') || (s.enum && s.enum.length === 1); };
        return schema.enum
            || (schema.anyOf && schema.anyOf.every(isConst))
            || (schema.oneOf && schema.oneOf.every(isConst))
            || schema.uniqueItems && schema.items && !Array.isArray(schema.items) && this.isEnum(schema.items);
    };
    FormlyJsonschemaService.prototype.toEnumOptions = function (schema) {
        if (schema.enum) {
            return schema.enum.map(function (value) { return ({ value: value, label: value }); });
        }
        var toEnum = function (s) {
            var value = s.hasOwnProperty('const') ? s.const : s.enum[0];
            return { value: value, label: s.title || value };
        };
        if (schema.anyOf) {
            return schema.anyOf.map(toEnum);
        }
        if (schema.oneOf) {
            return schema.oneOf.map(toEnum);
        }
        return this.toEnumOptions(schema.items);
    };
    FormlyJsonschemaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], FormlyJsonschemaService);
    return FormlyJsonschemaService;
}());



/***/ }),

/***/ "./app/app/shared/types/array.type.ts":
/*!********************************************!*\
  !*** ./app/app/shared/types/array.type.ts ***!
  \********************************************/
/*! exports provided: ArrayTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayTypeComponent", function() { return ArrayTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var ArrayTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ArrayTypeComponent, _super);
    function ArrayTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'formly-array-type',
            template: "\n  <div class=\"mb-3\">\n    <legend *ngIf=\"to.label\">{{ to.label }}</legend>\n    <p *ngIf=\"to.description\">{{ to.description }}</p>\n\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError && formControl.errors\">\n      <formly-validation-message [field]=\"field\"></formly-validation-message>\n    </div>\n\n    <div *ngFor=\"let field of field.fieldGroup;let i = index;\" class=\"row\">\n    <hr/>\n      <formly-field class=\"col-10\" [field]=\"field\"></formly-field>\n      <div class=\"col-2 text-right\">\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"remove(i)\">-</button>\n      </div>\n    </div>\n    <div class=\"d-flex flex-row-reverse\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"add()\">+</button>\n    </div>\n  </div>\n  ",
        })
    ], ArrayTypeComponent);
    return ArrayTypeComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldArrayType"]));



/***/ }),

/***/ "./app/app/shared/types/datepicker.type.ts":
/*!*************************************************!*\
  !*** ./app/app/shared/types/datepicker.type.ts ***!
  \*************************************************/
/*! exports provided: DatepickerTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerTypeComponent", function() { return DatepickerTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var DatepickerTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DatepickerTypeComponent, _super);
    function DatepickerTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            defaultValue: {},
        };
        return _this;
    }
    DatepickerTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'datepicker-field-type',
            template: "\n    <input class=\"form-control col-4\" placeholder=\"{{ to.placeholder }}\" [formControl]=\"formControl\" [formlyAttributes]=\"field\" type=\"date\">\n    <p *ngIf=\"to.description\">{{ to.description }}</p>\n\n    <div class=\"invalid-feedback\" style=\"display: block;\" *ngIf=\"showError && formControl.errors\">\n        <formly-validation-message [field]=\"field\"></formly-validation-message>\n    </div>",
        })
    ], DatepickerTypeComponent);
    return DatepickerTypeComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));



/***/ }),

/***/ "./app/app/shared/types/hidden.type.ts":
/*!*********************************************!*\
  !*** ./app/app/shared/types/hidden.type.ts ***!
  \*********************************************/
/*! exports provided: HiddenTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenTypeComponent", function() { return HiddenTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var HiddenTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HiddenTypeComponent, _super);
    function HiddenTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            defaultValue: {},
        };
        return _this;
    }
    HiddenTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'hidden-field-type',
            template: "<label *ngIf=\"to.label\" style=\"display:none\">{{ to.label }} {{to.required ? \" * \" : \"\"}}</label>\n    <p *ngIf=\"to.description\">{{ to.description }}</p>\n    <div class=\"input-group\">\n        <input class=\"form-control\" placeholder=\"{{ to.placeholder }}\" [formControl]=\"formControl\" [formlyAttributes]=\"field\"\n              type=\"hidden\">\n    </div>\n",
        })
    ], HiddenTypeComponent);
    return HiddenTypeComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));



/***/ }),

/***/ "./app/app/shared/types/multicheckbox.type.ts":
/*!****************************************************!*\
  !*** ./app/app/shared/types/multicheckbox.type.ts ***!
  \****************************************************/
/*! exports provided: MulticheckboxTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MulticheckboxTypeComponent", function() { return MulticheckboxTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var MulticheckboxTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MulticheckboxTypeComponent, _super);
    function MulticheckboxTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MulticheckboxTypeComponent.prototype.onChange = function (value, checked) {
        if (checked) {
            this.formControl.value.push(value);
        }
        else {
            var index = this.formControl.value.findIndex(function (o) { return JSON.stringify(o) === JSON.stringify(value); });
            if (index >= 0)
                this.formControl.value.splice(index, 1);
        }
    };
    MulticheckboxTypeComponent.prototype.isChecked = function (fcValue, optValue) {
        if (fcValue) {
            var fcOption = fcValue.find(function (o) { return JSON.stringify(o) === JSON.stringify(optValue); });
            if (fcOption)
                return true;
        }
        return false;
    };
    MulticheckboxTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'multicheckbox-field-type',
            template: "\n    <div *ngFor=\"let option of to.options;let i = index;\">\n          <input type=\"checkbox\"\n           [id]=\"id + '_' + i\"\n           [formlyAttributes]=\"field\"\n           [value]=\"option.value\"\n           [checked]=\"isChecked(formControl.value, option.value)\"\n           (change)=\"onChange(option.value, $event.target.checked)\">\n          <label class=\"col-10\">{{option.label}}</label>\n        </div>\n    <p *ngIf=\"to.description\">{{ to.description }}</p>\n  ",
        })
    ], MulticheckboxTypeComponent);
    return MulticheckboxTypeComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));



/***/ }),

/***/ "./app/app/shared/types/multischema.type.ts":
/*!**************************************************!*\
  !*** ./app/app/shared/types/multischema.type.ts ***!
  \**************************************************/
/*! exports provided: MultiSchemaTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSchemaTypeComponent", function() { return MultiSchemaTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var MultiSchemaTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MultiSchemaTypeComponent, _super);
    function MultiSchemaTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiSchemaTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'formly-multi-schema-type',
            template: "\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <legend *ngIf=\"to.label\">{{ to.label }}</legend>\n        <p *ngIf=\"to.description\">{{ to.description }}</p>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError && formControl.errors\">\n          <formly-validation-message [field]=\"field\"></formly-validation-message>\n        </div>\n        <formly-field *ngFor=\"let f of field.fieldGroup\" [field]=\"f\"></formly-field>\n      </div>\n    </div>\n  ",
        })
    ], MultiSchemaTypeComponent);
    return MultiSchemaTypeComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));



/***/ }),

/***/ "./app/app/shared/types/null.type.ts":
/*!*******************************************!*\
  !*** ./app/app/shared/types/null.type.ts ***!
  \*******************************************/
/*! exports provided: NullTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullTypeComponent", function() { return NullTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var NullTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NullTypeComponent, _super);
    function NullTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NullTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'formly-null-type',
            template: '',
        })
    ], NullTypeComponent);
    return NullTypeComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));



/***/ }),

/***/ "./app/app/shared/types/object.type.ts":
/*!*********************************************!*\
  !*** ./app/app/shared/types/object.type.ts ***!
  \*********************************************/
/*! exports provided: ObjectTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectTypeComponent", function() { return ObjectTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var ObjectTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ObjectTypeComponent, _super);
    function ObjectTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            defaultValue: {},
        };
        return _this;
    }
    ObjectTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'formly-object-type',
            template: "\n    <div class=\"mb-3\">\n      <legend *ngIf=\"to.label\">{{ to.label }}</legend>\n      <p *ngIf=\"to.description\">{{ to.description }}</p>\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError && formControl.errors\">\n        <formly-validation-message [field]=\"field\"></formly-validation-message>\n      </div>\n      <formly-field *ngFor=\"let f of field.fieldGroup\" [field]=\"f\"></formly-field>\n    </div>\n  ",
        })
    ], ObjectTypeComponent);
    return ObjectTypeComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));



/***/ }),

/***/ "./app/app/shared/types/radio.type.ts":
/*!********************************************!*\
  !*** ./app/app/shared/types/radio.type.ts ***!
  \********************************************/
/*! exports provided: RadioTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioTypeComponent", function() { return RadioTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var RadioTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RadioTypeComponent, _super);
    function RadioTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioTypeComponent.prototype.isEqual = function (optValue, fcValue) {
        if (JSON.stringify(optValue) === JSON.stringify(fcValue))
            return true;
        return false;
    };
    RadioTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'radio-field-type',
            template: "\n    <div *ngFor=\"let option of to.options;let i = index;\">\n          <input type=\"radio\" \n           [name]=\"to.name\"\n           [formControl]=\"formControl\" \n           [formlyAttributes]=\"field\"\n           [value]=\"option.value\" [checked]=\"this.isEqual(option.value, formControl.value)\">\n          <label class=\"col-10\">{{option.label}}</label>\n        </div>\n    <p *ngIf=\"to.description\">{{ to.description }}</p>\n  ",
        })
    ], RadioTypeComponent);
    return RadioTypeComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));



/***/ }),

/***/ "./app/app/shared/types/select.type.ts":
/*!*********************************************!*\
  !*** ./app/app/shared/types/select.type.ts ***!
  \*********************************************/
/*! exports provided: SelectTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTypeComponent", function() { return SelectTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var SelectTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectTypeComponent, _super);
    function SelectTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectTypeComponent.prototype.compareFn = function (val1, val2) {
        return (JSON.stringify(val1) === JSON.stringify(val2));
    };
    SelectTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'select-field-type',
            template: "\n    <select [formControl]=\"formControl\" [formlyAttributes]=\"field\" class=\"form-control col-4\" multiple *ngIf=\"to.multiple\" [compareWith]=\"compareFn\">\n        <option *ngFor=\"let option of to.options;let i = index;\" [ngValue]=\"option.value\" \n            >{{option.label}}</option>\n    </select>\n    <select [formControl]=\"formControl\" [formlyAttributes]=\"field\" class=\"form-control col-4\" *ngIf=\"!to.multiple\" [compareWith]=\"compareFn\">\n        <option *ngFor=\"let option of to.options;let i = index;\" [ngValue]=\"option.value\" \n            >{{option.label}}</option>\n    </select>\n    <p *ngIf=\"to.description\">{{ to.description }}</p>\n  ",
        })
    ], SelectTypeComponent);
    return SelectTypeComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));



/***/ }),

/***/ "./app/app/shared/types/string.type.ts":
/*!*********************************************!*\
  !*** ./app/app/shared/types/string.type.ts ***!
  \*********************************************/
/*! exports provided: StringTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringTypeComponent", function() { return StringTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var StringTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StringTypeComponent, _super);
    function StringTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            defaultValue: {},
        };
        return _this;
    }
    StringTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'string-field-type',
            template: "\n    <input class=\"form-control\" placeholder=\"{{ to.placeholder }}\" [formControl]=\"formControl\" [formlyAttributes]=\"field\" [type]=\"field.type\" >\n\n    <div class=\"invalid-feedback\" style=\"display: block;\" *ngIf=\"showError && formControl.errors\">\n        <formly-validation-message [field]=\"field\"></formly-validation-message>\n    </div>\n  ",
        })
    ], StringTypeComponent);
    return StringTypeComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));



/***/ }),

/***/ "./app/app/shared/types/textarea.type.ts":
/*!***********************************************!*\
  !*** ./app/app/shared/types/textarea.type.ts ***!
  \***********************************************/
/*! exports provided: TextareaTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaTypeComponent", function() { return TextareaTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var TextareaTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextareaTypeComponent, _super);
    function TextareaTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            defaultValue: {},
        };
        return _this;
    }
    TextareaTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'textarea-field-type',
            template: "\n    <textarea class=\"form-control\" placeholder=\"{{ to.placeholder }}\" [formControl]=\"formControl\" [formlyAttributes]=\"field\" rows=\"4\"></textarea>\n\n    <div class=\"invalid-feedback\" style=\"display: block;\" *ngIf=\"showError && formControl.errors\">\n        <formly-validation-message [field]=\"field\"></formly-validation-message>\n    </div>\n  ",
        })
    ], TextareaTypeComponent);
    return TextareaTypeComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));



/***/ }),

/***/ "./app/app/shared/wrappers/formlyPanel.wrapper.ts":
/*!********************************************************!*\
  !*** ./app/app/shared/wrappers/formlyPanel.wrapper.ts ***!
  \********************************************************/
/*! exports provided: FormWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapperComponent", function() { return FormWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var FormWrapperComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FormWrapperComponent, _super);
    function FormWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fieldComponent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true })
    ], FormWrapperComponent.prototype, "fieldComponent", void 0);
    FormWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-wrapper',
            template: "\n    <div class=\"form-group\">\n    <div class=\"input-group\">\n        <label [for]=\"id\" *ngIf=\"to.label\" class=\"col-2\">{{ to.label }} {{to.required ? \" * \" : \"\"}}</label>\n        \n        <div class=\"col-10\"><ng-container #fieldComponent></ng-container></div>\n    </div>\n    \n    </div>\n  "
        })
    ], FormWrapperComponent);
    return FormWrapperComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldWrapper"]));



/***/ }),

/***/ "./app/environments/environment.ts":
/*!*****************************************!*\
  !*** ./app/environments/environment.ts ***!
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

var environment = {
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

/***/ "./app/main.ts":
/*!*********************!*\
  !*** ./app/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./app/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./app/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./app/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./app/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./app/app/lotType/lotType.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./app/app/lotType/lotType.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n    <formly-form [model]=\"model\" [fields]=\"fields2\" [options]=\"options\" [form]=\"form\"></formly-form>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n    <button type=\"button\" routerLink=\"/lot-type-list\" class=\"btn btn-danger\">Cancel</button>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./app/app/lotTypeList/lotTypeList.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./app/app/lotTypeList/lotTypeList.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n    <a routerLink=\"/lot-type/0\">Create New</a>\r\n</p>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th>Title</th>\r\n            <th>Description</th>\r\n            <th>Model</th>\r\n            <th>Color</th>\r\n            <th>Published Date</th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let lotType of lotTypes\">\r\n            <td>{{lotType.Title}}</td>\r\n            <td>{{lotType.Description}}</td>\r\n            <td>{{lotType.Model}}</td>\r\n            <td>{{lotType.Color}}</td>\r\n            <td>{{lotType.PublishedDate}}</td>\r\n            <td>\r\n                <a routerLink=\"/lot-type/{{lotType.LotTypeId}}\">Edit</a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./app/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AplusProjects\TestApps\JsonSchemaTestApp\RazorTest.Web\app\main.ts */"./app/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map