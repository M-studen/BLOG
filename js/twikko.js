var theme = document.querySelector('[data-theme]').getAttribute('data-theme');
var div = document.getElementsByClassName("tk-content")
console.log(theme);
if (theme=="dark"){
    console.log(div);
    div.style.background = 'red';
    console.log("ff");
}