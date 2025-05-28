/**
 * Filter Toggle
 */
const filter_toggler = document.querySelectorAll("[data-filter-toggle]");

filter_toggler.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
        e.stopPropagation();

        toggle.classList.toggle("!bg-[var(--blue-color)]");
        toggle.classList.toggle("!text-[#ffffff]");
    });
});