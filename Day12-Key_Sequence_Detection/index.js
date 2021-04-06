const pressed = [];
const secretCode = 'test';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  console.log(pressed.join(''));

  // if (pressed.join('') === secretCode) {
  //   console.log('DING DING!');
  //   cornify_add();
  // }
  
  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
    cornify_add();
  }
});
