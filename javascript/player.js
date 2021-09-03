function diplayPlayedTournaments(dateOrder, year, placement, type) {
  const container = document.querySelector('.player-history');
  container.innerHTML = '';
  var tournaments = [olrt, npc2, olrt2, otvt, stk8, bqt2, bnc, ost, awt, lf6dc, osdl, jrc2, stk9, est, hkc, mit];

  if (dateOrder) {
    var currentSortSubMenu = document.querySelectorAll('.sort-submenu')[0];
    deselectSubMenu(currentSortSubMenu);

    switch (dateOrder) {
      case 'Descending':
        var tournaments = tournaments.reverse();
        selectItem(currentSortSubMenu, 3);
        break;
      case 'Ascending':
        selectItem(currentSortSubMenu, 5);
        break;
    }
  }
  if (year) {
    var currentSortSubMenu = document.querySelectorAll('.sort-submenu')[1];
    deselectSubMenu(currentSortSubMenu);

    switch (year) {
      case 'All':
        selectItem(currentSortSubMenu, 3);
        break;
      case '2020':
        var tournaments = tournaments.filter(tournament => tournament.date.includes('2020'));
        selectItem(currentSortSubMenu, 5);
        break;
      case '2021':
        var tournaments = tournaments.filter(tournament => tournament.date.includes('2021'));
        selectItem(currentSortSubMenu, 7);
        break;
    }
  }
  if (placement) {
    var currentSortSubMenu = document.querySelectorAll('.sort-submenu')[2];
    deselectSubMenu(currentSortSubMenu);

    switch (placement) {
      case 'All':
        selectItem(currentSortSubMenu, 3);
        break;
      case 'Podium Placements':
        var tournaments = tournaments.filter(tournament => tournament.placement.includes('1st') || tournament.placement.includes('2nd') || tournament.placement.includes('3rd'))
        selectItem(currentSortSubMenu, 5);
        break;
    }
  }
  if (type) {
    var currentSortSubMenu = document.querySelectorAll('.sort-submenu')[3];
    deselectSubMenu(currentSortSubMenu);

    switch (type) {
      case 'All':
        selectItem(currentSortSubMenu, 3);
        break;
      case 'Solo':
        var tournaments = tournaments.filter(tournament => !tournament.teamName);
        selectItem(currentSortSubMenu, 5);
        break;
      case 'Team':
        var tournaments = tournaments.filter(tournament => tournament.teamName);
        selectItem(currentSortSubMenu, 7);
        break;
    }
  }

  tournaments.forEach(tournament => {
    // Creates the container for the tournament's data
    const tournamentContainer = document.createElement('div');
    tournamentContainer.classList.add('tournament-container', tournament.acronym.toLowerCase());

    // Displays general tournament information
    const generalInfo = document.createElement('div');
    generalInfo.classList.add('tournament');
    generalInfo.style.backgroundImage = `url('assets/banners/player/display/${tournament.acronym.toLowerCase()}.png')`;

    // Tournament name
    const tournamentName = document.createElement('div');
    tournamentName.classList.add('tournament-name');

    if (tournament.forumPostId !== null && !tournament.forumPostId.includes('http')) {
      const forumPost = document.createElement('a');
      forumPost.setAttribute('href', `https://osu.ppy.sh/community/forums/topics/${tournament.forumPostId}`);
      forumPost.setAttribute('target', '_blank');
      var content = document.createTextNode(tournament.fullName);
      forumPost.append(content);

      tournamentName.appendChild(forumPost);
    } else if (tournament.forumPostId !== null && tournament.forumPostId.includes('http')) {
      const forumPost = document.createElement('a');
      forumPost.setAttribute('href', tournament.forumPostId);
      forumPost.setAttribute('target', '_blank');
      var content = document.createTextNode(tournament.fullName);
      forumPost.append(content);

      tournamentName.appendChild(forumPost);
    } else {
      var content = document.createTextNode(tournament.fullName);
      tournamentName.append(content);
    }

    generalInfo.appendChild(tournamentName);

    // Placement
    const placement = document.createElement('div');
    placement.classList.add('placement');

    if (tournament.placement == '1st Place') placement.classList.add('placement-1st');
    else if (tournament.placement == '2nd Place') placement.classList.add('placement-2nd');
    else if (tournament.placement == '3rd Place') placement.classList.add('placement-3rd');

    if (tournament.challongeId !== null && !tournament.challongeId.includes('http')) {
      const challongeBracket = document.createElement('a');
      challongeBracket.setAttribute('href', `https://challonge.com/${tournament.challongeId}`);
      challongeBracket.setAttribute('target', '_blank');
      var content = document.createTextNode(tournament.placement);

      challongeBracket.append(content);
      placement.appendChild(challongeBracket);
    } else if (tournament.challongeId !== null && tournament.challongeId.includes('http')) {
      const challongeBracket = document.createElement('a');
      challongeBracket.setAttribute('href', tournament.challongeId);
      challongeBracket.setAttribute('target', '_blank');
      var content = document.createTextNode(tournament.placement);

      challongeBracket.append(content);
      placement.appendChild(challongeBracket);
    } else {
      var content = document.createTextNode(tournament.placement);

      placement.append(content);
    }

    generalInfo.appendChild(placement);
    
    // Adds a blank space
    var blank = document.createElement('div');
    blank.classList.add('blank')
    generalInfo.appendChild(blank);

    // Date
    const date = document.createElement('div');
    date.classList.add('date');
    var content = document.createTextNode(tournament.date);
    date.append(content);
    
    generalInfo.appendChild(date);

    // Rank range
    const rankRange = document.createElement('div');
    rankRange.classList.add('rank-range');
    var content = document.createTextNode(tournament.rankRange);
    rankRange.append(content);

    generalInfo.appendChild(rankRange);

    // Format 1
    const format1 = document.createElement('div');
    format1.classList.add('format-1');
    var content = document.createTextNode(tournament.format1);
    format1.append(content);

    generalInfo.append(format1);

    // Format 2
    const format2 = document.createElement('div');
    format2.classList.add('format-2');
    var content = document.createTextNode(tournament.format2);
    format2.append(content);

    generalInfo.append(format2);

    // Participant count
    const participantCount = document.createElement('div');
    participantCount.classList.add('participant-count');
    var content = (tournament.isTeamtournament) ? `${tournament.participantCount} Teams` : `${tournament.participantCount} Players`;
    participantCount.append(content);

    generalInfo.append(participantCount);

    // Seeding
    const seeding = document.createElement('div');
    seeding.classList.add('seeding');
    var content = `Seeded ${tournament.seeding}`;
    seeding.append(content);

    generalInfo.append(seeding);

    // Adds another blank space
    var blank = document.createElement('div');
    blank.classList.add('blank')
    generalInfo.appendChild(blank);

    // View more button
    const viewMore = document.createElement('div');
    viewMore.classList.add('view-more');

    const viewMoreBtn = document.createElement('button');
    viewMoreBtn.setAttribute('type', 'button');
    viewMoreBtn.setAttribute('id', `${tournament.acronym.toLowerCase()}-b`);
    viewMoreBtn.setAttribute('onclick', `unhideMatchHistory("${tournament.acronym.toLowerCase()}");`);
    var content = document.createTextNode('+');
    viewMoreBtn.append(content);

    viewMore.append(viewMoreBtn);
    generalInfo.append(viewMore);

    // Appends container to the tournament container
    tournamentContainer.appendChild(generalInfo);

    // Displays team related information
    if (tournament.isTeamtournament) {
      const extension = document.createElement('div');
      extension.classList.add(`extension-${tournament.teammates.length}t`)
      
      // Team name
      const teamName = document.createElement('div');
      teamName.classList.add('team-name');
      var content = document.createTextNode(tournament.teamName);
      teamName.append(content);

      extension.appendChild(teamName);

      // Teammates
      for (i = 0; i < tournament.teammates.length; i++) {
        var teammate = document.createElement('div');
        teammate.classList.add('teammate');

        var flag = document.createElement('img');
        flag.classList.add('country-flag');
        flag.setAttribute('src', `https://osu.ppy.sh/images/flags/${tournament.teammates[i].countryCode}.png`);

        var username = document.createElement('a');
        username.setAttribute('href', `https://osu.ppy.sh/users/${tournament.teammates[i].userId}`);
        username.setAttribute('target', '_blank');
        var content = document.createTextNode(tournament.teammates[i].username);
        username.append(content);

        teammate.appendChild(flag);
        teammate.appendChild(document.createElement('br'));
        teammate.appendChild(username);

        extension.appendChild(teammate);
      }

      // Appends container to the tournament container
      tournamentContainer.appendChild(extension)
    }

    // Displays match history
    const matchHistory = document.createElement('div');
    matchHistory.classList.add('match-history');
    matchHistory.id = `${tournament.acronym.toLowerCase()}-matches`;

    // Header
    const header = document.createElement('p');
    var content = 'Match History';
    header.append(content);

    matchHistory.appendChild(header);

    // Match history table
    const matchHistoryTable = document.createElement('table');
    matchHistoryTable.classList.add('history');

    // Column widths
    for (i = 1; i < 4; i++) {
      var columnWidth = document.createElement('col');
      columnWidth.classList.add(`col-${i}`);

      matchHistoryTable.appendChild(columnWidth);
    }

    // Header row
    const headerRow = document.createElement('tr');

    const tableHeader1 = document.createElement('th');
    var content = 'Stage';
    tableHeader1.append(content);
    headerRow.appendChild(tableHeader1);

    const tableHeader2 = document.createElement('th');
    var content = (tournament.isTeamtournament) ? 'Team' : 'Player';
    tableHeader2.append(content);
    headerRow.appendChild(tableHeader2);
    
    const tableHeader3 = document.createElement('th');
    var content = 'Score';
    tableHeader3.append(content);
    headerRow.appendChild(tableHeader3);
    
    const tableHeader4 = document.createElement('th');
    var content = 'Outcome';
    tableHeader4.append(content);
    headerRow.appendChild(tableHeader4);

    matchHistoryTable.appendChild(headerRow);

    // Match information
    for (i = 0 ; i < tournament.matches.length; i++) {
      var row = document.createElement('tr');

      // Stage name
      var stageName = document.createElement('td');
      var content = tournament.matches[i].stageName;
      stageName.append(content);

      row.appendChild(stageName);

      // Team (if team tournament) / User (if solo tournament)
      if (tournament.isTeamtournament) {
        var opponentTeam = document.createElement('td');
        
        // Opponent team name
        var opponentTeamName = document.createElement('b');
        var content = tournament.matches[i].opponentName;
        opponentTeamName.append(content);

        opponentTeam.appendChild(opponentTeamName);
        opponentTeam.appendChild(document.createElement('br'));

        // Opponent teammates
        for (j = 0; j < tournament.matches[i].opponentTeammates.length; j++) {
          var username = document.createElement('a');
          username.setAttribute('href', `https://osu.ppy.sh/users/${tournament.matches[i].opponentTeammates[j].userId}`);
          username.setAttribute('target', '_blank');
          var content = tournament.matches[i].opponentTeammates[j].username;
          username.append(content);

          if (j < tournament.matches[i].opponentTeammates.length - 1) {
            opponentTeam.appendChild(username);
            var separator = document.createTextNode(' | ');
            opponentTeam.append(separator)
          } else opponentTeam.appendChild(username);
        }

        row.appendChild(opponentTeam);
      } else {
        var opponent = document.createElement('td');

        // Opponent  name
        var opponentName = document.createElement('a');
        opponentName.setAttribute('href', `https://osu.ppy.sh/users/${tournament.matches[i].opponentUserId}`);
        opponentName.setAttribute('target', '_blank');
        var content = tournament.matches[i].opponentName;
        opponentName.append(content);

        opponent.appendChild(opponentName);
        
        row.appendChild(opponent);
      }

      // Score
      var score = document.createElement('td');
      var content = `${tournament.matches[i].winnerScore} - ${tournament.matches[i].loserScore}`;
      score.append(content);

      row.appendChild(score);

      // Outcome
      var outcome = document.createElement('td');
      switch (tournament.matches[i].outcome) {
        case 0:
          var content = 'Victory';
          outcome.classList.add('match-w');
          break;  
        case 1:
          var content = 'Defeat';
          outcome.classList.add('match-l');
          break;
        case 2:
          var content = '-';
          break;
      }
      outcome.append(content);

      row.appendChild(outcome);

      // Appends the row to the table
      matchHistoryTable.appendChild(row)
    }

    // Appends the table to the match history container
    matchHistory.appendChild(matchHistoryTable);

    // Appends the match history to the tournament container
    tournamentContainer.appendChild(matchHistory);

    // Appends the container to the document
    container.appendChild(tournamentContainer);
    container.appendChild(document.createElement('br'));
    return;
  });

  hideMatchHistory();
  displayPlacements();
  displayMatchData();
  return;
}

