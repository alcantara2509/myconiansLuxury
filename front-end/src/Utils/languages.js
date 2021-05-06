/* eslint-disable no-undef */
const languages = (english, portuguese) => {
  const selectedLanguage = JSON.parse(localStorage.getItem('language'));
  if (selectedLanguage === 'br') return portuguese;
  return english;
};

export default languages;
