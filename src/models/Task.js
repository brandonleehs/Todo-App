import { v4 as uuidv4 } from 'uuid';

export default class Task {
  #title;
  #description;
  #dueDate;
  #priority;
  #projectId; // uuid of projectId
  #id;

  constructor(projectId, title, dueDate, priority, description) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#projectId = projectId;
    this.#id = uuidv4();
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }
  get priority() {
    return this.#priority;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get projectId() {
    return this.#projectId;
  }

  get id() {
    return this.#id;
  }

  toJSON() {
    // maybe object shorthand works
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      projectId: this.projectId,
      id: this.id,
    };
  }
}
