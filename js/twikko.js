var theme = document.querySelector('[data-theme]').getAttribute('data-theme');
var div = document.getElementsByClassName("tk-content")
if (theme === 'dark') {
    div.classList.add('dark');
} else if (theme === 'light') {
    div.classList.add('light');}