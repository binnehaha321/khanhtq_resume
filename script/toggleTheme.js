const TOGGLETHEME = () => {
  const html = document.querySelector("html");
  const toggleThemeBtn = document.querySelector(".toggle-theme-wrapper input");

  toggleThemeBtn.onclick = () => {
    if (html.getAttribute(["data-theme"]) === "light") {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
  };
};

export default TOGGLETHEME;
