'use strict';
let current;
let currentBody;
let tabButton;
let tabContent = document.querySelectorAll('div');

const switchTab = (event) => {

  current.classList.remove('selected');
  current = event.target;
  current.classList.add('selected');
  currentBody.classList.toggle('hidden');

  switch (current.textContent) {
    case 'one':
      currentBody = tabContent[0];
      break;
    case 'two':
      currentBody = tabContent[1];
      break;
    case 'three':
      currentBody = tabContent[2];
      break;
  }

  currentBody.classList.toggle('hidden');
};

const tabs = (node) => {
  let tabLength = node.children.length;

  for (let i = 0; i < tabLength; i++) {
    tabButton = document.createElement('button');
    tabButton.textContent = document.querySelectorAll('div')[i].getAttribute(
        'data-tabname');
    node.querySelectorAll('div')[i].classList.add('hidden');
    tabButton.addEventListener('click', switchTab);
    node.insertBefore(tabButton, document.querySelector('div'));
  }

  current = document.querySelector('button');
  current.classList.add('selected');

  currentBody = document.querySelector('div');
  currentBody.classList.toggle('hidden');

};

tabs(document.querySelector('tab-panel'));