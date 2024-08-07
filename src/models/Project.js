import { v4 as uuidv4 } from 'uuid';

export default class Project {
  #title;
  #description;
  #taskArr;
  #id;

  constructor(title, description) {
    this.#title = title;
    this.#description = description;
    this.#taskArr = [];
    this.#id = uuidv4();
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get taskArr() {
    return this.#taskArr;
  }

  get id() {
    return this.#id;
  }

  toJSON() {
    // maybe object shorthand works
    return {
      title: this.title,
      description: this.description,
      taskArr: this.taskArr,
      id: this.id,
    };
  }
}
