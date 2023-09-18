import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const link = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, () => {
      this.classList.remove('ativo');
    });
  }

  link.forEach((links) => {
    ['touchstart', 'click'].forEach((eventos) => {
      links.addEventListener(eventos, handleClick);
    });
  });
}
