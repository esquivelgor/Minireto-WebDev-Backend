
var i = 0;
var txt = 'A computer science portal for geeks';
var speed = 155;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
};

