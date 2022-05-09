export function setLanguages(lng) {
    window.localStorage.setItem('language', lng)
}
export function getLanguages() {
    const lng = window.localStorage.getItem('language')
    if (lng) return lng
    setLanguages('eng')
    return 'eng'
}
