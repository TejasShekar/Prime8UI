const dismissBtn = document.querySelector(".dismiss-toast-btn");
const showBtn = document.querySelector(".show-toast-btn");
const toast = document.querySelector(".toast");

dismissBtn.addEventListener("click", function dismissToast() {
  toast.style.display = "none";
});

showBtn.addEventListener("click", function showToast() {
  toast.style.display = "flex";
  setTimeout(() => {
    toast.style.display = "none";
  }, 1500);
});
