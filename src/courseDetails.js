/**
 * TOGGLE AUTO NEXT
 */
const ToggleAutoNext = document.querySelector("[data-toggle]");
const circle = ToggleAutoNext.querySelector(".circle");

ToggleAutoNext.addEventListener("click", (e) => {
    e.stopPropagation();

    ToggleAutoNext.classList.toggle("!bg-[var(--blue-color)]");
    circle.classList.toggle("!bg-[#fff]");
    circle.classList.toggle("right-[3px]");
    circle.classList.toggle("left-[3px]");
});

/**
 * TOGGLE SECTION
 */
const section = document.querySelector("[data-section]");
const col_section = document.querySelector("[data-col-section]");
const row_section = document.querySelector("[data-row-section]");

const isColMode = localStorage.getItem("section") === "col";

if (isColMode) {
    section.classList.add("lg:grid-cols-[1fr_420px]");
    col_section.classList.remove("hidden");
    row_section.classList.add("hidden");
} else {
    section.classList.remove("lg:grid-cols-[1fr_420px]");
    col_section.classList.add("hidden");
    row_section.classList.remove("hidden");
}

col_section.addEventListener("click", () => {
    section.classList.remove("lg:grid-cols-[1fr_420px]");
    col_section.classList.add("hidden");
    row_section.classList.remove("hidden");

    localStorage.setItem("section", "row");
});

row_section.addEventListener("click", () => {
    section.classList.add("lg:grid-cols-[1fr_420px]");
    col_section.classList.remove("hidden");
    row_section.classList.add("hidden");

    localStorage.setItem("section", "col");
});