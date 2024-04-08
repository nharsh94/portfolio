// Smooth scrolling with active state and offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const offset = 60; // Adjust as needed

    if (target) {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth"
      });

      // Add active class to clicked link
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");

      // Close mobile navigation menu if open
      const navMenu = document.querySelector("nav ul");
      navMenu.classList.remove("active");
    }
  });
});

// Scrollspy
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // Adjust offset
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = "#" + section.getAttribute("id");
    }
  });

  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentSection) {
      link.classList.add("active");
    }
  });
});

// Mobile Navigation Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});
