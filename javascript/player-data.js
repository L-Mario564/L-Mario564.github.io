class playedTournament {
    constructor(acronym, fullName, forumPostId, challongeId, isTeamtournament, placement, date, rankRange, format1, format2, participantCount, seeding, teamName, teammates, matches) {
        this.acronym = acronym;
        this.fullName = fullName;
        this.forumPostId = forumPostId;
        this.challongeId = challongeId;
        this.isTeamtournament = isTeamtournament;
        this.placement = placement;
        this.date = date;
        this.rankRange = rankRange;
        this.format1 = format1;
        this.format2 = format2;
        this.participantCount = participantCount;
        this.seeding = seeding;
        this.teamName = teamName;
        this.teammates = teammates;
        this.matches = matches;
    }
}
class Teammate {
    constructor(username, userId, countryCode) {
        this.username = username;
        this.userId = userId;
        this.countryCode = countryCode;
    }
}
class Match {
    constructor(stageName, opponentName, opponentUserId,  opponentTeammates, winnerScore,  loserScore, outcome) {
        this.stageName = stageName;
        this.opponentName = opponentName;
        this.opponentUserId = opponentUserId;
        this.opponentTeammates = opponentTeammates;
        this.winnerScore = winnerScore;
        this.loserScore = loserScore;
        this.outcome = outcome;
    }
}

const olrt = new playedTournament(
    'OLRT', 'osu! Low Rank Tournament', '1026857', 'ftbess33', false, '1st Place', 'Feb 27, 2020', '200k - 400k', '1v1', 'Double Elimination', '32', '1st', null, [], [
        new Match('Round of 32', 'HugFestOOOOO', '12143973', [], 0, 'FF', 0),
        new Match('Round of 16', 'Kocha', '15518219', [], 4, 0, 0),
        new Match('Quarterfinals', 'X_boi_X', '15240084', [], 5, 0, 0),
        new Match('Semifinals', 'Fourfifty', '9653206', [], 6, 3, 0),
        new Match('Finals', 'Necroplex', '13743386', [], 6, 3, 0),
        new Match('Grand Finals', 'Necroplex', '13743386', [], 7, 2, 1),
        new Match('Grand Finals', 'Necroplex', '13743386', [], 7, 5, 0)
    ]
);

const npc2 = new playedTournament(
    'NPC2', 'Non-Professional Cup 2', '1051009', 'wne60mu5', true,
    'Top 6', 'Apr 12, 2020', '150k - 250k', '2v2', 'Double Elimination', '44', '6th', 'Fashionably Late', [
        new Teammate('Dream10', '11740481', 'US'),
        new Teammate('FourFifty', '9653206', 'US'),
        new Teammate('Serlum', '12056779', 'US')
    ], [
        new Match('Round of 32', 'Mouse Drift', null, [
            new Teammate('Himeno_-', '16545385'),
            new Teammate('Kleemann', '12582103')
        ], 5, 2, 0),
        new Match('Round of 16', 'Oota e-gamers', null, [
            new Teammate('bud64', '6169550'),
            new Teammate('FornariLoL', '9036973'),
            new Teammate('pecefulpro', '12220691')
        ], 5, 3, 0),
        new Match('Quarterfinals', 'WeHatePP', null, [
            new Teammate('[Dom]', '13287997'),
            new Teammate('kvictor', '15922752'),
            new Teammate('monopl1', '15262671'),
            new Teammate('ssbmPepperJack', '11475881')
        ], 6, 2, 1),
        new Match('Loser Semifinals 1', 'Asia-Pacific', null, [
            new Teammate('forgestrange', '15197150'),
            new Teammate('ketthesylveon', '14065788'),
            new Teammate('Tree-Kangaroo', '5305199')
        ], 6, 0, 0),
        new Match('Loser Semifinals 2', 'Chuchichäschtli', null, [
            new Teammate('[ Arikawa ]', '6454830'),
            new Teammate('[ Kuromei ]', '6675144'),
            new Teammate('Kvn_hot_potato', '6228912')
        ], 6, 5, 0),
        new Match('Loser Finals 1', 'Young Builders', null, [
            new Teammate('bu1ld', '13808132'),
            new Teammate('JesusWCS', '12420508'),
            new Teammate('Tara_kan', '13217621'),
            new Teammate('Togipy', '11268782')
        ], 7, 2, 1)
    ]
);

