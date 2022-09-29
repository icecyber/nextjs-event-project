module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/events/[eventid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/error-alert.js":
/*!***********************************!*\
  !*** ./components/error-alert.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _error_alert_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-alert.module.css */ \"./components/error-alert.module.css\");\n/* harmony import */ var _error_alert_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_alert_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/hengratanak/Desktop/nextjs-course-code/components/error-alert.js\";\n\n\nfunction ErrorAlert(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _error_alert_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.alert,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorAlert);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Vycm9yLWFsZXJ0LmpzP2I3ZjkiXSwibmFtZXMiOlsiRXJyb3JBbGVydCIsInByb3BzIiwiY2xhc3NlcyIsImFsZXJ0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN6QixzQkFBTztBQUFLLGFBQVMsRUFBRUMsOERBQU8sQ0FBQ0MsS0FBeEI7QUFBQSxjQUFnQ0YsS0FBSyxDQUFDRztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFY0oseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Vycm9yLWFsZXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9lcnJvci1hbGVydC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRXJyb3JBbGVydChwcm9wcykge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWxlcnR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQWxlcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/error-alert.js\n");

/***/ }),

/***/ "./components/error-alert.module.css":
/*!*******************************************!*\
  !*** ./components/error-alert.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"alert\": \"error-alert_alert__5jSNO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Vycm9yLWFsZXJ0Lm1vZHVsZS5jc3M/OTAyZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXJyb3ItYWxlcnQubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFsZXJ0XCI6IFwiZXJyb3ItYWxlcnRfYWxlcnRfXzVqU05PXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/error-alert.module.css\n");

/***/ }),

/***/ "./components/event-detail/event-content.js":
/*!**************************************************!*\
  !*** ./components/event-detail/event-content.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_content_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-content.module.css */ \"./components/event-detail/event-content.module.css\");\n/* harmony import */ var _event_content_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_content_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/hengratanak/Desktop/nextjs-course-code/components/event-detail/event-content.js\";\n\n\nfunction EventContent(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _event_content_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1jb250ZW50LmpzPzlhOTIiXSwibmFtZXMiOlsiRXZlbnRDb250ZW50IiwicHJvcHMiLCJjbGFzc2VzIiwiY29udGVudCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0Isc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLGdFQUFPLENBQUNDLE9BQTVCO0FBQUEsY0FDR0YsS0FBSyxDQUFDRztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVjSiwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWNvbnRlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL2V2ZW50LWNvbnRlbnQubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIEV2ZW50Q29udGVudChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/event-detail/event-content.js\n");

/***/ }),

/***/ "./components/event-detail/event-content.module.css":
/*!**********************************************************!*\
  !*** ./components/event-detail/event-content.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"event-content_content__2VRI6\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1jb250ZW50Lm1vZHVsZS5jc3M/ZjE1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWNvbnRlbnQubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRcIjogXCJldmVudC1jb250ZW50X2NvbnRlbnRfXzJWUkk2XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/event-detail/event-content.module.css\n");

/***/ }),

