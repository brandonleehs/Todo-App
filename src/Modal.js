import DBManager from "./DBManager.js";
import Task from "./Task.js";
import Project from "./Project.js";
import Event from "./Event.js";

export default class Modal {
    #body;
    #controller;
    #date;

    constructor(controller) {
        this.#date = this.#getCurrentDate();
        this.#controller = controller;
        this.#body = document.querySelector("body");
    }

    render(type, id, view) {
        this.#body.appendChild(this.#createContent(type, id, view));
        const item = DBManager.getId(id);
        if (id && item.priority) {
            const selected = document.querySelector(`#priority option[value="${item.priority}"]`);
            selected.setAttribute("selected", "");

        }
        this.#bindEvents(type, id);
        const modal = document.querySelector(".modal");
        modal.showModal();
    }

    #bindEvents(type, id) {
        const addButton = document.querySelector(".modal__add");
        const cancelButton = document.querySelector(".modal__cancel");

        addButton && addButton.addEventListener("click", (e) => {
            if (id) DBManager.deleteById(id);
            if (this.#checkValidation()) {
                if (type === "task") {
                    this.#addTask();
                } else {
                    this.#addProject();
                }
                e.preventDefault();
                Event.emit("itemChanged");
                document.querySelector(".blur").remove();
            }
        });

        // might need to remove event listener to prevent stacking?

        cancelButton.addEventListener("click", () => {
            document.querySelector(".blur").remove();
        });

