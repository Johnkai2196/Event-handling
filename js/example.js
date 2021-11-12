'use strict';
const link = document.querySelector('#link');

link.addEventListener('click', (evt) => {
  alert('link has been click');
  evt.preventDefault();
});

const sayHello = () => {
  alert('Hello');
};

link.addEventListener('mouseover', sayHello);