/***/ "./components/event-detail/event-logistics.js":
/*!****************************************************!*\
  !*** ./components/event-detail/event-logistics.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _logistics_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logistics-item */ \"./components/event-detail/logistics-item.js\");\n/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-logistics.module.css */ \"./components/event-detail/event-logistics.module.css\");\n/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/hengratanak/Desktop/nextjs-course-code/components/event-detail/event-logistics.js\";\n\n\n\n\n\nfunction EventLogistics(props) {\n  const {\n    date,\n    address,\n    image,\n    imageAlt\n  } = props;\n  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {\n    day: 'numeric',\n    month: 'long',\n    year: 'numeric'\n  });\n  const addressText = address.replace(', ', '\\n');\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.logistics,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: `/${image}`,\n        alt: imageAlt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_logistics_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        icon: _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n          children: humanReadableDate\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_logistics_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        icon: _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n          children: addressText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventLogistics);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3MuanM/NDc3NSJdLCJuYW1lcyI6WyJFdmVudExvZ2lzdGljcyIsInByb3BzIiwiZGF0ZSIsImFkZHJlc3MiLCJpbWFnZSIsImltYWdlQWx0IiwiaHVtYW5SZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiYWRkcmVzc1RleHQiLCJyZXBsYWNlIiwiY2xhc3NlcyIsImxvZ2lzdGljcyIsImxpc3QiLCJEYXRlSWNvbiIsIkFkZHJlc3NJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDN0IsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFdBQVI7QUFBaUJDLFNBQWpCO0FBQXdCQztBQUF4QixNQUFxQ0osS0FBM0M7QUFFQSxRQUFNSyxpQkFBaUIsR0FBRyxJQUFJQyxJQUFKLENBQVNMLElBQVQsRUFBZU0sa0JBQWYsQ0FBa0MsT0FBbEMsRUFBMkM7QUFDbkVDLE9BQUcsRUFBRSxTQUQ4RDtBQUVuRUMsU0FBSyxFQUFFLE1BRjREO0FBR25FQyxRQUFJLEVBQUU7QUFINkQsR0FBM0MsQ0FBMUI7QUFLQSxRQUFNQyxXQUFXLEdBQUdULE9BQU8sQ0FBQ1UsT0FBUixDQUFnQixJQUFoQixFQUFzQixJQUF0QixDQUFwQjtBQUVBLHNCQUNFO0FBQVMsYUFBUyxFQUFFQyxrRUFBTyxDQUFDQyxTQUE1QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCxrRUFBTyxDQUFDVixLQUF4QjtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFHLElBQUdBLEtBQU0sRUFBcEI7QUFBdUIsV0FBRyxFQUFFQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSSxlQUFTLEVBQUVTLGtFQUFPLENBQUNFLElBQXZCO0FBQUEsOEJBQ0UscUVBQUMsdURBQUQ7QUFBZSxZQUFJLEVBQUVDLHdEQUFyQjtBQUFBLCtCQUNFO0FBQUEsb0JBQU9YO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLHFFQUFDLHVEQUFEO0FBQWUsWUFBSSxFQUFFWSwyREFBckI7QUFBQSwrQkFDRTtBQUFBLG9CQUFVTjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7QUFFY1osNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRkcmVzc0ljb24gZnJvbSAnLi4vaWNvbnMvYWRkcmVzcy1pY29uJztcbmltcG9ydCBEYXRlSWNvbiBmcm9tICcuLi9pY29ucy9kYXRlLWljb24nO1xuaW1wb3J0IExvZ2lzdGljc0l0ZW0gZnJvbSAnLi9sb2dpc3RpY3MtaXRlbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2V2ZW50LWxvZ2lzdGljcy5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRXZlbnRMb2dpc3RpY3MocHJvcHMpIHtcbiAgY29uc3QgeyBkYXRlLCBhZGRyZXNzLCBpbWFnZSwgaW1hZ2VBbHQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGh1bWFuUmVhZGFibGVEYXRlID0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICBtb250aDogJ2xvbmcnLFxuICAgIHllYXI6ICdudW1lcmljJyxcbiAgfSk7XG4gIGNvbnN0IGFkZHJlc3NUZXh0ID0gYWRkcmVzcy5yZXBsYWNlKCcsICcsICdcXG4nKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpc3RpY3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICA8aW1nIHNyYz17YC8ke2ltYWdlfWB9IGFsdD17aW1hZ2VBbHR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgIDxMb2dpc3RpY3NJdGVtIGljb249e0RhdGVJY29ufT5cbiAgICAgICAgICA8dGltZT57aHVtYW5SZWFkYWJsZURhdGV9PC90aW1lPlxuICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgIDxMb2dpc3RpY3NJdGVtIGljb249e0FkZHJlc3NJY29ufT5cbiAgICAgICAgICA8YWRkcmVzcz57YWRkcmVzc1RleHR9PC9hZGRyZXNzPlxuICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMb2dpc3RpY3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/event-detail/event-logistics.js\n");

