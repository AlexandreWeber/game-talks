(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-game-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div *ngIf=\"userLoaded && !answerStopped && isGameReady\">\r\n    <div class=\"\">\r\n      <br/>\r\n      <div class=\"po-row\">\r\n        <app-answer id=\"answerOne\"\r\n                    name=\"answerOne\"\r\n                    class=\"po-lg-12 po-md-12 po-xl-12 po-sm-12\"\r\n                    color=\"#0c9abe\"\r\n                    (click)=\"validateAnswer(question.options[0])\"\r\n                    [option]=\"question.options[0].text\">\r\n        </app-answer>\r\n        <app-answer id=\"answerTwo\"\r\n                    class=\"po-lg-12 po-md-12 po-xl-12 po-sm-12\"\r\n                    name=\"answerTwo\"\r\n                    color=\"#ab4391\"\r\n                    (click)=\"validateAnswer(question.options[1])\"\r\n                    [option]=\"question.options[1].text\">\r\n        </app-answer>\r\n      </div>\r\n\r\n      <div class=\"po-row\">\r\n        <app-answer id=\"answerThree\"\r\n                    class=\"po-lg-12 po-md-12 po-xl-12 po-sm-12\"\r\n                    name=\"answerThree\"\r\n                    color=\"#ea9b3e\"\r\n                    (click)=\"validateAnswer(question.options[2])\"\r\n                    [option]=\"question.options[2].text\">\r\n        </app-answer>\r\n        <app-answer id=\"answerFour\"\r\n                    class=\"po-lg-12 po-md-12 po-xl-12 po-sm-12\"\r\n                    name=\"answerFour\"\r\n                    color=\"#abc249\"\r\n                    (click)=\"validateAnswer(question.options[3])\"\r\n                    [option]=\"question.options[3].text\">\r\n        </app-answer>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"next-question-box\" *ngIf=\"answerStopped || !isGameReady || endGame\">\r\n    <p *ngIf=\"!endGame\">{{ !isGameReady ? 'Aguarde o início do jogo': 'Aguarde a próxima pergunta'}}</p>\r\n    <p *ngIf=\"endGame\">{{ 'Fim de jogo :)'}}</p>\r\n  </div>\r\n</div>\r\n<po-modal #playerInfoModal\r\n          p-hide-close=\"true\"\r\n          p-size=\"sm\"\r\n          [p-primary-action]=\"primaryAction\"\r\n          p-title=\"Quem é você?\">\r\n\r\n  <po-input name=\"input\"\r\n            (keyup.enter)=\"savePlayerInfo()\"\r\n            p-label=\"Digite seu nome\"\r\n            [(ngModel)]=\"userName\">\r\n  </po-input>\r\n</po-modal>\r\n");
            /***/ 
        }),
        /***/ "./src/app/game/game-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/game/game-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: GameRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRoutingModule", function () { return GameRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.component */ "./src/app/game/game.component.ts");
            var routes = [
                {
                    path: '',
                    component: _game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]
                }
            ];
            var GameRoutingModule = /** @class */ (function () {
                function GameRoutingModule() {
                }
                return GameRoutingModule;
            }());
            GameRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], GameRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/game/game.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/game/game.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".timer-box {\n  display: flex;\n  justify-content: center;\n  padding-top: 30px;\n  font-size: 50px;\n}\n\n.next-question-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 25px;\n  height: 100%;\n}\n\n.red {\n  color: red;\n}\n\n.padding-top-150 {\n  padding-top: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9DOlxcUGVyc29uYWxcXHRlY2gtdGFsa3NcXHBvLWthaG9vdFxcZnJvbnQtZW5kL3NyY1xcYXBwXFxnYW1lXFxnYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZXItYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuLm5leHQtcXVlc3Rpb24tYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnBhZGRpbmctdG9wLTE1MCB7XHJcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG59XHJcbiIsIi50aW1lci1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLm5leHQtcXVlc3Rpb24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZGRpbmctdG9wLTE1MCB7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/game/game.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/game/game.component.ts ***!
          \****************************************/
        /*! exports provided: GameComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function () { return GameComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _portinari_portinari_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @portinari/portinari-ui */ "./node_modules/@portinari/portinari-ui/fesm2015/portinari-portinari-ui.js");
            /* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
            var GameComponent = /** @class */ (function () {
                function GameComponent(notification, socket) {
                    var _this = this;
                    this.notification = notification;
                    this.socket = socket;
                    this.userName = '';
                    this.userLoaded = false;
                    this.answerStopped = false;
                    this.answered = false;
                    this.isGameReady = false;
                    this.question = {};
                    this.endGame = false;
                    this.primaryAction = {
                        action: function () { return _this.savePlayerInfo(); },
                        label: 'Que comecem os jogos :)'
                    };
                }
                GameComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.playerInfoModal.open();
                    this.socket.on('newGame', function (question) {
                        _this.isGameReady = true;
                        _this.question = question;
                    });
                    this.socket.on('newQuestion', function (question) {
                        _this.question = question;
                        _this.answerStopped = false;
                    });
                    this.socket.on('receiveQuestionEnd', function (end) {
                        _this.answerStopped = end;
                    });
                    this.socket.on('receiveEndGame', function () {
                        _this.endGame = true;
                        _this.answerStopped = true;
                    });
                };
                GameComponent.prototype.savePlayerInfo = function () {
                    if (this.userName !== '') {
                        this.userLoaded = true;
                        this.playerInfoModal.close();
                        this.socket.emit('login', { name: this.userName, points: 0 });
                    }
                    else {
                        this.notification.error('O seu nome por favor :)');
                    }
                };
                GameComponent.prototype.validateAnswer = function (option) {
                    if (this.answerStopped) {
                        return;
                    }
                    this.socket.emit('validateAnswer', {
                        user: this.userName, option: option.id, optionName: option.text
                    });
                    this.answerStopped = true;
                };
                return GameComponent;
            }());
            GameComponent.ctorParameters = function () { return [
                { type: _portinari_portinari_ui__WEBPACK_IMPORTED_MODULE_2__["PoNotificationService"] },
                { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('playerInfoModal', { static: true })
            ], GameComponent.prototype, "playerInfoModal", void 0);
            GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-game',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.scss */ "./src/app/game/game.component.scss")).default]
                })
            ], GameComponent);
            /***/ 
        }),
        /***/ "./src/app/game/game.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/game/game.module.ts ***!
          \*************************************/
        /*! exports provided: GameModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function () { return GameModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-routing.module */ "./src/app/game/game-routing.module.ts");
            /* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game.component */ "./src/app/game/game.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _portinari_portinari_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @portinari/portinari-ui */ "./node_modules/@portinari/portinari-ui/fesm2015/portinari-portinari-ui.js");
            /* harmony import */ var _shared_module_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/module/shared/shared.module */ "./src/app/shared/module/shared/shared.module.ts");
            var GameModule = /** @class */ (function () {
                function GameModule() {
                }
                return GameModule;
            }());
            GameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _game_routing_module__WEBPACK_IMPORTED_MODULE_3__["GameRoutingModule"],
                        _portinari_portinari_ui__WEBPACK_IMPORTED_MODULE_6__["PoModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _shared_module_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
                    ]
                })
            ], GameModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=game-game-module-es2015.js.map
//# sourceMappingURL=game-game-module-es5.js.map
//# sourceMappingURL=game-game-module-es5.js.map