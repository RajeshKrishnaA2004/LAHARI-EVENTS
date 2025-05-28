// Example: Mobile nav toggle (if a hamburger menu is implemented in the future)

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("nav ul");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  AOS.init({
    duration: 1000, // optional: set global animation duration
    easing: "ease-in-out", // optional
    once: true, // optional: only animate once
  });
});
const testimonials = document.querySelectorAll(".testimonial");
let current = 0;

document.getElementById("next").addEventListener("click", () => {
  testimonials[current].classList.remove("active");
  current = (current + 1) % testimonials.length;
  testimonials[current].classList.add("active");
});

document.getElementById("prev").addEventListener("click", () => {
  testimonials[current].classList.remove("active");
  current = (current - 1 + testimonials.length) % testimonials.length;
  testimonials[current].classList.add("active");
});
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
}
