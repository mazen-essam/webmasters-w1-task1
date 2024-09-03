document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.add("active");
});

document.querySelector(".sidebar-close").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.remove("active");
});