        document.addEventListener("keydown", ({ key }) => {
            const blur = document.querySelector(".blur");
            if (key === "Escape" && blur) {
                blur.remove();
            }
        });
    }

    #checkValidation() {
        const selectors = `.modal__form [id*="title"]`;
        const values = Array.from(document.querySelectorAll(selectors)).map(el => el.value);

        for (const value of values) {
            if (!value) return false;
        }
        return true;
    }

    #addProject() {
        const selectors = `.modal__form input,
        .modal__form textarea`;
        const values = Array.from(document.querySelectorAll(selectors)).map(el => el.value);
        const project = new Project(...values);
        const arr = DBManager.read("projects");
        arr.push(project);
        DBManager.write("projects", arr);
    }

    #addTask() {
        const selectors = `.modal__form select, 
        .modal__form input,
        .modal__form textarea`;
        const values = Array.from(document.querySelectorAll(selectors)).map(el => el.value);
        const task = new Task(...values);
        const arr = DBManager.read("tasks");
        arr.push(task);
        DBManager.write("tasks", arr);
    }

    #createContent(type, id, view) {
        if (type === "task") {
            if (view && id) return this.#viewTask(id);
            if (id) return this.#editTask(id);
            return this.#createTask();
        }
        if (type === "project") {
            if (view && id) return this.#viewProject(id);
            if (id) return this.#editProject(id);
            return this.#createProject();
        }

        throw new Error("UNDEFINED TYPE");
    }

    // tabindex 0 on the form prevents autofocus on first input

    #viewTask(id) {
        const blur = document.createElement("div");
        const arr = DBManager.read("projects");
        let options = "";

        const task = DBManager.getId(id);

        for (const project of arr) {
            options = options + `<option value="${project.id}">${project.title}</option>`;
        }

        blur.className = "blur";
        blur.innerHTML = `<dialog class="modal">
            <form action="POST" class="modal__form" tabindex="0">
                <label for="projects">Project</label>
                <select name="projects" id="projects" disabled>
                    ${options}
                </select>
                <label for="task-title">Title</label>
                <input type="text" name="task-Title" id="task-title" maxlength="40" value="${task.title}" required
                    readonly />

                <label for="duedate">Duedate</label>
                <input type="date" id="duedate" name="duedate" value="${task.dueDate}" min="2024-08-03" max="2030-01-01"
                    readonly />

                <label for="priority">Priority
                    <select name="priority" id="priority" disabled>
                        <option value="none" selected>None</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>

                <label for="note">Note:</label>
                <textarea id="note" name="note" rows="5" cols="33" readonly>${task.description}</textarea>

                <button class="modal__cancel" type="button">Close</button>
            </form>
        </dialog>`;
        return blur;
    }

    #viewProject(id) {
        const blur = document.createElement("div");
        const project = DBManager.getId(id);

        blur.className = "blur";
        blur.innerHTML = `<dialog class="modal">
            <form action="" class="modal__form" tabindex="0">
                <label for="project-title">Title</label>
                <input type="text" name="project-title" id="project-title" maxlength="40" required readonly value="${project.title}"/>
                <label for="note">Note:</label>
                <textarea id="note" name="note" rows="5" cols="33" readonly>${project.description}</textarea>
                <button class="modal__cancel" type="button">Close</button>
            </form>
        </dialog>`;
        return blur;
    }

    #editTask(id) {
        const blur = document.createElement("div");
        const arr = DBManager.read("projects");
        let options = "";

        const task = DBManager.getId(id);

        for (const project of arr) {
            options = options + `<option value="${project.id}">${project.title}</option>`;
        }

        blur.className = "blur";
        // might wanna add date
        blur.innerHTML = `<dialog class="modal">
            <form action="POST" class="modal__form" tabindex="0">
                <p class="modal__title">Edit Task</p>
                <label for="projects">Project</label>
                <select name="projects" id="projects" value="">
                    ${options}
                </select>
                <label for="task-title">Title</label>
                <input type="text" name="task-Title" id="task-title" maxlength="40" value="${task.title}" required />

                <label for="duedate">Duedate</label>
                <input type="date" id="duedate" name="duedate" value="${task.dueDate}" min="2024-08-03" max="2030-01-01" />

                <label for="priority">Priority
                    <select name="priority" id="priority">
                        <option value="none">None</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>

                <label for="note">Note:</label>
                <textarea id="note" name="note" rows="5" cols="33">${task.description}</textarea>

                <button class="modal__add" type="submit">Save changes</button>
                <button class="modal__cancel" type="button">Cancel</button>
            </form>
        </dialog>`;
        return blur;
    }

    #editProject(id) {
        const blur = document.createElement("div");
        const project = DBManager.getId(id);

        blur.className = "blur";
        blur.innerHTML = `<dialog class="modal">
        <form action="" class="modal__form" tabindex="0">
            <p class="modal__title">Edit Project</p>

            <label for="project-title">Title</label>
            <input type="text" name="project-title" id="project-title" maxlength="40" required value="${project.title}"/>

            <label for="note">Note:</label>
            <textarea value="${project.description}" id="note" name="note" rows="5" cols="33"></textarea>

            <button class="modal__add" type="submit">Save changes</button>
            <button class="modal__cancel" type="button">Cancel</button>
        </form>
    </dialog>`;
        return blur;
    }

    #createProject() {
        const blur = document.createElement("div");
        blur.className = "blur";
        blur.innerHTML = `<dialog class="modal">
        <form action="" class="modal__form" tabindex="0">
            <p class="modal__title">New Project</p>

            <label for="project-title">Title</label>
            <input type="text" name="project-title" id="project-title" maxlength="40" required />

            <label for="note">Note:</label>
            <textarea id="note" name="note" rows="5" cols="33"></textarea>

            <button class="modal__add" type="submit">Add</button>
            <button class="modal__cancel" type="button">Cancel</button>
        </form>
    </dialog>`;
        return blur;
    }

    #createTask() {
        const blur = document.createElement("div");
        const arr = DBManager.read("projects");
        let options = "";

        for (const project of arr) {
            options = options + `<option value="${project.id}">${project.title}</option>`;
        }

        blur.className = "blur";
        blur.innerHTML = `<dialog class="modal">
            <form action="POST" class="modal__form" tabindex="0">
                <p class="modal__title">New Task</p>
                <label for="projects">Project</label>
                <select name="projects" id="projects">
                    ${options}
                </select>
                <label for="task-title">Title</label>
                <input type="text" name="task-Title" id="task-title" maxlength="40" required />

                <label for="duedate">Duedate</label>
                <input type="date" id="duedate" name="duedate" value="${this.#date}" min="2024-01-01" max="2030-01-01" />

                <label for="priority">Priority
                    <select name="priority" id="priority">
                        <option value="none">None</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>

                <label for="note">Note:</label>
                <textarea id="note" name="note" rows="5" cols="33"></textarea>

                <button class="modal__add" type="submit">Add</button>
                <button class="modal__cancel" type="button">Cancel</button>
            </form>
        </dialog>`;
        return blur;
    }

    #getCurrentDate() {
        return new Date().toISOString().split('T')[0]
    }
}