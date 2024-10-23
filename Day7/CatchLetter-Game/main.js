class Letter {
    constructor() {
        this.letter = document.createElement('div');
        this.letter.classList.add('letter');
        document.querySelector('.container').appendChild(this.letter);
        this.axisX = 0;
        this.axisY = 0;
        this.letterFall();
    }
    letterFall() {
        this.axisY += 10;
        this.letter.style.top = `${this.axisY}px)`;
    }
}
for (let i = 0; i < 10; i++) {
    const fall = new Letter();
    fall.letterFall();
}

class Catcher {
    constructor() {
        this.catcher = document.querySelector('.catcher');
        this.axisX = 0;
        this.updatePosition();
    }
    updatePosition() {
        this.catcher.style.transform = `translateX(${this.axisX}px)`;
    }
    moveLeft() {
        this.axisX -= 10;
        this.updatePosition();
    }
    moveRight() {
        this.axisX += 10;
        this.updatePosition();
    }
}
const catchLeter = new Catcher();
document.addEventListener('keydown', (event) => {
   if (event.key === 'ArrowRight') {
        catchLeter.moveRight();
   } else if (event.key === 'ArrowLeft') {
       catchLeter.moveLeft();
   }
});