$(function() {
    // Counts times staffed as a role
    var ref = $('.ref').length;
    var pooler = $('.pooler').length;
    var comm = $('.comm').length;
    var streamer = $('.streamer').length;
    var sheeter = $('.sheeter').length;
    var gfx = $('.gfx').length;
    // Displays the data
    $('#ref').text(ref);
    $('#pooler').text(pooler);
    $('#comm').text(comm);
    $('#streamer').text(streamer);
    $('#sheeter').text(sheeter);
    $('#gfx').text(gfx);
});