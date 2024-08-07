import ViewEvent from './ViewEvent';

export default class BodyEvent extends ViewEvent {
  constructor(controller) {
    super(controller);
  }

  bindEventAll() {
    this.#bindBody();
  }

  #bindBody() {
    const body = document.querySelector('body');
    body.addEventListener(
      'click',
      (e) => {
        const sidebar = document.querySelector('.sidebar');

        if (
          window.vw <= 992 &&
          body.classList.contains('body--toggle') &&
          !sidebar.contains(e.target)
        ) {
          body.classList.remove('body--toggle');
          sidebar.classList.add('hide');
          e.stopPropagation();
        }
      },
      { capture: true }
    );
  }
}
