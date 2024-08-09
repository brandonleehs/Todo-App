import BodyEvent from './events/BodyEvent';
import Home from './views/Home.js';
import NavbarEvent from './events/NavbarEvent';
import ToggleEvent from './events/ToggleEvent';
import DBManager from './DBManager.js';
import Project from './models/Project.js';
import Task from './models/Task.js';
import WindowEvent from './events/WindowEvent.js';
import Inbox from './views/Inbox.js';
import About from './views/About.js';
import Contact from './views/Contact.js';

export default class Controller {
  #viewsMap;
  #currentView;

  constructor() {
    this.#viewsMap = new Map();
    const home = new Home(this);
    const inbox = new Inbox(this);
    const about = new About();
    const contact = new Contact(this);
    this.#viewsMap.set('home', home);
    this.#viewsMap.set('inbox', inbox);
    this.#viewsMap.set('about', about);
    this.#viewsMap.set('contact', contact);
    this.#renderDefault();
    this.#enableTransitions();
  }

  #renderDefault() {
    this.#currentView = this.#viewsMap.get('home');
    this.#currentView.render();
    new WindowEvent(this).bindEventAll();
    new NavbarEvent(this).bindEventAll();
    new BodyEvent(this).bindEventAll();
    new ToggleEvent(this).bindEventAll();

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.querySelector('body').classList.add('dark-theme');
    }
    // To be removed after adding a way to clear projects
    DBManager.clear();
    this.#seed();
  }

  #seed() {
    const projects = DBManager.read('projects');
    if (!projects) {
      DBManager.write('projects', [
        new Project(
          'General',
          `The "General" project within the todo-app serves as a default or catch-all category for tasks that do not fit into specific projects. This project is ideal for miscellaneous tasks, daily reminders, or any activities that require tracking but are not associated with a particular project. By including a "General" project, users can ensure that all tasks have a designated place, promoting better organization and task management.`
        ),
      ]);
      DBManager.write('tasks', [
        new Task(
          DBManager.read('projects')[0].id,
          'Grocery Shopping',
          `${new Date().toISOString().split('T')[0]}`,
          'medium',
          "Buy groceries for the week, including fruits, vegetables, dairy products, and household essentials. Don't forget to check for any special offers or discounts."
        ),
      ]);
    }
  }

  refreshContent() {
    const body = document.querySelector('body');
    const main = document.querySelector('main');

    main.replaceChildren('');
    body.classList.remove('body--inbox');
    body.classList.remove('body--toggle');
  }

  #enableTransitions() {
    window.addEventListener('load', function () {
      const body = document.querySelector('body');
      // Only enable transition upon page load
      body.classList.remove('no-transition');
    });
  }

  set currentView(view) {
    this.#currentView = view;
  }

  get currentView() {
    return this.#currentView;
  }
  get viewsMap() {
    return this.#viewsMap;
  }
}
