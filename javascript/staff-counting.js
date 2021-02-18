// Counts the amount of times as a referee
document.addEventListener('DOMContentLoaded', function countTimesRef() {
    var parent = document.getElementById("details");
    var nodesSameClass = parent.getElementsByClassName("ref");
    document.getElementById("sub-ref").innerHTML = nodesSameClass.length;
    }, true);
// Counts the amount of times as a mappooler
document.addEventListener('DOMContentLoaded', function countTimesPooler() {
    var parent = document.getElementById("details");
    var nodesSameClass = parent.getElementsByClassName("pooler");
    document.getElementById("sub-pooler").innerHTML = nodesSameClass.length;
    }, true);
// Counts the amount of times as a commentator
document.addEventListener('DOMContentLoaded', function countTimesCommentator() {
    var parent = document.getElementById("details");
    var nodesSameClass = parent.getElementsByClassName("commentator");
    document.getElementById("sub-commentator").innerHTML = nodesSameClass.length;
    }, true);
// Counts the amount of times as a streamer
document.addEventListener('DOMContentLoaded', function countTimesStreamer() {
    var parent = document.getElementById("details");
    var nodesSameClass = parent.getElementsByClassName("streamer");
    document.getElementById("sub-streamer").innerHTML = nodesSameClass.length;
    }, true);
// Counts the amount of times as a spreadsheeter
document.addEventListener('DOMContentLoaded', function countTimesSheeter() {
    var parent = document.getElementById("details");
    var nodesSameClass = parent.getElementsByClassName("sheeter");
    document.getElementById("sub-sheeter").innerHTML = nodesSameClass.length;
    }, true);
// Counts the amount of times as a gfx designer
document.addEventListener('DOMContentLoaded', function countTimesGfx() {
    var parent = document.getElementById("details");
    var nodesSameClass = parent.getElementsByClassName("gfx");
    document.getElementById("sub-gfx").innerHTML = nodesSameClass.length;
    }, true);
// Counts the amount tournaments staffed for (eng)
document.addEventListener('DOMContentLoaded', function countTimesStaff() {
    var parent = document.getElementById("details");
    var nodesSameClass = parent.getElementsByClassName("s-row");
    document.getElementById("staff-count").innerHTML = "Total tournaments staffed for: " + nodesSameClass.length;
    }, true);
// Counts the amount tournaments staffed for (esp)
document.addEventListener('DOMContentLoaded', function countTimesStaff() {
    var parent = document.getElementById("details");
    var nodesSameClass = parent.getElementsByClassName("s-row");
    document.getElementById("staff-count-es").innerHTML = "Total de torneos donde he sido staff: " + nodesSameClass.length;
    }, true);