const starsCheckBoxs = Object.values(document.querySelectorAll(".star"));
const starLabels = Object.values(document.querySelectorAll(".fa-star"));
const output = document.querySelector("#output");

for (let i = 0; i < starsCheckBoxs.length; i++) {
  if (starsCheckBoxs[i].checked) starLabels[i].classList.add("selected");
}

const clickHandler = (e) => {
  const count = e.target.value;
  for (let i = 0; i < starsCheckBoxs.length; i++) {
    if (i < count) {
      starsCheckBoxs[i].checked = true;
      starLabels[i].classList.add("selected");
    } else {
      starsCheckBoxs[i].checked = false;
      starLabels[i].classList.remove("selected");
    }
  }
};

starsCheckBoxs.forEach((star) => {
  star.addEventListener("click", (e) => clickHandler(e));
});
