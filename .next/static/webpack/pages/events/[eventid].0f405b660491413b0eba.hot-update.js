webpackHotUpdate_N_E("pages/events/[eventid]",{

/***/ "./helpers/api-utils.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./pages/events/[eventid].js":
/*!***********************************!*\
  !*** ./pages/events/[eventid].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EvenDetailPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/event-detail/event-summary */ "./components/event-detail/event-summary.js");
/* harmony import */ var _components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/event-detail/event-logistics */ "./components/event-detail/event-logistics.js");
/* harmony import */ var _components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/event-detail/event-content */ "./components/event-detail/event-content.js");
/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/error-alert */ "./components/ui/error-alert.js");

var _jsxFileName = "D:\\Code\\Next\\NextEvents\\pages\\events\\[eventid].js";





var __N_SSG = true;
function EvenDetailPage(props) {
  var event = props.selectedEvent;

  if (!event) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "No Event Found!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: event.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_3__["default"], {
      date: event.date,
      address: event.location,
      image: event.image,
      imageAlt: event.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
_c = EvenDetailPage;

var _c;

$RefreshReg$(_c, "EvenDetailPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1tldmVudGlkXS5qcyJdLCJuYW1lcyI6WyJFdmVuRGV0YWlsUGFnZSIsInByb3BzIiwiZXZlbnQiLCJzZWxlY3RlZEV2ZW50IiwidGl0bGUiLCJkYXRlIiwibG9jYXRpb24iLCJpbWFnZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDNUMsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLGFBQXBCOztBQUVBLE1BQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1Ysd0JBQ0EscUVBQUMsa0VBQUQ7QUFBQSw2QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQTtBQUtEOztBQUVELHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsOEVBQUQ7QUFBYyxXQUFLLEVBQUVBLEtBQUssQ0FBQ0U7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsZ0ZBQUQ7QUFDRSxVQUFJLEVBQUVGLEtBQUssQ0FBQ0csSUFEZDtBQUVFLGFBQU8sRUFBRUgsS0FBSyxDQUFDSSxRQUZqQjtBQUdFLFdBQUssRUFBRUosS0FBSyxDQUFDSyxLQUhmO0FBSUUsY0FBUSxFQUFFTCxLQUFLLENBQUNFO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQVFFLHFFQUFDLDhFQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBSUYsS0FBSyxDQUFDTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDtLQXpCdUJSLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1tldmVudGlkXS4wZjQwNWI2NjA0OTE0MTNiMGViYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RXZlbnRCeUlkLCBnZXRGZWF0dXJlZEV2ZW50cyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FwaS11dGlsc1wiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRXZlbnRTdW1tYXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1zdW1tYXJ5XCI7XHJcbmltcG9ydCBFdmVudExvZ2lzdGljcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtbG9naXN0aWNzXCI7XHJcbmltcG9ydCBFdmVudENvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWNvbnRlbnRcIjtcclxuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9lcnJvci1hbGVydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVuRGV0YWlsUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IGV2ZW50ID0gcHJvcHMuc2VsZWN0ZWRFdmVudDtcclxuXHJcbiAgaWYgKCFldmVudCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxFcnJvckFsZXJ0PlxyXG4gICAgPHA+Tm8gRXZlbnQgRm91bmQhPC9wPlxyXG4gICAgPC9FcnJvckFsZXJ0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxFdmVudFN1bW1hcnkgdGl0bGU9e2V2ZW50LnRpdGxlfT48L0V2ZW50U3VtbWFyeT5cclxuICAgICAgPEV2ZW50TG9naXN0aWNzXHJcbiAgICAgICAgZGF0ZT17ZXZlbnQuZGF0ZX1cclxuICAgICAgICBhZGRyZXNzPXtldmVudC5sb2NhdGlvbn1cclxuICAgICAgICBpbWFnZT17ZXZlbnQuaW1hZ2V9XHJcbiAgICAgICAgaW1hZ2VBbHQ9e2V2ZW50LnRpdGxlfVxyXG4gICAgICA+PC9FdmVudExvZ2lzdGljcz5cclxuICAgICAgPEV2ZW50Q29udGVudD5cclxuICAgICAgICA8cD57ZXZlbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L0V2ZW50Q29udGVudD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcbiAgY29uc3QgZXZlbnRzID0gYXdhaXQgZ2V0RmVhdHVyZWRFdmVudHMoKTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBldmVudHMubWFwKChldmVudCk9Pih7cGFyYW1zOiB7ZXZlbnRpZDogZXZlbnQ/LmlkfX0pKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KXtcclxuY29uc3QgZXZlbnRJZCA9IGNvbnRleHQucGFyYW1zLmV2ZW50aWQ7XHJcbmNvbnN0IGV2ZW50ID0gYXdhaXQgZ2V0RXZlbnRCeUlkKGV2ZW50SWQpO1xyXG5yZXR1cm4ge1xyXG4gIHByb3BzOntcclxuICAgIHNlbGVjdGVkRXZlbnQ6IGV2ZW50XHJcbiAgfSxcclxuICByZXZhbGlkYXRlOiAzMFxyXG59O1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==