document.addEventListener("DOMContentLoaded", function() {
  // Footer Year & Last Modified Date
  document.querySelector("#year").textContent = new Date().getFullYear();
  document.querySelector("#last-modified").textContent = document.lastModified;

  // Responsive Hamburger Menu
  const menuToggle = document.querySelector("#menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", function() {
      nav.classList.toggle("show");
      menuToggle.textContent = nav.classList.contains("show") ? "✖" : "☰";
  });
});
