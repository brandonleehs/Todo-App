import ViewEvent from './ViewEvent';

export default class BodyEvent extends ViewEvent {
  constructor(controller) {
    super(controller);
  }

  bindEventAll() {
    this.#bindBody();
    this.#bindContactLink();
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

  #bindContactLink() {
    const contactLink = document.querySelector('.contact-link');

    contactLink.addEventListener('click', () => {
      const controller = this._controller;
      const contact = controller.viewsMap.get('contact');
      if (controller.currentView != contact) {
        controller.refreshContent();
        contact.render();
        controller.currentView = contact;
      }
    });
  }
}
