const hamburger = document.querySelector(
  ".header .navbar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .navbar .nav-list ul");
const header = document.querySelector(".header .container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});
