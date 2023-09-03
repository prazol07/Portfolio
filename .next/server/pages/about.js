"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./src/components/AnimatedText.js":
/*!****************************************!*\
  !*** ./src/components/AnimatedText.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst quote = {\n    initial: {\n        opacity: 1\n    },\n    animate: {\n        opacity: 1,\n        transition: {\n            delay: 0.5,\n            staggerChildren: 0.08\n        }\n    }\n};\nconst singleWord = {\n    initial: {\n        opacity: 0,\n        y: 50\n    },\n    animate: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1\n        }\n    }\n};\nconst AnimatedText = ({ text , className =\"\"  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mx-auto py-2 flex items-center justify-center text-left overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: `inline-block w-full text-dark font-bold text-left ${className}`,\n            variants: quote,\n            initial: \"initial\",\n            animate: \"animate\",\n            children: text.split(\" \").map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block\",\n                    variants: singleWord,\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, word + \"-\" + index, true, {\n                    fileName: \"D:\\\\web development\\\\Portfolio\\\\src\\\\components\\\\AnimatedText.js\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\web development\\\\Portfolio\\\\src\\\\components\\\\AnimatedText.js\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\web development\\\\Portfolio\\\\src\\\\components\\\\AnimatedText.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedText);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNzQjtBQUUvQyxNQUFNRyxRQUFNO0lBQ1JDLFNBQ0E7UUFDSUMsU0FBUTtJQUNaO0lBQ0FKLFNBQVE7UUFDSkksU0FBUTtRQUNSQyxZQUFZO1lBQ1JDLE9BQU07WUFDTkMsaUJBQWlCO1FBQ3JCO0lBRUo7QUFDSjtBQUVBLE1BQU1DLGFBQVc7SUFDYkwsU0FDQTtRQUNJQyxTQUFRO1FBQ1JLLEdBQUU7SUFDTjtJQUNBVCxTQUFRO1FBQ0pJLFNBQVE7UUFDUkssR0FBRTtRQUNGSixZQUFZO1lBQ1JLLFVBQVM7UUFDYjtJQUVKO0FBQ0o7QUFHQSxNQUFNQyxlQUFlLENBQUMsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEdBQUUsRUFBQyxHQUFLO0lBQzdDLHFCQUNFLDhEQUFDQztRQUFJRCxXQUFVO2tCQUNYLDRFQUFDWixvREFBUztZQUFDWSxXQUFXLENBQUMsa0RBQWtELEVBQUVBLFVBQVUsQ0FBQztZQUN0RkcsVUFBVWQ7WUFDVkMsU0FBUTtZQUNSSCxTQUFRO3NCQUdKWSxLQUFLSyxLQUFLLENBQUMsS0FBS0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUMzQiw4REFBQ25CLHNEQUFXO29CQUEwQlksV0FBVTtvQkFBZUcsVUFBVVI7O3dCQUNwRVc7d0JBQUs7O21CQURRQSxPQUFPLE1BQU1DOzs7Ozs7Ozs7Ozs7Ozs7QUFRM0M7QUFFQSxpRUFBZVQsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RldmVsb3Blci1wb3J0Zm9saW8tc3RhcnRlci1jb2RlLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0LmpzPzRjMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBhbmltYXRlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5cclxuY29uc3QgcXVvdGU9e1xyXG4gICAgaW5pdGlhbDpcclxuICAgIHtcclxuICAgICAgICBvcGFjaXR5OjEsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0ZTp7XHJcbiAgICAgICAgb3BhY2l0eToxLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgZGVsYXk6MC41LFxyXG4gICAgICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMDgsXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc2luZ2xlV29yZD17XHJcbiAgICBpbml0aWFsOlxyXG4gICAge1xyXG4gICAgICAgIG9wYWNpdHk6MCxcclxuICAgICAgICB5OjUwXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0ZTp7IFxyXG4gICAgICAgIG9wYWNpdHk6MSxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjoxLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBBbmltYXRlZFRleHQgPSAoe3RleHQsIGNsYXNzTmFtZT1cIlwifSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG14LWF1dG8gcHktMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuJz5cclxuICAgICAgICA8bW90aW9uLmgxIGNsYXNzTmFtZT17YGlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1kYXJrIGZvbnQtYm9sZCB0ZXh0LWxlZnQgJHtjbGFzc05hbWV9YH1cclxuICAgICAgICB2YXJpYW50cz17cXVvdGV9XHJcbiAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0LnNwbGl0KFwiIFwiKS5tYXAoKHdvcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBrZXk9e3dvcmQgKyAnLScgKyBpbmRleH0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIHZhcmlhbnRzPXtzaW5nbGVXb3JkfT5cclxuICAgICAgICAgICAgICAgIHt3b3JkfSZuYnNwO1xyXG4gICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcbiAgICAgICAgPC9tb3Rpb24uaDE+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkVGV4dCJdLCJuYW1lcyI6WyJSZWFjdCIsImFuaW1hdGUiLCJtb3Rpb24iLCJxdW90ZSIsImluaXRpYWwiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImRlbGF5Iiwic3RhZ2dlckNoaWxkcmVuIiwic2luZ2xlV29yZCIsInkiLCJkdXJhdGlvbiIsIkFuaW1hdGVkVGV4dCIsInRleHQiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInZhcmlhbnRzIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwiaW5kZXgiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n");

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Layout = ({ children , className =\"\"  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `w-full h-full inline-block z-0 bg-light p-32 ${className}`,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\web development\\\\Portfolio\\\\src\\\\components\\\\Layout.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRXpCLE1BQU1DLFNBQVMsQ0FBQyxFQUFDQyxTQUFRLEVBQUVDLFdBQVUsR0FBRSxFQUFDLEdBQUs7SUFDM0MscUJBQ0UsOERBQUNDO1FBQUlELFdBQVcsQ0FBQyw2Q0FBNkMsRUFBRUEsVUFBVSxDQUFDO2tCQUN0RUQ7Ozs7OztBQUdUO0FBRUEsaUVBQWVELE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItcG9ydGZvbGlvLXN0YXJ0ZXItY29kZS8uL3NyYy9jb21wb25lbnRzL0xheW91dC5qcz9mZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW4sIGNsYXNzTmFtZT1cIlwifSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBoLWZ1bGwgaW5saW5lLWJsb2NrIHotMCBiZy1saWdodCBwLTMyICR7Y2xhc3NOYW1lfWB9PlxyXG4gICAgICAgIHtjaGlsZHJlbn0gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__]);\n_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst about = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Prajwal | About\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web development\\\\Portfolio\\\\src\\\\pages\\\\about.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"anydescription\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web development\\\\Portfolio\\\\src\\\\pages\\\\about.js\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\web development\\\\Portfolio\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex  w-full flex-col items-center text-dark pt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"pt-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: \"Coding with passion \"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web development\\\\Portfolio\\\\src\\\\pages\\\\about.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\web development\\\\Portfolio\\\\src\\\\pages\\\\about.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\web development\\\\Portfolio\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 20,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNaO0FBQ1o7QUFDSDtBQUV6QixNQUFNSSxRQUFRLElBQU07SUFDbEIscUJBQ0U7OzBCQUNJLDhEQUFDRixrREFBSUE7O2tDQUNELDhEQUFDRztrQ0FBTTs7Ozs7O2tDQUdILDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7Ozs7Ozs7OzBCQU94Qyw4REFBQ0M7Z0JBQUtDLFdBQVU7MEJBQ2pCLDRFQUFDVCwwREFBTUE7b0JBQUNTLFdBQVU7OEJBQ2QsNEVBQUNWLGdFQUFZQTt3QkFBQ1csTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9CO0FBRUEsaUVBQWVQLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItcG9ydGZvbGlvLXN0YXJ0ZXItY29kZS8uL3NyYy9wYWdlcy9hYm91dC5qcz9mZDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRlZFRleHQgZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dCdcclxuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICAgICAgICBQcmFqd2FsIHwgQWJvdXRcclxuICAgICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJhbnlkZXNjcmlwdGlvblwiIC8+IFxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICB7LyogPG1haW4gY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT0ncHQtMTYnPlxyXG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PVwiUGFzc2lvbiBGb3IgQ29kaW5nXCIgY2xhc3NOYW1lPSd0ZXh0LTR4bCc+PC9BbmltYXRlZFRleHQ+IFxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L21haW4+ICovfVxyXG4gICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXggIHctZnVsbCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1kYXJrIHB0LTgnPlxyXG4gICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPSdwdC0xNic+XHJcbiAgICAgICAgICAgIDxBbmltYXRlZFRleHQgdGV4dD1cIkNvZGluZyB3aXRoIHBhc3Npb24gXCIgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXQiXSwibmFtZXMiOlsiQW5pbWF0ZWRUZXh0IiwiTGF5b3V0IiwiSGVhZCIsIlJlYWN0IiwiYWJvdXQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJjbGFzc05hbWUiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/about.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/about.js"));
module.exports = __webpack_exports__;

})();