/**
 * OVERFLOW
 */
const overflow = document.querySelector("[data-overflow]");

/**
 * HEADER
 */
const header = document.querySelector("[data-header]");
const propagation = document.querySelector("[data-propagation]");
const propagation_line = propagation.querySelector(".propagation-line");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    const currentScrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollableHeight = docHeight - winHeight;

    if (scrollY >= 100) {
        if (currentScrollTop > lastScrollTop) {
            header.classList.add("translate-y-[-77px]");
        } else {
            header.classList.remove("translate-y-[-77px]");
        };

        propagation.classList.remove("opacity-0", "invisible");
    } else {
        propagation.classList.add("opacity-0", "invisible");
        header.classList.remove("translate-y-[-77px]");
    };


    const scrollPercent = (currentScrollTop  / scrollableHeight) * 100;
    propagation_line.style.width = `${scrollPercent}%`;

    lastScrollTop = currentScrollTop;
});

/**
 * THEME
 */
const theme_toggle = document.querySelectorAll("[data-theme-toggle]");
const html = document.documentElement;

if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
        theme_toggle.forEach(theme => {
            const circle = theme.querySelector(".circle");
            const svg_1 = theme.querySelector(".svg-1");
            const svg_2 = theme.querySelector(".svg-2");

            circle.classList.add("right-[3px]");
            circle.classList.remove("left-[3px]");
            svg_1.classList.add("hidden");
            svg_2.classList.remove("hidden");
        });
    } else {
        theme_toggle.forEach(theme => {
            const circle = theme.querySelector(".circle");
            const svg_1 = theme.querySelector(".svg-1");
            const svg_2 = theme.querySelector(".svg-2");
            
            circle.classList.remove("right-[3px]");
            circle.classList.add("left-[3px]");
            svg_1.classList.remove("hidden");
            svg_2.classList.add("hidden");
        });
    };

    html.dataset.theme = localStorage.getItem("theme");
} else {
    html.dataset.theme = "dark";
};

theme_toggle.forEach(theme => {
    const circle = theme.querySelector(".circle");
    const svg_1 = theme.querySelector(".svg-1");
    const svg_2 = theme.querySelector(".svg-2");

    theme.addEventListener("click", (e) => {
        e.stopPropagation();

        circle.classList.toggle("right-[3px]");
        circle.classList.toggle("left-[3px]");
        svg_1.classList.toggle("hidden");
        svg_2.classList.toggle("hidden");

        html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", html.dataset.theme);
    });
});

/**
 * ASIDE
 */
const open_aside = document.querySelectorAll("[data-aside-open]");
const close_aside = document.querySelectorAll("[data-aside-close]");

open_aside.forEach(open => {
    open.addEventListener("click", (e) => {
        e.stopPropagation();

        const getAttribute = open.getAttribute("data-aside-target");
        const aside = document.querySelector(getAttribute);
        
        aside.classList.remove("opacity-0", "top-[50px]", "invisible");
        aside.classList.add("top-[80px]");

        open.classList.add("hidden");
        close_aside.forEach(close => close.classList.remove("hidden", "invisible"));
    });
});

close_aside.forEach(close => {
    close.addEventListener("click", (e) => {
        e.stopPropagation();

        const getAttribute = close.getAttribute("data-aside-target");
        const aside = document.querySelector(getAttribute);
        
        aside.classList.add("opacity-0", "top-[50px]", "invisible");
        aside.classList.remove
        ("top-[80px]");

        close.classList.add("hidden");
        open_aside.forEach(open => open.classList.remove("hidden", "invisible"));
    });
});

/**
 * MODAL
 */
const open_modal = document.querySelectorAll("[data-modal-open]");
const open_close = document.querySelectorAll("[data-modal-close]");

function closeAllModals() {
    document.querySelectorAll("[data-modal-target]").forEach(el => {
        const targetSelector = el.getAttribute("data-modal-target");
        const modal = document.querySelector(targetSelector);

        if (modal) {
            modal.classList.add("opacity-[0]", "invisible");
            modal.classList.remove("top-[50%]");
        }
    });
}

open_modal.forEach(open => {
    open.addEventListener("click", (e) => {
        e.stopPropagation();

        const targetSelector = open.getAttribute("data-modal-target");
        const modal = document.querySelector(targetSelector);

        closeAllModals();

        if (modal) {
            modal.classList.remove("opacity-[0]", "invisible");
            modal.classList.add("top-[50%]");
        }

        if (overflow) {
            overflow.classList.remove("opacity-0", "invisible");
            overflow.classList.add("opacity-[0.7]");
        }
    });
});

