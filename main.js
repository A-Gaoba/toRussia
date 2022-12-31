// const headerBg = () => {
//   const header = document.querySelector(".js-header");
//   window.addEventListener("scroll", () => {
//     this.scrollY > 0
//       ? header.classList.add("bg-reveal")
//       : header.classList.remove("bg-reveal");
//   });
// };
// headerBg();

const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("isActive");
});

const menu_btn = document.querySelector(".hamburger");
const mobile_btn = document.querySelector(".mobile_nav");

menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("is-active");
  mobile_btn.classList.toggle("is-active");
});
