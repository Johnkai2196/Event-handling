'use strict';
let id = document.getElementById('pop');
let size;

window.addEventListener('keydown', () => {
  if (!(parseInt(size) == 100)) {
    size = document.getElementById('pop').style.fontSize;
    if (event.key == 'ArrowUp') {

      let test = parseInt(size) + 10;
      document.getElementById('pop').style.fontSize = test + 'px';
    }
    if (event.key == 'ArrowDown') {
      let test = parseInt(size) - 10;
      document.getElementById('pop').style.fontSize = test + 'px';
    }
  } else {
    id.textContent = '💥';
    event.preventDefault();
  }
});