/***/ }),

/***/ "./components/event-detail/event-logistics.module.css":
/*!************************************************************!*\
  !*** ./components/event-detail/event-logistics.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"logistics\": \"event-logistics_logistics__3HiYD\",\n\t\"image\": \"event-logistics_image__1ED6X\",\n\t\"list\": \"event-logistics_list__59rDU\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3MubW9kdWxlLmNzcz84MjlkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWxvZ2lzdGljcy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9naXN0aWNzXCI6IFwiZXZlbnQtbG9naXN0aWNzX2xvZ2lzdGljc19fM0hpWURcIixcblx0XCJpbWFnZVwiOiBcImV2ZW50LWxvZ2lzdGljc19pbWFnZV9fMUVENlhcIixcblx0XCJsaXN0XCI6IFwiZXZlbnQtbG9naXN0aWNzX2xpc3RfXzU5ckRVXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/event-detail/event-logistics.module.css\n");

/***/ }),

/***/ "./components/event-detail/event-summary.js":
/*!**************************************************!*\
  !*** ./components/event-detail/event-summary.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-summary.module.css */ \"./components/event-detail/event-summary.module.css\");\n/* harmony import */ var _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_summary_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/hengratanak/Desktop/nextjs-course-code/components/event-detail/event-summary.js\";\n\n\nfunction EventSummary(props) {\n  const {\n    title\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.summary,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventSummary);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1zdW1tYXJ5LmpzPzgzNDciXSwibmFtZXMiOlsiRXZlbnRTdW1tYXJ5IiwicHJvcHMiLCJ0aXRsZSIsImNsYXNzZXMiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0IsUUFBTTtBQUFFQztBQUFGLE1BQVlELEtBQWxCO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVFLGdFQUFPLENBQUNDLE9BQTVCO0FBQUEsMkJBQ0U7QUFBQSxnQkFBS0Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNGLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtc3VtbWFyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnQtc3VtbWFyeS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRXZlbnRTdW1tYXJ5KHByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTdW1tYXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/event-detail/event-summary.js\n");

/***/ }),

/***/ "./components/event-detail/event-summary.module.css":
/*!**********************************************************!*\
  !*** ./components/event-detail/event-summary.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"summary\": \"event-summary_summary__3PCze\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1zdW1tYXJ5Lm1vZHVsZS5jc3M/ZjdkMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LXN1bW1hcnkubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1bW1hcnlcIjogXCJldmVudC1zdW1tYXJ5X3N1bW1hcnlfXzNQQ3plXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/event-detail/event-summary.module.css\n");

/***/ }),

/***/ "./components/event-detail/logistics-item.js":
/*!***************************************************!*\
  !*** ./components/event-detail/logistics-item.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logistics-item.module.css */ \"./components/event-detail/logistics-item.module.css\");\n/* harmony import */ var _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/hengratanak/Desktop/nextjs-course-code/components/event-detail/logistics-item.js\";\n\n\nfunction LogisticsItem(props) {\n  const {\n    icon: Icon\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Icon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n      children: props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogisticsItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9sb2dpc3RpY3MtaXRlbS5qcz9mMWEwIl0sIm5hbWVzIjpbIkxvZ2lzdGljc0l0ZW0iLCJwcm9wcyIsImljb24iLCJJY29uIiwiY2xhc3NlcyIsIml0ZW0iLCJjb250ZW50IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUM1QixRQUFNO0FBQUVDLFFBQUksRUFBRUM7QUFBUixNQUFpQkYsS0FBdkI7QUFFQSxzQkFDRTtBQUFJLGFBQVMsRUFBRUcsaUVBQU8sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDRTtBQUFNLGVBQVMsRUFBRUQsaUVBQU8sQ0FBQ0YsSUFBekI7QUFBQSw2QkFDRSxxRUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFNLGVBQVMsRUFBRUUsaUVBQU8sQ0FBQ0UsT0FBekI7QUFBQSxnQkFBbUNMLEtBQUssQ0FBQ007QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0FBRWNQLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvbG9naXN0aWNzLWl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBMb2dpc3RpY3NJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHsgaWNvbjogSWNvbiB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259PlxuICAgICAgICA8SWNvbiAvPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naXN0aWNzSXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/event-detail/logistics-item.js\n");

