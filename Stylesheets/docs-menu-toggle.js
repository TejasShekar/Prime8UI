const toggleBtn = document.querySelector(".docs-menu-toggle-btn");
const docsMenu = document.querySelector(".side-nav");

const docsMenuToggle = () => {
  docsMenu.classList.toggle("docs-menu-toggle");
  toggleBtn.classList.toggle("open");
};

toggleBtn.addEventListener("click", docsMenuToggle);
