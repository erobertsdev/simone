export const game = {
	gameOver: true,
	difficulty: 3,
	speed: 1000,
	round: 1,
	startButton: document.getElementById('btn-start'),
	redButton: {
		dom: document.getElementById('btnred'),
		keyVal: 'a'
	},
	blueButton: {
		dom: document.getElementById('btnblue'),
		keyVal: 's'
	},
	greenButton: {
		dom: document.getElementById('btngreen'),
		keyVal: 'd'
	},
	yellowButton: {
		dom: document.getElementById('btnyellow'),
		keyVal: 'f'
	},
	purpleButton: {
		dom: document.getElementById('btnpurple'),
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
