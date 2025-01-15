export const saveFlashcardsInLocalStorage = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

export const getFlashcardsFromLocalStorage = (key) =>
    JSON.parse(localStorage.getItem(key)) || [];