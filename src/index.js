'use strict';

const dice = document.querySelector('.dice-button');
const diceResult = document.querySelector('.dice-result');
dice.addEventListener('click', render);

/* initialize */
dice.innerHTML = createDotHtml('dot-center');
diceResult.innerHTML = 1;

function render() {
    dice.innerHTML = createDiceHtml();
    if (diceResult.textContent.charAt(diceResult.textContent.length - 1) === '.') {
        diceResult.innerHTML = dice.children.length;
    } else {
        diceResult.innerHTML = `${dice.children.length}.`;
    }
}

function createDiceHtml() {
    const dice = createRandomDice();
    const diceHtml = dice.map(createDotHtml).join("");

    return diceHtml;
}

function createDotHtml(position) {
    return `<div class="dice-dot ${position}"></div>`;
}

function createRandomDice() {
    const randomNumber = 1 + Math.floor(Math.random() * 6);
    
    return createDice(randomNumber);
}

function createDice(number) {
    const dots = [];

    if (number === 1 || number === 3 || number === 5) {
        dots.push(('dot-center'));
    }
    if (number !== 1) {
        dots.push('dot-top-left');
        dots.push('dot-bottom-right');
    }
    if (number === 4 || number === 5 || number === 6) {
        dots.push('dot-top-right');
        dots.push('dot-bottom-left');
    }
    if (number === 6) {
        dots.push('dot-middle-left');
        dots.push('dot-middle-right');
    }

    return dots;
}
