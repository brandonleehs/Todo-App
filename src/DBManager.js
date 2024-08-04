export default class DBManager {
    static getId(id) {
        for (let i = 0; i < localStorage.length; i++) {
            const arr = JSON.parse(localStorage.getItem(localStorage.key(i)));

            for (const el of arr) {
                if (el.id === id) return el;
            }
        }
        return null;
    }

    static read(name) {
        let item = localStorage.getItem(name);
        if (item) {
            const arr = JSON.parse(item);
            return arr;
        } return item;
    }

    static write(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

    static deleteById(id) {
        for (let i = 0; i < localStorage.length; i++) {
            const name = localStorage.key(i);
            const arr = JSON.parse(localStorage.getItem(localStorage.key(i)));

            for (let j = 0; j < arr.length; j++) {
                if (arr[j].id === id) {
                    arr.splice(j, 1);
                    DBManager.write(name, arr);
                    return;
                }
            }
        }
    }

    static delete(name) {
        localStorage.removeItem(name);
    }

    static clear() {
        localStorage.clear();
    }

    static checkStorageWrapper(fn) {
        if (this.#storageAvailable("localStorage")) {
            fn();
        } else {
            // Too bad, no localStorage for us
            console.log("No localstorage available.");
        }
    }

    static #storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                e.name === "QuotaExceededError" &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    }
}