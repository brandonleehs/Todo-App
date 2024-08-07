import ViewEvent from './ViewEvent';
import DBManager from '../DBManager';
import CreateModal from '../views/CreateModal';
import ViewModal from '../views/ViewModal';

export default class SidebarEvent extends ViewEvent {
  constructor(controller) {
    super(controller);
  }

  bindEventAll() {
    this.#bindSidebarToggleButton();
    this.#bindSidebarCloseButton();
    this.#bindSidebarAddButton();
    this.#bindSidebarLi();
  }

  #bindSidebarToggleButton() {
    const sidebarToggleButton = document.querySelector('.sidebar__toggle');
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');

    sidebarToggleButton.addEventListener('click', () => {
      body.classList.toggle('body--toggle');
      sidebar.classList.toggle('hide');
    });
  }

  #bindSidebarCloseButton() {
    const sidebarCloseButton = document.querySelector('.sidebar__close');
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');

    sidebarCloseButton.addEventListener('click', () => {
      body.classList.remove('body--toggle');
      sidebar.classList.add('hide');
    });
  }

  #bindSidebarAddButton() {
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');
    const [addTaskButton, addProjectButton] = document.querySelectorAll(
      '.sidebar__add button'
    );

    addTaskButton.addEventListener('click', () => {
      // modal refactor
      const modal = new CreateModal(this._controller);
      modal.render('task');

      if (window.vw <= 992) {
        sidebar.classList.add('hide');
        body.classList.remove('body--toggle');
      }
    });

    addProjectButton.addEventListener('click', () => {
      // modal refactor
      const modal = new CreateModal(this._controller);
      modal.render('project');

      if (window.vw <= 992) {
        sidebar.classList.add('hide');
        body.classList.remove('body--toggle');
      }
    });
  }

  #bindSidebarLi() {
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');
    const sidebarLi = document.querySelectorAll('.sidebar li[data-id]');

    for (const li of sidebarLi) {
      li.addEventListener('click', function () {
        const id = li.getAttribute('data-id');
        const modal = new ViewModal(this._controller, id);

        if (DBManager.readById(id).project) {
          modal.render('task');
        } else {
          modal.render('project');
        }
        if (window.vw <= 992) {
          sidebar.classList.add('hide');
          body.classList.remove('body--toggle');
        }
      });
    }
  }
}
