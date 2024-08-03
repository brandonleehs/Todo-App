export default class Inbox {
    #body;
    #main;
    #toggleButton;
    #closeButton;
    #sidebar;

    constructor() {
        this.#body = document.querySelector("body");
        this.#main = document.querySelector("main");
        this.#getDim();
        window.addEventListener("resize", this.#getDim);
    }

    render() {
        this.#main.appendChild(this.#createContent());
        this.#toggleButton = document.querySelector(".sidebar__toggle");
        this.#closeButton = document.querySelector(".sidebar__close");
        this.#sidebar = document.querySelector(".sidebar");
        this.#addEventListeners();
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
                <li>General</li>
            </ul>
            <ul class="sidebar__tasks">
                <p class="sidebar__tasks-title">Tasks</p>
            </ul>
        </div>
    </aside>`
        const inbox = document.createElement("section");
        inbox.className = "inbox";
        inbox.innerHTML = `<ul class="inbox__project">
                <p class="inbox__project-title">General</p>
                <li class="inbox__task">
                    <button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path
                                d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                        </svg></button>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet vitae culpa vel libero,
                </li>
            </ul>`;
        inbox.insertAdjacentHTML("afterbegin", sidebarHTML);
        return inbox;
    }

    #getDim() {
        window.vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        window.vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    };

    #addEventListeners() {
        const self = this; // allows us to call the class instance without using fat arrow function
        self.#toggleButton.addEventListener("click", function (e) {
            self.#body.classList.toggle("body--toggle");
            self.#sidebar.classList.toggle("hide");
        });
        self.#closeButton.addEventListener("click", function () {
            self.#body.classList.remove("body--toggle");
            self.#sidebar.classList.add("hide");
        });
        self.#body.addEventListener("click", function (e) {
            if (window.vw <= 992 && self.#body.classList.contains("body--toggle") && !self.#sidebar.contains(e.target)) {
                self.#body.classList.remove("body--toggle");
                self.#sidebar.classList.add("hide");
                e.stopPropagation();
            }
        }, { capture: true });
    }

}