function displayStaffedTournaments(dateOrder, year, role) {
    const container = document.querySelector('.staff-history');
    container.innerHTML = '';
    var tournaments = [tc, est, pdn, ot, gsht, npc4, wcot, usot, jss, kb2st, tc2];

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
            case '2021':
                var tournaments = tournaments.filter(tournament => tournament.date.includes('2021'));
                selectItem(currentSortSubMenu, 7);
                break;
        }
    }
    if (role) {
        var currentSortSubMenu = document.querySelectorAll('.sort-submenu')[2];
        deselectSubMenu(currentSortSubMenu);

        switch (role) {
            case 'All':
                selectItem(currentSortSubMenu, 3);
                break;
            case 'Referee':
                var tournaments = tournaments.filter(tournament => tournament.roles.includes(0));
                selectItem(currentSortSubMenu, 5);
                break;
            case 'Mappooler':
                var tournaments = tournaments.filter(tournament => tournament.roles.includes(1));
                selectItem(currentSortSubMenu, 7);
                break;
            case 'Commentator':
                var tournaments = tournaments.filter(tournament => tournament.roles.includes(2));
                selectItem(currentSortSubMenu, 9);
                break;
            case 'Streamer':
                var tournaments = tournaments.filter(tournament => tournament.roles.includes(3));
                selectItem(currentSortSubMenu, 11);
                break;
            case 'Spreadsheeter':
                var tournaments = tournaments.filter(tournament => tournament.roles.includes(4));
                selectItem(currentSortSubMenu, 13);
                break;
            case 'GFX Designer':
                var tournaments = tournaments.filter(tournament => tournament.roles.includes(5));
                selectItem(currentSortSubMenu, 15);
                break;
        }
    }

    tournaments.forEach(tournament => {
        // Creates the container for the tournament's data
        const tournamentContainer = document.createElement('div');
        tournamentContainer.classList.add('tournament-container', tournament.acronym.toLowerCase());

        // Displays tournament info
        const info = document.createElement('div');
        info.classList.add('tournament', tournament.acronym.toLowerCase());
        info.style.backgroundImage = `url('assets/banners/staff/display/${tournament.acronym.toLowerCase()}.png')`;

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

        info.appendChild(tournamentName);

        // Date
        const date = document.createElement('div');
        date.classList.add('date');
        var content = document.createTextNode(tournament.date);
        date.append(content);

        info.appendChild(date);

        // Rank range
        const rankRange = document.createElement('div');
        rankRange.classList.add('rank-range');
        var content = document.createTextNode(tournament.rankRange);
        rankRange.append(content);

        info.appendChild(rankRange);

        // Format 1
        const format1 = document.createElement('div');
        format1.classList.add('format-1');
        var content = document.createTextNode(tournament.format1);
        format1.append(content);

        info.appendChild(format1);

        // Format 2
        const format2 = document.createElement('div');
        format2.classList.add('format-2');
        var content = document.createTextNode(tournament.format2);
        format2.append(content)

        info.appendChild(format2);

        // Appends the info to the tournament container
        tournamentContainer.appendChild(info);

        // Displays roles staffed for
        const roles = document.createElement('div');
        roles.classList.add('roles', `roles-${tournament.roles.length}r`);

        for(i = 0; i < tournament.roles.length; i++) {
            var role = document.createElement('div');
            
            switch (tournament.roles[i]) {
                case 0:
                    var roleClass = 'ref';
                    var content = document.createTextNode('Referee');
                    break;
                case 1:
                    var roleClass = 'pooler';
                    var content = document.createTextNode('Mappooler');
                    break;
                case 2:
                    var roleClass = 'streamer';
                    var content = document.createTextNode('Streamer');
                    break;
                case 3:
                    var roleClass = 'comm';
                    var content = document.createTextNode('Commentator');
                    break;
                case 4:
                    var roleClass = 'sheeter';
                    var content = document.createTextNode('Spreadsheeter');
                    break;
                case 5:
                    var roleClass = 'gfx';
                    var content = document.createTextNode('GFX Designer');
                    break;
            }

            role.classList.add(roleClass);
            role.append(content);

            roles.appendChild(role);
        }

        // Appends the roles to the tournament container
        tournamentContainer.append(roles);

        // Appends the container to the document
        container.appendChild(tournamentContainer);
        container.appendChild(document.createElement('br'));
    });

    countStaffedRoles();
    return;
}

function countStaffedRoles() {
    const staffRoles = ['ref', 'pooler', 'comm', 'streamer', 'sheeter', 'gfx'];
    
    staffRoles.forEach(role => {
        const timesStaffed = document.querySelectorAll(`.${role}`).length;
        document.querySelector(`#${role}`).innerHTML = timesStaffed;
        return;
    })
    return;
}

displayStaffedTournaments('Descending', 'All', 'All');

function reSortTournaments(dateOrder, year, role) {
    if (!dateOrder) {
      var dateOrder = document.querySelectorAll('.sort-item-active')[0].childNodes[1].innerHTML;
    }
    if (!year) {
      var year = document.querySelectorAll('.sort-item-active')[1].childNodes[1].innerHTML;
    }
    if (!role) {
      var role = document.querySelectorAll('.sort-item-active')[2].childNodes[1].innerHTML;
    }
    displayStaffedTournaments(dateOrder, year, role);
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