const olrt2 = new playedTournament(
    'OLRT2', 'osu! Low rank Tournament 2', '1111565', '9ijnmf1x', true, 'Top 12', 'Jul 23, 2020', '100k - 350k', '4v4', 'Double Elimination', '44', '9th', 'No Skill', [
        new Teammate('chrissi', '15676464', 'DE'),
        new Teammate('JesusWCS', '12420508', 'RU'),
        new Teammate('Mysteri04', '14967328', 'DE'),
        new Teammate('r6echo14', '16229987', 'GB'),
        new Teammate('Serlum', '12056779', 'US')
    ], [
        new Match('Round of 32', '#FightingDucks', null, [
            new Teammate('HELENKILLER1337', '16182877'),
            new Teammate('Syr00xxX', '14579505'),
            new Teammate('krkjulian', '10386976'),
            new Teammate('finatic2112', '3017638'),
            new Teammate('Xushey', '11422688'),
            new Teammate('HugFestOOOOO', '12143973')
        ], 4, 1, 0),
        new Match('Round of 16', 'Intermediate Momentum Retreat', null, [
            new Teammate('hersheycactus', '12074072'),
            new Teammate('Malishiosu', '12521528'),
            new Teammate('AstrZt', '13818863'),
            new Teammate('RFP12', '13120453'),
            new Teammate('Waterperson4', '2356133')
        ], 0, 'FF', 0),
        new Match('Quarterfinals', 'twitter.com/NM1hater', null, [
            new Teammate('Nannner', '3548020'),
            new Teammate('battleof3', '12420214'),
            new Teammate('Charmory', '11386358'),
            new Teammate('Signify', '11984807'),
            new Teammate('A secret', '8589763'),
            new Teammate('JigglingJerome', '17091856')
        ], 6, 1, 1),
        new Match('Loser Semifinals 1', 'Harumachi Clover', null, [
            new Teammate('Mashyuf', '14356517'),
            new Teammate('shineasone', '6203507'),
            new Teammate('Chugga444', '12754827'),
            new Teammate('Lapisz', '8295497'),
            new Teammate('bluezenither', '11861720'),
            new Teammate('RioAI', '11550427')
        ], 6, 0, 1)
    ]
);

const otvt = new playedTournament(
    'OTVT', 'Oddie\'s TV Size Tournament', '1120107', 'ux6hpeu7', false, 'Top 32', 'Aug 05, 2020', '100k-999k', '1v1', 'Single Elimination', '188', '8th', null, [], [
        new Match('Round of 128', 'ZedTronex', '13748814', [], 4, 0, 0),
        new Match('Round of 64', 'T-Bounce', '13347736', [], 4, 1, 0),
        new Match('Round of 32', 'DevilmanAkira', '15103117', [], 0, 'FF', 1)
    ]
);

const stk8 = new playedTournament(
    'STK8', 'STK8', '1139956', 'STK8', true, 'Top 16', 'Sep 06, 2020', '80k-150k', '2v2', 'Double Elimination', '60', 'N/A', 'Totally Not Derankers', [
        new Teammate('FourFifty', '9653206', 'US'),
        new Teammate('Joryan_Inkling', '8240995', 'US')
    ], [
        new Match('Group Stage 1', 'Phantom Strikers', null, [
            new Teammate('MrNoLife', '14093519'),
            new Teammate('Defy', '15428357'),
            new Teammate('iiTzTony', '4426672')
        ], 5, 3, 0),
        new Match('Group Stage 2', 'MOPA', null, [
            new Teammate('mihawkx', '16434368'),
            new Teammate('PiquitoBr', '12617514'),
            new Teammate('Hayhorn', '10735077')
        ], 5, 1, 0),
        new Match('Round of 32', 'JP2GMD', null, [
            new Teammate('KubusOwO', '14285991'),
            new Teammate('Karmelowsky', '16310132')
        ], 5, 0, 0),
        new Match('Round of 16', 'Team Borger', null, [
            new Teammate('Sakubus', '2887386'),
            new Teammate('Fluxey', '9098192'),
            new Teammate('gamecool147', '13896734')
        ], 5, 2, 1),
        new Match('Loser Quarterfinals 1', 'a', null, [
            new Teammate('uzadabegora', '15556259'),
            new Teammate('QuixTV', '15492424'),
            new Teammate('king_duckling', '16652552')
        ], 6, 5, 0),
        new Match('Loser Quarterfinals 2', 'macdonal burger', null, [
            new Teammate('fseeb', '14926256'),
            new Teammate('FLLFF', '13567003'),
            new Teammate('Aletheia_Nyx', '14217340')
        ], 6, 5, 1)
    ]
);

