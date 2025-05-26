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

// GSAP
gsap.timeline()
    .from("[data-gsap-logo]", {
        rotate: 360,
        scale: 0.0,
        duration: 1,
        ease: "back.out(2)",
    })
    .from("[data-gsap-header]", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power1.out",
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