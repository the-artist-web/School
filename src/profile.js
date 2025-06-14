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
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider");
    const nextBtn = document.querySelector("[data-next]");
    const prevBtn = document.querySelector("[data-prev]");

    const cards = slider.querySelectorAll(".card-course");
    let currentIndex = 0;

    const dir = localStorage.getItem("dir") || "ltr";
    const isRTL = dir.toLowerCase() === "rtl";

    function moveSlider() {
        const cardWidth = cards[0].offsetWidth;
        const offset = cardWidth * currentIndex;

        if (isRTL) {
            slider.style.transform = `translateX(${offset}px)`;
        } else {
            slider.style.transform = `translateX(-${offset}px)`;
        }
    }

    function goNext() {
        currentIndex++;
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }
        moveSlider();
    }

    function goPrev() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        }
        moveSlider();
    }

    nextBtn.addEventListener("click", () => {
        goNext();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        goPrev();
        resetAutoSlide();
    });

    window.addEventListener("resize", moveSlider);

    moveSlider();

    let autoSlide = setInterval(goNext, 3000);

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(goNext, 3000);
    }
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