const bqt2 = new playedTournament(
    'BQT2', 'BQT2', '1154593', 'BQT2', true, 'Top 6', 'Sep 30, 2020', '100k-350k', '2v2', 'Double Elimination', '87', '3rd', 'Begone Farmers', [
        new Teammate('Alonso2903', '11364009', 'PE'),
        new Teammate('Joryan_Inkling', '8240995', 'CA')
    ], [
        new Match('Round of 63', 'Free Player Team 3', null, [
            new Teammate('dnialh', '15867452'),
            new Teammate('JoeyUwu', '16593954')
        ], 4, 0, 0),
        new Match('Round of 32', 'Tricotisen', null, [
            new Teammate('SverdWyrd', '10996443'),
            new Teammate('Maximalic', '11617067'),
            new Teammate('DYSONV8ABSOLUTE', '15219106')
        ], 4, 0, 0),
        new Match('Round of 16', 'Missing Jumper RE', null, [
            new Teammate('Kocha', '15518219'),
            new Teammate('Sanduha', '7173963'),
            new Teammate('Iromata', '10872666')
        ], 5, 4, 1),
        new Match('Loser Quarterfinals 1', 'The pog squad', null, [
            new Teammate('xtxa', '14486437'),
            new Teammate('uwumeguminuwu', '14697881'),
            new Teammate('Shinako','13716742')
        ], 6, 0, 0),
        new Match('Loser Quarterfinals 2', 'To Be Determined', null, [
            new Teammate('HippoFalcon', '15747555'),
            new Teammate('Nazodude', '4010492'),
            new Teammate('TrueGaytorade', '14410774')
        ], 6, 1, 0),
        new Match('Loser Semifinals 1', 'Hall 1', null, [
            new Teammate('Egor20042004', '3218675'),
            new Teammate('Lord_MaXXiM', '7806547'),
            new Teammate('abvvvv', '11438067')
        ], 6, 3, 0),
        new Match('Loser Semifinals 2', '-_-', null, [
            new Teammate('Geag', '16052525'),
            new Teammate('txFPS', '12835025'),
            new Teammate('MokaMilku', '14681304')
        ], 6, 2, 0),
        new Match('Loser Finals 1', 'Missing Jumper RE', null, [
            new Teammate('Kocha', '15518219'),
            new Teammate('Sanduha', '7173963'),
            new Teammate('Iromata', '10872666')
        ], 7, 3, 1)
    ]
);

const bnc = new playedTournament(
    'BNC', 'Banny Cup', 'https://imgur.com/mJX44dw', 'Bannycup', false, '4th Place', 'Oct 20, 2020', 'Yes', '1v1', 'Double Elimination', '22', '9th', null, [], [
        new Match('Round of 16', 'PanzersIV', '12176990', [], 5, 2, 1),
        new Match('Loser Quarterfinals', 'Shiro4102', '14270286', [], 5, 2, 0),
        new Match('Loser Semifinals 1', 'Hayuraaa', '13741233', [], 6, 1, 0),
        new Match('Loser Semifinals 2', 'DarkeDiamonds', '14610323', [], 6, 0, 0),
        new Match('Loser Finals 1', 'Suika7', '13644465', [], 0, 'FF', 0),
        new Match('Loser Finals 2', 'bannynino', '8650585', [], 6, 0, 1)
    ] 
);

const ost = new playedTournament(
    'OST', 'Orange\'s Scuffed Tournament (Nov)', '1168579', 'ost_11_2020', false, 'Top 16', 'Oct 24, 2020', '100k-200k', '1v1', 'Single Elimination', '89', '15th', null, [], [
        new Match('Round of 32', 'EzEveryTime', '10863898', [], 4, 2, 0),
        new Match('Round of 16', 'Tonatious', '10287120', [], 5, 3, 1)
    ]
);

