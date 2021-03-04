$(function() {
  // Counts match related things
  var won = $('.match-w').length;
  var lost = $('.match-l').length;
  var matches = won + lost;
  var winrate = ((won / matches) * 100).toFixed(2);
  // Displays the data
  $('#won').text(won);
  $('#lost').text(lost);
  $('#matches').text(matches);
  $('#winrate').text(winrate).append('%');
  
  // Counts tournament placement related things
  var first = $('.placement-1st').length;
  var second = $('.placement-2nd').length;
  var third = $('.placement-3rd').length;
  // Displays the data
  $('#1st').text(first);
  $('#2nd').text(second);
  $('#3rd').text(third);

  // Hides all "Match history" tables
  $('.match-history').hide();
  // Toggles the "Match history" table for each tournament
  $('#olrt-b').click(function(){$('#olrt').slideToggle(250);});
  $('#npc2-b').click(function(){$('#npc2').slideToggle(250);});
  $('#olrt2-b').click(function(){$('#olrt2').slideToggle(250);});
  $('#otvt-b').click(function(){$('#otvt').slideToggle(250);});
  $('#stk8-b').click(function(){$('#stk8').slideToggle(250);});
  $('#bqt2-b').click(function(){$('#bqt2').slideToggle(250);});
  $('#bnc-b').click(function(){$('#bnc').slideToggle(250);});
  $('#ost-b').click(function(){$('#ost').slideToggle(250);});
  $('#awt-b').click(function(){$('#awt').slideToggle(250);});
  $('#lf6dc-b').click(function(){$('#lf6dc').slideToggle(250);});
});