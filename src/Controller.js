import DBManager from "./DBManager.js";
import Home from "./Home.js";
import Inbox from "./Inbox.js";
import Project from "./Project.js";
import Task from "./Task.js";
import Modal from "./Modal.js";

export default class Controller {
    #currentView;
    #viewsMap;
    #home;
    #inbox;
    #modal;

    constructor() {
        const homeLink = document.querySelector(".navbar__title");
        const inboxLink = document.querySelector(".navbar__inbox");
        this.#modal = new Modal(this);
        this.#home = new Home(this);
        this.#inbox = new Inbox(this);
        this.#viewsMap = new Map();
        this.#viewsMap.set(homeLink, this.#home);
        this.#viewsMap.set(inboxLink, this.#inbox);

        this.#renderDefault();
        this.#enableTransitions();
    }

    #renderDefault() {
        this.#currentView = this.#home;
        this.#currentView.render();
        this.#bindEvents();

        this.#seed();
    }

    #seed() {
        const projects = DBManager.read("projects");
        if (!projects) {
            DBManager.write("projects", [
                new Project("General", `The "General" project within the todo-app serves as a default or catch-all category for tasks that do not fit into specific projects. This project is ideal for miscellaneous tasks, daily reminders, or any activities that require tracking but are not associated with a particular project. By including a "General" project, users can ensure that all tasks have a designated place, promoting better organization and task management.`)
            ]);
            DBManager.write("tasks", [
                new Task(
                    DBManager.read("projects")[0].id,
                    "Grocery Shopping",
                    "2024-08-03",
                    "medium",
                    "Buy groceries for the week, including fruits, vegetables, dairy products, and household essentials. Don't forget to check for any special offers or discounts.",
                )
            ]);
        }
    }

    #bindEvents() {
        const body = document.querySelector("body");
        for (const [link, view] of this.#viewsMap) {
            link.addEventListener("click", () => {
                if (this.#currentView != view) {
                    this.refreshContent();
                    view.render();
                    this.#currentView = view;
                }
            });
        }

        body.addEventListener("click", e => {
            const body = document.querySelector("body");
            const sidebar = document.querySelector(".sidebar");

            if (window.vw <= 992 && body.classList.contains("body--toggle") && !sidebar.contains(e.target)) {
                body.classList.remove("body--toggle");
                sidebar.classList.add("hide");
                e.stopPropagation();
            }
        }, { capture: true });
    }

    refreshContent() {
        const body = document.querySelector("body");
        const main = document.querySelector("main");
        main.replaceChildren("");
        body.classList.remove("body--inbox");
        body.classList.remove("body--toggle");
    }

    #enableTransitions() {
        window.addEventListener("load", function () {
            const body = document.querySelector("body");
            // Only enable transition upon page load
            body.classList.remove("no-transition");
        });
    }

    get home() {
        return this.#home;
    }
    get inbox() {
        return this.#inbox;
    }

    get modal() {
        return this.#modal;
    }

    get currentView() {
        return this.#currentView;
    }
}