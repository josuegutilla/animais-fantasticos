export default function initTabNav() {
  const imagens = document.querySelectorAll('[data-tab="imagens"] img');
  const descricoes = document.querySelectorAll('[data-tab="descricao"] section');

  function ativarDescricao(index) {
    descricoes.forEach((descricao) => {
      descricao.classList.remove('ativo');
    });
    descricoes[index].classList.add('ativo');
  }

  if (imagens.length && descricoes.length) {
    descricoes[0].classList.add('ativo');

    imagens.forEach((imagem, index) => {
      imagem.addEventListener('click', () => {
        ativarDescricao(index);
      });
    });
  }
}
