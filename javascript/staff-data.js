class staffedTournament {
    constructor(acronym, fullName, forumPostId, date, rankRange, format1, format2, roles) {
        this.acronym = acronym;
        this.fullName = fullName;
        this.forumPostId = forumPostId;
        this.date = date;
        this.rankRange = rankRange;
        this.format1 = format1;
        this.format2 = format2;
        this.roles = roles;
    }
}

const tc = new staffedTournament(
    'TC', 'Tomori Cup', '1222027', 'Jan 10, 2021', '100k-250k', '2v2', 'Double Elimination', [0]
);

const est = new staffedTournament(
    'EST', 'Entropy\'s Spring Tournament', '1238765', 'Feb 01, 2021', '200k-400k', '2v2', 'Double Elimination', [0]
);

const pdn = new staffedTournament(
    'PDN', 'Pas De Nom', '1239289', 'Feb 01, 2021', '200k-∞', '2v2', 'Double Elimination', [4, 5]
);

const ot = new staffedTournament(
    'OT', 'oldsu! Tournament', null, 'Feb 22, 2021', 'Open Rank', '2v2', 'Single Elimination', [4]
);

const gsht = new staffedTournament(
    'GSHT', 'Gary\'s Spring Hidden Tournament', '1266715', 'Mar 08, 2021', '10k-50k', '1v1', 'Double Elimination', [0]
);

const npc4 = new staffedTournament(
    'NPC4', 'Non-Professional Cup 4', '1278163', 'Mar 21, 2021', '100k-250k', 'Free-For-All', 'Single Elimination', [0]
);

const wcot = new staffedTournament(
    'WCOT', 'WhiteCat Official Osu Tournament', '1298947', 'Apr 15, 2021', '2v2', 'Double Elimination', '4 Tiers', [0]
);

const usot = new staffedTournament(
    'USOT', 'Unicornlovers Scuffed Osu Tournament', '1312008', 'May 01, 2021', '75k-150k', '2v2', 'Double Elimination', [0]
);

const jss = new staffedTournament(
    'JSS', 'Juni\'s Summer Singles', '1329453', 'May 31, 2021', '125k-400k', '1v1', 'Double Elimination', [0]
);

const kb2st = new staffedTournament(
    'KB2ST', 'Koro\'s Back 2 Skool Tournament', '1337953', 'May 31, 2021', '150k-450k', '1v1', 'Double Elimination', [0, 4]
);

const tc2 = new staffedTournament(
    'TC2', 'Tomori Cup 2', '1340754', 'Jun 4, 2021', '100k-250k', '2v2', 'Double Elimination', [0]
);