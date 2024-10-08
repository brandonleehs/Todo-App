import ViewEvent from './ViewEvent';
import DBManager from '../DBManager';
import EditModal from '../views/EditModal';
import Event from './Event';

export default class InboxEvent extends ViewEvent {
  constructor(controller) {
    super(controller);
  }

  bindEventAll() {
    this.#bindCheckButton();
    this.#bindDeleteButton();
    this.#bindInfoButton();
  }

  #bindCheckButton() {
    const checkButtonList = document.querySelectorAll('.inbox__check');

    for (const checkButton of checkButtonList) {
      checkButton.addEventListener('click', () => {
        checkButton.nextElementSibling.classList.toggle('checked');
      });
    }
  }

  #bindDeleteButton() {
    const deleteButtonList = document.querySelectorAll(
      `.inbox__project [class*='__delete']`
    );

    for (const deleteButton of deleteButtonList) {
      deleteButton.addEventListener('click', () => {
        const id = deleteButton.parentNode.parentNode.getAttribute('data-id');
        if (!DBManager.readById(id).projectId) {
          DBManager.read('tasks').forEach((task) => {
            if (task.projectId === id) {
              DBManager.deleteById(task.id);
            }
          });
        }
        DBManager.deleteById(id);
        Event.emit('itemChanged');
      });
    }
  }

  #bindInfoButton() {
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');
    const infoButtonList = document.querySelectorAll(
      `.inbox__project [class*='__info']`
    );

    for (const infoButton of infoButtonList) {
      infoButton.addEventListener('click', () => {
        const id = infoButton.parentNode.parentNode.getAttribute('data-id');

        const modal = new EditModal(this._controller, id);
        if (DBManager.readById(id).projectId) {
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
