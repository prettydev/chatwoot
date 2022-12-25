const languages = [
  {
    name: 'English',
    id: 'en',
  },
];

export const getLanguageName = (languageCode = '') => {
  const languageObj =
    languages.find(language => language.id === languageCode) || {};
  return languageObj.name || '';
};

export default languages;
