const toggleBtn = document.querySelector(".docs-menu-toggle-btn");
const docsMenu = document.querySelector(".side-nav");

const docsMenuToggle = () => {
  docsMenu.classList.toggle("docs-menu-toggle");
  toggleBtn.classList.toggle("open");
  if (toggleBtn.classList.contains("open")) {
    toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
};

toggleBtn.addEventListener("click", docsMenuToggle);
