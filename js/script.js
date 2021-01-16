const screenWidth = document.documentElement.clientWidth;
const screenHeight = document.documentElement.clientHeight;

function toggleBgColor(event) {
      const element = document.getElementsByClassName('parallelogram')[0];
      if (event === 'over') {
            element.classList.add('change-bgcolor');
            element.style.setProperty('--visibility', 'none');
      } else if (event === 'out') {
            element.classList.remove('change-bgcolor');
            element.style.setProperty('--visibility', 'block');
      }
};

function mouseMoveHandler(event) {
      const { clientX, clientY } = event;
      parallax({ clientX, clientY });
      ballOneFillArr({ clientX, clientY });
}

document.addEventListener('mousemove', mouseMoveHandler);

