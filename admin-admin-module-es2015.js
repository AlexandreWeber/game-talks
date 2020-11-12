(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<po-page-default p-title=\"Jogadores\"\r\n                 [p-actions]=\"pageActions\">\r\n\r\n  <div class=\"po-row\">\r\n\r\n    <po-input name=\"input\"\r\n      (keyup.enter)=\"savePlayerInfo()\"\r\n      p-label=\"Arquivo com as perguntas\"\r\n      class=\"po-md-12 po-lg-12 po-xl-12\"\r\n      [(ngModel)]=\"questionsUrl\">\r\n    </po-input>\r\n\r\n    <po-widget *ngFor=\"let user of users\"\r\n               (click)=\"showValue = true;\"\r\n               class=\"po-md-3 po-lg-3 po-xl-4\"\r\n               [p-title]=\"user.name\">\r\n\r\n      <po-info p-orientation=\"horizontal\"\r\n               p-label=\"Pontuação\"\r\n               [p-value]=\"user.points | number : '1.2-3'\">\r\n      </po-info>\r\n\r\n      <po-info p-orientation=\"horizontal\"\r\n               *ngIf=\"showValue\"\r\n               p-label=\"Pontuação Total\"\r\n               [p-value]=\"user.points\">\r\n      </po-info>\r\n\r\n    </po-widget>\r\n  </div>\r\n</po-page-default>\r\n\r\n<po-modal #gameModal\r\n          [p-primary-action]=\"gameModalActionPrimary\"\r\n          [p-secondary-action]=\"gameModalActionSecondary\"\r\n          p-size=\"xl\">\r\n\r\n  <div class=\"po-row po-md-12 po-lg-12 po-xl-12\">\r\n    <p class=\"question\">{{ questionText }}</p>\r\n  </div>\r\n\r\n\r\n  <div class=\"po-row\">\r\n    <div class=\"po-md-12 po-lg-12 po-xl-12\">\r\n      <p class=\"timer-box\" [ngClass]=\"{'red': timer <= 5}\">{{ timer | number : '1.2-2' }}</p>\r\n    </div>\r\n  </div>\r\n\r\n\t<div class=\"po-row po-md-12 po-lg-12 po-xl-12\" *ngIf=\"answers[0]\">\r\n\t\t\t<div class=\"po-row\">\r\n\t\t\t\t<div class=\"po-row po-md-6 po-lg-6 po-xl-6\">\r\n\t\t\t\t\t<div class=\"option\" style=\"background-color: #0c9abe;\">\r\n\t\t\t\t\t\t<p class=\"option-text\">{{ answers[0].text }}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"po-row po-md-6 po-lg-6 po-xl-6\">\r\n\t\t\t\t\t<div class=\"option\" style=\"background-color: #ab4391;\">\r\n\t\t\t\t\t\t<p class=\"option-text\">{{ answers[1].text }}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n      </div>\r\n\r\n      <div class=\"po-row\">\r\n\t\t\t\t<div class=\"po-row po-md-6 po-lg-6 po-xl-6\">\r\n\t\t\t\t\t<div class=\"option\" style=\"background-color: #ea9b3e;\">\r\n\t\t\t\t\t\t<p class=\"option-text\">{{ answers[2].text }}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"po-row po-md-6 po-lg-6 po-xl-6\">\r\n\t\t\t\t\t<div class=\"option\" style=\"background-color: #abc249;\">\r\n\t\t\t\t\t\t<p class=\"option-text\">{{ answers[3].text }}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n      </div>\r\n\t</div>\r\n\r\n\r\n  <div class=\"po-row bottom-modal\" *ngIf=\"isShowAnswers\">\r\n    <div class=\"po-md-12 po-lg-12 po-xl-12\">\r\n      <po-chart [p-series]=\"chartAnswers\"\r\n                [p-type]=\"chartAnswersType\">\r\n      </po-chart>\r\n    </div>\r\n  </div>\r\n</po-modal>\r\n\r\n<po-modal #passwordModal \r\n\t\t\t\t\t[p-primary-action]=\"passwordActionPrimary\"\r\n\t\t\t\t\t(keyup.enter)=\"validatePassword()\"\r\n\t\t\t\t\tp-click-out=\"false\"\r\n    \t\t\tp-hide-close=\"true\">\r\n\t\r\n\t<p>Tem certeza que você deveria estar aqui?</p>\r\n\t\r\n\t<po-password name=\"password\"\r\n\t\t\t\t\t\t\t [(ngModel)]=\"password\"\r\n  \t\t\t\t\t\t p-label=\"Super senha secreta\">\r\n\t</po-password>\r\n\r\n</po-modal>");

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");




const routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  color: #000;\n}\n\n.timer-box {\n  display: flex;\n  justify-content: center;\n  padding-top: 30px;\n  font-size: 50px;\n  padding-bottom: 50px;\n}\n\n.bottom-modal {\n  padding-bottom: 25px;\n}\n\n.question {\n  font-size: 50px;\n  line-height: 50px;\n}\n\n.red {\n  color: red;\n}\n\n.option-text {\n  color: #fff;\n}\n\n.option {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  color: #fff;\n  font-size: 30px;\n  width: 100%;\n  height: 100%;\n  padding: 5px 15px 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vQzpcXFBlcnNvbmFsXFx0ZWNoLXRhbGtzXFxwby1rYWhvb3RcXGZyb250LWVuZC9zcmNcXGFwcFxcYWRtaW5cXGFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxVQUFBO0FDRUY7O0FEQ0E7RUFDQyxXQUFBO0FDRUQ7O0FEQ0E7RUFDRSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi50aW1lci1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uYm90dG9tLW1vZGFsIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxufVxyXG4ucXVlc3Rpb24ge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm9wdGlvbi10ZXh0IHtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm9wdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XHJcbn0iLCJwIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi50aW1lci1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5ib3R0b20tbW9kYWwge1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5vcHRpb24tdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3B0aW9uIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _portinari_portinari_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portinari/portinari-ui */ "./node_modules/@portinari/portinari-ui/fesm2015/portinari-portinari-ui.js");
/* harmony import */ var _shared_services_questions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/questions.service */ "./src/app/shared/services/questions.service.ts");





