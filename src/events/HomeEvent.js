import ViewEvent from './ViewEvent';

export default class HomeEvent extends ViewEvent {
  constructor(controller) {
    super(controller);
  }
  bindEventAll() {
    this.#bindStartButton();
  }

  #bindStartButton() {
    document.querySelector('.home__start').addEventListener('click', () => {
      const controller = this._controller;
      const inbox = controller.viewsMap.get('inbox');
      controller.refreshContent();
      controller.inbox.render();
      controller.currentView = inbox;
    });
  }
}