function deselectSubMenu(subMenu) {
  subMenu.childNodes.forEach(option => {
    if (option.nodeName == '#text' || !option.id) return;
    option.classList.remove('sort-item-active');
  });
  return;
}
function selectItem(subMenu, index) {
  var currentSortOption = subMenu.childNodes[index];
  currentSortOption.classList.add('sort-item-active');
  return;
}

function displayMatchData() {
  const matchesWon = document.querySelectorAll('.match-w').length;
  const matchesLost = document.querySelectorAll('.match-l').length;
  const totalMatches = matchesWon + matchesLost;
  const winrate = ((matchesWon / totalMatches) * 100).toFixed(2);

  document.querySelector('#won').innerHTML = matchesWon.toString();
  document.querySelector('#lost').innerHTML = matchesLost.toString();
  document.querySelector('#matches').innerHTML = totalMatches.toString();

  document.querySelector('#winrate').innerHTML =  `${winrate}%`;
  return;
}

function displayPlacements() {
  const firstPlacements = document.querySelectorAll('.placement-1st').length;
  const secondPlacements = document.querySelectorAll('.placement-2nd').length;
  const thirdPlacements = document.querySelectorAll('.placement-3rd').length;

  document.querySelector('#first').innerHTML = firstPlacements.toString();
  document.querySelector('#second').innerHTML = secondPlacements.toString();
  document.querySelector('#third').innerHTML = thirdPlacements.toString();
  return;
}

function hideMatchHistory() {
  document.querySelectorAll('.match-history').forEach(element => element.style.display = 'none');
  return;
}

diplayPlayedTournaments('Descending', 'All', 'All');

function unhideMatchHistory(tourney) {
  $(`#${tourney}-matches`).slideToggle(250);
  return;
}

function reSortTournaments(dateOrder, year, placement, type) {
  if (!dateOrder) {
    var dateOrder = document.querySelectorAll('.sort-item-active')[0].childNodes[1].innerHTML;
  }
  if (!year) {
    var year = document.querySelectorAll('.sort-item-active')[1].childNodes[1].innerHTML;
  }
  if (!placement) {
    var placement = document.querySelectorAll('.sort-item-active')[2].childNodes[1].innerHTML;
  }
  if (!type) {
    var type = document.querySelectorAll('.sort-item-active')[3].childNodes[1].innerHTML;
  }
  diplayPlayedTournaments(dateOrder, year, placement, type);
  return;
}