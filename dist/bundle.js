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

/***/ "./src/data/getAlbums.ts":
/*!*******************************!*\
  !*** ./src/data/getAlbums.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAlbums: () => (/* binding */ getAlbums)\n/* harmony export */ });\nvar getAlbums = function (id) {\n    return fetch(\"https://jsonplaceholder.typicode.com/users/\".concat(id, \"/albums\"))\n        .then(function (response) { return response.json(); })\n        .then(function (json) {\n        return json;\n    })\n        .catch(console.error);\n};\n\n\n//# sourceURL=webpack://test-webpack/./src/data/getAlbums.ts?");

/***/ }),

/***/ "./src/data/getUsers.ts":
/*!******************************!*\
  !*** ./src/data/getUsers.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUsers: () => (/* binding */ getUsers)\n/* harmony export */ });\nvar getUsers = function () {\n    return fetch('https://jsonplaceholder.typicode.com/users')\n        .then(function (response) { return response.json(); })\n        .then(function (json) {\n        return json;\n    })\n        .catch(console.error);\n};\n\n\n//# sourceURL=webpack://test-webpack/./src/data/getUsers.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_getUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/getUsers */ \"./src/data/getUsers.ts\");\n/* harmony import */ var _data_getAlbums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/getAlbums */ \"./src/data/getAlbums.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nvar getContainer = function () {\n    var container = document.querySelector('.container');\n    if (!container)\n        throw new Error('container doesnt exist');\n    var loader = document.querySelector('.loader');\n    return {\n        container: container,\n        loader: loader,\n    };\n};\nvar renderUser = function (id, username, userphone, useremail) {\n    var user = document.createElement('div');\n    user.id = String(id);\n    user.classList.add('user');\n    var name = document.createElement('h2');\n    name.textContent = username;\n    name.classList.add('username');\n    var address = document.createElement('div');\n    var userInfo = document.createElement('span');\n    userInfo.innerText = \"Phone: \".concat(userphone, \"\\n  E-mail: \").concat(useremail);\n    address.appendChild(userInfo);\n    var btn = document.createElement('button');\n    btn.classList.add('showPosts');\n    btn.textContent = 'show posts';\n    var posts = document.createElement('ul');\n    posts.classList.add(\"userposts\");\n    posts.id = \"userposts\".concat(String(id));\n    var container = getContainer().container;\n    container.appendChild(user);\n    user.appendChild(name);\n    user.appendChild(address);\n    user.appendChild(btn);\n    user.appendChild(posts);\n};\nvar renderAlbums = function (id, title) {\n    var li = document.createElement('li');\n    li.classList.add('posts');\n    var h3 = document.createElement('h4');\n    h3.classList.add('posttitle');\n    h3.textContent = title;\n    var userposts = document.getElementById(\"userposts\".concat(String(id)));\n    userposts === null || userposts === void 0 ? void 0 : userposts.appendChild(li);\n    li.appendChild(h3);\n};\nvar clearAlbums = function (id) {\n    var userposts = document.getElementById(\"userposts\".concat(String(id)));\n    if (!userposts)\n        throw new Error('nie ma postow do wyczyszczenia');\n    userposts.innerHTML = '';\n};\n//! INITTTTTT\nvar init = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var data, i, e_1, buttons;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, (0,_data_getUsers__WEBPACK_IMPORTED_MODULE_0__.getUsers)()];\n            case 1:\n                data = _a.sent();\n                // console.log(data[0]);\n                // console.log(data[0].id);\n                // console.log(data[0].name);\n                // console.log(data[0].username);\n                // await sleep(2000);\n                // console.log('data', data);\n                for (i in data) {\n                    renderUser(data[i].id, data[i].username, data[i].phone, data[i].email);\n                }\n                return [3 /*break*/, 3];\n            case 2:\n                e_1 = _a.sent();\n                console.log(e_1);\n                return [3 /*break*/, 3];\n            case 3:\n                buttons = document.querySelectorAll('.showPosts');\n                buttons.forEach(function (button) {\n                    button.addEventListener('click', function (e) { return __awaiter(void 0, void 0, void 0, function () {\n                        var user, userid, albums, i;\n                        return __generator(this, function (_a) {\n                            switch (_a.label) {\n                                case 0:\n                                    user = e.target;\n                                    userid = String((user === null || user === void 0 ? void 0 : user.parentNode).id);\n                                    if (button.id === 'showed') {\n                                        clearAlbums(userid);\n                                        button.removeAttribute('id');\n                                        button.textContent = 'show posts';\n                                        return [2 /*return*/];\n                                    }\n                                    return [4 /*yield*/, (0,_data_getAlbums__WEBPACK_IMPORTED_MODULE_1__.getAlbums)(userid)];\n                                case 1:\n                                    albums = _a.sent();\n                                    console.log(albums);\n                                    for (i in albums) {\n                                        renderAlbums(userid, albums[i].title);\n                                    }\n                                    button.id = 'showed';\n                                    button.textContent = 'hide posts';\n                                    return [2 /*return*/];\n                            }\n                        });\n                    }); });\n                });\n                return [2 /*return*/];\n        }\n    });\n}); };\ninit();\n\n\n//# sourceURL=webpack://test-webpack/./src/index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;