/***/ }),

/***/ "./components/event-detail/logistics-item.module.css":
/*!***********************************************************!*\
  !*** ./components/event-detail/logistics-item.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"logistics-item_item__1FERm\",\n\t\"icon\": \"logistics-item_icon__1DIos\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9sb2dpc3RpY3MtaXRlbS5tb2R1bGUuY3NzPzFhOWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtXCI6IFwibG9naXN0aWNzLWl0ZW1faXRlbV9fMUZFUm1cIixcblx0XCJpY29uXCI6IFwibG9naXN0aWNzLWl0ZW1faWNvbl9fMURJb3NcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/event-detail/logistics-item.module.css\n");

/***/ }),

/***/ "./components/icons/address-icon.js":
/*!******************************************!*\
  !*** ./components/icons/address-icon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/hengratanak/Desktop/nextjs-course-code/components/icons/address-icon.js\";\n\nfunction AddressIcon() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    stroke: \"currentColor\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: 2,\n      d: \"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: 2,\n      d: \"M15 11a3 3 0 11-6 0 3 3 0 016 0z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddressIcon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL2FkZHJlc3MtaWNvbi5qcz84ZWYwIl0sIm5hbWVzIjpbIkFkZHJlc3NJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTQSxXQUFULEdBQXVCO0FBQ3JCLHNCQUNFO0FBQ0UsU0FBSyxFQUFDLDRCQURSO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUlFLFVBQU0sRUFBQyxjQUpUO0FBQUEsNEJBTUU7QUFDRSxtQkFBYSxFQUFDLE9BRGhCO0FBRUUsb0JBQWMsRUFBQyxPQUZqQjtBQUdFLGlCQUFXLEVBQUUsQ0FIZjtBQUlFLE9BQUMsRUFBQztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVlFO0FBQ0UsbUJBQWEsRUFBQyxPQURoQjtBQUVFLG9CQUFjLEVBQUMsT0FGakI7QUFHRSxpQkFBVyxFQUFFLENBSGY7QUFJRSxPQUFDLEVBQUM7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0FBRWNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pY29ucy9hZGRyZXNzLWljb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBBZGRyZXNzSWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICBmaWxsPSdub25lJ1xuICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgIGQ9J00xNy42NTcgMTYuNjU3TDEzLjQxNCAyMC45YTEuOTk4IDEuOTk4IDAgMDEtMi44MjcgMGwtNC4yNDQtNC4yNDNhOCA4IDAgMTExMS4zMTQgMHonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgIGQ9J00xNSAxMWEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6J1xuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkcmVzc0ljb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/icons/address-icon.js\n");

/***/ }),

