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

/***/ "./src/api-handler.js":
/*!****************************!*\
  !*** ./src/api-handler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGames\": () => (/* binding */ getGames),\n/* harmony export */   \"getGameById\": () => (/* binding */ getGameById),\n/* harmony export */   \"getCommentsOfGame\": () => (/* binding */ getCommentsOfGame)\n/* harmony export */ });\n\r\nconst endpoint = 'http://localhost:3000';\r\n\r\n//TODO: #1 implementar api. Mirar en documentación\r\nconst getGames = async () => {\r\n  const response = await fetch(`${endpoint}/games`);\r\n  //TODO: #1.1 implementar control de errores\r\n  return response.json();\r\n}\r\n\r\nconst getGameById = async (gameId) => {\r\n  const response = await fetch(`${endpoint}/games/${gameId}`);\r\n  //TODO: #1.1 implementar control de errores\r\n  return response.json();\r\n}\r\n\r\nconst getCommentsOfGame = async (gameId) => {\r\n  const response = await fetch(`${endpoint}/games/${gameId}/comments?_expand=user`);\r\n    //TODO: #1.1 implementar control de errores\r\n    return response.json();\r\n}\n\n//# sourceURL=webpack://frontend-pro/./src/api-handler.js?");

/***/ }),

/***/ "./src/details.js":
/*!************************!*\
  !*** ./src/details.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawGame\": () => (/* binding */ drawGame),\n/* harmony export */   \"drawComments\": () => (/* binding */ drawComments)\n/* harmony export */ });\n/* harmony import */ var _api_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-handler.js */ \"./src/api-handler.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\r\n\r\n\r\nasync function drawGame(gameId) {\r\n    const game = await (0,_api_handler_js__WEBPACK_IMPORTED_MODULE_0__.getGameById)(gameId);\r\n    document.getElementById('game-name-title').innerHTML = game.name;\r\n    // TODO: #4 breadcrumb???? Let's use jQuery!!\r\n    document.getElementById('game-image').src = game.image;\r\n    document.getElementById('game-image').alt = game.name;\r\n  \r\n    document.getElementById('metacritic-score').innerHTML = game.scores.metacritic;\r\n    document.getElementById('user-score').innerHTML = game.scores.userScore;\r\n  \r\n    document.getElementById('summary').innerHTML = game.summary;\r\n  \r\n    document.getElementById('platform').innerHTML = game.platform;\r\n    document.getElementById('release-date').innerHTML = game.relaseDate;\r\n  \r\n  }\r\n  \r\n  // TODO: #2 Pedir ayuda para generateCommentSnippet\r\n  //email al correo de desarrollo y nos dan el código\r\n  async function drawComments(gameId) {\r\n    console.log(gameId)\r\n    let comments = await (0,_api_handler_js__WEBPACK_IMPORTED_MODULE_0__.getCommentsOfGame)(gameId);\r\n    document.getElementById('comments')\r\n        .appendChild(document.createElement('ul'))\r\n        .setAttribute('id', 'comments-list');\r\n    var i = 0;\r\n    for (i; i < comments.length; i++) {\r\n        document.getElementById('comments-list')\r\n            .appendChild(document.createElement('li')).innerHTML = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.generateCommentSnippet)(comments[i]);\r\n    }\r\n  }\n\n//# sourceURL=webpack://frontend-pro/./src/details.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateCommentSnippet\": () => (/* binding */ generateCommentSnippet),\n/* harmony export */   \"generateGameSnippet\": () => (/* binding */ generateGameSnippet)\n/* harmony export */ });\n\r\nfunction generateCommentSnippet(comment) {\r\n    return `<div class=\"row\">\r\n    <div class=\"col col-2\">\r\n      <div class=\"image-container text-right\">\r\n        <img class=\"avatar rounded\" src=\"${comment.user.image}\" alt=\"${comment.user.name}\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-10\">\r\n      <div class=\"user-name-container\">\r\n        <h4 class=\"text-muted\">${comment.user.name}</h4>\r\n      </div>\r\n      <div class=\"comment-body-container\">\r\n        ${comment.body}\r\n      </div>\r\n      <div class=\"date-container\">\r\n        Comment date: <b>${comment.commentDate}</b>\r\n      </div>\r\n    </div>\r\n  </div>`;\r\n  \r\n  }\r\n  \r\n  // TODO: #3 Dar más información que una lista (imagen, nombre, primeros 100 caracteres de summary)\r\n function generateGameSnippet(game) {\r\n    // return `<a href=\"/detail.html?id=${game.id}\">${game.name}</a>`;\r\n    //en lugar de generar una lista, se crea un contenedor con el link para darle estilo luego\r\n    return `<div class=\"game-snippet\">\r\n    <a href=\"/detail.html?id=${game.id}\">\r\n      <div class=\"game-snippet-container\">\r\n        <img class=\"img-thumbnail\" id=\"game-${game.id}\" src=\"${game.image}\" alt=\"Cover of game ${game.name}\" />\r\n      </div>\r\n      <h3 class=\"game-name\">${game.name}</h3>\r\n    </a>\r\n  </div>`;\r\n  \r\n  }\n\n//# sourceURL=webpack://frontend-pro/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawListGames\": () => (/* binding */ drawListGames)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n/* harmony import */ var _api_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-handler.js */ \"./src/api-handler.js\");\n\r\n\r\n\r\n\r\nasync function drawListGames() {\r\n    const games = await (0,_api_handler_js__WEBPACK_IMPORTED_MODULE_1__.getGames)();\r\n    // modificación para hacer uso de bootstrap\r\n    // contenedor con una fila para mostrar los juegos y se configura\r\n    const newDiv = document.createElement('div');\r\n    newDiv.setAttribute('id', 'game-list');\r\n    newDiv.setAttribute('class', 'row');\r\n    // se coge el súper contenedor y se inserta el contenedor anterior\r\n    document.getElementById('games').appendChild(newDiv);\r\n\r\n    for(let i = 0; i < games.length; i++) {\r\n      console.log('game', games[i])\r\n      const snippetContainer = document.createElement('div');\r\n      snippetContainer.setAttribute('class', 'col-6 col-sm-3');\r\n      document.getElementById('game-list')\r\n      .appendChild(snippetContainer).innerHTML = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.generateGameSnippet)(games[i]); \r\n    }\r\n}\r\n\r\n// export async function drawGame(gameId) {\r\n//   const game = await getGameById(gameId);\r\n//   document.getElementById('game-name-title').innerHTML = game.name;\r\n//   // TODO: #4 breadcrumb???? Let's use jQuery!!\r\n//   document.getElementById('game-image').src = game.image;\r\n//   document.getElementById('game-image').alt = game.name;\r\n\r\n//   document.getElementById('metacritic-score').innerHTML = game.scores.metacritic;\r\n//   document.getElementById('user-score').innerHTML = game.scores.userScore;\r\n\r\n//   document.getElementById('summary').innerHTML = game.summary;\r\n\r\n//   document.getElementById('platform').innerHTML = game.platform;\r\n//   document.getElementById('release-date').innerHTML = game.relaseDate;\r\n\r\n// }\r\n\r\n// // TODO: #2 Pedir ayuda para generateCommentSnippet\r\n// //email al correo de desarrollo y nos dan el código\r\n// export async function drawComments(gameId) {\r\n//   console.log(gameId)\r\n//   let comments = await getCommentsOfGame(gameId);\r\n//   document.getElementById('comments')\r\n//       .appendChild(document.createElement('ul'))\r\n//       .setAttribute('id', 'comments-list');\r\n//   var i = 0;\r\n//   for (i; i < comments.length; i++) {\r\n//       document.getElementById('comments-list')\r\n//           .appendChild(document.createElement('li')).innerHTML = generateCommentSnippet(comments[i]);\r\n//   }\r\n// }\r\n\r\n// function generateCommentSnippet(comment) {\r\n//   return `<div class=\"row\">\r\n//   <div class=\"col col-2\">\r\n//     <div class=\"image-container text-right\">\r\n//       <img class=\"avatar rounded\" src=\"${comment.user.image}\" alt=\"${comment.user.name}\" />\r\n//     </div>\r\n//   </div>\r\n//   <div class=\"col col-10\">\r\n//     <div class=\"user-name-container\">\r\n//       <h4 class=\"text-muted\">${comment.user.name}</h4>\r\n//     </div>\r\n//     <div class=\"comment-body-container\">\r\n//       ${comment.body}\r\n//     </div>\r\n//     <div class=\"date-container\">\r\n//       Comment date: <b>${comment.commentDate}</b>\r\n//     </div>\r\n//   </div>\r\n// </div>`;\r\n\r\n// }\r\n\r\n// // TODO: #3 Dar más información que una lista (imagen, nombre, primeros 100 caracteres de summary)\r\n// function generateGameSnippet(game) {\r\n//   // return `<a href=\"/detail.html?id=${game.id}\">${game.name}</a>`;\r\n//   //en lugar de generar una lista, se crea un contenedor con el link para darle estilo luego\r\n//   return `<div class=\"game-snippet\">\r\n//   <a href=\"/detail.html?id=${game.id}\">\r\n//     <div class=\"game-snippet-container\">\r\n//       <img class=\"img-thumbnail\" id=\"game-${game.id}\" src=\"${game.image}\" alt=\"Cover of game ${game.name}\" />\r\n//     </div>\r\n//     <h3 class=\"game-name\">${game.name}</h3>\r\n//   </a>\r\n// </div>`;\r\n\r\n// }\r\n\n\n//# sourceURL=webpack://frontend-pro/./src/index.js?");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/details.js");
/******/ 	
/******/ })()
;