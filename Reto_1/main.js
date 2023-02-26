
var i = 0;
var txt = 'A computer science portal for geeks';
var speed = 155;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("description").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
};

function loadInfo() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("post").innerHTML +=
            this.responseText;
        btn = document.getElementById("btnAdd");
        btn.remove();
    }
    xhttp.open("GET", "data.html");
    xhttp.send();
}