/***/ "./components/icons/date-icon.js":
/*!***************************************!*\
  !*** ./components/icons/date-icon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/hengratanak/Desktop/nextjs-course-code/components/icons/date-icon.js\";\n\nfunction DateIcon() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    stroke: \"currentColor\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: 2,\n      d: \"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DateIcon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL2RhdGUtaWNvbi5qcz84MDZiIl0sIm5hbWVzIjpbIkRhdGVJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLHNCQUNFO0FBQ0UsU0FBSyxFQUFDLDRCQURSO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUlFLFVBQU0sRUFBQyxjQUpUO0FBQUEsMkJBTUU7QUFDRSxtQkFBYSxFQUFDLE9BRGhCO0FBRUUsb0JBQWMsRUFBQyxPQUZqQjtBQUdFLGlCQUFXLEVBQUUsQ0FIZjtBQUlFLE9BQUMsRUFBQztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7QUFFY0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2ljb25zL2RhdGUtaWNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIERhdGVJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgIGZpbGw9J25vbmUnXG4gICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgZD0nTTggN1YzbTggNFYzbS05IDhoMTBNNSAyMWgxNGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlSWNvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/icons/date-icon.js\n");

/***/ }),

/***/ "./dummy-data.js":
/*!***********************!*\
  !*** ./dummy-data.js ***!
  \***********************/
