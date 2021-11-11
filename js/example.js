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
let zero = 0;
let div = [];
let i = 0;

for (i; i < 1000; i++) {
  let dot = document.createElement('div');
  dot.className = 'trail';
  document.body.appendChild(dot);
  div.push(dot);
}

window.addEventListener('mousemove', event => {
  let dot = div[zero];
  dot.style.left = (event.pageX - 4) + 'px';
  dot.style.top = (event.pageY - 4) + 'px';
  zero = (zero + 1) % div.length;
});