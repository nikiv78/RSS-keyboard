export function setLanguages(lng) {
  window.localStorage.setItem('language', lng);
}
export function getLanguages() {
  const lng = window.localStorage.getItem('language');
  if (lng) return lng;
  setLanguages('eng');
  return 'eng';
}

export function setCase(charCase) {
  window.localStorage.setItem('case', charCase);
}
export function getCase() {
  const charCase = window.localStorage.getItem('case');
  if (charCase) return charCase;
  setCase('small');
  return 'small';
}
