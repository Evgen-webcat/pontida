/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app/app.js":
/*!***********************!*\
  !*** ./js/app/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    'use strict'\n\n    $('.main-menu-button').click(function (event) {\n        event.preventDefault();\n        $(this).toggleClass('button-menu-open');\n        $('.main-menu').slideToggle();\n    });\n\n    $('.phone-input').mask('+375(99) 999-99-99');\n\n    var slider = document.getElementById('slick-slider');\n    if (slider) {\n        $('.slick-slider').slick({\n            autoplay: true,\n            dots: true,\n            appendDots: $('.dots'),\n            responsive: [\n                {\n                    breakpoint: 768,\n                    settings: {\n                        arrows: false\n                    }\n    }]\n        });\n    }\n\n    var scrollHere = document.getElementById('scrollHere');\n\n    if (scrollHere) {\n        $('.mouse-button').click(function (event) {\n            event.preventDefault();\n            var scrollTo = $('#scrollHere').offset().top;\n            $('html, body').animate({\n                scrollTop: scrollTo\n            }, 500);\n        });\n    }\n});\n\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ "./js/app/filter.js":
/*!**************************!*\
  !*** ./js/app/filter.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    $('.filter_button').click(function (event) {\n        event.preventDefault();\n        var index = $(this).parent().index();\n        $(this).toggleClass('filter_button_open');\n        $('.filters_sub-menu').eq(index).slideToggle('fast');\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/filter.js?");

/***/ }),

/***/ "./js/app/ymaps.js":
/*!*************************!*\
  !*** ./js/app/ymaps.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    var mapBlock = document.getElementById('map');\n\n    if (mapBlock) {\n    ymaps.ready(init);\n    var map,\n        Placemark;\n\n    function init() {\n        map = new ymaps.Map(\"map\", {\n            center: [53.92507307064044,27.60454599999995],\n            zoom: 17\n        });\n\n        Placemark = new ymaps.Placemark([53.92507307064044,27.60454599999995], {\n            hintContent: 'Pontida',\n            balloonContent: 'Pontida'\n        }, {\n            iconLayout: 'default#image',\n            iconImageHref: 'img/placemark.png',\n            iconImageSize: [18, 24]\n        });\n\n         map.geoObjects.add(Placemark);\n    }\n}\n});\n\n\n//# sourceURL=webpack:///./js/app/ymaps.js?");

/***/ }),

/***/ 0:
/*!******************************************************************!*\
  !*** multi ./js/app/app.js ./js/app/filter.js ./js/app/ymaps.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\n__webpack_require__(/*! ./js/app/filter.js */\"./js/app/filter.js\");\nmodule.exports = __webpack_require__(/*! ./js/app/ymaps.js */\"./js/app/ymaps.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js_./js/app/filter.js_./js/app/ymaps.js?");

/***/ })

/******/ });
