export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if(sections.length) {
    sections[0].classList.add('ativo');
    const halfPage = window.innerHeight * 0.7;

    function animateSection() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - halfPage;
        if (sectionTop < 0) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    };

    window.addEventListener('scroll', animateSection);
  };
};