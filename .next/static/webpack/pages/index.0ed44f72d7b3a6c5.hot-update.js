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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// Sample content data for the cards\nconst suggestedContent = [\n    {\n        title: \"Content 1\",\n        description: \"Description for content 1\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    },\n    {\n        title: \"Content 2\",\n        description: \"Description for content 2\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    },\n    {\n        title: \"Content 3\",\n        description: \"Description for content 3\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    },\n    {\n        title: \"Content 4\",\n        description: \"Description for content 4\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    },\n    {\n        title: \"Content 5\",\n        description: \"Description for content 5\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    }\n];\nconst sliderSettings = {\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    responsive: [\n        {\n            breakpoint: 1024,\n            settings: {\n                slidesToShow: 3\n            }\n        },\n        {\n            breakpoint: 768,\n            settings: {\n                slidesToShow: 2\n            }\n        },\n        {\n            breakpoint: 480,\n            settings: {\n                slidesToShow: 1\n            }\n        }\n    ]\n};\nfunction Home() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(suggestedContent);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Content submitted:\", content);\n        setContent(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-customBeige\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex flex-col justify-center items-center py-40 p-6 rounded-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \" text-center text-5xl mb-5 font-semibold text-gray-800\",\n                            children: \"TikTok Shop Hackathon Project\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center px-20 text-gray-700 mb-5\",\n                            children: \"This project is built as part of the TikTok Shop Hackathon, aimed at developing innovative solutions for content e-commerce. The goal is to create a web application that allows users to submit and manage text-based content, with features such as notifications and content recommendations.\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mt-10 p-6 py-20 bg-white rounded-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold text-gray-800 mb-4\",\n                            children: \"Suggested Content\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            ...sliderSettings,\n                            children: suggestedContent.map((content, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        title: content.title,\n                                        description: content.description,\n                                        imageUrl: content.imageUrl\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 17\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mt-10 mb-28 p-6 p bg-white rounded-lg max-w-lg mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold text-gray-800\",\n                            children: \"Submit Your Content\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"title\",\n                                            className: \"block text-gray-700 font-medium mb-2\",\n                                            children: \"Title\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 127,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"title\",\n                                            name: \"title\",\n                                            type: \"text\",\n                                            placeholder: \"Enter the title\",\n                                            className: \"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTeal focus:border-transparent\",\n                                            value: title,\n                                            onChange: (e)=>setTitle(e.target.value),\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 128,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                    lineNumber: 126,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"description\",\n                                            className: \"block text-gray-700 font-medium mb-2\",\n                                            children: \"Description\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 140,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            id: \"description\",\n                                            name: \"description\",\n                                            rows: \"4\",\n                                            placeholder: \"Enter the description\",\n                                            className: \"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTeal focus:border-transparent\",\n                                            value: description,\n                                            onChange: (e)=>setDescription(e.target.value),\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 141,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                    lineNumber: 139,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"imageUrl\",\n                                            className: \"block text-gray-700 font-medium mb-2\",\n                                            children: \"Image URL\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 153,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"imageUrl\",\n                                            name: \"imageUrl\",\n                                            type: \"text\",\n                                            placeholder: \"Enter the image URL\",\n                                            className: \"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTeal focus:border-transparent\",\n                                            value: imageUrl,\n                                            onChange: (e)=>setImageUrl(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 154,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                    lineNumber: 152,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"px-6 py-3 bg-customRed text-white font-semibold rounded-lg hover:bg-customBrighterRed focus:outline-none focus:ring-2 focus:ring-customRed focus:ring-opacity-50\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                    lineNumber: 164,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                    lineNumber: 172,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"0vQDHFl6CK52OpvQTXAsU40WZ70=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rzs0Q0FDSEMsTUFBSzs0Q0FDTFEsTUFBSzs0Q0FDTE4sYUFBWTs0Q0FDWmQsV0FBVTs0Q0FDVmUsT0FBT3RDOzRDQUNQdUMsVUFBVSxDQUFDckIsSUFBTUwsZUFBZUssRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzs0Q0FDOUNHLFFBQVE7Ozs7Ozs7Ozs7Ozs4Q0FHWiw4REFBQ25CO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ1E7NENBQU1DLFNBQVE7NENBQVdULFdBQVU7c0RBQXVDOzs7Ozs7c0RBQzNFLDhEQUFDVTs0Q0FDQ0MsSUFBRzs0Q0FDSEMsTUFBSzs0Q0FDTEMsTUFBSzs0Q0FDTEMsYUFBWTs0Q0FDWmQsV0FBVTs0Q0FDVmUsT0FBT3JDOzRDQUNQc0MsVUFBVSxDQUFDckIsSUFBTUosWUFBWUksRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzhDQUcvQyw4REFBQ007b0NBQ0NSLE1BQUs7b0NBQ0xiLFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLTCw4REFBQzFCLDBEQUFNQTs7Ozs7Ozs7Ozs7O0FBSWY7R0ExR3dCYztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5cblxuLy8gU2FtcGxlIGNvbnRlbnQgZGF0YSBmb3IgdGhlIGNhcmRzXG5jb25zdCBzdWdnZXN0ZWRDb250ZW50ID0gW1xuICB7XG4gICAgdGl0bGU6IFwiQ29udGVudCAxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIGNvbnRlbnQgMVwiLFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNvbnRlbnQgMlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBjb250ZW50IDJcIixcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDb250ZW50IDNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgY29udGVudCAzXCIsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ29udGVudCA0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIGNvbnRlbnQgNFwiLFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNvbnRlbnQgNVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBjb250ZW50IDVcIixcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXG4gIH1cbl07XG5cblxuY29uc3Qgc2xpZGVyU2V0dGluZ3MgPSB7XG4gIGRvdHM6IHRydWUsXG4gIGluZmluaXRlOiB0cnVlLFxuICBzcGVlZDogNTAwLFxuICBzbGlkZXNUb1Nob3c6IDQsICAvLyBTaG93IDQgc2xpZGVzIGF0IGEgdGltZVxuICBzbGlkZXNUb1Njcm9sbDogMSwgIC8vIFNjcm9sbCBvbmUgc2xpZGUgYXQgYSB0aW1lXG4gIHJlc3BvbnNpdmU6IFtcbiAgICB7XG4gICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgfVxuICAgIH1cbiAgXVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG5cbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoc3VnZ2VzdGVkQ29udGVudCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ0NvbnRlbnQgc3VibWl0dGVkOicsIGNvbnRlbnQpO1xuICAgIHNldENvbnRlbnQoJycpO1xuICB9O1xuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWN1c3RvbUJlaWdlXCI+XG4gICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICB7LyogaGVybyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHktNDAgcC02IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiIHRleHQtY2VudGVyIHRleHQtNXhsIG1iLTUgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICBUaWtUb2sgU2hvcCBIYWNrYXRob24gUHJvamVjdFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHgtMjAgdGV4dC1ncmF5LTcwMCBtYi01XCI+XG4gICAgICAgICAgICBUaGlzIHByb2plY3QgaXMgYnVpbHQgYXMgcGFydCBvZiB0aGUgVGlrVG9rIFNob3AgSGFja2F0aG9uLCBhaW1lZCBhdCBkZXZlbG9waW5nIGlubm92YXRpdmUgc29sdXRpb25zIGZvciBjb250ZW50IGUtY29tbWVyY2UuXG4gICAgICAgICAgICBUaGUgZ29hbCBpcyB0byBjcmVhdGUgYSB3ZWIgYXBwbGljYXRpb24gdGhhdCBhbGxvd3MgdXNlcnMgdG8gc3VibWl0IGFuZCBtYW5hZ2UgdGV4dC1iYXNlZCBjb250ZW50LCB3aXRoIGZlYXR1cmVzIHN1Y2ggYXMgbm90aWZpY2F0aW9ucyBhbmQgY29udGVudCByZWNvbW1lbmRhdGlvbnMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHsvKjxhIGNsYXNzTmFtZT1cInB4LTQwIHRleHQtY2VudGVyIHRleHQtd2hpdGUgIGZvbnQtbWVkaXVtIHB5LTMgcm91bmRlZCBjdXJzb3ItcG9pbnRlciBiZy1jdXN0b21SZWQgaG92ZXI6YmctY3VzdG9tQnJpZ2h0ZXJSZWRcIj5cbiAgICAgICAgICAgICAgICBKb2luIG5vd1xuICAgICAgICA8L2E+Ki99XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7Lyogc3VnZ2VzdGVkIGNvbnRlbnQgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTEwIHAtNiBweS0yMCBiZy13aGl0ZSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMCBtYi00XCI+U3VnZ2VzdGVkIENvbnRlbnQ8L2gyPlxuICAgICAgICAgIDxTbGlkZXIgey4uLnNsaWRlclNldHRpbmdzfT5cbiAgICAgICAgICAgIHtzdWdnZXN0ZWRDb250ZW50Lm1hcCgoY29udGVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvbnRlbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Y29udGVudC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXtjb250ZW50LmltYWdlVXJsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgICAgIHsvKiBzdWJtaXQgY29udGVudCAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMTAgbWItMjggcC02IHAgYmctd2hpdGUgcm91bmRlZC1sZyBtYXgtdy1sZyBteC1hdXRvXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMFwiPlN1Ym1pdCBZb3VyIENvbnRlbnQ8L2gyPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCBmb250LW1lZGl1bSBtYi0yXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSB0aXRsZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWN1c3RvbVRlYWwgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIGZvbnQtbWVkaXVtIG1iLTJcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctY3VzdG9tVGVhbCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVVybFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgZm9udC1tZWRpdW0gbWItMlwiPkltYWdlIFVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VVcmxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVVybFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGltYWdlIFVSTFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWN1c3RvbVRlYWwgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZVVybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyBiZy1jdXN0b21SZWQgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgaG92ZXI6YmctY3VzdG9tQnJpZ2h0ZXJSZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWN1c3RvbVJlZCBmb2N1czpyaW5nLW9wYWNpdHktNTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRlciIsIkNhcmQiLCJTbGlkZXIiLCJGb290ZXIiLCJzdWdnZXN0ZWRDb250ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwic2xpZGVyU2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIkhvbWUiLCJzZXRUaXRsZSIsInNldERlc2NyaXB0aW9uIiwic2V0SW1hZ2VVcmwiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaDIiLCJwIiwibWFwIiwiaW5kZXgiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwibmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});