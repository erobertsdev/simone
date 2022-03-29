export const game = {
	gameOver: true,
	difficulty: 3,
	speed: 1000,
	round: 1,
	startButton: document.getElementById('btn-start'),
	redButton: {
		dom: document.getElementById('btnred'),
		name: 'btnred',
		keyVal: 'a'
	},
	blueButton: {
		dom: document.getElementById('btnblue'),
		name: 'btnblue',
		keyVal: 's'
	},
	greenButton: {
		dom: document.getElementById('btngreen'),
		name: 'btngreen',
		keyVal: 'd'
	},
	yellowButton: {
		dom: document.getElementById('btnyellow'),
		name: 'btnyellow',
		keyVal: 'f'
	},
	purpleButton: {
		dom: document.getElementById('btnpurple'),
		name: 'btnpurple',
		keyVal: 'g'
	},
	status: document.getElementById('status'),
	popup: document.getElementById('final-popup'),
	gameDomArr: [],
	runState: null,
	simonArr: [],
	simonCount: 0,
	playerArr: [],
	playerCount: 0
};
