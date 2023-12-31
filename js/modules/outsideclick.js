export default function outsideClick(element, callback) {
  const html = document.documentElement;

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute('data-outside', '');
      html.removeEventListener('click', handleOutsideClick);
      callback();
    }
  }

  if (!element.hasAttribute('data-outside')) {
    setTimeout(() => {
      html.addEventListener('click', handleOutsideClick);
    });
    element.setAttribute('data-outside', '');
  }
}
