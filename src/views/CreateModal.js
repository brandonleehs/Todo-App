import Modal from './Modal';
import DBManager from '../DBManager';

export default class CreateModal extends Modal {
  constructor(controller) {
    super(controller);
  }

  _createProject() {
    const blur = document.createElement('div');
    blur.className = 'blur';
    blur.innerHTML = `<dialog class="modal">
        <form action="" class="modal__form" tabindex="0">
            <p class="modal__title">New Project</p>

            <label for="project-title">Title</label>
            <input type="text" name="project-title" id="project-title" maxlength="40" required />

            <label for="note">Note:</label>
            <textarea id="note" name="note" rows="5" cols="33"></textarea>

            <button class="modal__add" type="submit" data-type="project">Add</button>
            <button class="modal__cancel" type="button">Cancel</button>
        </form>
    </dialog>`;
    return blur;
  }

  _createTask() {
    const blur = document.createElement('div');
    const arr = DBManager.read('projects');
    let options = '';

    for (const project of arr) {
      options =
        options + `<option value="${project.id}">${project.title}</option>`;
    }

    blur.className = 'blur';
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
                <input type="date" id="duedate" name="duedate" value="${this._getCurrentDate()}" min="2024-01-01" max="2030-01-01" />

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

                <button class="modal__add" type="submit" data-type="task">Add</button>
                <button class="modal__cancel" type="button">Cancel</button>
            </form>
        </dialog>`;
    return blur;
  }
}
