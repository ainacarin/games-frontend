
const endpoint = 'http://localhost:3000';

//TODO: #1 implementar api. Mirar en documentación
export const getGames = async () => {
  const response = await fetch(`${endpoint}/games`);
  //TODO: #1.1 implementar control de errores
  return response.json();
}

export const getGameById = async (gameId) => {
  const response = await fetch(`${endpoint}/games/${gameId}`);
  //TODO: #1.1 implementar control de errores
  return response.json();
}

export const getCommentsOfGame = async (gameId) => {
  const response = await fetch(`${endpoint}/games/${gameId}/comments?_expand=user`);
    //TODO: #1.1 implementar control de errores
    return response.json();
}