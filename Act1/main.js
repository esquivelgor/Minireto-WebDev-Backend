// JavaScript
function changeColor(newColor) {
    var elem = document.getElementById('the-title');
    elem.style.color = newColor;
}

function changeTheme() {
    var elem = document.getElementById('text');
    var theme = document.getElementById('body');
    elem.style.color = 'white';
    theme.style.backgroundColor = 'black';
}