/* eslint-disable no-undef */
const languages = (english, portuguese) => {
  const selectedLanguage = JSON.parse(localStorage.getItem('language'));
  if (selectedLanguage) return english;
  return portuguese;
};

export default languages;
