let toggleBars = document.getElementById("toggle-bar");
let toggleBar = () => {
  let nav = document.getElementById("nav-links");
  nav.classList.toggle("active-nav");
};

window.addEventListener("scroll", function () {
  let header = this.document.querySelector(".nav");

  header.classList.toggle("sticky-header", window.scrollY > 150);
});
window.addEventListener("scroll", function () {
  let header = this.document.querySelector(".go-top");

  header.classList.toggle("go-top-active", window.scrollY > 150);
});
