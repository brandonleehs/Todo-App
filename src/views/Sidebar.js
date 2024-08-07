import View from './View';
import SidebarEvent from '../events/SidebarEvent';
import DBManager from '../DBManager';

export default class Sidebar extends View {
  #sidebarEvent;

  constructor(controller) {
    super();
    this.#sidebarEvent = new SidebarEvent(controller);
  }

  render() {
    this._main.appendChild(this.#createContent());
    this.#populate();
    this.#sidebarEvent.bindEventAll();
  }

  #populate() {
    const projects = DBManager.read('projects');
    const tasks = DBManager.read('tasks');

    for (const project of projects) {
      const sidebarProjects = document.querySelector('.sidebar__projects');
      const li = document.createElement('li');

      li.textContent = project.title;
      li.setAttribute('data-id', project.id);
      sidebarProjects.appendChild(li);
    }

    for (const task of tasks) {
      const sidebarTasks = document.querySelector('.sidebar__tasks');
      const sidebarLi = document.createElement('li');

      sidebarLi.textContent = task.title;
      sidebarLi.setAttribute('data-id', task.id);
      sidebarTasks.appendChild(sidebarLi);
    }
  }

  #createContent() {
    const section = document.createElement('section');
    section.innerHTML = `<button type="button" class="sidebar__toggle">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
    </svg>
</button>
<aside class="sidebar hide">
    <div class="sidebar__content">
        <button type="button" class="sidebar__close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg></button>
        <p class="sidebar__title">TaskTrack</p>
        <div class="sidebar__add">
            <button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>Add task</button>
            <button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>Add project</button>
        </div>
        <ul class="sidebar__projects">
            <p class="sidebar__projects-title">Projects</p>
        </ul>
        <ul class="sidebar__tasks">
            <p class="sidebar__tasks-title">Tasks</p>
        </ul>
    </div>
</aside>`;
    return section;
  }
}
