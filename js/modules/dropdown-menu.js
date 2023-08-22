import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const link = document.querySelectorAll('[data-dropdown]');

  link.forEach((link) => {
    ['touchstart', 'click'].forEach((eventos) => {
      link.addEventListener(eventos, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, () => {
      this.classList.remove('ativo');
    });
  };
};