document.addEventListener('DOMContentLoaded', () => {
  const ball = document.querySelector('.js-nigeru');
  ball.style.transitionTimingFunction = 'ease-in-out';
  ball.style.transitionDuration = '0.2s';

  ball.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - ball.clientWidth);
    const y = Math.random() * (window.innerHeight - ball.clientHeight);
    ball.style.transform = `translate(${x}px, ${y}px)`;
  });
  ball.addEventListener('click', () => {
    alert('GET!');
  });
});