/*! exports provided: getFeaturedEvents, getAllEvents, getFilteredEvents, getEventById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeaturedEvents\", function() { return getFeaturedEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllEvents\", function() { return getAllEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilteredEvents\", function() { return getFilteredEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventById\", function() { return getEventById; });\nconst DUMMY_EVENTS = [{\n  id: 'e1',\n  title: 'Programming for everyone',\n  description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',\n  location: 'Somestreet 25, 12345 San Somewhereo',\n  date: '2021-05-12',\n  image: 'images/coding-event.jpg',\n  isFeatured: true\n}, {\n  id: 'e2',\n  title: 'Networking for introverts',\n  description: \"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!\",\n  location: 'New Wall Street 5, 98765 New Work',\n  date: '2021-05-30',\n  image: 'images/introvert-event.jpg',\n  isFeatured: true\n}, {\n  id: 'e3',\n  title: 'Networking for extroverts',\n  description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',\n  location: 'My Street 12, 10115 Broke City',\n  date: '2022-04-10',\n  image: 'images/extrovert-event.jpg',\n  isFeatured: true\n}];\nfunction getFeaturedEvents() {\n  return DUMMY_EVENTS.filter(event => event.isFeatured);\n}\nfunction getAllEvents() {\n  return DUMMY_EVENTS;\n}\nfunction getFilteredEvents(dateFilter) {\n  const {\n    year,\n    month\n  } = dateFilter;\n  let filteredEvents = DUMMY_EVENTS.filter(event => {\n    const eventDate = new Date(event.date);\n    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;\n  });\n  return filteredEvents;\n}\nfunction getEventById(id) {\n  return DUMMY_EVENTS.find(event => event.id === id);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kdW1teS1kYXRhLmpzPzQ3NmIiXSwibmFtZXMiOlsiRFVNTVlfRVZFTlRTIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJkYXRlIiwiaW1hZ2UiLCJpc0ZlYXR1cmVkIiwiZ2V0RmVhdHVyZWRFdmVudHMiLCJmaWx0ZXIiLCJldmVudCIsImdldEFsbEV2ZW50cyIsImdldEZpbHRlcmVkRXZlbnRzIiwiZGF0ZUZpbHRlciIsInllYXIiLCJtb250aCIsImZpbHRlcmVkRXZlbnRzIiwiZXZlbnREYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXRFdmVudEJ5SWQiLCJmaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTUEsWUFBWSxHQUFHLENBQ2pCO0FBQ0VDLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSwwQkFGVDtBQUdFQyxhQUFXLEVBQ1QsNEpBSko7QUFLRUMsVUFBUSxFQUFFLHFDQUxaO0FBTUVDLE1BQUksRUFBRSxZQU5SO0FBT0VDLE9BQUssRUFBRSx5QkFQVDtBQVFFQyxZQUFVLEVBQUU7QUFSZCxDQURpQixFQVdqQjtBQUNFTixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsMkJBRlQ7QUFHRUMsYUFBVyxFQUNULDBJQUpKO0FBS0VDLFVBQVEsRUFBRSxtQ0FMWjtBQU1FQyxNQUFJLEVBQUUsWUFOUjtBQU9FQyxPQUFLLEVBQUUsNEJBUFQ7QUFRRUMsWUFBVSxFQUFFO0FBUmQsQ0FYaUIsRUFxQmpCO0FBQ0VOLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSwyQkFGVDtBQUdFQyxhQUFXLEVBQ1QsNklBSko7QUFLRUMsVUFBUSxFQUFFLGdDQUxaO0FBTUVDLE1BQUksRUFBRSxZQU5SO0FBT0VDLE9BQUssRUFBRSw0QkFQVDtBQVFFQyxZQUFVLEVBQUU7QUFSZCxDQXJCaUIsQ0FBckI7QUFpQ1MsU0FBU0MsaUJBQVQsR0FBNkI7QUFDbEMsU0FBT1IsWUFBWSxDQUFDUyxNQUFiLENBQXFCQyxLQUFELElBQVdBLEtBQUssQ0FBQ0gsVUFBckMsQ0FBUDtBQUNEO0FBRU0sU0FBU0ksWUFBVCxHQUF3QjtBQUM3QixTQUFPWCxZQUFQO0FBQ0Q7QUFFTSxTQUFTWSxpQkFBVCxDQUEyQkMsVUFBM0IsRUFBdUM7QUFDNUMsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBa0JGLFVBQXhCO0FBRUEsTUFBSUcsY0FBYyxHQUFHaEIsWUFBWSxDQUFDUyxNQUFiLENBQXFCQyxLQUFELElBQVc7QUFDbEQsVUFBTU8sU0FBUyxHQUFHLElBQUlDLElBQUosQ0FBU1IsS0FBSyxDQUFDTCxJQUFmLENBQWxCO0FBQ0EsV0FBT1ksU0FBUyxDQUFDRSxXQUFWLE9BQTRCTCxJQUE1QixJQUFvQ0csU0FBUyxDQUFDRyxRQUFWLE9BQXlCTCxLQUFLLEdBQUcsQ0FBNUU7QUFDRCxHQUhvQixDQUFyQjtBQUtBLFNBQU9DLGNBQVA7QUFDRDtBQUVNLFNBQVNLLFlBQVQsQ0FBc0JwQixFQUF0QixFQUEwQjtBQUMvQixTQUFPRCxZQUFZLENBQUNzQixJQUFiLENBQW1CWixLQUFELElBQVdBLEtBQUssQ0FBQ1QsRUFBTixLQUFhQSxFQUExQyxDQUFQO0FBQ0QiLCJmaWxlIjoiLi9kdW1teS1kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRFVNTVlfRVZFTlRTID0gW1xuICAgIHtcbiAgICAgIGlkOiAnZTEnLFxuICAgICAgdGl0bGU6ICdQcm9ncmFtbWluZyBmb3IgZXZlcnlvbmUnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdFdmVyeW9uZSBjYW4gbGVhcm4gdG8gY29kZSEgWWVzLCBldmVyeW9uZSEgSW4gdGhpcyBsaXZlIGV2ZW50LCB3ZSBhcmUgZ29pbmcgdG8gZ28gdGhyb3VnaCBhbGwgdGhlIGtleSBiYXNpY3MgYW5kIGdldCB5b3Ugc3RhcnRlZCB3aXRoIHByb2dyYW1taW5nIGFzIHdlbGwuJyxcbiAgICAgIGxvY2F0aW9uOiAnU29tZXN0cmVldCAyNSwgMTIzNDUgU2FuIFNvbWV3aGVyZW8nLFxuICAgICAgZGF0ZTogJzIwMjEtMDUtMTInLFxuICAgICAgaW1hZ2U6ICdpbWFnZXMvY29kaW5nLWV2ZW50LmpwZycsXG4gICAgICBpc0ZlYXR1cmVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdlMicsXG4gICAgICB0aXRsZTogJ05ldHdvcmtpbmcgZm9yIGludHJvdmVydHMnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2Uga25vdzogTmV0d29ya2luZyBpcyBubyBmdW4gaWYgeW91IGFyZSBhbiBpbnRyb3ZlcnQgcGVyc29uLiBUaGF0J3Mgd2h5IHdlIGNhbWUgdXAgd2l0aCB0aGlzIGV2ZW50IC0gaXQnbGwgYmUgc28gbXVjaCBlYXNpZXIuIFByb21pc2VkIVwiLFxuICAgICAgbG9jYXRpb246ICdOZXcgV2FsbCBTdHJlZXQgNSwgOTg3NjUgTmV3IFdvcmsnLFxuICAgICAgZGF0ZTogJzIwMjEtMDUtMzAnLFxuICAgICAgaW1hZ2U6ICdpbWFnZXMvaW50cm92ZXJ0LWV2ZW50LmpwZycsXG4gICAgICBpc0ZlYXR1cmVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdlMycsXG4gICAgICB0aXRsZTogJ05ldHdvcmtpbmcgZm9yIGV4dHJvdmVydHMnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdZb3UgcHJvYmFibHkgbmVlZCBubyBoZWxwIHdpdGggbmV0d29ya2luZyBpbiBnZW5lcmFsLiBCdXQgZm9jdXNpbmcgeW91ciBlbmVyZ3kgY29ycmVjdGx5IC0gdGhhdCBpcyBzb21ldGhpbmcgd2hlcmUgbW9zdCBwZW9wbGUgY2FuIGltcHJvdmUuJyxcbiAgICAgIGxvY2F0aW9uOiAnTXkgU3RyZWV0IDEyLCAxMDExNSBCcm9rZSBDaXR5JyxcbiAgICAgIGRhdGU6ICcyMDIyLTA0LTEwJyxcbiAgICAgIGltYWdlOiAnaW1hZ2VzL2V4dHJvdmVydC1ldmVudC5qcGcnLFxuICAgICAgaXNGZWF0dXJlZDogdHJ1ZSxcbiAgICB9LFxuICBdO1xuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEZlYXR1cmVkRXZlbnRzKCkge1xuICAgIHJldHVybiBEVU1NWV9FVkVOVFMuZmlsdGVyKChldmVudCkgPT4gZXZlbnQuaXNGZWF0dXJlZCk7XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRBbGxFdmVudHMoKSB7XG4gICAgcmV0dXJuIERVTU1ZX0VWRU5UUztcbiAgfVxuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlcmVkRXZlbnRzKGRhdGVGaWx0ZXIpIHtcbiAgICBjb25zdCB7IHllYXIsIG1vbnRoIH0gPSBkYXRlRmlsdGVyO1xuICBcbiAgICBsZXQgZmlsdGVyZWRFdmVudHMgPSBEVU1NWV9FVkVOVFMuZmlsdGVyKChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZXZlbnREYXRlID0gbmV3IERhdGUoZXZlbnQuZGF0ZSk7XG4gICAgICByZXR1cm4gZXZlbnREYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiYgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoIC0gMTtcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGZpbHRlcmVkRXZlbnRzO1xuICB9XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIERVTU1ZX0VWRU5UUy5maW5kKChldmVudCkgPT4gZXZlbnQuaWQgPT09IGlkKTtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dummy-data.js\n");

/***/ }),

