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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const endpoint = 'http://localhost:3000';\r\n\r\n//TODO: #1 implementar api. Mirar en documentación\r\nconst getGames = async () => {\r\n  const response = await fetch(`${endpoint}/games`);\r\n  //TODO: #1.1 implementar control de errores\r\n  return response.json();\r\n}\r\n\r\nconst getGameById = async (gameId) => {\r\n  const response = await fetch(`${endpoint}/games/${gameId}`);\r\n  //TODO: #1.1 implementar control de errores\r\n  return response.json();\r\n}\r\n\r\nconst getCommentsOfGame = async (gameId) => {\r\n  const response = await fetch(`${endpoint}/games/${gameId}/comments?_expand=user`);\r\n    //TODO: #1.1 implementar control de errores\r\n    return response.json();\r\n}\r\n\r\n\r\nasync function drawListGames() {\r\n    let games = await getGames();\r\n    document.getElementById('games')\r\n        .appendChild(document.createElement('ul'))\r\n        .setAttribute('id', 'games-list');\r\n    var i = 0;\r\n    for (i; i < games.length; i++) {\r\n        document.getElementById('games-list')\r\n            .appendChild(document.createElement('li')).innerHTML = generateGameSnippet(games[i]);\r\n    }\r\n}\r\n\r\nasync function drawGame(gameId) {\r\n  let game = await getGameById(gameId);\r\n  document.getElementById('game-name-title').innerHTML = game.name;\r\n  // TODO: #4 breadcrumb???? Let's use jQuery!!\r\n  document.getElementById('game-image').src = game.image;\r\n  document.getElementById('game-image').alt = game.name;\r\n\r\n  document.getElementById('metacritic-score').innerHTML = game.scores.metacritic;\r\n  document.getElementById('user-score').innerHTML = game.scores.userScore;\r\n\r\n  document.getElementById('summary').innerHTML = game.summary;\r\n\r\n  document.getElementById('platform').innerHTML = game.platform;\r\n  document.getElementById('release-date').innerHTML = game.relaseDate;\r\n\r\n}\r\n\r\n// TODO: #2 Pedir ayuda para generateCommentSnippet\r\n//email al correo de desarrollo y nos dan el código\r\nasync function drawComments(gameId) {\r\n  console.log(gameId)\r\n  let comments = await getCommentsOfGame(gameId);\r\n  document.getElementById('comments')\r\n      .appendChild(document.createElement('ul'))\r\n      .setAttribute('id', 'comments-list');\r\n  var i = 0;\r\n  for (i; i < comments.length; i++) {\r\n      document.getElementById('comments-list')\r\n          .appendChild(document.createElement('li')).innerHTML = generateCommentSnippet(comments[i]);\r\n  }\r\n}\r\n\r\nfunction generateCommentSnippet(comment) {\r\n  return `<div class=\"row\">\r\n  <div class=\"col col-2\">\r\n    <div class=\"image-container text-right\">\r\n      <img class=\"avatar rounded\" src=\"${comment.user.image}\" alt=\"${comment.user.name}\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"col col-10\">\r\n    <div class=\"user-name-container\">\r\n      <h4 class=\"text-muted\">${comment.user.name}</h4>\r\n    </div>\r\n    <div class=\"comment-body-container\">\r\n      ${comment.body}\r\n    </div>\r\n    <div class=\"date-container\">\r\n      Comment date: <b>${comment.commentDate}</b>\r\n    </div>\r\n  </div>\r\n</div>`;\r\n\r\n}\r\n\r\n// TODO: #3 Dar más información que una lista (imagen, nombre, primeros 100 caracteres de summary)\r\nfunction generateGameSnippet(game) {\r\n  // return `<a href=\"/detail.html?id=${game.id}\">${game.name}</a>`;\r\n  //en lugar de generar una lista, se crea un contenedor con el link para darle estilo luego\r\n  return `<div class=\"game-snippet\">\r\n  <a href=\"/detail.html?id=${game.id}\">\r\n    <div class=\"game-snippet-container\">\r\n      <img class=\"img-thumbnail\" id=\"game-${game.id}\" src=\"${game.image}\" alt=\"Cover of game ${game.name}\" />\r\n    </div>\r\n    <h3 class=\"game-name\">${game.name}</h3>\r\n  </a>\r\n</div>`;\r\n\r\n}\r\n\n\n//# sourceURL=webpack://frontend-pro/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;