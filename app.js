// defer attribute makes the file to be executed after parsing of document.
// but DOM may still not be loaded completely
// So checking for DOMContentLoaded event before DOM manipulation
// It is still before rendering
// There is 'load' event which triggers after whole page has loaded
window.addEventListener('DOMContentLoaded', () => {
    nav = document.querySelector('nav')
    console.log(nav)
})