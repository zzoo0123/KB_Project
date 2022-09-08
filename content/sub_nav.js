const bars = document.querySelector(".bars");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".icon");
const user= document.querySelector(".user");
const find= document.querySelector(".find");

bars.addEventListener("click", () => {
  menu.classList.toggle("active");
  icon.classList.toggle("active");
});

