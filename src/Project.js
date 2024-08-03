export default class Project {
    #title;
    #description;

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
}