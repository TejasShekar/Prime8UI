const dismissBtn = document.querySelector(".dismiss-btn");
const showBtn = document.querySelector('.show-card-btn');
const card = dismissBtn.parentElement;

dismissBtn.addEventListener("click", function dismissCard() {
  card.style.display = "none";
  showBtn.style.display = "block";
});

showBtn.addEventListener("click", function showCard() {
    card.style.display = "block";
    showBtn.style.display = "none";
  });