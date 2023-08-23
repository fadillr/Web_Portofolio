const filterSelect = document.getElementById("category");
const projectCards = document.querySelectorAll(".project-card");

filterSelect.addEventListener("change", function () {
  const selectedCategory = this.value;
  projectCards.forEach((card) => {
    card.style.display = "none";
    if (
      selectedCategory === "all" ||
      card.classList.contains(selectedCategory)
    ) {
      card.style.display = "block";
    }
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const contactForm = document.querySelector(".contact form");
const notification = document.querySelector(".notification");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  notification.style.display = "block";

  // Reset form after 3 seconds
  setTimeout(() => {
    notification.style.display = "none";
    contactForm.reset();
  }, 3000);
});
