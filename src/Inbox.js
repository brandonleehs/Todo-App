import DBManager from "./DBManager.js";
import Event from "./Event.js";

export default class Inbox {
    #controller;

    constructor(controller) {
        this.#controller = controller;
        this.#getDim();
        window.addEventListener("resize", this.#getDim);

        Event.on("itemChanged", () => {
            this.#controller.refreshContent();
            this.render();
        });
    }

    render() {
        // body--inbox class localises transition to only inbox page
        const body = document.querySelector("body");
        body.classList.add("body--inbox");

        const main = document.querySelector("main");
        main.appendChild(this.#createContent());
        this.#populate();

        this.#bindEvents();
        if (window.vw > 992) {
            document.querySelector(".sidebar__toggle").click();
        }
    }

    #getDim() {
        window.vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        window.vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    };

    #bindEvents() {
        const self = this;
        const body = document.querySelector("body");
        const toggleButton = document.querySelector(".sidebar__toggle");
        const closeButton = document.querySelector(".sidebar__close");
        const sidebar = document.querySelector(".sidebar");
        const [addTaskButton, addProjectButton] = document.querySelectorAll(".sidebar__add button");
        const checkButtonList = document.querySelectorAll(".inbox__check");
        const infoButtonList = document.querySelectorAll(".inbox__info");
        const deleteButtonList = document.querySelectorAll(".inbox__delete");

        toggleButton.addEventListener("click", function (e) {
            body.classList.toggle("body--toggle");
            sidebar.classList.toggle("hide");
        });
        closeButton.addEventListener("click", function () {
            body.classList.remove("body--toggle");
            sidebar.classList.add("hide");
        });

        addTaskButton.addEventListener("click", function () {
            self.#controller.modal.render("task");
            if (window.vw <= 992) {
                sidebar.classList.add("hide");
                body.classList.remove("body--toggle");
            }
        });

        addProjectButton.addEventListener("click", function () {
            self.#controller.modal.render("project");
            if (window.vw <= 992) {
                sidebar.classList.add("hide");
                body.classList.remove("body--toggle");
            }
        });

        for (const checkButton of checkButtonList) {
            checkButton.addEventListener("click", function () {
                checkButton.nextElementSibling.classList.toggle("checked");
            });
        }

        for (const deleteButton of deleteButtonList) {
            deleteButton.addEventListener("click", function () {
                const id = deleteButton.parentNode.parentNode.getAttribute("data-id");

                DBManager.deleteById(id);
                Event.emit("itemChanged");
            });
        }

        for (const infoButton of infoButtonList) {
            infoButton.addEventListener("click", function () {
                const id = infoButton.parentNode.parentNode.getAttribute("data-id");

                self.#controller.modal.render("task", id);
                if (window.vw <= 992) {
                    sidebar.classList.add("hide");
                    body.classList.remove("body--toggle");
                }
            });
        }
    }

    #populate() {
        const projects = DBManager.read("projects");
        for (const project of projects) {
            const sidebarProjects = document.querySelector(".sidebar__projects");
            const inboxProject = document.querySelector(".inbox__project");
            const p = document.createElement("p");
            const li = document.createElement("li");

            li.textContent = project.title;
            p.className = "inbox__project-title";
            p.textContent = project.title;
            p.setAttribute("data-id", project.id);
            sidebarProjects.appendChild(li);
            inboxProject.appendChild(p);
        }

        const tasks = DBManager.read("tasks");

        `<ul class="sidebar__tasks">
                <p class="sidebar__tasks-title">Tasks</p>
            </ul>`;

        for (const task of tasks) {
            const sidebarTasks = document.querySelector(".sidebar__tasks");
            const sidebarLi = document.createElement("li");

            sidebarLi.textContent = task.title;
            sidebarTasks.appendChild(sidebarLi);

            const inboxLi = document.createElement("li");

            inboxLi.className = "inbox__task";
            inboxLi.setAttribute("data-id", task.id);
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

            const div = document.createElement("div");
            div.className = "flex-wrap";
            div.innerHTML = `<input type="checkbox" class="inbox__check"/>`;
            const span = document.createElement("span");
            span.textContent = task.title;
            div.appendChild(span);
            inboxLi.insertBefore(div, inboxLi.firstChild);
            document.querySelector(`[data-id="${task.project}"]`).insertAdjacentElement("afterend", inboxLi);
        }
    }

    #createContent() {
        const sidebarHTML = `<button type="button" class="sidebar__toggle">
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
    </aside>`
        const inbox = document.createElement("section");
        inbox.className = "inbox";
        inbox.innerHTML = `<ul class="inbox__project"></ul>`;
        inbox.insertAdjacentHTML("afterbegin", sidebarHTML);
        return inbox;
    }

}