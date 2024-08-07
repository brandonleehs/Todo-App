export default class View {
  _main;
  constructor() {
    if (this.constructor == View) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this._main = document.querySelector('main');
  }

  render() {
    throw new Error("Method 'render()' must be implemented.");
  }

  createContent() {
    throw new Error("Method 'createcontent()' must be implemented.");
  }
}
