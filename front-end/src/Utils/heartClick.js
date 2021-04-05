/* eslint-disable no-undef */
const heartClick = (alt, reload, setReload) => {
  setReload(reload + 1);
  const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
  if (favoriteVillas.includes(alt)) {
    favoriteVillas.splice(favoriteVillas.indexOf(alt), 1);
    return localStorage.setItem('favoriteVillas', JSON.stringify(favoriteVillas));
  }
  favoriteVillas.push(alt);
  return localStorage.setItem('favoriteVillas', JSON.stringify(favoriteVillas));
};

export default heartClick;
