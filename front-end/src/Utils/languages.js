/* eslint-disable no-undef */
const languages = (english, portuguese, spanish) => {
  const selectedLanguage = JSON.parse(localStorage.getItem('language'));
  if (selectedLanguage === 'br') return portuguese;
  if (selectedLanguage === 'sp') return spanish;
  return english;
};

export default languages;
