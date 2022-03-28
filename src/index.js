import { game } from './views/game.js';
let boardArr = [ game.redButton, game.blueButton, game.greenButton, game.yellowButton, game.purpleButton ];
let btnred, btnblue, btngreen, btnyellow, btnpurple;

// Selects which button will light up next and adds it to "Simon's" board
const generateRandom = () => {
	let choice = Math.floor(Math.random() * Math.floor(5));
	let gameChoice = boardArr[choice];
	game.gameDomArr.push(gameChoice);
	game.simonArr.push(gameChoice.id);
};

// Start game
const gamePlay = () => {
	let choice = game.gameDomArr[game.simonCount];
	choice.classList.add('light');
	eval(choice.id).currentTime = 0;
	eval(choice.id).play();
	setTimeout(() => {
		choice.classList.remove('light');
	}, 250);
	game.simonCount++;
	if (game.simonCount == game.gameDomArr.length) {
		clearInterval(game.runState);
	}
};

// Checks if guess what correct
const compare = () => {
	for (let i = 0; i < game.simonArr.length; i++) {
		// Compares user's guess list with "Simon's" list
		if (game.simonArr[i] !== game.playerArr[i]) {
			game.popup.style.display = 'block';
			game.popup.innerHTML = `
			<p class="final">FINAL SCORE: ${game.round - 1}</p>
			<button id="reload">PLAY AGAIN</button>`;
			document.getElementById('reload').addEventListener('click', () => {
				location.reload();
			});
			game.gameOver = true;
			clearInterval(game.runState);
			return;
		} else {
			game.playerArr = [];
			game.simonCount = 0;
			game.playerCount = 0;
			generateRandom();
			// Score is determined by which round it is
			game.round++;
			game.status.textContent = `Round: ${game.round}`;
			if (game.round <= 4) {
				game.speed = 800;
			} else if (game.round >= 5 && game.round < 9) {
				game.speed = 500;
			} else if (game.round >= 9 && game.round < 13) {
				game.speed = 300;
			} else {
				game.speed = 100;
			}
			setTimeout(() => {
				game.runState = setInterval(gamePlay, game.speed);
			}, 1000);
			return;
		}
	}
};

// Sounds and event listeners for when user clicks button
game.startButton.addEventListener('click', () => {
	if (game.gameOver) {
		btnred = new Audio('https://eroberts.dev/not-simon/src/sounds/a3.mp3');
		btnred.crossOrigin = 'anonymous';
		btnblue = new Audio('https://eroberts.dev/not-simon/src/sounds/c3.mp3');
		btnblue.crossOrigin = 'anonymous';
		btngreen = new Audio('https://eroberts.dev/not-simon/src/sounds/d3.mp3');
		btngreen.crossOrigin = 'anonymous';
		btnyellow = new Audio('https://eroberts.dev/not-simon/src/sounds/e3.mp3');
		btnyellow.crossOrigin = 'anonymous';
		btnpurple = new Audio('https://eroberts.dev/not-simon/src/sounds/f3.mp3');
		btnpurple.crossOrigin = 'anonymous';
		game.gameOver = false;
		game.status.textContent = `Round: ${game.round}`;
		game.startButton.textContent = 'End Game';
		game.simonCount = 0;
		game.playerCount = 0;
		game.round = 1;
		clearInterval(game.runState);
		generateRandom();
		setTimeout(() => {
			game.runState = setInterval(gamePlay, game.speed);
		}, 1000);
	} else {
		game.gameOver = true;
		game.popup.style.display = 'block';
		game.popup.innerHTML = `
				<p class="final">FINAL SCORE: ${game.round - 1}</p>
				<button id="reload">PLAY AGAIN</button>`;
		document.getElementById('reload').addEventListener('click', () => {
			location.reload();
		});
		clearInterval(game.runState);
	}
});

// Add click event listeners to all buttons on load
for (let btn of boardArr) {
	btn.addEventListener('click', () => {
		if (!game.gameOver) {
			game.playerArr.push(btn.id);
			eval(btn.id).currentTime = 0;
			eval(btn.id).play();
			if (game.simonArr[game.playerCount] != game.playerArr[game.playerCount]) {
				game.popup.style.display = 'block';
				game.popup.innerHTML = `
				<p class="final">FINAL SCORE: ${game.round - 1}</p>
				<button id="reload">PLAY AGAIN</button>`;
				document.getElementById('reload').addEventListener('click', () => {
					location.reload();
				});
				game.gameOver = true;
				clearInterval(game.runState);
				return;
			}
			game.playerCount++;
			if (game.playerArr.length == game.simonArr.length) {
				compare();
			}
		}
	});
}
