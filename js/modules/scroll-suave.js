export default function initScrollSuave() {
  const links = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function onScrollSuave(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }

  if (links.length) {
    const linkSelecionado = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    linkSelecionado.forEach((link) => {
      link.addEventListener('click', onScrollSuave);
    });
  }
}
