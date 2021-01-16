let mySetBallOne = new Set();
let counter = 0;
const elBallOne = document.querySelectorAll('.ballOne')[0];

function ballOneFillArr({ clientX, clientY }) {
      mySetBallOne.add({ clientX, clientY });
}

function moveBallOne() {
      const arr = [...mySetBallOne];
      const item = arr[counter]
      if (arr.length > 0 && item) {
            const { clientX, clientY} = item;
            elBallOne.style.setProperty('--top-ballOne', `${clientY}px`);
            elBallOne.style.setProperty('--left-ballOne', `${clientX}px`);
            counter += 1;
      }
}


const timer = setInterval(function timerFn() {
      moveBallOne();
}, 30);