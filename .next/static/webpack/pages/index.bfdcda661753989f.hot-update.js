"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Content submitted:\", content);\n        setContent(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-col justify-center items-center mt-10 p-6 rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \" text-center text-5xl mb-5 font-semibold text-gray-800\",\n                        children: \"TikTok Shop Hackathon Project\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center px-20 text-gray-700 mb-5\",\n                        children: \"This project is built as part of the TikTok Shop Hackathon, aimed at developing innovative solutions for content e-commerce. The goal is to create a web application that allows users to submit and manage text-based content, with features such as notifications and content recommendations.\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mt-10 p-6 bg-white rounded-lg max-w-lg mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-semibold text-gray-800\",\n                        children: \"Submit Your Content\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"content\",\n                                        className: \"block text-gray-700 font-medium mb-2\",\n                                        children: \"Content\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        id: \"content\",\n                                        name: \"content\",\n                                        rows: \"4\",\n                                        placeholder: \"Enter your content here\",\n                                        className: \"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTeal focus:border-transparent\",\n                                        value: content,\n                                        onChange: (e)=>setContent(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"px-6 py-3 bg-customRed text-white font-semibold rounded-lg hover:bg-customBrighterRed focus:outline-none focus:ring-2 focus:ring-customRed focus:ring-opacity-50\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"7qMZGOaOfwYbu+hEA/2Jy8mHHnE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNTO0FBRTNCLFNBQVNFOztJQUd0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFFdkMsTUFBTUssZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQk47UUFDbENDLFdBQVc7SUFDYjtJQUlBLHFCQUNFOzswQkFFRSw4REFBQ0gsMERBQU1BOzs7OzswQkFFUCw4REFBQ1M7Z0JBQVFDLFdBQVU7O2tDQUNqQiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXlEOzs7Ozs7a0NBR3ZFLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBdUM7Ozs7Ozs7Ozs7OzswQkFVdEQsOERBQUNEOzs7OzswQkFJRCw4REFBQ0E7Z0JBQVFDLFdBQVU7O2tDQUNqQiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXVDOzs7Ozs7a0NBQ3JELDhEQUFDRzt3QkFBS0MsVUFBVVY7d0JBQWNNLFdBQVU7OzBDQUN0Qyw4REFBQ0s7Z0NBQUlMLFdBQVU7O2tEQUNiLDhEQUFDTTt3Q0FBTUMsU0FBUTt3Q0FBVVAsV0FBVTtrREFBdUM7Ozs7OztrREFDMUUsOERBQUNRO3dDQUNDQyxJQUFHO3dDQUNIQyxNQUFLO3dDQUNMQyxNQUFLO3dDQUNMQyxhQUFZO3dDQUNaWixXQUFVO3dDQUNWYSxPQUFPckI7d0NBQ1BzQixVQUFVLENBQUNuQixJQUFNRixXQUFXRSxFQUFFb0IsTUFBTSxDQUFDRixLQUFLO3dDQUMxQ0csUUFBUTs7Ozs7Ozs7Ozs7OzBDQUdaLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTGxCLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVg7R0EvRHdCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG5cbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdDb250ZW50IHN1Ym1pdHRlZDonLCBjb250ZW50KTtcbiAgICBzZXRDb250ZW50KCcnKTtcbiAgfTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTEwIHAtNiByb3VuZGVkLWxnXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgdGV4dC01eGwgbWItNSBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICBUaWtUb2sgU2hvcCBIYWNrYXRob24gUHJvamVjdFxuICAgICAgICA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC0yMCB0ZXh0LWdyYXktNzAwIG1iLTVcIj5cbiAgICAgICAgICBUaGlzIHByb2plY3QgaXMgYnVpbHQgYXMgcGFydCBvZiB0aGUgVGlrVG9rIFNob3AgSGFja2F0aG9uLCBhaW1lZCBhdCBkZXZlbG9waW5nIGlubm92YXRpdmUgc29sdXRpb25zIGZvciBjb250ZW50IGUtY29tbWVyY2UuXG4gICAgICAgICAgVGhlIGdvYWwgaXMgdG8gY3JlYXRlIGEgd2ViIGFwcGxpY2F0aW9uIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHN1Ym1pdCBhbmQgbWFuYWdlIHRleHQtYmFzZWQgY29udGVudCwgd2l0aCBmZWF0dXJlcyBzdWNoIGFzIG5vdGlmaWNhdGlvbnMgYW5kIGNvbnRlbnQgcmVjb21tZW5kYXRpb25zLlxuICAgICAgICA8L3A+XG4gICAgICAgIHsvKjxhIGNsYXNzTmFtZT1cInB4LTQwIHRleHQtY2VudGVyIHRleHQtd2hpdGUgIGZvbnQtbWVkaXVtIHB5LTMgcm91bmRlZCBjdXJzb3ItcG9pbnRlciBiZy1jdXN0b21SZWQgaG92ZXI6YmctY3VzdG9tQnJpZ2h0ZXJSZWRcIj5cbiAgICAgICAgICAgICAgICBKb2luIG5vd1xuICAgICAgICA8L2E+Ki99XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgICAgIHt9XG4gICAgICA8c2VjdGlvbj5cblxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC0xMCBwLTYgYmctd2hpdGUgcm91bmRlZC1sZyBtYXgtdy1sZyBteC1hdXRvXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDBcIj5TdWJtaXQgWW91ciBDb250ZW50PC9oMj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCBmb250LW1lZGl1bSBtYi0yXCI+Q29udGVudDwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBjb250ZW50IGhlcmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctY3VzdG9tVGVhbCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctY3VzdG9tUmVkIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIGhvdmVyOmJnLWN1c3RvbUJyaWdodGVyUmVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1jdXN0b21SZWQgZm9jdXM6cmluZy1vcGFjaXR5LTUwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkZXIiLCJIb21lIiwiY29udGVudCIsInNldENvbnRlbnQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgyIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsInRleHRhcmVhIiwiaWQiLCJuYW1lIiwicm93cyIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});