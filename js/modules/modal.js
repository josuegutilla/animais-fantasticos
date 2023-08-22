export default function initModal() {
  const buttonOpen = document.querySelector('[data-modal="abrir"]');
  const buttonClose = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  if (buttonOpen && buttonClose && modalContainer) {
    function openModal(event) {
      event.preventDefault();
      modalContainer.classList.add('ativo');
    };

    function closeModal(event) {
      event.preventDefault();
      modalContainer.classList.remove('ativo');
    }

    function outsideClickModal(event) {
      if (event.target === this) {
        closeModal(event);
      };
    };

    buttonOpen.addEventListener('click', openModal);
    buttonClose.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', outsideClickModal);
  };
};