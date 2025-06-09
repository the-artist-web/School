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

function getCardWidth() {
    const card = slider.querySelector(".card");
    const style = window.getComputedStyle(card);
    const marginRight = parseFloat(style.marginRight || 0);
    const marginLeft = parseFloat(style.marginLeft || 0);
    return card.offsetWidth + marginLeft + marginRight;
}

nextBtn.addEventListener("click", () => {
    slider.scrollLeft += getCardWidth();
});

prevBtn.addEventListener("click", () => {
    slider.scrollLeft -= getCardWidth();
});

/**
 * TABS QUESTION BANK
 */
const btn_tab = document.querySelectorAll("[data-btn-tab]");
const tab = document.querySelectorAll("[data-tab]");

btn_tab.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btn_tab.forEach(btn_all => btn_all.classList.remove("active"));
        btn.classList.add("active");

        tab.forEach(tab_all => tab_all.classList.add("hidden"));
        tab[index].classList.remove("hidden");
    });
});