import Home from "./Home.js";
import Inbox from "./Inbox.js";

export default class Controller {
    #currentView;
    #viewsMap;
    #home;
    #inbox;

    constructor() {
        const homeLink = document.querySelector(".navbar__title");
        const inboxLink = document.querySelector(".navbar__inbox");
        this.#home = new Home(this);
        this.#inbox = new Inbox();
        this.#viewsMap = new Map();
        this.#viewsMap.set(homeLink, this.#home);
        this.#viewsMap.set(inboxLink, this.#inbox);
        this.#currentView = this.#viewsMap.get(homeLink);
        this.#addEventListeners();
        this.#currentView.render();
        this.#enableTransitions();
    }

    #addEventListeners() {
        for (const [link, view] of this.#viewsMap) {
            link.addEventListener("click", () => {
                const targetView = this.#viewsMap.get(link);
                if (this.#currentView != targetView) {
                    this.refreshContent();
                    targetView.render();
                    this.#currentView = targetView;
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
}