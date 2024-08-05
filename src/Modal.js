import DBManager from "./DBManager.js";
import Task from "./Task.js";
import Project from "./Project.js";
import Event from "./Event.js";

export default class Modal {
    #body;
    #controller;

    constructor(controller) {
        this.#controller = controller;
        this.#body = document.querySelector("body");
    }

    render(type, id) {
        this.#body.appendChild(this.#createContent(type, id));
        if (id) {
            const item = DBManager.getId(id);
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
        if (type === "task") {
            addButton.addEventListener("click", (e) => {
                if (id) DBManager.deleteById(id);
                e.preventDefault();
                this.#addTask();
                Event.emit("itemChanged");
                document.querySelector(".blur").remove();
            });
        }
        else if (type === "project") {
            addButton.addEventListener("click", (e) => {
                if (id) DBManager.deleteById(id);
                e.preventDefault();
                this.#addProject();
                Event.emit("itemChanged");
                document.querySelector(".blur").remove();
            });
        }
        else {
            throw new Error("UNDEFINED TYPE");
        }

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

    #createContent(type, id) {
        if (type === "task") {
            if (id) return this.#editTask(id);
            return this.#createTask();
        }
        if (type === "project") {
            if (id) return this.#editProject(id);
            return this.#createProject();
        }

        throw new Error("UNDEFINED TYPE");
    }

    // tabindex 0 on the form prevents autofocus on first input

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
                <input type="date" id="duedate" name="duedate" value="2024-08-03" min="2024-08-03" max="2030-01-01" />

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
}