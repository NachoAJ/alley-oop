const mongoose = require('mongoose')

const Stats = require('../models/Stats.model')
mongoose.connect(`mongodb://localhost/alley-oop`, { useNewUrlParser: true })

const stats = [
	{
		Name: 'Joseph Girard III',
		Team: 'Glens Falls (NY)',
		Rank: '1',
		Pos: 'G',
		GP: '30',
		Pts: '1457',
		PPG: '48.6',
		FGM: '452',
		FGA: '',
		FGPCT: '',
		ThreePM: '195',
		ThreePPCT: '',
		FTM: '358',
		FTPCT: '87'
	},
	{
		Name: 'Tommy Murr',
		Team: 'Lindsay Lane Christian Academy (Athens, AL)',
		Rank: '2',
		Pos: 'PG',
		GP: '32',
		Pts: '1442',
		PPG: '45.1',
		FGM: '487',
		FGA: '958',
		FGPCT: '51',
		ThreePM: '122',
		ThreePPCT: '37',
		FTM: '346',
		FTPCT: '86'
	},
	{
		Name: 'Qwan Jackson',
		Team: 'Milwaukee Lifelong Learning (Milwaukee, WI)',
		Rank: '3',
		Pos: 'G',
		GP: '22',
		Pts: '983',
		PPG: '44.7',
		FGM: '325',
		FGA: '312',
		FGPCT: '',
		ThreePM: '97',
		ThreePPCT: '',
		FTM: '236',
		FTPCT: '67'
	},
	{
		Name: 'Jarod Lucas',
		Team: 'Los Altos (Hacienda Heights, CA)',
		Rank: '4',
		Pos: 'G',
		GP: '30',
		Pts: '1189',
		PPG: '39.6',
		FGM: '317',
		FGA: '653',
		FGPCT: '49',
		ThreePM: '133',
		ThreePPCT: '43',
		FTM: '422',
		FTPCT: '89'
	},
	{
		Name: 'Robert Burries',
		Team: 'Globe (AZ)',
		Rank: '5',
		Pos: 'G',
		GP: '28',
		Pts: '1087',
		PPG: '38.8',
		FGM: '353',
		FGA: '',
		FGPCT: '',
		ThreePM: '115',
		ThreePPCT: '',
		FTM: '266',
		FTPCT: '88'
	},
	{
		Name: 'Tristen Newton',
		Team: 'Burges (El Paso, TX)',
		Rank: '6',
		Pos: 'PG, SG',
		GP: '34',
		Pts: '1273',
		PPG: '37.4',
		FGM: '388',
		FGA: '704',
		FGPCT: '55',
		ThreePM: '72',
		ThreePPCT: '',
		FTM: '425',
		FTPCT: '88'
	},
	{
		Name: 'Themus Fulks',
		Team: 'North Davidson (Lexington, NC)',
		Rank: '7',
		Pos: 'G',
		GP: '30',
		Pts: '1055',
		PPG: '35.2',
		FGM: '385',
		FGA: '714',
		FGPCT: '54',
		ThreePM: '65',
		ThreePPCT: '38',
		FTM: '220',
		FTPCT: '75'
	},
	{
		Name: 'Earl Johnson Jr.',
		Team: 'Ipakanni Early College Charter (Oroville, CA)',
		Rank: '8',
		Pos: 'G',
		GP: '17',
		Pts: '596',
		PPG: '35.1',
		FGM: '222',
		FGA: '544',
		FGPCT: '41',
		ThreePM: '84',
		ThreePPCT: '27',
		FTM: '32',
		FTPCT: '60'
	},
	{
		Name: 'Luke Brown',
		Team: 'Blackford (Hartford City, IN)',
		Rank: '9',
		Pos: 'PG',
		GP: '23',
		Pts: '805',
		PPG: '35.0',
		FGM: '266',
		FGA: '521',
		FGPCT: '51',
		ThreePM: '80',
		ThreePPCT: '38',
		FTM: '193',
		FTPCT: '94'
	},
	{
		Name: 'David Layton',
		Team: 'Oak Ridge (MO)',
		Rank: '10',
		Pos: 'PG, SG',
		GP: '27',
		Pts: '941',
		PPG: '34.9',
		FGM: '366',
		FGA: '717',
		FGPCT: '51',
		ThreePM: '48',
		ThreePPCT: '32',
		FTM: '162',
		FTPCT: '70'
	},
	{
		Name: 'K.j. Johnson ??',
		Team: 'Marshall County (Lewisburg, TN)',
		Rank: '11',
		Pos: 'SG, PG',
		GP: '29',
		Pts: '1010',
		PPG: '34.8',
		FGM: '337',
		FGA: '683',
		FGPCT: '49',
		ThreePM: '87',
		ThreePPCT: '33',
		FTM: '249',
		FTPCT: '79'
	},
	{
		Name: 'Brock Williams',
		Team: 'Burlington Christian Academy (Burlington, NC)',
		Rank: '12',
		Pos: '',
		GP: '26',
		Pts: '904',
		PPG: '34.8',
		FGM: '152',
		FGA: '246',
		FGPCT: '62',
		ThreePM: '10',
		ThreePPCT: '36',
		FTM: '102',
		FTPCT: '86'
	},
	{
		Name: 'Cory Canada',
		Team: 'Eastside Memorial (Austin, TX)',
		Rank: '13',
		Pos: 'G, PG',
		GP: '24',
		Pts: '795',
		PPG: '33.1',
		FGM: '265',
		FGA: '561',
		FGPCT: '47',
		ThreePM: '65',
		ThreePPCT: '36',
		FTM: '200',
		FTPCT: '69'
	},
	{
		Name: 'Dallas Graziani',
		Team: 'Cooper City (FL)',
		Rank: '14',
		Pos: 'PG, SG',
		GP: '18',
		Pts: '581',
		PPG: '32.3',
		FGM: '169',
		FGA: '367',
		FGPCT: '46',
		ThreePM: '64',
		ThreePPCT: '39',
		FTM: '179',
		FTPCT: '89'
	},
	{
		Name: 'Preston James',
		Team: 'Bergen County Christian Academy (Hackensack, NJ)',
		Rank: '15',
		Pos: '',
		GP: '30',
		Pts: '968',
		PPG: '32.3',
		FGM: '359',
		FGA: '631',
		FGPCT: '57',
		ThreePM: '93',
		ThreePPCT: '50',
		FTM: '157',
		FTPCT: '78'
	},
	{
		Name: 'Julian Newman',
		Team: 'Downey Christian (Orlando, FL)',
		Rank: '16',
		Pos: 'PG',
		GP: '36',
		Pts: '1161',
		PPG: '32.3',
		FGM: '336',
		FGA: '709',
		FGPCT: '47',
		ThreePM: '205',
		ThreePPCT: '47',
		FTM: '284',
		FTPCT: '94'
	},
	{
		Name: 'Ryan Moffet',
		Team: 'Odessa (WA)',
		Rank: '17',
		Pos: 'PG',
		GP: '28',
		Pts: '900',
		PPG: '32.1',
		FGM: '316',
		FGA: '601',
		FGPCT: '53',
		ThreePM: '104',
		ThreePPCT: '39',
		FTM: '164',
		FTPCT: '82'
	},
	{
		Name: 'Trey Smith',
		Team: 'Landrum (SC)',
		Rank: '18',
		Pos: 'PG, SG',
		GP: '26',
		Pts: '835',
		PPG: '32.1',
		FGM: '264',
		FGA: '559',
		FGPCT: '47',
		ThreePM: '115',
		ThreePPCT: '43',
		FTM: '192',
		FTPCT: '82'
	},
	{
		Name: 'Payton Brown',
		Team: 'Waldron (AR)',
		Rank: '19',
		Pos: 'PG',
		GP: '33',
		Pts: '1057',
		PPG: '32.0',
		FGM: '343',
		FGA: '698',
		FGPCT: '49',
		ThreePM: '95',
		ThreePPCT: '35',
		FTM: '276',
		FTPCT: '86'
	},
	{
		Name: 'Jaime Jaquez Jr.',
		Team: 'Camarillo (CA)',
		Rank: '20',
		Pos: 'F, G',
		GP: '29',
		Pts: '919',
		PPG: '31.7',
		FGM: '341',
		FGA: '602',
		FGPCT: '57',
		ThreePM: '62',
		ThreePPCT: '41',
		FTM: '175',
		FTPCT: '73'
	},
	{
		Name: 'Mason Putnam',
		Team: 'Prattsburgh Central (Prattsburgh, NY)',
		Rank: '21',
		Pos: 'G',
		GP: '23',
		Pts: '727',
		PPG: '31.6',
		FGM: '246',
		FGA: '444',
		FGPCT: '55',
		ThreePM: '62',
		ThreePPCT: '38',
		FTM: '173',
		FTPCT: '78'
	},
	{
		Name: 'Cevin Clark',
		Team: 'Arkansas City (KS)',
		Rank: '22',
		Pos: 'PG, SG',
		GP: '21',
		Pts: '663',
		PPG: '31.6',
		FGM: '212',
		FGA: '395',
		FGPCT: '54',
		ThreePM: '51',
		ThreePPCT: '40',
		FTM: '186',
		FTPCT: '85'
	},
	{
		Name: 'Isaac Fink',
		Team: 'Springfield (MN)',
		Rank: '23',
		Pos: 'G',
		GP: '32',
		Pts: '1002',
		PPG: '31.3',
		FGM: '379',
		FGA: '652',
		FGPCT: '58',
		ThreePM: '112',
		ThreePPCT: '45',
		FTM: '132',
		FTPCT: '76'
	},
	{
		Name: 'Micah Pollard',
		Team: 'Foss (Tacoma, WA)',
		Rank: '24',
		Pos: 'G',
		GP: '21',
		Pts: '655',
		PPG: '31.2',
		FGM: '238',
		FGA: '',
		FGPCT: '',
		ThreePM: '42',
		ThreePPCT: '',
		FTM: '120',
		FTPCT: '68'
	},
	{
		Name: 'Luke Bumbalough',
		Team: 'New Castle (IN)',
		Rank: '25',
		Pos: 'G',
		GP: '24',
		Pts: '748',
		PPG: '31.2',
		FGM: '244',
		FGA: '500',
		FGPCT: '49',
		ThreePM: '122',
		ThreePPCT: '42',
		FTM: '138',
		FTPCT: '71'
	},
	{
		Name: 'George Navarro',
		Team: 'Hoopa Valley (Hoopa, CA)',
		Rank: '26',
		Pos: 'G',
		GP: '25',
		Pts: '776',
		PPG: '31.0',
		FGM: '284',
		FGA: '',
		FGPCT: '',
		ThreePM: '90',
		ThreePPCT: '',
		FTM: '118',
		FTPCT: '78'
	},
	{
		Name: 'Jimmy Forte',
		Team: 'Community Christian (Wilson, NC)',
		Rank: '27',
		Pos: 'PG',
		GP: '26',
		Pts: '807',
		PPG: '31.0',
		FGM: '275',
		FGA: '532',
		FGPCT: '52',
		ThreePM: '68',
		ThreePPCT: '45',
		FTM: '163',
		FTPCT: '77'
	},
	{
		Name: 'Luke Lerose',
		Team: 'Nicholas County (Summersville, WV)',
		Rank: '28',
		Pos: 'G',
		GP: '23',
		Pts: '713',
		PPG: '31.0',
		FGM: '233',
		FGA: '503',
		FGPCT: '46',
		ThreePM: '91',
		ThreePPCT: '34',
		FTM: '156',
		FTPCT: '73'
	},
	{
		Name: 'Steven Strong',
		Team: 'University Academy Charter (Kansas City, MO)',
		Rank: '29',
		Pos: 'PG',
		GP: '19',
		Pts: '583',
		PPG: '30.7',
		FGM: '195',
		FGA: '233',
		FGPCT: '84',
		ThreePM: '70',
		ThreePPCT: '',
		FTM: '123',
		FTPCT: '74'
	},
	{
		Name: 'Clark Slajchert',
		Team: 'Oak Park (CA)',
		Rank: '30',
		Pos: 'G',
		GP: '29',
		Pts: '885',
		PPG: '30.5',
		FGM: '318',
		FGA: '631',
		FGPCT: '50',
		ThreePM: '83',
		ThreePPCT: '45',
		FTM: '166',
		FTPCT: '86'
	},
	{
		Name: 'Andreus Dedner',
		Team: 'Lafayette County (Stamps, AR)',
		Rank: '31',
		Pos: 'G',
		GP: '33',
		Pts: '1005',
		PPG: '30.5',
		FGM: '367',
		FGA: '830',
		FGPCT: '44',
		ThreePM: '119',
		ThreePPCT: '31',
		FTM: '152',
		FTPCT: '71'
	},
	{
		Name: 'Nico Mannion',
		Team: 'Pinnacle (Phoenix, AZ)',
		Rank: '32',
		Pos: 'PG',
		GP: '30',
		Pts: '913',
		PPG: '30.4',
		FGM: '310',
		FGA: '608',
		FGPCT: '51',
		ThreePM: '92',
		ThreePPCT: '33',
		FTM: '201',
		FTPCT: '85'
	},
	{
		Name: 'Kris Fargo',
		Team: 'Freedom (OK)',
		Rank: '33',
		Pos: 'SG',
		GP: '25',
		Pts: '759',
		PPG: '30.4',
		FGM: '270',
		FGA: '623',
		FGPCT: '43',
		ThreePM: '65',
		ThreePPCT: '26',
		FTM: '154',
		FTPCT: '74'
	},
	{
		Name: 'Brett Collins',
		Team: 'Coastal HomeSchool (Pembroke, GA)',
		Rank: '34',
		Pos: '',
		GP: '26',
		Pts: '788',
		PPG: '30.3',
		FGM: '289',
		FGA: '584',
		FGPCT: '49',
		ThreePM: '27',
		ThreePPCT: '27',
		FTM: '183',
		FTPCT: '70'
	},
	{
		Name: 'Ren Dyer',
		Team: 'North Buncombe (Weaverville, NC)',
		Rank: '35',
		Pos: 'F',
		GP: '22',
		Pts: '666',
		PPG: '30.3',
		FGM: '217',
		FGA: '425',
		FGPCT: '51',
		ThreePM: '44',
		ThreePPCT: '42',
		FTM: '188',
		FTPCT: '84'
	},
	{
		Name: 'Kyree Walker',
		Team: 'Hillcrest Prep (Phoenix, AZ)',
		Rank: '36',
		Pos: 'G, F',
		GP: '24',
		Pts: '724',
		PPG: '30.2',
		FGM: '231',
		FGA: '433',
		FGPCT: '53',
		ThreePM: '55',
		ThreePPCT: '47',
		FTM: '207',
		FTPCT: '77'
	},
	{
		Name: 'Destin Clark',
		Team: 'Indian Land (Fort Mill, SC)',
		Rank: '37',
		Pos: '',
		GP: '18',
		Pts: '542',
		PPG: '30.1',
		FGM: '145',
		FGA: '252',
		FGPCT: '58',
		ThreePM: '20',
		ThreePPCT: '45',
		FTM: '61',
		FTPCT: '60'
	},
	{
		Name: 'Greg Brown III',
		Team: 'Vandegrift (Austin, TX)',
		Rank: '38',
		Pos: '',
		GP: '20',
		Pts: '602',
		PPG: '30.1',
		FGM: '204',
		FGA: '402',
		FGPCT: '51',
		ThreePM: '37',
		ThreePPCT: '29',
		FTM: '157',
		FTPCT: '69'
	},
	{
		Name: 'Austin Larson',
		Team: 'Redding Christian (Palo Cedro, CA)',
		Rank: '39',
		Pos: 'SG, PG',
		GP: '34',
		Pts: '1014',
		PPG: '29.8',
		FGM: '376',
		FGA: '683',
		FGPCT: '55',
		ThreePM: '89',
		ThreePPCT: '48',
		FTM: '173',
		FTPCT: '67'
	},
	{
		Name: 'DaShun Berry',
		Team: 'Houlka (MS)',
		Rank: '40',
		Pos: 'G',
		GP: '25',
		Pts: '744',
		PPG: '29.8',
		FGM: '247',
		FGA: '456',
		FGPCT: '54',
		ThreePM: '14',
		ThreePPCT: '18',
		FTM: '231',
		FTPCT: '77'
	},
	{
		Name: 'Kris Robinson',
		Team: 'Lincolnton (NC)',
		Rank: '41',
		Pos: 'G',
		GP: '19',
		Pts: '563',
		PPG: '29.6',
		FGM: '155',
		FGA: '399',
		FGPCT: '39',
		ThreePM: '79',
		ThreePPCT: '36',
		FTM: '168',
		FTPCT: '76'
	},
	{
		Name: 'Alfredo Lechuga',
		Team: 'Crossroads Christian (Corona, CA)',
		Rank: '42',
		Pos: 'C, F',
		GP: '19',
		Pts: '563',
		PPG: '29.6',
		FGM: '243',
		FGA: '463',
		FGPCT: '52',
		ThreePM: '4',
		ThreePPCT: '25',
		FTM: '73',
		FTPCT: '54'
	},
	{
		Name: 'Jeremy DowDell',
		Team: 'Olympus (Salt Lake City, UT)',
		Rank: '43',
		Pos: 'SG',
		GP: '23',
		Pts: '680',
		PPG: '29.6',
		FGM: '225',
		FGA: '454',
		FGPCT: '50',
		ThreePM: '110',
		ThreePPCT: '42',
		FTM: '120',
		FTPCT: '90'
	},
	{
		Name: 'DJ Ransom',
		Team: 'Wilcox RVT (Meriden, CT)',
		Rank: '44',
		Pos: 'G',
		GP: '23',
		Pts: '678',
		PPG: '29.5',
		FGM: '234',
		FGA: '469',
		FGPCT: '50',
		ThreePM: '45',
		ThreePPCT: '28',
		FTM: '165',
		FTPCT: '78'
	},
	{
		Name: 'Andrew Voss',
		Team: 'Liberty Christian Academy (Wright City, MO)',
		Rank: '45',
		Pos: 'G',
		GP: '26',
		Pts: '764',
		PPG: '29.4',
		FGM: '271',
		FGA: '569',
		FGPCT: '48',
		ThreePM: '54',
		ThreePPCT: '38',
		FTM: '168',
		FTPCT: '75'
	},
	{
		Name: 'Makani Whiteside',
		Team: 'Liberty (Madera, CA)',
		Rank: '46',
		Pos: 'PG',
		GP: '33',
		Pts: '968',
		PPG: '29.3',
		FGM: '315',
		FGA: '755',
		FGPCT: '42',
		ThreePM: '51',
		ThreePPCT: '28',
		FTM: '287',
		FTPCT: '74'
	},
	{
		Name: 'Drake London',
		Team: 'Moorpark (CA)',
		Rank: '47',
		Pos: '',
		GP: '31',
		Pts: '906',
		PPG: '29.2',
		FGM: '340',
		FGA: '573',
		FGPCT: '59',
		ThreePM: '42',
		ThreePPCT: '34',
		FTM: '184',
		FTPCT: '79'
	},
	{
		Name: 'Josiah Johnson',
		Team: 'Big Sandy (TX)',
		Rank: '48',
		Pos: 'PG, SG',
		GP: '35',
		Pts: '1019',
		PPG: '29.1',
		FGM: '327',
		FGA: '598',
		FGPCT: '55',
		ThreePM: '91',
		ThreePPCT: '',
		FTM: '274',
		FTPCT: '88'
	},
	{
		Name: 'Sebastian Mendoza',
		Team: 'Hillcrest (Riverside, CA)',
		Rank: '49',
		Pos: '',
		GP: '27',
		Pts: '786',
		PPG: '29.1',
		FGM: '289',
		FGA: '559',
		FGPCT: '52',
		ThreePM: '56',
		ThreePPCT: '37',
		FTM: '152',
		FTPCT: '83'
	},
	{
		Name: 'Michael Vivo',
		Team: 'Waterford (CA)',
		Rank: '50',
		Pos: 'PG',
		GP: '26',
		Pts: '753',
		PPG: '29.0',
		FGM: '257',
		FGA: '630',
		FGPCT: '41',
		ThreePM: '79',
		ThreePPCT: '27',
		FTM: '160',
		FTPCT: '61'
	}
]

Stats.create(stats)
	.then(() => console.log(`Created ${stats.length} stats`))
	.catch(err => console.log('Ha habido un error', err))
