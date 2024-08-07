import ViewEvent from './ViewEvent';

export default class HomeEvent extends ViewEvent {
  constructor(controller) {
    super(controller);
    this.#getDim();
  }
  bindEventAll() {
    this.#bindWindowResize();
  }

  #bindWindowResize() {
    window.addEventListener('resize', this.#getDim);
  }

  #getDim() {
    window.vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    window.vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
  }
}
