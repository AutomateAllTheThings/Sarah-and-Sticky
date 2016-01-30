/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.something = something;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TestGame = function TestGame() {\n\t_classCallCheck(this, TestGame);\n\n\tconsole.log(\"I'm a little teapot.\");\n};\n\nexports.default = TestGame;\nfunction something() {}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zb3VyY2UvbGliL3Rlc3RHYW1lLmpzPzY0NjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdEdhbWUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRjb25zb2xlLmxvZyhcIkknbSBhIGxpdHRsZSB0ZWFwb3QuXCIpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21ldGhpbmcoKSB7XG5cdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc291cmNlL2xpYi90ZXN0R2FtZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQTtBQUNBOzs7QUFQQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);