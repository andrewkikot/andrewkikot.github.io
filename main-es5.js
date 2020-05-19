function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_head_toolbar_head_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/head-toolbar/head-toolbar.component */
    "./src/app/components/head-toolbar/head-toolbar.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-head-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dashboard");
        }
      },
      directives: [_components_head_toolbar_head_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["HeadToolbarComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_head_toolbar_head_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/head-toolbar/head-toolbar.component */
    "./src/app/components/head-toolbar/head-toolbar.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_new_issue_dialog_new_issue_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/new-issue-dialog/new-issue-dialog.component */
    "./src/app/components/new-issue-dialog/new-issue-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _components_issue_issue_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/issue/issue.component */
    "./src/app/components/issue/issue.component.ts");
    /* harmony import */


    var _components_board_column_board_column_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/board-column/board-column.component */
    "./src/app/components/board-column/board-column.component.ts");
    /* harmony import */


    var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-indexed-db */
    "./node_modules/ngx-indexed-db/__ivy_ngcc__/fesm2015/ngx-indexed-db.js");
    /* harmony import */


    var _components_new_workspace_dialog_new_workspace_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/new-workspace-dialog/new-workspace-dialog.component */
    "./src/app/components/new-workspace-dialog/new-workspace-dialog.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/confirm-dialog/confirm-dialog.component */
    "./src/app/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
    /* harmony import */


    var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pipes/truncate.pipe */
    "./src/app/pipes/truncate.pipe.ts");

    var dbConfig = {
      name: 'kanbangDB',
      version: 1,
      objectStoresMeta: [{
        store: 'issues',
        storeConfig: {
          keyPath: 'id',
          autoIncrement: true
        },
        storeSchema: [{
          name: 'title',
          keypath: 'title',
          options: {
            unique: false
          }
        }, {
          name: 'status',
          keypath: 'status',
          options: {
            unique: false
          }
        }, {
          name: 'createdDate',
          keypath: 'createdDate',
          options: {
            unique: false
          }
        }, {
          name: 'dueDate',
          keypath: 'dueDate',
          options: {
            unique: false
          }
        }, {
          name: 'wsId',
          keypath: 'wsId',
          options: {
            unique: false
          }
        }]
      }, {
        store: 'workspaces',
        storeConfig: {
          keyPath: 'id',
          autoIncrement: true
        },
        storeSchema: [{
          name: 'title',
          keypath: 'title',
          options: {
            unique: false
          }
        }, {
          name: 'color',
          keypath: 'color',
          options: {
            unique: false
          }
        }, {
          name: 'order',
          keypath: 'order',
          options: {
            unique: false
          }
        }]
      }]
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
      }), _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], ngx_indexed_db__WEBPACK_IMPORTED_MODULE_16__["NgxIndexedDBModule"].forRoot(dbConfig), _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_27__["OrderModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_head_toolbar_head_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["HeadToolbarComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _components_new_issue_dialog_new_issue_dialog_component__WEBPACK_IMPORTED_MODULE_11__["NewIssueDialogComponent"], _components_issue_issue_component__WEBPACK_IMPORTED_MODULE_14__["IssueComponent"], _components_board_column_board_column_component__WEBPACK_IMPORTED_MODULE_15__["BoardColumnComponent"], _components_new_workspace_dialog_new_workspace_dialog_component__WEBPACK_IMPORTED_MODULE_17__["NewWorkspaceDialogComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ConfirmDialogComponent"], _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_28__["TruncatePipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], ngx_indexed_db__WEBPACK_IMPORTED_MODULE_16__["NgxIndexedDBModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_27__["OrderModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_head_toolbar_head_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["HeadToolbarComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _components_new_issue_dialog_new_issue_dialog_component__WEBPACK_IMPORTED_MODULE_11__["NewIssueDialogComponent"], _components_issue_issue_component__WEBPACK_IMPORTED_MODULE_14__["IssueComponent"], _components_board_column_board_column_component__WEBPACK_IMPORTED_MODULE_15__["BoardColumnComponent"], _components_new_workspace_dialog_new_workspace_dialog_component__WEBPACK_IMPORTED_MODULE_17__["NewWorkspaceDialogComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ConfirmDialogComponent"], _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_28__["TruncatePipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
          }), _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], ngx_indexed_db__WEBPACK_IMPORTED_MODULE_16__["NgxIndexedDBModule"].forRoot(dbConfig), _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_27__["OrderModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/board-column/board-column.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/board-column/board-column.component.ts ***!
    \*******************************************************************/

  /*! exports provided: BoardColumnComponent */

  /***/
  function srcAppComponentsBoardColumnBoardColumnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardColumnComponent", function () {
      return BoardColumnComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _services_issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/issue.service */
    "./src/app/services/issue.service.ts");
    /* harmony import */


    var _services_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/utils */
    "./src/app/services/utils.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _issue_issue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../issue/issue.component */
    "./src/app/components/issue/issue.component.ts");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");

    function BoardColumnComponent_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-issue", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var issue_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragData", issue_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("issue", issue_r2);
      }
    }

    function BoardColumnComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BoardColumnComponent_div_6_Template_div_cdkDropListDropped_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.drop($event, ctx_r3.board);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardColumnComponent_div_6_div_1_Template, 2, 2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "orderBy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r0.issues);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r0.issues, "order"));
      }
    }

    var BoardColumnComponent = /*#__PURE__*/function () {
      function BoardColumnComponent(issueManager, utils) {
        _classCallCheck(this, BoardColumnComponent);

        this.issueManager = issueManager;
        this.utils = utils;
      }

      _createClass(BoardColumnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.issueManager.getAllIssuesByWs(this.board.id).then(function (res) {
            _this.issues = res;
          });
        }
      }, {
        key: "onDeleteWs",
        value: function onDeleteWs() {
          var _this2 = this;

          this.utils.pushConfirm({
            message: 'A you sure?',
            okText: 'OK',
            cancelText: 'CANCEL'
          }).subscribe(function (res) {
            if (res) {
              _this2.issueManager.deleteWs(_this2.board);
            }
          });
        }
      }, {
        key: "drop",
        value: function drop(event, board) {
          var _this3 = this;

          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);

            if (event.currentIndex !== event.container.data[event.currentIndex].order) {
              event.container.data.forEach(function (issue, i) {
                return _this3.issueManager.updateIssues(issue, i, issue.wsId);
              });
            }
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            event.previousContainer.data.forEach(function (issue, i) {
              return _this3.issueManager.updateIssues(issue, i, issue.wsId);
            });
            event.container.data.forEach(function (issue, i) {
              return _this3.issueManager.updateIssues(issue, i, board.id);
            });
          }
        }
      }]);

      return BoardColumnComponent;
    }();

    BoardColumnComponent.ɵfac = function BoardColumnComponent_Factory(t) {
      return new (t || BoardColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"]));
    };

    BoardColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoardColumnComponent,
      selectors: [["app-board-column"]],
      inputs: {
        board: "board"
      },
      decls: 7,
      vars: 2,
      consts: [[1, "title"], ["type", "link", "mat-icon-button", "", 3, "click"], [1, "drop-list"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", 3, "cdkDragData", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "cdkDragData"], [3, "issue"]],
      template: function BoardColumnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardColumnComponent_Template_button_click_1_listener() {
            return ctx.onDeleteWs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BoardColumnComponent_div_6_Template, 3, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.board.title, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.board);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _issue_issue_component__WEBPACK_IMPORTED_MODULE_7__["IssueComponent"]],
      pipes: [ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderPipe"]],
      styles: ["[_nghost-%COMP%] {\n  flex: 1 1 auto;\n  margin: 0 5px;\n  background-color: #f5f5f5;\n  max-width: 300px;\n  border-radius: 3px 3px 0 0;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .drop-list[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: calc(100% - 40px);\n}\n[_nghost-%COMP%]   .drop-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-height: calc(100% - 40px);\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  background-color: #dddddd;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.title[_ngcontent-%COMP%]:hover    > button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.title[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin: -20px 0 0 0;\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC1jb2x1bW4vQzpcXHdvcmtcXGthbmJhbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJvYXJkLWNvbHVtblxcYm9hcmQtY29sdW1uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JvYXJkLWNvbHVtbi9ib2FyZC1jb2x1bW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQ0k7RUFDRSw2QkFBQTtBQ0NOO0FESUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDREY7QURJSTtFQUNFLFVBQUE7QUNGTjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQtY29sdW1uL2JvYXJkLWNvbHVtbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBtYXJnaW46IDAgNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAuZHJvcC1saXN0IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgPiBidXR0b24ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgPiBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbjogLTIwcHggMCAwIDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtYXJnaW46IDAgNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC5kcm9wLWxpc3Qge1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbn1cbjpob3N0IC5kcm9wLWxpc3QgPiBkaXYge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnRpdGxlOmhvdmVyID4gYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbn1cbi50aXRsZSA+IGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICBtYXJnaW46IC0yMHB4IDAgMCAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardColumnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-board-column',
          templateUrl: './board-column.component.html',
          styleUrls: ['./board-column.component.scss']
        }]
      }], function () {
        return [{
          type: _services_issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueManager"]
        }, {
          type: _services_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"]
        }];
      }, {
        board: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/confirm-dialog/confirm-dialog.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/confirm-dialog/confirm-dialog.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ConfirmDialogComponent */

  /***/
  function srcAppComponentsConfirmDialogConfirmDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
      return ConfirmDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var ConfirmDialogComponent = /*#__PURE__*/function () {
      function ConfirmDialogComponent(dialogRef, data) {
        _classCallCheck(this, ConfirmDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(ConfirmDialogComponent, [{
        key: "onCancel",
        value: function onCancel() {
          this.dialogRef.close(null);
        }
      }, {
        key: "onConfirm",
        value: function onConfirm() {
          this.dialogRef.close(true);
        }
      }]);

      return ConfirmDialogComponent;
    }();

    ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
      return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmDialogComponent,
      selectors: [["app-confirm-dialog"]],
      decls: 8,
      vars: 3,
      consts: [[1, "modal-window"], [1, "confirm-message"], [1, "footer"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"]],
      template: function ConfirmDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_4_listener() {
            return ctx.onConfirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
            return ctx.onCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.message, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.okText, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.cancelText, " ");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confirm-dialog',
          templateUrl: './confirm-dialog.component.html',
          styleUrls: ['./confirm-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../constants/events */
    "./src/app/constants/events.ts");
    /* harmony import */


    var _services_event_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/event-manager.service */
    "./src/app/services/event-manager.service.ts");
    /* harmony import */


    var _services_issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/issue.service */
    "./src/app/services/issue.service.ts");
    /* harmony import */


    var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-indexed-db */
    "./node_modules/ngx-indexed-db/__ivy_ngcc__/fesm2015/ngx-indexed-db.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _board_column_board_column_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../board-column/board-column.component */
    "./src/app/components/board-column/board-column.component.ts");

    function DashboardComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-board-column", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var board_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("board", board_r1);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(eventManager, issueManager, dbService) {
        _classCallCheck(this, DashboardComponent);

        this.eventManager = eventManager;
        this.issueManager = issueManager;
        this.dbService = dbService;
        this.registerEvents();
        this.onBoardUpdate();
      }

      _createClass(DashboardComponent, [{
        key: "registerEvents",
        value: function registerEvents() {
          var _this4 = this;

          this.updateBoard = this.eventManager.subscribe(_constants_events__WEBPACK_IMPORTED_MODULE_1__["BOARD_UPDATE"], function () {
            _this4.onBoardUpdate();
          });
          this.addIssueEvent = this.eventManager.subscribe(_constants_events__WEBPACK_IMPORTED_MODULE_1__["ISSUE_ADD"], function (data) {
            if (data && data.content) {
              _this4.issueManager.constructNewIssue(data.content);
            }
          });
          this.addWorkspaceEvent = this.eventManager.subscribe(_constants_events__WEBPACK_IMPORTED_MODULE_1__["WS_ADD"], function (data) {
            if (data && data.content) {
              _this4.issueManager.constructNewWorkspace(data.content);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.eventManager.destroy(this.addIssueEvent);
          this.eventManager.destroy(this.addWorkspaceEvent);
        }
      }, {
        key: "onBoardUpdate",
        value: function onBoardUpdate() {
          var _this5 = this;

          this.dbService.getAll('issues').then(function (issues) {
            return _this5.issues = issues;
          });
          this.dbService.getAll('workspaces').then(function (ws) {
            return _this5.workspaces = ws;
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_manager_service__WEBPACK_IMPORTED_MODULE_2__["JhiEventManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__["NgxIndexedDBService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 2,
      vars: 1,
      consts: [["cdkDropListGroup", "", 1, "board"], [4, "ngFor", "ngForOf"], [3, "board"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workspaces);
        }
      },
      directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDropListGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _board_column_board_column_component__WEBPACK_IMPORTED_MODULE_7__["BoardColumnComponent"]],
      styles: [".board[_ngcontent-%COMP%] {\n  padding: 10px 5px;\n  display: flex;\n  flex-wrap: nowrap;\n  height: calc(100% - 84px);\n  overflow: hidden;\n  background-color: #868ba9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQzpcXHdvcmtcXGthbmJhbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkIHtcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gODRweCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY4YmE5O1xyXG59XHJcbiIsIi5ib2FyZCB7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4NHB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2OGJhOTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _services_event_manager_service__WEBPACK_IMPORTED_MODULE_2__["JhiEventManager"]
        }, {
          type: _services_issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueManager"]
        }, {
          type: ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__["NgxIndexedDBService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/head-toolbar/head-toolbar.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/head-toolbar/head-toolbar.component.ts ***!
    \*******************************************************************/

  /*! exports provided: HeadToolbarComponent */

  /***/
  function srcAppComponentsHeadToolbarHeadToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadToolbarComponent", function () {
      return HeadToolbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _new_issue_dialog_new_issue_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../new-issue-dialog/new-issue-dialog.component */
    "./src/app/components/new-issue-dialog/new-issue-dialog.component.ts");
    /* harmony import */


    var _new_workspace_dialog_new_workspace_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../new-workspace-dialog/new-workspace-dialog.component */
    "./src/app/components/new-workspace-dialog/new-workspace-dialog.component.ts");
    /* harmony import */


    var _constants_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../constants/events */
    "./src/app/constants/events.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_event_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/event-manager.service */
    "./src/app/services/event-manager.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var HeadToolbarComponent = /*#__PURE__*/function () {
      function HeadToolbarComponent(dialog, eventManager) {
        _classCallCheck(this, HeadToolbarComponent);

        this.dialog = dialog;
        this.eventManager = eventManager;
      }

      _createClass(HeadToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addWorkspace",
        value: function addWorkspace() {
          var _this6 = this;

          var dialogRef = this.dialog.open(_new_workspace_dialog_new_workspace_dialog_component__WEBPACK_IMPORTED_MODULE_2__["NewWorkspaceDialogComponent"], {
            width: '70%',
            hasBackdrop: true
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this6.eventManager.broadcast({
                name: _constants_events__WEBPACK_IMPORTED_MODULE_3__["WS_ADD"],
                content: result
              });
            }
          });
        }
      }, {
        key: "addIssue",
        value: function addIssue() {
          var _this7 = this;

          var dialogRef = this.dialog.open(_new_issue_dialog_new_issue_dialog_component__WEBPACK_IMPORTED_MODULE_1__["NewIssueDialogComponent"], {
            width: '70%',
            hasBackdrop: true
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this7.eventManager.broadcast({
                name: _constants_events__WEBPACK_IMPORTED_MODULE_3__["ISSUE_ADD"],
                content: result
              });
            }
          });
        }
      }]);

      return HeadToolbarComponent;
    }();

    HeadToolbarComponent.ɵfac = function HeadToolbarComponent_Factory(t) {
      return new (t || HeadToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_manager_service__WEBPACK_IMPORTED_MODULE_5__["JhiEventManager"]));
    };

    HeadToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeadToolbarComponent,
      selectors: [["app-head-toolbar"]],
      decls: 8,
      vars: 0,
      consts: [["color", "primary"], [1, "logo"], [1, "pusher"], ["mat-button", "", 3, "click"]],
      template: function HeadToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " KAN-bang ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadToolbarComponent_Template_button_click_4_listener() {
            return ctx.addWorkspace();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ADD SPACE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadToolbarComponent_Template_button_click_6_listener() {
            return ctx.addIssue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ADD ISSUE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
      styles: [".pusher[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkLXRvb2xiYXIvQzpcXHdvcmtcXGthbmJhbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWQtdG9vbGJhclxcaGVhZC10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWQtdG9vbGJhci9oZWFkLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkLXRvb2xiYXIvaGVhZC10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB1c2hlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIiwiLnB1c2hlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-head-toolbar',
          templateUrl: './head-toolbar.component.html',
          styleUrls: ['./head-toolbar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _services_event_manager_service__WEBPACK_IMPORTED_MODULE_5__["JhiEventManager"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/issue/issue.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/issue/issue.component.ts ***!
    \*****************************************************/

  /*! exports provided: IssueComponent */

  /***/
  function srcAppComponentsIssueIssueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IssueComponent", function () {
      return IssueComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pipes/truncate.pipe */
    "./src/app/pipes/truncate.pipe.ts");

    function IssueComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "truncate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.issue.description, 100));
      }
    }

    var IssueComponent = /*#__PURE__*/function () {
      function IssueComponent() {
        _classCallCheck(this, IssueComponent);
      }

      _createClass(IssueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IssueComponent;
    }();

    IssueComponent.ɵfac = function IssueComponent_Factory(t) {
      return new (t || IssueComponent)();
    };

    IssueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IssueComponent,
      selectors: [["app-issue"]],
      inputs: {
        issue: "issue"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "issue"], ["class", "description", 4, "ngIf"], [1, "description"]],
      template: function IssueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IssueComponent_div_2_Template, 3, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.issue.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.issue.description);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_3__["TruncatePipe"]],
      styles: [".issue[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #fff;\n  margin: 5px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: gray;\n  padding: 4px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pc3N1ZS9DOlxcd29ya1xca2FuYmFuZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcaXNzdWVcXGlzc3VlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lzc3VlL2lzc3VlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pc3N1ZS9pc3N1ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc3N1ZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogbGlnaHRlbigjMDAwLCA1MCUpO1xyXG4gIHBhZGRpbmc6IDRweCAwIDAgMDtcclxufVxyXG4iLCIuaXNzdWUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogZ3JheTtcbiAgcGFkZGluZzogNHB4IDAgMCAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-issue',
          templateUrl: './issue.component.html',
          styleUrls: ['./issue.component.scss']
        }]
      }], function () {
        return [];
      }, {
        issue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/new-issue-dialog/new-issue-dialog.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/new-issue-dialog/new-issue-dialog.component.ts ***!
    \***************************************************************************/

  /*! exports provided: NewIssueDialogComponent */

  /***/
  function srcAppComponentsNewIssueDialogNewIssueDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewIssueDialogComponent", function () {
      return NewIssueDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var NewIssueDialogComponent = /*#__PURE__*/function () {
      function NewIssueDialogComponent(dialogRef, data) {
        _classCallCheck(this, NewIssueDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.issue = {
          title: null,
          description: null,
          dueDate: null
        };
      }

      _createClass(NewIssueDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add() {
          this.dialogRef.close(this.issue);
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.dialogRef.close(null);
        }
      }]);

      return NewIssueDialogComponent;
    }();

    NewIssueDialogComponent.ɵfac = function NewIssueDialogComponent_Factory(t) {
      return new (t || NewIssueDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    NewIssueDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewIssueDialogComponent,
      selectors: [["app-new-issue-dialog"]],
      decls: 26,
      vars: 6,
      consts: [["action", "", 3, "ngSubmit"], ["issueForm", "ngForm"], [1, "modal-window"], [1, "header"], [1, "form-row"], ["required", "", "name", "name", "matInput", "", "placeholder", "issue title...", 3, "ngModel", "ngModelChange"], ["required", "", "name", "description", "matInput", "", "mat-autosize", "", 3, "ngModel", "ngModelChange"], ["name", "date", "required", "", "matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "footer"], ["mat-button", "", 3, "disabled"]],
      template: function NewIssueDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewIssueDialogComponent_Template_form_ngSubmit_0_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " New issue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter issue title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewIssueDialogComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.issue.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter issue description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewIssueDialogComponent_Template_textarea_ngModelChange_14_listener($event) {
            return ctx.issue.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pick due date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewIssueDialogComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.issue.dueDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-datepicker-toggle", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-datepicker", null, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " add new issue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.issue.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.issue.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.issue.dueDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatTextareaAutosize"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LWlzc3VlLWRpYWxvZy9uZXctaXNzdWUtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewIssueDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-issue-dialog',
          templateUrl: './new-issue-dialog.component.html',
          styleUrls: ['./new-issue-dialog.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/new-workspace-dialog/new-workspace-dialog.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/new-workspace-dialog/new-workspace-dialog.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: NewWorkspaceDialogComponent */

  /***/
  function srcAppComponentsNewWorkspaceDialogNewWorkspaceDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewWorkspaceDialogComponent", function () {
      return NewWorkspaceDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var NewWorkspaceDialogComponent = /*#__PURE__*/function () {
      function NewWorkspaceDialogComponent(dialogRef, data) {
        _classCallCheck(this, NewWorkspaceDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.title = '';
      }

      _createClass(NewWorkspaceDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add() {
          this.dialogRef.close({
            title: this.title
          });
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.dialogRef.close(null);
        }
      }]);

      return NewWorkspaceDialogComponent;
    }();

    NewWorkspaceDialogComponent.ɵfac = function NewWorkspaceDialogComponent_Factory(t) {
      return new (t || NewWorkspaceDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    NewWorkspaceDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewWorkspaceDialogComponent,
      selectors: [["app-new-workspace-dialog"]],
      decls: 12,
      vars: 1,
      consts: [["action", "", 3, "ngSubmit"], [1, "modal-window"], [1, "header"], [1, "form-row"], ["name", "ws-name", "matInput", "", "placeholder", "title...", 3, "ngModel", "ngModelChange"], [1, "footer"], ["mat-button", ""]],
      template: function NewWorkspaceDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewWorkspaceDialogComponent_Template_form_ngSubmit_0_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " New workspace ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enter workspace title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewWorkspaceDialogComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " add new workspace ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXdvcmtzcGFjZS1kaWFsb2cvbmV3LXdvcmtzcGFjZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewWorkspaceDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-workspace-dialog',
          templateUrl: './new-workspace-dialog.component.html',
          styleUrls: ['./new-workspace-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/constants/events.ts":
  /*!*************************************!*\
    !*** ./src/app/constants/events.ts ***!
    \*************************************/

  /*! exports provided: ISSUE_ADD, ISSUE_UPDATE, ISSUE_DELETE, WS_ADD, BOARD_UPDATE */

  /***/
  function srcAppConstantsEventsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ISSUE_ADD", function () {
      return ISSUE_ADD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ISSUE_UPDATE", function () {
      return ISSUE_UPDATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ISSUE_DELETE", function () {
      return ISSUE_DELETE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WS_ADD", function () {
      return WS_ADD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BOARD_UPDATE", function () {
      return BOARD_UPDATE;
    });

    var ISSUE_ADD = 'ISSUE_ADD';
    var ISSUE_UPDATE = 'ISSUE_UPDATE';
    var ISSUE_DELETE = 'ISSUE_DELETE';
    var WS_ADD = 'WS_ADD';
    var BOARD_UPDATE = 'BOARD_UPDATE';
    /***/
  },

  /***/
  "./src/app/pipes/truncate.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/truncate.pipe.ts ***!
    \****************************************/

  /*! exports provided: TruncatePipe */

  /***/
  function srcAppPipesTruncatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
      return TruncatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TruncatePipe = /*#__PURE__*/function () {
      function TruncatePipe() {
        _classCallCheck(this, TruncatePipe);
      }

      _createClass(TruncatePipe, [{
        key: "transform",
        value: function transform(value, to) {
          if (value.length <= to) {
            return value;
          }

          return value.slice(0, to) + '...';
        }
      }]);

      return TruncatePipe;
    }();

    TruncatePipe.ɵfac = function TruncatePipe_Factory(t) {
      return new (t || TruncatePipe)();
    };

    TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "truncate",
      type: TruncatePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'truncate'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/event-manager.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/event-manager.service.ts ***!
    \***************************************************/

  /*! exports provided: JhiEventManager */

  /***/
  function srcAppServicesEventManagerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JhiEventManager", function () {
      return JhiEventManager;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /*
     Copyright 2013-2020 the original author or authors from the JHipster project.
     This file is part of the JHipster project, see https://www.jhipster.tech/
     for more information.
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
     */

    /**
     * An utility class to manage RX events
     */


    var JhiEventManager = /*#__PURE__*/function () {
      function JhiEventManager() {
        var _this8 = this;

        _classCallCheck(this, JhiEventManager);

        this.observable = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
          _this8.observer = observer;
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
      }
      /**
       * Method to broadcast the event to observer
       */


      _createClass(JhiEventManager, [{
        key: "broadcast",
        value: function broadcast(event) {
          if (this.observer) {
            this.observer.next(event);
          }
        }
        /**
         * Method to subscribe to an event with callback
         */

      }, {
        key: "subscribe",
        value: function subscribe(eventName, callback) {
          return this.observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            if (typeof event === 'string') {
              return event === eventName;
            }

            return event.name === eventName;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            if (typeof event !== 'string') {
              // when releasing generator-jhipster v7 then current return will be changed to
              // (to avoid redundant code response.content in JhiEventManager.subscribe callbacks):
              // return event.content;
              return event;
            }
          })).subscribe(callback);
        }
        /**
         * Method to unsubscribe the subscription
         */

      }, {
        key: "destroy",
        value: function destroy(subscriber) {
          subscriber.unsubscribe();
        }
      }]);

      return JhiEventManager;
    }();

    JhiEventManager.ɵfac = function JhiEventManager_Factory(t) {
      return new (t || JhiEventManager)();
    };

    JhiEventManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JhiEventManager,
      factory: JhiEventManager.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JhiEventManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/issue.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/issue.service.ts ***!
    \*******************************************/

  /*! exports provided: IssueManager */

  /***/
  function srcAppServicesIssueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IssueManager", function () {
      return IssueManager;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../constants/events */
    "./src/app/constants/events.ts");
    /* harmony import */


    var _event_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./event-manager.service */
    "./src/app/services/event-manager.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-indexed-db */
    "./node_modules/ngx-indexed-db/__ivy_ngcc__/fesm2015/ngx-indexed-db.js");
    /**
     * An utility class to manage RX events
     */


    var IssueManager = /*#__PURE__*/function () {
      function IssueManager(eventManager, snackBar, dbService) {
        _classCallCheck(this, IssueManager);

        this.eventManager = eventManager;
        this.snackBar = snackBar;
        this.dbService = dbService;
      }

      _createClass(IssueManager, [{
        key: "getInitialWsId",
        value: function getInitialWsId() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.dbService.getAll('workspaces').then(function (ws) {
                      return ws && ws[0] ? ws[0].id : null;
                    });

                  case 2:
                    return _context.abrupt("return", _context.sent);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getNextIssueOrder",
        value: function getNextIssueOrder() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.dbService.getAll('issues').then(function (response) {
                      return response && response.length > 0 ? response[response.length - 1].order + 1 : 0;
                    });

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "constructNewIssue",
        value: function constructNewIssue(data) {
          var _this9 = this;

          this.getInitialWsId().then(function (id) {
            if (!id) {
              _this9.snackBar.open('No workspace found!', null, {
                duration: 3000
              });
            }

            _this9.getNextIssueOrder().then(function (nextOrder) {
              var issue = {
                title: data.title,
                description: data.description,
                status: 'NEW',
                createdDate: new Date().toISOString(),
                dueDate: data.dueDate.toISOString(),
                wsId: id,
                order: nextOrder
              };

              _this9.dbService.add('issues', issue).then(function () {
                _this9.eventManager.broadcast(_constants_events__WEBPACK_IMPORTED_MODULE_2__["BOARD_UPDATE"]);
              });
            });
          });
        }
      }, {
        key: "getAllIssuesByWs",
        value: function getAllIssuesByWs(wsId) {
          return this.dbService.getAllByIndex('issues', 'wsId', IDBKeyRange.only(wsId));
        }
      }, {
        key: "updateIssues",
        value: function updateIssues(item, order, wsId) {
          item.order = order;
          item.wsId = wsId;
          this.dbService.update('issues', item).then(function () {}, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "constructNewWorkspace",
        value: function constructNewWorkspace(data) {
          var _this10 = this;

          var ws = {
            title: data.title,
            color: data.color || '#ccc',
            order: data.order || 0
          };
          this.dbService.add('workspaces', ws).then(function () {
            _this10.eventManager.broadcast(_constants_events__WEBPACK_IMPORTED_MODULE_2__["BOARD_UPDATE"]);
          });
        }
      }, {
        key: "deleteWs",
        value: function deleteWs(ws) {
          var _this11 = this;

          this.dbService["delete"]('workspaces', ws.id).then(function () {
            return _this11.eventManager.broadcast(_constants_events__WEBPACK_IMPORTED_MODULE_2__["BOARD_UPDATE"]);
          });
        }
      }]);

      return IssueManager;
    }();

    IssueManager.ɵfac = function IssueManager_Factory(t) {
      return new (t || IssueManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_event_manager_service__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__["NgxIndexedDBService"]));
    };

    IssueManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: IssueManager,
      factory: IssueManager.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IssueManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _event_manager_service__WEBPACK_IMPORTED_MODULE_3__["JhiEventManager"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__["NgxIndexedDBService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/utils.ts":
  /*!***********************************!*\
    !*** ./src/app/services/utils.ts ***!
    \***********************************/

  /*! exports provided: Utils */

  /***/
  function srcAppServicesUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Utils", function () {
      return Utils;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/confirm-dialog/confirm-dialog.component */
    "./src/app/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /**
     * An utility class to manage RX events
     */


    var Utils = /*#__PURE__*/function () {
      function Utils(dialog) {
        _classCallCheck(this, Utils);

        this.dialog = dialog;
      }

      _createClass(Utils, [{
        key: "pushConfirm",
        value: function pushConfirm(options) {
          var confirm = this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], {
            data: options
          });
          return confirm.afterClosed();
        }
      }]);

      return Utils;
    }();

    Utils.ɵfac = function Utils_Factory(t) {
      return new (t || Utils)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    Utils.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Utils,
      factory: Utils.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Utils, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\work\kanbang\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map