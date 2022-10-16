const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");
const backdrop = document.querySelector(".backdrop");

hamburger.addEventListener("click", function () {
  close.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  backdrop.classList.toggle("hidden");
});
close.addEventListener("click", function () {
  close.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  backdrop.classList.toggle("hidden");
});

backdrop.addEventListener("click", function () {
  backdrop.classList.add("hidden");
  nav.classList.toggle("hidden");
  close.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
});
