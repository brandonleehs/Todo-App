import ViewEvent from './ViewEvent';

export default class ToggleEvent extends ViewEvent {
  constructor(controller) {
    super(controller);
  }

  bindEventAll() {
    this.#bindToggle();
  }

  #bindToggle() {
    const body = document.querySelector('body');
    const toggle = document.getElementById('mode-toggle');

    toggle.addEventListener('change', () =>
      body.classList.toggle('dark-theme')
    );
  }
}
