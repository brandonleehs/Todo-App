import ViewEvent from './ViewEvent';

export default class NavbarEvent extends ViewEvent {
  constructor(controller) {
    super(controller);
  }

  bindEventAll() {
    this.#bindLinks();
  }

  #bindLinks() {
    const controller = this._controller;
    const homeLink = document.querySelector('.navbar__title');
    const inboxLink = document.querySelector('.navbar__inbox');
    const aboutLink = document.querySelector('.navbar__about');
    const contactLink = document.querySelector('.navbar__contact');

    const { home, inbox, about, contact } = Object.fromEntries(
      controller.viewsMap
    );
    const linkToViewMap = new Map();
    linkToViewMap.set(homeLink, home);
    linkToViewMap.set(inboxLink, inbox);
    // linkToViewMap.set(aboutLink, about);
    // linkToViewMap.set(contactLink, contact);

    for (const [link, view] of linkToViewMap.entries()) {
      link.addEventListener('click', () => {
        if (controller.currentView != view) {
          controller.refreshContent();
          view.render();
          controller.currentView = view;
        }
      });
    }
  }
}
