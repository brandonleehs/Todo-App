import View from './View';
import ModalEvent from '../events/ModalEvent';

export default class Modal extends View {
  _modalEvent;

  constructor(controller, id) {
    super();
    this._modalEvent = new ModalEvent(controller, id);
  }

  render(type) {
    const body = document.querySelector('body');
    body.appendChild(this._createContent(type));
    this._createContent(type);

    this._modalEvent.bindEventAll();

    const modal = document.querySelector('.modal');
    modal.showModal();
  }

  _createContent(type) {
    switch (type) {
      case 'project':
        return this._createProject();
      case 'task':
        return this._createTask();
      default:
        throw new Error('UNDEFINED TYPE');
    }
  }

  _createProject() {
    throw new Error("Method '_createProject()' must be implemented.");
  }

  _createTask() {
    throw new Error("Method '_createTask()' must be implemented.");
  }

  _checkValidation() {
    const selectors = `.modal__form [id*="title"]`;
    const values = Array.from(document.querySelectorAll(selectors)).map(
      (el) => el.value
    );

    for (const value of values) {
      if (!value) return false;
    }
    return true;
  }

  _getCurrentDate() {
    return new Date().toISOString().split('T')[0];
  }
}