let AdminComponent = class AdminComponent {
    constructor(socket, notification, questionsService) {
        this.socket = socket;
        this.notification = notification;
        this.questionsService = questionsService;
        this.users = [];
        this.currentQuestion = 0;
        this.currentAnswers = [];
        this.questions = [];
        this.isShowAnswers = false;
        this.chartAnswers = [];
        this.chartAnswersType = _portinari_portinari_ui__WEBPACK_IMPORTED_MODULE_3__["PoChartType"].Pie;
        this.questionText = '';
        this.answers = [];
        this.showValue = false;
        this.colors = ['red', 'red', 'red', 'red'];
        this.timer = 20;
        this.numberOfAnswers = 0;
        this.password = '';
        this.questionsUrl = 'https://firebasestorage.googleapis.com/v0/b/kahoot-315c5.appspot.com/o/front.json?alt=media&token=2f4cfc4e-0955-4db7-8171-c27a79888718';
    }
    ngOnInit() {
        this.passwordModal.open();
        this.setUpComponents();
        this.socket.on('newUser', user => {
            this.notification.success(`${user.name} entrou no jogo!`);
            this.users.push(user);
        });
        this.socket.on('receiveAnswer', answer => {
            this.users.map((user) => {
                if (user.name === answer.user) {
                    if (this.questions[this.currentQuestion - 1].correctAnswer === answer.option) {
                        user.points += 200 * this.timer;
                    }
                }
            });
            this.chartAnswers.map((chart) => {
                if (chart.category === answer.optionName) {
                    chart.value++;
                }
            });
            this.currentAnswers.push(answer.option);
            this.orderPlayers();
            this.notification.warning(`O jogador ${answer.user} respondeu!`);
            this.numberOfAnswers++;
            if (this.numberOfAnswers === this.users.length) {
                this.timer = 0;
            }
        });
    }
    generateChart() {
        this.chartAnswers = [];
        this.questions[this.currentQuestion - 1].options.map((option, index) => {
            this.chartAnswers.push({
                category: option.text,
                value: 0,
                color: this.colors[index]
            });
        });
    }
    setUpComponents() {
        this.pageActions = [
            {
                label: 'Iniciar Jogo Front',
                action: () => this.startGame('front'),
                disabled: () => this.password !== 'supersenha'
            },
            {
                label: 'Iniciar Jogo Back',
                action: () => this.startGame('back'),
                disabled: () => this.password !== 'supersenha'
            }
        ];
        this.gameModalActionPrimary = {
            action: () => this.nextQuestion(),
            label: 'Próxima pergunta'
        };
        this.gameModalActionSecondary = {
            action: () => this.showAnsers(),
            label: 'Ver respostas'
        };
        this.passwordActionPrimary = {
            action: () => this.validatePassword(),
            label: 'Acessar'
        };
    }
    orderPlayers() {
        this.users.sort((a, b) => {
            if (a.points > b.points) {
                return -1;
            }
            else if (b.points > a.points) {
                return 1;
            }
            return 0;
        });
    }
    startGame(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentQuestion = 0;
            this.questions = yield this.questionsService.getQuestions(this.questionsUrl);
            const question = this.questions[this.currentQuestion];
            this.currentQuestion++;
            this.socket.emit('startGame', question);
            this.questionText = question.text;
            this.answers = question.options;
            this.gameModal.open();
            this.generateChart();
            this.startTimer();
        });
    }
    nextQuestion() {
        if (this.currentQuestion === this.questions.length) {
            this.notification.success('Fim de Jogo');
            this.gameModal.close();
            this.socket.emit('endGame');
        }
        const question = this.questions[this.currentQuestion];
        this.currentQuestion++;
        this.socket.emit('nextQuestion', question);
        this.questionText = question.text;
        this.answers = question.options;
        this.timer = 20;
        this.currentAnswers = [];
        this.isShowAnswers = false;
        this.numberOfAnswers = 0;
        this.generateChart();
    }
    startTimer() {
        this.timer = 20;
        this.timeOut$ = setInterval(() => {
            if (this.timer > 0) {
                this.timer = this.timer - 0.01;
            }
            else {
                this.timer = 0;
                this.socket.emit('questionEnd', true);
            }
        }, 10);
    }
    showAnsers() {
        this.isShowAnswers = true;
    }
    validatePassword() {
        if (this.password === 'supersenha') {
            this.passwordModal.close();
        }
        else {
            this.notification.error('Senha errada! Você deveria mesmo estar aqui?');
        }
    }
};
AdminComponent.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] },
    { type: _portinari_portinari_ui__WEBPACK_IMPORTED_MODULE_3__["PoNotificationService"] },
    { type: _shared_services_questions_service__WEBPACK_IMPORTED_MODULE_4__["QuestionsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gameModal', { static: true })
], AdminComponent.prototype, "gameModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('passwordModal', { static: true })
], AdminComponent.prototype, "passwordModal", void 0);
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _portinari_portinari_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @portinari/portinari-ui */ "./node_modules/@portinari/portinari-ui/fesm2015/portinari-portinari-ui.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_module_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/module/shared/shared.module */ "./src/app/shared/module/shared/shared.module.ts");








let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
            _portinari_portinari_ui__WEBPACK_IMPORTED_MODULE_5__["PoModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _shared_module_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/shared/services/questions.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/questions.service.ts ***!
  \******************************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuestionsService = class QuestionsService {
    constructor() { }
    getQuestions(url) {
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = yield fetch(url);
            const json = yield response.json();
            resolve(json);
        }));
    }
};
QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuestionsService);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map