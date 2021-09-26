'use strict'

const board = document.querySelector('#board');
const colours = ['#e71c3c', '#8e42ad', '#3498dd', '#e67e21', '#2ecc70', '#c600eb'];
const SUARES_NUMBER = 810;

for (let i = 0; i < SUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => {
		if (!square.classList.contains('clicked')) {
			setColour(square)
		}
	})

	square.addEventListener('mouseleave', () => {
		if (!square.classList.contains('clicked')) {
			removeColour(square)
		}
	})

	square.addEventListener('click', () => {
		setColour(square);
		square.classList.toggle('clicked');
	})

	board.append(square);
}

function setColour(element) {
	let colour = getRandomColour()
	element.style.backgroundColor = colour;
	element.style.boxShadow = `0 0 50px ${colour}, 0 0 10px ${colour}`
}

function removeColour(element) {
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = `0 0 2px #000`

}

function getRandomColour() {
	const index = Math.floor(Math.random() * colours.length);
	return colours[index];
}