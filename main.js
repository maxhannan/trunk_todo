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

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@fortawesome/fontawesome-free/js/all */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mainContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContainer */ \"./src/mainContainer.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n\n\n\n\nconst pageload = (()=>{\n    (0,_mainContainer__WEBPACK_IMPORTED_MODULE_1__.mainContainerModule)();\n    (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.sideBarModule)();\n})();\n\n\n\n\n//# sourceURL=webpack://trunk_todo/./src/index.js?");

/***/ }),

/***/ "./src/mainContainer.js":
/*!******************************!*\
  !*** ./src/mainContainer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainContainerModule\": () => (/* binding */ mainContainerModule)\n/* harmony export */ });\n\nconst content = document.querySelector('#content')\n\n\nconst mainContainerModule = ()=>{\n    const main = document.createElement('div');\n    main.id = 'main';\n    main.classList.add('main');\n    \n    const todoBox = document.createElement('div')\n    todoBox.classList.add('todos');\n    todoBox.innerHTML = '<h1> Testing...1.2.3...4<br>Testing...1.2.3...4</h1>'\n    main.appendChild(todoBox)\n    \n    const formHol = document.createElement('div')\n    formHol.classList.add('formHolder');\n\n    const formCont = document.createElement('div')\n    formCont.classList.add('formContainer');\n    \n\n    const inputBox = document.createElement('div')\n    inputBox.classList.add('inputBox')\n    formCont.appendChild(inputBox)\n\n    const submitBtnBox = document.createElement('div')\n    submitBtnBox.classList.add('submitBtnBox')\n    submitBtnBox.innerHTML = `\n    <a class = 'formBtn' id = 'formBtn'>\n        <i class=\"fas fa-arrow-circle-up\"></i>\n    </a>\n    `\n    formCont.appendChild(submitBtnBox)\n\n    formHol.appendChild(formCont)\n\n    const bbh = document.createElement('div')\n    bbh.classList.add('btmBtnHolder');\n    bbh.innerHTML = `\n        <a class = 'formOpener' id = 'formOpener'>\n            <i class=\"fas fa-plus fa-2x\"></i>\n        </a>\n    `\n    formHol.appendChild(bbh)\n\n    main.appendChild(formHol)\n    content.appendChild(main);\n\n    const toggleForm = ()=>{\n        btmBtnHolder.classList.toggle('formOpen')\n        formHolder.classList.toggle('formOpen')\n        formContainer.classList.toggle('formOpen')\n        todos.classList.toggle('formOpen')\n        formOpener.classList.toggle('open')\n    }\n    \n\n    const formHolder = document.querySelector('.formHolder')\n    const formContainer = document.querySelector('.formContainer')\n    const btmBtnHolder = document.querySelector('.btmBtnHolder')\n    const formOpener = document.querySelector('.formOpener')\n    const todos = document.querySelector('.todos')\n\n    formOpener.addEventListener('click', toggleForm)\n}\n\n\n\n//# sourceURL=webpack://trunk_todo/./src/mainContainer.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sideBarModule\": () => (/* binding */ sideBarModule)\n/* harmony export */ });\n\nconst content = document.querySelector('#content')\n\nconst sideBarModule = ()=>{\n    const bar = document.createElement('div');\n    bar.classList.add('sideBar');\n    \n    const closeHolder = document.createElement('div');\n    closeHolder.classList.add('closeHolder');\n    closeHolder.id = ('closeHolder');\n    closeHolder.innerHTML = `\n        <div class=\"container\">\n            <div class=\"bar1\"></div>\n            <div class=\"bar2\"></div>\n            <div class=\"bar3\"></div>\n        </div>\n    `\n    bar.appendChild(closeHolder);\n    \n    const mainMenu = document.createElement('div');\n    mainMenu.classList.add('mainMenu')\n\n    const menuTextContainer = document.createElement('div');\n    menuTextContainer.classList.add('menuTextContainer');\n    menuTextContainer.id = 'mainMenuTextContainer'\n    mainMenu.appendChild(menuTextContainer);\n    \n    const menuIconContainer = document.createElement('div');\n    menuIconContainer.classList.add('menuIconContainer');\n    menuIconContainer.id = 'mainMenuIconContainer'\n    menuIconContainer.innerHTML = `\n    <a class = 'navIcon' id = 'navIconInbox'>\n        <i class=\"fas fa-inbox\"></i>    \n    </a>\n    <a class = 'navIcon' id = 'navIconStar'>\n        <i class=\"far fa-star\"></i>    \n    </a>\n    <a class = 'navIcon' id = 'navIconArrows'>\n        <i class=\"fas fa-retweet\"></i>\n    </a>\n    \n    `\n   \n    mainMenu.appendChild(menuIconContainer);\n\n    bar.appendChild(mainMenu)\n    \n    const projects = document.createElement('div');\n    projects.classList.add('projects')\n\n    const projectsTextContainer = document.createElement('div');\n    projectsTextContainer.classList.add('menuTextContainer');\n    projectsTextContainer.id = 'projectsTextContainer'\n    \n    projects.appendChild(projectsTextContainer);\n    \n    const projectsIconContainer = document.createElement('div');\n    projectsIconContainer.classList.add('menuIconContainer');\n    projectsIconContainer.id = 'projectsIconContainer'\n    projectsIconContainer.innerHTML = `\n    <a class = 'navIcon' id = 'navIconInbox'>\n        <i class=\"fas fa-folder\"></i>\n    </a>\n    <a class = 'navIcon' id = 'navIconStar'>\n        <i class=\"fas fa-folder\"></i>  \n    </a>\n    <a class = 'navIcon' id = 'navIconArrows'>\n        <i class=\"fas fa-folder\"></i>\n    </a>\n    `\n    \n    projects.appendChild(projectsIconContainer);\n\n\n    bar.appendChild(projects)\n    \n    const sideFooter = document.createElement('div');\n    sideFooter.classList.add('sideFooter')\n    bar.appendChild(sideFooter);\n    \n    const main = document.querySelector('.main')\n    content.insertBefore(bar,main);\n\n    const container = document.querySelector('.container')\n    \n    \n    const toggleSide = () =>{\n        const sideBar = document.querySelector('.sideBar')\n        container.classList.toggle(\"change\");\n        sideBar.classList.toggle('close')\n        main.classList.toggle('fullScreen')\n    }\n    container.addEventListener('click', toggleSide)\n};\n\n\n\n\n//# sourceURL=webpack://trunk_todo/./src/sidebar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;