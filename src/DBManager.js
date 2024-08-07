export default class DBManager {
  static readById(id) {
    return DBManager.storageHandler(
      () => this.#readById(id),
      DBManager.throwStorageError
    );
  }

  static deleteById(id) {
    return DBManager.storageHandler(
      () => this.#deleteById(id),
      DBManager.throwStorageError
    );
  }

  static #readById(id) {
    for (let i = 0; i < localStorage.length; i++) {
      const arr = JSON.parse(localStorage.getItem(localStorage.key(i)));

      for (const el of arr) {
        if (el.id === id) return el;
      }
    }
    return null;
  }

  static #deleteById(id) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const arr = JSON.parse(localStorage.getItem(localStorage.key(i)));

      for (let j = 0; j < arr.length; j++) {
        if (arr[j].id === id) {
          arr.splice(j, 1);
          DBManager.write(key, arr);
          return;
        }
      }
    }
  }

  static read(key) {
    const item = localStorage.getItem(key);
    if (item) {
      const arr = JSON.parse(item);
      return arr;
    }
    return null;
  }

  static write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static clear() {
    localStorage.clear();
  }

  static storageHandler(fn, handler) {
    if (this.#storageAvailable('localStorage')) {
      return fn();
    }
    // Too bad, no localStorage for us
    console.log('No localstorage available.');
    if (handler) {
      return handler();
    }
  }

  static throwStorageError() {
    throw new Error('Storage unavailable!');
  }

  static #storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === 'QuotaExceededError' &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
}
