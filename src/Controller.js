import Home from "./Home.js";
import Inbox from "./Inbox.js";
import Modal from "./Modal.js";

export default class Controller {
    #currentView;
    #viewsMap;
    #home;
    #inbox;
    #modal;

    constructor() {
        const homeLink = document.querySelector(".navbar__title");
        const inboxLink = document.querySelector(".navbar__inbox");
        this.#modal = new Modal();
        this.#home = new Home(this);
        this.#inbox = new Inbox(this);
        this.#viewsMap = new Map();
        this.#viewsMap.set(homeLink, this.#home);
        this.#viewsMap.set(inboxLink, this.#inbox);

        this.#renderDefault();
        this.#enableTransitions();
    }

    #renderDefault() {
        this.#currentView = this.#home;
        this.#currentView.render();
        this.#bindEvents();
    }

    #bindEvents() {
        for (const [link, view] of this.#viewsMap) {
            link.addEventListener("click", () => {
                if (this.#currentView != view) {
                    this.refreshContent();
                    view.render();
                    this.#currentView = view;
                }
            });
        }
    }

    refreshContent() {
        const body = document.querySelector("body");
        const main = document.querySelector("main");
        main.replaceChildren("");
        body.classList.remove("body--toggle");
    }

    #enableTransitions() {
        window.addEventListener("load", function () {
            const body = document.querySelector("body");
            // Only enable transition upon page load
            body.classList.remove("no-transition");
        });
    }

    get home() {
        return this.#home;
    }
    get inbox() {
        return this.#inbox;
    }

    get modal() {
        return this.#modal;
    }
}