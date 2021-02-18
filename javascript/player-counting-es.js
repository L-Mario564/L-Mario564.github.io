//count amount of matches won
document.addEventListener('DOMContentLoaded', function countWins() {
    var parent = document.getElementById("matches");
    var nodesSameClass = parent.getElementsByClassName("won");
    document.getElementById("match-win-count").innerHTML = "Total de partidos ganados: " + nodesSameClass.length;
    }, true);
//count amount of matches lost
document.addEventListener('DOMContentLoaded', function countLosses() {
    var parent = document.getElementById("matches");
    var nodesSameClass = parent.getElementsByClassName("lost");
    document.getElementById("match-loss-count").innerHTML = "Total de partidos perdidos: " + nodesSameClass.length;
    }, true);
//count amount of total matches
document.addEventListener('DOMContentLoaded', function totalMatchCount() {
    var parent = document.getElementById("matches");
    var nodesSameClass = parent.getElementsByClassName("item-match");
    document.getElementById("match-count").innerHTML = "Total de partidos: " + nodesSameClass.length;
}, true);
//count amount of total tournaments played in
document.addEventListener('DOMContentLoaded', function tournamentCount() {
    var parent = document.getElementById("player");
    var nodesSameClass = parent.getElementsByClassName("g-item-tourney");
    document.getElementById("tournament-count").innerHTML = "Cantidad de torneos jugados: " + nodesSameClass.length;
}, true);
//count amount of total tournaments finished in 1st place
document.addEventListener('DOMContentLoaded', function tournamentCount() {
    var parent = document.getElementById("player");
    var nodesSameClass = parent.getElementsByClassName("r-item-first");
    document.getElementById("first-place-count").innerHTML = "Torneos donde he quedado primer puesto: " + nodesSameClass.length;
}, true);
//count amount of total tournaments finished in 2nd place
document.addEventListener('DOMContentLoaded', function tournamentCount() {
    var parent = document.getElementById("player");
    var nodesSameClass = parent.getElementsByClassName("r-item-second");
    document.getElementById("second-place-count").innerHTML = "Torneos donde he quedado segundo puesto: " + nodesSameClass.length;
}, true);
//count amount of total tournaments finished in 3rd place
document.addEventListener('DOMContentLoaded', function tournamentCount() {
    var parent = document.getElementById("player");
    var nodesSameClass = parent.getElementsByClassName("r-item-third");
    document.getElementById("third-place-count").innerHTML = "Torneos donde he quedado tercer puesto: " + nodesSameClass.length;
}, true);