const awt = new playedTournament(
    'AWT', 'Aeris Winter Tournament 2020', '1197583', null, true, '4th Place', 'Dec 07, 2020', '60k-160k', '2v2', 'Single Elimination', '36', '6th', 'Frencher Toast', [
        new Teammate('Alonso2903', '11364009', 'PE'),
        new Teammate('AndromedaX1', '16657449', 'US'),
        new Teammate('YesImSatan', '14373729', 'SK')
    ], [
        new Match('Round of 16', 'Rojak', null, [
            new Teammate('lewis_0873', '11627196'),
            new Teammate('Xavernus', '12629272'),
            new Teammate('Andy26', '3191010'),
            new Teammate('T-Bounce', '13347736')
        ], 4, 0, 0),
        new Match('Quarterfinals', 'Memory Snow', null, [
            new Teammate('Tonatious', '10287120'),
            new Teammate('Madison Beer', '15452931'),
            new Teammate('NekoMeganG', '10766611'),
            new Teammate('WackyFlo', '8173495')
        ], 5, 1, 0),
        new Match('Semifinals', 'A side of noob', null, [
            new Teammate('unicornlover', '13179722'),
            new Teammate('ScarletSisters', '1013605'),
            new Teammate('Vagrant', '7538431'),
            new Teammate('Shark', '7452074')
        ], 5, 3, 1),
        new Match('Bronze Match', 'idk dude', null, [
            new Teammate('EternalDawn', '12404726'),
            new Teammate('Naviless', '9370167'),
            new Teammate('Dylann', '14687489'),
            new Teammate('SSScotty', '10319851')
        ], 6, 1, 1)
    ]
);

const lf6dc = new playedTournament(
    'LF6DC', 'Lolis Fantasy 6 Digits Cup', '1201581', null, false, '2nd Place', 'Dec 13, 2020', '100k-450k', '1v1', 'Double Elimination', '53', '3rd', null, [], [
        new Match('Round of 32', 'ALDHACAST', '14868720', [], 5, 0, 0),
        new Match('Round of 16', 'Linkel', '4267947', [], 5, 0, 0),
        new Match('Quarterfinals', 'Robertelio12', '9214489', [], 5, 1, 0),
        new Match('Semifinals', 'Alonso2903', '11364009', [], 6, 5, 0),
        new Match('Finals', 'GarciXD', '13398045', [], 7, 1, 0),
        new Match('Grand Finals', 'Alonso2903', '11364009', [], 7, 2, 1),
        new Match('Bracket Reset', 'Alonso2903', '11364009', [], 7, 3, 1)
    ]
);

const osdl = new playedTournament(
    'OSDL', 'osu! Six Digit League Spring 2021', '1247656', 'osdlspring', true, '3rd Place', 'Feb 12, 2021', '90k-999k', '1v1', 'Double Elimination', '55', '3rd', 'When You See It', [
        new Teammate('Geag', '16052525', 'US'),
        new Teammate('Joryan_Inkling', '8240995', 'CA')
    ], [
        new Match('Round of 16', 'Exillium', null, [
            new Teammate('TigwerSparkz', '16352821'),
            new Teammate('GabeIsTheWord', '15841781'),
            new Teammate('Exairia', '15893802')
        ], 5, 3, 0),
        new Match('Quarterfinals', 'Pigs of Hall 2', null, [
            new Teammate('Egor20042004', '3218675'),
            new Teammate('Frui Ludo', '10536810'),
            new Teammate('RatatiC', '10002215')
        ], 0, 'FF', 0),
        new Match('Semifinals', 'Oppai Dragons', null, [
            new Teammate('NightCryx', '17642261'),
            new Teammate('-Daku', '6377828'),
            new Teammate('cybxr', '13100308')
        ], 6, 3, 0),
        new Match('Finals', 'AlienSisters Gaming', null, [
            new Teammate('ScarletSisters', '1013605'),
            new Teammate('MrJamesGaming', '13730858'),
            new Teammate('uchuuj1n', '9140302')
        ], 6, 2, 1),
        new Match('Loser Grand Finals', 'How Combo Works', null, [
            new Teammate('Hoper22', '16193374'),
            new Teammate('unicornlover', '13179722'),
            new Teammate('Diwiu', '12098722')
        ], 7, 6, 1)
    ]
);

const jrc2 = new playedTournament(
    'JRC2', 'James\' Rookie Cup 2', '1248720', 'ps4hab6p', false, 'Top 12', 'Feb 14, 2021', '100k-400k', '1v1', 'Double Elimination', '237', '3rd', null, [], [
        new Match('Round of 64', 'NightCryx', '17642261', [], 5, 1, 0),
        new Match('Round of 32', 'BJRNEN', '17987245', [], 5, 2, 0),
        new Match('Round of 16', '[ Rone ]', '6696542', [], 5, 1, 0),
        new Match('Quarterfinals', 'Egor20042004', '3218675', [], 6, 5, 1),
        new Match('Loser Semifinals 1', 'KolKye', '6795168', [], 6, 3, 1)
    ]
);

