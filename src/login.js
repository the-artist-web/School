/**
 * TOGGLE LOGIN
 */
const forgot_password = document.querySelector("[data-forgot-password]");
const toggle_login = document.querySelector("[data-toggle-login]");
const div_login = document.querySelector("[data-div-login]");
const div_login_code = document.querySelector("[data-div-login-code]");
const circle = toggle_login.querySelector(".circle");
const icon_yes = toggle_login.querySelector(".icon-yes");

toggle_login.addEventListener("click", (e) => {
    e.stopPropagation();

    toggle_login.classList.toggle("bg-[#164e63]");
    circle.classList.toggle("right-[3px]");
    circle.classList.toggle("left-[3px]");
    icon_yes.classList.toggle("hidden");

    div_login.classList.toggle("hidden");
    div_login_code.classList.toggle("hidden");
    forgot_password.classList.toggle("hidden");
});