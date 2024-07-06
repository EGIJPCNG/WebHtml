
var vColor = 0;
var colors = ["red", "green", "cyan", "white", "yellow"];

function changeColor() {
    document.getElementById("ChangeColor").style.borderColor = colors[vColor];
    document.getElementById("ChangeColor").style.color = colors[vColor];
    vColor = (vColor + 1) % colors.length;
}

setInterval(changeColor, 2000); // Change color every 1000ms (1 second)
