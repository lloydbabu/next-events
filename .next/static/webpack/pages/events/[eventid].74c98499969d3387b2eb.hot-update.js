webpackHotUpdate_N_E("pages/events/[eventid]",{

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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading.."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1tldmVudGlkXS5qcyJdLCJuYW1lcyI6WyJFdmVuRGV0YWlsUGFnZSIsInByb3BzIiwiZXZlbnQiLCJzZWxlY3RlZEV2ZW50IiwidGl0bGUiLCJkYXRlIiwibG9jYXRpb24iLCJpbWFnZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDNUMsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLGFBQXBCOztBQUVBLE1BQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1Ysd0JBQ0E7QUFBQSw2QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQTtBQUtEOztBQUVELHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsOEVBQUQ7QUFBYyxXQUFLLEVBQUVBLEtBQUssQ0FBQ0U7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsZ0ZBQUQ7QUFDRSxVQUFJLEVBQUVGLEtBQUssQ0FBQ0csSUFEZDtBQUVFLGFBQU8sRUFBRUgsS0FBSyxDQUFDSSxRQUZqQjtBQUdFLFdBQUssRUFBRUosS0FBSyxDQUFDSyxLQUhmO0FBSUUsY0FBUSxFQUFFTCxLQUFLLENBQUNFO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQVFFLHFFQUFDLDhFQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBSUYsS0FBSyxDQUFDTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDtLQXpCdUJSLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1tldmVudGlkXS43NGM5ODQ5OTk2OWQzMzg3YjJlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RXZlbnRCeUlkLCBnZXRGZWF0dXJlZEV2ZW50cyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FwaS11dGlsc1wiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRXZlbnRTdW1tYXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1zdW1tYXJ5XCI7XHJcbmltcG9ydCBFdmVudExvZ2lzdGljcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtbG9naXN0aWNzXCI7XHJcbmltcG9ydCBFdmVudENvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWNvbnRlbnRcIjtcclxuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9lcnJvci1hbGVydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVuRGV0YWlsUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IGV2ZW50ID0gcHJvcHMuc2VsZWN0ZWRFdmVudDtcclxuXHJcbiAgaWYgKCFldmVudCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICA8cD5Mb2FkaW5nLi48L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8RXZlbnRTdW1tYXJ5IHRpdGxlPXtldmVudC50aXRsZX0+PC9FdmVudFN1bW1hcnk+XHJcbiAgICAgIDxFdmVudExvZ2lzdGljc1xyXG4gICAgICAgIGRhdGU9e2V2ZW50LmRhdGV9XHJcbiAgICAgICAgYWRkcmVzcz17ZXZlbnQubG9jYXRpb259XHJcbiAgICAgICAgaW1hZ2U9e2V2ZW50LmltYWdlfVxyXG4gICAgICAgIGltYWdlQWx0PXtldmVudC50aXRsZX1cclxuICAgICAgPjwvRXZlbnRMb2dpc3RpY3M+XHJcbiAgICAgIDxFdmVudENvbnRlbnQ+XHJcbiAgICAgICAgPHA+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9FdmVudENvbnRlbnQ+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xyXG4gIGNvbnN0IGV2ZW50cyA9IGF3YWl0IGdldEZlYXR1cmVkRXZlbnRzKCk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gZXZlbnRzLm1hcCgoZXZlbnQpPT4oe3BhcmFtczoge2V2ZW50aWQ6IGV2ZW50Py5pZH19KSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IHRydWVcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCl7XHJcbmNvbnN0IGV2ZW50SWQgPSBjb250ZXh0LnBhcmFtcy5ldmVudGlkO1xyXG5jb25zdCBldmVudCA9IGF3YWl0IGdldEV2ZW50QnlJZChldmVudElkKTtcclxucmV0dXJuIHtcclxuICBwcm9wczp7XHJcbiAgICBzZWxlY3RlZEV2ZW50OiBldmVudFxyXG4gIH0sXHJcbiAgcmV2YWxpZGF0ZTogMzBcclxufTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=