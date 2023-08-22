export default function outsideClick(element, callback) {
  const html = document.documentElement;
  if(!element.hasAttribute('data-outside')) {
    html.addEventListener('click', handleOutsideClick);
    element.setAttribute('data-outside', '');
  }

  function handleOutsideClick(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute('data-outside', '');
      html.removeEventListener('click', handleOutsideClick);
      callback();
    };
  };
};