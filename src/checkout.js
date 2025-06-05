const open_tab_one = document.querySelectorAll("[data-open-tab-one]");
const open_tab_two = document.querySelectorAll("[data-open-tab-two]");
const tab_one = document.querySelector("[data-tab-one]");
const tab_two = document.querySelector("[data-tab-two]");

function activateTab(tabName) {
    if (tabName === "tab-one") {
        open_tab_one.forEach(open => {
            const circle = open.querySelector(".circle");
            const p = open.querySelector(".p");

            circle.classList.add("bg-[var(--yellow-color)]", "text-[#000]");
            p.classList.add("!text-[var(--yellow-color)]");
        });

        open_tab_two.forEach(two => {
            const circle = two.querySelector(".circle");
            const p = two.querySelector(".p");

            circle.classList.remove("bg-[var(--yellow-color)]", "text-[#000]");
            p.classList.remove("!text-[var(--yellow-color)]");

            circle.classList.add("bg-[var(--third-bg-color)]", "text-[var(--second-color)]");
            p.classList.add("!text-[var(--second-color)]");
        });

        tab_one.classList.remove("hidden");
        tab_two.classList.add("hidden");

        sessionStorage.setItem("activeTab", "tab-one");
    } else if (tabName === "tab-two") {
        open_tab_two.forEach(open => {
            const circle = open.querySelector(".circle");
            const p = open.querySelector(".p");

            circle.classList.add("bg-[var(--yellow-color)]", "text-[#000]");
            p.classList.add("!text-[var(--yellow-color)]");
        });

        open_tab_one.forEach(one => {
            const circle = one.querySelector(".circle");
            const p = one.querySelector(".p");

            circle.classList.remove("bg-[var(--yellow-color)]", "text-[#000]");
            p.classList.remove("!text-[var(--yellow-color)]");

            circle.classList.add("bg-[var(--third-bg-color)]", "text-[var(--second-color)]");
            p.classList.add("!text-[var(--second-color)]");
        });

        tab_one.classList.add("hidden");
        tab_two.classList.remove("hidden");

        sessionStorage.setItem("activeTab", "tab-two");
    }
}

open_tab_one.forEach(open => {
    open.addEventListener("click", () => activateTab("tab-one"));
});

open_tab_two.forEach(open => {
    open.addEventListener("click", () => activateTab("tab-two"));
});

const savedTab = sessionStorage.getItem("activeTab");
if (savedTab === "tab-two") {
    activateTab("tab-two");
} else {
    activateTab("tab-one");
}