const stk9 = new playedTournament(
    'STK9', 'STK9', '1265690', 'STK9', true, 'Top 8', 'Mar 06, 2021', '80k - 150k', '2v2', 'Double Elimination', '101', '14th', 'Ukon Cherry', [    
        new Teammate('FourFifty', '9653206', 'US'),
        new Teammate('BlueJaker', '13686468', 'GB')
    ], [
        new Match('Round of 64', 'LIGMA', null, [
            new Teammate('MestreAprendiz', '11227346'),
            new Teammate('Hasanchez', '16687935'),
            new Teammate('AryDalien', '6921791')
        ], 5, 3, 0),
        new Match('Round of 32', 'Life Lovers', null, [
            new Teammate('ViperGamer18_', '11706227'),
            new Teammate('Sorenthy', '9853411'),
            new Teammate('cptlobster', '6062916')
        ], 5, 3, 0),
        new Match('Round of 16', 'Hall Hunters', null, [
            new Teammate('Fringer', '17873938'),
            new Teammate('aluniko', '18157374'),
            new Teammate('Frindin', '17124682')
        ], 5, 2, 1),
        new Match('Loser Quarterfinals 1', 'ziquiziro', null, [
            new Teammate('KolKye', '6795168'),
            new Teammate('- Catarina -', '16218993'),
            new Teammate('purasfrutas', '16990207')
        ], 6, 2, 0),
        new Match('Loser Quarterfinals 2', 'chocobo', null, [
            new Teammate('XxWizardxX', '8076138'),
            new Teammate('Fynbi', '2164993')
        ], 6, 2, 0),
        new Match('Loser Semifinals 1', 'My Team', null, [
            new Teammate('Twinplant', '14943491'),
            new Teammate('VonaGM', '16161318'),
            new Teammate('[ Sentiment ]', '3374087')
        ], 6, 4, 0),
        new Match('Loser Semifinals 2', 'AYAYA', null, [
            new Teammate('Paracat', '13709281'),
            new Teammate('MillkyBoy98', '13691816'),
            new Teammate('Naviless', '9370167')
        ], 6, 4, 1)
    ]
);

const est = new playedTournament(
    'EST', 'Entropy\'s Summer Tournament', '1334728', 'EST_Summer_Edition', true, 'Top 8', 'May 27, 2021', '75k-135k', '2v2', 'Double Elimination', '50', '9th', 'Shroomers', [
        new Teammate('Kocha', '15518219', 'UA'),
        new Teammate('SadShiba', '10747626', 'GB'),
        new Teammate('Sanduha', '7173963', 'RU')
    ], [
        new Match('Round of 32', 'cirnu', null, [
            new Teammate('diorytt', '19204047'),
            new Teammate('Yorokobu', '16204766'),
            new Teammate('funnyname', '10186610'),
            new Teammate('[-ErnesT-]', '14546396')
        ], 4, 1, 0),
        new Match('Round of 16', 'Team Nothing', null, [
            new Teammate('lushifer', '13356408'),
            new Teammate('DraconoiderD', '10250744'),
            new Teammate('-[ Dreepy ]-', '17978570'),
            new Teammate('Vincent A', '11050632')
        ], 5, 0, 0),
        new Match('Quarterfinals', 'The Sussies', null, [
            new Teammate('Altai', '5745865'),
            new Teammate('Hoshizora Rin', '10743435'),
            new Teammate('Exairia', '15893802'),
            new Teammate('BlueJaker44', '13686468')
        ], 6, 2, 1),
        new Match('Loser Semifinals 1', 'Tekken 7 Siege', null, [
            new Teammate('Redead Subaru', '9852426'),
            new Teammate('[Boy]HaiPhong', '8461097'),
            new Teammate('Astrayl3', '11999654')
        ], 0, 0, 2),
        new Match('Loser Semifinals 2', 'Exillium', null, [
            new Teammate('doystick', '18623190'),
            new Teammate('-virtuosu', '18436045'),
            new Teammate('TigwerSparkz', '16352821'),
            new Teammate('Alonso2903', '11364009')
        ], 6, 2, 1),
    ]
);

