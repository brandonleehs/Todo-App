export default class Home {
    #controller;
    #main;

    constructor(controller) {
        this.#controller = controller;
        this.#main = document.querySelector("main");
    }

    #createContent() {
        const home = document.createElement("section");
        home.className = "home";
        home.innerHTML = `<picture>
                <img src="./static/home-mobile.png" alt="">
            </picture>
            <div class="home__content">
                <p class="home__hero">Stay Organized. Stay Productive.</p>
                <p>Simplify your life and get more done with TaskTrack. Effortlessly manage your tasks, set priorities,
                    and
                    achieve your goals. Start your journey to a more organized and productive day.</p>
                <button type="button" class="home__start">Get started</button>
            </div>`;
        return home;
    }

    render() {
        this.#main.appendChild(this.#createContent());
        this.#bindEvent();
    }

    #bindEvent() {
        document.querySelector(".home__start").addEventListener("click", () => {
            this.#controller.refreshContent();
            this.#controller.inbox.render();
        });

        const toggle = document.getElementById('mode-toggle');
        const body = document.querySelector("body");
        toggle.addEventListener('change', function (event) {
            body.classList.toggle("dark-theme");
        });
    }
}