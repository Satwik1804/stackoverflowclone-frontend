export const setCurrentLanguage = (lang) => {
  localStorage.setItem("language", lang);
  return {
    type: "FETCH_CURRENT_LANG",
    payload: lang,
  };
};