const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const branding = document.querySelector(".nav-branding");
const xxx = document.querySelector(".opa");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  branding.classList.toggle("opacity");
  xxx.classList.toggle("opacity");
  if (!hamburger.classList.contains("active")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    branding.classList.remove("opacity");
    xxx.classList.remove("opacity");
    body.style.overflow = "auto";
  })
);
