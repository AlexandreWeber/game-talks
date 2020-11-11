(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/answer/answer.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/answer/answer.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"option\">\r\n    <p class=\"option-text\">{{ option }}</p>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./src/app/shared/components/answer/answer.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/components/answer/answer.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".po-widget-body {\n  height: 100% !important;\n}\n\n.option {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  color: #fff;\n  font-size: 30px;\n  width: 100%;\n  height: 100%;\n  padding: 5px 15px 5px 15px;\n}\n\n.container {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYW5zd2VyL0M6XFxQZXJzb25hbFxcdGVjaC10YWxrc1xccG8ta2Fob290XFxmcm9udC1lbmQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcYW5zd2VyXFxhbnN3ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Fuc3dlci9hbnN3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hbnN3ZXIvYW5zd2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvLXdpZGdldC1ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm9wdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5vcHRpb24tdGV4dCB7XHJcbn1cclxuIiwiLnBvLXdpZGdldC1ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/answer/answer.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/components/answer/answer.component.ts ***!
          \**************************************************************/
        /*! exports provided: AnswerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function () { return AnswerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AnswerComponent = /** @class */ (function () {
                function AnswerComponent() {
                }
                AnswerComponent.prototype.ngOnInit = function () {
                };
                AnswerComponent.prototype.ngAfterViewInit = function () {
                    var el = document.querySelector("#" + this.name + " .container");
                    el.style.backgroundColor = this.color;
                };
                return AnswerComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AnswerComponent.prototype, "color", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AnswerComponent.prototype, "name", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AnswerComponent.prototype, "option", void 0);
            AnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-answer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./answer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/answer/answer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./answer.component.scss */ "./src/app/shared/components/answer/answer.component.scss")).default]
                })
            ], AnswerComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/module/shared/shared.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/module/shared/shared.module.ts ***!
          \*******************************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return SharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/answer/answer.component */ "./src/app/shared/components/answer/answer.component.ts");
            var SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_3__["AnswerComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [
                        _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_3__["AnswerComponent"]
                    ]
                })
            ], SharedModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
//# sourceMappingURL=common-es5.js.map