/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/nwaforaugustineonyedikachi/Desktop/portfolio/src/components/TimeLine/TimeLine.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\n\nvar Timeline = function Timeline() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      activeItem = _useState[0],\n      setActiveItem = _useState[1];\n\n  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n\n  var scroll = function scroll(node, left) {\n    return node.scrollTo({\n      left: left,\n      behavior: 'smooth'\n    });\n  };\n\n  var handleClick = function handleClick(e, i) {\n    e.preventDefault();\n\n    if (carouselRef.current) {\n      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));\n      scroll(carouselRef.current, scrollLeft);\n    }\n  };\n\n  var handleScroll = function handleScroll() {\n    if (carouselRef.current) {\n      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);\n      setActiveItem(index);\n    }\n  }; // snap back to beginning of scroll when window is resized\n  // avoids a bug where content is covered up if coming from smaller screen\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleResize = function handleResize() {\n      scroll(carouselRef.current, 0);\n    };\n\n    window.addEventListener('resize', handleResize);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n    id: \"about\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {\n      children: \"About Me\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n      children: \"Full stack software developer with 3+ years of experience. Comfortable working with JavaScript, Nodejs, Java(OOP) ,Aws Servics ,React, Redux, TypeScript, Git/Github, HTML/CSS. Accomplished in creating responsive web design to deliver an exceptional customer experience with good communication skills.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n      ref: carouselRef,\n      onScroll: handleScroll,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n            \"final\": index === TOTAL_CAROUSEL_COUNT - 1,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n              index: index,\n              id: \"carousel__item-\".concat(index),\n              active: activeItem,\n              onClick: function onClick(e) {\n                return handleClick(e, index);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {\n                children: [\"\".concat(item.year), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {\n                  width: \"208\",\n                  height: \"6\",\n                  viewBox: \"0 0 208 6\",\n                  fill: \"none\",\n                  xmlns: \"http://www.w3.org/2000/svg\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    \"fill-rule\": \"evenodd\",\n                    \"clip-rule\": \"evenodd\",\n                    d: \"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z\",\n                    fill: \"url(#paint0_linear)\",\n                    \"fill-opacity\": \"0.33\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 87,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                      id: \"paint0_linear\",\n                      x1: \"-4.30412e-10\",\n                      y1: \"0.5\",\n                      x2: \"208\",\n                      y2: \"0.500295\",\n                      gradientUnits: \"userSpaceOnUse\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                        \"stop-color\": \"white\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 103,\n                        columnNumber: 25\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                        offset: \"0.79478\",\n                        \"stop-color\": \"white\",\n                        \"stop-opacity\": \"0\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 104,\n                        columnNumber: 25\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 95,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 94,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 80,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 113,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {\n      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {\n          index: index,\n          active: activeItem,\n          onClick: function onClick(e) {\n            return handleClick(e, index);\n          },\n          type: \"button\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {\n            active: activeItem\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 15\n          }, _this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Timeline, \"qE2Y7awmqdFA9rYczLkhjQwwAdI=\");\n\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanM/ODQ5MSJdLCJuYW1lcyI6WyJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsIlRpbWVMaW5lRGF0YSIsIlRpbWVsaW5lIiwidXNlU3RhdGUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwic2Nyb2xsIiwibm9kZSIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiaGFuZGxlQ2xpY2siLCJlIiwiaSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxXaWR0aCIsImhhbmRsZVNjcm9sbCIsImluZGV4Iiwicm91bmQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaXRlbSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQVdBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0MscUVBQTdCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDY0MsK0NBQVEsQ0FBQyxDQUFELENBRHRCO0FBQUEsTUFDZkMsVUFEZTtBQUFBLE1BQ0hDLGFBREc7O0FBRXRCLE1BQU1DLFdBQVcsR0FBR0MsNkNBQU0sRUFBMUI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQzlCLFdBQU9ELElBQUksQ0FBQ0UsUUFBTCxDQUFjO0FBQUVELFVBQUksRUFBSkEsSUFBRjtBQUFRRSxjQUFRLEVBQUU7QUFBbEIsS0FBZCxDQUFQO0FBQ0EsR0FGRDs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUM3QkQs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LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcblx0Q2Fyb3VzZWxCdXR0b24sXG5cdENhcm91c2VsQnV0dG9uRG90LFxuXHRDYXJvdXNlbEJ1dHRvbnMsXG5cdENhcm91c2VsQ29udGFpbmVyLFxuXHRDYXJvdXNlbEl0ZW0sXG5cdENhcm91c2VsSXRlbUltZyxcblx0Q2Fyb3VzZWxJdGVtVGV4dCxcblx0Q2Fyb3VzZWxJdGVtVGl0bGUsXG5cdENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSxcbn0gZnJvbSAnLi9UaW1lTGluZVN0eWxlcyc7XG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7IFRpbWVMaW5lRGF0YSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5jb25zdCBUT1RBTF9DQVJPVVNFTF9DT1VOVCA9IFRpbWVMaW5lRGF0YS5sZW5ndGg7XG5cbmNvbnN0IFRpbWVsaW5lID0gKCkgPT4ge1xuXHRjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcblxuXHRjb25zdCBzY3JvbGwgPSAobm9kZSwgbGVmdCkgPT4ge1xuXHRcdHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuXHRcdFx0Y29uc3Qgc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNyAqIChpIC8gVGltZUxpbmVEYXRhLmxlbmd0aCkpO1xuXG5cdFx0XHRzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcblx0XHRpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuXHRcdFx0Y29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgLyAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNykpICogVGltZUxpbmVEYXRhLmxlbmd0aCk7XG5cblx0XHRcdHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG5cdC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG5cdFx0XHRzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XG5cdFx0fTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcbiAgICA8U2VjdGlvbiBpZD0nYWJvdXQnPlxuICAgICAgPFNlY3Rpb25UaXRsZT5BYm91dCBNZTwvU2VjdGlvblRpdGxlPlxuICAgICAgPFNlY3Rpb25UZXh0PlxuICAgICAgICBGdWxsIHN0YWNrIHNvZnR3YXJlIGRldmVsb3BlciB3aXRoIDMrIHllYXJzIG9mIGV4cGVyaWVuY2UuIENvbWZvcnRhYmxlXG4gICAgICAgIHdvcmtpbmcgd2l0aCBKYXZhU2NyaXB0LCBOb2RlanMsIEphdmEoT09QKSAsQXdzIFNlcnZpY3MgLFJlYWN0LCBSZWR1eCxcbiAgICAgICAgVHlwZVNjcmlwdCwgR2l0L0dpdGh1YiwgSFRNTC9DU1MuIEFjY29tcGxpc2hlZCBpbiBjcmVhdGluZyByZXNwb25zaXZlXG4gICAgICAgIHdlYiBkZXNpZ24gdG8gZGVsaXZlciBhbiBleGNlcHRpb25hbCBjdXN0b21lciBleHBlcmllbmNlIHdpdGggZ29vZFxuICAgICAgICBjb21tdW5pY2F0aW9uIHNraWxscy5cbiAgICAgIDwvU2VjdGlvblRleHQ+XG4gICAgICA8Q2Fyb3VzZWxDb250YWluZXIgcmVmPXtjYXJvdXNlbFJlZn0gb25TY3JvbGw9e2hhbmRsZVNjcm9sbH0+XG4gICAgICAgIDw+XG4gICAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIGlkPXtgY2Fyb3VzZWxfX2l0ZW0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRpdGxlPlxuICAgICAgICAgICAgICAgICAge2Ake2l0ZW0ueWVhcn1gfVxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbUltZ1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMjA4J1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzYnXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMDggNidcbiAgICAgICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgICAgZD0nTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaJ1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J3VybCgjcGFpbnQwX2xpbmVhciknXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbC1vcGFjaXR5PScwLjMzJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwYWludDBfbGluZWFyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgeDE9Jy00LjMwNDEyZS0xMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxPScwLjUnXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj0nMjA4J1xuICAgICAgICAgICAgICAgICAgICAgICAgeTI9JzAuNTAwMjk1J1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nd2hpdGUnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9JzAuNzk0NzgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9J3doaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLW9wYWNpdHk9JzAnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtSW1nPlxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cbiAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XG4gICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcm91c2VsQnV0dG9uRG90IGFjdGl2ZT17YWN0aXZlSXRlbX0gLz5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxCdXR0b24+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0Nhcm91c2VsQnV0dG9ucz5cbiAgICAgIDxTZWN0aW9uRGl2aWRlciAvPlxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n");

/***/ })

});