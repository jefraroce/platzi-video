export const addFavorite = payload => ({
  type: 'ADD_FAVORITE',
  payload,
});

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
});
