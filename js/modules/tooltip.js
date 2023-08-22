export default function initTooltip() {
  const tooltip = document.querySelectorAll('[data-tooltip]');

  if (tooltip.length) {
    tooltip.forEach((item) => {
      item.addEventListener('mouseover', onMouseoverTooltip);
    });

    function onMouseoverTooltip() {
      const tooltipBox = createTooltip(this);

      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener('mousemove', onMouseMove);

      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      this.addEventListener('mouseleave', onMouseLeave);
    }

    const onMouseMove = {
      tooltipBox: '',
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + 'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
      }
    }

    const onMouseLeave = {
      tooltipBox: '',
      element: '',
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
      }
    }

    function createTooltip(element) {
      const tooltipBox = document.createElement('div');
      const text = element.getAttribute('aria-label');
      tooltipBox.innerText = text;
      tooltipBox.classList.add('tooltip');
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }
  }
}