/***/ "./pages/events/[eventid].js":
/*!***********************************!*\
  !*** ./pages/events/[eventid].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/event-detail/event-summary */ \"./components/event-detail/event-summary.js\");\n/* harmony import */ var _components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/event-detail/event-logistics */ \"./components/event-detail/event-logistics.js\");\n/* harmony import */ var _components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/event-detail/event-content */ \"./components/event-detail/event-content.js\");\n/* harmony import */ var _components_error_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/error-alert */ \"./components/error-alert.js\");\n\nvar _jsxFileName = \"/Users/hengratanak/Desktop/nextjs-course-code/pages/events/[eventid].js\";\n\n\n\n\n\n\n\n\n\nconst EventID = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const eventId = router.query.eventid;\n  const event = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_3__[\"getEventById\"])(eventId);\n\n  if (!event) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_error_alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"No event found\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 28\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 16\n    }, undefined);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: event.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      date: event.date,\n      address: event.location,\n      image: event.image,\n      imageAlt: event.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: event.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventID);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ldmVudHMvW2V2ZW50aWRdLmpzPzgyNTciXSwibmFtZXMiOlsiRXZlbnRJRCIsInJvdXRlciIsInVzZVJvdXRlciIsImV2ZW50SWQiLCJxdWVyeSIsImV2ZW50aWQiLCJldmVudCIsImdldEV2ZW50QnlJZCIsInRpdGxlIiwiZGF0ZSIsImxvY2F0aW9uIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxPQUE3QjtBQUNBLFFBQU1DLEtBQUssR0FBR0MsZ0VBQVksQ0FBQ0osT0FBRCxDQUExQjs7QUFFQSxNQUFHLENBQUNHLEtBQUosRUFBVTtBQUNOLHdCQUFPLHFFQUFDLCtEQUFEO0FBQUEsNkJBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0g7O0FBRUgsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDSSxxRUFBQyw4RUFBRDtBQUFjLFdBQUssRUFBRUEsS0FBSyxDQUFDRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMsZ0ZBQUQ7QUFBZ0IsVUFBSSxFQUFFRixLQUFLLENBQUNHLElBQTVCO0FBQWtDLGFBQU8sRUFBRUgsS0FBSyxDQUFDSSxRQUFqRDtBQUEyRCxXQUFLLEVBQUVKLEtBQUssQ0FBQ0ssS0FBeEU7QUFBK0UsY0FBUSxFQUFFTCxLQUFLLENBQUNFO0FBQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSSxxRUFBQyw4RUFBRDtBQUFBLDZCQUNJO0FBQUEsa0JBQUlGLEtBQUssQ0FBQ007QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBbEJEOztBQW9CZVosc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvW2V2ZW50aWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGdldEV2ZW50QnlJZCB9IGZyb20gJy4uLy4uL2R1bW15LWRhdGEnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXZlbnRTdW1tYXJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LXN1bW1hcnknO1xuaW1wb3J0IEV2ZW50TG9naXN0aWNzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWxvZ2lzdGljcyc7XG5pbXBvcnQgRXZlbnRDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWNvbnRlbnQnO1xuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9lcnJvci1hbGVydCc7XG5cbmNvbnN0IEV2ZW50SUQgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgZXZlbnRJZCA9IHJvdXRlci5xdWVyeS5ldmVudGlkOyBcbiAgICBjb25zdCBldmVudCA9IGdldEV2ZW50QnlJZChldmVudElkKTtcblxuICAgIGlmKCFldmVudCl7XG4gICAgICAgIHJldHVybiA8RXJyb3JBbGVydD48cD5ObyBldmVudCBmb3VuZDwvcD48L0Vycm9yQWxlcnQ+XG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgICA8RXZlbnRTdW1tYXJ5IHRpdGxlPXtldmVudC50aXRsZX0vPlxuICAgICAgICA8RXZlbnRMb2dpc3RpY3MgZGF0ZT17ZXZlbnQuZGF0ZX0gYWRkcmVzcz17ZXZlbnQubG9jYXRpb259IGltYWdlPXtldmVudC5pbWFnZX0gaW1hZ2VBbHQ9e2V2ZW50LnRpdGxlfS8+XG4gICAgICAgIDxFdmVudENvbnRlbnQ+XG4gICAgICAgICAgICA8cD57ZXZlbnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L0V2ZW50Q29udGVudD5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/[eventid].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });