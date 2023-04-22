/* eslint-disable no-undef */
const setLocalStorage = () => {
  const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
  if (!favoriteVillas) localStorage.setItem('favoriteVillas', JSON.stringify([]));
};

export default setLocalStorage;
