const element = document.querySelectorAll('.man')[0];

function parallax({ clientX, clientY }) {
      const deltaX = (clientX * 100) / (screenWidth * 100);
      const deltaY = (clientY * 100) / (screenHeight * 100);
      element.style.setProperty('--top-man', `${0 + deltaX}%`);
      element.style.setProperty('--left-man', `${40 + deltaY}%`);
};