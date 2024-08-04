import { v4 as uuidv4 } from 'uuid';

export default class Task {
    #title;
    #description;
    #dueDate;
    #priority;
    #project; // uuid of project
    #id;

    constructor(project, title, dueDate, priority, description) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#project = project;
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

    get project() {
        return this.#project;
    }

    get id() {
        return this.#id;
    }

    toJSON() {
        return {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority,
            project: this.project,
            id: this.id,
        }
    }
}