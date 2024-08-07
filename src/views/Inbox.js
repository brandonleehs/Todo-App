import InboxEvent from '../events/InboxEvent';
import View from './View';
import Sidebar from './Sidebar';
import DBManager from '../DBManager';
import Event from '../events/Event';

export default class Inbox extends View {
  #sidebar;
  #inboxEvent;

  constructor(controller) {
    super();
    this.#sidebar = new Sidebar(controller);
    this.#inboxEvent = new InboxEvent(controller);

    Event.on('itemChanged', () => {
      controller.refreshContent();
      this.render();
    });
  }

  render() {
    // body--inbox class localises transition to only inbox page
    const body = document.querySelector('body');
    body.classList.add('body--inbox');

    this.#sidebar.render();
    this._main.appendChild(this.#createContent());
    this.#populate();

    this.#inboxEvent.bindEventAll();
    if (window.vw > 992) {
      document.querySelector('.sidebar__toggle').click();
    }
  }

  #populate() {
    const projects = DBManager.read('projects');
    const tasks = DBManager.read('tasks');

    for (const project of projects) {
      const inboxProject = document.querySelector('.inbox__project');
      const p = document.createElement('p');

      p.className = 'inbox__project-title';
      p.textContent = project.title;
      p.setAttribute('data-id', project.id);
      inboxProject.appendChild(p);
    }

    for (const task of tasks) {
      const inboxLi = document.createElement('li');

      inboxLi.className = `inbox__task inbox__task--priority-${task.priority}`;
      inboxLi.setAttribute('data-id', task.id);
      inboxLi.innerHTML = `
<div class="inbox__buttons">
                <button type="button" class="inbox__info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path
                d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg></button><button type="button" class="inbox__delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></button>
            </div>`;

      const div = document.createElement('div');
      div.className = 'flex-wrap';
      div.innerHTML = `<input type="checkbox" class="inbox__check"/>`;
      const span = document.createElement('span');
      span.textContent = task.title;
      div.appendChild(span);
      inboxLi.insertBefore(div, inboxLi.firstChild);
      document
        .querySelector(`.inbox__project [data-id="${task.projectId}"]`)
        .insertAdjacentElement('afterend', inboxLi);
    }
  }

  #createContent() {
    const inbox = document.createElement('section');
    inbox.className = 'inbox';
    inbox.innerHTML = `<ul class="inbox__project"></ul>`;
    return inbox;
  }
}
