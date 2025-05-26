/**
 * THEME
 */
localStorage.getItem("theme") ?
    document.documentElement.dataset.theme = localStorage.getItem("theme") :
    document.documentElement.dataset.theme = "dark";