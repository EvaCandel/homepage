// Sidebar menu
var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu() {
    if (menu_visible == false) { // If the menu is hidden
        menu.style.display = "block";
        menu_visible = true;
    } else {
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Hide the menu once a link is selected
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
    links[x].onclick = function () {
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Create the small bars for a specific skill bar identified by its ID
function crearBarra(id_barra) {
    for (i = 0; i <= 16; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Select all general bars to manipulate them later
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

// Store the number of bars that will be painted for each skill bar
// Use an array where each position corresponds to one skill
// Start at -1 because none are painted initially
let contadores = [-1, -1, -1, -1, -1, -1];

// This flag is used to check if the animation has already run
let entro = false;

// Function that triggers the skill bar animations
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && entro == false) {
        entro = true;
        const intervalHtml = setInterval(function () {
            pintarBarra(html, 16, 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function () {
            pintarBarra(javascript, 11, 1, intervalJavascript);
        }, 100);
        const intervalWordpress = setInterval(function () {
            pintarBarra(wordpress, 11, 2, intervalWordpress);
        }, 100);
        const intervalPhotoshop = setInterval(function () {
            pintarBarra(photoshop, 15, 3, intervalPhotoshop);
        }, 100);
        const intervalPhp = setInterval(function () {
            pintarBarra(php, 16, 4, intervalPhp);
        }, 100);
        const intervalIlustrator = setInterval(function () {
            pintarBarra(ilustrator, 11, 5, intervalIlustrator);
        }, 100);
    }
}

// Fill a specific skill bar with the indicated number of segments
function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(interval);
    }
}

// Detect mouse scroll to trigger the skill bar animation
window.onscroll = function () {
    efectoHabilidades();
}
