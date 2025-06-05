/**
 * COURSE PAGE
 */
const open_row_two_in_table = document.querySelectorAll("[data-open-row-two-in-table]");
const open_row_one_in_table = document.querySelectorAll("[data-open-row-one-in-table]");
const row_one_in_table = document.querySelector("[data-row-one-in-table]");
const row_two_in_table = document.querySelector("[data-row-two-in-table]");
const btn_start_row_two_in_table = document.querySelector("[data-btn-start-row-two-in-table]");
const btn_start_row_one_in_table = document.querySelector("[data-btn-start-row-one-in-table]");
const table = document.querySelector("[data-table]");
const no_results = document.querySelector("[data-no-results]");
const open_section_table_exam = document.querySelectorAll("[data-open-section-table-exam]");
const section_primary = document.querySelector("[data-section-primary]");
const section_table_exam = document.querySelector("[data-section-table-exam]");
const open_section_exam = document.querySelector("[data-open-section-exam]");
const section_exam = document.querySelector("[data-section-exam]");
const time = document.querySelector("[data-time]");
const open_div_open_file = document.querySelectorAll("[data-open-div-open-file]");
const section_file = document.querySelector("[data-section-file]");

let countdown;

open_row_two_in_table.forEach(ele => {
    ele.addEventListener("click", () => {
        row_two_in_table.classList.remove("hidden");
        row_one_in_table.classList.add("hidden");

        btn_start_row_two_in_table.classList.remove("hidden");
        btn_start_row_one_in_table.classList.add("hidden");

        table.classList.remove("hidden");
        section_table_exam.classList.remove("hidden");
        section_primary.classList.add("hidden");
        section_exam.classList.add("hidden");
        no_results.classList.add("hidden");

        if (countdown) {
            clearInterval(countdown);
            countdown = null;
        };
    });
});

open_row_one_in_table.forEach(ele => {
    ele.addEventListener("click", () => {
        row_two_in_table.classList.add("hidden");
        row_one_in_table.classList.remove("hidden");

        btn_start_row_two_in_table.classList.add("hidden");
        btn_start_row_one_in_table.classList.remove("hidden");

        table.classList.remove("hidden");
        section_table_exam.classList.remove("hidden");
        section_primary.classList.add("hidden");
        section_file.classList.add("hidden");
        section_exam.classList.add("hidden");
        no_results.classList.add("hidden");

        if (countdown) {
            clearInterval(countdown);
            countdown = null;
        };
    });
})

open_section_table_exam.forEach(btn => {
    btn.addEventListener("click", () => {
        section_table_exam.classList.remove("hidden");
        section_primary.classList.add("hidden");
        section_exam.classList.add("hidden");
        section_file.classList.add("hidden");
        table.classList.add("hidden");
        no_results.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        if (countdown) {
            clearInterval(countdown);
            countdown = null;
        };
    });
});

open_section_exam.addEventListener("click", () => {
    section_exam.classList.remove("hidden");
    section_table_exam.classList.add("hidden");
    section_primary.classList.add("hidden");

    let [minutes, seconds] = time.dataset.time.split(":").map(Number);
    let totalSeconds = minutes * 60 + seconds;

    const formatTime = (totalSeconds) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
    };

    time.textContent = formatTime(totalSeconds);

    countdown = setInterval(() => {
        totalSeconds--;

        if (totalSeconds < 0) {
            clearInterval(countdown);
            time.textContent = "00 : 00";

            section_table_exam.classList.remove("hidden");
            section_primary.classList.add("hidden");
            section_exam.classList.add("hidden");
            table.classList.remove("hidden");
            no_results.classList.add("hidden");
            section_file.classList.add("hidden");

            row_two_in_table.classList.remove("hidden");
            row_one_in_table.classList.add("hidden");
            btn_start_row_two_in_table.classList.remove("hidden");
            btn_start_row_one_in_table.classList.add("hidden");
            return;
        }

        time.textContent = formatTime(totalSeconds);
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    const questions = [...document.querySelectorAll('[data-question]')];
    const nextBtn = document.querySelector('[data-question-next]');
    const prevBtn = document.querySelector('[data-question-prev]');
    const numberDisplay = document.querySelector('[data-number-question-p]');
    const numberButtons = [...document.querySelectorAll('[data-number-question]')];

    let currentIndex = 0;
    const total = questions.length;

    function updateView() {
        questions.forEach((el, i) => {
            el.style.display = i === currentIndex ? 'block' : 'none';
        });

        if (numberDisplay) {
            numberDisplay.textContent = currentIndex + 1;
        }

        numberButtons.forEach((btn, i) => {
            if (i === currentIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    nextBtn?.addEventListener("click", () => {
        if (currentIndex < total - 1) {
            currentIndex++;
            updateView();
        }
    });

    prevBtn?.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateView();
        }
    });

    numberButtons.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            currentIndex = i;
            updateView();
        });
    });

    updateView();
});

open_div_open_file.forEach(ele => {
    ele.addEventListener("click", () => {
        section_table_exam.classList.add("hidden");
        section_primary.classList.add("hidden");
        section_exam.classList.add("hidden");
        section_file.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        if (countdown) {
            clearInterval(countdown);
            countdown = null;
        };
    });
});