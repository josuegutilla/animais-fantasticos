export default function initScrollSuave() {
  const links = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  if (links.length) {
    const links = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function onScrollSuave(event) {
      event.preventDefault();
      const href = event.target.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    };

    links.forEach((link) => {
      link.addEventListener('click', onScrollSuave)
    });
  };
};