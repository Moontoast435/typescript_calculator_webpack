/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ui/mainUIBuilder.ts":
/*!*********************************!*\
  !*** ./src/ui/mainUIBuilder.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/ui/style.css\");\n\nvar body = document.querySelector(\"body\");\nvar mainDiv = document.createElement(\"div\");\nmainDiv.classList.add(\"main\");\ncreateButtons();\nbody.appendChild(mainDiv);\nfunction createInput(buttonContainer) {\n    buttonContainer.innerHTML += \"<input type=\\\"text\\\" class=\\\"mainInput\\\" readonly>\";\n}\nfunction createButtons() {\n    var buttonsCont = document.createElement(\"div\");\n    buttonsCont.classList.add(\"buttoncontainer\");\n    createInput(buttonsCont);\n    buttonsCont.innerHTML +=\n        \"<div class=\\\"RowButtons\\\"><button>AC</button><button></button><button></button><button>/</button></div>\" +\n            \"<div class=\\\"RowButtons\\\"><button>7</button><button>8</button><button>9</button><button>*</button></div>\" +\n            \"<div class=\\\"RowButtons\\\"><button>4</button><button>5</button><button>6</button><button>-</button></div>\" +\n            \"<div class=\\\"RowButtons\\\"><button>1</button><button>2</button><button>3</button><button>+</button></div>\" +\n            \"<div class=\\\"RowButtons\\\"><button>0</button><button>.</button><button>DEL</button><button>=</button></div>\";\n    mainDiv.appendChild(buttonsCont);\n}\n\n\n//# sourceURL=webpack://webpack-project/./src/ui/mainUIBuilder.ts?");

/***/ }),

/***/ "./src/ui/style.css":
/*!**************************!*\
  !*** ./src/ui/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-project/./src/ui/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ui/mainUIBuilder.ts");
/******/ 	
/******/ })()
;