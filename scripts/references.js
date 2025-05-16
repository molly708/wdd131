// Reference Section System
const sectionButtons = document.querySelectorAll(".section-button");
const sectionContents = document.querySelectorAll(".section-content");

sectionButtons.forEach(button => {
  button.addEventListener("click", () => {
    sectionButtons.forEach(btn => btn.classList.remove("active"));
    sectionContents.forEach(content => content.classList.remove("active"));

    button.classList.add("active");
    const target = document.getElementById(button.getAttribute("data-section"));
    target.classList.add("active");
  });
});