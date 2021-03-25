(function() {
  const hands = ['hour-hand', 'min-hand', 'second-hand'];
  const clock = document.querySelector('.clock-face');

  hands.forEach(hand => {
    clock.innerHTML += `<div class="hand ${hand}"></div>`;
  })

  setInterval(setDate, 1000);
})();

function setDate() {
  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const seconds = now.getSeconds();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minsDegrees = ((mins / 60) * 360) + (( seconds / 60 ) * 6) + 90;
  const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;

  const degrees = [hoursDegrees, minsDegrees, secondsDegrees];
  const handList = document.querySelectorAll('.hand');

  Object.values(handList).map((hand, index) => hand.style.transform = `rotate(${degrees[index]}deg)`);
}
