/**
 * TABS
 */
const params = new URLSearchParams(window.location.search);
let currentTab = params.get("tab") || "profile";

const tabLinks = document.querySelectorAll("[data-tab-btn]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabLinks.forEach((link) => {
    const tabName = link.getAttribute("data-tab-btn");

    if (tabName === currentTab) {
        link.classList.add("!bg-[var(--blue-dark-color)]", "!text-[#fff]", "hover:!text-[#fff]");
    } else {
        link.classList.remove("!bg-[var(--blue-dark-color)]", "!text-[#fff]", "hover:!text-[#fff]");
    }
});

tabContents.forEach((content) => {
    const tabName = content.getAttribute("data-tab-content");

    if (tabName === currentTab) {
        content.classList.remove("hidden");
    } else {
        content.classList.add("hidden");
    }
});

/**
 * CARD SLIDER
 */
const slider = document.getElementById("slider");
const nextBtn = document.querySelector("[data-next]");
const prevBtn = document.querySelector("[data-prev]");

let scrollAmount = 0;
const cardWidth = slider.querySelector(".card").offsetWidth + 20;

nextBtn.addEventListener("click", () => {
    slider.scrollLeft += cardWidth;
});

prevBtn.addEventListener("click", () => {
    slider.scrollLeft -= cardWidth;
});
