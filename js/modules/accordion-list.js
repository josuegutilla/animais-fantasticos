export default function initAccordionList() {
  const termos = document.querySelectorAll('[data-anime="accordion"] dt');
  if(termos.length) {
    termos[0].classList.add('ativo');
    termos[0].nextElementSibling.classList.add('ativo');

    function ativarDescricao(event) {
      this.nextElementSibling.classList.toggle('ativo'); //selecionando o elemento de baixo
      this.classList.toggle('ativo');
    };

    termos.forEach((termo) => {
      termo.addEventListener('click', ativarDescricao);
    });
  };
};