/**
 * Filter Toggle
 */
document.querySelectorAll("input[type='radio']").forEach(radio => {
    radio.addEventListener("change", () => {
        const name = radio.name;
        const radioInGroup = document.querySelectorAll(`input[name='${name}']`);

        radioInGroup.forEach(r => {
            const label = r.closest("label");
            
            if (label) label.classList.remove("!bg-[var(--blue-color)]", "!text-[#ffffff]");
        });

        const selectedLabel = radio.closest("label");

        if (selectedLabel) selectedLabel.classList.add("!bg-[var(--blue-color)]", "!text-[#ffffff]");
    });
});