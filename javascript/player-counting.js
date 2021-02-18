//count amount of matches won
document.addEventListener('DOMContentLoaded', function countWins() {
    var parent = document.getElementById("matches");
    var nodesSameClass = parent.getElementsByClassName("won");
    document.getElementById("match-win-count").innerHTML = "Total matches won: " + nodesSameClass.length;
    }, true);
//count amount of matches lost
document.addEventListener('DOMContentLoaded', function countLosses() {
    var parent = document.getElementById("matches");
    var nodesSameClass = parent.getElementsByClassName("lost");
    document.getElementById("match-loss-count").innerHTML = "Total matches lost: " + nodesSameClass.length;
    }, true);
//count amount of total matches
document.addEventListener('DOMContentLoaded', function totalMatchCount() {
    var parent = document.getElementById("matches");
    var nodesSameClass = parent.getElementsByClassName("item-match");
    document.getElementById("match-count").innerHTML = "Total matches played: " + nodesSameClass.length;
}, true);
//count amount of total tournaments played in
document.addEventListener('DOMContentLoaded', function tournamentCount() {
    var parent = document.getElementById("player");
    var nodesSameClass = parent.getElementsByClassName("g-item-tourney");
    document.getElementById("tournament-count").innerHTML = "Total tournaments played in: " + nodesSameClass.length;
}, true);
//count amount of total tournaments finished in 1st place
document.addEventListener('DOMContentLoaded', function tournamentCount() {
    var parent = document.getElementById("player");
    var nodesSameClass = parent.getElementsByClassName("r-item-first");
    document.getElementById("first-place-count").innerHTML = "1st place finishes: " + nodesSameClass.length;
}, true);
//count amount of total tournaments finished in 2nd place
document.addEventListener('DOMContentLoaded', function tournamentCount() {
    var parent = document.getElementById("player");
    var nodesSameClass = parent.getElementsByClassName("r-item-second");
    document.getElementById("second-place-count").innerHTML = "2nd place finishes: " + nodesSameClass.length;
}, true);
//count amount of total tournaments finished in 3rd place
document.addEventListener('DOMContentLoaded', function tournamentCount() {
    var parent = document.getElementById("player");
    var nodesSameClass = parent.getElementsByClassName("r-item-third");
    document.getElementById("third-place-count").innerHTML = "3rd place finishes: " + nodesSameClass.length;
}, true);