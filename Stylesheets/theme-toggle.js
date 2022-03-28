const lightTheme = {
  "--primary": "#d87e00",
  "--bg-color": "#ffffff",
  "--text-color": "#000",
  "--link-color": "#000"
};

const darkTheme = {
    "--primary": "#eea53f",
    "--bg-color": "#252525",
    "--text-color": "#e0e0e0",
    "--link-color": "#eea53f"
};

const toggleTheme = () => {
  if (themeBtn.classList.contains("fa-moon")) {
    localStorage.setItem("xTheme", "dark");
    themeBtn.classList.add("fa-sun");
    themeBtn.classList.remove("fa-moon");
    setTheme(darkTheme);
  } else {
    localStorage.setItem("xTheme", "light");
    themeBtn.classList.remove("fa-sun");
    themeBtn.classList.add("fa-moon");
    setTheme(lightTheme);
  }
};

const setTheme = (theme) => {
  const root = document.querySelector(":root");
  for (key in theme) {
    root.style.setProperty(key, theme[key]);
  }
};

const themeBtn = document.querySelector(".theme-toggle");
themeBtn.addEventListener("click", toggleTheme);

if (localStorage.getItem("xTheme") === "dark") {
  setTheme(darkTheme);
  themeBtn.classList.add("fa-sun");
  themeBtn.classList.remove("fa-moon");
}
