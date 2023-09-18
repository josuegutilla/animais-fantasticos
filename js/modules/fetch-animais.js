import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() { }

function createAnimal(animais) {
  const div = document.createElement('div');
  div.classList.add('numero-animal');
  div.innerHTML = `<h3>${animais.especie}</h3> <span data-numero>${animais.quantidade}</span>`;
  return div;
}

async function fetchAnimais(url) {
  try {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    const animalGrid = document.querySelector('.numeros-grid');
    animaisJSON.forEach((animais) => {
      const animalContent = createAnimal(animais);
      animalGrid.appendChild(animalContent);
    });
    initAnimaNumeros();
  } catch (erro) {
    console.log(erro);
  }
}

fetchAnimais('../../animais.json');
