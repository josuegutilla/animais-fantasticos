import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() { }

async function fetchAnimais(url) {
  const animaisResponse = await fetch(url);
  const animaisJSON = await animaisResponse.json();
  const animalGrid = document.querySelector('.numeros-grid');
  animaisJSON.forEach((animais) => {
    const animalContent = createAnimal(animais);
    animalGrid.appendChild(animalContent);
  });
  initAnimaNumeros();
}

function createAnimal(animais) {
  const div = document.createElement('div');
  div.classList.add('numero-animal');
  div.innerHTML = `<h3>${animais.especie}</h3> <span data-numero>${animais.quantidade}</span>`;
  return div;
}

fetchAnimais('../../animais.json');