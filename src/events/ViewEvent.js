export default class ViewEvent {
  _controller;
  constructor(controller) {
    this._controller = controller;
  }

  bindEventAll() {
    throw new Error("Method 'bindEventAll()' must be implemented.");
  }
}
