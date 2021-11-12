'use strict';
let zero = 0;
let div = [];
let i = 0;

for (i; i < 10; i++) {
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