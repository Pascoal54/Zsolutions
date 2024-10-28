 'use strict';

/**
 * Navbar toggle
 */
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * Toggle navbar & overlay when clicking any navbar link
 */
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

navbarLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    // Previne o comportamento padrão do link
    e.preventDefault();
    const targetId = this.getAttribute('href'); // Obtém o valor do href

    // Rolagem suave para o alvo
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start' // Alinha ao topo da janela
    });

    // Fecha a navbar
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
});

/**
 * Header & go-top-btn active when window scroll down to 400px
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});