open_close.forEach(close => {
    close.addEventListener("click", (e) => {
        e.stopPropagation();

        const targetSelector = close.getAttribute("data-modal-target");
        const modal = document.querySelector(targetSelector);

        if (modal) {
            modal.classList.add("opacity-[0]", "invisible");
            modal.classList.remove("top-[50%]");
        }

        if (overflow) {
            overflow.classList.add("opacity-0", "invisible");
            overflow.classList.remove("opacity-[0.7]");
        }
    });
});

if (overflow) {
    overflow.addEventListener("click", (e) => {
        e.stopPropagation();

        closeAllModals();

        overflow.classList.add("opacity-0", "invisible");
        overflow.classList.remove("opacity-[0.7]");
    });
}

/**
 * COLLAPSES
 */
const collapses = document.querySelectorAll(".card-collapse");

collapses.forEach(card_collapse => {
    const collapse_btn = card_collapse.querySelector(".collapse-btn");
    const arrow_collapse_btn = collapse_btn.querySelector(".arrow");
    const collapses_list = card_collapse.querySelector(".collapses-list");

    const collapse_list_btn = card_collapse.querySelector(".collapse-list-btn");
    const arrow_collapse_list_btn = collapse_list_btn.querySelector(".arrow");
    const collapses_list_card_list = card_collapse.querySelector(".collapses-list-card-list");

    const collapse_list_btn_list_btn = card_collapse.querySelectorAll(".collapse-list-btn-list-btn");
    const collapses_list_card_list_card_body = card_collapse.querySelectorAll(".collapses-list-card-list-card-body");

    collapse_btn.addEventListener("click", (e) => {
        e.stopPropagation();

        collapse_btn.classList.toggle("active");
        arrow_collapse_btn.classList.toggle("rotate-[180deg]");
        collapses_list.classList.toggle("active");
    });

    collapse_list_btn.addEventListener("click", (e) => {
        e.stopPropagation();

        arrow_collapse_list_btn.classList.toggle("rotate-[180deg]");
        collapses_list_card_list.classList.toggle("active");
    });

    collapse_list_btn_list_btn.forEach((btn, index) => {
        const arrow = btn.querySelector(".arrow");
        const body = collapses_list_card_list_card_body[index];

        btn.addEventListener("click", (e) => {
            e.stopPropagation();

            arrow.classList.toggle("rotate-[180deg]");
            body.classList.toggle("active");
        });
    });
});

/**
 * Change language
 */
const direction_toggle = document.documentElement;
const ar = document.querySelectorAll("[data-ar]");
const en = document.querySelectorAll("[data-en]");

if (localStorage.getItem("dir")) {
    direction_toggle.dir = localStorage.getItem("dir");

    if (localStorage.getItem("dir") === "ltr") {
        ar.forEach(ar_ele => ar_ele.classList.remove("hidden"));
        en.forEach(en_ele => en_ele.classList.add("hidden"));
    } else {
        ar.forEach(ar_ele => ar_ele.classList.add("hidden"));
        en.forEach(en_ele => en_ele.classList.remove("hidden"));
    };
};

en.forEach(en_ele => {
    en_ele.addEventListener("click", (e) => {
        e.stopPropagation();

        direction_toggle.dir = "ltr";

        en_ele.classList.toggle("hidden");

        ar.forEach(ar_ele => ar_ele.classList.toggle("hidden"));

        localStorage.setItem("dir", "ltr");
    });
});

ar.forEach(ar_ele => {
    ar_ele.addEventListener("click", (e) => {
        e.stopPropagation();

        direction_toggle.dir = "rtl";

        ar_ele.classList.toggle("hidden");

        en.forEach(en_ele => en_ele.classList.toggle("hidden"));

        localStorage.setItem("dir", "rtl");
    });
});

/**
 * DROPDOWN
 */
const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach(dropdown_ele => {
    const button = dropdown_ele.querySelector("button");
    const dropdown_menu = dropdown_ele.querySelector(".dropdown-menu");
    
    button.addEventListener("click", (e) => {
        e.stopPropagation();

        let isActive = dropdown_menu.classList.contains("active");

        document.querySelectorAll(".dropdown-menu").forEach(dropdown_menu_all => dropdown_menu_all.classList.remove("active"));

        if (!isActive) dropdown_menu.classList.add("active");
    });

    dropdown_menu.addEventListener("click", (e_small) => {
        e_small.stopPropagation();
    });
});

document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("active"));
});