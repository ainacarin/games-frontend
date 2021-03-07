import { generateCommentSnippet, generateGameSnippet } from './functions.js';
import { getGames, getGameById, getCommentsOfGame } from './api-handler.js';


export async function drawListGames() {
    const games = await getGames();
    // modificación para hacer uso de bootstrap
    // contenedor con una fila para mostrar los juegos y se configura
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'game-list');
    newDiv.setAttribute('class', 'row');
    // se coge el súper contenedor y se inserta el contenedor anterior
    document.getElementById('games').appendChild(newDiv);

    for(let i = 0; i < games.length; i++) {
      console.log('game', games[i])
      const snippetContainer = document.createElement('div');
      snippetContainer.setAttribute('class', 'col-6 col-sm-3');
      document.getElementById('game-list')
      .appendChild(snippetContainer).innerHTML = generateGameSnippet(games[i]); 
    }
}


(async () => {
  await drawListGames();
})();
