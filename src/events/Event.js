export default class Event {
  static #events;

  static {
    this.#events = {};
  }

  static on(eventName, handler) {
    Event.#events[eventName] = Event.#events[eventName] || [];
    Event.#events[eventName].push(handler);
  }

  static off(eventName, handler) {
    for (let i = 0; i < Event.#events[eventName].length; i++) {
      if (Event.#events[eventName][i] === handler) {
        Event.#events[eventName].splice(i, 1);
        break;
      }
    }
  }

  // might need data variable
  static emit(eventName) {
    if (!Event.#events[eventName]) {
      throw new Error('eventName not found');
    }
    for (const handler of Event.#events[eventName]) {
      handler();
    }
  }
}
