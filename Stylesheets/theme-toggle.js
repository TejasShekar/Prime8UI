const themeBtn = document.querySelector(".theme-toggle");

const toggleTheme = () => {
  if (themeBtn.classList.contains("fa-moon")) {
    localStorage.setItem("prime8_theme", "dark");
    themeBtn.classList.remove("fa-moon");
    themeBtn.classList.add("fa-sun");
    document.documentElement.className = "dark-theme";
  } else {
    localStorage.setItem("prime8_theme", "light");
    themeBtn.classList.remove("fa-sun");
    themeBtn.classList.add("fa-moon");
    document.documentElement.className = "light-theme";
  }
};

const setTheme = (theme) => {
  const root = document.querySelector(":root");
  for (key in theme) {
    root.style.setProperty(key, theme[key]);
  }
};

themeBtn.addEventListener("click", toggleTheme);

if (localStorage.getItem("prime8_theme") === "dark") {
  document.documentElement.classList.toggle("dark-theme");
  themeBtn.classList.remove("fa-moon");
  themeBtn.classList.add("fa-sun");
} else {
  document.documentElement.classList.toggle("light-theme");
  themeBtn.classList.remove("fa-sun");
  themeBtn.classList.add("fa-moon");
}
