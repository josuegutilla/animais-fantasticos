export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const valores = +numero.innerText;
      const total = Math.floor(valores / 100);
      let start = 0;

      const temporizador = setInterval(() => {
        start += total;
        numero.innerText = start;
        if (start > valores) {
          numero.innerText = valores;
          clearInterval(temporizador);
        }
      }, 25 * Math.random());
    });
  }

  let observador;
  function handleObserver(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observador.disconnect();
      animaNumeros();
    }
  }
  observador = new MutationObserver(handleObserver);

  const observerTarget = document.querySelector('.numeros');

  observador.observe(observerTarget, { attributes: true });
}
