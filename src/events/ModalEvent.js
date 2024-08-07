import ViewEvent from './ViewEvent';
import Task from '../models/Task';
import Project from '../models/Project';
import DBManager from '../DBManager';
import Event from './Event';

export default class ModalEvent extends ViewEvent {
  #id;

  constructor(controller, id) {
    super(controller);
    this.#id = id;
  }

  bindEventAll() {
    this.#bindAddButton();
    this.#bindCancelButton();
    this.#bindEscape();
  }

  #bindAddButton() {
    const addButton = document.querySelector('.modal__add');

    addButton &&
      addButton.addEventListener('click', (e) => {
        if (this.#id) DBManager.deleteById(this.#id);
        if (this.#checkValidation()) {
          if (addButton.getAttribute('data-type') === 'task') {
            this.#addTask();
          } else {
            this.#addProject();
          }
          e.preventDefault();
          Event.emit('itemChanged');
          document.querySelector('.blur').remove();
        }
      });
  }

  #bindCancelButton() {
    const cancelButton = document.querySelector('.modal__cancel');

    cancelButton.addEventListener('click', () => {
      document.querySelector('.blur').remove();
    });
  }

  // might need to remove event listener to prevent stacking?
  #bindEscape() {
    document.addEventListener('keydown', ({ key }) => {
      const blur = document.querySelector('.blur');
      if (key === 'Escape' && blur) {
        blur.remove();
      }
    });
  }

  #addProject() {
    const selectors = `.modal__form input,
        .modal__form textarea`;
    const values = Array.from(document.querySelectorAll(selectors)).map(
      (el) => el.value
    );
    const project = new Project(...values);
    const arr = DBManager.read('projects');
    arr.push(project);
    DBManager.write('projects', arr);
  }

  #addTask() {
    const selectors = `.modal__form select, 
        .modal__form input,
        .modal__form textarea`;
    const values = Array.from(document.querySelectorAll(selectors)).map(
      (el) => el.value
    );
    const task = new Task(...values);
    const arr = DBManager.read('tasks');
    arr.push(task);
    DBManager.write('tasks', arr);
  }

  #checkValidation() {
    const selectors = `.modal__form [id*="title"]`;
    const values = Array.from(document.querySelectorAll(selectors)).map(
      (el) => el.value
    );

    for (const value of values) {
      if (!value) return false;
    }
    return true;
  }
}
