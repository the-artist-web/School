/**
 * COLLAPSE
 */
const open_collapse = document.querySelectorAll("[data-collapse-open]");
const close_collapse = document.querySelectorAll("[data-collapse-close]");

open_collapse.forEach((open, index) => {
    open.addEventListener("click", (e) => {
        e.stopPropagation();

        const getAttribute = open.getAttribute("data-collapse-target");
        const collapse = document.querySelector(getAttribute);

        collapse.classList.remove("hidden");
        open.classList.add("hidden");

        close_collapse[index].classList.remove("!hidden");
    });
});

close_collapse.forEach((close, index) => {
    close.addEventListener("click", (e) => {
        e.stopPropagation();

        const getAttribute = close.getAttribute("data-collapse-target");
        const collapse = document.querySelector(getAttribute);

        collapse.classList.add("hidden");
        close.classList.add("!hidden");

        open_collapse[index].classList.remove("hidden");
    });
});