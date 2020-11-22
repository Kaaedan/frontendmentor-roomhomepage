const opennav = document.getElementById("opennav");
const closenav = document.getElementById("closenav");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

opennav.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.add("show");
});

closenav.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.remove("show");
});
