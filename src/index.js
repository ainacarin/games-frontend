const endpoint = 'http://localhost:3000';

//TODO: #1 implementar api. Mirar en documentación
const getGames = async () => {
  const response = await fetch(`${endpoint}/games`);
  //TODO: #1.1 implementar control de errores
  return response.json();
}

const getGameById = async (gameId) => {
  const response = await fetch(`${endpoint}/games/${gameId}`);
  //TODO: #1.1 implementar control de errores
  return response.json();
}

const getCommentsOfGame = async (gameId) => {
  const response = await fetch(`${endpoint}/games/${gameId}/comments?_expand=user`);
    //TODO: #1.1 implementar control de errores
    return response.json();
}


async function drawListGames() {
    let games = await getGames();
    document.getElementById('games')
        .appendChild(document.createElement('ul'))
        .setAttribute('id', 'games-list');
    var i = 0;
    for (i; i < games.length; i++) {
        document.getElementById('games-list')
            .appendChild(document.createElement('li')).innerHTML = generateGameSnippet(games[i]);
    }
}

async function drawGame(gameId) {
  let game = await getGameById(gameId);
  document.getElementById('game-name-title').innerHTML = game.name;
  // TODO: #4 breadcrumb???? Let's use jQuery!!
  document.getElementById('game-image').src = game.image;
  document.getElementById('game-image').alt = game.name;

  document.getElementById('metacritic-score').innerHTML = game.scores.metacritic;
  document.getElementById('user-score').innerHTML = game.scores.userScore;

  document.getElementById('summary').innerHTML = game.summary;

  document.getElementById('platform').innerHTML = game.platform;
  document.getElementById('release-date').innerHTML = game.relaseDate;

}

// TODO: #2 Pedir ayuda para generateCommentSnippet
//email al correo de desarrollo y nos dan el código
async function drawComments(gameId) {
  console.log(gameId)
  let comments = await getCommentsOfGame(gameId);
  document.getElementById('comments')
      .appendChild(document.createElement('ul'))
      .setAttribute('id', 'comments-list');
  var i = 0;
  for (i; i < comments.length; i++) {
      document.getElementById('comments-list')
          .appendChild(document.createElement('li')).innerHTML = generateCommentSnippet(comments[i]);
  }
}

function generateCommentSnippet(comment) {
  return `<div class="row">
  <div class="col col-2">
    <div class="image-container text-right">
      <img class="avatar rounded" src="${comment.user.image}" alt="${comment.user.name}" />
    </div>
  </div>
  <div class="col col-10">
    <div class="user-name-container">
      <h4 class="text-muted">${comment.user.name}</h4>
    </div>
    <div class="comment-body-container">
      ${comment.body}
    </div>
    <div class="date-container">
      Comment date: <b>${comment.commentDate}</b>
    </div>
  </div>
</div>`;

}

// TODO: #3 Dar más información que una lista (imagen, nombre, primeros 100 caracteres de summary)
function generateGameSnippet(game) {
  // return `<a href="/detail.html?id=${game.id}">${game.name}</a>`;
  //en lugar de generar una lista, se crea un contenedor con el link para darle estilo luego
  return `<div class="game-snippet">
  <a href="/detail.html?id=${game.id}">
    <div class="game-snippet-container">
      <img class="img-thumbnail" id="game-${game.id}" src="${game.image}" alt="Cover of game ${game.name}" />
    </div>
    <h3 class="game-name">${game.name}</h3>
  </a>
</div>`;

}
