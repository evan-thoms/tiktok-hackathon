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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Sample content data for the cards\nconst suggestedContent = [\n    {\n        title: \"Content 1\",\n        description: \"Description for content 1\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    },\n    {\n        title: \"Content 2\",\n        description: \"Description for content 2\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    },\n    {\n        title: \"Content 3\",\n        description: \"Description for content 3\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    },\n    {\n        title: \"Content 4\",\n        description: \"Description for content 4\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    },\n    {\n        title: \"Content 5\",\n        description: \"Description for content 5\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    }\n];\nconst sliderSettings = {\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    responsive: [\n        {\n            breakpoint: 1024,\n            settings: {\n                slidesToShow: 3\n            }\n        },\n        {\n            breakpoint: 768,\n            settings: {\n                slidesToShow: 2\n            }\n        },\n        {\n            breakpoint: 480,\n            settings: {\n                slidesToShow: 1\n            }\n        }\n    ]\n};\nfunction Home() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(suggestedContent);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Content submitted:\", content);\n        setContent(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-customTeal\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex flex-col justify-center items-center mt-10 p-6 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \" text-center text-5xl mb-5 font-semibold text-gray-800\",\n                                children: \"TikTok Shop Hackathon Project\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                lineNumber: 92,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center px-20 text-gray-700 mb-5\",\n                                children: \"This project is built as part of the TikTok Shop Hackathon, aimed at developing innovative solutions for content e-commerce. The goal is to create a web application that allows users to submit and manage text-based content, with features such as notifications and content recommendations.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                lineNumber: 95,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"mt-10 p-6 bg-white rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-semibold text-gray-800 mb-4\",\n                                children: \"Suggested Content\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                lineNumber: 106,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                ...sliderSettings,\n                                children: suggestedContent.map((content, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            title: content.title,\n                                            description: content.description,\n                                            imageUrl: content.imageUrl\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 13\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                lineNumber: 107,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                        lineNumber: 105,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"mt-10 p-6 bg-white rounded-lg max-w-lg mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-semibold text-gray-800\",\n                                children: \"Submit Your Content\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                lineNumber: 123,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit,\n                                className: \"mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"title\",\n                                                className: \"block text-gray-700 font-medium mb-2\",\n                                                children: \"Title\"\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                                lineNumber: 126,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"title\",\n                                                name: \"title\",\n                                                type: \"text\",\n                                                placeholder: \"Enter the title\",\n                                                className: \"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTeal focus:border-transparent\",\n                                                value: title,\n                                                onChange: (e)=>setTitle(e.target.value),\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                                lineNumber: 127,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"description\",\n                                                className: \"block text-gray-700 font-medium mb-2\",\n                                                children: \"Description\"\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                                lineNumber: 139,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                id: \"description\",\n                                                name: \"description\",\n                                                rows: \"4\",\n                                                placeholder: \"Enter the description\",\n                                                className: \"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTeal focus:border-transparent\",\n                                                value: description,\n                                                onChange: (e)=>setDescription(e.target.value),\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                                lineNumber: 140,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"imageUrl\",\n                                                className: \"block text-gray-700 font-medium mb-2\",\n                                                children: \"Image URL\"\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                                lineNumber: 152,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"imageUrl\",\n                                                name: \"imageUrl\",\n                                                type: \"text\",\n                                                placeholder: \"Enter the image URL\",\n                                                className: \"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTeal focus:border-transparent\",\n                                                value: imageUrl,\n                                                onChange: (e)=>setImageUrl(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                                lineNumber: 153,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                        lineNumber: 151,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"px-6 py-3 bg-customRed text-white font-semibold rounded-lg hover:bg-customBrighterRed focus:outline-none focus:ring-2 focus:ring-customRed focus:ring-opacity-50\",\n                                        children: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                        lineNumber: 163,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                                lineNumber: 124,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                        lineNumber: 122,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/tiktok-hackathon/pages/index.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"0vQDHFl6CK52OpvQTXAsU40WZ70=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNIQyxNQUFLO2dEQUNMUSxNQUFLO2dEQUNMTixhQUFZO2dEQUNaZCxXQUFVO2dEQUNWZSxPQUFPdEM7Z0RBQ1B1QyxVQUFVLENBQUNyQixJQUFNTCxlQUFlSyxFQUFFc0IsTUFBTSxDQUFDRixLQUFLO2dEQUM5Q0csUUFBUTs7Ozs7Ozs7Ozs7O2tEQUdaLDhEQUFDbkI7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDUTtnREFBTUMsU0FBUTtnREFBV1QsV0FBVTswREFBdUM7Ozs7OzswREFDM0UsOERBQUNVO2dEQUNDQyxJQUFHO2dEQUNIQyxNQUFLO2dEQUNMQyxNQUFLO2dEQUNMQyxhQUFZO2dEQUNaZCxXQUFVO2dEQUNWZSxPQUFPckM7Z0RBQ1BzQyxVQUFVLENBQUNyQixJQUFNSixZQUFZSSxFQUFFc0IsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7a0RBRy9DLDhEQUFDTTt3Q0FDQ1IsTUFBSzt3Q0FDTGIsV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRWDtHQXpHd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcblxuXG5cbi8vIFNhbXBsZSBjb250ZW50IGRhdGEgZm9yIHRoZSBjYXJkc1xuY29uc3Qgc3VnZ2VzdGVkQ29udGVudCA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkNvbnRlbnQgMVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBjb250ZW50IDFcIixcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDb250ZW50IDJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgY29udGVudCAyXCIsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ29udGVudCAzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIGNvbnRlbnQgM1wiLFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNvbnRlbnQgNFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBjb250ZW50IDRcIixcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDb250ZW50IDVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgY29udGVudCA1XCIsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiLFxuICB9XG5dO1xuXG5cbmNvbnN0IHNsaWRlclNldHRpbmdzID0ge1xuICBkb3RzOiB0cnVlLFxuICBpbmZpbml0ZTogdHJ1ZSxcbiAgc3BlZWQ6IDUwMCxcbiAgc2xpZGVzVG9TaG93OiA0LCAgLy8gU2hvdyA0IHNsaWRlcyBhdCBhIHRpbWVcbiAgc2xpZGVzVG9TY3JvbGw6IDEsICAvLyBTY3JvbGwgb25lIHNsaWRlIGF0IGEgdGltZVxuICByZXNwb25zaXZlOiBbXG4gICAge1xuICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIH1cbiAgICB9XG4gIF1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKHN1Z2dlc3RlZENvbnRlbnQpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdDb250ZW50IHN1Ym1pdHRlZDonLCBjb250ZW50KTtcbiAgICBzZXRDb250ZW50KCcnKTtcbiAgfTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWN1c3RvbVRlYWxcIj5cbiAgICAgIHsvKiBoZXJvICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTAgcC02IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlciB0ZXh0LTV4bCBtYi01IGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgIFRpa1RvayBTaG9wIEhhY2thdGhvbiBQcm9qZWN0XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTIwIHRleHQtZ3JheS03MDAgbWItNVwiPlxuICAgICAgICAgIFRoaXMgcHJvamVjdCBpcyBidWlsdCBhcyBwYXJ0IG9mIHRoZSBUaWtUb2sgU2hvcCBIYWNrYXRob24sIGFpbWVkIGF0IGRldmVsb3BpbmcgaW5ub3ZhdGl2ZSBzb2x1dGlvbnMgZm9yIGNvbnRlbnQgZS1jb21tZXJjZS5cbiAgICAgICAgICBUaGUgZ29hbCBpcyB0byBjcmVhdGUgYSB3ZWIgYXBwbGljYXRpb24gdGhhdCBhbGxvd3MgdXNlcnMgdG8gc3VibWl0IGFuZCBtYW5hZ2UgdGV4dC1iYXNlZCBjb250ZW50LCB3aXRoIGZlYXR1cmVzIHN1Y2ggYXMgbm90aWZpY2F0aW9ucyBhbmQgY29udGVudCByZWNvbW1lbmRhdGlvbnMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgey8qPGEgY2xhc3NOYW1lPVwicHgtNDAgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSAgZm9udC1tZWRpdW0gcHktMyByb3VuZGVkIGN1cnNvci1wb2ludGVyIGJnLWN1c3RvbVJlZCBob3ZlcjpiZy1jdXN0b21CcmlnaHRlclJlZFwiPlxuICAgICAgICAgICAgICAgIEpvaW4gbm93XG4gICAgICAgIDwvYT4qL31cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIHN1Z2dlc3RlZCBjb250ZW50ICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMTAgcC02IGJnLXdoaXRlIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMCBtYi00XCI+U3VnZ2VzdGVkIENvbnRlbnQ8L2gyPlxuICAgICAgICA8U2xpZGVyIHsuLi5zbGlkZXJTZXR0aW5nc30+XG4gICAgICAgICAge3N1Z2dlc3RlZENvbnRlbnQubWFwKChjb250ZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICB0aXRsZT17Y29udGVudC50aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Y29udGVudC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpbWFnZVVybD17Y29udGVudC5pbWFnZVVybH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgICB7Lyogc3VibWl0IGNvbnRlbnQgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC0xMCBwLTYgYmctd2hpdGUgcm91bmRlZC1sZyBtYXgtdy1sZyBteC1hdXRvXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDBcIj5TdWJtaXQgWW91ciBDb250ZW50PC9oMj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgZm9udC1tZWRpdW0gbWItMlwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSB0aXRsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTMgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1jdXN0b21UZWFsIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgZm9udC1tZWRpdW0gbWItMlwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTMgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1jdXN0b21UZWFsIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVVybFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgZm9udC1tZWRpdW0gbWItMlwiPkltYWdlIFVSTDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJpbWFnZVVybFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVVybFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgaW1hZ2UgVVJMXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWN1c3RvbVRlYWwgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2ltYWdlVXJsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEltYWdlVXJsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctY3VzdG9tUmVkIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIGhvdmVyOmJnLWN1c3RvbUJyaWdodGVyUmVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1jdXN0b21SZWQgZm9jdXM6cmluZy1vcGFjaXR5LTUwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkZXIiLCJDYXJkIiwiU2xpZGVyIiwic3VnZ2VzdGVkQ29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsInNsaWRlclNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJIb21lIiwic2V0VGl0bGUiLCJzZXREZXNjcmlwdGlvbiIsInNldEltYWdlVXJsIiwiY29udGVudCIsInNldENvbnRlbnQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgyIiwicCIsIm1hcCIsImluZGV4IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});