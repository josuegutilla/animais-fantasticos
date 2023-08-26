import outsideClick from './outsideclick.js';

export default function initMenuMobile() { };

const button = document.querySelector('[data-menu="button"]');
const list = document.querySelector('#menu');

function openMenu(event) {
  list.classList.add('ativo');
  button.classList.add('ativo');
  outsideClick(list, () => {
    list.classList.remove('ativo');
    button.classList.remove('ativo');
  });
};

button.addEventListener('click', openMenu);