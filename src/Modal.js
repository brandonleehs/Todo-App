export default class Modal {
    #body;

    constructor() {
        this.#body = document.querySelector("body");
    }

    render() {
        this.#body.appendChild(this.#createContent());
        this.#bindEvents();
        const modal = document.querySelector(".modal");
        modal.showModal();
    }

    #bindEvents() {
        const addButton = document.querySelector(".modal__add");
        const cancelButton = document.querySelector(".modal__cancel");

        addButton.addEventListener("click", () => {
            document.querySelector(".blur").remove();
        })

        cancelButton.addEventListener("click", () => {
            document.querySelector(".blur").remove();
        })
    }

    #createContent() {
        const blur = document.createElement("div");
        blur.className = "blur";
        blur.innerHTML = `<dialog class="modal">
            <form action="POST" class="modal__form">
                <p class="modal__title">New Task</p>
                <label for="projects">Project</label>
                <select name="projects" id="projects">
                    <option value="General">General</option>
                </select>
                <label for="task-title">Title</label>
                <input type="text" name="projectTitle" id="task-title" maxlength="40" required />

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