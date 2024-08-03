export default class Task {
    #title;
    #description;
    #dueDate;
    #priority;

    constructor(title) {
        this.#title = title;
        this.#description;
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
}