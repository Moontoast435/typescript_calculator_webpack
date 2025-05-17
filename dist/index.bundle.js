/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (() => {

eval("function handleOperation(operation, num1, num2) {\n    switch (operation) {\n        case \"Add\":\n            return num1 + num2;\n            break;\n        case \"Subtract\":\n            return num1 - num2;\n            break;\n        case \"Multiply\":\n            return num1 * num2;\n            break;\n        case \"Divide\":\n            return num1 / num2;\n            break;\n        default:\n            break;\n    }\n}\nconsole.log(handleOperation(\"Multiply\", 2, 5000));\n\n\n//# sourceURL=webpack://webpack-project/./src/utils/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/utils/index.ts"]();
/******/ 	
/******/ })()
;