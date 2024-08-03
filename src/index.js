import "./reset.css";
import "./base.scss";
import "./static/home-mobile.png";
import Home from "./home.js";

function refreshContent() {
    const main = document.querySelector("main");
    main.replaceChildren("");
}

window.addEventListener("load", function () {
    const body = document.querySelector("body");
    // Only enable transition upon page load
    body.classList.remove("no-transition");
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".sidebar__toggle");
    const closeButton = document.querySelector(".sidebar__close");
    const sidebar = document.querySelector(".sidebar");
    const body = document.querySelector("body");

    function getDim() {
        window.vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        window.vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    };

    getDim();

    window.addEventListener("resize", getDim);

    toggleButton.addEventListener("click", function (e) {
        body.classList.toggle("body--toggle");
        sidebar.classList.toggle("hide");
    });
    closeButton.addEventListener("click", function () {
        body.classList.remove("body--toggle");
        sidebar.classList.add("hide");
    });
    body.addEventListener("click", function (e) {
        if (vw <= 992 && body.classList.contains("body--toggle") && !sidebar.contains(e.target)) {
            body.classList.remove("body--toggle");
            sidebar.classList.add("hide");
            e.stopPropagation();
        }
    }, { capture: true });
})