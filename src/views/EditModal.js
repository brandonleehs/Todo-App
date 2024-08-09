import Modal from './Modal';
import DBManager from '../DBManager';

export default class EditModal extends Modal {
  #id;

  constructor(controller, id) {
    super(controller, id);
    this.#id = id;
  }

  render(type) {
    super.render(type);
    if (type === 'task') {
      const option = document.querySelector(
        `#priority option[value=${DBManager.readById(this.#id).priority}]`
      );
      option.setAttribute('selected', '');
    }
  }

  _createProject() {
    const blur = document.createElement('div');
    const project = DBManager.readById(this.#id);

    blur.className = 'blur';
    blur.innerHTML = `<dialog class="modal">
        <form action="" class="modal__form" tabindex="0">
            <p class="modal__title">Edit Project</p>

            <div class="form-group form-group--input">
              <label for="project-title">Title</label>
              <input type="text" name="project-title" id="project-title" maxlength="40" required value="${project.title}"/>
              <span class="error">Title is required.</span>
              </div>

            <label for="note">Note:</label>
            <textarea id="note" name="note" rows="5" cols="33">${project.description}</textarea>

            <button class="modal__add" type="submit">Save changes</button>
            <button class="modal__cancel" type="button">Cancel</button>
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
    // might wanna add date
    blur.innerHTML = `<dialog class="modal">
            <form action="POST" class="modal__form" tabindex="0">
                <p class="modal__title">Edit Task</p>
                <label for="projects">Project</label>
                <select name="projects" id="projects" value="">
                    ${options}
                </select>
                <div class="form-group form-group--input">
                  <label for="task-title">Title</label>
                  <input type="text" name="task-Title" id="task-title" maxlength="40" value="${task.title}" required />
                  <span class="error">Title is required.</span>
                </div>
                
                <label for="duedate">Duedate</label>
                <input type="date" id="duedate" name="duedate" value="${task.dueDate}" min="${task.dueDate}" max="2030-01-01" />

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
}
