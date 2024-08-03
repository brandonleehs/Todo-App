import "./reset.css";
import "./base.scss";
import "./static/home-mobile.png";
import Home from "./Home.js";
import Inbox from "./Inbox.js";

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
    const inbox = new Inbox();
    inbox.render();
})