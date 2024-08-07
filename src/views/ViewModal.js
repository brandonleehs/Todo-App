import Modal from './Modal';
import DBManager from '../DBManager';

export default class ViewModal extends Modal {
  #id;

  constructor(controller, id) {
    super(controller);
    this.#id = id;
  }

  _createProject() {
    const blur = document.createElement('div');
    const project = DBManager.readById(this.#id);

    blur.className = 'blur';
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

  _createTask() {
    const blur = document.createElement('div');
    const arr = DBManager.read('projects');
    let options = '';

    const task = DBManager.readById(this.#id);

    for (const project of arr) {
      options =
        options + `<option value="${project.id}">${project.title}</option>`;
    }

    blur.className = 'blur';
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
}
