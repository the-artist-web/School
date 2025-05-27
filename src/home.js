gsap.registerPlugin(ScrollTrigger);

/**
 * HOME
 */
gsap.from(".home .col", {
    delay: 1.8,
    scale: 0,
    stagger: 0.08,
    duration: 0.8
});

gsap.utils.toArray(".section").forEach(section => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "center center",
            end: "bottom center",
        }
    });

    tl.from(section.querySelectorAll(".col"), {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2
    })
    .from(section.querySelector(".btn-animation"), {
        opacity: 0,
        y: 100,
        duration: 0.8,
    });
});