const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".project__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".experience__list li", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".footer__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".footer__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".footer__container .mail__to", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".footer__socials", {
  ...scrollRevealOption,
  delay: 1500,
});
