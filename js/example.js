'use strict';
const link = document.querySelector('#link');
let id = document.getElementById('pop');
let size;
link.addEventListener('click', (evt) => {
  alert('link has been click');
  evt.preventDefault();
});

const sayHello = () => {
  alert('Hello');
};

link.addEventListener('mouseover', sayHello);

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
