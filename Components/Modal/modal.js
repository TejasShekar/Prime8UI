const dismissBtn = document.querySelector(".modal-dismiss-btn");
const showBtn = document.querySelector(".show-modal-btn");
const modal = document.querySelector(".modal");

dismissBtn.addEventListener("click", function dismissModal() {
  modal.style.display = "none";
});

showBtn.addEventListener("click", function showModal() {
  modal.style.display = "flex";
});
