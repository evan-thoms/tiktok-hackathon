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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Sample content data for the cards\nconst suggestedContent = [\n    {\n        title: \"Content 1\",\n        description: \"Description for content 1\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    },\n    {\n        title: \"Content 2\",\n        description: \"Description for content 2\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    },\n    {\n        title: \"Content 3\",\n        description: \"Description for content 3\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    },\n    {\n        title: \"Content 4\",\n        description: \"Description for content 4\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    },\n    {\n        title: \"Content 5\",\n        description: \"Description for content 5\",\n        imageUrl: \"https://via.placeholder.com/150\"\n    }\n];\nconst sliderSettings = {\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    responsive: [\n        {\n            breakpoint: 1024,\n            settings: {\n                slidesToShow: 3\n            }\n        },\n        {\n            breakpoint: 768,\n            settings: {\n                slidesToShow: 2\n            }\n        },\n        {\n            breakpoint: 480,\n            settings: {\n                slidesToShow: 1\n            }\n        }\n    ]\n};\nfunction Home() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(suggestedContent);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:8080/api/submit-content\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    title,\n                    description,\n                    imageUrl\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const result = await response.json();\n            setContent(result);\n            console.log(\"here i am\");\n            console.log(\"Content submitted:\", content);\n            // Clear the form fields\n            setTitle(\"\");\n            setDescription(\"\");\n            setImageUrl(\"\");\n        // Optionally, update the content state or show a success message\n        } catch (error) {\n            console.error(\"Error submitting content:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-customBeige\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                    lineNumber: 112,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex flex-col justify-center items-center py-40 p-6 rounded-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \" text-center text-5xl mb-5 font-semibold text-gray-800\",\n                            children: \"TikTok Shop Hackathon Project\"\n                        }, void 0, false, {\n                            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                            lineNumber: 116,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center px-20 text-gray-700 mb-5\",\n                            children: \"This project is built as part of the TikTok Shop Hackathon, aimed at developing innovative solutions for content e-commerce. The goal is to create a web application that allows users to submit and manage text-based content, with features such as notifications and content recommendations.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                            lineNumber: 119,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                    lineNumber: 115,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mt-10 p-6 py-20 bg-white rounded-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold text-gray-800 mb-4\",\n                            children: \"Suggested Content\"\n                        }, void 0, false, {\n                            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                            lineNumber: 130,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            ...sliderSettings,\n                            children: suggestedContent.map((content, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        title: content.title,\n                                        description: content.description,\n                                        imageUrl: content.imageUrl\n                                    }, void 0, false, {\n                                        fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                                        lineNumber: 134,\n                                        columnNumber: 15\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                                    lineNumber: 133,\n                                    columnNumber: 13\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                            lineNumber: 131,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                    lineNumber: 129,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mt-10 p-6 bg-white rounded-lg max-w-lg mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold text-gray-800\",\n                            children: \"Submit Your Content\"\n                        }, void 0, false, {\n                            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                            lineNumber: 147,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"title\",\n                                            className: \"block text-gray-700 font-medium mb-2\",\n                                            children: \"Title\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 150,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"title\",\n                                            name: \"title\",\n                                            type: \"text\",\n                                            placeholder: \"Enter the title\",\n                                            className: \"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTeal focus:border-transparent\",\n                                            value: title,\n                                            onChange: (e)=>setTitle(e.target.value),\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 151,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                                    lineNumber: 149,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"description\",\n                                            className: \"block text-gray-700 font-medium mb-2\",\n                                            children: \"Description\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 163,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            id: \"description\",\n                                            name: \"description\",\n                                            rows: \"4\",\n                                            placeholder: \"Enter the description\",\n                                            className: \"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTeal focus:border-transparent\",\n                                            value: description,\n                                            onChange: (e)=>setDescription(e.target.value),\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 164,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                                    lineNumber: 162,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"imageUrl\",\n                                            className: \"block text-gray-700 font-medium mb-2\",\n                                            children: \"Image URL\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 176,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"imageUrl\",\n                                            name: \"imageUrl\",\n                                            type: \"text\",\n                                            placeholder: \"Enter the image URL\",\n                                            className: \"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customTeal focus:border-transparent\",\n                                            value: imageUrl,\n                                            onChange: (e)=>setImageUrl(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                                            lineNumber: 177,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                                    lineNumber: 175,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"px-6 py-3 bg-customRed text-white font-semibold rounded-lg hover:bg-customBrighterRed focus:outline-none focus:ring-2 focus:ring-customRed focus:ring-opacity-50\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                                    lineNumber: 187,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                            lineNumber: 148,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n                    lineNumber: 146,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/evanthoms/Coding/tiktok-hackathon/pages/index.js\",\n            lineNumber: 111,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"0vQDHFl6CK52OpvQTXAsU40WZ70=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5cblxuXG4vLyBTYW1wbGUgY29udGVudCBkYXRhIGZvciB0aGUgY2FyZHNcbmNvbnN0IHN1Z2dlc3RlZENvbnRlbnQgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJDb250ZW50IDFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgY29udGVudCAxXCIsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ29udGVudCAyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIGNvbnRlbnQgMlwiLFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNvbnRlbnQgM1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBjb250ZW50IDNcIixcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDb250ZW50IDRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgY29udGVudCA0XCIsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ29udGVudCA1XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIGNvbnRlbnQgNVwiLFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcbiAgfVxuXTtcblxuXG5jb25zdCBzbGlkZXJTZXR0aW5ncyA9IHtcbiAgZG90czogdHJ1ZSxcbiAgaW5maW5pdGU6IHRydWUsXG4gIHNwZWVkOiA1MDAsXG4gIHNsaWRlc1RvU2hvdzogNCwgIC8vIFNob3cgNCBzbGlkZXMgYXQgYSB0aW1lXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLCAgLy8gU2Nyb2xsIG9uZSBzbGlkZSBhdCBhIHRpbWVcbiAgcmVzcG9uc2l2ZTogW1xuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICB9XG4gICAgfVxuICBdXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cblxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShzdWdnZXN0ZWRDb250ZW50KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9zdWJtaXQtY29udGVudCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2VVcmwgfSksXG4gICAgICB9KTtcbiAgXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICB9XG4gIFxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0Q29udGVudChyZXN1bHQpXG4gICAgICBjb25zb2xlLmxvZygnaGVyZSBpIGFtJylcbiAgICAgIGNvbnNvbGUubG9nKCdDb250ZW50IHN1Ym1pdHRlZDonLCBjb250ZW50KTtcbiAgXG4gICAgICAvLyBDbGVhciB0aGUgZm9ybSBmaWVsZHNcbiAgICAgIHNldFRpdGxlKCcnKTtcbiAgICAgIHNldERlc2NyaXB0aW9uKCcnKTtcbiAgICAgIHNldEltYWdlVXJsKCcnKTtcbiAgICAgIC8vIE9wdGlvbmFsbHksIHVwZGF0ZSB0aGUgY29udGVudCBzdGF0ZSBvciBzaG93IGEgc3VjY2VzcyBtZXNzYWdlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN1Ym1pdHRpbmcgY29udGVudDonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1jdXN0b21CZWlnZVwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgXG4gICAgICB7LyogaGVybyAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB5LTQwIHAtNiByb3VuZGVkLWxnXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgdGV4dC01eGwgbWItNSBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICBUaWtUb2sgU2hvcCBIYWNrYXRob24gUHJvamVjdFxuICAgICAgICA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC0yMCB0ZXh0LWdyYXktNzAwIG1iLTVcIj5cbiAgICAgICAgICBUaGlzIHByb2plY3QgaXMgYnVpbHQgYXMgcGFydCBvZiB0aGUgVGlrVG9rIFNob3AgSGFja2F0aG9uLCBhaW1lZCBhdCBkZXZlbG9waW5nIGlubm92YXRpdmUgc29sdXRpb25zIGZvciBjb250ZW50IGUtY29tbWVyY2UuXG4gICAgICAgICAgVGhlIGdvYWwgaXMgdG8gY3JlYXRlIGEgd2ViIGFwcGxpY2F0aW9uIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHN1Ym1pdCBhbmQgbWFuYWdlIHRleHQtYmFzZWQgY29udGVudCwgd2l0aCBmZWF0dXJlcyBzdWNoIGFzIG5vdGlmaWNhdGlvbnMgYW5kIGNvbnRlbnQgcmVjb21tZW5kYXRpb25zLlxuICAgICAgICA8L3A+XG4gICAgICAgIHsvKjxhIGNsYXNzTmFtZT1cInB4LTQwIHRleHQtY2VudGVyIHRleHQtd2hpdGUgIGZvbnQtbWVkaXVtIHB5LTMgcm91bmRlZCBjdXJzb3ItcG9pbnRlciBiZy1jdXN0b21SZWQgaG92ZXI6YmctY3VzdG9tQnJpZ2h0ZXJSZWRcIj5cbiAgICAgICAgICAgICAgICBKb2luIG5vd1xuICAgICAgICA8L2E+Ki99XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBzdWdnZXN0ZWQgY29udGVudCAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTEwIHAtNiBweS0yMCBiZy13aGl0ZSByb3VuZGVkLWxnXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgbWItNFwiPlN1Z2dlc3RlZCBDb250ZW50PC9oMj5cbiAgICAgICAgPFNsaWRlciB7Li4uc2xpZGVyU2V0dGluZ3N9PlxuICAgICAgICAgIHtzdWdnZXN0ZWRDb250ZW50Lm1hcCgoY29udGVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NvbnRlbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2NvbnRlbnQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw9e2NvbnRlbnQuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L3NlY3Rpb24+XG5cblxuICAgICAgey8qIHN1Ym1pdCBjb250ZW50ICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMTAgcC02IGJnLXdoaXRlIHJvdW5kZWQtbGcgbWF4LXctbGcgbXgtYXV0b1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwXCI+U3VibWl0IFlvdXIgQ29udGVudDwvaDI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIGZvbnQtbWVkaXVtIG1iLTJcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgdGl0bGVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctY3VzdG9tVGVhbCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIGZvbnQtbWVkaXVtIG1iLTJcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIHJvd3M9XCI0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctY3VzdG9tVGVhbCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VVcmxcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIGZvbnQtbWVkaXVtIG1iLTJcIj5JbWFnZSBVUkw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwiaW1hZ2VVcmxcIlxuICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VVcmxcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGltYWdlIFVSTFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTMgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1jdXN0b21UZWFsIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbWFnZVVybH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZVVybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIGJnLWN1c3RvbVJlZCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBob3ZlcjpiZy1jdXN0b21CcmlnaHRlclJlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctY3VzdG9tUmVkIGZvY3VzOnJpbmctb3BhY2l0eS01MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZGVyIiwiQ2FyZCIsIlNsaWRlciIsInN1Z2dlc3RlZENvbnRlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VVcmwiLCJzbGlkZXJTZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiSG9tZSIsInNldFRpdGxlIiwic2V0RGVzY3JpcHRpb24iLCJzZXRJbWFnZVVybCIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJyZXN1bHQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgyIiwicCIsIm1hcCIsImluZGV4IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});