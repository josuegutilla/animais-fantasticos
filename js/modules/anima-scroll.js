export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  function animateSection() {
    const halfPage = window.innerHeight * 0.7;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - halfPage;
      if (sectionTop < 0) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    sections[0].classList.add('ativo');
    window.addEventListener('scroll', animateSection);
  }
}
