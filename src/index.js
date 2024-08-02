import "./reset.css";
import "./base.scss";
import "./static/home-mobile.png";

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

    toggleButton.addEventListener("click", function (e) {
        body.classList.toggle("body--toggle");
        sidebar.classList.toggle("hide");
    });
    closeButton.addEventListener("click", function () {
        body.classList.remove("body--toggle");
        sidebar.classList.add("hide");
    });
    body.addEventListener("click", function (e) {
        if (body.classList.contains("body--toggle") && !sidebar.contains(e.target)) {
            body.classList.remove("body--toggle");
            sidebar.classList.add("hide");
            e.stopPropagation();
        }
    }, { capture: true });
})