const hkc = new playedTournament(
    'HKC', 'HKttyCup (Tier 2)', '1342701', 'HKC2021T2', false, '3rd Place', 'Jun 06, 2021', '80k-150k', '1v1', 'Double Elimination', '68', '3rd', null, [], [
        new Match('Round of 32', 'T-Bounce', '13347736', [], 5, 1, 0),
        new Match('Round of 16', 'FrozenTea', '12125431', [], 0, 'FF', 0),
        new Match('Quarterfinals', 'Frindin', '17124682', [], 6, 5, 1),
        new Match('Loser Semifinals 1', 'A secret', '8589763', [], 6, 3, 0),
        new Match('Loser Semifinals 2', 'FishCantLife', '11985874', [], 6, 2, 0),
        new Match('Loser Finals 1', 'aluniko', '18157374', [], 0, 0, 2),
        new Match('Loser Finals 2', 'Xitlus', '15548304', [], 7, 3, 0),
        new Match('Loser Grand Finals', 'uchuuj1n', '9140302', [], 7, 5, 1)
    ]
);

const mit = new playedTournament(
    'MIT', 'Moop\'s Intermediate Tournament', '1353676', 'lx5rcr33', true, 'Top 6', 'Jun 20, 2021', '50k-160k', '4v4', 'Double Elimination', '32', '12th', '\:pray\: 4 Schedule', [
        new Teammate('-wicked-', '14060864', 'UA'),
        new Teammate('ADancingPot', '12828809', 'US'),
        new Teammate('Andy26', '3191010', 'NO'),
        new Teammate('Alonso2903', '11364009', 'PE'),
        new Teammate('FrozenTea', '12125431', 'CA'),
        new Teammate('Rone', '6696542', 'SA'),
        new Teammate('StolenName4', '6693576', 'KW')
    ], [
        new Match('Round of 32', 'chawles de gawlle uwu', null, [
            new Teammate('Egida Palatina', '10522620'),
            new Teammate('RNLG', '14567160'),
            new Teammate('Not Airwam', '17442279'),
            new Teammate('Airwam', '7150814'),
            new Teammate('Jibe', '13662743'),
            new Teammate('Fayhild', '11486058'),
            new Teammate('Asyln', '10669137'),
            new Teammate('Taevas', '7276846')
        ], 5, 0, 0),
        new Match('Round of 16', ':copium:', null, [
            new Teammate('[ Fiz ]', '10631541'),
            new Teammate('Redshock', '9124278'),
            new Teammate('KPMY', '12464372'),
            new Teammate('kurakura', '15542056'),
            new Teammate('Its not Marvin', '13600612'),
            new Teammate('Xavernus', '12629272'),
            new Teammate('Starfruit515', '6088124'),
            new Teammate('Fancyyy', '12616268')
        ], 5, 1, 0),
        new Match('Quarterfinals', 'cookiezi teamviewer incident', null, [
            new Teammate('T-Bounce', '13347736'),
            new Teammate('Geag', '16052525'),
            new Teammate('Greninja', '8579186'),
            new Teammate('SadShiba', '10747626'),
            new Teammate('Spry', '7069714'),
            new Teammate('Squink', '12058601'),
            new Teammate('Vagrant', '7538431'),
            new Teammate('YesImSatan', '14373729')
        ], 6, 5, 0),
        new Match('Semifinals', 'Eight Balls on Bonk', null, [
            new Teammate('Sspannish', '11418478'),
            new Teammate('Nehoxy', '14095873'),
            new Teammate('Neant', '12049778'),
            new Teammate('KiroSupp2', '7751574'),
            new Teammate('LewusekX44', '9997359'),
            new Teammate('DeSconTent', '7995027'),
            new Teammate('Fluxey', '9098192'),
            new Teammate('Xpekade', '10775293')
        ], 6, 1, 1),
        new Match('Loser Finals 1', 'guraaim', null, [
            new Teammate('Behwall', '4980135'),
            new Teammate('Plubplet', '11913287'),
            new Teammate('Watame', '8847726'),
            new Teammate('Jotmo', '10516802'),
            new Teammate('SamTheNub', '14340616'),
            new Teammate('Aman0_H1na', '6482909'),
            new Teammate('butercak', '10146184'),
            new Teammate('fixca', '9735548')
        ], 7, 3, 1)
    ]
);